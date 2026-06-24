"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type ScaledDashboardProps = {
  children: ReactNode;
  className?: string;
};

const DESIGN_WIDTH = 1040;

export function ScaledDashboard({ children, className }: ScaledDashboardProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const inner = innerRef.current;

    if (!wrapper || !inner) {
      return;
    }

    const update = () => {
      const nextScale = Math.min(1, wrapper.clientWidth / DESIGN_WIDTH);
      setScale(nextScale);
      setHeight(inner.offsetHeight);
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(wrapper);
    observer.observe(inner);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={cn("relative w-full overflow-hidden", className)}
      style={height ? { height: height * scale } : undefined}
    >
      <div
        ref={innerRef}
        className="absolute left-1/2 top-0 w-[1040px] origin-top-left"
        style={{
          transform: `translateX(-50%) scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
