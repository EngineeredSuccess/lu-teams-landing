-- ====================================================================
-- SZYBKA NAPRAWA: Dodaj brakującą kolumnę application_type
-- ====================================================================
-- Uruchom to w Supabase SQL Editor
-- ====================================================================

-- 1. Sprawdź obecną strukturę tabeli
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'beta_applications'
ORDER BY ordinal_position;

-- 2. Dodaj kolumnę application_type (jeśli nie istnieje)
ALTER TABLE beta_applications 
ADD COLUMN IF NOT EXISTS application_type VARCHAR(20) DEFAULT 'beta';

-- 3. Dodaj kolumny coaching (jeśli nie istnieją)
ALTER TABLE beta_applications 
ADD COLUMN IF NOT EXISTS years_in_leadership VARCHAR(20);

ALTER TABLE beta_applications 
ADD COLUMN IF NOT EXISTS why_coaching TEXT;

ALTER TABLE beta_applications 
ADD COLUMN IF NOT EXISTS budget_range VARCHAR(50);

-- 4. Zaktualizuj istniejące rekordy
UPDATE beta_applications 
SET application_type = 'beta' 
WHERE application_type IS NULL;

-- 5. Dodaj index
CREATE INDEX IF NOT EXISTS idx_application_type ON beta_applications(application_type);

-- 6. Sprawdź strukturę ponownie
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'beta_applications'
ORDER BY ordinal_position;
