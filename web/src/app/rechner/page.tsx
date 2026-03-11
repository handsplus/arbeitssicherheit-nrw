import Link from "next/link";
import { SITE } from "@/lib/constants";
import { IconArrowRight } from "@/components/Icons";
import { BrandschutzhelferRechner } from "@/components/BrandschutzhelferRechner";

export const metadata = {
  title: "Rechner: Brandschutzhelfer (ASR A2.2) & SiGeKo-Honorar",
  description:
    "Brandschutzhelfer-Rechner nach ASR A2.2, SiGeKo-Honorar-Orientierung. Kostenlose Orientierungshilfen für Arbeitssicherheit in Köln und NRW.",
  alternates: { canonical: `${SITE.url}/rechner` },
};

export default function RechnerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-nrw-gruen">Rechner</p>
      <h1 className="mt-2 text-4xl font-bold text-nrw-grau-900 md:text-5xl">
        Nützliche Berechnungen
      </h1>
      <p className="mt-6 text-lg text-nrw-grau-600">
        Orientierungshilfen für Brandschutzhelfer und SiGeKo – unverbindlich, ohne Gewähr.
      </p>

      <div className="mt-12">
        <BrandschutzhelferRechner />
      </div>

      <section className="mt-10 rounded-2xl border border-nrw-grau-200 bg-nrw-grau-50 p-8">
        <h2 className="text-xl font-bold text-nrw-grau-900">SiGeKo-Honorar</h2>
        <p className="mt-3 text-nrw-grau-600">
          Das Honorar für die Sicherheits- und Gesundheitsschutzkoordination hängt von Baustellengröße, Laufzeit und Leistungsumfang ab (z. B. nur Koordinierungsphase oder auch Überwachung). Es gibt keine verbindlichen Tarife – wir erstellen Ihnen gerne ein individuelles Angebot.
        </p>
        <Link
          href="/beratung-buchen"
          className="mt-4 inline-flex items-center gap-2 font-semibold text-nrw-gruen hover:text-nrw-gruen-hover"
        >
          Unverbindliches Angebot anfragen
          <IconArrowRight className="h-5 w-5" aria-hidden />
        </Link>
      </section>

      <div className="mt-10">
        <Link href="/wissen" className="font-semibold text-nrw-grau-600 hover:text-nrw-gruen">
          ← Zurück zu Wissen & Ressourcen
        </Link>
      </div>
    </div>
  );
}
