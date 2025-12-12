const features = [
  {
    title: "Personality Analysis",
    description:
      "LU Teams analyzes DiSC and Gallup profiles to understand each team member's working style, strengths, and potential blind spots.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    title: "Conflict Prediction",
    description:
      "Identifies potential clashes before they happen. See which personality combinations create friction and which create flow.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Smart Recommendations",
    description:
      "Get actionable insights on team composition, role assignments, and communication strategies tailored to your project.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-20" id="features">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Introducing <span className="gradient-text">LU Teams</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            The Synergy Prediction Engine that reads your team better than you do. Make decisions with intelligence, not intuition.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-navy-light/50 border border-cyan/20 hover:border-cyan/50 transition-all"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center mb-6 text-cyan">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
