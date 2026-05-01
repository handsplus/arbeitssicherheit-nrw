import Link from "next/link";
import { PrimaryCtaLink } from "@/components/PrimaryCtaLink";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { OfficialSourcesBlock } from "@/components/content/OfficialSourcesBlock";
import { RelatedOnSite } from "@/components/content/RelatedOnSite";
import { OFFICIAL_GENERAL, OFFICIAL_SIGEKO } from "@/lib/officialSources";
import { SITE } from "@/lib/constants";

export const metadata = {
  title: "SiGeKo – Sicherheits- und Gesundheitsschutzkoordination | Köln & NRW",
  description:
    "SiGeKo-Leistungen auf der Baustelle: Planung, Koordination und Dokumentation gemäß Baustellenverordnung. Externer SiGeKo in Köln und NRW.",
  alternates: { canonical: `${SITE.url}/leistungen/sigeko` },
  openGraph: {
    title: "SiGeKo – Sicherheits- und Gesundheitsschutzkoordination | Köln & NRW",
    description:
      "Externer SiGeKo, SiGePlan, Baustellenverordnung. Sicherheits- und Gesundheitsschutzkoordination in Köln und NRW.",
    url: `${SITE.url}/leistungen/sigeko`,
  },
};

export default function SiGeKoPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
      <BreadcrumbJsonLd
        items={[
          { name: "Start", url: "/" },
          { name: "Leistungen", url: "/leistungen" },
          { name: "SiGeKo" },
        ]}
      />
      <nav className="mb-10 text-sm text-nrw-grau-400" aria-label="Breadcrumb">
        <Link href="/leistungen" className="hover:text-nrw-gruen">
          Leistungen
        </Link>
        <span className="mx-2">/</span>
        <span className="text-nrw-grau-800">SiGeKo</span>
      </nav>
      <h1 className="text-4xl font-bold text-nrw-grau-900">SiGeKo</h1>
      <p className="mt-6 text-lg text-nrw-grau-600">
        Sicherheits- und Gesundheitsschutzkoordination auf der Baustelle: Wir übernehmen die SiGeKo-Leistungen gemäß Baustellenverordnung in Köln und NRW – von der Planungs- über die Ausführungsphase bis zur Dokumentation und Übergabe.
      </p>
      <div className="prose mt-12 max-w-none prose-headings:text-nrw-grau-900 prose-p:text-nrw-grau-600 prose-li:text-nrw-grau-600">
        <h2 className="text-2xl font-bold">Leistungsspektrum SiGeKo</h2>
        <p>
          Als externer SiGeKo (Sicherheits- und Gesundheitsschutzkoordinator) decken wir alle gesetzlich geforderten SiGeKo-Leistungen ab:
        </p>
        <ul>
          <li>Sicherheits- und Gesundheitsschutzkoordinator (SiGeKo) in Planungs- und Ausführungsphase</li>
          <li>SiGeKo-Plan mit Gefährdungsanalyse und Schutzmaßnahmen</li>
          <li>Unterlage für spätere Arbeiten (Überarbeitung und Übergabe an Bauherrn)</li>
          <li>Koordination mehrerer Auftragnehmer auf der Baustelle</li>
          <li>Dokumentation und Mitwirkung bei der Abnahme</li>
        </ul>
        <h2 className="text-2xl font-bold">SiGeKo in Köln und NRW</h2>
        <p>
          Bei Bauvorhaben mit mehreren Beteiligten ist die SiGeKo gemäß Baustellenverordnung gesetzlich gefordert. Wir unterstützen Bauherren und Generalübernehmer als externer SiGeKo in Köln und Nordrhein-Westfalen – rechtssicher und praxisnah, von der Planung bis zur Fertigstellung.
        </p>
        <h2 className="text-2xl font-bold">Für wen?</h2>
        <p>
          SiGeKo-Leistungen sind insbesondere bei größeren Bauprojekten und bei mehreren gleichzeitig tätigen Unternehmen erforderlich. Gern prüfen wir mit Ihnen, ob und in welchem Umfang ein SiGeKo für Ihr Vorhaben nötig ist.
        </p>
        <h2 className="text-2xl font-bold">Schnittstelle zur Arbeitssicherheit im Betrieb</h2>
        <p>
          SiGeKo betrifft die Baustelle; parallel bleiben betriebliche Pflichten nach ASiG und DGUV Vorschrift 2 in Ihren Stammstandorten bestehen. Wir helfen, Informationen zwischen Baustelle und Betrieb sauber zu übergeben – damit Unterweisungen und Dokumentation zusammenpassen.
        </p>
      </div>
      <OfficialSourcesBlock
        title="Gesetzliche Einordnung & Behördeninformationen"
        links={[...OFFICIAL_SIGEKO, ...OFFICIAL_GENERAL.slice(0, 2)]}
      />
      <RelatedOnSite
        links={[
          { href: "/leistungen/arbeitssicherheit", label: "Arbeitssicherheit", description: "FaSi für Ihren Betrieb" },
          { href: "/rechner", label: "Rechner", description: "Honorar- und Personal-Orientierung" },
          { href: "/faq", label: "FAQ", description: "Fragen zu SiGeKo" },
          { href: "/blog", label: "Blog", description: "Praxiswissen Baustelle" },
        ]}
      />
      <div className="mt-14 flex flex-wrap gap-4">
        <PrimaryCtaLink
          theme="sigeko"
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
