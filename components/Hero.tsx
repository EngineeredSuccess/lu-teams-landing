import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20 pb-32">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 text-center">
        {/* Animated Logo */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-block relative logo-glow">
            <Image
              src="/logo.svg"
              alt="LU Teams Logo"
              width={120}
              height={120}
              className="relative z-10"
              priority
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up max-w-5xl mx-auto leading-tight">
          The technical leader&apos;s{" "}
          <span className="gradient-text">sixth sense</span> for team chemistry
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
          Stop guessing who works well together. LU Teams analyzes personality
          dynamics to predict team synergy before you even start a project.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in-up animation-delay-400">
          <a href="#waitlist" className="btn-primary text-lg">
            Join the Beta
          </a>
        </div>
      </div>

      {/* Scroll indicator - positioned at bottom of section */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50 z-10">
        <svg
          className="w-6 h-6 text-cyan"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}