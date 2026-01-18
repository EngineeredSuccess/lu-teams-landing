interface HeroSectionProps {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCTA: {
        text: string;
        href: string;
    };
    secondaryCTA?: {
        text: string;
        href: string;
    };
    trustBadges: string[];
    imageSrc: string;
    imageAlt: string;
}

export default function HeroSection({
    eyebrow,
    headline,
    subheadline,
    primaryCTA,
    secondaryCTA,
    trustBadges,
    imageSrc,
    imageAlt
}: HeroSectionProps) {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <div>
                    <span className="inline-block text-sm text-slate-400 uppercase tracking-wide mb-4 font-semibold">
                        {eyebrow}
                    </span>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        {headline}
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                        {subheadline}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <a
                            href={primaryCTA.href}
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-sky-600 rounded-lg hover:bg-sky-500 transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                        >
                            {primaryCTA.text}
                        </a>

                        {secondaryCTA && (
                            <a
                                href={secondaryCTA.href}
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-sky-400 bg-transparent border-2 border-sky-400 rounded-lg hover:bg-sky-400/10 transition-colors"
                            >
                                {secondaryCTA.text}
                            </a>
                        )}
                    </div>

                    <ul className="flex flex-col sm:flex-row gap-6 text-sm text-slate-400">
                        {trustBadges.map((badge, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                {badge}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Visual */}
                <div className="relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-sky-900/20">
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
