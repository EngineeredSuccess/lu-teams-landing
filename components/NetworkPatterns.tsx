"use client";

import { Translations } from "@/lib/translations";
import { useState } from "react";
import Link from "next/link";

interface NetworkPatternsProps {
    content: Translations["networkPatterns"];
}

export default function NetworkPatterns({ content }: NetworkPatternsProps) {
    const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

    // Map pattern index to blog slug
    const patternSlugs = [
        "toxic-genius-pattern",
        "silent-architect-pattern",
        "echo-chamber-effect",
        "gridlocked-squad-pattern",
        "overwhelmed-delegate-pattern",
    ];

    return (
        <section id="patterns" className="py-24 bg-background relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[800px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-slate-500 mb-6">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>5 min read</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-6">
                        {content.title}
                    </h2>
                    <p className="text-xl text-text-secondary">
                        {content.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                    {content.patterns.map((pattern: any, idx) => (
                        <div
                            key={idx}
                            className={`h-full bg-background-elevated border transition-all duration-300 p-8 rounded-2xl group relative flex flex-col ${expandedIdx === idx ? "border-primary/60 ring-1 ring-primary/20 shadow-xl shadow-primary/5" : "border-white/5 hover:border-primary/40"
                                }`}
                        >
                            <div className="flex justify-between items-start mb-6 flex-shrink-0">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${expandedIdx === idx ? "bg-primary text-background" : "bg-primary/10 text-primary group-hover:bg-primary/20"
                                    }`}>
                                    <span className="font-bold font-display text-xl">{idx + 1}</span>
                                </div>
                                <Link
                                    href={`/blog/${patternSlugs[idx]}`}
                                    className="text-xs font-bold uppercase tracking-wider text-primary hover:text-primary-light transition-colors underline decoration-dashed underline-offset-4 flex-shrink-0"
                                >
                                    Read Full Story →
                                </Link>
                            </div>

                            <h3 className="text-xl font-bold text-text-primary mb-3 flex-shrink-0">{pattern.title}</h3>
                            <p className="text-text-secondary leading-relaxed mb-4">{pattern.description}</p>

                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedIdx === idx ? "max-h-[500px] opacity-100 mt-6" : "max-h-0 opacity-0"
                                }`}>
                                <div className="space-y-6 pt-6 border-t border-white/5">
                                    <div className="space-y-2">
                                        <h4 className="text-xs font-bold uppercase text-primary/60 tracking-widest">Real-World Case</h4>
                                        <p className="text-sm text-text-primary italic leading-relaxed">"{pattern.story}"</p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xs font-bold uppercase text-red-500/60 tracking-widest">Consequence</h4>
                                        <p className="text-sm text-text-secondary">{pattern.consequence}</p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xs font-bold uppercase text-green-500/60 tracking-widest">LU Strategy</h4>
                                        <p className="text-sm text-text-secondary">{pattern.solution}</p>
                                    </div>
                                    <div className="pt-4">
                                        <button
                                            onClick={() => setExpandedIdx(null)}
                                            className="text-xs font-bold uppercase tracking-wider text-primary hover:text-primary-light transition-colors"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
