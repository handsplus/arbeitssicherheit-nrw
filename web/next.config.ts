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
  { source: "/brandschutz", destination: "/leistungen/brandschutz", permanent: true },
  { source: "/sigeko", destination: "/leistungen/sigeko", permanent: true },
  { source: "/elektrosicherheit", destination: "/leistungen/elektrosicherheit", permanent: true },
  { source: "/managementsysteme", destination: "/leistungen/managementsysteme", permanent: true },
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
  async headers() {
    const isProd = process.env.NODE_ENV === "production";
    const headers = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      {
        key: "Permissions-Policy",
        value:
          "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
      },
      {
        key: "Content-Security-Policy-Report-Only",
        value: [
          "default-src 'self'",
          "base-uri 'self'",
          "object-src 'none'",
          "frame-ancestors 'none'",
          "form-action 'self' https://formspree.io",
          "script-src 'self' 'unsafe-inline'",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data: blob: https:",
          "font-src 'self' data:",
          "connect-src 'self' https://formspree.io",
          "upgrade-insecure-requests",
        ].join("; "),
      },
    ];
    if (isProd) {
      headers.push({
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      });
    }
    return [{ source: "/(.*)", headers }];
  },
  async redirects() {
    return legacyRedirects;
  },
};

export default nextConfig;
