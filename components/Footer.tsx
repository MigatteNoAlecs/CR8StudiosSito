import Link from "next/link";
import { Icon } from "@/components/Icon";
import { SITE, navLinks } from "@/lib/content";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border py-10 pb-[calc(2.5rem+env(safe-area-inset-bottom))] sm:py-12">
      <div className="container">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
          <div>
            <Link href="#" aria-label="CR8 — Home">
              <Logo variant="footer" />
            </Link>
            <p className="text-body mt-4 max-w-xs text-sm">
              Siti web e social. Francavilla Fontana, Puglia.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 transition-colors hover:text-sky"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-sm">
            <Link
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-zinc-500 transition-colors hover:text-sky"
            >
              <Icon name="instagram" className="h-4 w-4" />
              Instagram
            </Link>
          </div>
        </div>

        <p className="text-body mt-10 border-t border-border pt-8 text-center text-xs sm:text-left">
          © {year} CR8 Studios. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
