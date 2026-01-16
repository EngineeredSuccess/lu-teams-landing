import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

// Validation schema - flexible to support beta, coaching, and waitlist
const betaApplicationSchema = z.object({
    applicationType: z.enum(["beta", "coaching", "waitlist"]), // Added waitlist
    email: z.string().email("Please enter a valid email address"),
    fullName: z.string().min(2, "Please enter your full name").optional(), // Optional for waitlist
    role: z.string().min(2, "Please enter your role").optional(), // Optional for waitlist
}).passthrough(); // Allow additional fields without validation

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
        // Parse request body
        const body = await request.json();

        // Validate input
        const validationResult = betaApplicationSchema.safeParse(body);

        if (!validationResult.success) {
            return NextResponse.json(
                {
                    success: false,
                    error: validationResult.error.errors[0].message
                },
                { status: 400 }
            );
        }

        const { applicationType, email, fullName, role } = validationResult.data;

        // Additional validation for non-waitlist types
        if (applicationType !== "waitlist" && (!fullName || !role)) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Full Name and Role are required for this application type."
                },
                { status: 400 }
            );
        }

        // Check if Supabase is configured
        if (!isSupabaseConfigured()) {
            console.log("Supabase not configured - simulating success for development");

            // Return mock success for development/demo purposes
            return NextResponse.json(
                {
                    success: true,
                    message: `Application submitted! (Demo mode - ${applicationType})`,
                    count: 42 // Mock count
                },
                { status: 201 }
            );
        }

        // Initialize Supabase client with service_role key (has full permissions)
        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.SUPABASE_SERVICE_ROLE_KEY!
        );

        // Prepare application entry based on type
        const applicationEntry: Record<string, unknown> = {
            application_type: applicationType,
            email: email.toLowerCase().trim(),
            // Only add these if they exist (or use empty string if you prefer, but undefined is cleaner for partial updates if schema allows nulls, though here we just skip them)
            full_name: fullName?.trim() || "",
            role: role?.trim() || "",
        };

        // Add beta-specific fields
        if (applicationType === "beta") {
            applicationEntry.company = body.company?.trim();
            applicationEntry.team_size = body.teamSize;
            applicationEntry.technical_background = body.technicalBackground;
            applicationEntry.challenge = body.challenge?.trim();
        }

        // Add coaching-specific fields
        if (applicationType === "coaching") {
            applicationEntry.company = body.companySize?.trim(); // Map companySize to company
            applicationEntry.team_size = body.teamSize;
            applicationEntry.years_in_leadership = body.yearsInLeadership;
            applicationEntry.challenge = body.specificChallenge?.trim(); // Map specificChallenge to challenge
            applicationEntry.why_coaching = body.whyCoaching?.trim();
            applicationEntry.budget_range = body.budgetRange;
        }

        // Add waitlist-specific fields (metadata mostly)
        if (applicationType === "waitlist") {
            // We can store metadata in a generic field if it exists, or just the basics
            // For now, email and type is enough.
        }

        // Insert into Supabase (simple insert now that schema is fixed)
        const { data, error } = await supabase
            .from("beta_applications")
            .insert([applicationEntry])
            .select('id, email, created_at')
            .single();

        if (error) {
            console.error("Supabase insert error:", error);

            // Check for duplicate email
            if (error.code === "23505" || error.message?.includes("duplicate")) {
                return NextResponse.json(
                    { success: false, error: "This email has already been submitted!" },
                    { status: 409 }
                );
            }

            return NextResponse.json(
                { success: false, error: "Failed to submit application. Please try again." },
                { status: 500 }
            );
        }

        // Get total count of applications
        const { count } = await supabase
            .from("beta_applications")
            .select("*", { count: "exact", head: true });

        return NextResponse.json(
            {
                success: true,
                message: "Application submitted successfully!",
                count: count || 0
            },
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
