import { MarraiHero } from "@/components/marketing/marrai-hero";
import { FinalCtaSection } from "@/components/marketing/final-cta-section";
import { HowItWorksSection } from "@/components/marketing/how-it-works-section";
import { ProblemSection } from "@/components/marketing/problem-section";
import { SignalsSection } from "@/components/marketing/signals-section";

export default function Home() {
  return (
    <main>
      <MarraiHero />
      <ProblemSection />
      <HowItWorksSection />
      <SignalsSection />
      <FinalCtaSection />
    </main>
  );
}
