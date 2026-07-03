import Link from "next/link"

import { AiDiscoveryVisual } from "@/components/marketing/visuals/ai-discovery-visual"
import { MarketingContainer } from "@/components/marketing/primitives/marketing-container"
import { MarketingSection } from "@/components/marketing/primitives/marketing-section"
import { Button } from "@/components/ui/button"

const metrics = [
  {
    value: "900M+",
    label: "Weekly ChatGPT users",
  },
  {
    value: "100M+",
    label: "Weekly users in India",
  },
  {
    value: "50M+",
    label: "ChatGPT subscribers",
  },
  {
    value: "2.25x",
    label: "Growth in 1 year",
  },
] as const

export function AiDiscoverySection() {
  return (
    <MarketingSection
      spacing="none"
      className="dark bg-background text-foreground"
    >
      <MarketingContainer
        size="wide"
        className="grid min-h-screen items-center gap-16 px-8 py-24 sm:px-12 sm:py-32 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:py-28"
      >
        <div className="flex flex-col">
          <div className="max-w-3xl">
            <h2 className="max-w-xl text-[clamp(3.25rem,10vw,4.5rem)] font-bold leading-[1.05] text-foreground sm:max-w-none sm:text-[clamp(3.5rem,5.7vw,5rem)] lg:text-[clamp(3.5rem,4.2vw,4.75rem)]">
              AI Discovery is Already Mainstream
            </h2>
            <p className="mt-8 max-w-2xl text-[clamp(1.5rem,4.4vw,1.875rem)] leading-relaxed text-muted-foreground sm:text-h2">
              Millions of people now ask AI tools what to buy, compare, and
              trust. Marrai helps you see if your brand shows up.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-12 h-14 rounded-lg px-7 text-body-lg sm:mt-14"
            >
              <Link href="/audit">Run Free AEO Audit</Link>
            </Button>
          </div>

          <div className="mt-16 sm:mt-24 lg:mt-28">
            <AiDiscoveryVisual />
          </div>
        </div>

        <div className="flex flex-col lg:pt-16">
          <div className="text-center md:self-end md:text-right lg:self-auto lg:text-center">
            <p className="text-[clamp(7rem,24vw,13rem)] font-normal leading-none text-foreground lg:text-[clamp(8rem,10vw,12rem)]">
              900M+
            </p>
            <p className="mt-7 text-h3 font-semibold text-foreground sm:text-h2">
              And its Just in 4 Years
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-16 sm:mt-20 sm:gap-x-24 sm:gap-y-24 lg:mt-24">
            {metrics.map((metric, index) => (
              <div
                key={`${metric.value}-${metric.label}`}
                className={index % 2 === 0 ? "text-left" : "text-right"}
              >
                <p className="text-[clamp(3.75rem,12vw,5.5rem)] font-normal leading-none text-foreground lg:text-[clamp(4.25rem,5vw,5.5rem)]">
                  {metric.value}
                </p>
                <p className="mt-5 text-[clamp(1.25rem,4vw,1.625rem)] leading-snug text-muted-foreground sm:text-h3">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </MarketingContainer>
    </MarketingSection>
  )
}

