import Link from "next/link";
import { IconShield, IconAcademic, IconCalendar, IconBook, IconChart, IconArrowRight } from "@/components/Icons";

export const metadata = {
  title: "Wissen & Ressourcen – Checklisten, FAQ, Glossar, Rechner",
  description: "Checklisten, FAQ, Glossar, Rechner und Schulungstermine zu Arbeitssicherheit, Brandschutz und SiGeKo in Köln und NRW.",
};

const ARTICLES = [
  { title: "Checklisten & Selbstbewertung", href: "/checklisten", summary: "Gefährdungsbeurteilung, Brandschutz und SiGeKo im Check.", Icon: IconShield },
  { title: "Häufige Fragen (FAQ)", href: "/faq", summary: "Antworten zu Arbeitssicherheit, Brandschutz, SiGeKo und mehr.", Icon: IconAcademic },
  { title: "Glossar", href: "/glossar", summary: "Begriffe aus Arbeitssicherheit, Brandschutz und SiGeKo kurz erklärt.", Icon: IconBook },
  { title: "Rechner", href: "/rechner", summary: "Brandschutzhelfer-Anzahl (ASR A2.2), SiGeKo-Honorar-Orientierung.", Icon: IconChart },
  { title: "Schulungstermine anfragen", href: "/beratung-buchen", summary: "Termine für Schulungen und Unterweisungen individuell auf Anfrage.", Icon: IconCalendar },
  { title: "Blog Beiträge", href: "/blog", summary: "Aktuelle Beiträge zu Arbeitssicherheit, Brandschutz und SiGeKo.", Icon: IconBook },
];

export default function WissenPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-nrw-gruen">Wissen</p>
      <h1 className="mt-2 text-4xl font-bold text-nrw-grau-900">Wissen & Ressourcen</h1>
      <p className="mt-6 max-w-2xl text-lg text-nrw-grau-600">
        Checklisten, FAQ, Glossar, Rechner und Schulungstermine – alles auf einen Blick.
      </p>
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {ARTICLES.map(({ title, href, summary, Icon }) => (
          <Link
            key={href}
            href={href}
            className="block rounded-2xl border border-nrw-grau-200 bg-white p-8 shadow-sm transition hover:border-nrw-gruen-hell hover:shadow-lg"
          >
            <span className="inline-flex rounded-xl bg-nrw-gruen-hell p-3 text-nrw-gruen">
              <Icon className="w-7 h-7" aria-hidden />
            </span>
            <h2 className="mt-5 text-xl font-bold text-nrw-grau-900">{title}</h2>
            <p className="mt-3 text-nrw-grau-600">{summary}</p>
            <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-nrw-gruen">
              Mehr erfahren
              <IconArrowRight className="w-4 h-4" aria-hidden />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
