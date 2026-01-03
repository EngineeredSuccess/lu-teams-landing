import { Translations } from "@/lib/translations";

interface NetworkPatternsProps {
    content: Translations["networkPatterns"];
}

export default function NetworkPatterns({ content }: NetworkPatternsProps) {
    return (
        <section className="py-20 bg-background relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[800px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-6">
                        {content.title}
                    </h2>
                    <p className="text-xl text-text-secondary">
                        {content.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {content.patterns.map((pattern, idx) => (
                        <div key={idx} className="bg-background-elevated border border-white/5 p-8 rounded-xl hover:border-primary/40 transition-colors group relative">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                <span className="text-primary font-bold font-display text-xl">{idx + 1}</span>
                            </div>
                            <h3 className="text-xl font-bold text-text-primary mb-3">{pattern.title}</h3>
                            <p className="text-text-secondary leading-relaxed">{pattern.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
