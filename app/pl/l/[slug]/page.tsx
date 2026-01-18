import { Metadata } from "next";
import { notFound } from "next/navigation";
import toxicGeniusConfig from "@/config/landing-toxic-genius";
import retencjaConfig from "@/config/landing-retencja";
import zespolZdalnyConfig from "@/config/landing-zespol-zdalny";
import techLeadConfig from "@/config/landing-tech-lead";
import { LandingPageConfig } from "@/types/landing-page";

// Components
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";

const CONFIG_MAP: Record<string, LandingPageConfig> = {
    "toxic-genius": toxicGeniusConfig,
    "retencja": retencjaConfig,
    "zespol-zdalny": zespolZdalnyConfig,
    "tech-lead": techLeadConfig,
};

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const config = CONFIG_MAP[slug];

    if (!config) {
        return {};
    }

    return {
        title: config.meta.title,
        description: config.meta.description,
        keywords: config.meta.keywords,
        robots: {
            index: false,
            follow: true,
        },
    };
}

export default async function LandingPage({ params }: Props) {
    const { slug } = await params;
    const config = CONFIG_MAP[slug];

    if (!config) {
        return notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <HeroSection {...config.hero} />
            <ProblemSection {...config.problem} />
            <SolutionSection {...config.solution} />
            <SocialProofSection {...config.socialProof} />
            <PricingSection {...config.pricing} />
            <FAQSection {...config.faq} />
            <CTASection {...config.cta} />
        </main>
    );
}

export function generateStaticParams() {
    return Object.keys(CONFIG_MAP).map((slug) => ({ slug }));
}
