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
    <section className="py-20 bg-background" id="features">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            {content.header.title} <span className="gradient-text-gold">{content.header.highlight}</span>
          </h2>
          <p className="section-subtitle">
            {content.header.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.items.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-background-surface border border-white/5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all group"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary/20 transition-colors">
                {getIcon(index)}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold font-display mb-3 text-text-primary">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
