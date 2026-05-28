"use client";

import { motion } from "framer-motion";
import { faqItems } from "@/lib/content";
import { revealClass, useRevealOnScroll } from "@/lib/reveal";

export function Faq() {
  const intro = useRevealOnScroll();
  const item = useRevealOnScroll({ y: 12, duration: 0.4 });

  return (
    <section className="section" id="faq">
      <div className="container container--narrow">
        <motion.div {...intro} className={revealClass("section-intro mx-auto max-w-2xl text-center")}>
          <p className="eyebrow">FAQ</p>
          <h2 className="heading-lg mt-3">Domande frequenti</h2>
        </motion.div>
        <div className="faq-list mt-10">
          {faqItems.map((f, i) => (
            <motion.details
              key={f.q}
              {...item}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={revealClass("faq-item")}
            >
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
