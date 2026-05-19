"use client";

import { useEffect, useRef, useState } from "react";
import { isTouchDevice } from "@/lib/device";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  opacity: number;
  sky: boolean;
};

const COUNT = 48;
const HERO_BIAS_RATIO = 0.65;

function createParticle(w: number, h: number, heroZone = false): Particle {
  const zoneHeight = h * 0.55;

  return {
    x: Math.random() * w,
    y: heroZone ? Math.random() * zoneHeight : Math.random() * h,
    vx: (Math.random() - 0.5) * 0.2,
    vy: (Math.random() - 0.5) * 0.2,
    r: Math.random() * 1.3 + 0.5,
    opacity: Math.random() * 0.28 + 0.1,
    sky: Math.random() > (heroZone ? 0.62 : 0.75),
  };
}

function spawnParticles(w: number, h: number): Particle[] {
  const heroCount = Math.round(COUNT * HERO_BIAS_RATIO);
  const restCount = COUNT - heroCount;

  return [
    ...Array.from({ length: heroCount }, () => createParticle(w, h, true)),
    ...Array.from({ length: restCount }, () => createParticle(w, h, false)),
  ];
}

export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (isTouchDevice()) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let particles: Particle[] = [];
    let w = 0;
    let h = 0;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      particles = spawnParticles(w, h);
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.sky
          ? `rgba(56, 189, 248, ${p.opacity})`
          : `rgba(244, 244, 245, ${p.opacity * 0.6})`;
        ctx.fill();
      }

      frame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-80"
      aria-hidden
    />
  );
}
