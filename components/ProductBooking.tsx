"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { productBooking, SITE } from "@/lib/content";
import { revealClass, useRevealOnScroll } from "@/lib/reveal";

export function ProductBooking() {
  const reveal = useRevealOnScroll({ y: 20, duration: 0.5 });

  return (
    <section id="prodotto" className="section">
      <div className="container">
        <motion.div
          {...reveal}
          className={revealClass("product-card")}
        >
          <div className="product-card__copy">
            <p className="eyebrow">{productBooking.eyebrow}</p>
            <h2 className="heading-lg mt-3">
              {productBooking.title}
              <span className="text-gradient"> · {productBooking.subtitle}</span>
            </h2>
            <p className="text-body mt-4 max-w-xl">{productBooking.description}</p>
            <ul className="product-card__list mt-6">
              {productBooking.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="product-card__cta mt-8 flex flex-wrap gap-3">
              <Link href={SITE.bookingUrl} className="btn btn-primary" target="_blank" rel="noopener">
                {productBooking.cta}
              </Link>
              <Link
                href={`${SITE.bookingUrl}/admin/?registrati=1`}
                className="btn btn-outline"
                target="_blank"
                rel="noopener"
              >
                {productBooking.ctaSecondary}
              </Link>
            </div>
          </div>
          <div className="product-card__visual" aria-hidden>
            <div className="preview-mini">
              <div className="preview-mini__bar">
                <span /><span /><span />
                <em>booking.cr8studios.it</em>
              </div>
              <div className="preview-mini__body">
                <p className="preview-mini__tag">Widget + Dashboard</p>
                <p className="preview-mini__title">Prenotazioni 0% commissioni</p>
                <div className="preview-mini__slots">
                  <span className="is-on">20:00</span>
                  <span>20:30</span>
                  <span>21:00</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
