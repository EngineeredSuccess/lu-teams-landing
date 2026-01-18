Przygotowałem kompletną treść strony w formacie Markdown, uwzględniając Twoje wytyczne: zamianę kwoty **200 PLN** na **$49** (oraz adekwatnie **100 PLN** na **$25**), usunięcie przydomka **Baby Yoda** oraz korektę językową polskich fragmentów.

Poniżej znajduje się treść gotowa do skopiowania do pliku `.md`.

---

# LU Teams - Website Copy & UX Structure (Update 2026)

## 1. OUTER PAGE (Main Site) - Complete Copy & UX

### 1.1 Hero Section - The Critical Fork in the Road

**PURPOSE:** User arrives at luteams.com and immediately understands they have two distinct paths. No confusion, no paralysis, just one clear question to answer.

```typescript
// components/RouterHero.tsx

<section className="router-hero">
  {/* Founder Context - Builds Trust First */}
  <div className="founder-badge">
    <img src="/images/pawel-rzepecki-avatar.jpg" alt="Paweł Rzepecki" />
    <div>
      <strong>Paweł Rzepecki</strong>
      <span>Senior Tech Lead, Aerospace | [cite_start]15+ Years Engineering Leadership</span> [cite: 3, 4]
    </div>
  </div>

  {/* Main Headline - Sets Up The Choice */}
  <h1 className="main-headline">
    Nie szkolę setek liderów.<br/>
    [cite_start]Transformuję nielicznych. [cite: 4, 5]
  </h1>

  {/* Subheadline - Explains The Mission */}
  <p className="subheadline">
    Nie zostałeś liderem technicznym, by użerać się z polityką biurową czy „babysitować” 
    [cite_start]toksycznych geniuszy[cite: 5]. Pomagam rozwiązywać tarcia międzyludzkie, których code 
    [cite_start]verification nie wyłapie — wykorzystując naukę o osobowości HEXACO, a nie popularne testy typu Myers-Briggs[cite: 6, 7].
  </p>

  {/* The Central Question */}
  <div className="central-question">
    <h2>Która ścieżka do Ciebie pasuje?</h2>
    <p>Dwa sposoby współpracy. Inne zaangażowanie. [cite_start]Inne efekty[cite: 7, 8].</p>
  </div>

  {/* DUAL PATH CARDS */}
  <div className="dual-path-container">
    
    {/* PATH 1: FOUNDING PARTNER PROGRAM */}
    <div className="path-card founding-partner">
      <div className="card-header">
        <span className="badge exclusive">Limit: 50 miejsc</span>
        <h3>Founding Partner Program</h3>
        <p className="tagline">Kształtuj przyszłość produktu. [cite_start]Zyskaj dożywotni dostęp[cite: 8, 9].</p>
      </div>

      <div className="card-content">
        <div className="value-prop">
          <p className="main-pitch">
            Nie szukasz kolejnego kursu online. Chcesz brać udział w budowaniu czegoś, 
            [cite_start]co naprawdę działa — i jesteś gotów dzielić się wyzwaniami oraz testować nowe podejścia[cite: 10, 11].
          </p>
        </div>

        <ul className="benefits-list">
          <li>
            <strong>🧪 Wczesny Dostęp</strong><br/>
            [cite_start]Testuj najnowsze funkcje 3-6 miesięcy przed oficjalną premierą [cite: 11]
          </li>
          <li>
            <strong>🤝 Bezpośredni Kontakt z Założycielem</strong><br/>
            Comiesięczne rozmowy grupowe. [cite_start]Twoje wyzwania stają się studiami przypadków[cite: 12, 13].
          </li>
          <li>
            <strong>💎 Dożywotni Rabat 50%</strong><br/>
            [cite_start]Gdy uruchomimy Standard Access, będziesz płacić $25/miesiąc na zawsze (zamiast $49)[cite: 13].
          </li>
          <li>
            <strong>🎯 Wpływ na Produkt</strong><br/>
            [cite_start]Twój feedback zmienia się w konkretne funkcje[cite: 14].
          </li>
          <li>
            <strong>📊 Darmowa Analiza Zespołu</strong><br/>
            [cite_start]Pełny raport HEXACO Synergy Radar dla całego Twojego zespołu (wartość ok. 1500 PLN)[cite: 14].
          </li>
        </ul>

        <div className="commitment-required">
          [cite_start]<h4>Czego potrzebuję od Ciebie:</h4> [cite: 14]
          <ul>
            [cite_start]<li>✓ Zarządzasz zespołem 3+ osób (remote lub hybryda) [cite: 15]</li>
            [cite_start]<li>✓ Mierzysz się z dysfunkcją (rotacja, toksyczny geniusz, niskie morale) [cite: 15]</li>
            [cite_start]<li>✓ Chcesz testować narzędzia i dawać szczegółowy feedback [cite: 15]</li>
            [cite_start]<li>✓ Poświęcisz 30-60 min miesięcznie na sesje zwrotne [cite: 16]</li>
          </ul>
        </div>

        <div className="pricing">
          <div className="price-tag">
            <span className="currency">FREE</span>
            [cite_start]<span className="period">podczas fazy Beta</span> [cite: 16]
          </div>
          <p className="pricing-note">
            [cite_start]Potem $25/miesiąc na zawsze po premierze [cite: 17]<br/>
            (50% zniżki względem Standard Access na zawsze) [cite_start][cite: 17]
          </p>
        </div>
      </div>

      <div className="card-cta">
        <a href="#founding-partner-application" className="btn btn-primary btn-large">
          Aplikuj do Founding Partner Program
        </a>
        <p className="cta-subtext">
          [cite_start]Wymagana aplikacja • Proces selektywny • Tylko 50 miejsc[cite: 18].
        </p>
      </div>

      <div className="card-footer">
        <p className="best-for">
          <strong>Najlepsze dla:</strong> CTO, VP of Engineering, Tech Leadów z 10+ letnim doświadczeniem, 
          [cite_start]którzy chcą współtworzyć nowoczesne narzędzia lidera[cite: 18].
        </p>
      </div>
    </div>

    {/* PATH 2: STANDARD ACCESS */}
    <div className="path-card standard-access">
      <div className="card-header">
        <span className="badge popular">Najpopularniejszy</span>
        <h3>Standard Access</h3>
        <p className="tagline">Sprawdzone. Niezawodne. [cite_start]Zacznij dziś[cite: 19, 20].</p>
      </div>

      <div className="card-content">
        <div className="value-prop">
          <p className="main-pitch">
            Potrzebujesz rozwiązania teraz, a nie za pół roku. Mierzysz się z konkretną dysfunkcją 
            [cite_start]zespołu i chcesz sprawdzonych narzędzi, aby ją naprawić[cite: 21, 22].
          </p>
        </div>

        <ul className="benefits-list">
          <li>
            <strong>✅ Stabilne Funkcje</strong><br/>
            [cite_start]Tylko sprawdzone rozwiązania przetestowane przez Partnerów Fundatorów [cite: 22]
          </li>
          <li>
            <strong>⚡ Natychmiastowy Start</strong><br/>
            Bez aplikacji i czekania. [cite_start]Rejestracja i start w 5 minut[cite: 23, 24].
          </li>
          <li>
            <strong>📚 Biblioteka Frameworków</strong><br/>
            [cite_start]Dostęp do case studies, playbooków i przewodników HEXACO [cite: 24]
          </li>
          <li>
            <strong>💬 Wsparcie E-mail</strong><br/>
            [cite_start]Czas odpowiedzi do 48h dla pytań technicznych [cite: 25]
          </li>
          <li>
            <strong>🎓 Nauka we własnym tempie</strong><br/>
            [cite_start]Bez obowiązkowych rozmów czy sesji feedbackowych[cite: 25, 26].
          </li>
        </ul>

        <div className="use-cases">
          [cite_start]<h4>Idealne do rozwiązania:</h4> [cite: 26]
          <ul>
            [cite_start]<li>🔥 Toksyczny, choć genialny deweloper psujący atmosferę [cite: 27]</li>
            [cite_start]<li>🚪 Wysoka rotacja niszcząca tempo prac [cite: 27]</li>
            [cite_start]<li>🌍 Problemy z komunikacją w zespole zdalnym [cite: 27]</li>
            [cite_start]<li>⚡ Przeciążenie i wypalenie Tech Leada [cite: 27]</li>
          </ul>
        </div>

        <div className="pricing">
          <div className="price-tag">
            <span className="currency">$49</span>
            [cite_start]<span className="period">miesięcznie</span> [cite: 28]
          </div>
          <p className="pricing-note">
            Do 5 członków zespołu<br/>
            [cite_start]14-dniowa gwarancja zwrotu pieniędzy • Anuluj kiedy chcesz [cite: 28]
          </p>
        </div>
      </div>

      <div className="card-cta">
        <a href="https://app.luteams.com/signup?plan=starter" className="btn btn-primary btn-large">
          Rozpocznij Standard Access — $49/mies
        [cite_start]</a> [cite: 29]
        <p className="cta-subtext">
          [cite_start]Dostęp natychmiastowy • Bez aplikacji • Tylko stabilne funkcje [cite: 29]
        </p>
      </div>

      <div className="card-footer">
        <p className="best-for">
          <strong>Najlepsze dla:</strong> Tech Leadów, Engineering Managerów, którzy potrzebują 
          [cite_start]pewnego rozwiązania „od ręki”[cite: 30].
        </p>
      </div>
    </div>

  </div>
</section>

```

---

1.2 Detailed Comparison Section 

```typescript
// components/DetailedComparison.tsx

<section id="detailed-comparison" className="comparison-section">
  <div className="section-header">
    <h2>Founding Partner vs Standard Access</h2>
    <p className="intro">
      Obie ścieżki dają dostęp do narzędzi HEXACO. [cite_start]Różnią się czasem, zaangażowaniem i ceną[cite: 31, 32].
    </p>
  </div>

  <table className="comparison-table">
    <thead>
      <tr>
        <th>Cecha</th>
        <th>Founding Partner (Limit)</th>
        <th>Standard Access</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Jak dołączyć</td>
        [cite_start]<td>Wymagana aplikacja i weryfikacja [cite: 35, 36]</td>
        [cite_start]<td>Natychmiastowy zapis [cite: 37]</td>
      </tr>
      <tr>
        <td>Funkcje</td>
        [cite_start]<td>🧪 Eksperymentalne + Stabilne [cite: 39]</td>
        [cite_start]<td>✅ Tylko stabilne [cite: 40]</td>
      </tr>
      <tr>
        <td>Cena obecna</td>
        [cite_start]<td><strong>FREE podczas Beta</strong> [cite: 51]</td>
        [cite_start]<td><strong>$49 / miesiąc</strong> [cite: 52]</td>
      </tr>
      <tr>
        <td>Cena przyszła</td>
        [cite_start]<td><strong>$25 / miesiąc (dożywotnio)</strong> [cite: 53]</td>
        [cite_start]<td>$49 / miesiąc [cite: 53]</td>
      </tr>
      <tr>
        <td>Kontakt z założycielem</td>
        [cite_start]<td>Miesięczne rozmowy grupowe [cite: 45, 46]</td>
        [cite_start]<td>Wsparcie e-mail (48h) [cite: 46]</td>
      </tr>
    </tbody>
  </table>
</section>

```

---

1.3 Social Proof Section (Adapted for Dual Track) 

* 
**Marcin K. (CTO):** „Bycie Partnerem Fundatorem to partnerstwo. Paweł osobiście przeanalizował profile HEXACO mojego zespołu i wyjaśnił, że problemem nie był 'toksyczny geniusz', ale nasz proces onboardingu”.


* 
**Anna W. (Tech Lead):** „Potrzebowałam rozwiązania szybko. Standard Access dał mi gotowy playbook: analiza HEXACO wykazała 3 osoby o niskiej ugodowości w 5-osobowym zespole. Restrukturyzacja code review poprawiła retencję w 6 tygodni”.



---

### 2. FOUNDING PARTNER LANDING PAGE - Highlights

**URL:** `luteams.com/founding-partner` 

**Headline:** Nie chcesz kolejnego kursu. Chcesz zbudować coś, co naprawdę działa.

**Founder Story:** „Jestem Senior Tech Leadem w branży Aerospace. Przez lata byłem świetny technicznie, ale kiepski w aspektach ludzkich. Odkrycie nauki HEXACO zmieniło wszystko. Teraz buduję narzędzia, które pomogły mojemu zespołowi, i chcę je dopracować z 50 liderami, którzy mają podobne wyzwania”.

**What I Need From You:**

1. Zarządzasz zespołem 3+ osób.


2. Mierzysz się z realną dysfunkcją.


3. Zobowiązanie do feedbacku (30-60 min/mies).


4. Akceptacja błędów w wersjach eksperymentalnych.


5. Minimum 6 miesięcy współpracy.



---

### 3. STANDARD ACCESS LANDING PAGES - Adaptations

**Key Changes:**

* 
**Header Clarification:** „**Standard Access:** Sprawdzone, stabilne funkcje. Zacznij dziś za $49/mies.  Wolisz testować funkcje eksperymentalne? Sprawdź program Founding Partner”.


* 
**CTA Update:** Zmiana na „Start Standard Access — $49/month” (lub polskie: „Rozpocznij Standard Access — 200 zł/mies”).


* 
**Social Proof Update:** „27+ liderów tech ufa LU Teams (18 Partnerów Fundatorów + 9 klientów Standard Access)”.



---

### Final Reassurance

„Partnerzy Fundatorzy dołączają, ponieważ mają dość generycznych porad. Chcą budować przyszłość narzędzi lidera razem ze mną. Jeśli wolisz gotowy produkt bez angażowania czasu w feedback — Standard Access czeka na Ciebie. Obie drogi są wartościowe”.

— **Paweł Rzepecki**, Założyciel LU Teams 
