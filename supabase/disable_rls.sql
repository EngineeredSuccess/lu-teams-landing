-- TYMCZASOWE ROZWIĄZANIE: Wyłącz RLS dla testów
-- Uruchom to w Supabase SQL Editor

-- Wyłącz RLS na tabeli beta_applications
ALTER TABLE beta_applications DISABLE ROW LEVEL SECURITY;

-- UWAGA: To rozwiązanie jest tylko na czas testów!
-- Po zakończeniu testów włącz RLS ponownie i napraw policy:
-- ALTER TABLE beta_applications ENABLE ROW LEVEL SECURITY;
