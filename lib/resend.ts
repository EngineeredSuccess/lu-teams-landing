import { Resend } from "resend";

// Initialize Resend client
const resendApiKey = process.env.RESEND_API_KEY;

export const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Check if Resend is configured
export function isResendConfigured(): boolean {
  return !!resendApiKey && !resendApiKey.includes("placeholder");
}