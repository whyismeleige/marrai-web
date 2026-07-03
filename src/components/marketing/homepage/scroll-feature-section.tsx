"use client"

import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "framer-motion"

import { MarketingContainer } from "@/components/marketing/primitives/marketing-container"
import { MarketingSection } from "@/components/marketing/primitives/marketing-section"
import { ScrollFeatureVisual } from "@/components/marketing/visuals/scroll-feature-visual"
import { cn } from "@/lib/utils"

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

export function ScrollFeatureSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const shouldReduceMotion = Boolean(useReducedMotion())

  useEffect(() => {
    if (shouldReduceMotion) {
      return
    }

    const wrapper = sectionRef.current

    if (!wrapper) {
      return
    }

    let frameId: number | null = null

    const updateProgress = () => {
      frameId = null

      const rect = wrapper.getBoundingClientRect()
      const scrollableDistance = wrapper.offsetHeight - window.innerHeight
      const nextProgress =
        scrollableDistance <= 0
          ? 1
          : clamp(-rect.top / scrollableDistance, 0, 1)

      setProgress((currentProgress) =>
        Math.abs(currentProgress - nextProgress) < 0.001
          ? currentProgress
          : nextProgress
      )
    }

    const requestProgressUpdate = () => {
      if (frameId !== null) {
        return
      }

      frameId = window.requestAnimationFrame(updateProgress)
    }

    requestProgressUpdate()
    window.addEventListener("scroll", requestProgressUpdate, { passive: true })
    window.addEventListener("resize", requestProgressUpdate)

    return () => {
      window.removeEventListener("scroll", requestProgressUpdate)
      window.removeEventListener("resize", requestProgressUpdate)

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [shouldReduceMotion])

  const visualProgress = shouldReduceMotion ? 1 : progress

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
            : "min-h-[200vh] sm:min-h-[220vh] lg:min-h-[240vh]"
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
            progress={visualProgress}
            shouldReduceMotion={shouldReduceMotion}
          />
        </MarketingContainer>
      </div>
    </MarketingSection>
  )
}
