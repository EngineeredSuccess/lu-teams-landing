"use client";

import { Translations } from "@/lib/translations";
import { useState } from "react";

interface FAQProps {
    content: Translations["faq"];
}

export default function FAQ({ content }: FAQProps) {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    if (!content) return null;

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": content.items.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <section id="faq" className="py-24 bg-background-elevated relative overflow-hidden">
                <div className="container-custom max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white">
                            {content.title}
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {content.items.map((item, idx) => (
                            <div
                                key={idx}
                                className={`border transition-all duration-300 rounded-2xl overflow-hidden ${openIdx === idx ? "bg-background border-primary/40 shadow-lg shadow-primary/5" : "bg-background-surface/50 border-white/5 hover:border-white/10"
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className={`text-lg font-bold transition-colors ${openIdx === idx ? "text-primary" : "text-white"}`}>
                                        {item.question}
                                    </span>
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${openIdx === idx ? "bg-primary text-background rotate-180" : "bg-white/5 text-white"
                                        }`}>
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>

                                <div className={`transition-all duration-500 ease-in-out ${openIdx === idx ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                                    }`}>
                                    <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

