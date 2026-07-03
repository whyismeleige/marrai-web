import { AiDiscoverySection } from "@/components/marketing/homepage/ai-discovery-section"
import { CtaSection } from "@/components/marketing/homepage/cta-section"
import { HeroSection } from "@/components/marketing/homepage/hero-section"
import { ScrollFeatureSection } from "@/components/marketing/homepage/scroll-feature-section"
import { TrackingFeatureSection } from "@/components/marketing/homepage/tracking-feature-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AiDiscoverySection />
      <ScrollFeatureSection />
      <TrackingFeatureSection />
      <CtaSection />
    </>
  )
}
