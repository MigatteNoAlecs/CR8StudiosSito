"use client";

import { motion } from "framer-motion";
import { BookingButton } from "@/components/BookingButton";
import { revealClass, useRevealOnScroll } from "@/lib/reveal";

export function CtaBand() {
  const reveal = useRevealOnScroll({ y: 16, duration: 0.5 });

  return (
    <section id="contatti" className="cta-banner">
      <motion.div {...reveal} className={revealClass("cta-banner__inner container")}>
        <div>
          <h2 className="heading-lg">Pronto a far crescere il tuo business online?</h2>
          <p className="text-body mt-3 max-w-lg">
            Raccontaci il progetto — sito, social o entrambi. Ti rispondiamo in breve.
          </p>
        </div>
        <BookingButton className="btn-mobile-full shrink-0 sm:min-w-[12rem]" />
      </motion.div>
    </section>
  );
}
