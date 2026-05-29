import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { CookieBanner } from "@/components/CookieBanner";
import { SITE } from "@/lib/content";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#06090f",
};

export const metadata: Metadata = {
  title: `${SITE.name} | Siti web, social media e prodotti digitali`,
  description:
    "Agenzia a Francavilla Fontana. Siti web su misura, gestione social con reel e CR8 Booking per ristoranti.",
  metadataBase: new URL("https://www.cr8studios.it"),
  alternates: { canonical: "https://www.cr8studios.it/" },
  openGraph: {
    title: SITE.name,
    description:
      "Siti web su misura, social media e CR8 Booking. Francavilla Fontana, Puglia.",
    locale: "it_IT",
    type: "website",
    url: "https://www.cr8studios.it/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={plusJakarta.variable}>
      <body className="min-h-[100dvh] antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
