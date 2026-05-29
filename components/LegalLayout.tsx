import Link from "next/link";
import { LEGAL } from "@/lib/legal";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const LEGAL_NAV = [
  { href: "/privacy", label: "Privacy" },
  { href: "/cookie", label: "Cookie" },
  { href: "/termini", label: "Termini" },
  { href: "/note-legali", label: "Note legali" },
] as const;

type Props = {
  title: string;
  updated?: string;
  children: React.ReactNode;
};

export function LegalLayout({ title, updated, children }: Props) {
  const date = updated || new Date().toISOString().slice(0, 10);

  return (
    <>
      <Header />
      <div className="legal-page-wrap">
        <nav className="legal-subnav container" aria-label="Documenti legali">
          {LEGAL_NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <a href={`${LEGAL.bookingUrl}/privacy/`} target="_blank" rel="noopener noreferrer">
            Privacy CR8 Booking
          </a>
        </nav>
        <main className="container legal-doc-wrap">
          <article className="legal-doc">
            <h1>{title}</h1>
            <p className="legal-doc__updated">Ultimo aggiornamento: {date}</p>
            {children}
          </article>
        </main>
      </div>
      <Footer />
    </>
  );
}
