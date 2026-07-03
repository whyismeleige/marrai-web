import { MarketingContainer } from "@/components/marketing/primitives/marketing-container"
import { MarketingSection } from "@/components/marketing/primitives/marketing-section"
import { TrackingFeatureVisual } from "@/components/marketing/visuals/tracking-feature-visual"

export function TrackingFeatureSection() {
  return (
    <MarketingSection
      spacing="none"
      className="dark bg-background text-foreground"
    >
      <MarketingContainer
        size="full"
        className="min-h-[44rem] overflow-hidden px-0 py-28 text-center sm:min-h-[42rem] sm:py-32 lg:min-h-[42rem]"
      >
        <div className="mx-auto max-w-6xl px-7 sm:px-10 lg:px-8">
          <h2 className="text-balance text-[clamp(3.75rem,11vw,4.75rem)] font-bold leading-[1.05] text-foreground sm:text-[clamp(4.5rem,6vw,6rem)] lg:text-[clamp(4.75rem,5vw,6rem)]">
            Track Multiple AI Platforms
          </h2>
          <p className="mx-auto mt-8 max-w-4xl text-[clamp(1.5rem,4.8vw,2rem)] leading-relaxed text-muted-foreground sm:mt-10 sm:text-h2">
            See how your brand appears across AI answer engines, search
            experiences, and discovery platforms.
          </p>
        </div>

        <TrackingFeatureVisual />
      </MarketingContainer>
    </MarketingSection>
  )
}

