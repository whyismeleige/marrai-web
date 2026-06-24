import type { Metadata } from "next";

import { MarraiHero } from "@/components/marketing/marrai-hero";
import { FinalCtaSection } from "@/components/marketing/final-cta-section";
import { HowItWorksSection } from "@/components/marketing/how-it-works-section";
import { ProblemSection } from "@/components/marketing/problem-section";
import { ResearchPreviewSection } from "@/components/marketing/research-preview-section";
import { SignalsSection } from "@/components/marketing/signals-section";

export const metadata: Metadata = {
  title: "Marrai — Be understood. Get cited.",
  description:
    "Run a free AEO audit and see how AI answer engines understand your metadata, schema, content, links, and semantic clarity.",
};

export default function Home() {
  return (
    <main>
      <MarraiHero />
      <ProblemSection />
      <HowItWorksSection />
      <SignalsSection />
      <ResearchPreviewSection />
      <FinalCtaSection />
    </main>
  );
}
