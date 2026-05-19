"use client";

import { motion } from "framer-motion";
import { BookingButton } from "@/components/BookingButton";
import { revealClass, useRevealOnScroll } from "@/lib/reveal";

export function CtaBand() {
  const reveal = useRevealOnScroll({ y: 16, duration: 0.5 });

  return (
    <section id="contatti" className="border-y border-border bg-surface/80 py-12 sm:py-16">
      <motion.div
        {...reveal}
        className={revealClass(
          "container flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left",
        )}
      >
        <motion.div className="max-w-xl">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            Hai un progetto in mente?
          </h2>
          <p className="text-body mt-2 text-sm sm:text-base">
            Raccontaci la tua idea: sito, social o entrambi. Ti rispondiamo presto.
          </p>
        </motion.div>
        <BookingButton className="btn-mobile-full w-full shrink-0 sm:w-auto sm:min-w-[11rem]" />
      </motion.div>
    </section>
  );
}
