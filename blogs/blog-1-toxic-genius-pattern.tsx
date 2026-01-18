'use client';

import React from 'react';

export default function ToxicGeniusPattern() {
  return (
    <article className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-slate-950 to-orange-950/30" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-24 md:py-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-red-500/20 text-red-400 text-sm font-medium rounded-full border border-red-500/30">
              Team Dynamics Pattern
            </span>
            <span className="text-slate-500 text-sm">12 min read</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            The Toxic Genius: How One Brilliant Engineer Cost Us $10 Million
          </h1>

          <p className="text-xl md:text-2xl text-slate-200 leading-relaxed max-w-3xl">
            The pattern that destroys more engineering teams than any technical debt.
            Learn to detect it before the damage is done.
          </p>

          <div className="flex items-center gap-4 mt-8 pt-8 border-t border-slate-800">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white">
              PR
            </div>
            <div>
              <p className="font-medium text-slate-200">Paweł Rzepecki</p>
              <p className="text-sm text-slate-500">Remote Team Leadership Coach · LU Teams</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">

        {/* The Hook - $10M Case Study */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-red-950/50 to-slate-900/50 border-l-4 border-red-500 p-8 rounded-r-xl mb-10">
            <p className="text-lg text-slate-300 leading-relaxed italic">
              "He was the best architect we'd ever hired. Six months later, eight engineers had quit,
              two major products were delayed, and the total damage exceeded $10 million.
              The worst part? We saw the signs and did nothing."
            </p>
            <p className="mt-4 text-slate-500">— CTO of a Series B startup, reflecting on their Toxic Genius</p>
          </div>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            This story repeats across the tech industry with devastating predictability. A brilliant
            individual contributor joins the team. Their code is immaculate. Their technical solutions
            are elegant. Their architectural decisions are sound. On paper, they're exactly what every
            engineering organization dreams of hiring.
          </p>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Then the cracks appear. Code reviews become interrogations. Junior developers stop asking
            questions. Collaboration withers. The team's collective intelligence—the magic that makes
            great software—evaporates.
          </p>

          <p className="text-lg text-slate-300 leading-relaxed">
            I've coached over 200 technical leaders through this exact pattern. What I've learned is
            that the Toxic Genius isn't a personnel problem—it's a business catastrophe hiding behind
            impressive GitHub contributions.
          </p>
        </section>

        {/* The Real Cost Section */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            The Mathematics of Destruction
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            Let's talk numbers, because this is where leadership teams consistently underestimate the damage.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-red-400 mb-2">40-60%</p>
              <p className="text-slate-400">Team turnover within 24 months when a Toxic Genius remains unchecked</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-orange-400 mb-2">35%</p>
              <p className="text-slate-400">Average velocity drop in teams affected by toxic high-performers</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-amber-400 mb-2">$150K+</p>
              <p className="text-slate-400">Replacement cost per departed senior engineer (salary + recruiting + ramp-up)</p>
            </div>
          </div>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            But the visible costs are just the surface. The hidden damage runs deeper: the features that
            were never proposed because junior engineers feared mockery. The innovative solutions that
            died in silence because collaboration had become psychological warfare. The promising team
            members who learned to stay invisible rather than risk humiliation.
          </p>

          <p className="text-lg text-slate-300 leading-relaxed">
            Every interaction with a Toxic Genius costs the team emotional calories. By the time engineers
            open their IDE, they're already depleted. You cannot build remarkable products with exhausted people.
          </p>
        </section>

        {/* Early Warning Signs */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            The Four Warning Signs You're Probably Ignoring
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            Through hundreds of coaching sessions, I've identified the consistent early indicators that
            distinguish a Toxic Genius from a high-standard leader. The difference isn't in their
            expectations—it's in the direction of their energy.
          </p>

          <div className="space-y-6">
            <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold">1</span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">The Silencing Effect</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Standups get quieter. Code review comments decrease. Questions in Slack channels drop.
                    This isn't efficiency—it's fear. When team members stop sharing ideas, you've lost the
                    collaborative intelligence that makes engineering teams valuable.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">2</span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">The Feedback Asymmetry</h3>
                  <p className="text-slate-400 leading-relaxed">
                    High-standard leaders give feedback that lifts while challenging. Toxic Geniuses give
                    feedback that tears down to establish superiority. Watch the pattern: does their feedback
                    make people better, or does it make them feel smaller?
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">3</span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">The Hero Complex</h3>
                  <p className="text-slate-400 leading-relaxed">
                    They rewrite entire codebases at 3 AM, then spend the morning explaining why everyone
                    else is an idiot for not understanding it. They create complexity that only they can
                    navigate, making themselves indispensable while making the team dependent.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center font-bold">4</span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">The Credit Vacuum</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Successes become their accomplishments. Failures become team failures—or worse,
                    specific individuals' failures. Watch how credit and blame flow around this person.
                    Healthy teams share both. Toxic environments concentrate credit and distribute blame.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pattern Psychology */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            The Psychology Behind the Pattern
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Understanding why this pattern exists is crucial for addressing it effectively. The Toxic
            Genius isn't evil—they're operating from a specific psychological profile that produces
            predictable behaviors.
          </p>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            In personality research, particularly the HEXACO model, this pattern maps to a specific
            combination: exceptional cognitive ability paired with low Honesty-Humility (the H-Factor).
            The H-Factor measures sincerity, fairness, greed avoidance, and modesty. When it's low,
            you get someone who believes their intelligence entitles them to different rules.
          </p>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-slate-100 mb-4">Why DiSC and MBTI Miss This</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Most organizations rely on DiSC or MBTI assessments for team building. These tools have
              value, but they weren't designed to detect character—they measure behavioral preferences
              and cognitive styles.
            </p>
            <p className="text-slate-300 leading-relaxed">
              A Toxic Genius might show up as a "D" in DiSC (direct, results-oriented) or an INTJ in
              MBTI (strategic, independent). Neither profile suggests anything problematic. The H-Factor
              in HEXACO specifically measures the trait that distinguishes between healthy high-achievers
              and destructive ones.
            </p>
          </div>

          <p className="text-lg text-slate-300 leading-relaxed">
            This is why traditional personality assessments fail to predict the Toxic Genius pattern.
            They're measuring the wrong dimensions entirely.
          </p>
        </section>

        {/* Real Case Study */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            Case Study: The Unraveling
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Let me walk you through a real case from my coaching practice (details anonymized).
          </p>

          <div className="border-l-2 border-slate-700 pl-6 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Setup: Month 1-3</h3>
              <p className="text-slate-400 leading-relaxed">
                "Marcus" joined as a Staff Engineer at a fintech company. His interviews were stellar—deep
                technical knowledge, articulate communication, impressive portfolio. Within weeks, he'd
                identified and fixed three critical architectural issues that had plagued the platform
                for months. Leadership was thrilled.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-amber-400 mb-2">Escalation: Month 4-8</h3>
              <p className="text-slate-400 leading-relaxed">
                Small incidents accumulated. A junior developer cried after a code review. A mid-level
                engineer requested a team transfer without explanation. Marcus's PRs started appearing
                with comments disabled—he'd convinced his manager that "async feedback was more efficient."
                Team retrospectives became shorter as people stopped raising concerns.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Breaking Point: Month 9-11</h3>
              <p className="text-slate-400 leading-relaxed">
                Three engineers resigned in six weeks. Exit interviews revealed a consistent pattern:
                public humiliation disguised as technical feedback, credit-taking for collaborative work,
                and an atmosphere of psychological unsafety. The VP of Engineering finally commissioned
                a comprehensive 360-degree review. The results were damning.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-red-400 mb-2">Aftermath: Month 12+</h3>
              <p className="text-slate-400 leading-relaxed">
                Marcus was placed on a performance improvement plan focused on interpersonal behavior.
                He resigned within two weeks. The damage: eight departed engineers, two delayed product
                launches, estimated costs exceeding $2.8 million in direct costs alone. Rebuilding team
                trust took another eighteen months.
              </p>
            </div>
          </div>
        </section>

        {/* Coaching Approach */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            The Coaching Approach: What Actually Works
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            When I work with organizations dealing with a Toxic Genius pattern, the intervention
            depends entirely on early detection. The earlier you identify the pattern, the more
            options you have.
          </p>

          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-slate-100 mb-4">Phase 1: Pattern Confirmation</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Before any intervention, we need to distinguish between a high-standard leader who
              challenges people (valuable) and a toxic individual who damages them (destructive).
              I use structured 360-degree feedback combined with HEXACO profiling to build an
              objective picture.
            </p>
            <p className="text-slate-400 text-sm">
              Key question: Does their presence make the team collectively smarter, or does it make
              individual members smaller?
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-slate-100 mb-4">Phase 2: Direct Intervention</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              For individuals with moderate self-awareness, direct coaching can work. This involves
              concrete feedback tied to business outcomes (not just "be nicer"), behavioral modeling
              of healthy high-standard leadership, and accountability structures with clear consequences.
            </p>
            <p className="text-slate-400 text-sm">
              Success rate at this phase: approximately 30% show meaningful sustained improvement.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-slate-100 mb-4">Phase 3: Structural Decisions</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              When coaching fails, leadership must make structural decisions. This might mean role
              changes that minimize team interaction, performance improvement plans with behavioral
              metrics, or separation. The key insight: the cost of keeping a Toxic Genius almost
              always exceeds the cost of their departure.
            </p>
            <p className="text-slate-400 text-sm">
              The mathematics are unambiguous: one high performer cannot compensate for the departure
              of three competent team players.
            </p>
          </div>
        </section>

        {/* LU Teams Detection */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            Automating Early Detection with LU Teams
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            The challenge with the Toxic Genius pattern is that by the time it's obvious, the damage
            is done. You need systems that surface warning signs before they become crises.
          </p>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            This is exactly why I built LU Teams. The platform uses HEXACO-based assessments to
            identify concerning personality combinations during hiring and team formation—before
            the pattern has a chance to establish itself.
          </p>

          <div className="bg-gradient-to-br from-blue-950/50 to-indigo-950/30 border border-blue-900/50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-blue-200 mb-4">How LU Teams Detects the Pattern</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">→</span>
                <span><strong className="text-slate-100">H-Factor Analysis:</strong> Direct measurement of Honesty-Humility to identify concerning profiles before they're hired</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">→</span>
                <span><strong className="text-slate-100">Team Compatibility Mapping:</strong> Predictive modeling of how specific personality combinations will interact</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">→</span>
                <span><strong className="text-slate-100">Risk Scoring:</strong> Automated identification of high-talent/low-humility combinations that predict the Toxic Genius pattern</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">→</span>
                <span><strong className="text-slate-100">Ongoing Team Health:</strong> Periodic assessments that surface emerging dynamics before they crystallize</span>
              </li>
            </ul>
          </div>

          <p className="text-lg text-slate-300 leading-relaxed">
            The goal isn't to exclude every confident, high-achieving candidate. It's to identify
            the specific combination of traits that predicts destructive behavior, so you can make
            informed decisions rather than expensive mistakes.
          </p>
        </section>

        {/* Actionable Steps */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            What You Can Do Monday Morning
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            Whether or not you have access to sophisticated assessment tools, here are concrete
            steps you can take immediately to address this pattern in your organization.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">1</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Audit Your Hiring Process</h3>
                <p className="text-slate-400 leading-relaxed">
                  Add behavioral interview questions specifically designed to assess humility. Ask candidates
                  to describe a time they were wrong about a technical decision. Watch for how they talk about
                  former colleagues. Do they credit others or position themselves as the hero of every story?
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">2</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Implement Structured 360s</h3>
                <p className="text-slate-400 leading-relaxed">
                  Move beyond annual performance reviews. Quarterly 360-degree feedback with specific
                  behavioral questions can surface concerning patterns early. Include questions about
                  psychological safety and collaborative dynamics, not just technical competence.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">3</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Watch the Quiet Signals</h3>
                <p className="text-slate-400 leading-relaxed">
                  Train your managers to notice when collaboration decreases. Fewer questions in standups,
                  shorter retrospectives, decreased PR comments—these are leading indicators. By the time
                  someone files a formal complaint, you've already lost months of damage.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">4</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Create Clear Behavioral Standards</h3>
                <p className="text-slate-400 leading-relaxed">
                  Technical excellence is not enough for employment. Define explicit behavioral expectations
                  and make them part of performance evaluation. When someone asks "but they're so productive,"
                  you need documented standards that demonstrate why collaboration matters.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">5</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Act Faster Than Feels Comfortable</h3>
                <p className="text-slate-400 leading-relaxed">
                  The single most consistent regret from the CTOs and VPEs I coach: "We waited too long."
                  When the pattern becomes clear, move decisively. The cost of delayed action compounds
                  exponentially. Every month of inaction is another potential resignation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
            <h2 className="font-serif text-2xl font-bold text-slate-100 mb-4">
              The Bottom Line
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              The Toxic Genius pattern is predictable, detectable, and preventable. The organizations
              that build great engineering cultures don't do so by tolerating brilliant jerks—they do
              so by systematically selecting for both excellence and character.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Culture isn't what you say. It's what you tolerate. And tolerating the Toxic Genius
              sends a clear message to everyone else on the team about what you actually value.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 border-t border-slate-800">
          <h2 className="font-serif text-2xl font-bold text-slate-100 mb-4">
            Stop the Pattern Before It Starts
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            LU Teams uses HEXACO-based assessments to identify concerning personality combinations
            before they damage your team. Join the beta to access predictive team analytics.
          </p>
          <a
            href="/beta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg shadow-blue-500/25"
          >
            Join the Beta Program
            <span>→</span>
          </a>
        </section>

        {/* Related Content */}
        <section className="py-12 border-t border-slate-800">
          <h3 className="text-lg font-semibold text-slate-400 mb-6">Continue Reading</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="/blog/silent-architect-pattern" className="group block bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <span className="text-sm text-blue-400 mb-2 block">Team Dynamics Pattern</span>
              <h4 className="text-lg font-semibold text-slate-100 group-hover:text-blue-300 transition-colors">The Silent Architect: When Your Best Engineer is About to Quit</h4>
              <p className="text-slate-500 mt-2 text-sm">Why introverted high-performers get overlooked and how to retain them.</p>
            </a>
            <a href="/coaching" className="group block bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <span className="text-sm text-green-400 mb-2 block">Services</span>
              <h4 className="text-lg font-semibold text-slate-100 group-hover:text-green-300 transition-colors">1-on-1 Leadership Coaching</h4>
              <p className="text-slate-500 mt-2 text-sm">Work directly with me to address team dynamics challenges in your organization.</p>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>© 2025 LU Teams. Building better engineering cultures through personality science.</p>
      </footer>
    </article>
  );
}
