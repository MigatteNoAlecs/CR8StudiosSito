"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroPills, RICHARDUS_SCREENSHOT, SITE } from "@/lib/content";
import { isTouchDevice } from "@/lib/device";
import { BookingButton } from "./BookingButton";

export function Hero() {
  const [floatMockup, setFloatMockup] = useState(false);

  useEffect(() => {
    setFloatMockup(!isTouchDevice());
  }, []);

  return (
    <section className="hero-landing">
      <div className="hero-landing__glow" aria-hidden />
      <div className="container hero-landing__grid">
        <div className="hero-landing__copy">
          <p className="eyebrow hero-fade" style={{ animationDelay: ".05s" }}>
            <span className="eyebrow-dot" aria-hidden />
            {SITE.location}
          </p>
          <h1 className="heading-xl hero-fade mt-4" style={{ animationDelay: ".12s" }}>
            Sviluppo web e social
            <em className="text-gradient block mt-2">per far crescere il tuo business</em>
          </h1>
          <p className="text-body mt-5 max-w-xl text-base sm:text-lg hero-fade" style={{ animationDelay: ".2s" }}>
            Realizziamo siti su misura e curiamo Instagram e TikTok con storie e reel.
            Un team, un referente — dalla Puglia con competenza e cura del dettaglio.
          </p>
          <ul className="hero-pills mt-6 hero-fade" style={{ animationDelay: ".28s" }}>
            {heroPills.map((pill) => (
              <li key={pill}>{pill}</li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3 hero-fade" style={{ animationDelay: ".36s" }}>
            <BookingButton className="min-w-[11rem]" />
            <Link href="#clienti" className="btn btn-outline min-w-[11rem]">
              Vedi i clienti
            </Link>
          </div>
          <p className="text-body mt-4 text-sm hero-fade" style={{ animationDelay: ".42s" }}>
            Risposta rapida · Preventivo trasparente
          </p>
        </div>

        <div className="hero-landing__visual hero-fade" style={{ animationDelay: ".25s" }}>
          <motion.div
            animate={floatMockup ? { y: [0, -10, 0] } : undefined}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="browser-mockup"
          >
            <div className="browser-mockup__bar">
              <span /><span /><span />
              <em>www.richardus.it</em>
            </div>
            <div className="browser-mockup__screen relative aspect-[16/10]">
              <Image
                src={RICHARDUS_SCREENSHOT}
                alt="Screenshot del sito Richardus, progetto CR8 Studios"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
          <p className="mt-3 text-center text-xs text-zinc-500 lg:text-left">
            Progetto web ·{" "}
            <a href="https://www.richardus.it" target="_blank" rel="noopener noreferrer" className="text-sky hover:underline">
              richardus.it
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
