import { Translations } from "@/lib/translations";

interface HeroProps {
  content: Translations["hero"];
}

export default function Hero({ content }: HeroProps) {
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
            {/* AI Badge - Updated for Founder Circle */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan/30 bg-cyan/5 mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan"></span>
              </span>
              <span className="text-cyan text-sm font-medium tracking-wide uppercase">
                {content.badge}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up leading-tight">
              {content.headline}{" "}
              <span className="gradient-text block mt-2">{content.headlineGradient}</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-400 mb-8 animate-fade-in-up animation-delay-200 max-w-xl leading-relaxed">
              {content.subheadline}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
              <a
                href="#application"
                className="btn-primary text-center"
              >
                {content.ctaBeta}
              </a>
              <a
                href="#coaching"
                className="btn-outline text-center"
              >
                {content.ctaCoach}
              </a>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs mt-8 animate-fade-in-up animation-delay-400">
              <a href="#how-it-works" className="text-slate-500 hover:text-primary transition-colors flex items-center gap-1">
                <span>See How It Works</span>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" /></svg>
              </a>
              <a href="#patterns" className="text-slate-500 hover:text-primary transition-colors flex items-center gap-1">
                <span>Read Patterns</span>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" /></svg>
              </a>
              <a href="#faq" className="text-slate-500 hover:text-primary transition-colors flex items-center gap-1">
                <span>View FAQ</span>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" /></svg>
              </a>
            </div>

            <p className="text-sm text-text-muted mt-6 animate-fade-in-up animation-delay-300">
              {content.betaNote}
            </p>
          </div>

          {/* Right Column - Founder Photo */}
          <div className="relative flex items-center justify-center animate-fade-in animation-delay-200">
            <div className="relative w-full max-w-lg">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse-slow" />

              {/* Photo container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <img
                  src="/founder-jacket.png"
                  alt="Founder"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
