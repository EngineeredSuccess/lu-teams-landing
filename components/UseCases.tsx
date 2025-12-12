const useCases = [
  {
    title: "Aerospace & Defense",
    description:
      "Build mission-critical teams where communication failures aren't an option. Ensure your engineers, analysts, and project managers work in perfect harmony.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    ),
    color: "cyan",
  },
  {
    title: "Tech & SaaS",
    description:
      "Scale your engineering teams without sacrificing culture. Match developers, designers, and product managers who'll thrive together.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    color: "purple",
  },
  {
    title: "Advanced Manufacturing",
    description:
      "Optimize cross-functional teams for complex production environments. From R&D to the factory floor, ensure seamless collaboration.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    color: "cyan",
  },
];

export default function UseCases() {
  return (
    <section className="py-24 relative bg-navy-light/30" id="use-cases">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Built for <span className="gradient-text">Your Industry</span>
          </h2>
          <p className="section-subtitle">
            LU Teams adapts to the unique challenges of your sector
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="glass-card group cursor-default relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${
                  useCase.color === "cyan"
                    ? "from-cyan to-transparent"
                    : "from-purple to-transparent"
                }`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`mb-4 ${
                    useCase.color === "cyan" ? "text-cyan" : "text-purple"
                  } group-hover:scale-110 transition-transform duration-300`}
                >
                  {useCase.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {useCase.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}