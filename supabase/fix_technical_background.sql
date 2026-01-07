-- UCZYŃ TECHNICAL_BACKGROUND OPCJONALNYM
-- Formularz coaching nie używa tego pola, więc musi być nullable

ALTER TABLE beta_applications 
ALTER COLUMN technical_background DROP NOT NULL;

-- Sprawdź czy zadziałało
SELECT column_name, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'beta_applications' 
AND column_name = 'technical_background';
