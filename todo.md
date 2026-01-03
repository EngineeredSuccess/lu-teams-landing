# TODO.md - LU Teams Landing Page Redesign

## 📋 Project Overview

**Objective**: Transform luteams.com from generic SaaS landing → boutique founder-driven platform  
**Strategy**: Reposition from mass-market → exclusive/intimate expertise  
**Timeline**: 4 weeks (flexible based on resources)  
**Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Supabase

---

## 🚀 QUICK WINS (Start Here - 4 hours total)

These 3 changes deliver 70% of the positioning shift with minimal effort.

### Phase 0: Immediate Impact Changes

- [ ] **Hero Copy Replacement** (30 min) 🔴 CRITICAL
  - File: `components/Hero.tsx`
  - Replace entire text content with founder-first narrative
  - Change H1 to: "I Don't Train Hundreds of Leaders. I Transform a Few."
  - Update body copy to intimate, first-person story
  - **Code location**: Lines 10-40 approximately
  - **Test**: Preview on localhost:3000

- [ ] **CTA Button Text Changes** (15 min) 🔴 CRITICAL
  - File: `components/Hero.tsx` and `components/WaitlistForm.tsx`
  - Change "Join the Waitlist" → "Request Beta Consideration"
  - Add secondary CTA: "Work With Me 1-on-1"
  - **Visual check**: Buttons should be side-by-side on desktop

- [ ] **Waitlist Form Upgrade** (2.5 hours) 🔴 CRITICAL
  - File: `components/WaitlistForm.tsx`
  - Add fields: Full Name, Role/Title, Company, Team Size, Technical Background
  - Add textarea: "Your Biggest People Challenge (2-3 sentences)"
  - Update validation logic
  - **Backend update needed**: See Phase 3

**Total Phase 0 Time**: ~3-4 hours  
**Impact**: Immediate positioning shift from mass-market → exclusive

---

## 📅 PHASE 1: Content & Structure (Week 1)

**Goal**: Rebuild page structure with founder-centric narrative  
**Estimated Time**: 20-25 hours

### 1.1 Hero Section Overhaul

- [ ] **Update Hero Component** (2 hours) 🔴
  - File: `components/Hero.tsx`
  - [ ] Replace animated logo with founder photo placeholder
  - [ ] Implement new copy structure (3 paragraphs)
  - [ ] Add "Limited Beta Program · Founding Circle" badge at top
  - [ ] Create dual CTA layout (Beta + Coaching buttons)
  - [ ] Add small text below CTAs: "Beta: 50 founding users · Coaching: 2 spots available Q1"
  
  **Code snippet for dual CTAs**:
  ```tsx
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <button className="bg-primary hover:bg-primary/90 text-background px-8 py-4 rounded-lg font-semibold">
      Apply for Beta Access
    </button>
    <button className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-lg font-semibold">
      Work With Me 1-on-1
    </button>
  </div>
  <p className="text-sm text-text-secondary mt-4">
    Beta: 50 founding users · Coaching: 2 spots available Q1
  </p>
  ```

### 1.2 New Components Creation

- [ ] **Create FounderAuthority Component** (3 hours) 🔴
  - File: `components/FounderAuthority.tsx` (NEW)
  - [ ] Create split-screen layout (40% photo, 60% bio)
  - [ ] Add placeholder for founder photo
  - [ ] Write first-person bio copy
  - [ ] Add subtle credentials section
  - [ ] Include CTA: "Learn About 1-on-1 Intensive Coaching"
  - [ ] Style with dark glass morphism card
  
  **Component structure**:
  ```tsx
  export default function FounderAuthority() {
    return (
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 bg-surface/30 backdrop-blur-lg rounded-2xl p-8 border border-primary/20">
            <div className="md:col-span-2">
              {/* Founder Photo */}
              <img src="/founder-photo.jpg" alt="Founder" className="rounded-lg" />
            </div>
            <div className="md:col-span-3">
              <h2 className="text-3xl font-bold mb-4">About This Work</h2>
              {/* Bio copy here */}
            </div>
          </div>
        </div>
      </section>
    );
  }
  ```

- [ ] **Create ClientTransformations Component** (4 hours) 🔴
  - File: `components/ClientTransformations.tsx` (NEW)
  - [ ] Create 3-column layout for case studies
  - [ ] Design timeline cards (Month 1/3/6 format)
  - [ ] Add testimonial quote sections
  - [ ] Style with premium card aesthetic
  - [ ] Make responsive (stack on mobile)
  
  **Data structure** (create `lib/caseStudies.ts`):
  ```typescript
  export const caseStudies = [
    {
      title: "Aerospace Team Lead",
      timeline: [
        { month: 1, challenge: "Couldn't read team dynamics" },
        { month: 3, progress: "Identifying patterns" },
        { month: 6, result: "Predicting conflicts before they surface" }
      ],
      testimonial: "Detailed testimonial 2-3 sentences...",
      client: {
        name: "John D.",
        title: "Engineering Manager",
        company: "Aerospace Manufacturer"
      }
    },
    // ... 2 more
  ];
  ```

- [ ] **Create NetworkPatterns Component** (3 hours) 🟡
  - File: `components/NetworkPatterns.tsx` (NEW)
  - [ ] Design infographic visual (15-20 leaders → 5 blindspots → 1 solution)
  - [ ] Create 5 pattern cards (reuse current "Industry Solutions" content)
  - [ ] Reframe each pattern with first-person observations
  - [ ] Add intro paragraph about observing 15-20 leaders

- [ ] **Create CoachingOffer Component** (2 hours) 🟡
  - File: `components/CoachingOffer.tsx` (NEW)
  - [ ] Two-column comparison layout (Beta vs Coaching)
  - [ ] Add feature lists for each option
  - [ ] Include separate CTAs
  - [ ] Add urgency text: "2 spots available Q1"

### 1.3 Update Main Page Structure

- [ ] **Refactor app/page.tsx** (2 hours) 🔴
  - File: `app/page.tsx`
  - [ ] Import new components
  - [ ] Reorder sections:
    1. Hero
    2. FounderAuthority
    3. Methodology (existing, updated framing)
    4. ClientTransformations
    5. NetworkPatterns
    6. CoachingOffer
    7. Beta Application Form
    8. Footer
  - [ ] Update section titles to first-person ("What I've Learned..." not "Our Methodology")

### 1.4 Form Component Updates

- [ ] **Upgrade WaitlistForm → ApplicationForm** (3 hours) 🔴
  - File: `components/WaitlistForm.tsx` → Rename to `components/ApplicationForm.tsx`
  - [ ] Add new input fields:
    - Full Name (required)
    - Current Role/Title (required)
    - Company/Industry (required)
    - Team Size (required, dropdown)
    - Technical Background (required, radio buttons)
    - Biggest People Challenge (required, textarea, 2-3 sentences)
  - [ ] Update form validation (Zod schema or similar)
  - [ ] Change submit button text: "Request Beta Consideration"
  - [ ] Add application status text: "12 founding members confirmed · 38 spots remaining"
  
  **Form fields structure**:
  ```tsx
  <form onSubmit={handleSubmit} className="space-y-4">
    <input type="email" name="email" required placeholder="Email *" />
    <input type="text" name="fullName" required placeholder="Full Name *" />
    <input type="text" name="role" required placeholder="Current Role/Title *" />
    <input type="text" name="company" required placeholder="Company/Industry *" />
    
    <select name="teamSize" required>
      <option value="">Team Size *</option>
      <option value="1-5">1-5</option>
      <option value="6-15">6-15</option>
      <option value="16-50">16-50</option>
      <option value="50+">50+</option>
    </select>
    
    <fieldset>
      <legend>Technical Background *</legend>
      <label><input type="radio" name="background" value="eng-lead" required /> Engineering/Tech Lead</label>
      <label><input type="radio" name="background" value="dev-mgr" /> Senior Developer → Manager</label>
      <label><input type="radio" name="background" value="cto" /> CTO/VP Engineering</label>
      <label><input type="radio" name="background" value="other" /> Other Technical Leadership</label>
    </fieldset>
    
    <textarea 
      name="challenge" 
      required 
      rows={4}
      placeholder="Your Biggest People Challenge * (2-3 sentences)"
      minLength={50}
    />
    
    <button type="submit">Request Beta Consideration</button>
  </form>
  ```

- [ ] **Update Footer** (1 hour) 🟢
  - File: `components/Footer.tsx`
  - [ ] Simplify to personal/boutique tone
  - [ ] Update tagline: "Boutique leadership coaching methodology, now accessible through software"
  - [ ] Add links: About the Work, 1-on-1 Coaching, Beta Access
  - [ ] Keep it minimal

### 1.5 Content Writing Tasks

- [ ] **Write Hero Copy** (1 hour) 🔴
  - Use provided template from proposal
  - Personalize with your actual years of experience
  - Add specific industries if different from aerospace/IT

- [ ] **Write Founder Bio** (1 hour) 🔴
  - First-person narrative
  - Include actual credentials (years, industries, approach)
  - Keep intimate and authentic tone

- [ ] **Prepare 3 Case Studies** (3 hours) 🔴
  - [ ] Reach out to 3-4 intensive clients for permission
  - [ ] Get detailed testimonials (2-3 paragraphs)
  - [ ] Anonymize if necessary
  - [ ] Structure timeline format (Month 1/3/6)
  - [ ] Write compelling "before/after" narratives

- [ ] **Document 5 Network Patterns** (2 hours) 🟡
  - Based on observations from 15-20 leaders
  - First-person framing: "I see this repeatedly..."
  - Include specific examples (anonymized)

**Phase 1 Checkpoint**: Preview site with new structure, check flow

---

## 🎨 PHASE 2: Visual Design & Branding (Week 2)

**Goal**: Transform visual language from generic tech → premium boutique  
**Estimated Time**: 15-20 hours

### 2.1 Color Palette Update

- [ ] **Update Tailwind Config** (1 hour) 🔴
  - File: `tailwind.config.ts`
  - [ ] Replace color scheme:
  
  ```typescript
  theme: {
    extend: {
      colors: {
        // New Premium Palette
        primary: {
          DEFAULT: '#d4af37', // Muted gold
          dark: '#b8941f',
          light: '#e6c968'
        },
        secondary: {
          DEFAULT: '#2c7a7b', // Deep teal
          dark: '#1f5657',
          light: '#3d9b9c'
        },
        background: {
          DEFAULT: '#0d0d0d', // Charcoal black
          surface: '#1a1a1a', // Card backgrounds
          elevated: '#242424'
        },
        text: {
          primary: '#e8e8e8',
          secondary: '#a0a0a0',
          muted: '#707070'
        }
      },
      borderColor: {
        'primary-subtle': 'rgba(212, 175, 55, 0.2)',
      },
      backdropBlur: {
        'subtle': '8px',
      }
    }
  }
  ```

- [ ] **Global Style Updates** (2 hours) 🔴
  - File: `app/globals.css`
  - [ ] Update background color to new charcoal
  - [ ] Replace all neon cyan/purple references with gold/teal
  - [ ] Adjust glass morphism opacity for darker background

### 2.2 Typography Enhancement

- [ ] **Import Premium Fonts** (1 hour) 🔴
  - File: `app/layout.tsx`
  - [ ] Add Google Fonts: Playfair Display (headers) + current sans-serif (body)
  - [ ] Or use Next.js font optimization
  
  ```typescript
  import { Playfair_Display, Inter } from 'next/font/google';
  
  const playfair = Playfair_Display({ 
    subsets: ['latin'],
    variable: '--font-playfair'
  });
  
  const inter = Inter({ 
    subsets: ['latin'],
    variable: '--font-inter'
  });
  ```

- [ ] **Update Typography Styles** (1.5 hours) 🔴
  - File: `app/globals.css`
  - [ ] Increase base font size: 18px
  - [ ] Set H1 to 60px (desktop), 40px (mobile)
  - [ ] Add font-family classes:
  
  ```css
  .font-display {
    font-family: var(--font-playfair), serif;
  }
  
  h1, h2 {
    font-family: var(--font-playfair), serif;
    font-weight: 700;
  }
  
  body {
    font-family: var(--font-inter), sans-serif;
    font-size: 18px;
    line-height: 1.7;
  }
  ```

### 2.3 Component Styling Updates

- [ ] **Restyle All Cards** (3 hours) 🟡
  - Files: All component files
  - [ ] Replace bright neon borders with subtle gold
  - [ ] Darken glass morphism backgrounds
  - [ ] Add gold accent borders on hover
  
  **Card style template**:
  ```tsx
  className="bg-background-surface/30 backdrop-blur-subtle border border-primary-subtle hover:border-primary/40 rounded-xl p-6 transition-all duration-300"
  ```

- [ ] **Update Button Styles** (1 hour) 🟡
  - [ ] Primary CTA: Gold background, dark text
  - [ ] Secondary CTA: Gold border, transparent bg
  - [ ] Hover states with smooth transitions
  
  ```tsx
  // Primary Button
  className="bg-primary text-background px-8 py-4 rounded-lg font-semibold hover:bg-primary-light transition-colors"
  
  // Secondary Button
  className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-lg font-semibold transition-colors"
  ```

- [ ] **Hero Section Visual Refinement** (2 hours) 🟡
  - File: `components/Hero.tsx`
  - [ ] Remove or minimize animated logo
  - [ ] Add founder photo or workshop image
  - [ ] Adjust layout for new visual hierarchy
  - [ ] Add subtle badge styling for "Limited Beta Program"

### 2.4 Responsive Design Check

- [ ] **Mobile Optimization** (3 hours) 🟡
  - [ ] Test all new components on mobile (375px width)
  - [ ] Ensure dual CTAs stack properly
  - [ ] Check form readability
  - [ ] Verify case study cards stack correctly
  - [ ] Test navigation/scroll behavior

- [ ] **Tablet Optimization** (1.5 hours) 🟢
  - [ ] Test at 768px and 1024px widths
  - [ ] Adjust grid layouts if needed
  - [ ] Check image sizing

### 2.5 Asset Preparation

- [ ] **Gather Required Images** (4-6 hours) 🔴
  - [ ] Commission or take founder photo
    - Requirements: Professional but approachable
    - Setting: Workshop/office, not corporate studio
    - Format: High-res (min 1200x1600px)
    - Background: Neutral or slightly blurred
  
  - [ ] Collect workshop photos (if available)
    - Small group settings preferred
    - Whiteboard/collaboration scenes
    - No stock photos
  
  - [ ] Create placeholder images if photos not ready
    - Use subtle illustrations
    - Or tasteful text-based placeholders

- [ ] **Optimize Images** (1 hour) 🟡
  - [ ] Compress for web (WebP format)
  - [ ] Create responsive variants
  - [ ] Add to `/public` directory
  - [ ] Update image references in components

**Phase 2 Checkpoint**: Visual consistency check across all sections

---

## 💾 PHASE 3: Backend & Data (Week 3)

**Goal**: Update database and API to handle new application form  
**Estimated Time**: 8-12 hours

### 3.1 Database Schema Update

- [ ] **Update Supabase Table** (1 hour) 🔴
  - File: `supabase/schema.sql` (or run directly in Supabase SQL Editor)
  - [ ] Rename table: `waitlist` → `beta_applications`
  - [ ] Add new columns
  
  ```sql
  -- Rename table
  ALTER TABLE waitlist RENAME TO beta_applications;
  
  -- Add new columns
  ALTER TABLE beta_applications
  ADD COLUMN full_name VARCHAR(100),
  ADD COLUMN role VARCHAR(150),
  ADD COLUMN company VARCHAR(150),
  ADD COLUMN team_size VARCHAR(20),
  ADD COLUMN biggest_challenge TEXT,
  ADD COLUMN technical_background VARCHAR(50),
  ADD COLUMN application_status VARCHAR(20) DEFAULT 'pending',
  ADD COLUMN reviewed_at TIMESTAMPTZ,
  ADD COLUMN notes TEXT;
  
  -- Update existing email column if needed
  ALTER TABLE beta_applications
  ALTER COLUMN email SET NOT NULL;
  
  -- Add indexes for common queries
  CREATE INDEX idx_application_status ON beta_applications(application_status);
  CREATE INDEX idx_created_at ON beta_applications(created_at DESC);
  ```

- [ ] **Test Database Changes** (30 min) 🔴
  - [ ] Run SQL in Supabase dashboard
  - [ ] Verify columns added correctly
  - [ ] Check existing data migrated (if any)

### 3.2 API Route Updates

- [ ] **Rename and Update API Route** (2 hours) 🔴
  - File: `app/api/waitlist/route.ts` → Rename to `app/api/application/route.ts`
  - [ ] Update to handle new form fields
  - [ ] Add validation for all required fields
  - [ ] Add server-side validation for challenge length
  
  ```typescript
  // app/api/application/route.ts
  import { createClient } from '@/lib/supabase';
  
  export async function POST(request: Request) {
    try {
      const body = await request.json();
      
      // Validation
      const { email, fullName, role, company, teamSize, biggestChallenge, technicalBackground } = body;
      
      if (!email || !fullName || !role || !company || !teamSize || !biggestChallenge || !technicalBackground) {
        return Response.json({ error: 'All fields are required' }, { status: 400 });
      }
      
      if (biggestChallenge.length < 50) {
        return Response.json({ error: 'Challenge description too short (min 50 characters)' }, { status: 400 });
      }
      
      // Insert to database
      const supabase = createClient();
      const { data, error } = await supabase
        .from('beta_applications')
        .insert([{
          email,
          full_name: fullName,
          role,
          company,
          team_size: teamSize,
          biggest_challenge: biggestChallenge,
          technical_background: technicalBackground,
          application_status: 'pending'
        }])
        .select();
      
      if (error) throw error;
      
      return Response.json({ success: true, data });
      
    } catch (error) {
      console.error('Application error:', error);
      return Response.json({ error: 'Failed to submit application' }, { status: 500 });
    }
  }
  ```

- [ ] **Update Form Submission Handler** (1 hour) 🔴
  - File: `components/ApplicationForm.tsx`
  - [ ] Change API endpoint: `/api/waitlist` → `/api/application`
  - [ ] Update request body with new fields
  - [ ] Handle new validation errors
  - [ ] Update success message

### 3.3 Email Notifications (Optional but Recommended)

- [ ] **Set Up Application Notifications** (3 hours) 🟡
  - [ ] Choose email service (Resend, SendGrid, or Supabase Edge Functions)
  - [ ] Create email template for new applications
  - [ ] Add notification trigger in API route
  - [ ] Test email delivery
  
  **Simple Resend integration**:
  ```typescript
  // In app/api/application/route.ts
  import { Resend } from 'resend';
  
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  // After successful insert:
  await resend.emails.send({
    from: 'notifications@luteams.com',
    to: 'your-email@domain.com',
    subject: 'New Beta Application',
    html: `
      <h2>New application from ${fullName}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Role:</strong> ${role}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Team Size:</strong> ${teamSize}</p>
      <p><strong>Challenge:</strong> ${biggestChallenge}</p>
    `
  });
  ```

### 3.4 Admin Dashboard (Optional)

- [ ] **Create Simple Admin View** (4 hours) 🟢
  - File: `app/admin/applications/page.tsx` (NEW)
  - [ ] Password-protected route
  - [ ] Display all applications in table
  - [ ] Filter by status (pending/reviewed/accepted/rejected)
  - [ ] Add notes field
  - [ ] Mark as reviewed
  
  **Note**: This is optional but very useful for managing applications manually

**Phase 3 Checkpoint**: Test full form submission flow, verify data saves correctly

---

## 🧪 PHASE 4: Testing & Optimization (Week 4)

**Goal**: Polish, test, and prepare for launch  
**Estimated Time**: 10-15 hours

### 4.1 Content Finalization

- [ ] **Proofread All Copy** (2 hours) 🔴
  - [ ] Check for typos/grammar
  - [ ] Verify first-person consistency ("I" not "We")
  - [ ] Ensure authentic, not marketing-speak tone
  - [ ] Verify numbers (years of experience, client counts, etc.)

- [ ] **Get Testimonial Approvals** (ongoing) 🔴
  - [ ] Confirm permission from all quoted clients
  - [ ] Get written approval for case study details
  - [ ] Anonymize if requested

### 4.2 Cross-Browser Testing

- [ ] **Desktop Testing** (2 hours) 🔴
  - [ ] Chrome (latest)
  - [ ] Firefox (latest)
  - [ ] Safari (latest)
  - [ ] Edge (latest)
  - Check: Layout, colors, fonts, animations, form submission

- [ ] **Mobile Testing** (2 hours) 🔴
  - [ ] iOS Safari (iPhone)
  - [ ] Android Chrome
  - [ ] Test form usability on small screens
  - [ ] Check touch target sizes

### 4.3 Performance Optimization

- [ ] **Image Optimization** (1.5 hours) 🟡
  - [ ] Compress all images (TinyPNG or similar)
  - [ ] Use Next.js Image component for optimization
  - [ ] Implement lazy loading for below-fold images
  - [ ] Add proper alt text

- [ ] **Code Optimization** (2 hours) 🟡
  - [ ] Remove unused components
  - [ ] Check for console errors
  - [ ] Minimize bundle size
  - [ ] Run Lighthouse audit, aim for 90+ score

### 4.4 SEO & Metadata

- [ ] **Update Meta Tags** (1 hour) 🟡
  - File: `app/layout.tsx`
  - [ ] Update title: "LU Teams - Boutique Technical Leadership Coaching"
  - [ ] Update description with founder-first narrative
  - [ ] Add Open Graph images (founder photo or logo)
  - [ ] Set proper canonical URLs

- [ ] **Schema Markup** (1 hour) 🟢
  - Add Person schema for founder
  - Add Organization schema
  - Add SoftwareApplication schema

### 4.5 Analytics Setup

- [ ] **Install Analytics** (1 hour) 🟡
  - [ ] Add Google Analytics 4 or Plausible
  - [ ] Set up conversion tracking for form submissions
  - [ ] Track CTA button clicks (Beta vs Coaching)
  - [ ] Set up custom events

### 4.6 Final QA Checklist

- [ ] **Functionality Tests** 🔴
  - [ ] All links work (internal and external)
  - [ ] Form validation works correctly
  - [ ] Form submission succeeds
  - [ ] Success/error messages display properly
  - [ ] Responsive navigation works
  - [ ] All images load correctly

- [ ] **Content Accuracy** 🔴
  - [ ] All numbers are correct (years, client counts, spots available)
  - [ ] Contact information is accurate
  - [ ] No placeholder text remains ("Lorem ipsum", etc.)
  - [ ] Testimonials are properly attributed

- [ ] **Visual Consistency** 🟡
  - [ ] Color palette consistent throughout
  - [ ] Typography hierarchy clear
  - [ ] Spacing/padding consistent
  - [ ] No layout shifts on page load

---

## 🚢 PHASE 5: Deployment & Launch

### 5.1 Pre-Launch

- [ ] **Environment Variables Check** (30 min) 🔴
  - [ ] Verify all env vars set in Vercel
  - [ ] Test Supabase connection in production
  - [ ] Check API routes work in production

- [ ] **Create Backup** (15 min) 🔴
  - [ ] Commit all changes to git
  - [ ] Tag release: `v2.0-boutique-redesign`
  - [ ] Create branch: `old-version` for rollback if needed

### 5.2 Deployment

- [ ] **Deploy to Vercel** (30 min) 🔴
  - [ ] Push to main branch (triggers auto-deploy)
  - [ ] Or use: `vercel --prod`
  - [ ] Monitor build logs for errors
  - [ ] Test production URL immediately

- [ ] **Post-Deploy Verification** (1 hour) 🔴
  - [ ] Test form submission on live site
  - [ ] Verify database writes work
  - [ ] Check all images load
  - [ ] Test on mobile device
  - [ ] Run Lighthouse audit on production

### 5.3 Launch Communications

- [ ] **Announce Redesign** 🟡
  - [ ] LinkedIn post (founder personal account)
  - [ ] Email to existing waitlist (if applicable)
  - [ ] Update any external links

---

## 📊 POST-LAUNCH MONITORING (Ongoing)

### Week 1 After Launch

- [ ] **Daily Checks** 🔴
  - [ ] Monitor application submissions
  - [ ] Check for any errors in Vercel logs
  - [ ] Review analytics data
  - [ ] Respond to any contact form submissions

- [ ] **Gather Feedback** 🟡
  - [ ] Ask 3-5 trusted colleagues to review
  - [ ] Note any confusion points
  - [ ] Track which CTA gets more clicks (Beta vs Coaching)

### Week 2-4 After Launch

- [ ] **A/B Testing Ideas** 🟢
  - [ ] Test different hero headlines
  - [ ] Try different CTA button text
  - [ ] Experiment with form length

- [ ] **Content Iteration** 🟢
  - [ ] Add blog post/case study if possible
  - [ ] Update with real application numbers
  - [ ] Refine copy based on feedback

---

## 🔧 TECHNICAL DEPENDENCIES

### Required Accounts/Services
- [x] Vercel account (already have)
- [x] Supabase account (already have)
- [ ] Domain configured (luteams.com)
- [ ] Email service (optional: Resend/SendGrid)
- [ ] Analytics (optional: GA4/Plausible)

### Development Environment
- [x] Node.js 18+
- [x] Git
- [x] Code editor (VS Code recommended)
- [ ] Supabase CLI (optional, for local dev)

---

## ⏱️ TIME ESTIMATES SUMMARY

| Phase | Estimated Time | Priority |
|-------|----------------|----------|
| Phase 0 (Quick Wins) | 3-4 hours | 🔴 CRITICAL |
| Phase 1 (Content) | 20-25 hours | 🔴 CRITICAL |
| Phase 2 (Design) | 15-20 hours | 🔴 CRITICAL |
| Phase 3 (Backend) | 8-12 hours | 🔴 CRITICAL |
| Phase 4 (Testing) | 10-15 hours | 🟡 IMPORTANT |
| Phase 5 (Deployment) | 2-3 hours | 🔴 CRITICAL |
| **TOTAL** | **58-79 hours** | Full redesign |

### Reduced Scope Options

**If time/budget is tight, prioritize:**

1. ✅ **Phase 0** (Quick Wins) - 4 hours - Immediate positioning shift
2. ✅ **Phase 1.1-1.3** (Hero + Founder sections) - 12 hours - Core narrative
3. ✅ **Phase 2.1-2.2** (Colors + Typography) - 4 hours - Visual refresh
4. ✅ **Phase 3.1-3.2** (Database + API) - 3 hours - Form functionality
5. ✅ **Phase 5** (Deploy) - 2 hours

**Minimum viable redesign**: ~25 hours to get 80% of the impact

---

## 📝 NOTES & TIPS

### Git Workflow
- Commit frequently with descriptive messages
- Create feature branches for major changes
- Test locally before pushing to main

### Testing Locally
```bash
# Run development server
npm run dev

# Test production build locally
npm run build
npm start
```

### Common Issues & Solutions

**Issue**: Form not submitting  
**Solution**: Check Supabase connection, verify API route path, check browser console

**Issue**: Images not loading  
**Solution**: Verify files in `/public` directory, check image paths (no leading slash for public assets)

**Issue**: Styling not updating  
**Solution**: Clear browser cache, restart dev server, check Tailwind config loaded

---

## ✅ DEFINITION OF DONE

Project is complete when:

- [ ] All Phase 0-5 tasks marked complete
- [ ] Site deployed to production
- [ ] Form submissions working and saving to database
- [ ] Mobile responsive on iOS and Android
- [ ] No console errors in browser
- [ ] Lighthouse score 90+ on desktop
- [ ] All images optimized and loading
- [ ] Founder photo and testimonials live
- [ ] Analytics tracking conversions
- [ ] At least 3 test applications submitted successfully

---

## 🆘 NEED HELP?

If you get stuck on any task:

1. **Check documentation**: Next.js docs, Tailwind docs, Supabase docs
2. **Console errors**: Always check browser console first
3. **Git history**: Use `git log` to see what changed
4. **Rollback**: Use `git checkout old-version` if needed

**Contact points**:
- Vercel support: https://vercel.com/help
- Supabase support: https://supabase.com/docs
- Next.js Discord: https://nextjs.org/discord

---

**Last Updated**: 2025-01-03  
**Version**: 2.0 - Boutique Redesign  
**Status**: Ready to implement

---

## 🎯 QUICK START COMMAND

To begin implementation right now:

```bash
# 1. Create a new branch
git checkout -b boutique-redesign

# 2. Start with Phase 0 - Hero copy
# Edit components/Hero.tsx

# 3. Test locally
npm run dev

# 4. Commit your changes
git add .
git commit -m "Phase 0: Update hero copy to founder-first narrative"

# Let's go! 🚀
```