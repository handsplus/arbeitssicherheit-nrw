"use client";

import { useState } from "react";
import Link from "next/link";

const FAQ_ITEMS = [
  {
    category: "Arbeitssicherheit",
    q: "Braucht unser Unternehmen eine Fachkraft für Arbeitssicherheit?",
    a: "Nach dem Arbeitssicherheitsgesetz (ASiG) und der DGUV Vorschrift 2 müssen Arbeitgeber Betriebe mit Beschäftigten durch eine Fachkraft für Arbeitssicherheit (FaSi) und einen Betriebsarzt betreiben lassen. Die Betreuung kann extern erfolgen – wir übernehmen das für Sie.",
  },
  {
    category: "Arbeitssicherheit",
    q: "Was macht eine externe Fachkraft für Arbeitssicherheit?",
    a: "Die FaSi berät in allen Fragen der Arbeitssicherheit, unterstützt bei der Gefährdungsbeurteilung, bei Betriebsbegehungen, Unterweisungen und der Umsetzung von Maßnahmen. Sie arbeitet mit dem Betriebsarzt und dem Arbeitgeber zusammen.",
  },
  {
    category: "SiGeKo",
    q: "Was ist SiGeKo und wann wird sie benötigt?",
    a: "SiGeKo steht für Sicherheits- und Gesundheitsschutzkoordination. Auf Baustellen mit mehreren Arbeitgebern muss ein SiGeKo bestellt werden. Er koordiniert die Arbeitssicherheit, erstellt den SiGePlan und führt die Unternehmerübergabe durch.",
  },
  {
    category: "Brandschutz",
    q: "Wann brauchen wir einen Brandschutzbeauftragten?",
    a: "Die Bestellung eines Brandschutzbeauftragten kann sich aus Rechtsvorschriften, Auflagen oder betrieblicher Entscheidung ergeben. Wir beraten Sie, ob und in welchem Umfang ein Brandschutzbeauftragter erforderlich ist, und übernehmen die Rolle extern.",
  },
  {
    category: "Brandschutz",
    q: "Was umfasst ein Brandschutzkonzept?",
    a: "Ein Brandschutzkonzept beschreibt die geplanten Maßnahmen im baulichen, anlagentechnischen und organisatorischen Brandschutz. Es wird oft bei Neubau, Umbau oder Sonderbauten von Behörden gefordert. Wir erstellen und begleiten solche Konzepte.",
  },
  {
    category: "Elektrosicherheit",
    q: "Wie oft müssen Elektrogeräte geprüft werden?",
    a: "Die Prüffristen hängen von der Art der Betriebsmittel und der Umgebung ab (z. B. DGUV Vorschrift 3). Ortsveränderliche Geräte werden oft in Abständen von 6–24 Monaten geprüft. Wir führen die Prüfungen durch und dokumentieren sie.",
  },
];

function FaqEntry({ item, index }: { item: (typeof FAQ_ITEMS)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${index}`;
  return (
    <div className="border-b border-nrw-grau-200 last:border-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
        aria-controls={`${id}-answer`}
        id={`${id}-question`}
      >
        <span className="font-semibold text-nrw-grau-900">{item.q}</span>
        <span className="shrink-0 text-nrw-grau-400" aria-hidden>{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div id={`${id}-answer`} className="pb-5 text-nrw-grau-600" role="region" aria-labelledby={`${id}-question`}>
          <span className="text-xs font-medium text-nrw-gruen">{item.category}</span>
          <p className="mt-2">{item.a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-nrw-gruen">FAQ</p>
      <h1 className="mt-2 text-4xl font-bold text-nrw-grau-900">Häufige Fragen</h1>
      <p className="mt-6 text-lg text-nrw-grau-600">
        Kurze Antworten zu FaSi, SiGeKo, Brandschutz und Elektrosicherheit.
      </p>
      <div className="mt-12 rounded-2xl border border-nrw-grau-200 bg-white shadow-sm">
        {FAQ_ITEMS.map((item, i) => (
          <FaqEntry key={i} item={item} index={i} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/beratung-buchen"
          className="inline-flex items-center gap-2 rounded-full bg-nrw-rot px-8 py-4 font-semibold text-white hover:bg-nrw-rot-hover"
        >
          Kostenlose Erstberatung buchen
        </Link>
      </div>
    </div>
  );
}
