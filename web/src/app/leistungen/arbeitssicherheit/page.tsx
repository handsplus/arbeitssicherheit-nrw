import Link from "next/link";
import { PrimaryCtaLink } from "@/components/PrimaryCtaLink";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { OfficialSourcesBlock } from "@/components/content/OfficialSourcesBlock";
import { RelatedOnSite } from "@/components/content/RelatedOnSite";
import { OFFICIAL_GENERAL } from "@/lib/officialSources";
import { SITE } from "@/lib/constants";

export const metadata = {
  title: "Arbeitssicherheit & FaSi – externe Fachkraft in Köln & NRW",
  description:
    "Arbeitssicherheit professionell: Externe Fachkraft für Arbeitssicherheit (FaSi), Gefährdungsbeurteilung, Betreuung nach ASiG und DGUV Vorschrift 2. Köln, NRW.",
  alternates: { canonical: `${SITE.url}/leistungen/arbeitssicherheit` },
  openGraph: {
    title: "Arbeitssicherheit & FaSi – externe Fachkraft | Köln & NRW",
    description:
      "Externe FaSi, Gefährdungsbeurteilung, Betriebsbegehung, Unterweisung. Arbeitssicherheit nach ASiG und DGUV Vorschrift 2 in Köln und NRW.",
    url: `${SITE.url}/leistungen/arbeitssicherheit`,
  },
};

export default function ArbeitssicherheitPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
      <BreadcrumbJsonLd
        items={[
          { name: "Start", url: "/" },
          { name: "Leistungen", url: "/leistungen" },
          { name: "Arbeitssicherheit" },
        ]}
      />
      <nav className="mb-10 text-sm text-nrw-grau-400" aria-label="Breadcrumb">
        <Link href="/leistungen" className="hover:text-nrw-gruen">Leistungen</Link>
        <span className="mx-2">/</span>
        <span className="text-nrw-grau-800">Arbeitssicherheit</span>
      </nav>
      <h1 className="text-4xl font-bold text-nrw-grau-900">Arbeitssicherheit</h1>
      <p className="mt-6 text-lg text-nrw-grau-600">
        Als externe Fachkraft für Arbeitssicherheit (FaSi) bieten wir Ihnen in Köln und NRW eine grund- und betriebsspezifische Betreuung gemäß Arbeitssicherheitsgesetz (ASiG) und DGUV Vorschrift 2 – maßgeschneidert und rechtssicher.
      </p>
      <div className="prose mt-12 max-w-none prose-headings:text-nrw-grau-900 prose-p:text-nrw-grau-600 prose-li:text-nrw-grau-600">
        <h2 className="text-2xl font-bold">Leistungen im Überblick</h2>
        <p>
          Unsere Arbeitssicherheit-Leistungen in Köln und Nordrhein-Westfalen umfassen die vollständige Betreuung durch eine externe Fachkraft für Arbeitssicherheit sowie alle zentralen Themen der betrieblichen Arbeitssicherheit:
        </p>
        <ul>
          <li>Externe Fachkraft für Arbeitssicherheit (FaSi) – Grund- und betriebsspezifische Betreuung</li>
          <li>Gefährdungsbeurteilungen (Erstellung, Fortschreibung, Dokumentation)</li>
          <li>Unterstützung bei Behördenterminen und Außendarstellung</li>
          <li>Betriebsbegehungen und Beratung vor Ort in Köln und NRW</li>
          <li>Unterweisungen und Schulungen zur Arbeitssicherheit</li>
          <li>SiGeKo (Sicherheits- und Gesundheitsschutzkoordination) auf Baustellen</li>
        </ul>
        <h2 className="text-2xl font-bold">Arbeitssicherheit in Köln und NRW</h2>
        <p>
          Ob in Köln, im Großraum NRW oder bundesweit: Wir sind Ihre Anlaufstelle für professionelle Arbeitssicherheit. Eine externe Fachkraft für Arbeitssicherheit entlastet Sie bei Gefährdungsbeurteilung, Unterweisung und Betriebsbegehung und sorgt für die Einhaltung von ASiG und DGUV Vorschrift 2.
        </p>
        <h2 className="text-2xl font-bold">Rechtliche Grundlagen</h2>
        <p>
          Die betriebliche Betreuung erfolgt nach Arbeitssicherheitsgesetz (ASiG) und DGUV Vorschrift 2. Wir unterstützen Sie bei der Erfüllung Ihrer Pflichten als Arbeitgeber und sorgen für Rechtssicherheit in allen Belangen der Arbeitssicherheit.
        </p>
        <h2 className="text-2xl font-bold">Typischer Ablauf mit externer FaSi</h2>
        <p>
          In der Praxis starten wir mit einer Bestandsaufnahme (Organisation, Tätigkeiten, bestehende Dokumente), priorisieren Gefährdungsbeurteilungen und legen mit Ihnen ein Betreuungsintervall fest. Betriebsbegehungen, Unterweisungen und Abstimmung mit dem Betriebsarzt werden so geplant, dass Nachweise vollständig bleiben und Führungskräfte entlastet werden.
        </p>
      </div>
      <OfficialSourcesBlock links={OFFICIAL_GENERAL} />
      <RelatedOnSite
        links={[
          { href: "/faq", label: "FAQ", description: "Häufige Fragen zu FaSi und Pflichten" },
          { href: "/blog", label: "Blog", description: "Praxisartikel zu Gefährdungsbeurteilung & Co." },
          { href: "/checklisten", label: "Checklisten", description: "Erste Orientierung für Ihren Betrieb" },
          { href: "/leistungen/brandschutz", label: "Brandschutz", description: "Ergänzend zum Arbeitsschutz" },
          { href: "/leistungen/sigeko", label: "SiGeKo", description: "Baustelle & Koordination" },
          { href: "/beratung-buchen", label: "Beratung buchen", description: "Direkter Terminwunsch" },
        ]}
      />
      <div className="mt-14 flex flex-wrap gap-4">
        <PrimaryCtaLink
          theme="arbeitssicherheit"
          className="inline-flex items-center gap-2 rounded-full bg-nrw-rot px-8 py-4 font-semibold text-white hover:bg-nrw-rot-hover"
        />
        <Link
          href="/kontakt"
          className="inline-flex items-center gap-2 rounded-full border-2 border-nrw-grau-800 px-8 py-4 font-semibold text-nrw-grau-800 hover:bg-nrw-grau-800 hover:text-white"
        >
          Kontakt
        </Link>
      </div>
    </div>
  );
}
