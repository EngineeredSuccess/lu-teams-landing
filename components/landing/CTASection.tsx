import React from "react";

interface CTASectionProps {
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
}

export default function CTASection({
    headline,
    subheadline,
    primaryCTA,
    secondaryCTA,
}: CTASectionProps) {
    return (
        <section className="py-24 px-6 bg-slate-900 border-t border-slate-800">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    {headline}
                </h2>

                <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto">
                    {subheadline}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a
                        href={primaryCTA.href}
                        className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-white bg-sky-600 rounded-lg hover:bg-sky-500 transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-sky-500/25"
                    >
                        {primaryCTA.text}
                    </a>

                    {secondaryCTA && (
                        <a
                            href={secondaryCTA.href}
                            className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-slate-300 border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors"
                        >
                            {secondaryCTA.text}
                        </a>
                    )}
                </div>

                <p className="mt-12 text-sm text-slate-500">
                    Masz pytania? Napisz do nas: <a href="mailto:contact@leadershipunfiltered.com" className="text-sky-400 hover:text-sky-300">contact@leadershipunfiltered.com</a>
                </p>
            </div>
        </section>
    );
}
