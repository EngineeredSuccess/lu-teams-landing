'use client';

import React from 'react';

export default function GridlockedSquadPattern() {
  return (
    <article className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/40 via-slate-950 to-orange-950/30" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-24 md:py-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-sm font-medium rounded-full border border-amber-500/30">
              Team Dynamics Pattern
            </span>
            <span className="text-slate-500 text-sm">10 min read</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            The Gridlocked Squad: Five Stars, Zero Shipping
          </h1>

          <p className="text-xl md:text-2xl text-slate-200 leading-relaxed max-w-3xl">
            Everyone's a star performer. The debates are intellectually rigorous.
            The backlog keeps growing. Why talent density can become paralysis.
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
          <div className="bg-gradient-to-r from-amber-950/50 to-slate-900/50 border-l-4 border-amber-500 p-8 rounded-r-xl mb-10">
            <p className="text-lg text-slate-300 leading-relaxed italic">
              "I hired five exceptional engineers—each one could lead their own team at most companies.
              Six months later, we had 47 open PRs, three competing architectural proposals, and exactly
              zero features shipped to production. Every standup was a negotiation. Every code review
              was a debate. We were drowning in excellence."
            </p>
            <p className="mt-4 text-slate-500">— Engineering Director, growth-stage startup</p>
          </div>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            The Gridlocked Squad is one of the most frustrating team dynamics patterns because
            it looks like you're doing everything right. You hired top talent. You empowered
            the team. You created psychological safety for debate. And yet nothing moves.
          </p>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            The problem isn't the individuals—any one of them would thrive in a different context.
            The problem is the combination. When you put multiple high-achieving, high-conviction
            individuals together without clear role boundaries and decision protocols, you don't
            get synergy. You get gridlock.
          </p>

          <p className="text-lg text-slate-300 leading-relaxed">
            This is the paradox of talent density: past a certain point, adding more stars doesn't
            increase output—it creates friction that slows everything down.
          </p>
        </section>

        {/* The Mechanics */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            The Mechanics of Gridlock
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            Understanding why gridlock happens requires understanding what makes high performers
            high performers in the first place.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">High Performer Traits</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>Strong technical convictions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>High standards for code quality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>Confidence in their approach</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>Ability to spot suboptimal solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>Desire for ownership and impact</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-orange-400 mb-3">Gridlock Symptoms</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Every PR becomes a philosophical debate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Multiple "right" approaches compete</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Nobody wants to compromise their vision</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Decisions get revisited repeatedly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Ownership becomes territorial</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Each of these traits is individually valuable. The problem arises when everyone on
            the team has all of them. There's no one willing to say "your approach is fine,
            let's just ship it." Everyone has a better idea. Everyone can articulate why their
            approach is superior.
          </p>

          <div className="bg-gradient-to-r from-amber-950/30 to-slate-900/30 border border-amber-900/30 rounded-xl p-6">
            <p className="text-amber-300 font-medium mb-2">The Core Dynamic:</p>
            <p className="text-slate-400 leading-relaxed">
              High performers are used to being right and having their ideas win. When surrounded
              by other high performers, they experience something rare: legitimate intellectual
              competition. Without clear protocols for resolution, every decision becomes a
              battle nobody wants to lose.
            </p>
          </div>
        </section>

        {/* Case Study */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            Case Study: The Platform Team That Couldn't Ship
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            I was brought in to coach a team at a late-stage startup that exemplified the
            Gridlocked Squad pattern perfectly.
          </p>

          <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-slate-100 mb-4">The Setup</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Five senior engineers tasked with building a new internal platform. Each had 8+ years
              of experience. Two were former tech leads. One had written a book on distributed
              systems. Another had built similar platforms at two previous companies.
            </p>
            <p className="text-slate-400">
              Leadership expected them to be unstoppable. Instead, they were stuck.
            </p>
          </div>

          <div className="border-l-2 border-slate-700 pl-6 space-y-6 mb-8">
            <div>
              <h4 className="text-lg font-semibold text-amber-400 mb-2">The Symptom: Eternal Design Phase</h4>
              <p className="text-slate-400 leading-relaxed">
                After three months, the team had produced seventeen design documents and zero
                production code. Each document represented a different engineer's vision. Each
                was technically excellent. None had achieved consensus.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-orange-400 mb-2">The Root Cause: Role Ambiguity</h4>
              <p className="text-slate-400 leading-relaxed">
                Nobody was explicitly the decision-maker. The assumption was that senior engineers
                would "figure it out together." But when everyone is senior, nobody defers. Every
                technical choice became a debate among equals with no tiebreaker.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-yellow-400 mb-2">The Hidden Dynamic: Threat to Identity</h4>
              <p className="text-slate-400 leading-relaxed">
                Deeper conversations revealed something important: each engineer's professional
                identity was tied to being "the expert." Compromising on their approach felt like
                admitting they weren't as good as they thought. The technical debates were
                actually identity battles.
              </p>
            </div>
          </div>

          <p className="text-lg text-slate-300 leading-relaxed">
            The resolution required explicit decision-making authority, not just better
            communication or "aligned values."
          </p>
        </section>

        {/* Warning Signs */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            Warning Signs You're Approaching Gridlock
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            Gridlock usually develops gradually. These are the early indicators that productive
            debate is becoming unproductive paralysis.
          </p>

          <div className="space-y-6">
            <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">1</span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">Decisions Get Reopened</h3>
                  <p className="text-slate-400 leading-relaxed">
                    The team decides to use PostgreSQL on Tuesday. By Thursday, someone's raised
                    concerns about CockroachDB. By the following Tuesday, you're back to discussing
                    databases. When decisions don't stick, you have gridlock.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">2</span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">Code Reviews Become Negotiations</h3>
                  <p className="text-slate-400 leading-relaxed">
                    PRs sit for days accumulating comments. Discussions drift from "does this work"
                    to "but it would be better if..." Merging requires not approval but capitulation.
                    The review process optimizes for perfection, not progress.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center font-bold">3</span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">Standups Become Status Reports About Blockers</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Instead of "here's what I shipped," standups become "I'm blocked waiting for
                    alignment on X." Everyone is busy. No one is moving forward. Activity without
                    progress is the hallmark of gridlock.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold">4</span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">Escalation Becomes the Norm</h3>
                  <p className="text-slate-400 leading-relaxed">
                    The team can't resolve disagreements internally. Technical decisions get
                    escalated to leadership, who don't have the context to make good calls.
                    When senior engineers need adult supervision for technical choices,
                    something's broken.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold">5</span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">The "Just Build Two Versions" Proposal</h3>
                  <p className="text-slate-400 leading-relaxed">
                    When someone seriously suggests building parallel implementations to "let
                    the code decide," you've reached peak gridlock. This isn't pragmatism—it's
                    an attempt to avoid the human negotiation that software development requires.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HEXACO Analysis */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            The HEXACO Profile of Gridlock
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            In HEXACO terms, gridlocked teams often show a particular pattern: high
            Conscientiousness combined with role misalignment.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">High Conscientiousness Collision</h3>
              <p className="text-slate-400 leading-relaxed">
                Highly conscientious individuals have strong opinions about "the right way" to do
                things. They're thorough, detail-oriented, and hate shipping suboptimal work.
                Put five of them together, and you get five different definitions of "right"—each
                held with equal conviction.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-orange-400 mb-3">Low Agreeableness Factor</h3>
              <p className="text-slate-400 leading-relaxed">
                High performers often score lower on Agreeableness—they're willing to challenge
                and push back. This is valuable individually but creates friction when everyone
                on the team shares this trait. Nobody naturally takes the role of the accommodator
                who helps the group move forward.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-slate-100 mb-4">The Missing Roles</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Gridlocked teams typically lack two crucial role types:
            </p>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-amber-400 mt-1">→</span>
                <span><strong className="text-slate-100">The Integrator:</strong> Someone who synthesizes different viewpoints into workable compromises</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 mt-1">→</span>
                <span><strong className="text-slate-100">The Executor:</strong> Someone who values shipping over perfection and pulls the team toward delivery</span>
              </li>
            </ul>
            <p className="text-slate-400 mt-4">
              When everyone wants to be the architect, no one wants to be the builder.
            </p>
          </div>
        </section>

        {/* The Fix */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            Breaking Gridlock: Protocols and Roles
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            The solution to gridlock isn't better people or more alignment sessions—it's
            explicit structure that removes ambiguity about who decides what.
          </p>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-100 mb-4">1. Explicit Decision Ownership</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                For every category of decision, designate a clear owner. Not "the team decides
                together"—a specific person who has final authority. This doesn't mean others
                can't influence the decision, but it means someone can end the debate.
              </p>
              <div className="mt-4 p-4 bg-slate-800/50 rounded-lg">
                <p className="text-sm text-slate-400">
                  <strong className="text-slate-300">Example structure:</strong> "Alex owns database
                  architecture decisions. Sam owns API design. Jordan owns deployment infrastructure.
                  Everyone provides input, but the owner makes the call and owns the outcome."
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-100 mb-4">2. Time-Boxed Decisions</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Set explicit deadlines for every technical decision. "We will decide on the
                caching strategy by end of day Thursday" creates a forcing function. If the
                team can't reach consensus by the deadline, the decision owner makes the call.
              </p>
              <div className="mt-4 p-4 bg-slate-800/50 rounded-lg">
                <p className="text-sm text-slate-400">
                  <strong className="text-slate-300">The rule:</strong> "No decision takes more than
                  48 hours of active discussion. After that, we decide with the best available
                  information and iterate."
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-100 mb-4">3. "Disagree and Commit" Protocol</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Explicitly adopt Amazon's decision-making principle. Once a decision is made,
                everyone commits to executing it fully—even if they disagreed. Revisiting decisions
                requires new significant information, not just continued preference.
              </p>
              <div className="mt-4 p-4 bg-slate-800/50 rounded-lg">
                <p className="text-sm text-slate-400">
                  <strong className="text-slate-300">Script:</strong> "I disagree with this approach
                  because [reasons], but I'm committing to implementing it fully. I'll flag if I
                  see evidence that the concerns are materializing."
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-100 mb-4">4. Sprint Role Assignments</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Rotate team roles each sprint: one person is the "executor" focused on shipping,
                one is the "reviewer" focused on quality, one is the "architect" focused on
                design. Clear roles prevent everyone from trying to be everything simultaneously.
              </p>
              <div className="mt-4 p-4 bg-slate-800/50 rounded-lg">
                <p className="text-sm text-slate-400">
                  <strong className="text-slate-300">Key insight:</strong> Senior engineers
                  need permission to NOT be the decision-maker sometimes. Role rotation makes
                  it explicit and removes ego from the equation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LU Teams Section */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            How LU Teams Predicts and Prevents Gridlock
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            LU Teams analyzes team composition to identify high-conflict risk combinations
            before they create gridlock.
          </p>

          <div className="bg-gradient-to-br from-amber-950/50 to-orange-950/30 border border-amber-900/50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-amber-200 mb-4">Conflict Prediction Features</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-amber-400 mt-1">→</span>
                <span><strong className="text-slate-100">Conscientiousness clustering alerts:</strong> Warning when teams have too many high-standards individuals without executors</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 mt-1">→</span>
                <span><strong className="text-slate-100">Agreeableness gaps:</strong> Identification of teams lacking natural integrators who facilitate consensus</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 mt-1">→</span>
                <span><strong className="text-slate-100">Role misalignment detection:</strong> Analysis of personality-role fit to surface potential friction points</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 mt-1">→</span>
                <span><strong className="text-slate-100">Team rebalancing suggestions:</strong> Specific recommendations for roles or hires that would reduce gridlock risk</span>
              </li>
            </ul>
          </div>

          <p className="text-lg text-slate-300 leading-relaxed">
            The platform doesn't just identify problems—it provides concrete role assignment
            recommendations based on personality profiles, helping teams structure themselves
            for productive collaboration rather than competitive debate.
          </p>
        </section>

        {/* Actionable Steps */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            Immediate Actions for Gridlocked Teams
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">1</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Audit Open Debates</h3>
                <p className="text-slate-400 leading-relaxed">
                  List every technical decision that's been under discussion for more than one week.
                  For each one, assign an owner and a deadline. Commit to resolving all of them
                  within the next five business days.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">2</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Create a DACI Matrix</h3>
                <p className="text-slate-400 leading-relaxed">
                  For every category of technical decision (architecture, testing strategy,
                  tooling, etc.), explicitly document who is the Driver, who Approves, who is
                  Consulted, and who is Informed. Remove ambiguity about decision authority.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">3</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Establish Code Review Limits</h3>
                <p className="text-slate-400 leading-relaxed">
                  Set a maximum number of review rounds (three is a good starting point). After
                  the third round, the PR gets merged unless there's a blocking bug. Style
                  preferences and minor improvements get tracked for future work, not current blockers.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">4</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Ship Something Small</h3>
                <p className="text-slate-400 leading-relaxed">
                  Pick the smallest possible feature and ship it to production within one week.
                  The goal isn't the feature—it's proving to the team that they can ship. Nothing
                  breaks gridlock like the momentum of actual delivery.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">5</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Rotate the "Skeptic" Role</h3>
                <p className="text-slate-400 leading-relaxed">
                  Instead of everyone challenging everything, assign one person each sprint to
                  be the official skeptic. Everyone else defaults to support. This channels
                  the team's critical thinking without letting it paralyze every decision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
            <h2 className="font-serif text-2xl font-bold text-slate-100 mb-4">
              The Truth About High-Performance Teams
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              The highest-performing engineering teams aren't made of the best individuals—they're
              made of individuals who can subordinate their ego to the team's mission. This doesn't
              mean hiring less talented people. It means creating structures that channel talent
              toward output rather than debate.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              The goal isn't consensus—it's progress. And sometimes progress means someone says
              "your approach is good enough, let's ship it" even when they could have done it
              differently.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 border-t border-slate-800">
          <h2 className="font-serif text-2xl font-bold text-slate-100 mb-4">
            Predict Team Friction Before It Paralyzes You
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            LU Teams identifies high-conflict personality combinations and suggests role structures
            that keep talented teams shipping. Join the beta.
          </p>
          <a
            href="/beta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-xl hover:from-amber-500 hover:to-orange-500 transition-all shadow-lg shadow-amber-500/25"
          >
            Join the Beta Program
            <span>→</span>
          </a>
        </section>

        {/* Related Content */}
        <section className="py-12 border-t border-slate-800">
          <h3 className="text-lg font-semibold text-slate-400 mb-6">Continue Reading</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="/blog/echo-chamber-effect" className="group block bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <span className="text-sm text-emerald-400 mb-2 block">Team Dynamics Pattern</span>
              <h4 className="text-lg font-semibold text-slate-100 group-hover:text-emerald-300 transition-colors">The Echo Chamber: When Cognitive Diversity Disappears</h4>
              <p className="text-slate-500 mt-2 text-sm">Why teams of brilliant people sometimes produce mediocre results.</p>
            </a>
            <a href="/blog/overwhelmed-delegate-pattern" className="group block bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <span className="text-sm text-rose-400 mb-2 block">Team Dynamics Pattern</span>
              <h4 className="text-lg font-semibold text-slate-100 group-hover:text-rose-300 transition-colors">The Overwhelmed Delegate: When Leaders Can't Let Go</h4>
              <p className="text-slate-500 mt-2 text-sm">Why brilliant ICs struggle with delegation and how to help them.</p>
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
