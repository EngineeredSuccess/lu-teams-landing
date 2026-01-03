import { Translations } from "@/lib/translations";

interface ProblemStatementProps {
  content: Translations["problemStatement"];
}

export default function ProblemStatement({ content }: ProblemStatementProps) {
  return (
    <section className="py-20 bg-background-elevated relative overflow-hidden">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-text-primary leading-tight">
            {content.title}
            <br />
            <span className="gradient-text-gold pb-2 block mt-2">{content.gradient}</span>
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
            {content.description}
          </p>

          <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full mt-12"></div>
        </div>
      </div>
    </section>
  );
}
