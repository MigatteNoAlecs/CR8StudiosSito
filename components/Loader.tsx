"use client";

import { motion } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";
import { isMobileExperience } from "@/lib/device";
import { Logo } from "./Logo";

const ease = [0.22, 1, 0.36, 1] as const;
const SHOW_MS = 2100;
const TOUCH_SHOW_MS = 1200;
const FADE_MS = 500;

type Phase = "loading" | "fading" | "done";

function LoaderTouch({ phase }: { phase: Phase }) {
  const [progress, setProgress] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setProgress(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  if (phase === "done") return null;

  return (
    <motion.div
      className="loader-screen fixed inset-0 z-[5000] flex flex-col items-center justify-center bg-bg"
      initial={false}
      animate={{ opacity: phase === "fading" ? 0 : 1 }}
      transition={{ duration: FADE_MS / 1000, ease: "easeOut" }}
      aria-hidden={phase === "fading"}
    >
      <motion.div
        aria-hidden
        className="loader-touch-glow pointer-events-none"
        animate={{ opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-col items-center px-6">
        <div className="loader-touch-logo-wrap relative">
          <span
            aria-hidden
            className="loader-ring loader-ring-outer absolute -inset-3 rounded-xl border border-sky/20"
          />
          <Logo variant="loader" priority />
        </div>

        <p className="mt-6 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-zinc-500">
          Caricamento
        </p>

        <motion.div
          className="loader-touch-track mt-4 w-48 max-w-[70vw]"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease }}
        >
          <motion.div
            className="loader-touch-bar h-full rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: progress ? "100%" : "0%" }}
            transition={{ duration: 1.05, ease }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function LoaderDesktop({ phase }: { phase: Phase }) {
  if (phase === "done") return null;

  return (
    <motion.div
      className={`loader-screen fixed inset-0 z-[5000] flex flex-col items-center justify-center overflow-hidden bg-bg transition-opacity ease-out ${
        phase === "fading" ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden={phase === "fading"}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(90vw,28rem)] w-[min(90vw,28rem)] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--sky-400) 22%, transparent) 0%, transparent 68%)",
        }}
        animate={{ opacity: [0.35, 0.65, 0.35], scale: [0.92, 1.06, 0.92] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center px-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
      >
        <motion.div
          className="relative"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span
            aria-hidden
            className="loader-ring loader-ring-outer absolute -inset-4 rounded-2xl border border-sky/25 sm:-inset-5"
          />
          <span
            aria-hidden
            className="loader-ring loader-ring-inner absolute -inset-2 rounded-xl bg-sky/5 sm:-inset-3"
          />
          <Logo variant="loader" priority />
        </motion.div>

        <p className="mt-8 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-zinc-500">
          Caricamento
        </p>

        <motion.div
          className="mt-4 w-52 max-w-[70vw] sm:w-60"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.35 }}
        >
          <div className="relative h-1.5 overflow-hidden rounded-full bg-elevated">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-sky/50 via-sky to-sky"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.45, ease }}
            />
            <span aria-hidden className="loader-shimmer absolute inset-y-0 w-14 rounded-full" />
          </div>
          <motion.div
            className="mt-2 flex justify-between font-mono text-[0.65rem] text-zinc-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            <span>CR8</span>
            <motion.span
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
            >
              Studios
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function Loader() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [mobile, setMobile] = useState<boolean | null>(null);

  useLayoutEffect(() => {
    document.documentElement.classList.add("is-loading");
    return () => {
      document.documentElement.classList.remove("is-loading");
    };
  }, []);

  useEffect(() => {
    if (phase !== "done") return;
    document.documentElement.classList.remove("is-loading");
  }, [phase]);

  useEffect(() => {
    const onMobile = isMobileExperience();
    setMobile(onMobile);

    const showMs = onMobile ? TOUCH_SHOW_MS : SHOW_MS;
    const safetyMs = onMobile ? 2600 : 3400;

    const fadeTimer = window.setTimeout(() => setPhase("fading"), showMs);
    const doneTimer = window.setTimeout(() => setPhase("done"), showMs + FADE_MS);
    const safetyTimer = window.setTimeout(() => setPhase("done"), safetyMs);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(doneTimer);
      window.clearTimeout(safetyTimer);
    };
  }, []);

  if (mobile === null || phase === "done") return null;

  return mobile ? <LoaderTouch phase={phase} /> : <LoaderDesktop phase={phase} />;
}
