"use client";

import React, { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    title: string;
    items: FAQItem[];
}

export default function FAQSection({ title, items }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 px-6 bg-slate-950">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-white mb-12">
                    {title}
                </h2>

                <div className="space-y-4">
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleItem(idx)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800 transition-colors"
                            >
                                <span className="text-lg font-bold text-white pr-8">
                                    {item.question}
                                </span>
                                <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 text-slate-500 transition-transform duration-200 ${openIndex === idx ? 'rotate-180 bg-sky-900/30 text-sky-400' : ''}`}>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div
                                    className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-slate-800"
                                    dangerouslySetInnerHTML={{ __html: item.answer }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
