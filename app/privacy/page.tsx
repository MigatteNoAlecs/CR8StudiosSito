import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { LEGAL, imprintLines } from "@/lib/legal";

export const metadata: Metadata = {
  title: `Privacy Policy | ${LEGAL.brand}`,
  description: "Informativa privacy del sito CR8 Studios.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <p className="legal-lead">
        Informativa ai sensi degli artt. 13-14 del Regolamento (UE) 2016/679 (GDPR) per i visitatori di{" "}
        <strong>{LEGAL.siteUrl}</strong>.
      </p>
      <h2>1. Titolare del trattamento</h2>
      <p>
        {imprintLines().join(" · ")}
        <br />
        Richieste privacy: <a href={`mailto:${LEGAL.privacyEmail}`}>{LEGAL.privacyEmail}</a>
      </p>
      <h2>2. Dati e finalità</h2>
      <ul>
        <li>
          <strong>Navigazione</strong> (IP, log tecnici): sicurezza e funzionamento del sito.
        </li>
        <li>
          <strong>Contatto</strong> (email/telefono): se ci contatti, per rispondere a richieste commerciali.
        </li>
        <li>
          <strong>Cookie</strong>: vedi la <a href="/cookie/">Cookie Policy</a>.
        </li>
      </ul>
      <h2>3. Base giuridica</h2>
      <p>
        Interesse legittimo per la sicurezza del sito; misure precontrattuali/contratto se richiedi un servizio;
        consenso ove richiesto per cookie non tecnici.
      </p>
      <h2>4. Conservazione e diritti</h2>
      <p>
        Log fino a 12 mesi; corrispondenza commerciale fino a 24 mesi salvo rapporto in corso. Diritti GDPR e
        reclamo al Garante (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">garanteprivacy.it</a>
        ).
      </p>
      <h2>5. CR8 Booking</h2>
      <p>
        Per il servizio prenotazioni:{" "}
        <a href={`${LEGAL.bookingUrl}/privacy/`} target="_blank" rel="noopener noreferrer">
          Privacy CR8 Booking
        </a>
        .
      </p>
    </LegalLayout>
  );
}
