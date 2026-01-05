'use client';

import React from 'react';

export default function EchoChamberEffect() {
  return (
    <article className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/40 via-slate-950 to-teal-950/30" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 py-24 md:py-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm font-medium rounded-full border border-emerald-500/30">
              Team Dynamics Pattern
            </span>
            <span className="text-slate-500 text-sm">11 min read</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-slate-100 via-emerald-100 to-teal-100 bg-clip-text text-transparent">
            The Echo Chamber: Why Your All-Star Team Can't Ship Anything
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl">
            You hired brilliant architects. They agree on everything. And somehow, 
            nothing gets done. The hidden cost of cognitive homogeneity.
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
          <div className="bg-gradient-to-r from-emerald-950/50 to-slate-900/50 border-l-4 border-emerald-500 p-8 rounded-r-xl mb-10">
            <p className="text-lg text-slate-300 leading-relaxed italic">
              "We assembled the dream team—five senior architects from top companies. Each one brilliant. 
              They spent three months debating the perfect microservices architecture. By the time they 
              finished the design doc, our competitor had shipped and captured the market."
            </p>
            <p className="mt-4 text-slate-500">— Founder of a failed fintech startup</p>
          </div>
          
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            The most counterintuitive failure mode in software engineering isn't having bad people—it's 
            having too many similar good people. When everyone on a team thinks the same way, you don't 
            get synergy. You get paralysis.
          </p>
          
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            I call this the Echo Chamber Effect: the phenomenon where cognitively homogenous teams 
            produce intellectually sophisticated ideas that somehow never become actual products. 
            Everyone agrees too quickly. Nobody challenges assumptions. The debate focuses on minutiae 
            because on fundamentals, there's nothing to debate.
          </p>
          
          <p className="text-lg text-slate-300 leading-relaxed">
            And then nothing ships.
          </p>
        </section>

        {/* The Paradox */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            The Paradox of the Perfect Team
          </h2>
          
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            Here's what makes the Echo Chamber so insidious: it looks like excellent teamwork. 
            Meetings are efficient. Decisions seem unanimous. The architecture diagrams are beautiful. 
            Everyone is aligned.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">What You See</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Quick consensus in meetings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Low conflict</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Elegant technical solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Intellectual sophistication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Shared vocabulary and values</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-400 mb-3">What's Actually Happening</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Groupthink suppresses alternatives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Blind spots go unchallenged</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Over-engineering replaces pragmatism</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>User perspective disappears</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Execution gets deprioritized</span>
                </li>
              </ul>
            </div>
          </div>
          
          <p className="text-lg text-slate-300 leading-relaxed">
            The research is clear: cognitively diverse teams outperform homogenous teams—even when 
            the homogenous teams have higher average individual ability. A team of five slightly 
            different 8s will outperform a team of five identical 10s.
          </p>
        </section>

        {/* Case Study */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            Case Study: The Architecture Astronauts
          </h2>
          
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Let me tell you about a team I worked with—one of the most talented groups of engineers 
            I've ever encountered, and one of the most dysfunctional.
          </p>
          
          <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-slate-100 mb-4">The Team Composition</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              A Series B startup assembled what they thought was a killer engineering team. Five 
              senior engineers, all with 10+ years of experience, all from top tech companies 
              (Google, Meta, Netflix). All had similar backgrounds: CS degrees from elite universities, 
              experience with distributed systems, and a shared philosophy about "doing things right."
            </p>
            <p className="text-slate-400">
              On paper, this was a dream team. In practice, it was a nightmare.
            </p>
          </div>
          
          <div className="border-l-2 border-slate-700 pl-6 space-y-6 mb-8">
            <div>
              <h4 className="text-lg font-semibold text-emerald-400 mb-2">Month 1-2: The Honeymoon</h4>
              <p className="text-slate-400 leading-relaxed">
                Meetings were intellectually stimulating. The team dove deep into system design, 
                debating the merits of event sourcing vs. CQRS, discussing the optimal way to 
                handle distributed transactions. Everyone was impressed by everyone else's knowledge.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-teal-400 mb-2">Month 3-4: The Stall</h4>
              <p className="text-slate-400 leading-relaxed">
                The architecture document grew to 47 pages. Every design decision led to another 
                design decision. The team couldn't agree on which message queue to use, not because 
                they disagreed, but because they kept finding new edge cases to consider. No code 
                had been written.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-amber-400 mb-2">Month 5-6: The Reckoning</h4>
              <p className="text-slate-400 leading-relaxed">
                Leadership started asking questions. The team had burned half their runway with 
                nothing to show but documents. When pressed to ship something—anything—the team 
                struggled. They'd optimized for architectural perfection, not for iteration. The 
                MVP they finally produced was overengineered for the scale they didn't yet have.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-red-400 mb-2">The Aftermath</h4>
              <p className="text-slate-400 leading-relaxed">
                The startup pivoted twice before running out of money. The core problem wasn't 
                talent—it was cognitive homogeneity. Everyone thought like an architect. Nobody 
                thought like a user. Nobody thought like a pragmatist. Nobody was willing to say 
                "this is good enough for now."
              </p>
            </div>
          </div>
        </section>

        {/* Warning Signs */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            The Warning Signs of an Echo Chamber
          </h2>
          
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            The Echo Chamber is hard to diagnose from inside. Here are the patterns I've learned 
            to look for when coaching teams.
          </p>
          
          <div className="space-y-6">
            <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">1</span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">Suspiciously Fast Consensus</h3>
                  <p className="text-slate-400 leading-relaxed">
                    When everyone agrees in the first 10 minutes, that's not alignment—it's 
                    homogeneity. Healthy teams have productive friction. If your design reviews 
                    never generate pushback, you're missing perspectives, not achieving excellence.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">2</span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">Debates on Trivia, Silence on Strategy</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Echo Chambers often produce intense debates about implementation details 
                    (tabs vs. spaces, semicolons, naming conventions) while strategic questions 
                    go unquestioned. This is because they share fundamental assumptions—the 
                    only differences are surface-level preferences.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">3</span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">The Missing Devil's Advocate</h3>
                  <p className="text-slate-400 leading-relaxed">
                    In healthy teams, someone naturally plays devil's advocate—challenging 
                    assumptions, questioning complexity, advocating for simpler solutions. If 
                    this never happens organically, it's a sign everyone shares the same blind spots.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">4</span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">Complexity Addiction</h3>
                  <p className="text-slate-400 leading-relaxed">
                    When every solution involves distributed systems, microservices, and event 
                    sourcing—even for problems that could be solved with a SQLite database—the 
                    team has converged on shared biases about what "good engineering" looks like.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">5</span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">User Perspective Void</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Technical echo chambers often lose sight of users entirely. When was the last 
                    time someone in your architecture meeting asked "but would a customer actually 
                    need this?" If that question never surfaces, you've lost diversity of concern.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HEXACO Analysis */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            The HEXACO Perspective: Openness Homogeneity
          </h2>
          
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            In HEXACO terms, technical echo chambers often arise from clustering on the Openness 
            to Experience dimension—specifically, the intellectual curiosity subfactor.
          </p>
          
          <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-slate-100 mb-4">The Pattern</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              High Openness engineers love exploring ideas, building elegant systems, and solving 
              intellectually interesting problems. This is valuable. But when everyone on the team 
              has high Openness, you get:
            </p>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">→</span>
                <span>Endless exploration without closure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">→</span>
                <span>Preference for novel solutions over proven ones</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">→</span>
                <span>Undervaluation of "boring" but practical approaches</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">→</span>
                <span>Scope creep disguised as thoroughness</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-slate-100 mb-4">What's Missing</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              The counterbalance to high Openness is often high Conscientiousness with a practical 
              bent—people who ask "yes, but will it ship?" These are the voices that get drowned 
              out (or never hired) in teams that optimize for intellectual sophistication.
            </p>
            <p className="text-slate-400">
              The best teams have both explorers and executors, dreamers and pragmatists, architects 
              and builders. Homogeneity in any direction is a liability.
            </p>
          </div>
        </section>

        {/* The Fix */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            Breaking the Echo Chamber: Deliberate Cognitive Diversity
          </h2>
          
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            When I coach teams stuck in echo chambers, we focus on three interventions: composition 
            changes, process changes, and mindset changes.
          </p>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-100 mb-4">1. Hire for Cognitive Diversity, Not Just Skill Match</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                When hiring, explicitly look for thinking styles that differ from your current team. 
                If you have five architects, hire a pragmatic builder. If everyone has FAANG backgrounds, 
                hire someone from a scrappy startup. If everyone is high Openness, add someone who 
                values proven patterns.
              </p>
              <div className="mt-4 p-4 bg-slate-800/50 rounded-lg">
                <p className="text-sm text-slate-400">
                  <strong className="text-slate-300">Interview question:</strong> "Tell me about a time 
                  you chose a boring, well-proven solution over an elegant, novel one. Why?"
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-100 mb-4">2. Institutionalize Devil's Advocacy</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                If dissent doesn't emerge naturally, make it structural. Assign someone to play 
                devil's advocate in every design review. Rotate this role so it doesn't become 
                one person's personality quirk.
              </p>
              <div className="mt-4 p-4 bg-slate-800/50 rounded-lg">
                <p className="text-sm text-slate-400">
                  <strong className="text-slate-300">Process addition:</strong> Before finalizing any 
                  architecture decision, the designated advocate must present a "simpler alternative" 
                  that achieves 80% of the value with 20% of the complexity.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-100 mb-4">3. Create Constraints That Force Trade-offs</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Echo chambers thrive in environments without constraints. Add artificial limits that 
                force pragmatic thinking: time-boxed design phases, mandatory MVP milestones before 
                full architecture, "first version must be deployable in X weeks."
              </p>
              <div className="mt-4 p-4 bg-slate-800/50 rounded-lg">
                <p className="text-sm text-slate-400">
                  <strong className="text-slate-300">Example:</strong> "The first version must run on 
                  a single server with a PostgreSQL database. We'll add complexity only when we hit 
                  actual scale problems."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LU Teams Section */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            How LU Teams Identifies Cognitive Homogeneity
          </h2>
          
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            LU Teams uses HEXACO profiling to map team composition across multiple personality 
            dimensions, identifying dangerous clustering before it becomes a problem.
          </p>
          
          <div className="bg-gradient-to-br from-emerald-950/50 to-teal-950/30 border border-emerald-900/50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-emerald-200 mb-4">Team Composition Analysis</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">→</span>
                <span><strong className="text-slate-100">Diversity mapping:</strong> Visual representation of team personality distribution across all six HEXACO dimensions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">→</span>
                <span><strong className="text-slate-100">Gap identification:</strong> Automated detection of missing perspectives based on role requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">→</span>
                <span><strong className="text-slate-100">Hiring recommendations:</strong> Specific personality profiles that would add healthy cognitive friction</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">→</span>
                <span><strong className="text-slate-100">Risk alerts:</strong> Early warning when team composition drifts toward homogeneity</span>
              </li>
            </ul>
          </div>
          
          <p className="text-lg text-slate-300 leading-relaxed">
            The goal isn't to create conflict for its own sake—it's to ensure your team has the 
            cognitive diversity necessary to catch blind spots, challenge assumptions, and balance 
            elegance with execution.
          </p>
        </section>

        {/* Actionable Steps */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-100 mb-8">
            Actions for Monday Morning
          </h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">1</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Map Your Team's Thinking Styles</h3>
                <p className="text-slate-400 leading-relaxed">
                  For each team member, ask: Are they an explorer or executor? Do they prefer 
                  elegance or pragmatism? Do they naturally challenge or align? If everyone falls 
                  into the same bucket, you have an echo chamber.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">2</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Review Your Recent Decisions</h3>
                <p className="text-slate-400 leading-relaxed">
                  Look at your last five major technical decisions. How quickly did consensus 
                  emerge? Were alternative approaches seriously considered? Was complexity ever 
                  challenged? If every decision was unanimous and fast, be suspicious.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">3</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Add a "Simplicity Advocate" Role</h3>
                <p className="text-slate-400 leading-relaxed">
                  In your next design review, assign someone to explicitly advocate for the 
                  simplest possible solution. This person's job is to push back on complexity 
                  and ask "do we really need this?" Rotate the role each meeting.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">4</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Adjust Your Next Hire</h3>
                <p className="text-slate-400 leading-relaxed">
                  Don't just hire for skills—hire for cognitive diversity. If your team skews 
                  theoretical, look for someone with strong execution orientation. If everyone's 
                  from big tech, consider startup experience. Diversity of thinking matters more 
                  than diversity of credentials.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">5</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Time-Box Design Phases</h3>
                <p className="text-slate-400 leading-relaxed">
                  Set explicit deadlines for design decisions. "We will decide on the database 
                  architecture by Friday" forces trade-offs and prevents endless exploration. 
                  Constraints breed creativity and prevent analysis paralysis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700 rounded-xl p-8">
            <h2 className="font-serif text-2xl font-bold text-slate-100 mb-4">
              The Competitive Advantage of Friction
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              The teams that ship great products aren't the ones with the smoothest meetings—they're 
              the ones with productive tension between different ways of thinking. They have the 
              dreamer and the pragmatist, the perfectionist and the shipper, the architect and 
              the builder.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Cognitive diversity isn't comfortable. It creates friction, debate, and sometimes 
              conflict. But it also creates products that actually work—because someone was there 
              to ask the uncomfortable questions that homogenous teams never think to ask.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 border-t border-slate-800">
          <h2 className="font-serif text-2xl font-bold text-slate-100 mb-4">
            Analyze Your Team's Cognitive Diversity
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            LU Teams identifies thinking style gaps that create echo chambers. Join the beta to 
            map your team's cognitive composition.
          </p>
          <a 
            href="/beta" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-500 hover:to-teal-500 transition-all shadow-lg shadow-emerald-500/25"
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
            <a href="/blog/silent-architect-pattern" className="group block bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <span className="text-sm text-indigo-400 mb-2 block">Team Dynamics Pattern</span>
              <h4 className="text-lg font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors">The Silent Architect: Your Best Engineer Is Planning to Quit</h4>
              <p className="text-slate-500 mt-2 text-sm">Recognizing under-leveraged talent before they leave.</p>
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
