"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/content";
import { revealClass, useRevealOnScroll } from "@/lib/reveal";

export function Process() {
  const intro = useRevealOnScroll();
  const step = useRevealOnScroll({ y: 16, duration: 0.45 });

  return (
    <section className="section section--alt" id="processo">
      <div className="container">
        <motion.div {...intro} className={revealClass("section-intro mx-auto max-w-2xl text-center")}>
          <p className="eyebrow">Come lavoriamo</p>
          <h2 className="heading-lg mt-3">Dal brief al lancio, senza stress</h2>
          <p className="text-body mt-4">
            Un processo lineare: capiamo, proponiamo, costruiamo, pubblichiamo.
          </p>
        </motion.div>
        <ol className="process-list mt-10 sm:mt-14">
          {processSteps.map((s, i) => (
            <motion.li
              key={s.num}
              {...step}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={revealClass("process-step")}
            >
              <span className="process-step__num">{s.num}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
