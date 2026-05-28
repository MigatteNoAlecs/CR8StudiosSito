export const LOGO = "/cr8studioscolorato.png";
export const LOGO_CR8 = "/cr8colorato.png";

export const RICHARDUS_SCREENSHOT = "/Screenshot_20260518_211142.png";

export const SITE = {
  name: "CR8 Studios",
  location: "Francavilla Fontana, Puglia",
  email: "info@cr8studios.it",
  phone: "392 437 8764",
  phoneHref: "tel:+393924378764",
  instagram: "https://instagram.com/cr8studios",
  bookingUrl: "https://booking.cr8studios.it",
} as const;

export const BOOKING_WIDGET = {
  scriptSrc: "https://booking.cr8studios.it/widget.js",
  api: "https://booking.cr8studios.it",
  restId: "8ba20971-c712-4614-8434-abefb59e0e62",
  restName: "CR8 Studios",
} as const;

export const navLinks = [
  { href: "#servizi", label: "Servizi" },
  { href: "#clienti", label: "Clienti" },
  { href: "#prodotto", label: "CR8 Booking" },
  { href: "#chi-siamo", label: "Chi siamo" },
  { href: "#contatti", label: "Contatti" },
] as const;

export const heroPills = [
  "Siti web su misura",
  "Social & reel",
  "Puglia e oltre",
  "Supporto diretto",
] as const;

export const metrics = [
  { icon: "🌐", value: "15+", label: "Siti online" },
  { icon: "📱", value: "100%", label: "Mobile first" },
  { icon: "🎬", value: "Reel", label: "Contenuti social" },
  { icon: "🤝", value: "1 team", label: "Un interlocutore" },
] as const;

export const processSteps = [
  {
    num: "1",
    title: "Ci racconti il progetto",
    text: "Call o messaggio: capiamo obiettivi, target e tempi. Nessun form infinito.",
  },
  {
    num: "2",
    title: "Proposta chiara",
    text: "Scope, tempistiche e costo fissi. Niente sorprese a metà strada.",
  },
  {
    num: "3",
    title: "Design & sviluppo",
    text: "Mockup, feedback rapido, poi build. Per i social: piano editoriale e produzione.",
  },
  {
    num: "4",
    title: "Online e supporto",
    text: "Lancio, formazione se serve, e restiamo disponibili dopo il go-live.",
  },
] as const;

export const clients = [
  {
    name: "Richardus",
    url: "https://www.richardus.it",
    domain: "richardus.it",
    category: "Trattoria",
    image: RICHARDUS_SCREENSHOT,
    imageAlt: "Screenshot del sito della trattoria Richardus",
    featured: true,
    description:
      "Sito vetrina per una trattoria: menu, atmosfera e prenotazioni raccontati in modo chiaro e invitante.",
  },
  {
    name: "Mood Pizzeria",
    url: "https://www.moodpizzeria.it",
    domain: "moodpizzeria.it",
    category: "Ristorazione",
  },
  {
    name: "Kinyo Pokeria",
    url: "https://www.kinyopokeria.it",
    domain: "kinyopokeria.it",
    category: "Ristorazione",
  },
  {
    name: "St. Ermin's",
    url: "https://www.sterminspub.it",
    domain: "sterminspub.it",
    category: "Pub & locale",
  },
] as const;

export const services = [
  {
    title: "Siti Web",
    icon: "globe" as const,
    description:
      "Vetrine, landing e siti su misura: veloci, curati, ottimizzati SEO e pronti per convertire.",
    tags: ["Vetrina", "Landing", "SEO", "Mobile first"],
  },
  {
    title: "Social Media",
    icon: "smartphone" as const,
    description:
      "Instagram e TikTok: storie, reel e contenuti che raccontano il locale ogni settimana.",
    tags: ["Instagram", "TikTok", "Storie", "Reel"],
  },
  {
    title: "Sistemi digitali",
    icon: "code" as const,
    description:
      "Prenotazioni, widget e tool su misura — come CR8 Booking, nato dal nostro lavoro con i ristoranti.",
    tags: ["Prenotazioni", "Widget", "SaaS", "Integrazioni"],
  },
] as const;

export const aboutPoints = [
  { text: "Siti web su misura, senza template generici", icon: "code" as const },
  { text: "Storie e reel per Instagram e TikTok", icon: "film" as const },
  { text: "Comunicazione diretta e trasparente", icon: "message" as const },
  { text: "Radici a Francavilla Fontana, lavoro in tutta la Puglia", icon: "map-pin" as const },
] as const;

export const testimonials = [
  {
    quote:
      "«CR8 ci ha messo online in tempi record. Il sito è pulito e le prenotazioni arrivano davvero.»",
    name: "Team Richardus",
    role: "Trattoria · Puglia",
  },
  {
    quote:
      "«Finalmente qualcuno che capisce sia il web che i social — un unico referente, zero confusione.»",
    name: "Cliente ristorazione",
    role: "Locale · Salento",
  },
  {
    quote:
      "«Reel e storie curati: il profilo Instagram finalmente sembra professionale.»",
    name: "Attività locale",
    role: "Food & beverage",
  },
] as const;

export const faqItems = [
  {
    q: "Lavorate solo in Puglia?",
    a: "Siamo based a Francavilla Fontana ma lavoriamo con clienti in tutta Italia, soprattutto ristorazione e attività locali.",
  },
  {
    q: "Quanto costa un sito?",
    a: "Dipende da scope e pagine. Dopo una call ti mandiamo un preventivo chiaro, senza voci nascoste.",
  },
  {
    q: "Fate anche solo social, senza sito?",
    a: "Sì. Possiamo gestire solo Instagram/TikTok, o affiancare un sito esistente.",
  },
  {
    q: "Cos'è CR8 Booking?",
    a: "È il nostro sistema prenotazioni per ristoranti — widget, dashboard e caparra anti no-show. Lo usiamo noi e lo offriamo ad altri locali.",
  },
] as const;

export const productBooking = {
  eyebrow: "Prodotto",
  title: "CR8 Booking",
  subtitle: "Prenotazioni ristorante, fatte bene",
  description:
    "Sistema completo per locali: widget sul sito, pagina /prenota, dashboard mobile e caparra Stripe. Zero commissioni, abbonamento fisso.",
  bullets: [
    "14 giorni di prova gratuita",
    "Integrazione in una riga di codice",
    "Made by CR8 Studios",
  ],
  cta: "Scopri CR8 Booking",
  ctaSecondary: "Prova gratis",
} as const;
