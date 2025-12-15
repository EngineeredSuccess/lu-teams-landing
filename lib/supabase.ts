import { createClient, SupabaseClient } from "@supabase/supabase-js";

let supabaseInstance: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (supabaseInstance) {
    return supabaseInstance;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Missing Supabase environment variables. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY"
    );
  }

  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  return supabaseInstance;
}

// Types for the waitlist table
export interface WaitlistEntry {
  id?: string;
  email: string;
  name?: string | null;
  company?: string | null;
  role?: string | null;
  industry?: string | null;
  created_at?: string;
  updated_at?: string;
  // Email tracking fields
  welcome_email_sent?: boolean;
  beta_invitation_sent_at?: string | null;
  feedback_request_sent_at?: string | null;
}