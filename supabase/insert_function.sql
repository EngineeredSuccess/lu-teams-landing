-- ====================================================================
-- SQL FUNCTION TO INSERT APPLICATIONS (Bypass PostgREST Schema Cache)
-- ====================================================================
-- Run this in Supabase SQL Editor to fix the schema cache issue
-- ====================================================================

CREATE OR REPLACE FUNCTION insert_beta_application(
    p_application_type VARCHAR,
    p_email TEXT,
    p_full_name TEXT,
    p_role TEXT,
    p_company TEXT DEFAULT NULL,
    p_team_size TEXT DEFAULT NULL,
    p_technical_background TEXT DEFAULT NULL,
    p_challenge TEXT DEFAULT NULL,
    p_years_in_leadership VARCHAR DEFAULT NULL,
    p_why_coaching TEXT DEFAULT NULL,
    p_budget_range VARCHAR DEFAULT NULL
)
RETURNS TABLE (
    id UUID,
    email TEXT,
    created_at TIMESTAMP WITH TIME ZONE
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    RETURN QUERY
    INSERT INTO beta_applications (
        application_type,
        email,
        full_name,
        role,
        company,
        team_size,
        technical_background,
        challenge,
        years_in_leadership,
        why_coaching,
        budget_range
    ) VALUES (
        p_application_type,
        LOWER(TRIM(p_email)),
        TRIM(p_full_name),
        TRIM(p_role),
        p_company,
        p_team_size,
        p_technical_background,
        p_challenge,
        p_years_in_leadership,
        p_why_coaching,
        p_budget_range
    )
    RETURNING id, email, created_at;
END;
$$;

-- Grant execute permission to anon users (for public form submissions)
GRANT EXECUTE ON FUNCTION insert_beta_application TO anon;
GRANT EXECUTE ON FUNCTION insert_beta_application TO authenticated;

-- Test the function
SELECT * FROM insert_beta_application(
    'beta',
    'test@example.com',
    'Test User',
    'CTO',
    'Test Company',
    '1-5',
    'cto',
    'This is a test challenge submission to verify the function works correctly.',
    NULL,
    NULL,
    NULL
);
