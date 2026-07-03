"use client"

import { motion, useReducedMotion } from "framer-motion"

import { HeroVisual } from "@/components/marketing/visuals/hero-visual"
import { MarketingContainer } from "@/components/marketing/primitives/marketing-container"
import { MarketingSection } from "@/components/marketing/primitives/marketing-section"

const heroEntranceEase = [0.16, 1, 0.3, 1] as const

export function HeroSection() {
  const shouldReduceMotion = Boolean(useReducedMotion())

  return (
    <MarketingSection
      spacing="none"
      className="dark min-h-[calc(100svh-4rem)] overflow-hidden bg-background text-foreground sm:min-h-[calc(100svh-5rem)]"
    >
      <MarketingContainer
        size="full"
        className="flex min-h-[inherit] flex-col items-center justify-start px-4 pb-10 pt-9 text-center sm:px-6 sm:pb-12 sm:pt-16 lg:px-8 lg:pt-14"
      >
        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.55,
            ease: heroEntranceEase,
          }}
          className="text-small font-semibold text-muted-foreground sm:text-body-lg"
        >
          AI Visibility Intelligence
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: shouldReduceMotion ? 0 : 0.12,
            duration: shouldReduceMotion ? 0 : 0.8,
            ease: heroEntranceEase,
          }}
          className="mt-4 max-w-[72rem] text-balance text-[clamp(2.9rem,13vw,4.4rem)] font-bold leading-[0.98] text-foreground sm:mt-6 md:whitespace-nowrap md:text-[clamp(3rem,5.5vw,4.75rem)] lg:text-[clamp(3.5rem,4.7vw,5rem)]"
        >
          <span className="block md:inline">Be</span>{" "}
          <span className="block md:inline">Understood.</span>{" "}
          <span className="block md:inline">Get Cited.</span>
        </motion.h1>

        <HeroVisual />
      </MarketingContainer>
    </MarketingSection>
  )
}
