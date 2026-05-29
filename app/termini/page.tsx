import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: `Termini | ${LEGAL.brand}`,
  description: "Condizioni generali per i servizi CR8 Studios.",
};

export default function TerminiPage() {
  return (
    <LegalLayout title="Termini di servizio (sito agenzia)">
      <p className="legal-lead">
        Condizioni per l&apos;utilizzo del sito {LEGAL.siteUrl} e per i servizi di presenza digitale offerti da{" "}
        {LEGAL.operator}.
      </p>
      <h2>1. Oggetto</h2>
      <p>
        Il sito presenta servizi di creazione siti web, gestione social media e il prodotto SaaS CR8 Booking. I
        contratti specifici sono regolati da preventivi e accordi scritti.
      </p>
      <h2>2. Uso del sito</h2>
      <p>È vietato un uso illecito, che comprometta la sicurezza o copi contenuti senza autorizzazione.</p>
      <h2>3. CR8 Booking</h2>
      <p>
        Per la piattaforma prenotazioni si applicano i{" "}
        <a href={`${LEGAL.bookingUrl}/termini/`} target="_blank" rel="noopener noreferrer">
          Termini di servizio CR8 Booking
        </a>
        .
      </p>
      <h2>4. Responsabilità</h2>
      <p>
        Contenuti e link esterni sono forniti «as is». {LEGAL.operator} non risponde di danni indiretti derivanti
        dall&apos;uso del sito informativo.
      </p>
      <h2>5. Legge applicabile</h2>
      <p>Legge italiana. Foro di Lecce, salvo norme inderogabili a tutela del consumatore.</p>
      <h2>6. Contatti</h2>
      <p>
        <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>
      </p>
    </LegalLayout>
  );
}
