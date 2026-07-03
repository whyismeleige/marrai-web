"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { aiPlatforms } from "@/constants/platforms"
import { cn } from "@/lib/utils"

const heroVisualEase = [0.16, 1, 0.3, 1] as const

const orbitPaths = [
  {
    d: "M70 575C70 251.8 307.3 32 600 32C892.7 32 1130 251.8 1130 575",
    opacity: 0.78,
    reverse: false,
  },
  {
    d: "M155 575C155 305 354.2 124 600 124C845.8 124 1045 305 1045 575",
    opacity: 0.82,
    reverse: true,
  },
  {
    d: "M265 575C265 378.4 415 246 600 246C785 246 935 378.4 935 575",
    opacity: 0.82,
    reverse: false,
  },
  {
    d: "M375 575C375 455 475.7 374 600 374C724.3 374 825 455 825 575",
    opacity: 0.86,
    reverse: true,
  },
] as const

type HeroIconPlacement = {
  platformId: (typeof aiPlatforms)[number]["id"]
  className: string
  motion: {
    x: number[]
    y: number[]
    duration: number
  }
  card?: boolean
}

const iconPlacements = [
  {
    platformId: "google-ai-overviews",
    className: "left-[29%] top-[11%] size-11 md:left-[24%] md:top-[12%] md:size-12",
    motion: {
      x: [0, 10, 18, 8, -8, -16, -6, 0],
      y: [0, -8, 0, 9, 12, 2, -8, 0],
      duration: 18,
    },
  },
  {
    platformId: "chatgpt",
    className: "left-[65%] top-[5%] size-12 md:left-[62%] md:top-[6%] md:size-13",
    motion: {
      x: [0, 14, 20, 8, -10, -18, -6, 0],
      y: [0, 8, 20, 26, 18, 0, -8, 0],
      duration: 21,
    },
    card: true,
  },
  {
    platformId: "perplexity",
    className: "left-[36%] top-[26%] size-11 md:left-[40%] md:top-[27%] md:size-12",
    motion: {
      x: [0, -12, -18, -6, 10, 18, 7, 0],
      y: [0, 8, 18, 26, 18, 2, -8, 0],
      duration: 19,
    },
  },
  {
    platformId: "gemini",
    className: "left-[86%] top-[22%] size-11 md:left-[86%] md:top-[24%] md:size-12",
    motion: {
      x: [0, -12, -24, -18, 0, 14, 10, 0],
      y: [0, -6, 2, 14, 22, 12, 0, 0],
      duration: 22,
    },
  },
  {
    platformId: "microsoft-copilot",
    className: "left-[77%] top-[40%] size-11 md:left-[75%] md:top-[40%] md:size-12",
    motion: {
      x: [0, -16, -20, -8, 12, 20, 8, 0],
      y: [0, 10, 20, 26, 18, 0, -8, 0],
      duration: 20,
    },
  },
  {
    platformId: "grok",
    className: "left-[14%] top-[42%] size-11 md:left-[10%] md:top-[41%] md:size-12",
    motion: {
      x: [0, 14, 24, 16, -4, -16, -10, 0],
      y: [0, -8, 0, 16, 24, 14, 2, 0],
      duration: 23,
    },
  },
  {
    platformId: "deepseek",
    className: "left-[29%] top-[52%] size-10 md:left-[28%] md:top-[52%] md:size-11",
    motion: {
      x: [0, 12, 18, 8, -10, -18, -8, 0],
      y: [0, -8, 0, 14, 18, 6, -4, 0],
      duration: 18,
    },
  },
  {
    platformId: "chatgpt",
    className: "left-[62%] top-[58%] size-12 md:left-[62%] md:top-[58%] md:size-13",
    motion: {
      x: [0, -14, -22, -10, 8, 18, 8, 0],
      y: [0, -10, -2, 14, 22, 12, 0, 0],
      duration: 21,
    },
    card: true,
  },
] as const satisfies readonly HeroIconPlacement[]

export function HeroVisual() {
  const shouldReduceMotion = Boolean(useReducedMotion())

  return (
    <div className="relative mx-auto mt-8 h-[26rem] w-full max-w-[82rem] overflow-hidden sm:mt-10 sm:h-[32rem] lg:mt-12 lg:h-[31rem]">
      <div
        className="absolute left-1/2 top-0 h-full w-[44rem] -translate-x-1/2 text-muted-foreground sm:w-[66rem] lg:w-[78rem]"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-x-0 top-3 h-full w-full"
          viewBox="0 0 1200 620"
          fill="none"
          preserveAspectRatio="none"
        >
          {orbitPaths.map((path, index) => (
            <motion.path
              key={path.d}
              d={path.d}
              stroke="currentColor"
              strokeWidth="2"
              initial={{
                opacity: shouldReduceMotion ? path.opacity : 0,
                pathLength: shouldReduceMotion ? 1 : 0,
                pathOffset: shouldReduceMotion || !path.reverse ? 0 : 1,
              }}
              animate={{
                opacity: path.opacity,
                pathLength: 1,
                pathOffset: 0,
              }}
              transition={{
                delay: shouldReduceMotion ? 0 : 0.34 + index * 0.1,
                duration: shouldReduceMotion ? 0 : 1.45,
                ease: heroVisualEase,
              }}
            />
          ))}
        </svg>

        {iconPlacements.map((placement, index) => {
          const platform = aiPlatforms.find(
            (item) => item.id === placement.platformId
          )

          if (!platform) {
            return null
          }

          return (
            <motion.span
              key={`${platform.id}-${index}`}
              initial={{
                opacity: 0,
                scale: shouldReduceMotion ? 1 : 0.94,
                x: 0,
                y: shouldReduceMotion ? 0 : 8,
              }}
              animate={
                shouldReduceMotion
                  ? { opacity: 1, scale: 1, x: 0, y: 0 }
                  : {
                      opacity: 1,
                      scale: 1,
                      x: placement.motion.x,
                      y: placement.motion.y,
                    }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      opacity: {
                        delay: 0.62 + index * 0.06,
                        duration: 0.5,
                        ease: heroVisualEase,
                      },
                      scale: {
                        delay: 0.62 + index * 0.06,
                        duration: 0.7,
                        ease: heroVisualEase,
                      },
                      x: {
                        delay: 1.2 + index * 0.08,
                        duration: placement.motion.duration,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "loop",
                      },
                      y: {
                        delay: 1.2 + index * 0.08,
                        duration: placement.motion.duration,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "loop",
                      },
                    }
              }
              className={cn(
                "absolute grid place-items-center",
                "card" in placement &&
                  placement.card &&
                  "rounded-md bg-primary/70 p-1.5 shadow-sm ring-1 ring-border",
                placement.className
              )}
            >
              <Image
                src={platform.iconSrc}
                alt=""
                width={56}
                height={56}
                className="size-full object-contain"
                aria-hidden="true"
              />
            </motion.span>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: shouldReduceMotion ? 0 : 0.95,
          duration: shouldReduceMotion ? 0 : 0.65,
          ease: heroVisualEase,
        }}
        whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.015 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
        className="absolute inset-x-0 bottom-12 flex justify-center sm:bottom-16"
      >
        <Button
          asChild
          size="lg"
          className="h-10 rounded-lg px-5 text-label shadow-sm sm:h-11 sm:px-6 sm:text-body"
        >
          <Link href="/audit">Get a Free AEO Audit</Link>
        </Button>
      </motion.div>
    </div>
  )
}
