import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import {
  IconShield,
  IconAcademic,
  IconCalendar,
  IconBook,
  IconChart,
  IconArrowRight,
  IconPhone,
} from "@/components/Icons";

const desc =
  "Wissen zu Arbeitssicherheit und Arbeitsschutz in Köln und NRW: FAQ, Glossar, Checklisten, Rechner und Blog zu externer FaSi, Brandschutzbeauftragtem, SiGeKo, Gefährdungsbeurteilung, DGUV und ASiG.";

export const metadata: Metadata = {
  title: "Wissen: Arbeitssicherheit Köln & NRW | FAQ, Blog, externe FaSi, SiGeKo",
  description: desc,
  alternates: { canonical: `${SITE.url}/wissen` },
  keywords: [
    "Arbeitssicherheit Wissen",
    "FaSi",
    "Brandschutz",
    "SiGeKo",
    "Gefährdungsbeurteilung",
    "DGUV Vorschrift 2",
    "ASiG",
    "Arbeitssicherheit Köln",
    "Arbeitssicherheit NRW",
    "Arbeitsschutz Köln",
    "externe Fachkraft Arbeitssicherheit",
    "Brandschutzbeauftragter Köln",
    "SiGeKo NRW",
    "FAQ Arbeitssicherheit",
    "Glossar Arbeitssicherheit",
  ],
  openGraph: {
    title: "Wissen & Ressourcen | Arbeitssicherheit.nrw",
    description: desc,
    url: `${SITE.url}/wissen`,
    locale: "de_DE",
    type: "website",
    siteName: SITE.name,
  },
};

const ARTICLES = [
  {
    title: "Checklisten & Selbstbewertung",
    href: "/checklisten",
    summary: "Gefährdungsbeurteilung, Brandschutz und SiGeKo im Check – erste Orientierung für Ihren Betrieb.",
    Icon: IconShield,
  },
  {
    title: "Häufige Fragen (FAQ)",
    href: "/faq",
    summary: "Antworten zu FaSi, Brandschutz, SiGeKo; ergänzend auch Elektrosicherheit und mehr.",
    Icon: IconAcademic,
  },
  {
    title: "Glossar",
    href: "/glossar",
    summary: "Begriffe von ASiG bis VEFK kurz erklärt – ideal zum Nachschlagen.",
    Icon: IconBook,
  },
  {
    title: "Rechner",
    href: "/rechner",
    summary: "Brandschutzhelfer nach ASR A2.2, SiGeKo-Honorar – Orientierung auf einen Blick.",
    Icon: IconChart,
  },
  {
    title: "Blog",
    href: "/blog",
    summary: "Aktuelle Beiträge zu Arbeitssicherheit, Brandschutz und Baustelle.",
    Icon: IconBook,
  },
  {
    title: "Schulungskalender",
    href: "/schulungskalender",
    summary: "So planen wir Schulungen und Unterweisungen – Inhouse, vor Ort oder online.",
    Icon: IconCalendar,
  },
  {
    title: "Termin & Erstberatung",
    href: "/beratung-buchen",
    summary: "Kostenlose Erstberatung oder Schulungstermine anfragen – wir melden uns zeitnah.",
    Icon: IconPhone,
  },
] as const;

/** Interne Verlinkung für SEO & Orientierung */
const THEMA_LINKS = [
  { label: "Externe FaSi Köln & NRW", href: "/leistungen/arbeitssicherheit" },
  { label: "Brandschutzbeauftragter (BSB)", href: "/leistungen/brandschutz" },
  { label: "SiGeKo NRW / Baustelle", href: "/leistungen/sigeko" },
  { label: "Arbeitssicherheit Beratung", href: "/beratung-buchen" },
  { label: "FAQ Arbeitsschutz", href: "/faq" },
  { label: "Blog Praxis", href: "/blog" },
  { label: "Schulungen", href: "/leistungen/schulungen" },
  { label: "Elektrosicherheit / VEFK", href: "/leistungen/elektrosicherheit" },
  { label: "Managementsysteme (ISO 45001)", href: "/leistungen/managementsysteme" },
] as const;

export default function WissenPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Wissen & Ressourcen",
    description: desc,
    url: `${SITE.url}/wissen`,
    isPartOf: { "@type": "WebSite", url: SITE.url, name: SITE.name },
    inLanguage: "de-DE",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: ARTICLES.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: a.title,
        url: `${SITE.url}${a.href}`,
      })),
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Start", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Wissen", item: `${SITE.url}/wissen` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-nrw-gruen">Wissen</p>
        <h1 className="mt-2 text-4xl font-bold text-nrw-grau-900">Wissen & Ressourcen</h1>
        <div className="mt-6 max-w-3xl space-y-4 text-lg text-nrw-grau-600">
          <p>
            Hier finden Sie kompakte Hilfen für den Alltag: Checklisten zur Selbsteinschätzung,
            Antworten auf häufige Fragen, ein Glossar zu Begriffen wie{" "}
            <abbr title="Fachkraft für Arbeitssicherheit">FaSi</abbr>,{" "}
            <abbr title="Arbeitssicherheitsgesetz">ASiG</abbr> und{" "}
            <abbr title="Deutsche Gesetzliche Unfallversicherung">DGUV</abbr>, Rechner sowie
            Blogartikel – alles mit Blick auf Betriebe in{" "}
            <strong className="font-medium text-nrw-grau-900">Köln und NRW</strong>.
          </p>
          <p className="text-base leading-relaxed">
            Nutzen Sie die Verknüpfungen zu unseren Leistungen, wenn Sie vertiefend beraten werden
            möchten.
          </p>
        </div>

        <nav
          className="mt-10 rounded-2xl border border-nrw-grau-200 bg-nrw-grau-50 p-6 md:p-8"
          aria-label="Themen und Leistungen"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-nrw-grau-600">
            Themen &amp; Leistungen
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {THEMA_LINKS.map((t) => (
              <li key={t.href}>
                <Link
                  href={t.href}
                  className="inline-flex rounded-full border border-nrw-grau-200 bg-white px-3 py-1.5 text-sm font-medium text-nrw-grau-700 transition hover:border-nrw-gruen hover:text-nrw-gruen"
                >
                  {t.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <h2 className="sr-only">Ressourcen und Tools</h2>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map(({ title, href, summary, Icon }) => (
            <Link
              key={href}
              href={href}
              className="block rounded-2xl border border-nrw-grau-200 bg-white p-8 shadow-sm transition hover:border-nrw-gruen-hell hover:shadow-lg"
            >
              <span className="inline-flex rounded-xl bg-nrw-gruen-hell p-3 text-nrw-gruen">
                <Icon className="h-7 w-7" aria-hidden />
              </span>
              <h3 className="mt-5 text-xl font-bold text-nrw-grau-900">{title}</h3>
              <p className="mt-3 text-nrw-grau-600">{summary}</p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-nrw-gruen">
                Mehr erfahren
                <IconArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
