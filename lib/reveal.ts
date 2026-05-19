"use client";

import { useReducedMotion } from "framer-motion";
import { useMemo } from "react";

type RevealOptions = {
  y?: number;
  x?: number;
  delay?: number;
  duration?: number;
};

/** Scroll reveal on desktop. On mobile, `.reveal-motion` CSS keeps content visible. */
export function useRevealOnScroll({
  y = 20,
  x,
  delay = 0,
  duration = 0.55,
}: RevealOptions = {}) {
  const reduceMotion = useReducedMotion();

  return useMemo(() => {
    const visible = { opacity: 1, y: 0, x: 0 };

    if (reduceMotion) {
      return {
        initial: false as const,
        animate: visible,
      };
    }

    const hidden = x !== undefined ? { opacity: 0, x } : { opacity: 0, y };

    return {
      initial: hidden,
      whileInView: visible,
      viewport: { once: true, amount: 0.08 },
      transition: { duration, delay },
    };
  }, [reduceMotion, y, x, delay, duration]);
}

export function revealClass(...parts: (string | undefined)[]) {
  return ["reveal-motion", ...parts.filter(Boolean)].join(" ");
}
