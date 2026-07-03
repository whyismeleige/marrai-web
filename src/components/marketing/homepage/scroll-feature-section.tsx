import { MarketingContainer } from "@/components/marketing/primitives/marketing-container"
import { MarketingSection } from "@/components/marketing/primitives/marketing-section"
import { ScrollFeatureVisual } from "@/components/marketing/visuals/scroll-feature-visual"

export function ScrollFeatureSection() {
  return (
    <MarketingSection
      spacing="none"
      className="dark bg-background text-foreground"
    >
      <MarketingContainer
        size="wide"
        className="grid min-h-[44rem] place-items-center px-8 py-24 sm:min-h-[50rem] sm:px-10 lg:min-h-[40rem]"
      >
        <ScrollFeatureVisual />
      </MarketingContainer>
    </MarketingSection>
  )
}

