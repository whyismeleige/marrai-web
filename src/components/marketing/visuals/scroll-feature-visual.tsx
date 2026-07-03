"use client"

import { motion, useReducedMotion } from "framer-motion"

const statement =
  "The future of search is changing. Marrai is being built for the new era of AI discovery."
const words = statement.split(" ")
const textClassName =
  "mx-auto max-w-[18rem] text-center text-[clamp(2.5rem,10vw,3.5rem)] font-bold leading-[1.16] sm:max-w-5xl sm:text-[clamp(3.5rem,5.6vw,5rem)] sm:leading-[1.12] lg:max-w-6xl lg:text-[clamp(3rem,4vw,4.25rem)]"
const highlightEase = [0.16, 1, 0.3, 1] as const

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

function getWordOpacity(progress: number, index: number, total: number) {
  const segment = 1 / total
  const start = index * segment * 0.82
  const end = Math.min(1, start + segment * 1.45)
  const raw = (progress - start) / (end - start)
  const clamped = Math.min(Math.max(raw, 0), 1)

  return clamped * clamped * (3 - 2 * clamped)
}

function HighlightWord({
  word,
  index,
  total,
  progress,
}: HighlightWordProps) {
  const opacity = getWordOpacity(progress, index, total)

  return (
    <span className="relative inline-block text-muted-foreground/20">
      <span>{word}</span>
      <span style={{ opacity }} className="absolute inset-0 text-foreground">
        {word}
      </span>
    </span>
  )
}

export function ScrollFeatureVisual({
  progress,
  shouldReduceMotion,
}: ScrollFeatureVisualProps) {
  const prefersReducedMotion = Boolean(useReducedMotion())

  if (shouldReduceMotion || prefersReducedMotion) {
    return <h2 className={`${textClassName} text-foreground`}>{statement}</h2>
  }

  return (
    <>
      <h2 className="sr-only">{statement}</h2>
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.7, ease: highlightEase }}
        className={`${textClassName} text-muted-foreground/35`}
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
      </motion.div>
    </>
  )
}
