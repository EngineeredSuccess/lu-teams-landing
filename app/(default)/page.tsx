import Hero from "@/components/Hero";
import FounderAuthority from "@/components/FounderAuthority";
import ProblemStatement from "@/components/ProblemStatement";
import Features from "@/components/Features";
import ClientTransformations from "@/components/ClientTransformations";
import NetworkPatterns from "@/components/NetworkPatterns";
import CoachingOffer from "@/components/CoachingOffer";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";
import { translations } from "@/lib/translations";

export default function Home() {
    const content = translations.en;

    return (
        <main className="min-h-screen bg-background">
            <Hero content={content.hero} />
            <FounderAuthority content={content.founderAuthority} />
            <ProblemStatement content={content.problemStatement} />
            <Features content={content.features} />
            <ClientTransformations content={content.clientTransformations} />
            <NetworkPatterns content={content.networkPatterns} />
            <CoachingOffer content={content.coachingOffer} />
            <ApplicationForm content={content.application} />
            <Footer content={content.footer} />
        </main>
    );
}
