"use client";

import React, { useEffect, useState } from "react";
import { PRICING_CONFIG, getPlanPrice, formatPrice, PlanKey } from "@/config/pricing.config";
import { useCurrency } from "@/components/CurrencySwitcher";

interface PricingSectionProps {
    title: string;
    subtitle: string;
}

export default function PricingSection({ title, subtitle }: PricingSectionProps) {
    const currency = useCurrency();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const openStripeModal = (e: React.MouseEvent) => {
        e.preventDefault();
        window.location.hash = "#pricing";
    };

    const planKeys: PlanKey[] = ["starter", "professional", "scale"];

    return (
        <section className="py-20 px-6 bg-slate-900 text-white" id="pricing-section">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold mb-4">
                        {title}
                    </h2>
                    <p className="text-xl text-slate-400">
                        {subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {planKeys.map((key) => {
                        const plan = PRICING_CONFIG.plans[key];
                        const isPopular = key === "professional";
                        const price = mounted ? getPlanPrice(key, currency) : getPlanPrice(key, "PLN");
                        const priceDisplay = mounted ? formatPrice(price, currency) : formatPrice(price, "PLN");

                        return (
                            <div
                                key={key}
                                className={`relative rounded-2xl p-8 flex flex-col ${isPopular
                                        ? "bg-slate-800 border-2 border-sky-500 shadow-xl shadow-sky-900/20 transform md:-translate-y-4"
                                        : "bg-slate-800/50 border border-slate-700"
                                    }`}
                            >
                                {isPopular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sky-500 text-white text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                                        Najpopularniejszy
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-4xl font-bold">{priceDisplay}</span>
                                    <span className="text-slate-400">/miesiąc</span>
                                </div>

                                <p className="text-sky-300 font-medium mb-8">
                                    {plan.teamSize} członków zespołu
                                </p>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-slate-300">
                                            <svg className="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={openStripeModal}
                                    className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${isPopular
                                            ? "bg-sky-500 hover:bg-sky-400 text-white shadow-lg hover:shadow-sky-500/25"
                                            : "bg-slate-700 hover:bg-slate-600 text-white"
                                        }`}
                                >
                                    Wybierz {plan.name}
                                </button>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-slate-400 text-sm">
                        Wszystkie ceny w {currency} są szacunkowe i przeliczane z USD.
                        Finalna cena może się nieznacznie różnić w zależności od kursu Stripe.
                    </p>
                </div>
            </div>
        </section>
    );
}
