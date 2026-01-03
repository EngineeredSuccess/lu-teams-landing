import { Translations } from "@/lib/translations";

interface FounderAuthorityProps {
    content: Translations["founderAuthority"];
}

export default function FounderAuthority({ content }: FounderAuthorityProps) {
    return (
        <section className="py-20 px-4 relative overflow-hidden bg-background">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl" />

            <div className="container-custom relative z-10">
                <div className="grid md:grid-cols-5 gap-8 lg:gap-12 bg-background-surface/30 backdrop-blur-subtle rounded-2xl p-8 border border-primary-subtle items-center">

                    {/* Photo Column */}
                    <div className="md:col-span-2 relative">
                        <div className="aspect-[3/4] rounded-lg overflow-hidden border border-white/5 shadow-xl">
                            <img
                                src="/founder-photo.png"
                                alt="Founder"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative border or element */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-primary/30 rounded-br-3xl -z-10" />
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl -z-10" />
                    </div>

                    {/* Bio Column */}
                    <div className="md:col-span-3 space-y-6 text-left">
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-text-primary">
                            {content.title}
                        </h2>

                        <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
                            <p>{content.bio1}</p>
                            <p>{content.bio2}</p>
                        </div>

                        {/* Credentials Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {content.credentials.map((cred, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    <span className="text-sm font-medium text-text-primary">{cred}</span>
                                </div>
                            ))}
                        </div>

                        {/* Turning Point Story */}
                        {content.turningPoint && (
                            <div className="bg-primary/5 border-l-4 border-primary p-6 my-6 rounded-r-xl">
                                <h3 className="font-bold text-white mb-2">{content.turningPoint.title}</h3>
                                <p className="text-text-secondary text-sm leading-relaxed italic">
                                    {content.turningPoint.content}
                                </p>
                            </div>
                        )}

                        {/* Current WorkTransparency */}
                        {content.currentWork && (
                            <div className="border-t border-white/10 pt-6 mt-6 space-y-3">
                                <p className="text-sm text-text-secondary">
                                    <strong className="text-white">Currently working with:</strong> {content.currentWork.clients}
                                </p>
                                <p className="text-xs text-primary/80 font-medium">
                                    {content.currentWork.availability}
                                </p>
                            </div>
                        )}

                        {/* CTA */}
                        <div className="pt-6">
                            <a href="#coaching" className="text-primary hover:text-primary-light font-semibold border-b border-primary hover:border-primary-light pb-1 transition-all">
                                {content.cta}
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
