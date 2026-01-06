import { Translations } from "@/lib/translations";
import CoachingApplicationForm from "@/components/CoachingApplicationForm";

interface CoachingOfferProps {
    content: Translations["coachingOffer"];
    coachingFormContent: Translations["coachingApplication"];
}

export default function CoachingOffer({ content, coachingFormContent }: CoachingOfferProps) {
    return (
        <section id="coaching" className="py-20 bg-background-elevated relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container-custom relative z-10 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-4">
                        {content.title}
                    </h2>
                    <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                        {content.subtitle}
                    </p>

                    <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-semibold text-sm tracking-wide uppercase mb-10">
                        {content.price}
                    </div>

                    <ul className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-12">
                        {content.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-text-primary">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Embedded Coaching Application Form */}
                <CoachingApplicationForm content={coachingFormContent} />
            </div>
        </section>
    );
}
