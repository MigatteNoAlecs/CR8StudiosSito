"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroPills, RICHARDUS_SCREENSHOT, SITE } from "@/lib/content";
import { isTouchDevice } from "@/lib/device";
import { BookingButton } from "./BookingButton";
import { Logo } from "./Logo";

export function Hero() {
  const [floatMockup, setFloatMockup] = useState(false);

  useEffect(() => {
    setFloatMockup(!isTouchDevice());
  }, []);

  return (
    <section className="hero-section bg-glow relative overflow-x-hidden">
      <div className="container grid w-full grid-cols-1 items-start justify-items-center gap-10 py-10 sm:items-center sm:gap-12 sm:py-16 lg:grid-cols-2 lg:justify-items-stretch lg:gap-16 lg:py-20">
        <div className="flex w-full max-w-xl flex-col items-center text-center lg:max-w-none lg:items-start lg:text-left">
          <div className="flex w-full justify-center lg:justify-start">
            <Logo variant="hero" priority />
          </div>

          <p className="eyebrow mt-6 sm:mt-8">{SITE.location}</p>

          <h1 className="heading-xl mt-3 w-full sm:mt-4">
            Sviluppo web e social media{" "}
            <span className="text-sky">per far crescere il tuo business</span>
          </h1>

          <p className="text-body mt-5 max-w-md text-base sm:mt-6 sm:max-w-xl sm:text-lg lg:max-w-none">
            Realizziamo siti web su misura e curiamo storie e reel su Instagram e TikTok.
            Un unico team, un unico interlocutore.
          </p>

          <ul className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
            {heroPills.map((pill) => (
              <li key={pill} className="pill">
                <span className="pill-dot" aria-hidden />
                {pill}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex w-full max-w-sm flex-col items-center gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <BookingButton className="w-full min-w-0 sm:w-auto sm:min-w-[11rem]" />
            <Link
              href="#clienti"
              className="btn btn-outline w-full min-w-0 sm:w-auto sm:min-w-[11rem]"
            >
              Vedi i clienti
            </Link>
          </div>
        </div>

        <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
          <motion.div
            animate={floatMockup ? { y: [0, -8, 0] } : undefined}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="surface-card mx-auto w-full overflow-hidden p-2 shadow-[0_0_60px_-12px_var(--glow)]"
          >
            <div className="flex items-center gap-2 border-b border-border px-3 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-500/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-500/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-sky/80" />
              <span className="ml-2 flex-1 truncate rounded-md bg-elevated px-3 py-1 font-mono text-xs text-zinc-500">
                www.richardus.it
              </span>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-elevated">
              <Image
                src={RICHARDUS_SCREENSHOT}
                alt="Screenshot del sito della trattoria Richardus"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
          <p className="mt-3 text-center text-xs text-zinc-500 lg:text-left">
            Uno dei nostri progetti web,{" "}
            <a
              href="https://www.richardus.it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky hover:underline"
            >
              richardus.it
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
