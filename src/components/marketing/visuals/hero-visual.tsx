"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { aiPlatforms, type AiPlatform } from "@/constants/platforms"

const heroVisualEase = [0.16, 1, 0.3, 1] as const

type OrbitDirection = "forward" | "reverse"

type OrbitIcon = {
  platform: AiPlatform
  begin: string
  progress: number
  size: number
}

type OrbitTrackBase = {
  id: string
  pathD: string
  opacity: number
  duration: number
  direction: OrbitDirection
  reverseDraw: boolean
  minIcons: number
  maxIcons: number
  sizes: readonly number[]
}

type OrbitTrack = OrbitTrackBase & {
  icons: readonly OrbitIcon[]
}

const orbitTrackBases = [
  {
    id: "outer",
    pathD:
      "M-90 590C-28 240 288 32 600 32C912 32 1228 240 1290 590",
    opacity: 0.78,
    duration: 17,
    direction: "reverse",
    reverseDraw: false,
    minIcons: 4,
    maxIcons: 5,
    sizes: [48, 50, 52],
  },
  {
    id: "second",
    pathD:
      "M10 590C58 308 324 126 600 126C876 126 1142 308 1190 590",
    opacity: 0.82,
    duration: 15,
    direction: "forward",
    reverseDraw: true,
    minIcons: 4,
    maxIcons: 5,
    sizes: [46, 48, 50],
  },
  {
    id: "third",
    pathD:
      "M130 590C188 380 398 248 600 248C802 248 1012 380 1070 590",
    opacity: 0.82,
    duration: 13,
    direction: "reverse",
    reverseDraw: false,
    minIcons: 3,
    maxIcons: 4,
    sizes: [44, 46, 48],
  },
  {
    id: "inner",
    pathD:
      "M270 590C318 458 452 374 600 374C748 374 882 458 930 590",
    opacity: 0.86,
    duration: 12,
    direction: "forward",
    reverseDraw: true,
    minIcons: 2,
    maxIcons: 3,
    sizes: [46, 48, 50],
  },
] as const satisfies readonly OrbitTrackBase[]

function createSeededRandom(seed: number) {
  return function random() {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0

    let value = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value

    return ((value ^ (value >>> 14)) >>> 0) / 4294967296
  }
}

function hashString(value: string) {
  let hash = 2166136261

  for (let index = 0; index < value.length; index++) {
    hash ^= value.charCodeAt(index)
    hash = Math.imul(hash, 16777619)
  }

  return hash >>> 0
}

function seededShuffle<T>(items: readonly T[], seed: number) {
  const random = createSeededRandom(seed)
  const shuffled = [...items]

  for (let index = shuffled.length - 1; index > 0; index--) {
    const swapIndex = Math.floor(random() * (index + 1))
    ;[shuffled[index], shuffled[swapIndex]] = [
      shuffled[swapIndex],
      shuffled[index],
    ]
  }

  return shuffled
}

function getRandomIconCount(track: OrbitTrackBase) {
  const seed = hashString(`${track.id}-${aiPlatforms.length}-count`)
  const random = createSeededRandom(seed)

  const maxPossibleIcons = Math.min(track.maxIcons, aiPlatforms.length)
  const minPossibleIcons = Math.min(track.minIcons, maxPossibleIcons)

  return (
    minPossibleIcons +
    Math.floor(random() * (maxPossibleIcons - minPossibleIcons + 1))
  )
}

function buildOrbitIcons(track: OrbitTrackBase): OrbitIcon[] {
  const iconCount = getRandomIconCount(track)
  const seed = hashString(`${track.id}-${aiPlatforms.length}-platforms`)
  const platforms = seededShuffle(aiPlatforms, seed).slice(0, iconCount)

  return platforms.map((platform, index) => {
    const progress = index / iconCount
    const begin = `-${(track.duration * progress).toFixed(2)}s`
    const size = track.sizes[index % track.sizes.length]

    return {
      platform,
      begin,
      progress,
      size,
    }
  })
}

const orbitTracks = orbitTrackBases.map((track) => ({
  ...track,
  icons: buildOrbitIcons(track),
})) satisfies readonly OrbitTrack[]

function renderPlatformIcon(icon: OrbitIcon) {
  const size = icon.size
  const imageOffset = -size / 2

  return (
    <>
      <image
        href={icon.platform.iconSrc}
        x={imageOffset}
        y={imageOffset}
        width={size}
        height={size}
        preserveAspectRatio="xMidYMid meet"
      />
    </>
  )
}

function getStaticProgress(direction: OrbitDirection, progress: number) {
  return direction === "reverse" ? 1 - progress : progress
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
              const key = `${track.id}-${icon.platform.id}-${iconIndex}`
              const staticProgress = getStaticProgress(
                track.direction,
                icon.progress
              )

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
                    dur={shouldReduceMotion ? "1ms" : `${track.duration}s`}
                    begin={shouldReduceMotion ? "0s" : icon.begin}
                    repeatCount={shouldReduceMotion ? "1" : "indefinite"}
                    fill={shouldReduceMotion ? "freeze" : undefined}
                    calcMode="linear"
                    keyPoints={getKeyPoints(
                      track.direction,
                      shouldReduceMotion ? staticProgress : undefined
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
