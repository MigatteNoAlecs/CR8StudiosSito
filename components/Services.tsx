"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/Icon";
import { services } from "@/lib/content";
import { revealClass, useRevealOnScroll } from "@/lib/reveal";

export function Services() {
  const intro = useRevealOnScroll();
  const card = useRevealOnScroll({ y: 24, duration: 0.5 });

  return (
    <section id="servizi" className="section">
      <div className="container">
        <motion.div
          {...intro}
          className={revealClass("section-intro mx-auto max-w-2xl text-center")}
        >
          <p className="eyebrow">Servizi</p>
          <h2 className="heading-lg mt-3">Tutto il digitale che ti serve</h2>
          <p className="text-body mt-4">
            Web, social e sistemi su misura — niente pacchetti generici.
          </p>
        </motion.div>

        <div className="features-grid mt-10 sm:mt-14">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              {...card}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={revealClass("feature-card")}
            >
              <div className="feature-card__icon">
                <Icon name={service.icon} className="h-5 w-5" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="feature-card__tags">
                {service.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
