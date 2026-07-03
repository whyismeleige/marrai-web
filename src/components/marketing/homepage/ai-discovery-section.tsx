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
        className="grid min-h-[48rem] items-center gap-14 px-5 py-20 sm:min-h-screen sm:px-12 sm:py-28 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:py-24"
      >
        <div className="flex flex-col">
          <div className="max-w-3xl">
            <h2 className="max-w-xl text-[clamp(2.25rem,8vw,3rem)] font-bold leading-[1.08] text-foreground sm:max-w-none sm:text-[clamp(3rem,5.4vw,4.5rem)] lg:text-[clamp(2.7rem,3.5vw,3.75rem)]">
              AI Discovery is Already Mainstream
            </h2>
            <p className="mt-5 max-w-2xl text-body leading-relaxed text-muted-foreground sm:mt-7 sm:text-body-lg lg:text-body">
              Millions of people now ask AI tools what to buy, compare, and
              trust. Marrai helps you see if your brand shows up.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 h-9 rounded-lg px-5 text-label sm:mt-10 sm:h-11 sm:px-6 sm:text-body"
            >
              <Link href="/audit">Run Free AEO Audit</Link>
            </Button>
          </div>

          <div className="mt-12 sm:mt-20 lg:mt-24">
            <AiDiscoveryVisual />
          </div>
        </div>

        <div className="flex flex-col lg:pt-16">
          <div className="text-center md:self-end md:text-right lg:self-auto lg:text-center">
            <p className="text-[clamp(4.75rem,18vw,9rem)] font-normal leading-none text-foreground lg:text-[clamp(7rem,9vw,10rem)]">
              900M+
            </p>
            <p className="mt-4 text-small font-semibold text-foreground sm:mt-6 sm:text-body-lg">
              And its Just in 4 Years
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-9 sm:mt-16 sm:gap-x-20 sm:gap-y-16 lg:mt-20">
            {metrics.map((metric, index) => (
              <div
                key={`${metric.value}-${metric.label}`}
                className={index % 2 === 0 ? "text-left" : "text-right"}
              >
                <p className="text-[clamp(2.4rem,9vw,4.25rem)] font-normal leading-none text-foreground lg:text-[clamp(3.5rem,4.4vw,5rem)]">
                  {metric.value}
                </p>
                <p className="mt-3 text-small leading-snug text-muted-foreground sm:text-body lg:text-small">
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
