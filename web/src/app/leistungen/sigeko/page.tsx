import Link from "next/link";
import { PrimaryCtaLink } from "@/components/PrimaryCtaLink";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { SITE } from "@/lib/constants";

export const metadata = {
  title: "SiGeKo – Überblick | Arbeitssicherheit.nrw",
  description:
    "SiGeKo nach Baustellenverordnung: die Fachseite für Köln und NRW ist sigeko.koeln. Hier der Überblick im FaSi-Kontext.",
  alternates: { canonical: `${SITE.url}/leistungen/sigeko` },
  openGraph: {
    title: "SiGeKo – Überblick | Arbeitssicherheit.nrw",
    description:
      "Baustellenkoordination nach BaustellV. Vertiefung und Angebot: sigeko.koeln.",
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
        Sicherheits- und Gesundheitsschutzkoordination auf der Baustelle nach Baustellenverordnung:
        SiGe-Plan, Koordination der Gewerke, Begehungen und Dokumentation.
      </p>
      <p className="mt-4 text-nrw-grau-600">
        Diese Seite ist die Brücke aus der betrieblichen FaSi-Betreuung. Die Fachleistung SiGeKo für
        Köln und NRW liegt auf{" "}
        <a
          href="https://sigeko.koeln/"
          className="font-semibold text-nrw-gruen hover:underline"
          rel="noopener noreferrer"
        >
          sigeko.koeln
        </a>
        .
      </p>
      <div className="mt-14 flex flex-wrap gap-4">
        <a
          href="https://sigeko.koeln/"
          className="inline-flex items-center gap-2 rounded-full bg-nrw-rot px-8 py-4 font-semibold text-white hover:bg-nrw-rot-hover"
        >
          Zur SiGeKo-Fachseite
        </a>
        <PrimaryCtaLink
          theme="sigeko"
          className="inline-flex items-center gap-2 rounded-full border-2 border-nrw-grau-800 px-8 py-4 font-semibold text-nrw-grau-800 hover:bg-nrw-grau-800 hover:text-white"
        />
      </div>
    </div>
  );
}
