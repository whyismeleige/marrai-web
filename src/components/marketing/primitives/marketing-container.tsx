import * as React from "react"

import { cn } from "@/lib/utils"

type MarketingContainerSize = "default" | "narrow" | "wide" | "full"

type MarketingContainerProps = React.ComponentPropsWithoutRef<"div"> & {
  size?: MarketingContainerSize
}

const containerSizes: Record<MarketingContainerSize, string> = {
  default: "max-w-6xl",
  narrow: "max-w-3xl",
  wide: "max-w-7xl",
  full: "max-w-none",
}

export function MarketingContainer({
  size = "default",
  className,
  ...props
}: MarketingContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        containerSizes[size],
        className
      )}
      {...props}
    />
  )
}

