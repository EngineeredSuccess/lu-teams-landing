import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import Roadmap from "@/components/Roadmap";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";
import { translations } from "@/lib/translations";

export default function HomePL() {
    const content = translations.pl;

    return (
        <main className="min-h-screen">
            <Hero content={content.hero} />
            <ProblemStatement content={content.problemStatement} />
            <Features content={content.features} />
            <UseCases content={content.useCases} />
            <Roadmap content={content.roadmap} />
            <WaitlistForm content={content.waitlist} />
            <Footer content={content.footer} />
        </main>
    );
}
