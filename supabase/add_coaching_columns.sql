-- Sprawdź czy istnieją kolumny dla coaching
SELECT column_name 
FROM information_schema.columns
WHERE table_name = 'beta_applications'
AND column_name IN ('why_coaching', 'budget_range');

-- Jeśli zwróci pusty result - dodaj je:
ALTER TABLE beta_applications 
ADD COLUMN IF NOT EXISTS why_coaching TEXT;

ALTER TABLE beta_applications 
ADD COLUMN IF NOT EXISTS budget_range VARCHAR(50);

-- Sprawdź wszystkie kolumny ponownie
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'beta_applications'
ORDER BY ordinal_position;
