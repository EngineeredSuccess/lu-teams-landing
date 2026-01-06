-- ====================================================================
-- DUAL FORM MIGRATION FOR LU TEAMS
-- ====================================================================
-- This migration adds support for two application types: 'beta' and 'coaching'
-- Run this in your Supabase SQL Editor
-- ====================================================================

-- STEP 1: Create the base table if it doesn't exist
-- (If you already ran schema_application.sql, this will be skipped safely)
CREATE TABLE IF NOT EXISTS beta_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Contact Information
  email TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  
  -- Professional Context
  role TEXT NOT NULL,
  company TEXT,
  team_size TEXT,
  technical_background TEXT,
  
  -- Challenge Description
  challenge TEXT,
  
  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- STEP 2: Add application_type column (NEW for dual form system)
-- Default is 'beta' to support existing records
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'beta_applications' 
    AND column_name = 'application_type'
  ) THEN
    ALTER TABLE beta_applications 
    ADD COLUMN application_type VARCHAR(20) DEFAULT 'beta';
  END IF;
END $$;

-- STEP 3: Add coaching-specific columns (nullable for beta applications)
DO $$ 
BEGIN
  -- years_in_leadership
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'beta_applications' 
    AND column_name = 'years_in_leadership'
  ) THEN
    ALTER TABLE beta_applications 
    ADD COLUMN years_in_leadership VARCHAR(20);
  END IF;

  -- why_coaching
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'beta_applications' 
    AND column_name = 'why_coaching'
  ) THEN
    ALTER TABLE beta_applications 
    ADD COLUMN why_coaching TEXT;
  END IF;

  -- budget_range
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'beta_applications' 
    AND column_name = 'budget_range'
  ) THEN
    ALTER TABLE beta_applications 
    ADD COLUMN budget_range VARCHAR(50);
  END IF;
END $$;

-- STEP 4: Update existing records to have 'beta' type
UPDATE beta_applications
SET application_type = 'beta'
WHERE application_type IS NULL;

-- STEP 5: Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_applications_email ON beta_applications(email);
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON beta_applications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_application_type ON beta_applications(application_type);

-- STEP 6: Enable Row Level Security (if not already enabled)
ALTER TABLE beta_applications ENABLE ROW LEVEL SECURITY;

-- STEP 7: Create policies (these will error if already exist, that's OK)
DO $$ 
BEGIN
  -- Policy for public inserts
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'beta_applications' 
    AND policyname = 'Allow public application submissions'
  ) THEN
    CREATE POLICY "Allow public application submissions" ON beta_applications
      FOR INSERT
      WITH CHECK (true);
  END IF;

  -- Policy for authenticated reads
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'beta_applications' 
    AND policyname = 'Allow authenticated read applications'
  ) THEN
    CREATE POLICY "Allow authenticated read applications" ON beta_applications
      FOR SELECT
      TO authenticated
      USING (true);
  END IF;
END $$;

-- STEP 8: Create or replace the update trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- STEP 9: Create the trigger (drop first if exists)
DROP TRIGGER IF EXISTS update_applications_updated_at ON beta_applications;
CREATE TRIGGER update_applications_updated_at
  BEFORE UPDATE ON beta_applications
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- STEP 10: Add helpful comments
COMMENT ON TABLE beta_applications IS 'Stores beta and coaching applications with dual form support';
COMMENT ON COLUMN beta_applications.application_type IS 'Type of application: beta or coaching';
COMMENT ON COLUMN beta_applications.years_in_leadership IS 'Coaching only: years in technical leadership';
COMMENT ON COLUMN beta_applications.why_coaching IS 'Coaching only: reason for choosing intensive coaching';
COMMENT ON COLUMN beta_applications.budget_range IS 'Coaching only: budget/investment range';

-- ====================================================================
-- VERIFICATION QUERY
-- ====================================================================
-- Run this to verify the migration worked:
SELECT 
  application_type, 
  COUNT(*) as count
FROM beta_applications 
GROUP BY application_type;

-- Expected result:
-- If you have existing records, they should all show as 'beta'
-- New submissions will show as 'beta' or 'coaching'
