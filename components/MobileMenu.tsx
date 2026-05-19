"use client";

import Link from "next/link";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { navLinks } from "@/lib/content";
import { Logo } from "./Logo";
import { MenuButton } from "./MenuButton";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div className="mobile-nav" role="presentation">
      <button
        type="button"
        className="mobile-nav__backdrop"
        aria-label="Chiudi menu"
        onClick={onClose}
      />
      <aside
        id="mobile-nav-panel"
        className="mobile-nav__panel"
        role="dialog"
        aria-modal="true"
        aria-label="Menu di navigazione"
      >
        <div className="mobile-nav__head">
          <Logo variant="nav" />
          <MenuButton open onClick={onClose} label="Chiudi menu" />
        </div>

        <nav className="mobile-nav__links" aria-label="Menu mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="mobile-nav__link"
            >
              <span className="mobile-nav__dot" aria-hidden />
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mobile-nav__footer">
          <Link href="#contatti" onClick={onClose} className="btn btn-primary w-full">
            Contattaci
          </Link>
        </div>
      </aside>
    </div>,
    document.body,
  );
}
