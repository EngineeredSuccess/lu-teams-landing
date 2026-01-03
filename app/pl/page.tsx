import Hero from "@/components/Hero";
import FounderAuthority from "@/components/FounderAuthority";
import HowItWorks from "@/components/HowItWorks";
import ProblemStatement from "@/components/ProblemStatement";
import Features from "@/components/Features";
import ClientTransformations from "@/components/ClientTransformations";
import NetworkPatterns from "@/components/NetworkPatterns";
import CoachingOffer from "@/components/CoachingOffer";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { translations } from "@/lib/translations";

export default function HomePL() {
    const content = translations.pl;

    return (
        <main className="min-h-screen bg-background">
            <Hero content={content.hero} />
            <FounderAuthority content={content.founderAuthority} />
            <HowItWorks content={content.howItWorks} />
            <ProblemStatement content={content.problemStatement} />
            <Features content={content.features} />
            <ClientTransformations content={content.clientTransformations} />
            <NetworkPatterns content={content.networkPatterns} />
            <CoachingOffer content={content.coachingOffer} />
            <ApplicationForm content={content.application} />
            <FAQ content={content.faq} />
            <Footer content={content.footer} />
        </main>
    );
}
