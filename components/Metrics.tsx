"use client";

import { motion } from "framer-motion";
import { metrics } from "@/lib/content";
import { revealClass, useRevealOnScroll } from "@/lib/reveal";

export function Metrics() {
  const card = useRevealOnScroll({ y: 20, duration: 0.45 });

  return (
    <section className="metrics-band">
      <div className="container metrics-grid">
        {metrics.map((m, i) => (
          <motion.article
            key={m.label}
            {...card}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className={revealClass("metric-card")}
          >
            <span className="metric-card__icon" aria-hidden>
              {m.icon}
            </span>
            <strong className="metric-card__value">{m.value}</strong>
            <span className="metric-card__label">{m.label}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
