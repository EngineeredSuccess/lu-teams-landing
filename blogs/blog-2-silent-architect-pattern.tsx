'use client';

import React from 'react';

export default function SilentArchitectPattern() {
  return (
    <article className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-slate-950 to-violet-950/30" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-violet-500/15 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-24 md:py-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 text-sm font-medium rounded-full border border-indigo-500/30">
              Team Dynamics Pattern
            </span>
            <span className="text-slate-500 text-sm">10 min read</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            The Silent Architect: Your Best Engineer Is Planning to Quit
          </h1>

          <p className="text-xl md:text-2xl text-slate-200 leading-relaxed max-w-3xl">
            The introverted high-performer who looks "fine" in standups is updating their LinkedIn.
            Here's how to recognize under-leveraged talent before they walk out the door.
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

        {/* The Hook */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-950/50 to-slate-900/50 border-l-4 border-indigo-500 p-8 rounded-r-xl mb-10">
            <p className="text-lg text-slate-300 leading-relaxed italic">
              "I thought she was happy. She never complained. Her code was always excellent. Then one
              Friday she asked for a quick call and resigned. Said she'd felt invisible for two years.
              We'd just passed her over for tech lead—gave it to the guy who talked more in meetings."
            </p>
            <p className="mt-4 text-slate-500">— Engineering Director at a Fortune 500 tech company</p>
          </div>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            In every engineering organization I've worked with, there's at least one Silent Architect.
            They're the developer who quietly refactors the authentication system over a weekend,
            preventing a security disaster no one else saw coming. They're the one who catches the
            edge case in the code review that would have crashed production.
          </p>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            They don't interrupt in meetings. They don't self-promote on Slack. They don't send
            "look what I built" emails to leadership. And because of this, they're systematically
            overlooked for promotions, undercompensated, and eventually—inevitably—they leave.
          </p>

          <p className="text-lg text-slate-300 leading-relaxed">
            The loss of a Silent Architect is often more damaging than the departure of a visible
            star. Because by the time you realize what they were doing, they're already gone.
          </p>
        </section>

        {/* The Visibility Problem */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            The Visibility Gap That Costs You Top Talent
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            Promotion decisions in most tech companies are heavily biased toward visibility. We
            say we value "impact," but what we actually measure is "impact we noticed."
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-400 mb-3">What Gets Rewarded</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Speaking up in meetings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Leading visible projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Sending company-wide updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Self-advocacy in performance reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Building relationships with leadership</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-400 mb-3">What Actually Matters</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Code quality and architecture decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Preventing problems before they occur</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Mentoring through code reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Deep technical problem-solving</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Documentation and knowledge sharing</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Research consistently shows that introverts make up approximately 25-40% of the population,
            but leadership roles skew dramatically toward extroverts—not because extroverts are better
            leaders, but because our promotion systems reward extroverted behaviors.
          </p>

          <div className="bg-gradient-to-r from-amber-950/30 to-slate-900/30 border border-amber-900/30 rounded-xl p-6">
            <p className="text-amber-300 font-medium mb-2">The Research:</p>
            <p className="text-slate-400 leading-relaxed">
              Studies from Harvard Business Review show that introverted leaders often outperform
              extroverted ones when leading proactive teams—precisely the teams most common in
              software engineering. Yet extroverts are promoted to leadership at nearly 3x the rate.
            </p>
          </div>
        </section>

        {/* Case Study */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            Case Study: The Developer Who Almost Quit
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            I coached "Mei" through one of the most frustrating situations I've encountered—and
            one of the most instructive.
          </p>

          <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-slate-100 mb-4">The Situation</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Mei was a senior backend engineer at a mid-sized SaaS company. Her code was flawless.
              Her system designs were elegant. Other engineers consistently cited her as their most
              helpful code reviewer. But in meetings, she rarely spoke unless directly asked. She
              didn't attend optional social events. Her manager's assessment: "solid contributor,
              maybe not leadership material."
            </p>
            <p className="text-slate-400">
              Sound familiar?
            </p>
          </div>

          <div className="border-l-2 border-slate-700 pl-6 space-y-6 mb-8">
            <div>
              <h4 className="text-lg font-semibold text-indigo-400 mb-2">The Breaking Point</h4>
              <p className="text-slate-400 leading-relaxed">
                When a tech lead role opened up, Mei was passed over for a more visible (but less
                technically skilled) colleague. She'd never explicitly expressed interest in the
                role—because she assumed her work would speak for itself. It didn't.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-violet-400 mb-2">What We Discovered</h4>
              <p className="text-slate-400 leading-relaxed">
                In our coaching sessions, we mapped her actual contributions over the past year.
                She'd prevented three major incidents through code review catches. She'd designed
                the system that handled their Black Friday traffic without a hiccup. She'd mentored
                two junior developers into strong mid-level engineers. None of this was visible
                to leadership because none of it came with fanfare.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-2">The Intervention</h4>
              <p className="text-slate-400 leading-relaxed">
                We worked on two fronts: first, creating systems to make her contributions visible
                without requiring her to self-promote (which felt deeply inauthentic to her). Second,
                working with her manager to change how they evaluated and recognized contribution.
                Six months later, she was promoted to Staff Engineer.
              </p>
            </div>
          </div>

          <p className="text-lg text-slate-300 leading-relaxed">
            The lesson: Mei wasn't the problem. The visibility system was the problem. And most
            organizations have the same broken system.
          </p>
        </section>

        {/* Warning Signs */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            Warning Signs You're Losing a Silent Architect
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            The Silent Architect doesn't announce their frustration. They internalize it. Here are
            the subtle signals that your quiet high-performer is on their way out.
          </p>

          <div className="space-y-6">
            <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">1</span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">Reduced Code Review Depth</h3>
                  <p className="text-slate-400 leading-relaxed">
                    They used to write thorough, educational code review comments. Now their reviews
                    are perfunctory "LGTM" stamps. This isn't laziness—it's disengagement. They've
                    stopped investing in a team they're planning to leave.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center font-bold">2</span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">Volunteering Stops</h3>
                  <p className="text-slate-400 leading-relaxed">
                    They used to quietly take on the unglamorous work—documentation, technical debt,
                    onboarding new hires. Now they do exactly what's assigned and nothing more.
                    They've stopped adding discretionary effort to an organization that doesn't
                    see them.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">3</span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">LinkedIn Activity Spike</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Updated profile photo. New skills added. Connections with recruiters. The Silent
                    Architect won't tell you they're interviewing—but LinkedIn tells the story for
                    anyone paying attention.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">4</span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">One-on-Ones Get Shorter</h3>
                  <p className="text-slate-400 leading-relaxed">
                    They used to engage thoughtfully when asked about challenges or career goals.
                    Now everything is "fine." They've stopped sharing because they've stopped
                    believing it will make a difference.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-950/30 to-slate-900/30 border border-red-900/30 rounded-xl p-6 mt-8">
            <p className="text-red-300 font-medium mb-2">Critical Insight:</p>
            <p className="text-slate-400 leading-relaxed">
              The crucial mistake is interpreting silence as satisfaction. Introverted high-performers
              don't complain vocally—they vote with their feet. By the time you realize something's
              wrong, they've usually already made the decision to leave.
            </p>
          </div>
        </section>

        {/* HEXACO Analysis */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            The HEXACO Profile of the Silent Architect
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Understanding the personality dimensions at play helps managers better serve—and
            retain—their introverted high-performers.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-indigo-400 mb-3">High Conscientiousness</h3>
              <p className="text-slate-400 leading-relaxed">
                Silent Architects typically score high on Conscientiousness—they're thorough,
                reliable, and detail-oriented. This is why their work is excellent. But it also
                means they expect fairness and recognition for quality work—and feel deeply
                frustrated when visibility trumps substance.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-violet-400 mb-3">Lower Extraversion</h3>
              <p className="text-slate-400 leading-relaxed">
                Low Extraversion doesn't mean low ambition or low engagement. It means they
                recharge through solitary work, prefer written to verbal communication, and
                find self-promotion uncomfortable. These aren't weaknesses—they're preferences
                that require different management approaches.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">Higher Honesty-Humility</h3>
              <p className="text-slate-400 leading-relaxed">
                The H-Factor often runs high in Silent Architects. They don't manipulate,
                political maneuver, or self-aggrandize. This integrity is valuable—but in
                organizations that reward self-promotion, it becomes a career liability.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Variable Emotionality</h3>
              <p className="text-slate-400 leading-relaxed">
                Some Silent Architects have low emotionality—they're calm under pressure but
                also don't express frustration externally. Others have higher emotionality but
                suppress it. Either way, their feelings aren't visible, making it harder for
                managers to read their engagement level.
              </p>
            </div>
          </div>

          <p className="text-lg text-slate-300 leading-relaxed">
            The key insight: these personality traits make them excellent individual contributors
            and potential leaders—but they require recognition systems that don't depend on
            self-promotion.
          </p>
        </section>

        {/* Coaching Approach */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            How to Draw Out Quiet Brilliance
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            When I coach managers with Silent Architects on their teams, we focus on three core
            strategies: creating visibility systems, restructuring one-on-ones, and building
            contribution recognition into the team culture.
          </p>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-100 mb-4">1. Contribution Documentation</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Create systems where contributions are automatically visible—not dependent on
                self-reporting. This might include: code review impact metrics, incident prevention
                tracking, documentation contribution logs, and mentorship acknowledgment systems.
              </p>
              <p className="text-slate-400 text-sm">
                The goal: make invisible work visible without requiring the person to promote themselves.
              </p>
            </div>

            <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-100 mb-4">2. Better One-on-One Structure</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Standard one-on-ones often favor extroverts: verbal discussion, real-time thinking,
                relationship-building small talk. For introverted high-performers, try: sending
                questions in advance, using written formats when appropriate, focusing on work rather
                than personal connection, and creating space for them to share concerns without
                direct confrontation.
              </p>
              <p className="text-slate-400 text-sm">
                Ask specific questions: "What's one thing that frustrated you this week?" beats
                "How are things going?"
              </p>
            </div>

            <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-100 mb-4">3. Alternative Visibility Paths</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Not everyone should have to present in All Hands to be recognized. Create visibility
                paths that work for different personality types: written technical blog posts,
                documentation contributions, code walkthrough recordings, architectural decision
                records (ADRs), and team retrospective contributions.
              </p>
              <p className="text-slate-400 text-sm">
                The principle: visibility should be accessible, not a contest that only extroverts can win.
              </p>
            </div>
          </div>
        </section>

        {/* LU Teams Section */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            How LU Teams Identifies Under-Leveraged Talent
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            One of the core capabilities of LU Teams is identifying talent that traditional
            management approaches miss. The platform uses HEXACO profiling combined with team
            dynamics analysis to surface Silent Architects before they disengage.
          </p>

          <div className="bg-gradient-to-br from-indigo-950/50 to-violet-950/30 border border-indigo-900/50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-indigo-200 mb-4">What the Platform Identifies</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-indigo-400 mt-1">→</span>
                <span><strong className="text-slate-100">High-potential introverts:</strong> Team members whose personality profiles suggest strong contribution capacity but low visibility tendency</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400 mt-1">→</span>
                <span><strong className="text-slate-100">Engagement risk factors:</strong> Combinations of high Conscientiousness with low recognition that predict disengagement</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400 mt-1">→</span>
                <span><strong className="text-slate-100">Management style mismatches:</strong> When a manager's approach systematically disadvantages certain personality types</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400 mt-1">→</span>
                <span><strong className="text-slate-100">Leadership potential:</strong> Silent Architects who have the capability for technical leadership if given appropriate support</span>
              </li>
            </ul>
          </div>

          <p className="text-lg text-slate-300 leading-relaxed">
            The goal isn't to change introverts into extroverts—it's to build teams and management
            systems that leverage all personality types effectively.
          </p>
        </section>

        {/* Actionable Steps */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            What You Can Do This Week
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">1</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Audit Your Team's Visibility Distribution</h3>
                <p className="text-slate-400 leading-relaxed">
                  Look at who gets mentioned in leadership updates, who presents in team meetings,
                  who's credited in launch announcements. Is there a pattern? Are some people
                  consistently invisible despite strong contributions?
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">2</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Restructure Your One-on-Ones</h3>
                <p className="text-slate-400 leading-relaxed">
                  For quieter team members, send your agenda 24 hours in advance. Include specific
                  questions like "What's one thing that would make your work better?" and "Is there
                  anything you've done recently that you feel went unrecognized?"
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">3</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Create Written Contribution Channels</h3>
                <p className="text-slate-400 leading-relaxed">
                  Start a team engineering blog, ADR system, or documentation program where
                  contributions are visible without requiring verbal presentation. Make written
                  contributions count in performance evaluations.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">4</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Actively Attribute Work</h3>
                <p className="text-slate-400 leading-relaxed">
                  In team meetings and leadership updates, explicitly credit quiet contributors.
                  "This launch was successful because Mei caught the edge case in code review"
                  creates visibility that they won't create for themselves.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">5</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Ask Directly About Career Goals</h3>
                <p className="text-slate-400 leading-relaxed">
                  Silent Architects often assume their work speaks for itself. It doesn't. Ask them
                  explicitly: "Are you interested in leadership roles? What would it take for you to
                  feel recognized here?" Then act on what they tell you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
            <h2 className="font-serif text-2xl font-bold text-slate-100 mb-4">
              The Leaders You're Not Seeing
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              Somewhere on your team right now, there's a Silent Architect. They're writing the
              code that keeps your product running. They're catching the bugs that would have cost
              you customers. They're quietly making everyone around them better.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              They're also wondering if anyone notices. And they're probably about six months away
              from updating their LinkedIn.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 border-t border-slate-800">
          <h2 className="font-serif text-2xl font-bold text-slate-100 mb-4">
            Identify Hidden Talent on Your Team
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            LU Teams uses personality science to surface under-leveraged talent before they
            disengage. Join the beta to access team dynamics insights.
          </p>
          <a
            href="/beta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-xl hover:from-indigo-500 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/25"
          >
            Join the Beta Program
            <span>→</span>
          </a>
        </section>

        {/* Related Content */}
        <section className="py-12 border-t border-slate-800">
          <h3 className="text-lg font-semibold text-slate-400 mb-6">Continue Reading</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="/blog/toxic-genius-pattern" className="group block bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <span className="text-sm text-red-400 mb-2 block">Team Dynamics Pattern</span>
              <h4 className="text-lg font-semibold text-slate-100 group-hover:text-red-300 transition-colors">The Toxic Genius: How One Brilliant Engineer Cost Us $10 Million</h4>
              <p className="text-slate-500 mt-2 text-sm">When technical brilliance becomes team destruction.</p>
            </a>
            <a href="/blog/echo-chamber-effect" className="group block bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <span className="text-sm text-emerald-400 mb-2 block">Team Dynamics Pattern</span>
              <h4 className="text-lg font-semibold text-slate-100 group-hover:text-emerald-300 transition-colors">The Echo Chamber: When Cognitive Diversity Disappears</h4>
              <p className="text-slate-500 mt-2 text-sm">Why teams of brilliant people sometimes produce mediocre results.</p>
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
