import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

// Validation schema for beta applications
const applicationSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    fullName: z.string().min(2, "Please enter your full name"),
    role: z.string().min(2, "Please enter your role"),
    company: z.string().min(2, "Please enter your company"),
    teamSize: z.enum(["1-5", "6-15", "16-50", "50+"], {
        errorMap: () => ({ message: "Please select a team size" }),
    }),
    technicalBackground: z.enum(["eng-lead", "dev-mgr", "cto", "other"], {
        errorMap: () => ({ message: "Please select your technical background" }),
    }),
    challenge: z.string().min(50, "Please describe your challenge (minimum 50 characters)"),
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
        // Parse request body
        const body = await request.json();

        // Validate input
        const validationResult = applicationSchema.safeParse(body);

        if (!validationResult.success) {
            return NextResponse.json(
                {
                    success: false,
                    error: validationResult.error.errors[0].message
                },
                { status: 400 }
            );
        }

        const { email, fullName, role, company, teamSize, technicalBackground, challenge } = validationResult.data;

        // Check if Supabase is configured
        if (!isSupabaseConfigured()) {
            console.log("Supabase not configured - simulating success for development");

            // Return mock success for development/demo purposes
            return NextResponse.json(
                {
                    success: true,
                    message: "Application submitted! (Demo mode - configure Supabase for production)",
                    count: 42 // Mock count
                },
                { status: 201 }
            );
        }

        // Initialize Supabase client
        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );

        // Prepare application entry
        const applicationEntry = {
            email: email.toLowerCase().trim(),
            full_name: fullName.trim(),
            role: role.trim(),
            company: company.trim(),
            team_size: teamSize,
            technical_background: technicalBackground,
            challenge: challenge.trim(),
        };

        // Insert into Supabase
        const { error } = await supabase
            .from("beta_applications")
            .insert([applicationEntry]);

        if (error) {
            // Check for duplicate email (unique constraint violation)
            if (error.code === "23505") {
                return NextResponse.json(
                    {
                        success: false,
                        error: "This email has already been submitted!"
                    },
                    { status: 409 }
                );
            }

            console.error("Supabase error:", error);
            return NextResponse.json(
                {
                    success: false,
                    error: "Failed to submit application. Please try again."
                },
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
