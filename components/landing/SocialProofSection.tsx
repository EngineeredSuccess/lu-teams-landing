import React from "react";

interface Testimonial {
    quote: string;
    authorName: string;
    authorTitle: string;
    authorCompany: string;
    authorImage?: string;
    authorImageAlt?: string;
}

interface Metric {
    value: string;
    label: string;
}

interface SocialProofSectionProps {
    title: string;
    testimonials: Testimonial[];
    metrics: Metric[];
}

export default function SocialProofSection({
    title,
    testimonials,
    metrics,
}: SocialProofSectionProps) {
    return (
        <section className="py-20 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">
                        {title}
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16 px-4">
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow relative"
                        >
                            <div className="text-6xl text-sky-100 absolute top-4 left-6 font-serif leading-none">
                                "
                            </div>

                            <blockquote className="relative z-10 text-lg text-slate-700 italic mb-8 leading-relaxed">
                                "{testimonial.quote}"
                            </blockquote>

                            <div className="flex items-center gap-4">
                                {testimonial.authorImage ? (
                                    <img
                                        src={testimonial.authorImage}
                                        alt={testimonial.authorImageAlt || testimonial.authorName}
                                        className="w-14 h-14 rounded-full object-cover shadow-sm bg-slate-100"
                                    />
                                ) : (
                                    <div className="w-14 h-14 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 font-bold text-xl">
                                        {testimonial.authorName.charAt(0)}
                                    </div>
                                )}
                                <div>
                                    <div className="font-bold text-slate-900">
                                        {testimonial.authorName}
                                    </div>
                                    <div className="text-sm text-slate-500">
                                        {testimonial.authorTitle}
                                    </div>
                                    <div className="text-sm text-slate-400">
                                        {testimonial.authorCompany}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-sky-600 to-blue-700 rounded-xl shadow-xl p-10 text-white flex flex-col md:flex-row justify-around gap-8 md:gap-0">
                        {metrics.map((metric, idx) => (
                            <div key={idx} className="text-center md:border-r border-sky-500/30 last:border-0 md:pr-12 last:pr-0">
                                <div className="text-5xl font-bold mb-2 tracking-tight">
                                    {metric.value}
                                </div>
                                <div className="text-sky-100 text-sm font-medium uppercase tracking-wider">
                                    {metric.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
