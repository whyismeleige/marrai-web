"use client"

import Link from "next/link"
import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"

import { AiDiscoveryVisual } from "@/components/marketing/visuals/ai-discovery-visual"
import { MarketingContainer } from "@/components/marketing/primitives/marketing-container"
import { MarketingSection } from "@/components/marketing/primitives/marketing-section"
import { Button } from "@/components/ui/button"

const discoveryEase = [0.16, 1, 0.3, 1] as const
const digitSequence = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const metrics = [
  {
    value: "900M+",
    label: "Weekly ChatGPT users",
  },
  {
    value: "100M+",
    label: "Weekly users in India",
  },
  {
    value: "50M+",
    label: "ChatGPT subscribers",
  },
  {
    value: "2.25x",
    label: "Growth in 1 year",
  },
] as const

type SlotMetricValueProps = {
  value: string
  shouldAnimate: boolean
  className: string
}

function SlotMetricValue({
  value,
  shouldAnimate,
  className,
}: SlotMetricValueProps) {
  const shouldReduceMotion = Boolean(useReducedMotion())

  if (shouldReduceMotion) {
    return <p className={className}>{value}</p>
  }

  return (
    <p className={className} aria-label={value}>
      <span aria-hidden="true">
        {value.split("").map((character, index) => {
          const isDigit = /\d/.test(character)

          if (!isDigit) {
            return (
              <motion.span
                key={`${character}-${index}`}
                initial={{ opacity: 0, y: 8 }}
                animate={
                  shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }
                }
                transition={{
                  delay: 0.08 * index,
                  duration: 0.42,
                  ease: discoveryEase,
                }}
                className="inline-block"
              >
                {character}
              </motion.span>
            )
          }

          const stack = [...digitSequence, character]
          const targetOffset = stack.length - 1

          return (
            <span
              key={`${character}-${index}`}
              className="inline-block h-[1em] overflow-hidden align-bottom"
            >
              <motion.span
                initial={{ y: "0em" }}
                animate={{ y: shouldAnimate ? `-${targetOffset}em` : "0em" }}
                transition={{
                  delay: 0.06 * index,
                  duration: 0.9 + index * 0.045,
                  ease: discoveryEase,
                }}
                className="flex flex-col"
              >
                {stack.map((digit, digitIndex) => (
                  <span
                    key={`${character}-${index}-${digitIndex}`}
                    className="block h-[1em] leading-none"
                  >
                    {digit}
                  </span>
                ))}
              </motion.span>
            </span>
          )
        })}
      </span>
    </p>
  )
}

export function AiDiscoverySection() {
  const metricsRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = Boolean(useReducedMotion())
  const metricsInView = useInView(metricsRef, { once: true, amount: 0.35 })
  const shouldAnimateMetrics = metricsInView && !shouldReduceMotion

  return (
    <MarketingSection
      spacing="none"
      className="dark bg-background text-foreground"
    >
      <MarketingContainer
        size="wide"
        className="grid min-h-[48rem] items-center gap-14 px-5 py-20 sm:min-h-screen sm:px-12 sm:py-28 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:py-24"
      >
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              ease: discoveryEase,
            }}
            className="max-w-3xl"
          >
            <h2 className="max-w-xl text-[clamp(2.25rem,8vw,3rem)] font-bold leading-[1.08] text-foreground sm:max-w-none sm:text-[clamp(3rem,5.4vw,4.5rem)] lg:text-[clamp(2.7rem,3.5vw,3.75rem)]">
              AI Discovery is Already Mainstream
            </h2>
            <p className="mt-5 max-w-2xl text-body leading-relaxed text-muted-foreground sm:mt-7 sm:text-body-lg lg:text-body">
              Millions of people now ask AI tools what to buy, compare, and
              trust. Marrai helps you see if your brand shows up.
            </p>
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{
                delay: shouldReduceMotion ? 0 : 0.14,
                duration: shouldReduceMotion ? 0 : 0.55,
                ease: discoveryEase,
              }}
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              className="mt-8 inline-flex sm:mt-10"
            >
              <Button
                asChild
                size="lg"
                className="h-9 rounded-lg px-5 sm:h-11 sm:px-6"
              >
                <Link href="/audit">Run Free AEO Audit</Link>
              </Button>
            </motion.div>
          </motion.div>

          <div className="mt-12 sm:mt-20 lg:mt-24">
            <AiDiscoveryVisual />
          </div>
        </div>

        <div ref={metricsRef} className="flex flex-col lg:pt-16">
          <div className="text-right">
            <SlotMetricValue
              value="900M+"
              shouldAnimate={shouldAnimateMetrics}
              className="text-[clamp(4.75rem,18vw,9rem)] font-normal leading-none text-foreground lg:text-[clamp(7rem,9vw,10rem)]"
            />
            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={
                metricsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
              }
              transition={{
                delay: shouldReduceMotion ? 0 : 0.28,
                duration: shouldReduceMotion ? 0 : 0.5,
                ease: discoveryEase,
              }}
              className="mt-4 text-small font-semibold text-foreground sm:mt-6 sm:text-body-lg"
            >
              And its Just in 4 Years
            </motion.p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-9 sm:mt-16 sm:gap-x-20 sm:gap-y-16 lg:mt-20">
            {metrics.map((metric, index) => (
              <motion.div
                key={`${metric.value}-${metric.label}`}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
                animate={
                  metricsInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: shouldReduceMotion ? 0 : 14 }
                }
                transition={{
                  delay: shouldReduceMotion ? 0 : 0.18 + index * 0.08,
                  duration: shouldReduceMotion ? 0 : 0.55,
                  ease: discoveryEase,
                }}
                className={index % 2 === 0 ? "text-left" : "text-right"}
              >
                <SlotMetricValue
                  value={metric.value}
                  shouldAnimate={shouldAnimateMetrics}
                  className="text-[clamp(2.4rem,9vw,4.25rem)] font-normal leading-none text-foreground lg:text-[clamp(3.5rem,4.4vw,5rem)]"
                />
                <p className="mt-3 text-small leading-snug text-muted-foreground sm:text-body lg:text-small">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </MarketingContainer>
    </MarketingSection>
  )
}
