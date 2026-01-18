"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface DualTrackContent {
    centralQuestion: {
        title: string;
        subtitle: string;
    };
    foundingPartner: {
        badge: string;
        title: string;
        tagline: string;
        pitch: string;
        benefits: { icon: string; title: string; description: string }[];
        commitmentTitle: string;
        commitments: string[];
        pricing: {
            current: string;
            currentNote: string;
            future: string;
            futureNote: string;
        };
        cta: string;
        ctaNote: string;
        bestFor: string;
    };
    standardAccess: {
        badge: string;
        title: string;
        tagline: string;
        pitch: string;
        benefits: { icon: string; title: string; description: string }[];
        useCasesTitle: string;
        useCases: string[];
        pricing: {
            amount: string;
            period: string;
            note: string;
            guarantee: string;
        };
        cta: string;
        ctaNote: string;
        bestFor: string;
    };
}

interface HeroContent {
    headline: string;
    headlineGradient: string;
    subheadline: string;
}

interface RouterHeroProps {
    hero: HeroContent;
    dualTrack: DualTrackContent;
    lang: "en" | "pl";
}

export default function RouterHero({ hero, dualTrack, lang }: RouterHeroProps) {
    const applicationUrl = lang === "pl" ? "/pl/application" : "/application";
    const signupUrl = "https://app.luteams.com/register";

    return (
        <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 bg-slate-950">
            {/* Background gradient */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-sky-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Founder Badge */}
                <div className="flex justify-center mb-8">
                    <div className="flex items-center gap-4 px-5 py-3 bg-slate-900/50 border border-slate-800 rounded-full">
                        <Image
                            src="/images/pawel-avatar.png"
                            alt="Paweł Rzepecki"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <div className="text-left">
                            <p className="text-sm font-medium text-slate-200">Paweł Rzepecki</p>
                            <p className="text-xs text-slate-500">Senior Tech Lead, Aerospace · 15+ lat</p>
                        </div>
                    </div>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 tracking-tight">
                    <span className="text-white">{hero.headline}</span>
                    <br />
                    <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                        {hero.headlineGradient}
                    </span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-slate-400 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
                    {hero.subheadline}
                </p>

                {/* Central Question */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {dualTrack.centralQuestion.title}
                    </h2>
                    <p className="text-slate-400">{dualTrack.centralQuestion.subtitle}</p>
                </div>

                {/* Dual Path Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Founding Partner Card */}
                    <div className="bg-gradient-to-b from-sky-950/50 to-slate-900/50 border border-sky-800/50 rounded-2xl p-8 flex flex-col">
                        <div className="mb-6">
                            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-900/30 rounded-full mb-4">
                                {dualTrack.foundingPartner.badge}
                            </span>
                            <h3 className="text-2xl font-bold text-white mb-2">
                                {dualTrack.foundingPartner.title}
                            </h3>
                            <p className="text-sky-400">{dualTrack.foundingPartner.tagline}</p>
                        </div>

                        <p className="text-slate-300 mb-6 leading-relaxed">{dualTrack.foundingPartner.pitch}</p>

                        <ul className="space-y-4 mb-6 flex-1">
                            {dualTrack.foundingPartner.benefits.map((benefit, i) => (
                                <li key={i} className="flex gap-3">
                                    <span className="text-xl">{benefit.icon}</span>
                                    <div>
                                        <strong className="text-slate-200">{benefit.title}</strong>
                                        <p className="text-sm text-slate-400">{benefit.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="bg-slate-900/50 rounded-xl p-4 mb-6">
                            <h4 className="text-sm font-bold text-slate-300 mb-2">
                                {dualTrack.foundingPartner.commitmentTitle}
                            </h4>
                            <ul className="space-y-1 text-sm text-slate-400">
                                {dualTrack.foundingPartner.commitments.map((c, i) => (
                                    <li key={i}>✓ {c}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-center mb-6">
                            <div className="flex items-baseline justify-center gap-2">
                                <span className="text-4xl font-bold text-white">
                                    {dualTrack.foundingPartner.pricing.current}
                                </span>
                                <span className="text-slate-500">{dualTrack.foundingPartner.pricing.currentNote}</span>
                            </div>
                            <p className="text-sm text-slate-500 mt-1">
                                {dualTrack.foundingPartner.pricing.future}
                                <br />
                                {dualTrack.foundingPartner.pricing.futureNote}
                            </p>
                        </div>

                        <Link
                            href={applicationUrl}
                            className="block w-full py-4 text-center font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-colors"
                        >
                            {dualTrack.foundingPartner.cta}
                        </Link>
                        <p className="text-xs text-slate-500 text-center mt-3">{dualTrack.foundingPartner.ctaNote}</p>
                        <p className="text-xs text-slate-600 mt-4 pt-4 border-t border-slate-800">
                            <strong>{lang === "pl" ? "Najlepsze dla:" : "Best for:"}</strong> {dualTrack.foundingPartner.bestFor}
                        </p>
                    </div>

                    {/* Standard Access Card */}
                    <div className="bg-gradient-to-b from-slate-900/50 to-slate-950 border border-slate-800 rounded-2xl p-8 flex flex-col">
                        <div className="mb-6">
                            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-900/30 rounded-full mb-4">
                                {dualTrack.standardAccess.badge}
                            </span>
                            <h3 className="text-2xl font-bold text-white mb-2">
                                {dualTrack.standardAccess.title}
                            </h3>
                            <p className="text-emerald-400">{dualTrack.standardAccess.tagline}</p>
                        </div>

                        <p className="text-slate-300 mb-6 leading-relaxed">{dualTrack.standardAccess.pitch}</p>

                        <ul className="space-y-4 mb-6 flex-1">
                            {dualTrack.standardAccess.benefits.map((benefit, i) => (
                                <li key={i} className="flex gap-3">
                                    <span className="text-xl">{benefit.icon}</span>
                                    <div>
                                        <strong className="text-slate-200">{benefit.title}</strong>
                                        <p className="text-sm text-slate-400">{benefit.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="bg-slate-900/50 rounded-xl p-4 mb-6">
                            <h4 className="text-sm font-bold text-slate-300 mb-2">
                                {dualTrack.standardAccess.useCasesTitle}
                            </h4>
                            <ul className="space-y-1 text-sm text-slate-400">
                                {dualTrack.standardAccess.useCases.map((uc, i) => (
                                    <li key={i}>{uc}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-center mb-6">
                            <div className="flex items-baseline justify-center gap-2">
                                <span className="text-4xl font-bold text-white">
                                    {dualTrack.standardAccess.pricing.amount}
                                </span>
                                <span className="text-slate-500">{dualTrack.standardAccess.pricing.period}</span>
                            </div>
                            <p className="text-sm text-slate-500 mt-1">
                                {dualTrack.standardAccess.pricing.note}
                                <br />
                                {dualTrack.standardAccess.pricing.guarantee}
                            </p>
                        </div>

                        <a
                            href={signupUrl}
                            className="block w-full py-4 text-center font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors"
                        >
                            {dualTrack.standardAccess.cta}
                        </a>
                        <p className="text-xs text-slate-500 text-center mt-3">{dualTrack.standardAccess.ctaNote}</p>
                        <p className="text-xs text-slate-600 mt-4 pt-4 border-t border-slate-800">
                            <strong>{lang === "pl" ? "Najlepsze dla:" : "Best for:"}</strong> {dualTrack.standardAccess.bestFor}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
