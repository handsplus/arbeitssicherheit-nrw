import Link from "next/link";
import { IconCalendar, IconArrowRight } from "@/components/Icons";

export const metadata = {
  title: "Schulungstermine – Termine auf Anfrage",
  description: "Schulungstermine zu Arbeitssicherheit, Brandschutz und SiGeKo in NRW. Individuell und auf Anfrage – Inhouse oder vor Ort.",
};

export default function SchulungsterminePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 md:py-24 text-center">
      <span className="inline-flex rounded-xl bg-nrw-gruen-hell p-3 text-nrw-gruen">
        <IconCalendar className="w-10 h-10" aria-hidden />
      </span>
      <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-nrw-gruen">Termine</p>
      <h1 className="mt-2 text-4xl font-bold text-nrw-grau-900">
        Schulungstermine auf Anfrage
      </h1>
      <p className="mt-6 text-lg text-nrw-grau-600">
        Wir planen Schulungen und Unterweisungen individuell mit Ihnen – Inhouse, vor Ort oder online.
        Senden Sie uns eine unverbindliche Anfrage, wir melden uns zeitnah mit passenden Terminvorschlägen.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/beratung-buchen"
          className="inline-flex items-center gap-2 rounded-full bg-nrw-gruen px-8 py-4 font-semibold text-white hover:bg-nrw-gruen-hover"
        >
          Schulungstermine anfragen
          <IconArrowRight className="h-5 w-5" aria-hidden />
        </Link>
        <Link
          href="/leistungen/schulungen"
          className="inline-flex items-center gap-2 rounded-full border-2 border-nrw-grau-800 px-8 py-4 font-semibold text-nrw-grau-800 hover:bg-nrw-grau-800 hover:text-white"
        >
          Schulungsthemen
        </Link>
      </div>
      <p className="mt-10">
        <Link href="/wissen" className="font-semibold text-nrw-gruen hover:text-nrw-gruen-hover">
          ← Wissen & Ressourcen
        </Link>
      </p>
    </div>
  );
}
