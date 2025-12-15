-- Add email tracking columns to waitlist table
-- Run this in Supabase SQL Editor

-- Add welcome_email_sent column (boolean, defaults to false)
ALTER TABLE waitlist 
ADD COLUMN IF NOT EXISTS welcome_email_sent BOOLEAN DEFAULT FALSE;

-- Add beta_invitation_sent_at column (timestamp, nullable)
ALTER TABLE waitlist 
ADD COLUMN IF NOT EXISTS beta_invitation_sent_at TIMESTAMPTZ DEFAULT NULL;

-- Add feedback_request_sent_at column (timestamp, nullable)
ALTER TABLE waitlist 
ADD COLUMN IF NOT EXISTS feedback_request_sent_at TIMESTAMPTZ DEFAULT NULL;

-- Update existing records to have welcome_email_sent = true 
-- (assuming they already received the welcome email)
UPDATE waitlist 
SET welcome_email_sent = TRUE 
WHERE welcome_email_sent IS NULL OR welcome_email_sent = FALSE;

-- Add indexes for the cron job queries
CREATE INDEX IF NOT EXISTS idx_waitlist_welcome_email_sent 
ON waitlist (welcome_email_sent);

CREATE INDEX IF NOT EXISTS idx_waitlist_beta_invitation 
ON waitlist (beta_invitation_sent_at);

CREATE INDEX IF NOT EXISTS idx_waitlist_feedback_request 
ON waitlist (feedback_request_sent_at);

-- Composite index for beta invitation eligibility query
CREATE INDEX IF NOT EXISTS idx_waitlist_beta_eligible 
ON waitlist (created_at, welcome_email_sent, beta_invitation_sent_at);

-- Composite index for feedback request eligibility query  
CREATE INDEX IF NOT EXISTS idx_waitlist_feedback_eligible 
ON waitlist (beta_invitation_sent_at, feedback_request_sent_at);