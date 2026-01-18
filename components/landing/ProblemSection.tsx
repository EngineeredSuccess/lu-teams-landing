import React from "react";

interface ProblemCard {
    emoji: string;
    title: string;
    description: string;
}

interface ProblemSectionProps {
    title: string;
    subtitle: string;
    problemCards: ProblemCard[];
    costTitle: string;
    costItems: {
        value: string;
        description: string;
    }[];
}

export default function ProblemSection({
    title,
    subtitle,
    problemCards,
    costTitle,
    costItems,
}: ProblemSectionProps) {
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

                <div className="grid md:grid-cols-3 gap-8 mb-16 px-4">
                    {problemCards.map((card, idx) => (
                        <div
                            key={idx}
                            className="bg-slate-900 p-8 rounded-xl border border-slate-800 shadow-sm hover:shadow-sky-900/10 hover:border-slate-700 transition-all hover:-translate-y-1"
                        >
                            <span className="text-5xl mb-6 block" role="img" aria-label="emoji">
                                {card.emoji}
                            </span>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {card.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="max-w-3xl mx-auto bg-red-950/20 border-l-4 border-red-500 p-8 rounded-r-lg">
                    <h3 className="text-2xl font-bold text-red-400 mb-6">
                        {costTitle}
                    </h3>
                    <ul className="space-y-4">
                        {costItems.map((item, idx) => (
                            <li key={idx} className="text-lg text-slate-300 flex items-start gap-2">
                                <span className="font-bold text-red-500 mt-0.5">•</span>
                                <span>
                                    <strong className="font-bold text-red-400">{item.value}</strong>{" "}
                                    - {item.description}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
