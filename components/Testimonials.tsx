"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/content";
import { revealClass, useRevealOnScroll } from "@/lib/reveal";

export function Testimonials() {
  const intro = useRevealOnScroll();
  const card = useRevealOnScroll({ y: 20, duration: 0.45 });

  return (
    <section className="section section--alt">
      <div className="container">
        <motion.div {...intro} className={revealClass("section-intro mx-auto max-w-2xl text-center")}>
          <p className="eyebrow">Dicono di noi</p>
          <h2 className="heading-lg mt-3">Chi ci ha scelto</h2>
        </motion.div>
        <div className="quotes-grid mt-10 sm:mt-14">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              {...card}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={revealClass("quote-card")}
            >
              <p>{t.quote}</p>
              <footer>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
