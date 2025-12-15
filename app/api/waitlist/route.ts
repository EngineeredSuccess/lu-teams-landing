import { NextResponse } from "next/server";
import { z } from "zod";
import { getSupabase, WaitlistEntry } from "@/lib/supabase";
import { resend, isResendConfigured } from "@/lib/resend";
import { getWaitlistWelcomeHtml, getWaitlistWelcomePlainText } from "@/lib/emails/waitlist-welcome";

// Validation schema
const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().optional(),
  company: z.string().optional(),
  role: z.string().optional(),
  industry: z.string().optional(),
});

// Check if Supabase is configured
function isSupabaseConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  return !!(
    url &&
    key &&
    !url.includes("placeholder") &&
    !key.includes("placeholder")
  );
}

export async function POST(request: Request) {
  try {
    // Check if Supabase is configured
    if (!isSupabaseConfigured()) {
      console.log("Supabase not configured - simulating success for development");
      
      // Parse and validate the request anyway for development testing
      const body = await request.json();
      const validationResult = waitlistSchema.safeParse(body);
      
      if (!validationResult.success) {
        return NextResponse.json(
          { success: false, error: validationResult.error.errors[0].message },
          { status: 400 }
        );
      }
      
      // Return success for development/demo purposes
      return NextResponse.json(
        {
          success: true,
          message: "You're on the list! (Demo mode - configure Supabase for production)"
        },
        { status: 201 }
      );
    }

    // Parse request body
    const body = await request.json();

    // Validate input
    const validationResult = waitlistSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { success: false, error: validationResult.error.errors[0].message },
        { status: 400 }
      );
    }

    const { email, name, company, role, industry } = validationResult.data;

    // Prepare entry
    const entry: WaitlistEntry = {
      email: email.toLowerCase().trim(),
      name: name?.trim() || null,
      company: company?.trim() || null,
      role: role?.trim() || null,
      industry: industry || null,
      welcome_email_sent: false,
    };

    // Insert into Supabase
    const supabase = getSupabase();
    const { data: insertedData, error } = await supabase
      .from("waitlist")
      .insert([entry])
      .select()
      .single();

    if (error) {
      // Check for duplicate email (unique constraint violation)
      if (error.code === "23505") {
        return NextResponse.json(
          { success: false, error: "This email is already on the waitlist!" },
          { status: 409 }
        );
      }

      console.error("Supabase error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to join waitlist. Please try again." },
        { status: 500 }
      );
    }

    // Send welcome email via Resend (non-blocking)
    console.log("Checking Resend config - isConfigured:", isResendConfigured(), "resend client exists:", !!resend);
    
    if (isResendConfigured() && resend) {
      try {
        // Use verified domain (luteams.com)
        const fromEmail = process.env.RESEND_FROM_EMAIL || "LU Teams <noreply@luteams.com>";
        
        console.log("Sending email from:", fromEmail, "to:", email);
        
        const emailResult = await resend.emails.send({
          from: fromEmail,
          to: email,
          subject: "Welcome to LU Teams Beta! 🚀",
          html: getWaitlistWelcomeHtml(name || undefined),
          text: getWaitlistWelcomePlainText(name || undefined),
        });
        console.log("Welcome email sent successfully:", JSON.stringify(emailResult));
        
        // Update record to mark welcome email as sent
        if (insertedData?.id) {
          await supabase
            .from("waitlist")
            .update({ welcome_email_sent: true })
            .eq("id", insertedData.id);
        }
      } catch (emailError) {
        // Log but don't fail the request if email fails
        console.error("Failed to send welcome email:", emailError);
      }
    } else {
      console.log("Resend not configured - RESEND_API_KEY:", process.env.RESEND_API_KEY ? "set (length: " + process.env.RESEND_API_KEY.length + ")" : "NOT SET");
    }

    return NextResponse.json(
      { success: true, message: "You're on the list!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}