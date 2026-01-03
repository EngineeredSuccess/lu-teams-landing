-- Beta Applications Schema for LU Teams
-- This replaces the simple waitlist with a comprehensive application system
-- Run this in your Supabase SQL Editor

-- Create the beta_applications table
CREATE TABLE IF NOT EXISTS beta_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Contact Information
  email TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  
  -- Professional Context
  role TEXT NOT NULL,
  company TEXT NOT NULL,
  team_size TEXT NOT NULL, -- '1-5', '6-15', '16-50', '50+'
  technical_background TEXT NOT NULL, -- 'eng-lead', 'dev-mgr', 'cto', 'other'
  
  -- Challenge Description
  challenge TEXT NOT NULL,
  
  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Constraints
  CONSTRAINT challenge_min_length CHECK (char_length(challenge) >= 50)
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_applications_email ON beta_applications(email);
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON beta_applications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_applications_background ON beta_applications(technical_background);

-- Enable Row Level Security
ALTER TABLE beta_applications ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public inserts (for the application form)
CREATE POLICY "Allow public application submissions" ON beta_applications
  FOR INSERT
  WITH CHECK (true);

-- Policy: Allow authenticated users to read (for admin dashboard)
CREATE POLICY "Allow authenticated read applications" ON beta_applications
  FOR SELECT
  TO authenticated
  USING (true);

-- Function to update the updated_at timestamp (reuse existing if available)
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically update updated_at
CREATE TRIGGER update_applications_updated_at
  BEFORE UPDATE ON beta_applications
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Comment on table
COMMENT ON TABLE beta_applications IS 'Stores beta program applications with qualification fields';
COMMENT ON COLUMN beta_applications.team_size IS 'Team size range: 1-5, 6-15, 16-50, or 50+';
COMMENT ON COLUMN beta_applications.technical_background IS 'Leadership type: eng-lead, dev-mgr, cto, or other';
COMMENT ON COLUMN beta_applications.challenge IS 'Current leadership challenge (minimum 50 characters)';
