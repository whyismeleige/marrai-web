"use client"

import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "framer-motion"

import { ScrollFeatureVisual } from "@/components/marketing/visuals/scroll-feature-visual"
import { cn } from "@/lib/utils"

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max)
}

export function ScrollFeatureSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<number | null>(null)
  const [progress, setProgress] = useState(0)
  const shouldReduceMotion = Boolean(useReducedMotion())

  useEffect(() => {
    if (shouldReduceMotion) {
      setProgress(1)
      return
    }

    const section = sectionRef.current

    if (!section) {
      return
    }

    const updateProgress = () => {
      frameRef.current = null

      const rect = section.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const scrollDistance = section.offsetHeight - viewportHeight

      const nextProgress =
        scrollDistance <= 0 ? 1 : clamp(-rect.top / scrollDistance)

      setProgress((currentProgress) => {
        if (Math.abs(currentProgress - nextProgress) < 0.001) {
          return currentProgress
        }

        return nextProgress
      })
    }

    const requestProgressUpdate = () => {
      if (frameRef.current !== null) {
        return
      }

      frameRef.current = window.requestAnimationFrame(updateProgress)
    }

    requestProgressUpdate()

    window.addEventListener("scroll", requestProgressUpdate, { passive: true })
    window.addEventListener("resize", requestProgressUpdate)

    return () => {
      window.removeEventListener("scroll", requestProgressUpdate)
      window.removeEventListener("resize", requestProgressUpdate)

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [shouldReduceMotion])

  return (
    <section className="dark relative -mt-px bg-background text-foreground">
      <div
        ref={sectionRef}
        className={cn(
          "relative",
          shouldReduceMotion
            ? "h-svh min-h-[34rem]"
            : "h-[185svh] sm:h-[200svh] lg:h-[210svh]"
        )}
      >
        <div
          className={cn(
            "relative w-full",
            shouldReduceMotion ? "h-svh min-h-[34rem]" : "sticky top-0 h-svh"
          )}
        >
          <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-5 text-center sm:px-8 lg:px-10">
            <ScrollFeatureVisual
              progress={shouldReduceMotion ? 1 : progress}
              shouldReduceMotion={shouldReduceMotion}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
