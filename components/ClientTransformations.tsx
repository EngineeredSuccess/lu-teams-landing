import { Translations } from "@/lib/translations";

interface ClientTransformationsProps {
    content: Translations["clientTransformations"];
}

export default function ClientTransformations({ content }: ClientTransformationsProps) {
    return (
        <section id="transformations" className="py-20 bg-background-elevated relative overflow-hidden">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-6">
                        {content.title}
                    </h2>
                    <p className="text-xl text-text-secondary">
                        {content.subtitle}
                    </p>
                </div>

                {/* Case Studies Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {content.cases.map((study, idx) => (
                        <div key={idx} className="bg-background-surface border border-white/5 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group flex flex-col h-full">
                            {/* Client Info Header */}
                            <div className="mb-6 flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-text-primary mb-1">{study.title}</h3>
                                    <p className="text-sm text-primary font-medium">{study.client.role}, {study.client.company}</p>
                                </div>
                                <div className="text-primary/40 group-hover:text-primary transition-colors">
                                    {study.title.toLowerCase().includes('aerospace') && (
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    )}
                                    {study.title.toLowerCase().includes('fintech') && (
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                        </svg>
                                    )}
                                    {study.title.toLowerCase().includes('saas') && (
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                        </svg>
                                    )}
                                </div>
                            </div>

                            {/* Timeline */}
                            <div className="space-y-4 mb-8 flex-grow">
                                {study.timeline.map((item, tIdx) => (
                                    <div key={tIdx} className="relative pl-6 border-l border-white/10">
                                        <div className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full ${tIdx === 2 ? 'bg-primary shadow-[0_0_8px_rgba(212,175,55,0.5)]' : 'bg-white/20'}`} />
                                        <span className="text-[10px] text-text-muted uppercase tracking-widest mb-1 block font-bold">Month {item.month}</span>
                                        <p className="text-sm text-text-secondary leading-relaxed">{item.text}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Testimonial */}
                            <div className="relative mt-auto pt-6 border-t border-white/5">
                                <svg className="w-8 h-8 text-primary/10 absolute -top-4 -left-2" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.896 14.325 16.023 14.941 15.382C15.557 14.742 16.51 14.321 17.8 14.123L17.514 12.378C16.297 12.443 15.385 12.196 14.779 11.637C14.173 11.078 13.87 10.152 13.87 8.859V5H19V11H16.485C16.485 11.859 16.745 12.483 17.265 12.871C17.785 13.259 18.525 13.504 19.485 13.605L19.016 15.719C17.618 15.618 16.541 15.932 15.785 16.661C15.029 17.39 14.651 18.406 14.651 19.709V21H14.017ZM5 21L5 18C5 16.896 5.308 16.023 5.924 15.382C6.54 14.742 7.493 14.321 8.783 14.123L8.497 12.378C7.28 12.443 6.368 12.196 5.762 11.637C5.156 11.078 4.853 10.152 4.853 8.859V5H10V11H7.469C7.469 11.859 7.729 12.483 8.249 12.871C8.769 13.259 9.509 13.504 10.469 13.605L10 15.719C8.602 15.618 7.525 15.932 6.769 16.661C6.013 17.39 5.635 18.406 5.635 19.709V21H5Z" /></svg>
                                <p className="pl-6 text-text-primary italic relative z-10 text-sm leading-relaxed">"{study.testimonial}"</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Composite Case Study Disclaimer */}
                <p className="text-[10px] text-text-muted italic text-center max-w-2xl mx-auto opacity-60">
                    * Composite case studies drawn from multiple intensive engagements.
                    Details changed to protect client confidentiality.
                </p>
            </div>
        </section>
    );
}
