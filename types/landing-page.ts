export interface HeroSectionData {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCTA: {
        text: string;
        href: string;
    };
    secondaryCTA?: {
        text: string;
        href: string;
    };
    trustBadges: string[];
    imageSrc: string;
    imageAlt: string;
}

export interface ProblemCard {
    emoji: string;
    title: string;
    description: string;
}

export interface ProblemSectionData {
    title: string;
    subtitle: string;
    problemCards: ProblemCard[];
    costTitle: string;
    costItems: {
        value: string;
        description: string;
    }[];
}

export interface SolutionStep {
    title: string;
    description: string;
}

export interface SolutionSectionData {
    title: string;
    subtitle: string;
    steps: SolutionStep[];
    imageSrc: string;
    imageAlt: string;
    imageCaption?: string;
}

export interface Testimonial {
    quote: string;
    authorName: string;
    authorTitle: string;
    authorCompany: string;
    authorImage?: string;
    authorImageAlt?: string;
}

export interface Metric {
    value: string;
    label: string;
}

export interface SocialProofSectionData {
    title: string;
    testimonials: Testimonial[];
    metrics: Metric[];
}

export interface PricingSectionData {
    title: string;
    subtitle: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface FAQSectionData {
    title: string;
    items: FAQItem[];
}

export interface CTASectionData {
    headline: string;
    subheadline: string;
    primaryCTA: {
        text: string;
        href: string;
    };
    secondaryCTA?: {
        text: string;
        href: string;
    };
}

export interface LandingPageMetadata {
    title: string;
    description: string;
    keywords: string[];
}

export interface LandingPageConfig {
    meta: LandingPageMetadata;
    hero: HeroSectionData;
    problem: ProblemSectionData;
    solution: SolutionSectionData;
    socialProof: SocialProofSectionData;
    pricing: PricingSectionData;
    faq: FAQSectionData;
    cta: CTASectionData;
}
