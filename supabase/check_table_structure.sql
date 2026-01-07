-- SPRAWDZENIE STRUKTURY TABELI
-- Uruchom to w Supabase SQL Editor, żeby zobaczyć obecną strukturę

SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'beta_applications'
ORDER BY ordinal_position;
