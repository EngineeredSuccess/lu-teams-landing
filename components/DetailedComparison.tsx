"use client";

import React from "react";

interface ComparisonProps {
    lang: "en" | "pl";
}

const comparisonData = {
    en: {
        title: "Founding Partner vs Standard Access",
        intro: "Both paths give you access to HEXACO tools. They differ in time, commitment, and price.",
        headers: ["Feature", "Founding Partner (Limit)", "Standard Access"],
        rows: [
            { feature: "How to join", fp: "Application required + verification", sa: "Instant signup" },
            { feature: "Features", fp: "🧪 Experimental + Stable", sa: "✅ Stable only" },
            { feature: "Current price", fp: "FREE during Beta", sa: "$49 / month" },
            { feature: "Future price", fp: "$25 / month (forever)", sa: "$49 / month" },
            { feature: "Founder contact", fp: "Monthly group calls", sa: "Email support (48h)" },
        ],
    },
    pl: {
        title: "Founding Partner vs Standard Access",
        intro: "Obie ścieżki dają dostęp do narzędzi HEXACO. Różnią się czasem, zaangażowaniem i ceną.",
        headers: ["Cecha", "Founding Partner (Limit)", "Standard Access"],
        rows: [
            { feature: "Jak dołączyć", fp: "Wymagana aplikacja i weryfikacja", sa: "Natychmiastowy zapis" },
            { feature: "Funkcje", fp: "🧪 Eksperymentalne + Stabilne", sa: "✅ Tylko stabilne" },
            { feature: "Cena obecna", fp: "FREE podczas Beta", sa: "$49 / miesiąc" },
            { feature: "Cena przyszła", fp: "$25 / miesiąc (dożywotnio)", sa: "$49 / miesiąc" },
            { feature: "Kontakt z założycielem", fp: "Miesięczne rozmowy grupowe", sa: "Wsparcie e-mail (48h)" },
        ],
    },
};

export default function DetailedComparison({ lang }: ComparisonProps) {
    const data = comparisonData[lang];

    return (
        <section id="detailed-comparison" className="py-16 md:py-24 bg-slate-900/30">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">{data.title}</h2>
                <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">{data.intro}</p>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr className="border-b border-slate-700">
                                {data.headers.map((h, i) => (
                                    <th
                                        key={i}
                                        className={`py-4 px-4 text-sm font-semibold ${i === 0 ? "text-slate-400" : i === 1 ? "text-sky-400" : "text-emerald-400"
                                            }`}
                                    >
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.rows.map((row, i) => (
                                <tr key={i} className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                                    <td className="py-4 px-4 text-slate-300 font-medium">{row.feature}</td>
                                    <td className="py-4 px-4 text-slate-200">{row.fp}</td>
                                    <td className="py-4 px-4 text-slate-200">{row.sa}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
