import { Translations } from "@/lib/translations";

interface UseCasesProps {
  content: Translations["useCases"];
}

export default function UseCases({ content }: UseCasesProps) {
  const getEmoji = (index: number) => {
    switch (index) {
      case 0: return "🚀";
      case 1: return "💻";
      case 2: return "🏭";
      default: return "";
    }
  };

  return (
    <section className="py-20 bg-navy-light/30" id="use-cases">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            {content.header.title} <span className="gradient-text">{content.header.highlight}</span>
          </h2>

          {/* Use Cases List */}
          <div className="space-y-8">
            {content.items.map((useCase, index) => (
              <div
                key={index}
                className="flex gap-6 items-start"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan font-bold text-lg">{getEmoji(index)}</span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {useCase.title}
                  </h3>
                  <p className="text-slate-400">
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
