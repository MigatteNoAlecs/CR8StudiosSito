export const LEGAL = {
  brand: "CR8 Studios",
  product: "CR8 Booking",
  operator: "CR8 Studios",
  address: "Francavilla Fontana (BR), Italia",
  email: "info@cr8studios.it",
  privacyEmail: "privacy@cr8studios.it",
  bookingEmail: "booking@cr8studios.it",
  phone: "392 437 8764",
  phoneHref: "tel:+393924378764",
  bookingUrl: "https://booking.cr8studios.it",
  siteUrl: "https://www.cr8studios.it",
} as const;

export const FISCAL_STATUS =
  "Attività svolta in regime di prestazione occasionale (senza Partita IVA).";

export const imprintLines = () => [
  LEGAL.operator,
  LEGAL.address,
  `Email: ${LEGAL.email}`,
  `Tel: ${LEGAL.phone}`,
  FISCAL_STATUS,
];
