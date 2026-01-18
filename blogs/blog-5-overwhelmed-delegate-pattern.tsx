'use client';

import React from 'react';

export default function OverwhelmedDelegatePattern() {
  return (
    <article className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-950/40 via-slate-950 to-pink-950/30" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-24 md:py-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-rose-500/20 text-rose-400 text-sm font-medium rounded-full border border-rose-500/30">
              Team Dynamics Pattern
            </span>
            <span className="text-slate-500 text-sm">11 min read</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            The Overwhelmed Delegate: Why Your Best IC Became Your Worst Manager
          </h1>

          <p className="text-xl md:text-2xl text-slate-200 leading-relaxed max-w-3xl">
            They were brilliant with code. Now they're drowning in 1-on-1s, working nights,
            and the team is paralyzed. The hidden crisis of technical leaders who can't let go.
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
          <div className="bg-gradient-to-r from-rose-950/50 to-slate-900/50 border-l-4 border-rose-500 p-8 rounded-r-xl mb-10">
            <p className="text-lg text-slate-300 leading-relaxed italic">
              "I promoted our best senior engineer to tech lead six months ago. Now she's working
              70-hour weeks, her team is frustrated because they can't get anything approved without
              her, and she told me last week she misses 'just writing code.' The promotion was
              supposed to be a reward. Instead, I broke someone."
            </p>
            <p className="mt-4 text-slate-500">— VP of Engineering, mid-stage startup</p>
          </div>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            The Overwhelmed Delegate is one of the most common—and most heartbreaking—failure
            patterns in engineering leadership. It happens when brilliant individual contributors
            get promoted into management roles, then discover that the skills that made them
            exceptional engineers actively sabotage their ability to lead.
          </p>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            They want to do a good job. They work harder than ever. But instead of multiplying
            the team's output, they become a bottleneck. Every decision flows through them.
            Every code review requires their approval. They can't let go—because letting go
            feels like accepting lower standards.
          </p>

          <p className="text-lg text-slate-300 leading-relaxed">
            The result: a burned-out leader, a dependent team, and an organization that would
            have been better served leaving them as an IC.
          </p>
        </section>

        {/* The Root Cause */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            Why Great Engineers Make Reluctant Delegators
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            The same traits that make someone an excellent IC often make delegation feel impossible.
            Understanding this dynamic is the first step toward addressing it.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-rose-400 mb-3">What Made Them Great ICs</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-1">•</span>
                  <span>Obsessive attention to detail</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-1">•</span>
                  <span>"If you want it done right, do it yourself"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-1">•</span>
                  <span>Deep ownership over their work</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-1">•</span>
                  <span>High standards that don't flex</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-1">•</span>
                  <span>Identity tied to technical excellence</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-pink-400 mb-3">What That Looks Like in Leadership</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">•</span>
                  <span>Reviewing every PR personally</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">•</span>
                  <span>Rewriting delegated work "just to clean it up"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">•</span>
                  <span>Being the decision-maker for everything</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">•</span>
                  <span>Can't approve anything "good enough"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">•</span>
                  <span>Working nights because days are meetings</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-slate-300 leading-relaxed">
            The fundamental shift required for leadership—from "doing great work" to "enabling
            others to do great work"—requires a complete rewiring of habits and identity. Most
            organizations promote people into this role without any support for making that transition.
          </p>
        </section>

        {/* Case Study */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            Case Study: The Tech Lead Who Couldn't Stop Coding
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            "Raj" was one of the most talented engineers I've ever coached—and one of the most
            stuck.
          </p>

          <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-slate-100 mb-4">The Background</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Raj had been a staff engineer for three years when he was promoted to Tech Lead
              of a six-person team. His technical skills were exceptional—clean architecture,
              elegant code, a knack for solving the hardest problems. Leadership assumed he'd
              naturally multiply his impact across the team.
            </p>
            <p className="text-slate-400">
              Instead, he became a single point of failure.
            </p>
          </div>

          <div className="border-l-2 border-slate-700 pl-6 space-y-6 mb-8">
            <div>
              <h4 className="text-lg font-semibold text-rose-400 mb-2">Month 1-2: The Warning Signs</h4>
              <p className="text-slate-400 leading-relaxed">
                Raj's calendar filled with meetings, but he was still in every code review.
                He started working evenings to "keep up with the actual work." His team
                learned that getting a PR approved required Raj's personal sign-off—which
                meant waiting for whenever he had time.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-pink-400 mb-2">Month 3-4: The Collapse</h4>
              <p className="text-slate-400 leading-relaxed">
                Sprint velocity dropped 40%. Two engineers requested transfers, citing
                frustration that they couldn't do anything without Raj's approval. Raj himself
                was exhausted—sleeping four hours a night, skipping family dinners, constantly
                anxious about the work piling up.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-fuchsia-400 mb-2">The Root Cause</h4>
              <p className="text-slate-400 leading-relaxed">
                In our coaching sessions, Raj articulated the core fear clearly: "If I don't
                review everything personally, things will ship that aren't good enough. And
                that will reflect on me. I'll have failed." His identity as "the person who
                maintains quality" was incompatible with delegation.
              </p>
            </div>
          </div>

          <p className="text-lg text-slate-300 leading-relaxed">
            The solution wasn't telling Raj to "trust his team more." It was systematically
            building his confidence that quality could be maintained without his personal
            involvement in every decision.
          </p>
        </section>

        {/* Warning Signs */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            Warning Signs of an Overwhelmed Delegate
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            The Overwhelmed Delegate rarely asks for help—they just work harder. Here's how
            to spot the pattern before it leads to burnout.
          </p>

          <div className="space-y-6">
            <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold">1</span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">They're Always the Bottleneck</h3>
                  <p className="text-slate-400 leading-relaxed">
                    PRs sit waiting for their review. Decisions wait for their input. The team's
                    progress directly correlates with this person's availability. When the tech
                    lead takes a vacation, work stops.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold">2</span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">Working Hours Creep</h3>
                  <p className="text-slate-400 leading-relaxed">
                    They're online at 6 AM and 11 PM. Weekends become "catch-up time." They joke
                    about being busy, but the joke has an edge to it. The calendar is packed with
                    meetings, so actual work happens in the margins.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-fuchsia-500/20 text-fuchsia-400 flex items-center justify-center font-bold">3</span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">Team Members Stop Growing</h3>
                  <p className="text-slate-400 leading-relaxed">
                    When the tech lead always provides the answer, the team stops developing
                    problem-solving skills. Junior engineers plateau because they never get to
                    struggle through hard problems—the tech lead "helps" by solving it for them.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">4</span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">Nostalgia for "Real Work"</h3>
                  <p className="text-slate-400 leading-relaxed">
                    "I miss just writing code." "I feel like I'm not actually contributing
                    anything." "Back when I was an IC, I was actually productive." These
                    statements reveal that they haven't made the identity shift from doer to enabler.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center font-bold">5</span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">Approval Anxiety</h3>
                  <p className="text-slate-400 leading-relaxed">
                    They're uncomfortable with things shipping without their explicit approval.
                    When something goes wrong, even if it was delegated appropriately, they feel
                    personally responsible and use it as evidence that they should have been
                    more involved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HEXACO Analysis */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            The HEXACO Profile: Conscientiousness Meets Control
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            The Overwhelmed Delegate pattern is strongly associated with specific HEXACO
            combinations that make delegation psychologically difficult.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-rose-400 mb-3">High Conscientiousness + Perfectionism</h3>
              <p className="text-slate-400 leading-relaxed">
                The perfectionism subfactor of Conscientiousness measures how much someone is
                bothered by mistakes and disorder. High scorers have exceptional quality standards
                but struggle to accept "good enough" from others. Every delegation feels like
                accepting a compromise.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-pink-400 mb-3">Low Trust Signals</h3>
              <p className="text-slate-400 leading-relaxed">
                Some Overwhelmed Delegates have underlying trust issues—not necessarily about
                people's intentions, but about their competence. They've been burned by delegated
                work that wasn't up to their standards, and generalized that experience into a
                belief that quality requires their personal involvement.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-slate-100 mb-4">The Core Fear</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Behind the Overwhelmed Delegate's behavior is usually a fear: that letting go means
              losing control over outcomes, and that losing control means things will go wrong,
              and that things going wrong will reflect on them.
            </p>
            <p className="text-slate-400">
              This fear isn't irrational—it's based on real experience. They've seen what happens
              when work isn't done to their standard. The challenge is building systems and skills
              that maintain quality without requiring their personal involvement in everything.
            </p>
          </div>
        </section>

        {/* The Fix */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            The Coaching Approach: Gradual Trust Building
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            When I work with Overwhelmed Delegates, we don't start with "trust your team more."
            That's too abstract and too scary. We start with concrete experiments that build
            confidence incrementally.
          </p>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-100 mb-4">1. The Delegation Ladder</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                We create a progression of increasingly significant delegations, starting with
                low-risk, low-stakes tasks. Each successful delegation builds evidence that
                quality can be maintained without their direct involvement.
              </p>
              <div className="mt-4 p-4 bg-slate-800/50 rounded-lg">
                <p className="text-sm text-slate-400">
                  <strong className="text-slate-300">Ladder example:</strong> Start with internal
                  documentation → then bug fixes → then small features → then code review authority
                  for others → then architectural decisions in specific domains.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-100 mb-4">2. Explicit Quality Criteria</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Part of the Overwhelmed Delegate's anxiety is that their standards are implicit—only
                they truly know what "good enough" means. We make those standards explicit through
                documented quality criteria, checklists, and review rubrics that others can apply.
              </p>
              <div className="mt-4 p-4 bg-slate-800/50 rounded-lg">
                <p className="text-sm text-slate-400">
                  <strong className="text-slate-300">Example:</strong> "A PR is ready to merge when
                  it passes these criteria..." creates shared understanding without requiring the
                  tech lead's personal judgment.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-100 mb-4">3. Post-Delegation Review</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Instead of being involved before decisions, we shift involvement to after. The tech
                lead reviews completed work—not to approve or reject, but to provide feedback and
                identify patterns for improvement. This maintains their quality influence without
                making them a bottleneck.
              </p>
              <div className="mt-4 p-4 bg-slate-800/50 rounded-lg">
                <p className="text-sm text-slate-400">
                  <strong className="text-slate-300">Mindset shift:</strong> From "nothing ships
                  without my approval" to "I help the team learn from everything that ships."
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-100 mb-4">4. Identity Reconstruction</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                The deepest work is helping them see leadership—not code—as their contribution.
                We track metrics like team growth, velocity improvements, and reduced dependencies.
                These become the new measures of their excellence.
              </p>
              <div className="mt-4 p-4 bg-slate-800/50 rounded-lg">
                <p className="text-sm text-slate-400">
                  <strong className="text-slate-300">Key question:</strong> "What would it look like
                  if your team was so good that they didn't need you for anything technical? Would
                  that feel like success or failure?"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LU Teams Section */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            How LU Teams Identifies Delegation-Resistant Profiles
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            LU Teams uses HEXACO profiling to identify individuals who may struggle with
            delegation before they're promoted into leadership roles.
          </p>

          <div className="bg-gradient-to-br from-rose-950/50 to-pink-950/30 border border-rose-900/50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-rose-200 mb-4">Proactive Identification</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-rose-400 mt-1">→</span>
                <span><strong className="text-slate-100">Perfectionism scoring:</strong> Identify high Conscientiousness individuals who may struggle with "good enough"</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-400 mt-1">→</span>
                <span><strong className="text-slate-100">Control orientation:</strong> Flag profiles that suggest difficulty releasing ownership</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-400 mt-1">→</span>
                <span><strong className="text-slate-100">Leadership readiness assessment:</strong> Evaluate fit for management vs. IC track progression</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-400 mt-1">→</span>
                <span><strong className="text-slate-100">Support recommendations:</strong> Specific coaching needs before and during leadership transitions</span>
              </li>
            </ul>
          </div>

          <p className="text-lg text-slate-300 leading-relaxed">
            The goal isn't to prevent these individuals from becoming leaders—it's to ensure
            they receive the specific support they need to make the transition successfully.
          </p>
        </section>

        {/* Actionable Steps */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            If You're an Overwhelmed Delegate (Or Manage One)
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">1</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Audit Your Approvals</h3>
                <p className="text-slate-400 leading-relaxed">
                  List everything that currently requires your sign-off. For each item, ask: "What
                  would happen if someone else approved this?" If the answer is "probably fine,"
                  that's a delegation candidate.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">2</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Document Your Standards</h3>
                <p className="text-slate-400 leading-relaxed">
                  Take everything you know intuitively about "good work" and write it down. Create
                  checklists, criteria, and examples. If your standards only exist in your head,
                  you're the only one who can apply them.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">3</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Create "Safe to Fail" Zones</h3>
                <p className="text-slate-400 leading-relaxed">
                  Identify areas where mistakes are recoverable and let go completely there.
                  Internal tools, staging environments, documentation—places where suboptimal
                  outcomes won't cause real damage. Use these as delegation practice.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">4</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Track Leadership Metrics</h3>
                <p className="text-slate-400 leading-relaxed">
                  Start measuring your success as a leader, not as an IC. Team velocity,
                  individual growth, reduced dependencies, knowledge sharing. Make these
                  your new performance indicators.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">5</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Accept That "Different" Isn't "Wrong"</h3>
                <p className="text-slate-400 leading-relaxed">
                  Others will solve problems differently than you would. That's not failure—it's
                  diversity of approach. Your job as a leader is to ensure outcomes are good,
                  not that the path matches what you would have done.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* For Organizations */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            What Organizations Can Do
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-rose-400 mb-3">Before the Promotion</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-1">•</span>
                  <span>Assess delegation readiness, not just technical skill</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-1">•</span>
                  <span>Discuss the IC vs. leadership track honestly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-1">•</span>
                  <span>Create stepping-stone roles (tech lead, then manager)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-1">•</span>
                  <span>Set expectations about what leadership actually means</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-pink-400 mb-3">During the Transition</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">•</span>
                  <span>Provide leadership coaching from day one</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">•</span>
                  <span>Explicitly reduce IC responsibilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">•</span>
                  <span>Set delegation goals alongside delivery goals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">•</span>
                  <span>Celebrate leadership wins, not just technical ones</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
            <h2 className="font-serif text-2xl font-bold text-slate-100 mb-4">
              The Leadership Paradox
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              The hardest thing about becoming a leader is accepting that your value comes from
              what others accomplish, not what you accomplish personally. For brilliant ICs,
              this can feel like losing their identity.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              But the best tech leaders I know have made this shift completely. They've learned
              that building a team that can ship great software without them is the highest
              form of engineering excellence. It's just a different kind of building.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 border-t border-slate-800">
          <h2 className="font-serif text-2xl font-bold text-slate-100 mb-4">
            Build Leadership-Ready Teams
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            LU Teams identifies delegation risk factors before promotion decisions and provides
            coaching recommendations for leadership transitions. Join the beta.
          </p>
          <a
            href="/beta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold rounded-xl hover:from-rose-500 hover:to-pink-500 transition-all shadow-lg shadow-rose-500/25"
          >
            Join the Beta Program
            <span>→</span>
          </a>
        </section>

        {/* Related Content */}
        <section className="py-12 border-t border-slate-800">
          <h3 className="text-lg font-semibold text-slate-400 mb-6">Continue Reading</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="/blog/gridlocked-squad-pattern" className="group block bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <span className="text-sm text-amber-400 mb-2 block">Team Dynamics Pattern</span>
              <h4 className="text-lg font-semibold text-slate-100 group-hover:text-amber-300 transition-colors">The Gridlocked Squad: Five Stars, Zero Shipping</h4>
              <p className="text-slate-500 mt-2 text-sm">When brilliant individuals can't produce as a team.</p>
            </a>
            <a href="/blog/toxic-genius-pattern" className="group block bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <span className="text-sm text-red-400 mb-2 block">Team Dynamics Pattern</span>
              <h4 className="text-lg font-semibold text-slate-100 group-hover:text-red-300 transition-colors">The Toxic Genius: How One Brilliant Engineer Cost Us $10 Million</h4>
              <p className="text-slate-500 mt-2 text-sm">When technical brilliance becomes team destruction.</p>
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
