"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const KEY = "cr8_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function save(value: string) {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Preferenze cookie">
      <div className="cookie-banner__inner container">
        <p>
          Utilizziamo cookie tecnici e, con il tuo consenso, font da Google.{" "}
          <Link href="/cookie/">Cookie Policy</Link> · <Link href="/privacy/">Privacy</Link>
        </p>
        <div className="cookie-banner__actions">
          <button type="button" className="btn btn--ghost btn--sm" onClick={() => save("necessary")}>
            Solo necessari
          </button>
          <button type="button" className="btn btn-primary btn--sm" onClick={() => save("all")}>
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}
