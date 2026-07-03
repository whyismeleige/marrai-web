"use client"

const statement =
  "The future of search is changing. Marrai is being built for the new era of AI discovery."

const words = statement.split(" ")

const textClassName =
  "mx-auto max-w-[20rem] text-center text-[clamp(2.15rem,9vw,3.15rem)] font-bold leading-[1.12] tracking-[-0.04em] sm:max-w-5xl sm:text-[clamp(3rem,5.5vw,4.5rem)] sm:leading-[1.08] lg:max-w-6xl lg:text-[clamp(3.1rem,4vw,4.4rem)]"

type ScrollFeatureVisualProps = {
  progress: number
  shouldReduceMotion: boolean
}

type HighlightWordProps = {
  word: string
  index: number
  total: number
  progress: number
}

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max)
}

function smoothstep(value: number) {
  const clamped = clamp(value)

  return clamped * clamped * (3 - 2 * clamped)
}

function getWordOpacity(progress: number, index: number, total: number) {
  /*
   * Reveal starts after a tiny pause and completes before sticky release,
   * so the page feels held until the full sentence is readable.
   */
  const revealProgress = clamp((progress - 0.04) / 0.9)
  const segment = 1 / total
  const start = index * segment * 0.88
  const end = Math.min(1, start + segment * 1.45)
  const raw = (revealProgress - start) / (end - start)

  return smoothstep(raw)
}

function HighlightWord({
  word,
  index,
  total,
  progress,
}: HighlightWordProps) {
  const opacity = getWordOpacity(progress, index, total)

  return (
    <span className="relative inline-block whitespace-nowrap text-muted-foreground/20">
      <span aria-hidden="true">{word}</span>
      <span
        aria-hidden="true"
        style={{ opacity }}
        className="absolute inset-0 text-foreground"
      >
        {word}
      </span>
    </span>
  )
}

export function ScrollFeatureVisual({
  progress,
  shouldReduceMotion,
}: ScrollFeatureVisualProps) {
  if (shouldReduceMotion) {
    return <h2 className={`${textClassName} text-foreground`}>{statement}</h2>
  }

  return (
    <>
      <h2 className="sr-only">{statement}</h2>

      <div
        aria-hidden="true"
        className={`${textClassName} text-muted-foreground/20`}
      >
        {words.map((word, index) => (
          <span key={`${word}-${index}`} className="inline">
            <HighlightWord
              word={word}
              index={index}
              total={words.length}
              progress={progress}
            />
            {index < words.length - 1 ? " " : null}
          </span>
        ))}
      </div>
    </>
  )
}
