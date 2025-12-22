import { Translations } from "@/lib/translations";

interface ProblemStatementProps {
  content: Translations["problemStatement"];
}

export default function ProblemStatement({ content }: ProblemStatementProps) {
  return (
    <section className="py-20 bg-navy-light/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {content.title}
            <br />
            <span className="gradient-text">{content.gradient}</span>
          </h2>
          <p className="text-lg text-slate-400">
            {content.description}
          </p>
        </div>
      </div>
    </section>
  );
}
