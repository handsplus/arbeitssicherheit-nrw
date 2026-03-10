import Link from "next/link";
import { IconArrowRight } from "@/components/Icons";

export const metadata = {
  title: "Schulungen: Unterweisungen, Arbeitssicherheit, Brandschutz, SiGeKo",
  description:
    "Schulungen und Unterweisungen zu Arbeitssicherheit, Brandschutz und SiGeKo – individuell, online oder vor Ort in Köln und NRW.",
};

const SCHULUNGEN_ARBEITSSCHUTZ = [
  "Sicherheitsbeauftragte",
  "Evakuierungshelfer/in",
  "Brandschutzhelfer/in",
  "Jährliche und anlassbezogene Unterweisung",
  "Beauftragte für Leitern und Tritte",
  "Beauftragte für Regale",
  "Beauftragte für Ladungssicherung",
  "Ausbildung und Unterweisung im Gabelstaplerfahren",
  "Schulungen für Kran, Hubarbeitsbühnen- und Gerüstnutzung",
  "Schulungen für Elektrofachkräfte, Anlagenverantwortliche, Arbeitsverantwortliche, EFKITT, EUP",
  "ASA-Sitzung (Arbeitsschutzausschuss)",
  "Gefährdungsbeurteilung",
  "Technische Prüfungen (z. B. DGUV V3, BetrSichV)",
];

export default function SchulungenPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
      <nav className="mb-10 text-sm text-nrw-grau-400" aria-label="Breadcrumb">
        <Link href="/leistungen" className="hover:text-nrw-gruen">
          Leistungen
        </Link>
        <span className="mx-2">/</span>
        <span className="text-nrw-grau-800">Schulungen</span>
      </nav>
      <h1 className="text-4xl font-bold text-nrw-grau-900">Schulungen</h1>
      <p className="mt-6 text-lg text-nrw-grau-600">
        Individuell auf Sie abgestimmt, zeitlich flexibel – online oder vor Ort.
      </p>

      <div className="prose mt-12 max-w-none prose-headings:text-nrw-grau-900 prose-p:text-nrw-grau-600 prose-li:text-nrw-grau-600 prose-a:text-nrw-gruen">
        <h2 className="text-2xl font-bold">Themen (Auswahl)</h2>
        <ul>
          {SCHULUNGEN_ARBEITSSCHUTZ.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-bold">Formate</h2>
        <p>
          Wir kommen zu Ihnen ins Unternehmen oder führen Schulungen online durch. Termine
          individuell.{" "}
          <Link href="/beratung-buchen" className="font-semibold text-nrw-gruen hover:underline">
            Schulungstermine anfragen
          </Link>
          .
        </p>
      </div>

      <div className="mt-14 flex flex-wrap gap-4">
        <Link
          href="/beratung-buchen"
          className="inline-flex items-center gap-2 rounded-full bg-nrw-gruen px-8 py-4 font-semibold text-white hover:bg-nrw-gruen-hover"
        >
          Schulungstermine anfragen
          <IconArrowRight className="h-5 w-5" aria-hidden />
        </Link>
        <Link
          href="/kontakt"
          className="inline-flex items-center gap-2 rounded-full border-2 border-nrw-grau-800 px-8 py-4 font-semibold text-nrw-grau-800 hover:bg-nrw-grau-800 hover:text-white"
        >
          Individuelles Angebot
        </Link>
      </div>
    </div>
  );
}
