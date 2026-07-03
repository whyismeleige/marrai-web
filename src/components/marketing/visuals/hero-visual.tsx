"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { aiPlatforms } from "@/constants/platforms"

const heroVisualEase = [0.16, 1, 0.3, 1] as const

type PlatformId = (typeof aiPlatforms)[number]["id"]
type OrbitDirection = "forward" | "reverse"

type OrbitIcon = {
  platformId: PlatformId
  begin: string
  progress: number
  size?: number
  duration?: number
  card?: boolean
}

type OrbitTrack = {
  id: string
  pathD: string
  opacity: number
  duration: number
  direction: OrbitDirection
  reverseDraw: boolean
  icons: readonly OrbitIcon[]
}

const platformById = new Map(
  aiPlatforms.map((platform) => [platform.id, platform])
)

const orbitTracks = [
  {
    id: "outer",
    pathD:
      "M-90 590C-28 240 288 32 600 32C912 32 1228 240 1290 590",
    opacity: 0.78,
    duration: 17,
    direction: "reverse",
    reverseDraw: false,
    icons: [
      {
        platformId: "google-ai-overviews",
        begin: "-10.2s",
        progress: 0.22,
        size: 52,
      },
      {
        platformId: "chatgpt",
        begin: "-3.9s",
        progress: 0.56,
        size: 52,
        card: true,
      },
      {
        platformId: "gemini",
        begin: "-13.7s",
        progress: 0.88,
        size: 48,
      },
    ],
  },
  {
    id: "second",
    pathD:
      "M10 590C58 308 324 126 600 126C876 126 1142 308 1190 590",
    opacity: 0.82,
    duration: 15,
    direction: "forward",
    reverseDraw: true,
    icons: [
      {
        platformId: "gemini",
        begin: "-11.8s",
        progress: 0.1,
        size: 46,
      },
      {
        platformId: "perplexity",
        begin: "-6.2s",
        progress: 0.39,
        size: 48,
      },
      {
        platformId: "microsoft-copilot",
        begin: "-1.8s",
        progress: 0.81,
        size: 48,
      },
    ],
  },
  {
    id: "third",
    pathD:
      "M130 590C188 380 398 248 600 248C802 248 1012 380 1070 590",
    opacity: 0.82,
    duration: 13,
    direction: "reverse",
    reverseDraw: false,
    icons: [
      {
        platformId: "deepseek",
        begin: "-8.6s",
        progress: 0.26,
        size: 48,
      },
      {
        platformId: "claude",
        begin: "-3.1s",
        progress: 0.56,
        size: 48,
      },
      {
        platformId: "grok",
        begin: "-11.4s",
        progress: 0.78,
        size: 46,
      },
    ],
  },
  {
    id: "inner",
    pathD:
      "M270 590C318 458 452 374 600 374C748 374 882 458 930 590",
    opacity: 0.86,
    duration: 12,
    direction: "forward",
    reverseDraw: true,
    icons: [
      {
        platformId: "google-ai-overviews",
        begin: "-8.8s",
        progress: 0.25,
        size: 50,
      },
      {
        platformId: "chatgpt",
        begin: "-3.3s",
        progress: 0.72,
        size: 52,
        card: true,
      },
    ],
  },
] as const satisfies readonly OrbitTrack[]

function renderPlatformIcon(icon: OrbitIcon) {
  const platform = platformById.get(icon.platformId)
  const size = icon.size ?? 48
  const imageSize = icon.card ? size - 14 : size
  const imageOffset = -imageSize / 2

  if (!platform) {
    return null
  }

  return (
    <>
      {icon.card ? (
        <rect
          x={-size / 2}
          y={-size / 2}
          width={size}
          height={size}
          rx="7"
          className="fill-primary/70 stroke-border"
          strokeWidth="1"
        />
      ) : null}
      <image
        href={platform.iconSrc}
        x={imageOffset}
        y={imageOffset}
        width={imageSize}
        height={imageSize}
        preserveAspectRatio="xMidYMid meet"
      />
    </>
  )
}

function getKeyPoints(direction: OrbitDirection, progress?: number) {
  if (typeof progress === "number") {
    return `${progress};${progress}`
  }

  return direction === "reverse" ? "1;0" : "0;1"
}

export function HeroVisual() {
  const shouldReduceMotion = Boolean(useReducedMotion())

  return (
    <div className="relative mx-auto mt-8 h-[27rem] w-full max-w-[82rem] overflow-hidden sm:mt-10 sm:h-[33rem] lg:mt-12 lg:h-[34rem]">
      <div
        className="absolute left-1/2 top-0 h-full w-[48rem] -translate-x-1/2 text-muted-foreground sm:w-[72rem] lg:w-[84rem]"
        aria-hidden="true"
      >
        <svg
          className="pointer-events-none absolute inset-x-0 top-0 h-full w-full"
          viewBox="0 0 1200 620"
          fill="none"
          preserveAspectRatio="xMidYMin slice"
        >
          {orbitTracks.map((track, index) => (
            <motion.path
              key={track.id}
              d={track.pathD}
              stroke="currentColor"
              strokeWidth="2"
              initial={{
                opacity: shouldReduceMotion ? track.opacity : 0,
                pathLength: shouldReduceMotion ? 1 : 0,
                pathOffset: shouldReduceMotion || !track.reverseDraw ? 0 : 1,
              }}
              animate={{
                opacity: track.opacity,
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

          {orbitTracks.flatMap((track, trackIndex) =>
            track.icons.map((icon, iconIndex) => {
              const key = `${track.id}-${icon.platformId}-${iconIndex}`
              const iconDuration =
                "duration" in icon ? icon.duration : track.duration

              return (
                <motion.g
                  key={key}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: shouldReduceMotion
                      ? 0
                      : 0.64 + trackIndex * 0.08 + iconIndex * 0.04,
                    duration: shouldReduceMotion ? 0 : 0.55,
                    ease: heroVisualEase,
                  }}
                >
                  <animateMotion
                    dur={shouldReduceMotion ? "1ms" : `${iconDuration}s`}
                    begin={shouldReduceMotion ? "0s" : icon.begin}
                    repeatCount={shouldReduceMotion ? "1" : "indefinite"}
                    fill={shouldReduceMotion ? "freeze" : undefined}
                    calcMode="linear"
                    keyPoints={getKeyPoints(
                      track.direction,
                      shouldReduceMotion ? icon.progress : undefined
                    )}
                    keyTimes="0;1"
                    path={track.pathD}
                  />
                  {renderPlatformIcon(icon)}
                </motion.g>
              )
            })
          )}
        </svg>
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
