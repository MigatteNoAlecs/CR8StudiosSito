"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/Icon";
import { aboutPoints } from "@/lib/content";
import { revealClass, useRevealOnScroll } from "@/lib/reveal";

export function About() {
  const copy = useRevealOnScroll({ x: -20 });
  const list = useRevealOnScroll({ x: 20 });
  const point = useRevealOnScroll({ y: 12, duration: 0.4 });

  return (
    <section id="chi-siamo" className="section border-t border-border">
      <div className="container grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div {...copy} className={revealClass("text-center lg:text-left")}>
          <p className="eyebrow">Chi siamo</p>
          <h2 className="heading-lg mt-3">
            Il digitale, con un volto{" "}
            <span className="text-sky">umano</span>
          </h2>
          <p className="text-body mt-5">
            CR8 Studios è un&apos;agenzia giovane con sede a Francavilla Fontana. Realizziamo
            siti web e gestiamo i social dei nostri clienti, con storie e reel inclusi.
          </p>
          <p className="text-body mt-4">
            Crediamo in rapporti diretti e duraturi: capiamo il tuo business, costruiamo la
            soluzione giusta e restiamo al tuo fianco dopo il lancio.
          </p>
        </motion.div>

        <motion.ul {...list} className={revealClass("space-y-3")}>
          {aboutPoints.map((item, i) => (
            <motion.li
              key={item.text}
              {...point}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={revealClass(
                "surface-card flex items-center gap-3 px-4 py-3.5 sm:gap-4 sm:px-5 sm:py-4",
              )}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky/10 text-sky">
                <Icon name={item.icon} className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium text-zinc-50">{item.text}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
