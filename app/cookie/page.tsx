import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { LEGAL, imprintLines } from "@/lib/legal";

export const metadata: Metadata = {
  title: `Cookie Policy | ${LEGAL.brand}`,
  description: "Cookie e tecnologie simili su cr8studios.it.",
};

export default function CookiePage() {
  return (
    <LegalLayout title="Cookie Policy">
      <p className="legal-lead">Informativa su cookie e tecnologie simili per {LEGAL.siteUrl}.</p>
      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Finalità</th>
            <th>Durata</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>cr8_cookie_consent</td>
            <td>Memorizza la scelta del banner</td>
            <td>12 mesi</td>
          </tr>
          <tr>
            <td>Google Fonts (CDN)</td>
            <td>Tipografia</td>
            <td>Sessione terza parte</td>
          </tr>
        </tbody>
      </table>
      <p>
        Puoi gestire i cookie dalle impostazioni del browser. Titolare: {imprintLines().join(" · ")} —{" "}
        <a href={`mailto:${LEGAL.privacyEmail}`}>{LEGAL.privacyEmail}</a>
      </p>
      <p>
        Per CR8 Booking vedi anche{" "}
        <a href={`${LEGAL.bookingUrl}/cookie/`} target="_blank" rel="noopener noreferrer">
          Cookie Policy CR8 Booking
        </a>
        .
      </p>
    </LegalLayout>
  );
}
