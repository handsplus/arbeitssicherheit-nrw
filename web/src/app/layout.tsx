import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { VisitNotifier } from "@/components/VisitNotifier";
import { JsonLd } from "@/components/JsonLd";
import { SITE, CONTACT } from "@/lib/constants";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE.title,
    template: "%s | Arbeitssicherheit.nrw",
  },
  description: SITE.description,
  keywords: [
    "Arbeitssicherheit",
    "Arbeitssicherheit Köln",
    "Arbeitssicherheit NRW",
    "Fachkraft für Arbeitssicherheit",
    "FaSi",
    "externe FaSi",
    "externe Fachkraft Arbeitssicherheit",
    "Gefährdungsbeurteilung",
    "Gefährdungsbeurteilung erstellen",
    "Brandschutz",
    "Brandschutzbeauftragter",
    "Brandschutzbeauftragter Köln",
    "Brandschutzmanager",
    "Brandschutzkonzept",
    "SiGeKo",
    "SiGeKo Baustelle",
    "Sicherheits- und Gesundheitsschutzkoordinator",
    "ASiG",
    "DGUV Vorschrift 2",
    "Arbeitsschutz",
    "HSE Manager",
    "ISO 45001",
    "Elektrosicherheit",
    "VEFK",
    "Managementsysteme",
    "Köln",
    "NRW",
    "Nordrhein-Westfalen",
    "Düsseldorf",
    "Dortmund",
    "Bochum",
    "Wuppertal",
    "Münster",
    "Aachen",
    "Essen",
    "Ruhrgebiet",
    "Rheinland",
  ],
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  publisher: CONTACT.company,
  category: "business",
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#009233",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${font.variable} font-sans antialiased`}>
        <JsonLd />
        <a
          href="#main-content"
          className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:inline-block focus:h-auto focus:w-auto focus:rounded-lg focus:bg-nrw-gruen focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-white"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <main id="main-content" className="min-h-[70vh]" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>
        <VisitNotifier />
      </body>
    </html>
  );
}
