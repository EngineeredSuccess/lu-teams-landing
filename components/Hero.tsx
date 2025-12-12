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
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
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
          </div>

          {/* Right Column - Logo Video Animation */}
          <div className="relative flex items-center justify-center animate-fade-in animation-delay-200">
            <div className="relative w-full max-w-lg">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-cyan/20 blur-3xl rounded-full animate-pulse-slow" />
              
              {/* Video container */}
              <div className="relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto animate-float"
                  poster="/logo.png"
                >
                  <source src="/logo-animation.mp4" type="video/mp4" />
                  {/* Fallback image if video doesn't load */}
                  <img 
                    src="/logo.png" 
                    alt="Leadership Unfiltered AI" 
                    className="w-full h-auto"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
