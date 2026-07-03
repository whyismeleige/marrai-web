"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { aiPlatforms, type AiPlatform } from "@/constants/platforms";
import { cn } from "@/lib/utils";

type MarqueeDirection = "left" | "right";

const rowOne = aiPlatforms;
const rowTwo = [...aiPlatforms].reverse();
const rowThree = aiPlatforms;

export function TrackingFeatureVisual() {
  const shouldReduceMotion = Boolean(useReducedMotion());

  const platformNames = aiPlatforms.map((platform) => platform.name).join(", ");

  return (
    <div className="mt-12 space-y-3 overflow-hidden sm:mt-20 sm:space-y-5">
      <p className="sr-only">
        Marrai tracks AI visibility across {platformNames}.
      </p>

      <PlatformRow
        platforms={rowOne}
        className="mx-auto max-w-5xl"
        direction="left"
        duration={30}
        shouldReduceMotion={shouldReduceMotion}
      />

      <PlatformRow
        platforms={rowTwo}
        className="relative left-1/2 w-screen -translate-x-1/2"
        direction="right"
        duration={36}
        shouldReduceMotion={shouldReduceMotion}
      />

      <PlatformRow
        platforms={rowThree}
        className="mx-auto max-w-5xl"
        direction="left"
        duration={30}
        shouldReduceMotion={shouldReduceMotion}
      />
    </div>
  );
}

function PlatformRow({
  platforms,
  className,
  direction,
  duration,
  shouldReduceMotion,
}: {
  platforms: readonly AiPlatform[];
  className?: string;
  direction: MarqueeDirection;
  duration: number;
  shouldReduceMotion: boolean;
}) {
  const initialX = direction === "left" ? "0%" : "-50%";
  const animateX = direction === "left" ? "-50%" : "0%";

  return (
    <div
      className={cn("overflow-hidden px-4 sm:px-6", className)}
      aria-hidden="true"
    >
      {shouldReduceMotion ? (
        <div className="flex justify-center">
          <PlatformChipGroup platforms={platforms} />
        </div>
      ) : (
        <motion.div
          initial={{ x: initialX }}
          animate={{ x: animateX }}
          transition={{
            duration,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex w-max"
        >
          <PlatformChipGroup platforms={platforms} />
          <PlatformChipGroup platforms={platforms} />
        </motion.div>
      )}
    </div>
  );
}

function PlatformChipGroup({
  platforms,
  className,
}: {
  platforms: readonly AiPlatform[];
  className?: string;
}) {
  return (
    <div className={cn("flex shrink-0 gap-2 pr-2 sm:gap-4 sm:pr-4", className)}>
      {platforms.map((platform) => (
        <PlatformChip key={platform.id} platform={platform} />
      ))}
    </div>
  );
}

function PlatformChip({ platform }: { platform: AiPlatform }) {
  return (
    <div className="inline-flex h-9 shrink-0 items-center gap-2 rounded-full bg-card px-3 text-card-foreground ring-1 ring-border/40 sm:h-14 sm:gap-3 sm:px-5 lg:h-16 lg:gap-4 lg:px-7">
      <Image
        src={platform.iconSrc}
        alt=""
        width={36}
        height={36}
        className="size-4 object-contain sm:size-6 lg:size-8"
        aria-hidden="true"
      />

      <span className="whitespace-nowrap text-small font-normal sm:text-body-lg lg:text-h3">
        {platform.name}
      </span>
    </div>
  );
}
