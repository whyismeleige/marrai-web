import Image from "next/image"

import { aiPlatforms, type AiPlatform } from "@/constants/platforms"
import { cn } from "@/lib/utils"

const rowOne = [
  "chatgpt",
  "claude",
  "perplexity",
  "gemini",
  "grok",
  "microsoft-copilot",
  "google-ai-overviews",
] as const

const rowTwo = [
  "google-ai-overviews",
  "deepseek",
  "claude",
  "microsoft-copilot",
  "chatgpt",
  "perplexity",
  "gemini",
] as const

const rowThree = [
  "deepseek",
  "claude",
  "perplexity",
  "gemini",
  "grok",
  "microsoft-copilot",
] as const

type PlatformId = (typeof aiPlatforms)[number]["id"]

function getPlatform(id: PlatformId) {
  return aiPlatforms.find((platform) => platform.id === id)
}

export function TrackingFeatureVisual() {
  return (
    <div
      className="mt-20 space-y-5 overflow-hidden sm:mt-24 sm:space-y-6"
      aria-label="Marrai tracks AI visibility across ChatGPT, Claude, Perplexity, Gemini, Grok, Microsoft Copilot, Google AI Overviews, and Deepseek."
    >
      <PlatformRow ids={rowOne} className="mx-auto max-w-5xl justify-center" />
      <PlatformRow
        ids={rowTwo}
        className="relative left-1/2 w-screen -translate-x-1/2 justify-center"
      />
      <PlatformRow ids={rowThree} className="mx-auto max-w-5xl justify-center" />
    </div>
  )
}

function PlatformRow({
  ids,
  className,
}: {
  ids: readonly PlatformId[]
  className?: string
}) {
  return (
    <div className={cn("flex gap-5 overflow-hidden px-6", className)}>
      {ids.map((id, index) => {
        const platform = getPlatform(id)

        if (!platform) {
          return null
        }

        return <PlatformChip key={`${id}-${index}`} platform={platform} />
      })}
    </div>
  )
}

function PlatformChip({ platform }: { platform: AiPlatform }) {
  return (
    <div className="inline-flex h-16 shrink-0 items-center gap-4 rounded-full bg-card px-7 text-card-foreground ring-1 ring-border/40 sm:h-20 sm:gap-5 sm:px-9">
      <Image
        src={platform.iconSrc}
        alt=""
        width={36}
        height={36}
        className="size-8 object-contain sm:size-9"
        aria-hidden="true"
      />
      <span className="whitespace-nowrap text-h3 font-normal sm:text-[2rem] sm:leading-none">
        {platform.name}
      </span>
    </div>
  )
}

