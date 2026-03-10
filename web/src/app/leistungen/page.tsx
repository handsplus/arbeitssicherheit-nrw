import Link from "next/link";
import { LEISTUNGEN } from "@/lib/constants";
import { ServiceCard } from "@/components/ServiceCard";
import { IconArrowRight } from "@/components/Icons";

export const metadata = {
  title: "Leistungen: Arbeitssicherheit, Brandschutz, SiGeKo, Schulungen, VEFK",
  description:
    "Arbeitssicherheit, Brandschutz, SiGeKo, Schulungen, Elektrosicherheit (VEFK) und Managementsysteme aus einer Hand in Köln und NRW.",
};

export default function LeistungenPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-nrw-gruen">
        Unsere Leistungen
      </p>
      <h1 className="mt-2 text-4xl font-bold text-nrw-grau-900 md:text-5xl">
        Alles aus einer Hand
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-nrw-grau-600">
        Betreuung in Arbeitssicherheit, Brandschutz, Elektrosicherheit und Managementsystemen – für
        Rechtssicherheit und weniger Aufwand in Ihrem Unternehmen.
      </p>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {LEISTUNGEN.map((l) => (
          <ServiceCard key={l.slug} title={l.title} short={l.short} href={l.href} icon={l.icon} />
        ))}
      </div>
      <div className="mt-14 text-center">
        <Link
          href="/beratung-buchen"
          className="inline-flex items-center gap-2 rounded-full bg-nrw-rot px-8 py-4 font-semibold text-white hover:bg-nrw-rot-hover"
        >
          Kostenlose Erstberatung anfragen
          <IconArrowRight className="h-5 w-5" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
