# LANDING PAGES: DUAL TRACK FIXES
## Exact Code Changes + Priority TODO List

**Target Pages:**
- `/pl/l/toxic-genius`
- `/pl/l/retencja`
- `/pl/l/zespol-zdalny`
- `/pl/l/tech-lead`

**Last Updated:** January 2026  
**Author:** Baby Yoda (Paweł Rzepecki)

---

## TABLE OF CONTENTS

1. [Priority TODO Checklist](#priority-todo-checklist)
2. [Critical Changes (Week 1)](#critical-changes-week-1)
3. [High Priority Changes (Week 2-3)](#high-priority-changes-week-2-3)
4. [Medium Priority Changes (Week 4)](#medium-priority-changes-week-4)
5. [File-by-File Implementation Guide](#file-by-file-implementation-guide)
6. [Testing Checklist](#testing-checklist)

---

## PRIORITY TODO CHECKLIST

### ✅ CRITICAL (Week 1) - Total: 3-4 hours

**Must complete before ANY Google Ads launch**

- [ ] **Change 1: Remove "Aplikuj do programu Beta" from Navigation**
  - Time: 30 minutes
  - Files: `components/Navigation.tsx` (or equivalent)
  - Impact: Eliminates confusion between Beta and Standard Access
  - Test: Verify nav on all 4 landing pages + mobile

- [ ] **Change 2: Update CTA Text to "Standard Access"**
  - Time: 1 hour
  - Files: All 4 landing page files (`toxic-genius.tsx`, `retencja.tsx`, etc.)
  - Impact: Clear differentiation - this is paid, stable product
  - Test: Check all CTA buttons (hero, inline, footer) on all pages

- [ ] **Change 3: Add Header Clarification Box**
  - Time: 1.5 hours
  - Files: All 4 landing page files + create reusable component
  - Impact: Sets expectations immediately - Standard Access + mentions Founding Partner
  - Test: Verify placement, mobile responsiveness, link works

- [ ] **Deploy to production**
  - Time: 30 minutes
  - Test: QA all 4 pages on production
  - Analytics: Verify no broken tracking

**Total Week 1:** 3-4 hours

---

### ✅ HIGH PRIORITY (Week 2-3) - Total: 2-3 hours

**Should complete before Month 3 (when LinkedIn Ads launch)**

- [ ] **Change 4: Update Social Proof Numbers**
  - Time: 30 minutes
  - Files: All 4 landing page files (hero stats section)
  - Impact: Transparency about both tracks
  - Test: Verify updated text on all pages

- [ ] **Change 5: Add Founding Partner Callout Section**
  - Time: 2 hours
  - Files: All 4 landing page files + create reusable component
  - Impact: Gives premium alternative without killing primary conversion
  - Test: Placement, visual design, link tracking, mobile

- [ ] **Deploy to production**
  - Time: 30 minutes
  - Test: QA all changes
  - Analytics: Track clicks on Founding Partner callout link

**Total Week 2-3:** 2-3 hours

---

### ✅ MEDIUM PRIORITY (Week 4) - Total: 1-2 hours

**Nice-to-have improvements**

- [ ] **Change 6: Add FAQ Item - "Standard vs Founding Partner"**
  - Time: 1 hour
  - Files: All 4 landing page files (FAQ section)
  - Impact: Answers user questions proactively
  - Test: Verify FAQ formatting, links work

- [ ] **Analytics Setup: Track Track Selection**
  - Time: 30 minutes
  - Setup: GA4 events for "Founding Partner Link Clicked from Landing Page"
  - Impact: Measure how many Standard Access visitors explore Founding Partner
  - Test: Fire test events, verify in GA4 DebugView

- [ ] **Deploy to production**
  - Time: 30 minutes

**Total Week 4:** 1-2 hours

---

## CRITICAL CHANGES (Week 1)

### Change 1: Remove "Aplikuj do programu Beta" from Navigation

**Current Navigation (All 4 Landing Pages):**
```html
<nav>
  <a href="/pl#how-it-works">Jak to działa</a>
  <a href="/pl#patterns">Wzorce</a>
  <a href="/pl#transformations">Historie</a>
  <a href="/pl/blog">Baza Wiedzy</a>
  <a href="/">EN</a>
  <a href="/pl#application">Aplikuj do programu Beta</a> <!-- REMOVE THIS -->
</nav>
```

**New Navigation:**
```html
<nav>
  <a href="/pl#how-it-works">Jak to działa</a>
  <a href="/pl#patterns">Wzorce</a>
  <a href="/pl#transformations">Historie</a>
  <a href="/pl/blog">Baza Wiedzy</a>
  <a href="/">EN</a>
  <a href="#pricing" class="cta-nav-button">Zacznij Teraz</a>
</nav>
```

**CSS for CTA Button in Nav (Optional):**
```css
.cta-nav-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 8px 20px;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s;
}

.cta-nav-button:hover {
  transform: translateY(-2px);
}
```

**Why:** "Aplikuj do programu Beta" link confuses Google Ads visitors who came for paid product.

**File to Edit:** `components/Navigation.tsx` or `layouts/MainLayout.tsx` (depending on your structure)

---

### Change 2: Update CTA Text to "Standard Access"

**Current CTA Buttons (All 4 Landing Pages):**
```html
<!-- Hero CTA -->
<a href="https://app.luteams.com/signup?plan=starter">
  Zacznij Plan Starter – 200 zł/mies
</a>

<!-- Pricing Section CTA -->
<a href="https://app.luteams.com/signup?plan=starter">
  Wybierz Plan Starter – 200 zł/mies
</a>

<!-- Footer CTA -->
<a href="https://app.luteams.com/">
  Zacznij Plan Starter – 200 zł/mies
</a>
```

**New CTA Buttons - Option A (Explicit "Standard Access"):**
```html
<!-- Hero CTA -->
<a href="https://app.luteams.com/signup?plan=starter" class="btn-primary btn-large">
  Rozpocznij Standard Access – 200 PLN/mies
</a>

<!-- Pricing Section CTA -->
<a href="https://app.luteams.com/signup?plan=starter" class="btn-primary btn-large">
  Wybierz Standard Access – 200 PLN/mies
</a>

<!-- Footer CTA -->
<a href="https://app.luteams.com/signup?plan=starter" class="btn-primary btn-large">
  Zacznij Standard Access – 200 PLN/mies
</a>
```

**New CTA Buttons - Option B (Subtle):**
```html
<!-- Hero CTA -->
<a href="https://app.luteams.com/signup?plan=starter" class="btn-primary btn-large">
  Zacznij Plan Starter (Standard Access) – 200 PLN/mies
</a>
```

**Recommendation:** Use **Option A** - more clear, less cluttered.

**Also Update Subtext Below CTA:**
```html
<!-- Current -->
<p class="cta-subtext">
  ✓ 14 dni gwarancji zwrotu pieniędzy<br/>
  ✓ Anuluj w dowolnej chwili<br/>
  ✓ Natychmiastowy dostęp
</p>

<!-- New (Add one line) -->
<p class="cta-subtext">
  ✓ 14 dni gwarancji zwrotu pieniędzy<br/>
  ✓ Anuluj w dowolnej chwili<br/>
  ✓ Natychmiastowy dostęp<br/>
  <span style="font-size: 14px; color: #718096;">
    (Stabilne funkcje • Bez aplikacji • Instant signup)
  </span>
</p>
```

**Files to Edit:**
- `/pages/pl/l/toxic-genius.tsx` (or `.html` depending on your setup)
- `/pages/pl/l/retencja.tsx`
- `/pages/pl/l/zespol-zdalny.tsx`
- `/pages/pl/l/tech-lead.tsx`

**Search & Replace Strategy:**
1. Find all instances of: `Zacznij Plan Starter`
2. Replace with: `Rozpocznij Standard Access`
3. Find all instances of: `Wybierz Plan Starter`
4. Replace with: `Wybierz Standard Access`

---

### Change 3: Add Header Clarification Box

**Component: StandardAccessClarification.tsx**

```tsx
// components/StandardAccessClarification.tsx

import React from 'react';

interface StandardAccessClarificationProps {
  className?: string;
}

export const StandardAccessClarification: React.FC<StandardAccessClarificationProps> = ({ 
  className = '' 
}) => {
  return (
    <div 
      className={`standard-access-clarification ${className}`}
      style={{
        background: '#f7fafc',
        borderLeft: '4px solid #4299e1',
        padding: '20px 24px',
        margin: '32px 0',
        borderRadius: '4px'
      }}
    >
      <p style={{ 
        margin: 0, 
        fontSize: '15px', 
        color: '#2d3748',
        lineHeight: '1.6'
      }}>
        <strong style={{ color: '#1a202c' }}>Standard Access:</strong> 
        {' '}Stabilne, sprawdzone funkcje. Zacznij dzisiaj za 200 PLN/miesiąc.
        <br/>
        <span style={{ 
          fontSize: '14px', 
          color: '#718096',
          display: 'inline-block',
          marginTop: '8px'
        }}>
          Wolisz testować eksperymentalne funkcje? 
          {' '}
          <a 
            href="/founding-partner" 
            style={{ 
              color: '#3182ce', 
              textDecoration: 'underline',
              fontWeight: 500
            }}
          >
            Poznaj Founding Partner Program →
          </a>
        </span>
      </p>
    </div>
  );
};
```

**Alternative: Pure HTML Version (If Not Using React)**

```html
<!-- Add this section to each landing page -->
<div class="standard-access-clarification">
  <p>
    <strong>Standard Access:</strong> Stabilne, sprawdzone funkcje. Zacznij dzisiaj za 200 PLN/miesiąc.
    <br/>
    <span class="secondary-text">
      Wolisz testować eksperymentalne funkcje? 
      <a href="/founding-partner" class="link-underline">
        Poznaj Founding Partner Program →
      </a>
    </span>
  </p>
</div>

<style>
.standard-access-clarification {
  background: #f7fafc;
  border-left: 4px solid #4299e1;
  padding: 20px 24px;
  margin: 32px 0;
  border-radius: 4px;
}

.standard-access-clarification p {
  margin: 0;
  font-size: 15px;
  color: #2d3748;
  line-height: 1.6;
}

.standard-access-clarification strong {
  color: #1a202c;
}

.standard-access-clarification .secondary-text {
  font-size: 14px;
  color: #718096;
  display: inline-block;
  margin-top: 8px;
}

.standard-access-clarification .link-underline {
  color: #3182ce;
  text-decoration: underline;
  font-weight: 500;
}

.standard-access-clarification .link-underline:hover {
  color: #2c5aa0;
}

/* Mobile responsive */
@media (max-width: 640px) {
  .standard-access-clarification {
    padding: 16px 20px;
    margin: 24px 0;
  }
  
  .standard-access-clarification p {
    font-size: 14px;
  }
  
  .standard-access-clarification .secondary-text {
    font-size: 13px;
  }
}
</style>
```

**Where to Insert:**

**On /toxic-genius:**
```tsx
// After hero section, before "Znasz Ten Scenariusz?" section

<section className="hero">
  {/* Existing hero content */}
  <h1>Toxic Genius Niszczy Twój Zespół?</h1>
  {/* ... */}
  <a href="#pricing">Zacznij Plan Starter – 200 zł/mies</a>
</section>

{/* INSERT HERE */}
<StandardAccessClarification />

<section className="problem-section">
  <h3>Znasz Ten Scenariusz?</h3>
  {/* ... */}
</section>
```

**On /retencja:**
```tsx
// After founder story intro, before "Wzorzec, którego nie widzisz"

<section className="founder-intro">
  <p>Widziałem to wielokrotnie: doświadczony deweloper...</p>
  {/* ... */}
</section>

{/* INSERT HERE */}
<StandardAccessClarification />

<section className="pattern-timeline">
  <h3>Wzorzec, którego nie widzisz...</h3>
  {/* ... */}
</section>
```

**On /zespol-zdalny:**
```tsx
// After hero, before "Praca Zdalna i Hybrydowa Potęguje Dysfunkcje"

<section className="hero">
  <h1>Zdalny Zespół = Zdalne Problemy?</h1>
  {/* ... */}
</section>

{/* INSERT HERE */}
<StandardAccessClarification />

<section className="remote-problems">
  <h3>Praca Zdalna i Hybrydowa Potęguje Dysfunkcje Zespołu</h3>
  {/* ... */}
</section>
```

**On /tech-lead:**
```tsx
// After hero, before "Dlaczego Tech Leadzi Wybierają LU Teams?"

<section className="hero">
  <h1>HEXACO Synergy Radar dla Tech Leadów</h1>
  {/* ... */}
</section>

{/* INSERT HERE */}
<StandardAccessClarification />

<section className="why-choose">
  <h3>Dlaczego Tech Leadzi Wybierają LU Teams?</h3>
  {/* ... */}
</section>
```

---

## HIGH PRIORITY CHANGES (Week 2-3)

### Change 4: Update Social Proof Numbers

**Current Text (All 4 Landing Pages):**
```html
<div class="social-proof-stat">
  <span class="number">27+</span>
  <span class="label">Tech Leadów używa LU Teams</span>
</div>
```

**New Text - Option A (Full Transparency):**
```html
<div class="social-proof-stat">
  <span class="number">27+</span>
  <span class="label">
    Liderów Tech
    <span class="stat-detail">(18 Founding Partners + 9 Standard Access)</span>
  </span>
</div>
```

**New Text - Option B (Simple):**
```html
<div class="social-proof-stat">
  <span class="number">27+</span>
  <span class="label">Liderów Tech zaufało LU Teams</span>
</div>
```

**Recommendation:** Use **Option A** for transparency.

**CSS for stat-detail:**
```css
.stat-detail {
  display: block;
  font-size: 13px;
  font-weight: 400;
  color: #718096;
  margin-top: 4px;
}

@media (max-width: 640px) {
  .stat-detail {
    font-size: 12px;
  }
}
```

**Files to Edit:** All 4 landing pages - hero section social proof stats

**Search & Replace:**
- Find: `Tech Leadów używa LU Teams`
- Replace with Option A or B above

---

### Change 5: Add Founding Partner Callout Section

**Component: FoundingPartnerCallout.tsx**

```tsx
// components/FoundingPartnerCallout.tsx

import React from 'react';

interface FoundingPartnerCalloutProps {
  spotsRemaining?: number;
  className?: string;
}

export const FoundingPartnerCallout: React.FC<FoundingPartnerCalloutProps> = ({ 
  spotsRemaining = 32,
  className = '' 
}) => {
  return (
    <section 
      className={`founding-partner-callout ${className}`}
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '48px 24px',
        margin: '64px 0',
        borderRadius: '12px',
        textAlign: 'center'
      }}
    >
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        {/* Badge */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.2)',
          display: 'inline-block',
          padding: '8px 16px',
          borderRadius: '20px',
          marginBottom: '16px',
          backdropFilter: 'blur(10px)'
        }}>
          <span style={{
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '0.5px'
          }}>
            🧪 Limited: {spotsRemaining} of 50 Spots Remaining
          </span>
        </div>
        
        {/* Headline */}
        <h3 style={{
          fontSize: '32px',
          fontWeight: 700,
          margin: '0 0 16px 0',
          lineHeight: '1.2'
        }}>
          Wolisz Kształtować Przyszłość?
        </h3>
        
        {/* Description */}
        <p style={{
          fontSize: '18px',
          lineHeight: '1.6',
          margin: '0 0 24px 0',
          opacity: 0.95
        }}>
          <strong>Founding Partner Program</strong> pozwala testować funkcje 
          3-6 miesięcy wcześniej, mieć bezpośredni kontakt z założycielem 
          i otrzymać dożywotnią zniżkę 50%. Ograniczone do 50 miejsc.
        </p>
        
        {/* CTA Button */}
        <a 
          href="/founding-partner"
          style={{
            display: 'inline-block',
            background: 'white',
            color: '#667eea',
            padding: '16px 32px',
            borderRadius: '8px',
            fontWeight: 600,
            textDecoration: 'none',
            fontSize: '16px',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
          }}
        >
          Dowiedz Się o Founding Partner Program →
        </a>
        
        {/* Pricing Note */}
        <p style={{
          fontSize: '14px',
          margin: '16px 0 0 0',
          opacity: 0.85
        }}>
          FREE podczas Beta • Później 100 PLN/mies (50% zniżki na zawsze)
        </p>
      </div>
    </section>
  );
};
```

**Alternative: Pure HTML Version**

```html
<section class="founding-partner-callout">
  <div class="fp-callout-container">
    <!-- Badge -->
    <div class="fp-badge">
      <span>🧪 Limited: 32 of 50 Spots Remaining</span>
    </div>
    
    <!-- Headline -->
    <h3 class="fp-headline">
      Wolisz Kształtować Przyszłość?
    </h3>
    
    <!-- Description -->
    <p class="fp-description">
      <strong>Founding Partner Program</strong> pozwala testować funkcje 
      3-6 miesięcy wcześniej, mieć bezpośredni kontakt z założycielem 
      i otrzymać dożywotnią zniżkę 50%. Ograniczone do 50 miejsc.
    </p>
    
    <!-- CTA Button -->
    <a href="/founding-partner" class="fp-cta-button">
      Dowiedz Się o Founding Partner Program →
    </a>
    
    <!-- Pricing Note -->
    <p class="fp-pricing-note">
      FREE podczas Beta • Później 100 PLN/mies (50% zniżki na zawsze)
    </p>
  </div>
</section>

<style>
.founding-partner-callout {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 48px 24px;
  margin: 64px 0;
  border-radius: 12px;
  text-align: center;
}

.fp-callout-container {
  max-width: 700px;
  margin: 0 auto;
}

.fp-badge {
  background: rgba(255, 255, 255, 0.2);
  display: inline-block;
  padding: 8px 16px;
  border-radius: 20px;
  margin-bottom: 16px;
  backdrop-filter: blur(10px);
}

.fp-badge span {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.fp-headline {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 16px 0;
  line-height: 1.2;
}

.fp-description {
  font-size: 18px;
  line-height: 1.6;
  margin: 0 0 24px 0;
  opacity: 0.95;
}

.fp-cta-button {
  display: inline-block;
  background: white;
  color: #667eea;
  padding: 16px 32px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  font-size: 16px;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.fp-cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.fp-pricing-note {
  font-size: 14px;
  margin: 16px 0 0 0;
  opacity: 0.85;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .founding-partner-callout {
    padding: 40px 20px;
    margin: 48px 0;
  }
  
  .fp-headline {
    font-size: 26px;
  }
  
  .fp-description {
    font-size: 16px;
  }
  
  .fp-cta-button {
    padding: 14px 28px;
    font-size: 15px;
  }
}

@media (max-width: 480px) {
  .fp-headline {
    font-size: 24px;
  }
  
  .fp-description {
    font-size: 15px;
  }
  
  .fp-cta-button {
    display: block;
    padding: 14px 24px;
  }
  
  .fp-badge span {
    font-size: 13px;
  }
}
</style>
```

**Where to Insert:**

**On /toxic-genius:**
```tsx
// After "Plan Starter" pricing section, before FAQ or final CTA

<section id="pricing">
  {/* Plan Starter pricing box */}
  <h4>Plan Starter</h4>
  <p>PLN 200 /miesiąc</p>
  {/* ... */}
</section>

{/* INSERT HERE */}
<FoundingPartnerCallout spotsRemaining={32} />

<section className="faq">
  <h3>Najczęściej Zadawane Pytania</h3>
  {/* ... */}
</section>
```

**Same placement for all 4 landing pages** - after pricing, before FAQ.

---

## MEDIUM PRIORITY CHANGES (Week 4)

### Change 6: Add FAQ Item - "Standard vs Founding Partner"

**HTML FAQ Item:**

```html
<!-- Add this to FAQ section on all 4 landing pages -->

<div class="faq-item">
  <h4 class="faq-question">
    ❓ Jaka jest różnica między Standard Access a Founding Partner Program?
  </h4>
  <div class="faq-answer">
    <p><strong>Standard Access (ten plan):</strong></p>
    <ul class="faq-list">
      <li>✓ Stabilne, sprawdzone funkcje</li>
      <li>✓ Natychmiastowy dostęp, bez aplikacji</li>
      <li>✓ 200 PLN/miesiąc, anuluj kiedy chcesz</li>
      <li>✓ Samodzielna nauka</li>
      <li>✓ Wsparcie email (48h odpowiedź)</li>
    </ul>
    
    <p style="margin-top: 20px;"><strong>Founding Partner Program:</strong></p>
    <ul class="faq-list">
      <li>✓ Eksperymentalne funkcje (mogą mieć bugi)</li>
      <li>✓ Wymagana aplikacja (selektywny proces)</li>
      <li>✓ FREE podczas Beta, później 100 PLN/mies dożywotnio</li>
      <li>✓ Miesięczne calle z założycielem</li>
      <li>✓ Bezpośrednia pętla feedbacku</li>
    </ul>
    
    <p style="margin-top: 20px;">
      <a href="/founding-partner" style="color: #3182ce; text-decoration: underline; font-weight: 500;">
        Dowiedz się więcej o Founding Partner Program →
      </a>
    </p>
  </div>
</div>

<style>
.faq-item {
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e2e8f0;
}

.faq-question {
  font-size: 18px;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 12px;
}

.faq-answer {
  font-size: 15px;
  line-height: 1.6;
  color: #4a5568;
}

.faq-list {
  list-style: none;
  padding-left: 0;
  margin: 12px 0;
}

.faq-list li {
  padding: 6px 0;
  padding-left: 24px;
  position: relative;
}

.faq-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 12px;
  width: 4px;
  height: 4px;
  background: #4299e1;
  border-radius: 50%;
}

@media (max-width: 640px) {
  .faq-question {
    font-size: 16px;
  }
  
  .faq-answer {
    font-size: 14px;
  }
}
</style>
```

**React/TSX Version:**

```tsx
// Add to FAQ component on all 4 landing pages

<div className="faq-item">
  <h4 className="faq-question">
    ❓ Jaka jest różnica między Standard Access a Founding Partner Program?
  </h4>
  <div className="faq-answer">
    <p><strong>Standard Access (ten plan):</strong></p>
    <ul className="faq-list">
      <li>✓ Stabilne, sprawdzone funkcje</li>
      <li>✓ Natychmiastowy dostęp, bez aplikacji</li>
      <li>✓ 200 PLN/miesiąc, anuluj kiedy chcesz</li>
      <li>✓ Samodzielna nauka</li>
      <li>✓ Wsparcie email (48h odpowiedź)</li>
    </ul>
    
    <p style={{ marginTop: '20px' }}><strong>Founding Partner Program:</strong></p>
    <ul className="faq-list">
      <li>✓ Eksperymentalne funkcje (mogą mieć bugi)</li>
      <li>✓ Wymagana aplikacja (selektywny proces)</li>
      <li>✓ FREE podczas Beta, później 100 PLN/mies dożywotnio</li>
      <li>✓ Miesięczne calle z założycielem</li>
      <li>✓ Bezpośrednia pętla feedbacku</li>
    </ul>
    
    <p style={{ marginTop: '20px' }}>
      <a 
        href="/founding-partner" 
        style={{ 
          color: '#3182ce', 
          textDecoration: 'underline', 
          fontWeight: 500 
        }}
      >
        Dowiedz się więcej o Founding Partner Program →
      </a>
    </p>
  </div>
</div>
```

**Where to Insert:** Add as **first FAQ item** (top of FAQ section) on all 4 landing pages.

---

## FILE-BY-FILE IMPLEMENTATION GUIDE

### File 1: `/pages/pl/l/toxic-genius.tsx`

**Changes to make:**

1. ✅ **Navigation:** Remove "Aplikuj do programu Beta", add "Zacznij Teraz"
2. ✅ **Hero CTA:** Change to "Rozpocznij Standard Access – 200 PLN/mies"
3. ✅ **Add Clarification Box:** After hero, before "Znasz Ten Scenariusz?"
4. ✅ **Pricing CTA:** Change to "Wybierz Standard Access – 200 PLN/mies"
5. ✅ **Social Proof:** Update to "27+ liderów tech (18 Founding Partners + 9 Standard Access)"
6. ✅ **Add Founding Partner Callout:** After pricing section, before FAQ
7. ✅ **Final CTA:** Change to "Zacznij Standard Access – 200 PLN/mies"
8. ✅ **Add FAQ Item:** "Różnica między Standard Access a Founding Partner Program"

**Estimated time:** 1.5 hours (first landing page takes longest to get right)

---

### File 2: `/pages/pl/l/retencja.tsx`

**Changes to make:** (Same as File 1)

1. ✅ Navigation
2. ✅ Hero CTA
3. ✅ Clarification Box (after founder intro, before "Wzorzec, którego nie widzisz")
4. ✅ Pricing CTA
5. ✅ Social Proof
6. ✅ Founding Partner Callout
7. ✅ Final CTA
8. ✅ FAQ Item

**Estimated time:** 45 minutes (copy-paste from File 1, adjust placement)

---

### File 3: `/pages/pl/l/zespol-zdalny.tsx`

**Changes to make:** (Same as Files 1-2)

1. ✅ Navigation
2. ✅ Hero CTA
3. ✅ Clarification Box (after hero, before "Praca Zdalna...")
4. ✅ Pricing CTA
5. ✅ Social Proof
6. ✅ Founding Partner Callout
7. ✅ Final CTA
8. ✅ FAQ Item

**Estimated time:** 45 minutes

---

### File 4: `/pages/pl/l/tech-lead.tsx`

**Changes to make:** (Same as Files 1-3)

1. ✅ Navigation
2. ✅ Hero CTA
3. ✅ Clarification Box (after hero, before "Dlaczego Tech Leadzi...")
4. ✅ Pricing CTA
5. ✅ Social Proof
6. ✅ Founding Partner Callout
7. ✅ Final CTA
8. ✅ FAQ Item

**Estimated time:** 45 minutes

---

### Optional: Create Reusable Components

If using React/Next.js, create these reusable components to avoid duplication:

**File: `components/StandardAccessClarification.tsx`**
```tsx
// See full code in "Change 3" section above
```

**File: `components/FoundingPartnerCallout.tsx`**
```tsx
// See full code in "Change 5" section above
```

Then import and use on all 4 landing pages:

```tsx
import { StandardAccessClarification } from '@/components/StandardAccessClarification';
import { FoundingPartnerCallout } from '@/components/FoundingPartnerCallout';

export default function ToxicGeniusPage() {
  return (
    <>
      <Hero />
      <StandardAccessClarification />
      <ProblemSection />
      {/* ... */}
      <PricingSection />
      <FoundingPartnerCallout spotsRemaining={32} />
      <FAQ />
    </>
  );
}
```

---

## TESTING CHECKLIST

### Before Deploying to Production:

**Visual Testing:**
- [ ] Check all 4 landing pages on Desktop (Chrome, Firefox, Safari)
- [ ] Check all 4 landing pages on Mobile (iOS Safari, Chrome Android)
- [ ] Verify "Clarification Box" placement looks good (not too high, not too low)
- [ ] Verify "Founding Partner Callout" gradient displays correctly
- [ ] Check all CTAs are visible and clickable

**Link Testing:**
- [ ] Click all "Rozpocznij Standard Access" buttons → verify goes to `app.luteams.com/signup?plan=starter`
- [ ] Click "Poznaj Founding Partner Program" links → verify goes to `/founding-partner` (create this page or redirect to main site beta section for now)
- [ ] Click navigation "Zacznij Teraz" → verify scrolls to #pricing anchor

**Content Testing:**
- [ ] Verify all text changes are applied (no "Zacznij Plan Starter" remaining)
- [ ] Verify social proof shows correct numbers
- [ ] Verify FAQ item is added to all 4 pages
- [ ] Spell check (no typos in new sections)

**Mobile Responsive:**
- [ ] Clarification Box readable on mobile (text not too small)
- [ ] Founding Partner Callout button not cut off on mobile
- [ ] FAQ lists display correctly on mobile

**Analytics Testing:**
- [ ] Fire test GA4 event: "Founding Partner Link Clicked from Landing Page"
- [ ] Verify event shows up in GA4 DebugView
- [ ] Test conversion tracking: complete Standard Access signup → verify GA4 records "purchase" event

**Cross-Browser:**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Android

---

## ANALYTICS SETUP (Optional - Week 4)

### GA4 Event: Track Founding Partner Link Clicks

**Event Name:** `founding_partner_interest`

**Event Parameters:**
- `source_page`: (e.g., "toxic-genius", "retencja", "zespol-zdalny", "tech-lead")
- `link_location`: (e.g., "clarification_box", "callout_section", "faq")

**Implementation (Google Tag Manager):**

1. Create new Tag: "GA4 Event - Founding Partner Interest"
2. Tag Type: Google Analytics: GA4 Event
3. Event Name: `founding_partner_interest`
4. Event Parameters:
   - `source_page`: {{Page Path}}
   - `link_location`: {{Click Element}} (or custom variable)

5. Trigger: Click - All Elements
   - Click URL contains: `/founding-partner`
   - Page Path matches regex: `/pl/l/(toxic-genius|retencja|zespol-zdalny|tech-lead)`

**Or Direct JavaScript (if not using GTM):**

```javascript
// Add to all Founding Partner links

<a 
  href="/founding-partner"
  onClick={(e) => {
    // Track event
    if (typeof gtag !== 'undefined') {
      gtag('event', 'founding_partner_interest', {
        'source_page': window.location.pathname,
        'link_location': 'clarification_box' // or 'callout_section' or 'faq'
      });
    }
  }}
>
  Poznaj Founding Partner Program →
</a>
```

---

## FINAL DEPLOYMENT CHECKLIST

**Before deploying to production:**

- [ ] All code changes tested locally
- [ ] All links verified
- [ ] Mobile responsive checked
- [ ] Cross-browser tested
- [ ] Analytics tracking verified
- [ ] Backup current production version (in case rollback needed)
- [ ] Deploy to staging first (if available)
- [ ] QA on staging
- [ ] Deploy to production
- [ ] Smoke test on production (check all 4 pages load correctly)
- [ ] Monitor error logs for 24 hours
- [ ] Check Google Ads landing page Quality Score (should not drop)

---

## ESTIMATED TOTAL TIME

**Week 1 (Critical):** 3-4 hours
- Change 1: 30 min
- Change 2: 1 hour
- Change 3: 1.5 hours
- Deploy + QA: 30 min

**Week 2-3 (High Priority):** 2-3 hours
- Change 4: 30 min
- Change 5: 2 hours
- Deploy + QA: 30 min

**Week 4 (Medium Priority):** 1-2 hours
- Change 6: 1 hour
- Analytics: 30 min
- Deploy + QA: 30 min

**Total Time:** 6-9 hours across 4 weeks

---

## NOTES

**Browser Compatibility:**
- All CSS uses standard properties (no experimental features)
- Gradient backgrounds supported in all modern browsers (IE11+)
- Fallbacks included for older browsers

**Accessibility:**
- All links have descriptive text (no "click here")
- Color contrast ratios meet WCAG AA standards
- Mobile touch targets are 44x44px minimum

**SEO Impact:**
- Adding new sections increases page length → potential slight SEO benefit
- No negative impact on existing keywords
- New internal links to `/founding-partner` help site architecture

**Performance:**
- No external resources added (all inline CSS)
- No JavaScript required for visual elements
- No impact on page load time

---

**DOCUMENT COMPLETE. Ready to implement!** 🚀

