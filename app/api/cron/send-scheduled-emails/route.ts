import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { resend, isResendConfigured } from "@/lib/resend";
import { getBetaInvitationHtml, getBetaInvitationPlainText } from "@/lib/emails/beta-invitation";
import { getFeedbackRequestHtml, getFeedbackRequestPlainText } from "@/lib/emails/feedback-request";

// Verify cron secret to prevent unauthorized access
function verifyCronSecret(request: Request): boolean {
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;
  
  // If no secret is set, allow in development
  if (!cronSecret) {
    console.log("CRON_SECRET not set - allowing request");
    return true;
  }
  
  return authHeader === `Bearer ${cronSecret}`;
}

export async function GET(request: Request) {
  // Verify authorization
  if (!verifyCronSecret(request)) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const results = {
    betaInvitations: { sent: 0, failed: 0 },
    feedbackRequests: { sent: 0, failed: 0 },
    errors: [] as string[],
  };

  try {
    // Check if services are configured
    if (!isResendConfigured()) {
      return NextResponse.json(
        { error: "Resend not configured" },
        { status: 500 }
      );
    }

    const supabase = getSupabase();
    const now = new Date();
    const fromEmail = process.env.RESEND_FROM_EMAIL || "LU Teams <noreply@luteams.com>";

    // 1. Send Beta Invitation emails (3 days after signup)
    const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);
    
    const { data: betaEligible, error: betaError } = await supabase
      .from("waitlist")
      .select("*")
      .lte("created_at", threeDaysAgo.toISOString())
      .is("beta_invitation_sent_at", null)
      .eq("welcome_email_sent", true);

    if (betaError) {
      results.errors.push(`Beta query error: ${betaError.message}`);
    } else if (betaEligible && betaEligible.length > 0) {
      console.log(`Found ${betaEligible.length} users eligible for beta invitation`);
      
      for (const user of betaEligible) {
        try {
          await resend!.emails.send({
            from: fromEmail,
            to: user.email,
            subject: "Your Beta Access is Ready! 🎉",
            html: getBetaInvitationHtml(user.name || undefined),
            text: getBetaInvitationPlainText(user.name || undefined),
          });

          // Update the record
          await supabase
            .from("waitlist")
            .update({ beta_invitation_sent_at: now.toISOString() })
            .eq("id", user.id);

          results.betaInvitations.sent++;
          console.log(`Beta invitation sent to: ${user.email}`);
        } catch (emailError) {
          results.betaInvitations.failed++;
          results.errors.push(`Failed to send beta invitation to ${user.email}: ${emailError}`);
        }
      }
    }

    // 2. Send Feedback Request emails (14 days after beta invitation)
    const fourteenDaysAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);
    
    const { data: feedbackEligible, error: feedbackError } = await supabase
      .from("waitlist")
      .select("*")
      .lte("beta_invitation_sent_at", fourteenDaysAgo.toISOString())
      .is("feedback_request_sent_at", null)
      .not("beta_invitation_sent_at", "is", null);

    if (feedbackError) {
      results.errors.push(`Feedback query error: ${feedbackError.message}`);
    } else if (feedbackEligible && feedbackEligible.length > 0) {
      console.log(`Found ${feedbackEligible.length} users eligible for feedback request`);
      
      for (const user of feedbackEligible) {
        try {
          await resend!.emails.send({
            from: fromEmail,
            to: user.email,
            subject: "How's Your LU Teams Experience? 💭",
            html: getFeedbackRequestHtml(user.name || undefined),
            text: getFeedbackRequestPlainText(user.name || undefined),
          });

          // Update the record
          await supabase
            .from("waitlist")
            .update({ feedback_request_sent_at: now.toISOString() })
            .eq("id", user.id);

          results.feedbackRequests.sent++;
          console.log(`Feedback request sent to: ${user.email}`);
        } catch (emailError) {
          results.feedbackRequests.failed++;
          results.errors.push(`Failed to send feedback request to ${user.email}: ${emailError}`);
        }
      }
    }

    return NextResponse.json({
      success: true,
      timestamp: now.toISOString(),
      results,
    });
  } catch (error) {
    console.error("Cron job error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: String(error) },
      { status: 500 }
    );
  }
}