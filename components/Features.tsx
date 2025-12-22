import { Translations } from "@/lib/translations";

interface FeaturesProps {
  content: Translations["features"];
}

export default function Features({ content }: FeaturesProps) {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        );
      case 1:
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case 2:
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20" id="features">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {content.header.title} <span className="gradient-text">{content.header.highlight}</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {content.header.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.items.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-navy-light/50 border border-cyan/20 hover:border-cyan/50 transition-all"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center mb-6 text-cyan">
                {getIcon(index)}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
