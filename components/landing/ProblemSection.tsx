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
        <section className="py-20 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">
                        {title}
                    </h2>
                    <p className="text-xl text-slate-600">
                        {subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16 px-4">
                    {problemCards.map((card, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                        >
                            <span className="text-5xl mb-6 block" role="img" aria-label="emoji">
                                {card.emoji}
                            </span>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {card.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="max-w-3xl mx-auto bg-red-50 border-l-4 border-red-500 p-8 rounded-r-lg">
                    <h3 className="text-2xl font-bold text-red-900 mb-6">
                        {costTitle}
                    </h3>
                    <ul className="space-y-4">
                        {costItems.map((item, idx) => (
                            <li key={idx} className="text-lg text-red-900 flex items-start gap-2">
                                <span className="font-bold text-red-600 mt-0.5">•</span>
                                <span>
                                    <strong className="font-bold text-red-700">{item.value}</strong>{" "}
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
