"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"

const graphEase = [0.16, 1, 0.3, 1] as const
const growthPath =
  "M0 210C58 197 95 185 139 169C176 156 214 167 260 158C315 147 346 121 401 111C442 103 471 113 510 100C575 78 632 72 720 65"
const fillPath = `${growthPath}V420H0V210Z`

export function AiDiscoveryVisual() {
  const visualRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = Boolean(useReducedMotion())
  const isInView = useInView(visualRef, { once: true, amount: 0.45 })

  return (
    <div
      ref={visualRef}
      className="relative h-48 w-full overflow-hidden sm:h-72 md:h-[28rem] lg:h-[20rem]"
    >
      <svg
        className="absolute inset-0 size-full text-chart-2"
        viewBox="0 0 720 420"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="ai-discovery-growth-fill"
            x1="360"
            y1="74"
            x2="360"
            y2="420"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="currentColor" stopOpacity="0.46" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d={fillPath}
          fill="url(#ai-discovery-growth-fill)"
          initial={{
            opacity: shouldReduceMotion ? 1 : 0,
            scaleX: shouldReduceMotion ? 1 : 0,
          }}
          animate={
            isInView
              ? { opacity: 1, scaleX: 1 }
              : {
                  opacity: shouldReduceMotion ? 1 : 0,
                  scaleX: shouldReduceMotion ? 1 : 0,
                }
          }
          transition={{
            delay: shouldReduceMotion ? 0 : 0.12,
            duration: shouldReduceMotion ? 0 : 1,
            ease: graphEase,
          }}
          style={{ transformOrigin: "0px 420px" }}
        />
        <motion.path
          d={growthPath}
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{
            opacity: shouldReduceMotion ? 1 : 0,
            pathLength: shouldReduceMotion ? 1 : 0,
          }}
          animate={
            isInView
              ? { opacity: 1, pathLength: 1 }
              : {
                  opacity: shouldReduceMotion ? 1 : 0,
                  pathLength: shouldReduceMotion ? 1 : 0,
                }
          }
          transition={{
            duration: shouldReduceMotion ? 0 : 1.2,
            ease: graphEase,
          }}
        />
      </svg>
    </div>
  )
}
