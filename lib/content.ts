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
} as const;

export const BOOKING_WIDGET = {
  scriptSrc: "https://cr8-booking.pages.dev/widget.js",
  api: "https://cr8-booking.pages.dev",
  restId: "8ba20971-c712-4614-8434-abefb59e0e62",
  restName: "CR8 Studios",
} as const;

export const navLinks = [
  { href: "#servizi", label: "Servizi" },
  { href: "#clienti", label: "Clienti" },
  { href: "#chi-siamo", label: "Chi siamo" },
  { href: "#contatti", label: "Contatti" },
] as const;

export const heroPills = ["Siti web su misura", "Storie e reel"] as const;

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
      "Progettiamo e realizziamo siti vetrina e landing page su misura: veloci, curati e ottimizzati per i motori di ricerca.",
    tags: ["Siti vetrina", "Landing page", "SEO", "Mobile first"],
  },
  {
    title: "Social Media",
    icon: "smartphone" as const,
    description:
      "Gestiamo i tuoi profili Instagram e TikTok: pianifichiamo, pubblichiamo e curiamo storie e reel per tenere attiva la tua audience.",
    tags: ["Instagram", "TikTok", "Storie", "Reel"],
  },
] as const;

export const aboutPoints = [
  { text: "Siti web su misura, senza template generici", icon: "code" as const },
  { text: "Storie e reel per Instagram e TikTok", icon: "film" as const },
  { text: "Comunicazione diretta e trasparente", icon: "message" as const },
  { text: "Radici a Francavilla Fontana, lavoro in tutta la Puglia", icon: "map-pin" as const },
] as const;
