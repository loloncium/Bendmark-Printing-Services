-- Run this once against your Vercel Postgres database
-- (Vercel dashboard -> Storage -> your DB -> Query, or via psql).

CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT DEFAULT '',
  location TEXT DEFAULT '',
  client_name TEXT DEFAULT '',
  year TEXT DEFAULT '',
  dimensions TEXT DEFAULT '',
  materials TEXT[] DEFAULT '{}',
  features TEXT[] DEFAULT '{}',
  glow TEXT DEFAULT '#7CDCD4',
  aspect_ratio TEXT DEFAULT 'ar-sq',
  image_url TEXT,
  media_type TEXT DEFAULT 'image',
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_projects_sort ON projects (sort_order ASC, created_at DESC);
