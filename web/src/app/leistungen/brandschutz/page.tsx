import Link from "next/link";
import { PrimaryCtaLink } from "@/components/PrimaryCtaLink";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { SITE } from "@/lib/constants";

export const metadata = {
  title: "Brandschutz – Überblick | Arbeitssicherheit.nrw",
  description:
    "Betrieblicher Brandschutz im FaSi-Kontext. Konzepte, Ordnung und lokale Leistung für Köln: brandschutzkoeln.com.",
  alternates: { canonical: `${SITE.url}/leistungen/brandschutz` },
  openGraph: {
    title: "Brandschutz – Überblick | Arbeitssicherheit.nrw",
    description:
      "Brandschutzbeauftragter und Organisation im Betrieb. Fachseite Köln: brandschutzkoeln.com.",
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
        <Link href="/leistungen" className="hover:text-nrw-gruen">
          Leistungen
        </Link>
        <span className="mx-2">/</span>
        <span className="text-nrw-grau-800">Brandschutz</span>
      </nav>
      <h1 className="text-4xl font-bold text-nrw-grau-900">Brandschutz</h1>
      <p className="mt-6 text-lg text-nrw-grau-600">
        Im Betrieb greifen Brandschutz und Arbeitssicherheit ineinander: Unterweisungen,
        Gefährdungsbeurteilung Brandgefahr, Evakuierung. Die externe FaSi stimmt das mit Ihren
        Abläufen ab.
      </p>
      <p className="mt-4 text-nrw-grau-600">
        Brandschutzkonzept, Brandschutzordnung und die lokale Leistung für Köln liegen auf der
        Fachdomain{" "}
        <a
          href="https://brandschutzkoeln.com/"
          className="font-semibold text-nrw-gruen hover:underline"
          rel="noopener noreferrer"
        >
          brandschutzkoeln.com
        </a>
        .
      </p>
      <div className="mt-14 flex flex-wrap gap-4">
        <a
          href="https://brandschutzkoeln.com/"
          className="inline-flex items-center gap-2 rounded-full bg-nrw-rot px-8 py-4 font-semibold text-white hover:bg-nrw-rot-hover"
        >
          Zur Brandschutz-Fachseite
        </a>
        <PrimaryCtaLink
          theme="brandschutz"
          className="inline-flex items-center gap-2 rounded-full border-2 border-nrw-grau-800 px-8 py-4 font-semibold text-nrw-grau-800 hover:bg-nrw-grau-800 hover:text-white"
        />
      </div>
    </div>
  );
}
