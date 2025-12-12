import Image from "next/image";

const featureBadges = [
  "For Aerospace & Tech Leaders",
  "Predictive Analytics",
  "Data-Driven Insights",
];

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden pt-20 pb-10">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-navy via-navy to-navy-light" />
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left">
            {/* AI Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan/30 bg-cyan/5 mb-8 animate-fade-in">
              <svg
                className="w-4 h-4 text-cyan"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
              </svg>
              <span className="text-cyan text-sm font-medium">
                AI-Powered Team Intelligence
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up leading-tight">
              The technical leader&apos;s{" "}
              <span className="gradient-text">sixth sense</span> for team
              chemistry
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-400 mb-8 animate-fade-in-up animation-delay-200 max-w-xl">
              Stop guessing who works well together. LU Teams analyzes
              personality dynamics to predict team synergy before you even start
              a project.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up animation-delay-300">
              {featureBadges.map((badge, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 text-slate-300 text-sm"
                >
                  <svg
                    className="w-5 h-5 text-cyan"
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
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
              <a href="#waitlist" className="btn-primary-filled text-lg">
                Join the Beta
              </a>
              <a href="#features" className="btn-primary text-lg">
                Learn More
              </a>
            </div>
          </div>

          {/* Right Column - Logo/Visual */}
          <div className="relative flex items-center justify-center animate-fade-in animation-delay-200">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 via-transparent to-purple/20 rounded-3xl blur-3xl" />

              {/* Logo container */}
              <div className="relative w-full h-full flex items-center justify-center rounded-2xl bg-navy-light/50 border border-cyan/20 overflow-hidden">
                {/* Grid lines effect */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,transparent_calc(100%_-_1px),rgba(100,255,218,0.3)_100%)] bg-[length:100%_40px]" />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,transparent_calc(100%_-_1px),rgba(100,255,218,0.3)_100%)] bg-[length:40px_100%]" />
                </div>

                {/* Perspective floor effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-cyan/10 to-transparent" />

                {/* 3D Logo visualization */}
                <div className="relative z-10 logo-glow">
                  <div className="relative">
                    {/* Triangle shapes */}
                    <svg
                      className="w-48 h-48 sm:w-64 sm:h-64"
                      viewBox="0 0 200 200"
                      fill="none"
                    >
                      {/* Outer circle glow */}
                      <circle
                        cx="100"
                        cy="100"
                        r="90"
                        stroke="url(#circleGradient)"
                        strokeWidth="1"
                        fill="none"
                        opacity="0.5"
                      />
                      <circle
                        cx="100"
                        cy="100"
                        r="80"
                        stroke="rgba(100,255,218,0.3)"
                        strokeWidth="1"
                        fill="none"
                      />

                      {/* Triangle 1 - Main */}
                      <path
                        d="M100 30 L160 140 L40 140 Z"
                        stroke="url(#triangleGradient)"
                        strokeWidth="2"
                        fill="none"
                        className="drop-shadow-[0_0_10px_rgba(100,255,218,0.5)]"
                      />

                      {/* Triangle 2 - Inverted/Offset */}
                      <path
                        d="M100 150 L50 70 L150 70 Z"
                        stroke="url(#triangleGradient2)"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.7"
                      />

                      {/* LU Text */}
                      <text
                        x="100"
                        y="115"
                        textAnchor="middle"
                        className="fill-cyan text-4xl font-bold"
                        style={{
                          filter: "drop-shadow(0 0 10px rgba(100,255,218,0.8))",
                        }}
                      >
                        LU
                      </text>

                      {/* Gradients */}
                      <defs>
                        <linearGradient
                          id="triangleGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#64ffda" />
                          <stop offset="100%" stopColor="hsl(260, 100%, 65%)" />
                        </linearGradient>
                        <linearGradient
                          id="triangleGradient2"
                          x1="100%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#64ffda" />
                          <stop offset="100%" stopColor="#64ffda" stopOpacity="0.3" />
                        </linearGradient>
                        <linearGradient
                          id="circleGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#64ffda" />
                          <stop offset="50%" stopColor="hsl(260, 100%, 65%)" />
                          <stop offset="100%" stopColor="#64ffda" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Text below logo */}
                    <div className="text-center mt-4">
                      <p className="text-cyan text-lg font-semibold tracking-widest">
                        LEADERSHIP
                      </p>
                      <p className="text-slate-400 text-sm tracking-[0.3em]">
                        UNFILTERED
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative dots */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan" />
                  <div className="w-2 h-2 rounded-full bg-purple" />
                  <div className="w-2 h-2 rounded-full bg-cyan" />
                  <div className="w-2 h-2 rounded-full bg-purple" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}