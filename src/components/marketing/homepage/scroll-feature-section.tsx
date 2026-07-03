"use client"

import { useRef } from "react"
import { useReducedMotion, useScroll } from "framer-motion"

import { MarketingContainer } from "@/components/marketing/primitives/marketing-container"
import { MarketingSection } from "@/components/marketing/primitives/marketing-section"
import { ScrollFeatureVisual } from "@/components/marketing/visuals/scroll-feature-visual"
import { cn } from "@/lib/utils"

export function ScrollFeatureSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = Boolean(useReducedMotion())
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  return (
    <MarketingSection
      spacing="none"
      className="dark bg-background text-foreground"
    >
      <div
        ref={sectionRef}
        className={cn(
          shouldReduceMotion
            ? "min-h-[34rem] sm:min-h-[42rem] lg:min-h-[38rem]"
            : "min-h-[185vh] sm:min-h-[220vh] lg:min-h-[230vh]"
        )}
      >
        <MarketingContainer
          size="wide"
          className={cn(
            "grid place-items-center px-8 sm:px-10",
            shouldReduceMotion
              ? "min-h-[34rem] py-20 sm:min-h-[42rem] lg:min-h-[38rem]"
              : "sticky top-0 min-h-screen py-20"
          )}
        >
          <ScrollFeatureVisual
            scrollProgress={scrollYProgress}
            shouldReduceMotion={shouldReduceMotion}
          />
        </MarketingContainer>
      </div>
    </MarketingSection>
  )
}
