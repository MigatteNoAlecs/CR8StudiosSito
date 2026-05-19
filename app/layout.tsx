import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
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
  themeColor: "#09090b",
};

export const metadata: Metadata = {
  title: `${SITE.name} | Siti web e social media`,
  description:
    "Agenzia a Francavilla Fontana. Realizziamo siti web e gestiamo Instagram e TikTok con storie e reel.",
  openGraph: {
    title: SITE.name,
    description:
      "Siti web su misura e gestione social con storie e reel. Francavilla Fontana, Puglia.",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={plusJakarta.variable}>
      <body className="min-h-[100dvh] antialiased">{children}</body>
    </html>
  );
}
