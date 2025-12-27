import { Translations } from "@/lib/translations";
import {
  Brain,
  Users,
  Target,
  AlertTriangle,
  UserPlus,
  RefreshCw
} from "lucide-react";

interface FeaturesProps {
  content: Translations["features"];
}

export default function Features({ content }: FeaturesProps) {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Brain className="w-6 h-6" />;
      case 1:
        return <Users className="w-6 h-6" />;
      case 2:
        return <Target className="w-6 h-6" />;
      case 3:
        return <AlertTriangle className="w-6 h-6" />;
      case 4:
        return <UserPlus className="w-6 h-6" />;
      case 5:
        return <RefreshCw className="w-6 h-6" />;
      default:
        return <Brain className="w-6 h-6" />;
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
