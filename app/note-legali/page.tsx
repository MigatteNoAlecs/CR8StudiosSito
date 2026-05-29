import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { LEGAL, imprintLines } from "@/lib/legal";

export const metadata: Metadata = {
  title: `Note legali | ${LEGAL.brand}`,
  description: "Informazioni legali e contatti CR8 Studios.",
};

export default function NoteLegaliPage() {
  return (
    <LegalLayout title="Note legali">
      <p className="legal-lead">Informazioni ai sensi del D.Lgs. 70/2003 e normativa applicabile.</p>
      <h2>Fornitore</h2>
      <p>
        {imprintLines().map((line) => (
          <span key={line}>
            {line}
            <br />
          </span>
        ))}
      </p>
      <h2>Siti e prodotti</h2>
      <ul>
        <li>
          Sito agenzia: <a href={LEGAL.siteUrl}>{LEGAL.siteUrl}</a>
        </li>
        <li>
          CR8 Booking:{" "}
          <a href={LEGAL.bookingUrl} target="_blank" rel="noopener noreferrer">
            {LEGAL.bookingUrl}
          </a>
        </li>
      </ul>
      <h2>Documenti</h2>
      <ul>
        <li>
          <a href="/privacy/">Privacy sito agenzia</a>
        </li>
        <li>
          <a href={`${LEGAL.bookingUrl}/privacy/`} target="_blank" rel="noopener noreferrer">
            Privacy CR8 Booking
          </a>
        </li>
        <li>
          <a href={`${LEGAL.bookingUrl}/termini/`} target="_blank" rel="noopener noreferrer">
            Termini CR8 Booking
          </a>
        </li>
        <li>
          <a href="/cookie/">Cookie Policy</a>
        </li>
      </ul>
    </LegalLayout>
  );
}
