# LU Teams Landing Page

A modern, Vercel-compatible landing page for LU Teams - The Technical Leader's Sixth Sense for Team Chemistry.

## Tech Stack

- **Next.js 14** (App Router) with TypeScript
- **Tailwind CSS** for styling
- **Supabase** for waitlist database
- **Vercel** for deployment

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Supabase account (free tier works)

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to SQL Editor and run the schema from `supabase/schema.sql`
3. Copy your project URL and anon key from Settings > API

### 3. Configure Environment Variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

## Deploy to Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration

1. Push this repository to GitHub
2. Import the project in [Vercel Dashboard](https://vercel.com/new)
3. Add environment variables in Vercel project settings
4. Deploy!

### Environment Variables in Vercel

Add these in your Vercel project settings:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata
│   ├── page.tsx            # Main landing page
│   ├── globals.css         # Global styles, Tailwind imports
│   └── api/
│       └── waitlist/
│           └── route.ts    # POST endpoint for waitlist
├── components/
│   ├── Hero.tsx            # Hero section with animated logo
│   ├── ProblemStatement.tsx
│   ├── Features.tsx
│   ├── UseCases.tsx
│   ├── WaitlistForm.tsx    # Form with validation
│   └── Footer.tsx
├── lib/
│   └── supabase.ts         # Supabase client
├── public/
│   ├── logo.svg
│   └── favicon.svg
├── supabase/
│   └── schema.sql          # Database schema
└── tailwind.config.ts      # Custom theme colors
```

## Design System

| Element | Value |
|---------|-------|
| Background | `#0a192f` (navy) |
| Primary Accent | `#64ffda` (neon cyan) |
| Secondary Accent | `hsl(260, 100%, 65%)` (neon purple) |
| Primary Text | `#ccd6f6` |
| Secondary Text | `#8892b0` |

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Animated hero section with neon glow effects
- ✅ Waitlist form with validation
- ✅ Supabase integration for data storage
- ✅ SEO optimized with Open Graph tags
- ✅ Dark theme with glass morphism cards
- ✅ Smooth scroll navigation

## License

© 2025 LU Teams by Leadership Unfiltered