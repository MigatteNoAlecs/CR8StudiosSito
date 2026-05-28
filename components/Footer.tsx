import Link from "next/link";
import { Icon } from "@/components/Icon";
import { SITE, navLinks } from "@/lib/content";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Link href="#" aria-label="CR8 Studios home">
            <Logo variant="footer" />
          </Link>
          <p className="text-body mt-4 text-sm max-w-xs">
            Siti web, social media e prodotti digitali. Francavilla Fontana, Puglia.
          </p>
        </div>
        <div>
          <h4 className="site-footer__title">Navigazione</h4>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="site-footer__link">
              {link.label}
            </Link>
          ))}
        </div>
        <div>
          <h4 className="site-footer__title">Prodotto</h4>
          <Link href={SITE.bookingUrl} className="site-footer__link" target="_blank" rel="noopener">
            CR8 Booking
          </Link>
          <Link href={`${SITE.bookingUrl}/admin/?registrati=1`} className="site-footer__link" target="_blank" rel="noopener">
            Prova CR8 Booking
          </Link>
        </div>
        <div>
          <h4 className="site-footer__title">Contatti</h4>
          <a href={`mailto:${SITE.email}`} className="site-footer__link">
            {SITE.email}
          </a>
          <a href={SITE.phoneHref} className="site-footer__link">
            {SITE.phone}
          </a>
          <Link
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer__link inline-flex items-center gap-2"
          >
            <Icon name="instagram" className="h-4 w-4" />
            Instagram
          </Link>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <p>© {year} CR8 Studios. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
}
