import * as React from "react"

import { cn } from "@/lib/utils"

type SectionHeadingAlign = "start" | "center"
type SectionHeadingLevel = "h1" | "h2" | "h3"

type SectionHeadingProps = React.ComponentPropsWithoutRef<"div"> & {
  eyebrow?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  align?: SectionHeadingAlign
  titleAs?: SectionHeadingLevel
}

const headingAlignment: Record<SectionHeadingAlign, string> = {
  start: "items-start text-left",
  center: "items-center text-center",
}

const headingSizes: Record<SectionHeadingLevel, string> = {
  h1: "text-h1 font-semibold",
  h2: "text-h2 font-semibold",
  h3: "text-h3 font-semibold",
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
  titleAs = "h2",
  className,
  ...props
}: SectionHeadingProps) {
  const TitleTag = titleAs

  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-4",
        headingAlignment[align],
        className
      )}
      {...props}
    >
      {eyebrow ? (
        <p className="text-label font-medium text-primary">{eyebrow}</p>
      ) : null}
      <TitleTag
        className={cn(
          "text-balance font-sans text-foreground",
          headingSizes[titleAs]
        )}
      >
        {title}
      </TitleTag>
      {description ? (
        <p className="max-w-2xl text-body-lg text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  )
}

