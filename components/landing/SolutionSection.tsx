import React from "react";

interface SolutionStep {
    title: string;
    description: string;
}

interface SolutionSectionProps {
    title: string;
    subtitle: string;
    steps: SolutionStep[];
    imageSrc: string;
    imageAlt: string;
    imageCaption?: string;
}

export default function SolutionSection({
    title,
    subtitle,
    steps,
    imageSrc,
    imageAlt,
    imageCaption,
}: SolutionSectionProps) {
    return (
        <section className="py-20 px-6 bg-slate-950">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        {title}
                    </h2>
                    <p className="text-xl text-slate-400">
                        {subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 mb-16 px-4">
                    {steps.map((step, idx) => (
                        <div key={idx} className="text-center group">
                            <div className="w-16 h-16 bg-sky-900/30 text-sky-400 border border-sky-800/50 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                                {idx + 1}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {step.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto text-center">
                    <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-sky-900/20 mb-6 border border-slate-800">
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="w-full h-auto"
                        />
                    </div>
                    {imageCaption && (
                        <p className="text-sm text-slate-400 italic">
                            {imageCaption}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}
