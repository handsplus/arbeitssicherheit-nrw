import type { NextConfig } from "next";

/**
 * 301 von Legacy-URLs (früheres CMS, u. a. WordPress /post/, Umlaut-Pfade).
 * Behebt GSC-404; Reihenfolge: spezifische /post/-Ziele vor dem /post/-Wildcard.
 */
const legacyRedirects = [
  { source: "/überuns", destination: "/ueber-uns", permanent: true },
  { source: "/über-uns", destination: "/ueber-uns", permanent: true },
  { source: "/ueberuns", destination: "/ueber-uns", permanent: true },
  { source: "/arbeitssicherheit", destination: "/leistungen/arbeitssicherheit", permanent: true },
  { source: "/schulungen", destination: "/leistungen/schulungen", permanent: true },
  { source: "/datenschutzerklärung", destination: "/datenschutz", permanent: true },
  { source: "/datenschutzerklaerung", destination: "/datenschutz", permanent: true },
  {
    source: "/post/brandschutz-brandbekämpfung-von-elektrofahrzeugen",
    destination: "/leistungen/brandschutz",
    permanent: true,
  },
  {
    source: "/post/brandschutz-brandbekaempfung-von-elektrofahrzeugen",
    destination: "/leistungen/brandschutz",
    permanent: true,
  },
  {
    source:
      "/post/welche-auswirkungen-hat-eine-nicht-erfolgte-bestellung-einer-fachkraft-für-arbeitssicherheit",
    destination: "/faq",
    permanent: true,
  },
  {
    source:
      "/post/welche-auswirkungen-hat-eine-nicht-erfolgte-bestellung-einer-fachkraft-fuer-arbeitssicherheit",
    destination: "/faq",
    permanent: true,
  },
  {
    source: "/post/bestellung-der-fachkraft-für-arbeitssicherheit-sifa-fasi",
    destination: "/leistungen/arbeitssicherheit",
    permanent: true,
  },
  {
    source: "/post/bestellung-der-fachkraft-fuer-arbeitssicherheit-sifa-fasi",
    destination: "/leistungen/arbeitssicherheit",
    permanent: true,
  },
  {
    source: "/post/bestellung-der-fachkraft-für-arbeitssicherheit-stef-fasi",
    destination: "/leistungen/arbeitssicherheit",
    permanent: true,
  },
  {
    source: "/post/bestellung-der-fachkraft-fuer-arbeitssicherheit-stef-fasi",
    destination: "/leistungen/arbeitssicherheit",
    permanent: true,
  },
  {
    source: "/post/bestellung-der-fachkraft-für-arbeitssicherheit-fasi",
    destination: "/leistungen/arbeitssicherheit",
    permanent: true,
  },
  {
    source: "/post/bestellung-der-fachkraft-fuer-arbeitssicherheit-fasi",
    destination: "/leistungen/arbeitssicherheit",
    permanent: true,
  },
  {
    source:
      "/post/beurteilung-der-arbeitsbedingungen-ein-wesentlicher-faktor-fuer-den-erfolg-von-unternehmen",
    destination: "/blog",
    permanent: true,
  },
  {
    source: "/post/vorteile-einer-externen-fachkraft-fuer-arbeitssicherheit",
    destination: "/leistungen/arbeitssicherheit",
    permanent: true,
  },
  {
    source: "/post/vorteile-einer-externen-fachkraft-für-arbeitssicherheit",
    destination: "/leistungen/arbeitssicherheit",
    permanent: true,
  },
  { source: "/post/:path*", destination: "/blog", permanent: true },
] satisfies Awaited<ReturnType<NonNullable<NextConfig["redirects"]>>>;

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return legacyRedirects;
  },
};

export default nextConfig;
