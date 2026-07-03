import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { aiPlatforms } from "@/constants/platforms"
import { cn } from "@/lib/utils"

type HeroIconPlacement = {
  platformId: (typeof aiPlatforms)[number]["id"]
  className: string
  card?: boolean
}

const iconPlacements = [
  {
    platformId: "google-ai-overviews",
    className: "left-[22%] top-[11%] size-11 md:left-[24%] md:top-[12%] md:size-12",
  },
  {
    platformId: "chatgpt",
    className: "left-[65%] top-[5%] size-12 md:left-[62%] md:top-[6%] md:size-13",
    card: true,
  },
  {
    platformId: "perplexity",
    className: "left-[36%] top-[26%] size-11 md:left-[40%] md:top-[27%] md:size-12",
  },
  {
    platformId: "gemini",
    className: "left-[86%] top-[22%] size-11 md:left-[86%] md:top-[24%] md:size-12",
  },
  {
    platformId: "microsoft-copilot",
    className: "left-[77%] top-[40%] size-11 md:left-[75%] md:top-[40%] md:size-12",
  },
  {
    platformId: "grok",
    className: "left-[8%] top-[42%] size-11 md:left-[10%] md:top-[41%] md:size-12",
  },
  {
    platformId: "deepseek",
    className: "left-[29%] top-[52%] size-10 md:left-[28%] md:top-[52%] md:size-11",
  },
  {
    platformId: "chatgpt",
    className: "left-[62%] top-[58%] size-12 md:left-[62%] md:top-[58%] md:size-13",
    card: true,
  },
] as const satisfies readonly HeroIconPlacement[]

export function HeroVisual() {
  return (
    <div className="relative mx-auto mt-10 h-[31rem] w-full max-w-[82rem] overflow-hidden sm:mt-14 sm:h-[39rem] lg:mt-16 lg:h-[40rem]">
      <div
        className="absolute left-1/2 top-0 h-full w-[54rem] -translate-x-1/2 text-muted-foreground sm:w-[78rem] lg:w-[82rem]"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-x-0 top-3 h-full w-full"
          viewBox="0 0 1200 620"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M70 575C70 251.8 307.3 32 600 32C892.7 32 1130 251.8 1130 575"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.78"
          />
          <path
            d="M155 575C155 305 354.2 124 600 124C845.8 124 1045 305 1045 575"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.82"
          />
          <path
            d="M265 575C265 378.4 415 246 600 246C785 246 935 378.4 935 575"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.82"
          />
          <path
            d="M375 575C375 455 475.7 374 600 374C724.3 374 825 455 825 575"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.86"
          />
        </svg>

        {iconPlacements.map((placement, index) => {
          const platform = aiPlatforms.find(
            (item) => item.id === placement.platformId
          )

          if (!platform) {
            return null
          }

          return (
            <span
              key={`${platform.id}-${index}`}
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
            </span>
          )
        })}
      </div>

      <Button
        asChild
        size="lg"
        className="absolute bottom-16 left-1/2 h-12 -translate-x-1/2 rounded-lg px-7 text-body shadow-sm sm:bottom-20"
      >
        <Link href="/audit">Get a Free AEO Audit</Link>
      </Button>
    </div>
  )
}
