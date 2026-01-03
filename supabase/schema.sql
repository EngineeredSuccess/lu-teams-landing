-- Supabase SQL Schema for LU Teams Waitlist
-- Run this in your Supabase SQL Editor

-- Create the waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  company TEXT,
  role TEXT,
  industry TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for email lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Create index for created_at to sort by signup date
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at DESC);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public inserts (for the waitlist form)
CREATE POLICY "Allow public inserts" ON waitlist
  FOR INSERT
  WITH CHECK (true);

-- Policy: Allow authenticated users to read (for admin dashboard)
CREATE POLICY "Allow authenticated read" ON waitlist
  FOR SELECT
  TO authenticated
  USING (true);

-- Function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically update updated_at
CREATE TRIGGER update_waitlist_updated_at
  BEFORE UPDATE ON waitlist
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Comment on table
COMMENT ON TABLE waitlist IS 'Stores beta waitlist signups for LU Teams';

-- ==========================================
-- BLOG SCHEMA
-- ==========================================

-- Create the posts table
CREATE TABLE IF NOT EXISTS posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL,
  lang TEXT NOT NULL DEFAULT 'en', -- 'en' or 'pl'
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT, -- Markdown content
  meta_title TEXT,
  meta_description TEXT,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(slug, lang) -- Unique slug per language
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_posts_slug_lang ON posts(slug, lang);
CREATE INDEX IF NOT EXISTS idx_posts_published_at ON posts(published_at DESC);

-- Enable Row Level Security
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Policy: Public read access for published posts
CREATE POLICY "Allow public read published posts" ON posts
  FOR SELECT
  USING (published_at IS NOT NULL AND published_at <= NOW());

-- Policy: Admin read/write (Server-side API will use Service Role to bypass this if needed, 
-- or we can add authenticated policy if using Supabase Auth for admins)
CREATE POLICY "Allow authenticated full access" ON posts
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Trigger to automatically update updated_at for posts
CREATE TRIGGER update_posts_updated_at
  BEFORE UPDATE ON posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

COMMENT ON TABLE posts IS 'Stores blog posts including translations';