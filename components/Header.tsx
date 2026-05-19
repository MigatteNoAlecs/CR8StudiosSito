"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { navLinks } from "@/lib/content";
import { Logo } from "./Logo";

const LOGO_SCROLL_THRESHOLD = 80;
const ease = [0.22, 1, 0.36, 1] as const;

const menuMotion = {
  overlay: 0.48,
  panel: 0.58,
  head: 0.5,
  eyebrow: 0.48,
  item: 0.48,
  itemStagger: 0.08,
  itemDelay: 0.2,
  footer: 0.5,
  footerDelay: 0.55,
} as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showNavLogo, setShowNavLogo] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const openMenu = useCallback(() => setMenuOpen(true), []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      setShowNavLogo(y > LOGO_SCROLL_THRESHOLD);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    const desktopMq = window.matchMedia("(min-width: 1024px)");
    const onDesktopChange = () => {
      if (desktopMq.matches) closeMenu();
    };
    onDesktopChange();
    desktopMq.addEventListener("change", onDesktopChange);
    return () => desktopMq.removeEventListener("change", onDesktopChange);
  }, [closeMenu]);

  const motionOff = reduceMotion === true;

  return (
    <>
      <header
        className={`header-bar fixed inset-x-0 top-0 z-[1000] transition-[background,border,box-shadow] duration-300 ${
          scrolled
            ? "border-b border-border bg-bg/95 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "bg-bg/80 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none"
        }`}
      >
        <div className="header-inner container">
          <AnimatePresence mode="wait">
            {showNavLogo && (
              <motion.div
                key="nav-logo"
                initial={motionOff ? false : { opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={motionOff ? undefined : { opacity: 0, x: -12 }}
                transition={{ duration: 0.25, ease }}
                className="shrink-0"
              >
                <Link
                  href="#"
                  className="inline-flex h-8 shrink-0 items-center sm:h-9"
                  aria-label="CR8 Studios — Home"
                >
                  <Logo variant="nav" priority />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          <nav
            className="ml-auto hidden shrink-0 items-center gap-1 whitespace-nowrap lg:flex"
            aria-label="Menu principale"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-50"
              >
                {link.label}
              </Link>
            ))}
            <Link href="#contatti" className="btn btn-primary ml-3 !px-5 !py-2.5">
              Contattaci
            </Link>
          </nav>

          <button
            type="button"
            className="menu-btn header-menu-btn ml-auto hidden shrink-0 cursor-pointer items-center max-lg:flex"
            aria-label="Apri menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            onClick={openMenu}
          >
            <span className="burger" aria-hidden>
              <span className="burger__line" />
              <span className="burger__line" />
              <span className="burger__line burger__line--accent" />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            className="mobile-nav-drawer max-lg:block"
            role="presentation"
            initial={motionOff ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={
              motionOff
                ? undefined
                : { opacity: 0, transition: { duration: menuMotion.overlay, ease } }
            }
            transition={{ duration: menuMotion.overlay, ease }}
          >
            <motion.aside
              id="mobile-nav-panel"
              className="mobile-nav__panel"
              role="dialog"
              aria-modal="true"
              aria-label="Menu di navigazione"
              initial={motionOff ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={
                motionOff
                  ? undefined
                  : {
                      opacity: 0,
                      y: 12,
                      transition: { duration: menuMotion.panel, ease },
                    }
              }
              transition={{ duration: menuMotion.panel, ease }}
            >
              <motion.div
                className="mobile-nav__head container"
                initial={motionOff ? false : { opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: menuMotion.head, ease, delay: 0.08 }}
              >
                <div className="mobile-nav__logo">
                  <Logo variant="nav" />
                </div>
                <button
                  type="button"
                  className="menu-btn menu-btn--close"
                  aria-label="Chiudi menu"
                  onClick={closeMenu}
                >
                  <span className="burger burger--open" aria-hidden>
                    <span className="burger__line" />
                    <span className="burger__line" />
                    <span className="burger__line burger__line--accent" />
                  </span>
                </button>
              </motion.div>

              <nav className="mobile-nav__links container" aria-label="Menu mobile">
                <motion.p
                  className="mobile-nav__eyebrow"
                  initial={motionOff ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: menuMotion.eyebrow, ease, delay: 0.14 }}
                >
                  Navigazione
                </motion.p>
                <ul className="mobile-nav__list">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={motionOff ? false : { opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: menuMotion.item,
                        ease,
                        delay: motionOff ? 0 : menuMotion.itemDelay + index * menuMotion.itemStagger,
                      }}
                    >
                      <Link
                        href={link.href}
                        className="mobile-nav__link"
                        onClick={closeMenu}
                      >
                        <span className="mobile-nav__dot" aria-hidden />
                        <span className="mobile-nav__label">{link.label}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <motion.div
                className="mobile-nav__footer container"
                initial={motionOff ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: menuMotion.footer,
                  ease,
                  delay: motionOff ? 0 : menuMotion.footerDelay,
                }}
              >
                <Link
                  href="#contatti"
                  className="btn btn-primary w-full"
                  onClick={closeMenu}
                >
                  Contattaci
                </Link>
              </motion.div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
