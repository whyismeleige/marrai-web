import { HeroVisual } from "@/components/marketing/visuals/hero-visual"
import { MarketingContainer } from "@/components/marketing/primitives/marketing-container"
import { MarketingSection } from "@/components/marketing/primitives/marketing-section"

export function HeroSection() {
  return (
    <MarketingSection
      spacing="none"
      className="dark min-h-[calc(100svh-6rem)] bg-background text-foreground sm:min-h-[calc(100svh-7rem)] lg:min-h-[calc(100svh-5rem)]"
    >
      <MarketingContainer
        size="full"
        className="flex min-h-[inherit] flex-col items-center justify-start px-4 pb-10 pt-20 text-center sm:px-6 sm:pt-28 lg:px-8 lg:pt-24"
      >
        <p className="text-h3 font-semibold text-muted-foreground sm:text-h2">
          AI Visibility Intelligence
        </p>
        <h1 className="mt-8 max-w-7xl text-balance text-[clamp(4rem,14vw,5.75rem)] font-bold leading-[0.98] text-foreground sm:mt-8 md:whitespace-nowrap md:text-[clamp(4.5rem,7vw,6rem)] lg:text-[clamp(4.75rem,6vw,6.25rem)]">
          <span className="block md:inline">Be</span>{" "}
          <span className="block md:inline">Understood.</span>{" "}
          <span className="block md:inline">Get Cited.</span>
        </h1>
        <HeroVisual />
      </MarketingContainer>
    </MarketingSection>
  )
}

