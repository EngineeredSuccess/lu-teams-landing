const useCases = [
  {
    title: "Aerospace & Defense",
    description:
      "In aerospace, team conflict isn't a productivity issue—it's a mission risk. LU Teams helps you manage multi-year, high-stakes projects with confidence knowing your team dynamics are optimized.",
    emoji: "🚀",
  },
  {
    title: "Tech & SaaS",
    description:
      "Bad team chemistry is a bug, not a feature. LU Teams helps you build engineering teams that ship faster by understanding who works well together before conflicts slow you down.",
    emoji: "💻",
  },
  {
    title: "Advanced Manufacturing",
    description:
      "Coordinate cross-functional teams across mechanical, electrical, and software engineering. LU Teams helps you prevent costly delays caused by team friction.",
    emoji: "🏭",
  },
];

export default function UseCases() {
  return (
    <section className="py-20 bg-navy-light/30" id="use-cases">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Built for <span className="gradient-text">Technical Leaders</span>
          </h2>

          {/* Use Cases List */}
          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="flex gap-6 items-start"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan font-bold text-lg">{useCase.emoji}</span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {useCase.title}
                  </h3>
                  <p className="text-slate-400">
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
