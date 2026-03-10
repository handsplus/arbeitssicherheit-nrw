import Link from "next/link";
import { IconArrowRight } from "@/components/Icons";

export const metadata = {
  title: "Managementsysteme ISO 45001, ISO 14001 – Köln & NRW",
  description:
    "Einführung und Optimierung von Arbeitsschutz- und Umweltmanagementsystemen (ISO 45001, ISO 14001). Beratung in Köln und NRW.",
};

export default function ManagementsystemePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
      <nav className="mb-10 text-sm text-nrw-grau-400" aria-label="Breadcrumb">
        <Link href="/leistungen" className="hover:text-nrw-gruen">Leistungen</Link>
        <span className="mx-2">/</span>
        <span className="text-nrw-grau-800">Managementsysteme</span>
      </nav>
      <h1 className="text-4xl font-bold text-nrw-grau-900">Managementsysteme</h1>
      <p className="mt-6 text-lg text-nrw-grau-600">
        Einführung und Optimierung von Managementsystemen – abgestimmt mit Ihrer Arbeitssicherheit und Ihrem Brandschutz.
      </p>
      <div className="prose mt-12 max-w-none prose-headings:text-nrw-grau-900 prose-p:text-nrw-grau-600 prose-li:text-nrw-grau-600">
        <h2 className="text-2xl font-bold">Schwerpunkte</h2>
        <ul>
          <li>ISO 45001 (Arbeitsschutz-Managementsysteme)</li>
          <li>ISO 14001 (Umweltmanagement)</li>
          <li>Integration mit Arbeitssicherheit und Brandschutz</li>
          <li>Vorbereitung auf Zertifizierung / Audits</li>
        </ul>
        <h2 className="text-2xl font-bold">Vorteile</h2>
        <p>
          Ein einheitliches Management für Sicherheit, Gesundheit und Umwelt entlastet Ihr Unternehmen und schafft Rechtssicherheit. Wir begleiten Sie von der Analyse bis zur Zertifizierung.
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
