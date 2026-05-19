"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/Icon";
import { services } from "@/lib/content";
import { revealClass, useRevealOnScroll } from "@/lib/reveal";

export function Services() {
  const intro = useRevealOnScroll();
  const card = useRevealOnScroll({ y: 24, duration: 0.5 });

  return (
    <section id="servizi" className="section border-t border-border">
      <div className="container">
        <motion.div
          {...intro}
          className={revealClass("section-intro mx-auto max-w-2xl text-center")}
        >
          <p className="eyebrow">Servizi</p>
          <h2 className="heading-lg mt-3">Cosa facciamo per te</h2>
          <p className="text-body mt-4">
            Solo siti web e gestione social: niente di più, niente di meno.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              {...card}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={revealClass(
                "surface-card surface-card-interactive flex flex-col p-5 sm:p-7",
              )}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky/10 text-sky">
                <Icon name={service.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">{service.title}</h3>
              <p className="text-body mt-3 flex-1 text-sm">{service.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-elevated px-2.5 py-1 text-xs font-medium text-zinc-500"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
