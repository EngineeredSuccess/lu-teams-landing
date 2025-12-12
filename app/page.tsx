import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemStatement />
      <Features />
      <UseCases />
      <WaitlistForm />
      <Footer />
    </main>
  );
}