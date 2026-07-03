import * as React from "react"

import { cn } from "@/lib/utils"

type MarketingSectionTone = "default" | "muted" | "card" | "accent"
type MarketingSectionSpacing = "default" | "compact" | "spacious" | "none"

type MarketingSectionProps = React.ComponentPropsWithoutRef<"section"> & {
  tone?: MarketingSectionTone
  spacing?: MarketingSectionSpacing
}

const sectionTones: Record<MarketingSectionTone, string> = {
  default: "bg-background text-foreground",
  muted: "bg-muted text-foreground",
  card: "bg-card text-card-foreground",
  accent: "bg-accent text-accent-foreground",
}

const sectionSpacing: Record<MarketingSectionSpacing, string> = {
  default: "py-16 md:py-24",
  compact: "py-12 md:py-16",
  spacious: "py-20 md:py-32",
  none: "py-0",
}

export function MarketingSection({
  tone = "default",
  spacing = "default",
  className,
  ...props
}: MarketingSectionProps) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden",
        sectionTones[tone],
        sectionSpacing[spacing],
        className
      )}
      {...props}
    />
  )
}

