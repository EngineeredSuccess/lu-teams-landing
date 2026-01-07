-- NAPRAWA UPRAWNIEŃ DO SCHEMATU PUBLIC
-- Uruchom to w Supabase SQL Editor
-- Ten SQL dodaje uprawnienia dla service_role i anon

-- Dodaj uprawnienia dla service_role
GRANT USAGE ON SCHEMA public TO service_role;
GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO service_role;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA public TO service_role;

-- Dodaj uprawnienia dla anon (public access)
GRANT USAGE ON SCHEMA public TO anon;
GRANT INSERT ON beta_applications TO anon;
GRANT SELECT ON beta_applications TO authenticated;

-- Sprawdź czy zadziałało (opcjonalne)
SELECT 
    grantee, 
    privilege_type 
FROM information_schema.table_privileges 
WHERE table_name = 'beta_applications'
ORDER BY grantee, privilege_type;
