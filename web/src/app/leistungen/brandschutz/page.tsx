import Link from "next/link";
import { IconArrowRight } from "@/components/Icons";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { SITE } from "@/lib/constants";

export const metadata = {
  title: "Brandschutzbeauftragter (BSB) – extern in Köln & NRW",
  description:
    "Externer Brandschutzbeauftragter: Beratung und Konzepte im baulichen, anlagentechnischen und organisatorischen Brandschutz. Köln und NRW.",
  alternates: { canonical: `${SITE.url}/leistungen/brandschutz` },
  openGraph: {
    title: "Brandschutzbeauftragter – extern | Köln & NRW",
    description:
      "Externer BSB, Brandschutzkonzepte, Brandschutzordnung, Schulungen. Brandschutz in Köln und NRW.",
    url: `${SITE.url}/leistungen/brandschutz`,
  },
};

export default function BrandschutzPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
      <BreadcrumbJsonLd
        items={[
          { name: "Start", url: "/" },
          { name: "Leistungen", url: "/leistungen" },
          { name: "Brandschutz" },
        ]}
      />
      <nav className="mb-10 text-sm text-nrw-grau-400" aria-label="Breadcrumb">
        <Link href="/leistungen" className="hover:text-nrw-gruen">Leistungen</Link>
        <span className="mx-2">/</span>
        <span className="text-nrw-grau-800">Brandschutzbeauftragter</span>
      </nav>
      <h1 className="text-4xl font-bold text-nrw-grau-900">Brandschutzbeauftragter</h1>
      <p className="mt-6 text-lg text-nrw-grau-600">
        Externer Brandschutzbeauftragter (BSB) in Köln und NRW: Beratung und Unterstützung im baulichen, anlagentechnischen und organisatorischen Brandschutz – von der Brandschutzordnung bis zum Brandschutzkonzept.
      </p>
      <div className="prose mt-12 max-w-none prose-headings:text-nrw-grau-900 prose-p:text-nrw-grau-600 prose-li:text-nrw-grau-600">
        <h2 className="text-2xl font-bold">Leistungsspektrum Brandschutz</h2>
        <p>
          Unser Brandschutz-Angebot umfasst die Rolle des externen Brandschutzbeauftragten sowie alle zentralen Themen des vorbeugenden Brandschutzes:
        </p>
        <ul>
          <li>Brandschutzbeauftragter (extern) – Bestellung und Betreuung</li>
          <li>Brandschutzkonzepte und -nachweise für Neubau, Umbau, Sonderbauten</li>
          <li>Baulicher Brandschutz (Bauteile, Rettungswege, Abschottung)</li>
          <li>Anlagentechnischer Brandschutz (Meldeanlagen, Löschsysteme, Rauchwarnmelder)</li>
          <li>Organisatorischer Brandschutz (Fluchtwege, Evakuierung, Brandschutzordnung)</li>
          <li>Brandschutzunterweisungen und Schulungen (z. B. Brandschutzhelfer)</li>
        </ul>
        <h2 className="text-2xl font-bold">Brandschutz in Köln und NRW</h2>
        <p>
          Ob Gewerbe, Industrie, Verwaltung oder Sonderbauten: Wir unterstützen Sie in Köln und Nordrhein-Westfalen bei Planung, Umsetzung und Dokumentation aller brandschutzrelevanten Anforderungen – rechtssicher und praxisnah.
        </p>
        <h2 className="text-2xl font-bold">Für wen?</h2>
        <p>
          Die Bestellung eines Brandschutzbeauftragten kann sich aus Rechtsvorschriften, Auflagen oder betrieblicher Entscheidung ergeben. Wir beraten Sie, ob und in welchem Umfang ein Brandschutzbeauftragter erforderlich ist, und übernehmen die Rolle extern.
        </p>
      </div>
      <div className="mt-14 flex flex-wrap gap-4">
        <Link
          href="/beratung-buchen"
          className="inline-flex items-center gap-2 rounded-full bg-nrw-rot px-8 py-4 font-semibold text-white hover:bg-nrw-rot-hover"
        >
          Kostenlose Erstberatung
          <IconArrowRight className="h-5 w-5" aria-hidden />
        </Link>
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
