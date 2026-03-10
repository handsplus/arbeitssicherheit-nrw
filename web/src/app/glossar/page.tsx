import Link from "next/link";
import { IconArrowRight } from "@/components/Icons";

export const metadata = {
  title: "Glossar: Arbeitssicherheit, Brandschutz, SiGeKo (FaSi, BSB, GBU, ASiG, DGUV, VEFK)",
  description:
    "Begriffe aus Arbeitssicherheit, Brandschutz und SiGeKo kurz erklärt: FaSi, Brandschutzbeauftragter, Gefährdungsbeurteilung, ASiG, DGUV, VEFK.",
};

const BEGRIFFE = [
  {
    begriff: "ASiG",
    titel: "Arbeitssicherheitsgesetz",
    text: "Das Arbeitssicherheitsgesetz verpflichtet Arbeitgeber, Betriebsärzte und Fachkräfte für Arbeitssicherheit in bestimmter Anzahl zu bestellen. Die konkrete Ausgestaltung regelt die DGUV Vorschrift 2.",
  },
  {
    begriff: "BSB",
    titel: "Brandschutzbeauftragter",
    text: "Eine vom Arbeitgeber bestellte Person, die in Fragen des Brandschutzes berät und bei der Umsetzung unterstützt. Kann betriebsintern oder extern (z. B. von uns) erbracht werden.",
  },
  {
    begriff: "DGUV",
    titel: "Deutsche Gesetzliche Unfallversicherung",
    text: "Spitzenverband der Berufsgenossenschaften und Unfallkassen. Er gibt u. a. die DGUV Vorschrift 2 (Betreuung durch FaSi und Betriebsarzt) und Vorschrift 3 (Elektrische Anlagen und Betriebsmittel) heraus.",
  },
  {
    begriff: "FaSi",
    titel: "Fachkraft für Arbeitssicherheit",
    text: "Fachperson, die den Arbeitgeber in allen Fragen der Arbeitssicherheit unterstützt – z. B. bei Gefährdungsbeurteilungen, Betriebsbegehungen und Unterweisungen. Die Betreuung kann extern erfolgen.",
  },
  {
    begriff: "Gefährdungsbeurteilung",
    titel: "Gefährdungsbeurteilung (GBU)",
    text: "Vom Arbeitgeber durchzuführende systematische Bewertung der Arbeitsbedingungen, um Gefahren zu erkennen und Schutzmaßnahmen festzulegen. Dokumentation ist Pflicht. Wir unterstützen bei der Erstellung.",
  },
  {
    begriff: "PSA",
    titel: "Persönliche Schutzausrüstung",
    text: "Ausrüstung, die Beschäftigte gegen Risiken schützt (z. B. Helm, Handschuhe, Schutzbrille). Der Arbeitgeber muss sie bereitstellen und deren Einsatz in der Gefährdungsbeurteilung berücksichtigen.",
  },
  {
    begriff: "SiGeKo",
    titel: "Sicherheits- und Gesundheitsschutzkoordinator",
    text: "Auf Baustellen mit mehreren Arbeitgebern muss ein SiGeKo bestellt werden. Er koordiniert den Arbeitsschutz, erstellt den SiGePlan und führt die Unternehmerübergabe durch.",
  },
  {
    begriff: "SiGePlan",
    titel: "Sicherheits- und Gesundheitsschutzplan",
    text: "Dokument des SiGeKo, in dem die für die Baustelle relevanten Arbeitsschutz- und Gesundheitsschutzmaßnahmen festgehalten werden. Wird in der Koordinierungsphase erstellt.",
  },
  {
    begriff: "Unternehmerübergabe",
    titel: "Unternehmerübergabe / -abnahme",
    text: "Übergabe der Baustelle bzw. von Teilbereichen an nachfolgende Unternehmen unter Beteiligung des SiGeKo. Dokumentation der Übergabe ist erforderlich.",
  },
  {
    begriff: "Unterweisung",
    titel: "Unterweisung",
    text: "Vom Arbeitgeber zu erteilende, regelmäßige Anleitung der Beschäftigten zu sicherem Verhalten am Arbeitsplatz. Muss dokumentiert werden. Wir bieten Unterweisungen zu Arbeitssicherheit und Brandschutz an.",
  },
  {
    begriff: "VEFK",
    titel: "Verantwortliche Elektrofachkraft",
    text: "Vom Arbeitgeber bestellte Person, die die Verantwortung für die elektrotechnischen Anlagen und Prüfungen trägt. Qualifikation nach DIN VDE 1000-10. Kann extern bestellt werden.",
  },
];

export default function GlossarPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-nrw-gruen">Wissen</p>
      <h1 className="mt-2 text-4xl font-bold text-nrw-grau-900 md:text-5xl">Glossar</h1>
      <p className="mt-6 text-lg text-nrw-grau-600">
        Wichtige Begriffe aus Arbeitssicherheit, Brandschutz und SiGeKo – kurz erklärt.
      </p>
      <ul className="mt-12 space-y-8">
        {BEGRIFFE.map((item) => (
          <li key={item.begriff} className="rounded-2xl border border-nrw-grau-200 bg-white p-6">
            <span className="text-sm font-semibold uppercase tracking-widest text-nrw-gruen">
              {item.begriff}
            </span>
            <h2 className="mt-2 text-xl font-bold text-nrw-grau-900">{item.titel}</h2>
            <p className="mt-3 text-nrw-grau-600">{item.text}</p>
          </li>
        ))}
      </ul>
      <div className="mt-14 rounded-2xl border border-nrw-gruen-hell bg-nrw-gruen-hell p-8">
        <p className="font-semibold text-nrw-grau-900">Individuelle Beratung</p>
        <p className="mt-2 text-nrw-grau-600">
          Sie brauchen Unterstützung bei Arbeitssicherheit, Brandschutz oder SiGeKo? Wir beraten Sie gerne.
        </p>
        <Link
          href="/beratung-buchen"
          className="mt-4 inline-flex items-center gap-2 font-semibold text-nrw-gruen hover:text-nrw-gruen-hover"
        >
          Kostenlose Erstberatung
          <IconArrowRight className="h-5 w-5" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
