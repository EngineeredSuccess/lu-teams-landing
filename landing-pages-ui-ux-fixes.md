# Landing Pages UI/UX Fixes - TODO for Developers

**Project:** LU Teams Landing Pages Optimization  
**Date:** 2026-01-18  
**Priority:** P0 items MUST be completed before any other work  

---

## 🔴 P0 - CRITICAL (Ship-blocker issues)

### 1. PRICING SYNCHRONIZATION & CALCULATOR

**Problem:** Strona główna pokazuje USD ($49, $149, $349), landing pages pokazują PLN (200, 600, 1400). To niszczy zaufanie i conversion.

**Solution:** Unified pricing system z currency calculator

#### Implementation Steps:

**A. Create Pricing Config (pricing.config.ts)**

```typescript
// /config/pricing.config.ts

export const PRICING_CONFIG = {
  baseCurrency: 'USD',
  exchangeRates: {
    USD: 1,
    PLN: 4.0, // Update via API or manually
    EUR: 0.92,
    GBP: 0.79
  },
  plans: {
    starter: {
      name: 'Starter',
      priceUSD: 49,
      teamSize: '1-5',
      features: [
        'Do 5 członków zespołu',
        'Synergy Radar',
        'Conflict Predictions (3-6 m-cy)',
        'Analiza ról',
        'Raporty indywidualne',
        'Eksport PDF',
        'Wsparcie Email (48h)'
      ]
    },
    professional: {
      name: 'Professional',
      priceUSD: 149,
      teamSize: '6-15',
      features: [
        'Wszystko z Starter',
        'Do 15 członków zespołu',
        'Priority support (24h)',
        'Advanced analytics',
        'Custom reports'
      ]
    },
    scale: {
      name: 'Scale',
      priceUSD: 349,
      teamSize: '16-50',
      features: [
        'Wszystko z Professional',
        'Do 50 członków zespołu',
        'Dedicated account manager',
        'API access',
        'Custom integrations'
      ]
    }
  }
};

export function convertPrice(priceUSD: number, targetCurrency: string): number {
  const rate = PRICING_CONFIG.exchangeRates[targetCurrency] || 1;
  return Math.round(priceUSD * rate);
}

export function getPlanPrice(planKey: string, currency: string): number {
  const plan = PRICING_CONFIG.plans[planKey];
  return convertPrice(plan.priceUSD, currency);
}
```

**B. Currency Switcher Component**

```tsx
// /components/CurrencySwitcher.tsx

import { useState, useEffect } from 'react';

export function CurrencySwitcher() {
  const [currency, setCurrency] = useState('PLN'); // Default dla .pl domain
  
  useEffect(() => {
    // Detect user location or read from localStorage
    const savedCurrency = localStorage.getItem('preferredCurrency');
    if (savedCurrency) setCurrency(savedCurrency);
  }, []);
  
  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency);
    localStorage.setItem('preferredCurrency', newCurrency);
    // Trigger re-render of all pricing components
    window.dispatchEvent(new CustomEvent('currencyChanged', { detail: newCurrency }));
  };
  
  return (
    <div className="currency-switcher">
      <select 
        value={currency} 
        onChange={(e) => handleCurrencyChange(e.target.value)}
        className="currency-select"
      >
        <option value="USD">USD ($)</option>
        <option value="PLN">PLN (zł)</option>
        <option value="EUR">EUR (€)</option>
        <option value="GBP">GBP (£)</option>
      </select>
    </div>
  );
}
```

**C. Pricing Display Component**

```tsx
// /components/PricingCard.tsx

interface PricingCardProps {
  planKey: 'starter' | 'professional' | 'scale';
  currency: string;
  highlight?: boolean;
}

export function PricingCard({ planKey, currency, highlight = false }: PricingCardProps) {
  const plan = PRICING_CONFIG.plans[planKey];
  const price = getPlanPrice(planKey, currency);
  const currencySymbol = currency === 'USD' ? '$' : currency === 'PLN' ? 'zł' : '€';
  
  return (
    <div className={`pricing-card ${highlight ? 'highlighted' : ''}`}>
      <h3>{plan.name}</h3>
      <div className="price">
        <span className="currency">{currencySymbol}</span>
        <span className="amount">{price}</span>
        <span className="period">/miesiąc</span>
      </div>
      <p className="team-size">{plan.teamSize} członków zespołu</p>
      <ul className="features">
        {plan.features.map((feature, idx) => (
          <li key={idx}>✓ {feature}</li>
        ))}
      </ul>
      <button className="cta-button">
        Wybierz {plan.name}
      </button>
    </div>
  );
}
```

**D. Update ALL pages to use unified pricing**

File paths to update:
- `/pages/pl/index.tsx` - main page
- `/pages/pl/l/retencja.tsx`
- `/pages/pl/l/tech-lead.tsx`
- `/pages/pl/l/toxic-genius.tsx`
- `/pages/pl/l/zespol-zdalny.tsx`

**Action items:**
- [ ] Create `pricing.config.ts` with base USD pricing
- [ ] Build CurrencySwitcher component
- [ ] Build PricingCard component that reads from config
- [ ] Replace all hardcoded prices with config-based components
- [ ] Add currency switcher to header (next to language switcher)
- [ ] Test currency switch persists across page navigation
- [ ] Verify all CTAs link to correct signup with currency parameter

**Acceptance criteria:**
- User selects PLN → all prices show in PLN across ALL pages
- User refreshes page → currency preference persists
- Switching between /pl and /pl/l/* pages maintains currency
- No hardcoded prices anywhere in codebase

---

## 🟠 P1 - HIGH PRIORITY (Complete in Sprint 1)

### 2. LANDING PAGE TEMPLATE SYSTEM

**Problem:** Każda landing page wygląda inaczej. Brak spójności wizualnej i strukturalnej.

**Solution:** Unified template system z reusable sections

#### Template Architecture

```
LandingPageTemplate/
  ├── HeroSection/
  ├── ProblemSection/
  ├── SolutionSection/
  ├── HowItWorksSection/
  ├── SocialProofSection/
  ├── PricingSection/
  ├── FAQSection/
  ├── CTASection/
```

#### Section Templates Specification

---

### SECTION 1: Hero Section

**Purpose:** Hook user, communicate value proposition, show primary CTA

**Structure:**
```html
<section class="hero-section">
  <div class="hero-content">
    <div class="hero-text">
      <span class="hero-eyebrow">From-line: np. "Od lidera tech, który..."</span>
      <h1 class="hero-headline">Main Problem Statement</h1>
      <p class="hero-subheadline">How HEXACO solves it - brief</p>
      <div class="hero-cta-group">
        <button class="cta-primary">Primary Action</button>
        <button class="cta-secondary">Secondary Action</button>
      </div>
      <ul class="hero-trust-badges">
        <li>✓ Metric 1</li>
        <li>✓ Metric 2</li>
        <li>✓ Metric 3</li>
      </ul>
    </div>
    <div class="hero-visual">
      <img src="/hero-image.png" alt="Product screenshot or illustration" />
    </div>
  </div>
</section>
```

**CSS Specs:**
```css
.hero-section {
  padding: 80px 24px 60px;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.hero-eyebrow {
  font-size: 14px;
  color: #6B7280; /* gray-500 */
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
  display: block;
}

.hero-headline {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.1;
  color: #111827; /* gray-900 */
  margin-bottom: 20px;
}

.hero-subheadline {
  font-size: 20px;
  line-height: 1.5;
  color: #4B5563; /* gray-700 */
  margin-bottom: 32px;
}

.hero-cta-group {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}

.cta-primary {
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 600;
  background: #2563EB; /* blue-600 */
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.cta-primary:hover {
  background: #1D4ED8; /* blue-700 */
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

.cta-secondary {
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 600;
  background: white;
  color: #2563EB;
  border: 2px solid #2563EB;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.cta-secondary:hover {
  background: #EFF6FF; /* blue-50 */
}

.hero-trust-badges {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 24px;
  font-size: 14px;
  color: #6B7280;
}

.hero-visual img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
}

/* Mobile */
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .hero-headline {
    font-size: 36px;
  }
  
  .hero-cta-group {
    flex-direction: column;
  }
  
  .hero-trust-badges {
    flex-direction: column;
    gap: 12px;
  }
}
```

**Component file:**
```tsx
// /components/landing/HeroSection.tsx

interface HeroSectionProps {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  trustBadges: string[];
  imageSrc: string;
  imageAlt: string;
}

export function HeroSection({
  eyebrow,
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  trustBadges,
  imageSrc,
  imageAlt
}: HeroSectionProps) {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-eyebrow">{eyebrow}</span>
          <h1 className="hero-headline">{headline}</h1>
          <p className="hero-subheadline">{subheadline}</p>
          <div className="hero-cta-group">
            <a href={primaryCTA.href} className="cta-primary">
              {primaryCTA.text}
            </a>
            {secondaryCTA && (
              <a href={secondaryCTA.href} className="cta-secondary">
                {secondaryCTA.text}
              </a>
            )}
          </div>
          <ul className="hero-trust-badges">
            {trustBadges.map((badge, idx) => (
              <li key={idx}>✓ {badge}</li>
            ))}
          </ul>
        </div>
        <div className="hero-visual">
          <img src={imageSrc} alt={imageAlt} />
        </div>
      </div>
    </section>
  );
}
```

---

### SECTION 2: Problem Section

**Purpose:** Agitate pain points, show empathy, build urgency

**Structure:**
```html
<section class="problem-section">
  <div class="section-header">
    <h2>Znasz Ten Scenariusz?</h2>
    <p class="section-subtitle">Te problemy niszczą Twój zespół codziennie</p>
  </div>
  
  <div class="problem-cards">
    <div class="problem-card">
      <span class="problem-emoji">😤</span>
      <h3>Problem Title</h3>
      <p>Problem description - konkretny, relatable</p>
    </div>
    <!-- Repeat 2-3x -->
  </div>
  
  <div class="problem-cost">
    <h3>Prawdziwy Koszt:</h3>
    <ul>
      <li><strong>50,000+ zł</strong> - Description</li>
      <li><strong>30-40%</strong> - Description</li>
      <li><strong>6 miesięcy</strong> - Description</li>
    </ul>
  </div>
</section>
```

**CSS Specs:**
```css
.problem-section {
  padding: 80px 24px;
  background: #F9FAFB; /* gray-50 */
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
}

.section-header h2 {
  font-size: 40px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 16px;
}

.section-subtitle {
  font-size: 18px;
  color: #6B7280;
}

.problem-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto 60px;
}

.problem-card {
  background: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;
}

.problem-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.problem-emoji {
  font-size: 48px;
  display: block;
  margin-bottom: 16px;
}

.problem-card h3 {
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 12px;
}

.problem-card p {
  font-size: 16px;
  line-height: 1.6;
  color: #4B5563;
}

.problem-cost {
  max-width: 800px;
  margin: 0 auto;
  background: #FEF2F2; /* red-50 */
  border-left: 4px solid #EF4444; /* red-500 */
  padding: 32px;
  border-radius: 8px;
}

.problem-cost h3 {
  font-size: 24px;
  font-weight: 700;
  color: #991B1B; /* red-900 */
  margin-bottom: 20px;
}

.problem-cost ul {
  list-style: none;
  padding: 0;
}

.problem-cost li {
  font-size: 18px;
  color: #7F1D1D; /* red-900 */
  margin-bottom: 12px;
}

.problem-cost li strong {
  color: #DC2626; /* red-600 */
}

@media (max-width: 768px) {
  .problem-cards {
    grid-template-columns: 1fr;
  }
}
```

---

### SECTION 3: Solution Section (How It Works)

**Purpose:** Explain product, show 3-step process, build confidence

**Structure:**
```html
<section class="solution-section">
  <div class="section-header">
    <h2>Jak Działa HEXACO Synergy Radar</h2>
    <p class="section-subtitle">3 kroki do przewidywalnego zespołu</p>
  </div>
  
  <div class="solution-steps">
    <div class="solution-step">
      <div class="step-number">1</div>
      <h3>Step Title</h3>
      <p>Step description with specifics</p>
    </div>
    <!-- Repeat 3x -->
  </div>
  
  <div class="solution-visual">
    <img src="/product-screenshot.png" alt="Product interface" />
    <p class="visual-caption">Screenshot caption</p>
  </div>
</section>
```

**CSS Specs:**
```css
.solution-section {
  padding: 80px 24px;
  background: white;
}

.solution-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto 60px;
}

.solution-step {
  text-align: center;
}

.step-number {
  width: 60px;
  height: 60px;
  background: #DBEAFE; /* blue-100 */
  color: #1E40AF; /* blue-800 */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 700;
  margin: 0 auto 20px;
}

.solution-step h3 {
  font-size: 22px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 12px;
}

.solution-step p {
  font-size: 16px;
  line-height: 1.6;
  color: #6B7280;
}

.solution-visual {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.solution-visual img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
}

.visual-caption {
  font-size: 14px;
  color: #9CA3AF;
  font-style: italic;
}

@media (max-width: 768px) {
  .solution-steps {
    grid-template-columns: 1fr;
  }
}
```

---

### SECTION 4: Social Proof Section

**Purpose:** Build trust, show results, overcome skepticism

**Structure:**
```html
<section class="social-proof-section">
  <div class="section-header">
    <h2>Tech Leadzi, Którzy Opanowali Chaos</h2>
  </div>
  
  <div class="testimonials">
    <div class="testimonial-card">
      <div class="testimonial-quote">
        "Quote content here - specific results and emotions"
      </div>
      <div class="testimonial-author">
        <img src="/avatar.jpg" alt="Author name" />
        <div>
          <div class="author-name">Jan Kowalski</div>
          <div class="author-title">Tech Lead, 12-person team</div>
          <div class="author-company">Aerospace Manufacturing</div>
        </div>
      </div>
    </div>
    <!-- Repeat 2-3x -->
  </div>
  
  <div class="metrics-bar">
    <div class="metric">
      <div class="metric-value">27+</div>
      <div class="metric-label">Tech Leadów</div>
    </div>
    <div class="metric">
      <div class="metric-value">3-6 msc</div>
      <div class="metric-label">Wcześniejsze ostrzeżenie</div>
    </div>
    <div class="metric">
      <div class="metric-value">Zero</div>
      <div class="metric-label">Odejść seniorów</div>
    </div>
  </div>
</section>
```

**CSS Specs:**
```css
.social-proof-section {
  padding: 80px 24px;
  background: #F9FAFB;
}

.testimonials {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto 60px;
}

.testimonial-card {
  background: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.testimonial-quote {
  font-size: 18px;
  line-height: 1.6;
  color: #374151;
  margin-bottom: 24px;
  font-style: italic;
  position: relative;
}

.testimonial-quote::before {
  content: '"';
  font-size: 60px;
  color: #DBEAFE;
  position: absolute;
  top: -20px;
  left: -10px;
  font-family: Georgia, serif;
}

.testimonial-author {
  display: flex;
  gap: 16px;
  align-items: center;
}

.testimonial-author img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
}

.author-name {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
}

.author-title {
  font-size: 14px;
  color: #6B7280;
}

.author-company {
  font-size: 14px;
  color: #9CA3AF;
}

.metrics-bar {
  display: flex;
  justify-content: space-around;
  max-width: 900px;
  margin: 0 auto;
  background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%);
  padding: 40px;
  border-radius: 12px;
  color: white;
}

.metric {
  text-align: center;
}

.metric-value {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 8px;
}

.metric-label {
  font-size: 16px;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .testimonials {
    grid-template-columns: 1fr;
  }
  
  .metrics-bar {
    flex-direction: column;
    gap: 24px;
  }
}
```

---

### SECTION 5: Pricing Section

**Purpose:** Present offer clearly, remove friction, drive conversion

**Structure:**
```html
<section class="pricing-section">
  <div class="section-header">
    <h2>Inwestycja Mniejsza Niż Koszt Rekrutacji</h2>
    <p class="section-subtitle">14-dniowa gwarancja zwrotu · Anuluj kiedy chcesz</p>
  </div>
  
  <div class="pricing-cards">
    <!-- Use PricingCard component from earlier -->
  </div>
  
  <div class="pricing-guarantee">
    <h3>🛡️ 14-Dniowa Gwarancja Zwrotu</h3>
    <p>Jeśli nie zobaczysz wartości, zwrócimy pełną kwotę bez pytań.</p>
  </div>
</section>
```

**CSS Specs:**
```css
.pricing-section {
  padding: 80px 24px;
  background: white;
}

.pricing-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto 40px;
}

.pricing-card {
  background: white;
  border: 2px solid #E5E7EB;
  border-radius: 12px;
  padding: 40px 32px;
  transition: all 0.3s;
}

.pricing-card:hover {
  border-color: #2563EB;
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(37, 99, 235, 0.15);
}

.pricing-card.highlighted {
  border-color: #2563EB;
  background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%);
  position: relative;
}

.pricing-card.highlighted::before {
  content: 'Najpopularniejszy';
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #2563EB;
  color: white;
  padding: 4px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.pricing-card h3 {
  font-size: 24px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 8px;
}

.pricing-card .price {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: 8px;
}

.pricing-card .currency {
  font-size: 24px;
  color: #6B7280;
}

.pricing-card .amount {
  font-size: 56px;
  font-weight: 700;
  color: #111827;
}

.pricing-card .period {
  font-size: 18px;
  color: #9CA3AF;
}

.pricing-card .team-size {
  font-size: 14px;
  color: #6B7280;
  margin-bottom: 24px;
}

.pricing-card .features {
  list-style: none;
  padding: 0;
  margin-bottom: 32px;
}

.pricing-card .features li {
  font-size: 16px;
  color: #374151;
  margin-bottom: 12px;
  padding-left: 24px;
  position: relative;
}

.pricing-card .features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #10B981; /* green-500 */
  font-weight: 700;
}

.pricing-card .cta-button {
  width: 100%;
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  background: #2563EB;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.pricing-card .cta-button:hover {
  background: #1D4ED8;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

.pricing-guarantee {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  background: #ECFDF5; /* green-50 */
  padding: 24px;
  border-radius: 8px;
  border: 2px solid #10B981;
}

.pricing-guarantee h3 {
  font-size: 20px;
  font-weight: 700;
  color: #047857;
  margin-bottom: 8px;
}

.pricing-guarantee p {
  font-size: 16px;
  color: #065F46;
}

@media (max-width: 768px) {
  .pricing-cards {
    grid-template-columns: 1fr;
  }
}
```

---

### SECTION 6: FAQ Section

**Purpose:** Overcome objections, build confidence, provide clarity

**Structure:**
```html
<section class="faq-section">
  <div class="section-header">
    <h2>Często Zadawane Pytania</h2>
  </div>
  
  <div class="faq-items">
    <details class="faq-item">
      <summary class="faq-question">
        <span>Question text here?</span>
        <svg class="faq-icon"><!-- chevron icon --></svg>
      </summary>
      <div class="faq-answer">
        <p>Answer text here with specific details and reassurance.</p>
      </div>
    </details>
    <!-- Repeat 5-6x -->
  </div>
</section>
```

**CSS Specs:**
```css
.faq-section {
  padding: 80px 24px;
  background: white;
}

.faq-items {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  border-bottom: 1px solid #E5E7EB;
  padding: 24px 0;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  user-select: none;
}

.faq-question:hover {
  color: #2563EB;
}

.faq-icon {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}

.faq-item[open] .faq-icon {
  transform: rotate(180deg);
}

.faq-answer {
  padding-top: 16px;
  font-size: 16px;
  line-height: 1.6;
  color: #6B7280;
}

.faq-answer p {
  margin-bottom: 12px;
}
```

---

### SECTION 7: Final CTA Section

**Purpose:** Last chance conversion, clear action, remove friction

**Structure:**
```html
<section class="final-cta-section">
  <div class="cta-content">
    <h2>Przestań Tracić Talenty Przez Konflikty, Które Dało Się Przewidzieć</h2>
    <p>Plan Starter za 200 zł miesięcznie to ułamek kosztów jednego odejścia programisty</p>
    <div class="cta-buttons">
      <a href="#signup" class="cta-primary-large">Zacznij Plan Starter</a>
    </div>
    <ul class="cta-benefits">
      <li>✓ Natychmiastowy dostęp do Synergy Radar</li>
      <li>✓ 14 dni na testy bez ryzyka</li>
      <li>✓ Faktura VAT · Anuluj kiedy chcesz</li>
    </ul>
  </div>
</section>
```

**CSS Specs:**
```css
.final-cta-section {
  padding: 80px 24px;
  background: linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%); /* blue-900 to blue-800 */
  color: white;
  text-align: center;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.final-cta-section h2 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 16px;
}

.final-cta-section p {
  font-size: 20px;
  opacity: 0.9;
  margin-bottom: 32px;
}

.cta-primary-large {
  display: inline-block;
  padding: 20px 48px;
  font-size: 20px;
  font-weight: 700;
  background: white;
  color: #1E40AF;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s;
}

.cta-primary-large:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.3);
}

.cta-benefits {
  list-style: none;
  padding: 0;
  margin-top: 24px;
  display: flex;
  justify-content: center;
  gap: 32px;
  font-size: 16px;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .final-cta-section h2 {
    font-size: 28px;
  }
  
  .cta-benefits {
    flex-direction: column;
    gap: 12px;
  }
}
```

---

## Action Items dla Template System

- [ ] Create `/components/landing/` directory
- [ ] Build all 7 section components as reusable React components
- [ ] Create shared CSS file `/styles/landing-sections.css`
- [ ] Create example landing page using all sections: `/pages/pl/l/_template.tsx`
- [ ] Test responsive behavior on mobile (320px, 768px, 1024px)
- [ ] Ensure all sections have proper semantic HTML (h1, h2, section, article)
- [ ] Add proper alt text to all images
- [ ] Test keyboard navigation (tab order, focus states)

---

## 3. CONVERSION FLOW ARCHITECTURE

**Problem:** Landing pages mają za dużo różnych CTAs bez jasnej progresji

**Solution:** 3-tier conversion ladder z clear priority

### Conversion Ladder Specification

```
Level 1 (Low commitment): Informacja / Edukacja
  ↓
Level 2 (Medium commitment): Trial / Demo
  ↓
Level 3 (High commitment): Purchase
```

### CTA Placement Rules

**Rule 1: ONE primary CTA per screen**
- Above the fold: Always visible
- Colors: Primary CTA = blue (#2563EB), Secondary = outline blue

**Rule 2: CTA Progression**
```
Hero Section → "Rozpocznij 14-dniowy trial" (Primary)
Problem Section → "Zobacz jak to działa" (Secondary - scroll to How It Works)
Solution Section → "Sprawdź przykładowy raport" (Secondary - modal/lightbox)
Social Proof → "Przeczytaj case study" (Tertiary - link)
Pricing → "Wybierz Plan Starter" (Primary)
FAQ → No CTA (reduce friction)
Final CTA → "Zacznij teraz" (Primary - large)
```

**Rule 3: CTA Copy Formula**
- Verb + Benefit + (Optional: Risk removal)
- Good: "Rozpocznij 14-dniowy trial bez ryzyka"
- Bad: "Kliknij tutaj"

**Rule 4: Sticky CTA Bar (Mobile)**
```html
<div class="sticky-cta-bar">
  <div class="sticky-cta-content">
    <span class="sticky-price">200 zł/mies</span>
    <a href="#signup" class="sticky-cta-button">Zacznij teraz</a>
  </div>
</div>
```

```css
.sticky-cta-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #E5E7EB;
  padding: 16px;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
  z-index: 100;
  display: none; /* Show only on mobile */
}

@media (max-width: 768px) {
  .sticky-cta-bar {
    display: block;
  }
}

.sticky-cta-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
}

.sticky-price {
  font-size: 20px;
  font-weight: 700;
  color: #111827;
}

.sticky-cta-button {
  padding: 12px 24px;
  background: #2563EB;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
}
```

### Action Items for Conversion Flow

- [ ] Audit all existing CTAs on each landing page
- [ ] Remove duplicate/competing CTAs
- [ ] Implement CTA progression (Low → Medium → High commitment)
- [ ] Add sticky CTA bar for mobile
- [ ] A/B test CTA copy variants
- [ ] Track CTA click rates per section (analytics events)
- [ ] Ensure all CTAs pass WCAG AA contrast ratio (4.5:1 minimum)

---

## 🔴 P0 - PAGE-SPECIFIC FIXES

### PAGE 1: /pl/l/retencja

**Current issues:**
- Zbyt długa (overwhelming)
- Timeline visualization jest dobra, ale gubi się
- Za dużo tekstu w hero
- Pricing pojawia się za późno

**Required changes:**

**1. Shorten hero section**
```diff
- Quote od Pawła (5 lines)
+ Krótki eyebrow: "Od lidera tech, który stracił dwóch seniorów"
+ Hero headline: "Dlaczego Twoi najlepsi deweloperzy odchodzą"
+ Subheadline: "Ankiety wyjściowe mówią 'Kultura' — HEXACO pokazuje prawdziwy wzorzec"
+ CTA: "Zidentyfikuj zagrożonych członków zespołu"
```

**2. Move timeline up**
- Timeline (Miesiąc 1-2, 3-4, 5-6) should be SECTION 2, right after hero
- Make it more visual with icons/progress bar

**3. Reduce text density**
```
Current: 8 major sections
Target: 5 major sections

Keep:
- Hero
- Timeline (Miesiąc 1-6)
- How HEXACO predicts turnover (3 wzorce)
- Pricing
- FAQ (shorten to 4 questions)

Remove/merge:
- Długi case study (merge into timeline)
- Powtarzające się sekcje o kosztach
```

**4. Add visual breaks**
- Insert product screenshot po sekcji "Jak dostrzec ryzyko"
- Add before/after comparison table

**Specific code changes:**

```tsx
// /pages/pl/l/retencja.tsx

export default function RetencjaLandingPage() {
  return (
    <>
      <HeroSection
        eyebrow="Od lidera tech, który stracił dwóch seniorów, zanim zrozumiał dlaczego"
        headline="Dlaczego Twoi najlepsi deweloperzy odchodzą"
        subheadline="Ankiety wyjściowe mówią 'Kultura' — HEXACO pokazuje prawdziwy wzorzec 3-6 miesięcy wcześniej"
        primaryCTA={{ text: "Zidentyfikuj zagrożonych członków", href: "#pricing" }}
        secondaryCTA={{ text: "Zobacz jak to działa", href: "#timeline" }}
        trustBadges={[
          "27+ liderów używa LU Teams",
          "3-6 msc wcześniejszego ostrzeżenia",
          "Zero odejść seniorów (case study)"
        ]}
        imageSrc="/images/turnover-prediction-timeline.png"
        imageAlt="HEXACO Synergy Radar pokazujący prognozę ryzyka rotacji"
      />
      
      <TimelineSection /> {/* NEW: Dedicated timeline component */}
      
      <SolutionSection
        title="Jak HEXACO Przewiduje Rotację"
        steps={[
          {
            title: "Stłamszony Innowator",
            description: "Deweloper z wysokim O + wysokim E w zespole o niskim O"
          },
          // ... 2 more patterns
        ]}
      />
      
      <PricingSection plans={['starter']} highlightPlan="starter" />
      
      <FAQSection
        questions={[
          // Only 4 most critical questions
        ]}
      />
      
      <FinalCTASection
        headline="Przestań dawać się zaskakiwać wypowiedzeniom"
        description="Senior deweloperzy decydują o odejściu 3-6 miesięcy przed złożeniem papierów"
        ctaText="Rozpocznij analizę ryzyka rotacji"
      />
    </>
  );
}
```

**Action items:**
- [ ] Refactor /pl/l/retencja.tsx to use new template components
- [ ] Create TimelineSection component with visual progress bar
- [ ] Reduce text by 40% (from ~3000 words to ~1800 words)
- [ ] Add product screenshot after "Jak dostrzec ryzyko" section
- [ ] Move pricing up (should appear after 2 scrolls on desktop)
- [ ] Test page length: target 5-6 screen heights on desktop

---

### PAGE 2: /pl/l/tech-lead

**Current issues:**
- Za minimalna (brak trust signals)
- Brak founder story
- Brak social proof
- Wygląda jak generic SaaS

**Required changes:**

**1. Add founder credibility**
```html
<section class="founder-credibility">
  <img src="/founder-photo.png" alt="Paweł Rzepecki" />
  <div>
    <h3>Od inżyniera aerospace, dla liderów tech</h3>
    <p>15+ lat w środowiskach wysokiego ryzyka. Zbudowałem LU Teams, bo sam mierzyłem się z "toxic genius" i odejściami seniorów.</p>
  </div>
</section>
```

**2. Add case study**
- Insert 1 detailed case study after "Dlaczego HEXACO"
- Format: Problem → HEXACO analysis → Intervention → Results

**3. Expand features**
- Don't just say "HEXACO for Tech Leads"
- Show specific use cases:
  - "Przewidywanie konfliktów przy code review"
  - "Identyfikacja zagrożonych seniorów przed odejściem"
  - "Balansowanie ról: Architekt vs Optymalizator vs Finisher"

**4. Add metrics section**
```html
<div class="metrics-bar">
  <div class="metric">
    <div class="metric-value">27+</div>
    <div class="metric-label">Tech Leadów używa</div>
  </div>
  <div class="metric">
    <div class="metric-value">85%</div>
    <div class="metric-label">Accuracy predykcji konfliktów</div>
  </div>
  <div class="metric">
    <div class="metric-value">3-6 msc</div>
    <div class="metric-label">Wcześniejsze ostrzeżenie</div>
  </div>
</div>
```

**Specific code changes:**

```tsx
// /pages/pl/l/tech-lead.tsx

export default function TechLeadLandingPage() {
  return (
    <>
      <HeroSection
        eyebrow="HEXACO Synergy Radar dla Tech Leadów"
        headline="Przewiduj Konflikty w Zespole, Zanim Zablokują Projekt"
        subheadline="Analiza osobowości oparta na twardej nauce dla kluczowych zespołów inżynierskich"
        primaryCTA={{ text: "Zacznij Plan Starter – 200 zł/mies", href: "#pricing" }}
        trustBadges={[
          "Science-based (nie MBTI)",
          "Stworzone przez lidera aerospace",
          "27+ tech leadów używa"
        ]}
        imageSrc="/images/synergy-radar-preview.png"
        imageAlt="HEXACO Synergy Radar interface"
      />
      
      <FounderCredibilitySection /> {/* NEW */}
      
      <ComparisonSection
        title="Czym HEXACO Różni Się od Myers-Briggs?"
        comparisonData={hexacoVsMbtiData}
      />
      
      <CaseStudySection
        title="Jak Tech Lead w aerospace zatrzymał exodus seniorów"
        caseStudy={aerospaceRetentionCase}
      />
      
      <FeaturesSection
        title="Dlaczego Tech Leadzi Wybierają LU Teams"
        features={[
          {
            icon: "🎯",
            title: "Przewidywanie Konfliktów",
            description: "Które osobowości wejdą w zwarcie przy Code Review? Synergy Radar pokazuje 3-6 m-cy naprzód"
          },
          // ... more features
        ]}
      />
      
      <MetricsBarSection metrics={metricsData} />
      
      <PricingSection plans={['starter']} />
      
      <FinalCTASection />
    </>
  );
}
```

**Action items:**
- [ ] Add FounderCredibilitySection with photo + bio
- [ ] Create ComparisonSection component for tables
- [ ] Add 1 detailed case study (300-400 words)
- [ ] Expand features section (4-6 feature cards)
- [ ] Add MetricsBarSection
- [ ] Insert product screenshot/video demo
- [ ] Test page length: target 6-7 screen heights

---

### PAGE 3: /pl/l/toxic-genius

**Current issues:**
- Duplicate title in HTML
- Pricing inconsistency (PLN vs USD)
- Testimonials bez attributions
- Zbyt wiele powtarzających się CTA

**Required changes:**

**1. Fix HTML structure**
```diff
- <h1>Landing Page: LU Teams - HEXACO Synergy Radar</h1>
- <h1>Toxic Genius Niszczy Twój Zespół?</h1>
+ <h1>Toxic Genius Niszczy Twój Zespół?</h1>
```

**2. Improve testimonials**
```diff
- "Tech Lead, 12-osobowy zespół, Producent rozwiązań Aerospace"
+ Include photo (even stock photo with disclaimer)
+ Add specific company type: "Senior Tech Lead, 12-person team, Aerospace Defense Contractor"
+ Add specific metric: "Reduced conflict incidents by 60%"
```

**3. Reduce CTA repetition**
```
Current: 5x "Zacznij Plan Starter"
Target: 3x strategically placed

Keep CTAs at:
- Hero section
- After "Jak Działa HEXACO" (3-step)
- Final CTA section

Remove CTAs from:
- After problem section
- Middle of FAQ
```

**4. Add "Toxic Genius Pattern" visualization**
```html
<div class="pattern-visualization">
  <img src="/images/toxic-genius-pattern-diagram.png" alt="Toxic Genius pattern flow" />
  <p class="caption">Jak HEXACO identyfikuje wzorzec: Niskie H + Niskie A = Wysokie ryzyko toksyczności</p>
</div>
```

**Specific code changes:**

```tsx
// /pages/pl/l/toxic-genius.tsx

export default function ToxicGeniusLandingPage() {
  return (
    <>
      <HeroSection
        eyebrow="Kończymy z toksycznym geniuszem"
        headline="Toxic Genius Niszczy Twój Zespół?"
        subheadline="Przewiduj konflikty, zanim wybuchną – HEXACO Synergy Radar za 200 zł miesięcznie"
        primaryCTA={{ text: "Zacznij Plan Starter", href: "#pricing" }}
        secondaryCTA={{ text: "Zobacz jak to działa", href: "#how-it-works" }}
        trustBadges={[
          "14 dni gwarancji zwrotu",
          "Anuluj w dowolnej chwili",
          "Model naukowy HEXACO"
        ]}
        imageSrc="/images/synergy-radar-conflict-preview.png"
        imageAlt="HEXACO Synergy Radar pokazujący ryzyko konfliktu"
      />
      
      <ProblemSection
        title="Znasz Ten Scenariusz?"
        problems={[
          {
            emoji: "😤",
            title: "Genialny, Ale Niemożliwy",
            description: "Twój najlepszy developer ma 10x output, ale zespół go unika..."
          },
          // ... more problems
        ]}
        costBreakdown={{
          title: "Prawdziwy Koszt 'Toxic Genius'",
          items: [
            { value: "50,000+ zł", description: "strat z rotacji rocznie" },
            { value: "30-40%", description: "spadku velocity zespołu" },
            { value: "6 miesięcy", description: "marnowanych na onboarding" }
          ]
        }}
      />
      
      <SolutionSection
        title="Jak Działa HEXACO Synergy Radar"
        subtitle="To nie jest kolejny Myers-Briggs"
        steps={threeStepProcess}
      />
      
      <PatternVisualizationSection /> {/* NEW */}
      
      <SocialProofSection
        testimonials={[
          {
            quote: "...",
            author: {
              name: "Jan Kowalski", // If real name available
              title: "Tech Lead, 12-person engineering team",
              company: "Aerospace Manufacturing",
              photo: "/testimonials/jan-k.jpg",
              metric: "Reduced team conflict by 60%"
            }
          }
        ]}
      />
      
      <PricingSection plans={['starter', 'professional', 'scale']} highlightPlan="starter" />
      
      <FAQSection questions={faqData} />
      
      <FinalCTASection />
    </>
  );
}
```

**Action items:**
- [ ] Fix duplicate h1 title
- [ ] Reduce CTAs from 5 to 3
- [ ] Improve testimonial attributions (add photos, metrics)
- [ ] Create PatternVisualizationSection with diagram
- [ ] Ensure pricing uses unified system (from pricing.config.ts)
- [ ] Add specific "toxic genius" pattern breakdown
- [ ] Test page flow: users should hit CTA after 2-3 screens

---

### PAGE 4: /pl/l/zespol-zdalny

**Current issues:**
- Zbyt krótka (brak context)
- Brak pricing breakdown
- Brak FAQ
- Zero product screenshots
- Słaba konwersja (tylko 1 CTA na końcu)

**Required changes:**

**1. Expand remote-specific problems**
```html
<ProblemSection
  title="Praca Zdalna i Hybrydowa Potęguje Dysfunkcje Zespołu"
  problems={[
    {
      emoji: "🤐",
      title: "Cisi Architekci Znikają z Radaru",
      description: "W biurze widziałeś, kto siedzi zamyślony. W remote? Silent Architect przestaje pisać na Slacku."
    },
    {
      emoji: "💥",
      title: "Toxic Genius Staje Się Jeszcze Gorszy",
      description: "Brak kontaktu twarzą w twarz usuwa hamulce. Pasywno-agresywne wiadomości, brutalne Code Review."
    },
    {
      emoji: "📉",
      title: "Niewidoczny Spadek Zaangażowania",
      description: "Zielony status na Slacku maskuje brak motywacji. Velocity spada, a Ty nie wiesz kto się wypala."
    }
  ]}
/>
```

**2. Add "Remote Communication Matrix"**
```html
<section class="remote-communication-matrix">
  <h2>Jak HEXACO Mapuje Style Komunikacji w Remote</h2>
  <table>
    <thead>
      <tr>
        <th>Profil HEXACO</th>
        <th>Potrzeby w Remote</th>
        <th>Red Flags</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Wysoka Ekstrawersja (X)</td>
        <td>Potrzebuje video calli, więdnie przy async</td>
        <td>Zaczyna miss'ować spotkania</td>
      </tr>
      <tr>
        <td>Niska Ekstrawersja</td>
        <td>Preferuje tekst, przytłoczona ciągłymi callami</td>
        <td>Przestaje włączać kamerę</td>
      </tr>
      <tr>
        <td>Niskie H + Niskie A</td>
        <td>Brutalni w pisemnym feedbacku</td>
        <td>Toksyczne komentarze na Slacku</td>
      </tr>
    </tbody>
  </table>
</section>
```

**3. Add pricing section**
- Insert full PricingSection component
- Show what's included specifically for remote teams

**4. Add FAQ section**
```javascript
const remoteFAQs = [
  {
    question: "Czy LU Teams działa w zespołach hybrydowych?",
    answer: "Tak. Praca hybrydowa jest najtrudniejsza, bo mieszasz dwa tryby komunikacji..."
  },
  {
    question: "Jak długo trwa implementacja dla zespołu zdalnego?",
    answer: "15 minut Twojego czasu. Test HEXACO można wypełnić asynchronicznie..."
  },
  // ... 4 more
];
```

**5. Add product demo/screenshot**
```html
<section class="product-demo-section">
  <h2>Synergy Radar w Akcji: Remote Team Dashboard</h2>
  <img src="/images/remote-team-dashboard.png" alt="Dashboard showing remote team dynamics" />
  <p>Zobacz, jak HEXACO identyfikuje communication gaps w zespołach rozproszonych</p>
</section>
```

**Specific code changes:**

```tsx
// /pages/pl/l/zespol-zdalny.tsx

export default function ZespolZdalnyLandingPage() {
  return (
    <>
      <HeroSection
        eyebrow="Zarządzanie zespołem zdalnym"
        headline="Zdalny Zespół = Zdalne Problemy?"
        subheadline="Komunikacja się zacina, a Ty nie wiesz dlaczego. HEXACO wykrywa niewidoczne napięcia."
        primaryCTA={{ text: "Zacznij Plan Starter", href: "#pricing" }}
        secondaryCTA={{ text: "Zobacz demo", href: "#demo" }}
        trustBadges={[
          "Dedykowane dla remote/hybrid teams",
          "Identyfikuje communication gaps",
          "Przewiduje konflikty 3-6 m-cy wcześniej"
        ]}
        imageSrc="/images/remote-team-preview.png"
        imageAlt="Remote team collaboration dashboard"
      />
      
      <ProblemSection
        title="Praca Zdalna i Hybrydowa Potęguje Dysfunkcje Zespołu"
        problems={remoteProblemsList}
      />
      
      <SolutionSection
        title="Jak HEXACO Działa w Zespołach Zdalnych"
        steps={[
          {
            number: 1,
            title: "Mapowanie Stylów Komunikacji",
            description: "Remote eliminuje sygnały niewerbalne. HEXACO pokazuje realne preferencje."
          },
          {
            number: 2,
            title: "Przewidywanie Konfliktów Remote-Specific",
            description: "Napięcia, które w biurze są pod kontrolą, w remote wybuchają ze zdwojoną siłą."
          },
          {
            number: 3,
            title: "Remote Team Playbook",
            description: "Konkretne rekomendacje dla zespołów rozproszonych."
          }
        ]}
      />
      
      <RemoteCommunicationMatrixSection /> {/* NEW */}
      
      <ProductDemoSection /> {/* NEW */}
      
      <SocialProofSection
        testimonials={remoteTeamTestimonials}
      />
      
      <PricingSection
        plans={['starter']}
        customDescription="Plan Starter jest idealny dla małych zespołów remote (5-8 osób)"
      />
      
      <FAQSection questions={remoteFAQs} />
      
      <FinalCTASection
        headline="Przestań Zgadywać, Co Dzieje Się po Drugiej Stronie Ekranu"
        description="Zrozum dynamikę swojego zespołu zdalnego dzięki twardym danym"
      />
    </>
  );
}
```

**Action items:**
- [ ] Expand problem section (from 3 short paragraphs to full ProblemSection component)
- [ ] Create RemoteCommunicationMatrixSection with table
- [ ] Add ProductDemoSection with screenshot
- [ ] Insert full PricingSection (currently missing)
- [ ] Add FAQSection with 5-6 remote-specific questions
- [ ] Add second CTA in hero (two-button layout)
- [ ] Test page length: target 6-7 screen heights (currently ~3)

---

## 🟡 P2 - MEDIUM PRIORITY (Sprint 2)

### 4. MOBILE OPTIMIZATION

**Critical mobile issues to fix:**

**A. Responsive Hero Section**
```css
@media (max-width: 768px) {
  .hero-headline {
    font-size: 32px; /* Down from 48px */
    line-height: 1.2;
  }
  
  .hero-cta-group {
    flex-direction: column;
    width: 100%;
  }
  
  .cta-primary,
  .cta-secondary {
    width: 100%;
    text-align: center;
  }
}
```

**B. Responsive Tables**
- Comparison tables (HEXACO vs MBTI) won't fit on mobile
- Solution: Convert to accordion/tabs on mobile

```tsx
function ResponsiveComparisonTable({ data }) {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  if (isMobile) {
    return <ComparisonAccordion data={data} />;
  }
  
  return <ComparisonTableDesktop data={data} />;
}
```

**C. Touch-friendly CTAs**
```css
@media (max-width: 768px) {
  .cta-primary,
  .cta-secondary {
    min-height: 48px; /* Apple's recommended touch target */
    font-size: 16px; /* Prevents iOS zoom on input focus */
  }
}
```

**D. Sticky header on scroll (mobile)**
```tsx
function MobileStickyHeader() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <div className="mobile-sticky-header">
      <span className="sticky-price">200 zł/mies</span>
      <a href="#pricing" className="sticky-cta">Zacznij</a>
    </div>
  );
}
```

**Action items:**
- [ ] Test all landing pages on iPhone SE (375px), iPhone 14 (390px), iPad (768px)
- [ ] Implement responsive tables (accordion on mobile)
- [ ] Increase touch target sizes (minimum 44x44px)
- [ ] Add sticky CTA bar on mobile
- [ ] Test form inputs (prevent iOS zoom on focus)
- [ ] Optimize images for mobile (WebP format, responsive srcset)

---

### 5. PERFORMANCE OPTIMIZATION

**Lazy load images below the fold:**
```tsx
import Image from 'next/image';

<Image
  src="/hero-image.png"
  alt="Product screenshot"
  width={600}
  height={400}
  loading="lazy" // for images below fold
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..." // generate with plaiceholder
/>
```

**Preload critical assets:**
```html
<!-- In <head> -->
<link rel="preload" href="/founder-photo.png" as="image" />
<link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin />
```

**Action items:**
- [ ] Implement next/image for all images
- [ ] Add lazy loading for below-fold images
- [ ] Optimize images: convert to WebP, compress
- [ ] Preload critical fonts and hero images
- [ ] Implement code splitting (dynamic imports for heavy components)
- [ ] Test Lighthouse scores: target 90+ Performance

---

### 6. ACCESSIBILITY (A11Y)

**Critical accessibility fixes:**

**A. Proper heading hierarchy**
```html
<!-- Every page should have ONE h1 -->
<h1>Main page headline</h1>
  <h2>Section title</h2>
    <h3>Subsection</h3>
```

**B. Alt text for all images**
```tsx
// Good
<img src="/chart.png" alt="HEXACO Synergy Radar showing conflict prediction between team members" />

// Bad
<img src="/chart.png" alt="chart" />
<img src="/photo.png" alt="" /> // Only if decorative
```

**C. Focus states for interactive elements**
```css
.cta-primary:focus,
.cta-secondary:focus {
  outline: 3px solid #2563EB;
  outline-offset: 2px;
}

/* Remove outline only if using visible focus indicator */
.cta-primary:focus-visible {
  outline: 3px solid #2563EB;
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.2);
}
```

**D. Keyboard navigation**
```tsx
// Ensure all interactive elements are keyboard accessible
<button
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
>
  Action
</button>
```

**E. Color contrast**
- All text must pass WCAG AA: 4.5:1 for normal text, 3:1 for large text
- Use contrast checker: https://webaim.org/resources/contrastchecker/

**Action items:**
- [ ] Audit heading hierarchy on all pages
- [ ] Add descriptive alt text to all images
- [ ] Implement visible focus states
- [ ] Test keyboard navigation (tab through entire page)
- [ ] Check color contrast ratios
- [ ] Run axe DevTools audit on all pages
- [ ] Add aria-labels where needed (e.g., icon buttons)

---

## 🟢 P3 - LOW PRIORITY (Future sprints)

### 7. FOOTER NAVIGATION

Add comprehensive footer to all landing pages:

```tsx
function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Produkt</h4>
          <ul>
            <li><a href="/pl#how-it-works">Jak to działa</a></li>
            <li><a href="/pl#patterns">Wzorce</a></li>
            <li><a href="/pl/pricing">Cennik</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Landing Pages</h4>
          <ul>
            <li><a href="/pl/l/retencja">Retencja</a></li>
            <li><a href="/pl/l/toxic-genius">Toxic Genius</a></li>
            <li><a href="/pl/l/tech-lead">Tech Lead</a></li>
            <li><a href="/pl/l/zespol-zdalny">Zespół Zdalny</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Zasoby</h4>
          <ul>
            <li><a href="/pl/blog">Blog</a></li>
            <li><a href="/pl/case-studies">Case Studies</a></li>
            <li><a href="/pl/about">O Nas</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Firma</h4>
          <ul>
            <li><a href="/pl/privacy">Polityka Prywatności</a></li>
            <li><a href="/pl/terms">Regulamin</a></li>
            <li><a href="/pl/contact">Kontakt</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Social Media</h4>
          <ul className="social-links">
            <li><a href="https://linkedin.com/company/luteams">LinkedIn</a></li>
            <li><a href="https://twitter.com/luteams">Twitter</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 LU Teams. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
}
```

---

## TESTING CHECKLIST

Before marking any page as "done", run through this checklist:

### Visual Testing
- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on iPhone (Safari), Android (Chrome)
- [ ] Test on tablet (iPad)
- [ ] Check all breakpoints: 320px, 375px, 768px, 1024px, 1440px

### Functional Testing
- [ ] All CTAs clickable and link to correct URLs
- [ ] Currency switcher works and persists
- [ ] Pricing displays correctly in all currencies
- [ ] Forms (if any) submit properly
- [ ] Images load correctly

### Performance Testing
- [ ] Lighthouse score: 90+ Performance
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3s
- [ ] Images optimized (WebP, proper sizing)

### Accessibility Testing
- [ ] Keyboard navigation works
- [ ] Screen reader friendly (test with VoiceOver/NVDA)
- [ ] Color contrast passes WCAG AA
- [ ] All images have alt text
- [ ] Proper heading hierarchy

### SEO Testing
- [ ] Title tag unique and descriptive
- [ ] Meta description present (150-160 chars)
- [ ] One h1 per page
- [ ] Internal links working
- [ ] Open Graph tags present

---

## DELIVERY TIMELINE

### Week 1 (P0)
- Day 1-2: Implement pricing system with calculator
- Day 3-4: Build template components (Hero, Problem, Solution, etc.)
- Day 5: Refactor /pl/l/retencja with new templates

### Week 2 (P0 + P1)
- Day 1: Refactor /pl/l/tech-lead
- Day 2: Refactor /pl/l/toxic-genius
- Day 3: Refactor /pl/l/zespol-zdalny
- Day 4: Implement conversion flow architecture
- Day 5: Testing and bug fixes

### Week 3 (P2)
- Day 1-2: Mobile optimization
- Day 3-4: Performance optimization
- Day 5: Accessibility audit and fixes

### Week 4 (P3)
- Day 1: Footer implementation
- Day 2-3: Final testing and QA
- Day 4-5: Documentation and handoff

---

## SUCCESS METRICS

Track these metrics to measure improvement:

**Conversion Rate:**
- Baseline: Current conversion rate
- Target: +25% increase after P0 fixes
- Target: +50% increase after all fixes

**Bounce Rate:**
- Baseline: Current bounce rate
- Target: <40% on landing pages

**Time on Page:**
- Baseline: Current average
- Target: 2+ minutes on landing pages

**CTA Click Rate:**
- Primary CTA: >15% click rate
- Secondary CTA: >8% click rate

**Page Load Speed:**
- Target: <2s First Contentful Paint
- Target: <3s Time to Interactive

---

## DEVELOPER NOTES

**Tech Stack Assumptions:**
- Next.js (React)
- TypeScript
- Tailwind CSS (or CSS modules)
- next/image for image optimization

**Code Organization:**
```
/components
  /landing
    HeroSection.tsx
    ProblemSection.tsx
    SolutionSection.tsx
    SocialProofSection.tsx
    PricingSection.tsx
    FAQSection.tsx
    FinalCTASection.tsx
    
/config
  pricing.config.ts
  
/styles
  landing-sections.css
  
/pages
  /pl
    index.tsx
    /l
      retencja.tsx
      tech-lead.tsx
      toxic-genius.tsx
      zespol-zdalny.tsx
```

**Git Workflow:**
1. Create feature branch from main
2. Implement one page at a time
3. Test thoroughly before merge
4. Create PR with screenshots
5. Get review before merging to main

---

## QUESTIONS FOR STAKEHOLDER

Before starting implementation, clarify:

1. **Pricing:**
   - Confirm USD as base currency
   - Confirm PLN conversion rate (currently 4.0)
   - Should we auto-detect user location for currency?

2. **Content:**
   - Do we have real testimonials with photos and permissions?
   - Do we have product screenshots ready?
   - Do we have founder photo in high quality?

3. **Technical:**
   - Current hosting/deployment setup?
   - Analytics tracking already implemented?
   - A/B testing infrastructure available?

4. **Timeline:**
   - Hard launch date?
   - Beta testing period?
   - Which page is highest priority?

---

## HANDOFF TO DEVELOPER

**What you're getting:**
- Complete UI/UX specifications
- CSS code samples
- React component templates
- Pricing calculator logic
- Mobile optimization guide
- Accessibility checklist
- Testing requirements

**What you need to do:**
1. Read this entire document
2. Set up development environment
3. Create feature branches for each priority level
4. Implement P0 items first (pricing + templates)
5. Test each page before moving to next
6. Deploy to staging for review
7. Address feedback
8. Deploy to production

**Communication:**
- Daily standups for status updates
- Slack channel for quick questions
- Weekly review of completed pages
- Staging links for stakeholder review

**Need clarification?**
- Tag @pawel for business logic questions
- Tag @designer for visual questions
- Tag @qa for testing questions

---

## APPENDIX: DESIGN TOKENS

**Colors:**
```css
:root {
  /* Primary */
  --color-primary-50: #EFF6FF;
  --color-primary-100: #DBEAFE;
  --color-primary-600: #2563EB;
  --color-primary-700: #1D4ED8;
  --color-primary-800: #1E40AF;
  --color-primary-900: #1E3A8A;
  
  /* Gray */
  --color-gray-50: #F9FAFB;
  --color-gray-100: #F3F4F6;
  --color-gray-500: #6B7280;
  --color-gray-700: #374151;
  --color-gray-900: #111827;
  
  /* Semantic */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  
  /* Backgrounds */
  --bg-primary: #FFFFFF;
  --bg-secondary: #F9FAFB;
  --bg-accent: #EFF6FF;
}
```

**Typography:**
```css
:root {
  /* Font Family */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  
  /* Font Sizes */
  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;
  --text-3xl: 28px;
  --text-4xl: 36px;
  --text-5xl: 48px;
  --text-6xl: 60px;
  
  /* Line Heights */
  --leading-tight: 1.1;
  --leading-normal: 1.5;
  --leading-relaxed: 1.6;
  
  /* Font Weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
}
```

**Spacing:**
```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
}
```

**Border Radius:**
```css
:root {
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
}
```

**Shadows:**
```css
:root {
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
```

---

**END OF DOCUMENT**

Total action items: 87
Estimated development time: 3-4 weeks (1 developer)
Priority distribution: 40% P0, 35% P1, 20% P2, 5% P3
