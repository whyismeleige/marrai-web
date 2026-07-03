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
        className="min-h-[34rem] overflow-hidden px-0 py-20 text-center sm:min-h-[42rem] sm:py-28 lg:min-h-[40rem]"
      >
        <div className="mx-auto max-w-6xl px-7 sm:px-10 lg:px-8">
          <h2 className="text-balance text-[clamp(2.75rem,10vw,3.75rem)] font-bold leading-[1.05] text-foreground sm:text-[clamp(4rem,5.6vw,5rem)] lg:text-[clamp(3.75rem,4vw,4.75rem)]">
            Track Multiple AI Platforms
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-body leading-relaxed text-muted-foreground sm:mt-8 sm:text-body-lg">
            See how your brand appears across AI answer engines, search
            experiences, and discovery platforms.
          </p>
        </div>

        <TrackingFeatureVisual />
      </MarketingContainer>
    </MarketingSection>
  )
}
