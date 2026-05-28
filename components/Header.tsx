"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { navLinks } from "@/lib/content";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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

  return (
    <>
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <div className="container site-header__inner">
          <Link href="#" className="site-header__brand" aria-label="CR8 Studios home">
            <Logo variant="nav" priority />
          </Link>

          <nav className="site-header__nav hidden lg:flex" aria-label="Menu principale">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="site-header__actions hidden lg:flex">
            <Link href="#contatti" className="btn btn-primary btn--sm">
              Contattaci
            </Link>
          </div>

          <button
            type="button"
            className="nav-toggle ml-auto lg:hidden"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-nav-panel lg:hidden">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </Link>
            ))}
            <Link href="#contatti" className="btn btn-primary w-full mt-4" onClick={closeMenu}>
              Contattaci
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
