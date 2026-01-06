-- ====================================================================
-- NAPRAWA UPRAWNIEŃ: Dodaj RLS Policy dla INSERT
-- ====================================================================
-- Błąd: permission denied for table beta_applications
-- Rozwiązanie: Dodaj policy pozwalającą na publiczne INSERT
-- ====================================================================

-- 1. Włącz RLS (jeśli nie włączony)
ALTER TABLE beta_applications ENABLE ROW LEVEL SECURITY;

-- 2. Usuń starą policy jeśli istnieje (na wypadek konfliktu)
DROP POLICY IF EXISTS "Allow public application submissions" ON beta_applications;

-- 3. Dodaj policy pozwalającą na publiczne INSERT
CREATE POLICY "Allow public application submissions" 
ON beta_applications
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- 4. Dodaj policy pozwalającą authenticated użytkownikom czytać dane
DROP POLICY IF EXISTS "Allow authenticated read applications" ON beta_applications;

CREATE POLICY "Allow authenticated read applications" 
ON beta_applications
FOR SELECT
TO authenticated
USING (true);

-- 5. Sprawdź czy policies zostały dodane
SELECT 
    schemaname, 
    tablename, 
    policyname, 
    permissive, 
    roles, 
    cmd
FROM pg_policies
WHERE tablename = 'beta_applications';

-- WYNIK:
-- Powinieneś zobaczyć dwie policy:
-- 1. "Allow public application submissions" dla INSERT (anon, authenticated)
-- 2. "Allow authenticated read applications" dla SELECT (authenticated)
