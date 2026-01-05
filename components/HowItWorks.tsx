import { Translations } from "@/lib/translations";

interface HowItWorksProps {
    content: Translations["howItWorks"];
}

export default function HowItWorks({ content }: HowItWorksProps) {
    if (!content) return null;

    return (
        <section id="how-it-works" className="py-24 bg-background-elevated relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-cyan/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container-custom relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-slate-500 mb-6">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>2 min read</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {content.title}
                    </h2>
                    <p className="text-xl text-slate-400">
                        {content.subtitle}
                    </p>
                </div>

                {/* 3-step process */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {content.steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative p-8 rounded-2xl bg-background/50 border border-white/5 hover:border-primary/30 transition-all group"
                        >
                            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-background font-bold text-lg shadow-lg shadow-primary/20">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* FLAGSHIP VISUAL */}
                <div className="relative max-w-5xl mx-auto">
                    <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-50" />
                    <div className="relative bg-background-surface border border-white/10 rounded-3xl p-4 md:p-8 shadow-2xl overflow-hidden">
                        <div className="flex items-center justify-between mb-6 px-4">
                            <h3 className="text-xl md:text-2xl font-bold text-white">
                                {content.interfaceTitle}
                            </h3>
                            <div className="hidden sm:flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                        </div>

                        <div className="relative rounded-xl overflow-hidden border border-white/5 bg-navy shadow-inner">
                            <img
                                src="/synergy-radar-actual.png"
                                alt="Synergy Radar interface showing HEXACO personality comparison between two team members with metrics for Honesty-Humility, Emotional Stability, Extraversion, Agreeableness, Conscientiousness, and Openness to Experience"
                                className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                        </div>

                        <p className="text-sm text-slate-500 text-center mt-6 italic">
                            {content.interfaceNote}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
