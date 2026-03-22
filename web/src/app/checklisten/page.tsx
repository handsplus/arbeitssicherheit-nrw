"use client";

import { useState } from "react";
import Link from "next/link";
import { PrimaryCtaLink } from "@/components/PrimaryCtaLink";

const GEFAHREN = [
  "Gefährdungsbeurteilung liegt vor und ist aktuell?",
  "Unterweisungen sind dokumentiert und wiederholt?",
  "Betriebsbegehungen durchgeführt?",
  "Arbeitsmittel/PSA geprüft und dokumentiert?",
  "Notfall- und Evakuierungsplan bekannt?",
];

const BRANDSCHUTZ = [
  "Brandschutzordnung (Teil A–C) vorhanden?",
  "Fluchtwege gekennzeichnet und freigehalten?",
  "Brandschutzunterweisung durchgeführt?",
  "Feuerlöscher zugänglich und geprüft?",
  "Alarmanlage / Melder funktionsfähig?",
];

const SIGEKO = [
  "SiGeKo für Baustelle bestellt?",
  "Sicherheits- und Gesundheitsschutzplan (SiGePlan) erstellt?",
  "Unternehmerübergabe / -abnahme dokumentiert?",
  "Koordinierungsphase eingehalten?",
];

function ChecklistSection({
  title,
  items,
  onToggle,
}: {
  title: string;
  items: string[];
  onToggle: (index: number) => void;
}) {
  const [state, setState] = useState<boolean[]>(items.map(() => false));

  const toggle = (index: number) => {
    const next = [...state];
    next[index] = !next[index];
    setState(next);
    onToggle(index);
  };

  const done = state.filter(Boolean).length;
  const total = items.length;

  return (
    <section className="rounded-2xl border border-nrw-grau-200 bg-white p-8">
      <h2 className="text-xl font-bold text-nrw-grau-900">{title}</h2>
      <p className="mt-2 text-sm text-nrw-grau-400">
        {done} von {total} erfüllt
      </p>
      <ul className="mt-6 space-y-4">
        {items.map((text, i) => (
          <li key={i} className="flex items-start gap-3">
            <button
              type="button"
              onClick={() => toggle(i)}
              className={`mt-0.5 h-6 w-6 shrink-0 rounded-md border-2 ${
                state[i] ? "border-nrw-gruen bg-nrw-gruen text-white" : "border-nrw-grau-200"
              }`}
              aria-label={state[i] ? "Als erledigt markieren" : "Als offen markieren"}
            >
              {state[i] ? "✓" : ""}
            </button>
            <span className={state[i] ? "text-nrw-grau-400 line-through" : "text-nrw-grau-800"}>
              {text}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ChecklistenPage() {
  const [toggleLog, setToggleLog] = useState<string>("");

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-nrw-gruen">Checklisten</p>
      <h1 className="mt-2 text-4xl font-bold text-nrw-grau-900">Selbstbewertung</h1>
      <p className="mt-6 text-lg text-nrw-grau-600">
        Erste Einschätzung für Ihren Betrieb – keine Fachberatung. Wir unterstützen Sie gerne bei der vollständigen Umsetzung.
      </p>
      <div className="mt-14 space-y-10">
        <ChecklistSection
          title="Arbeitssicherheit / Gefährdungsbeurteilung"
          items={GEFAHREN}
          onToggle={() => setToggleLog("a")}
        />
        <ChecklistSection
          title="Brandschutz"
          items={BRANDSCHUTZ}
          onToggle={() => setToggleLog("b")}
        />
        <ChecklistSection
          title="SiGeKo (Baustelle)"
          items={SIGEKO}
          onToggle={() => setToggleLog("c")}
        />
      </div>
      <div className="mt-14 rounded-2xl border border-nrw-gruen-hell bg-nrw-gruen-hell p-8">
        <h2 className="text-lg font-bold text-nrw-grau-900">Professionelle Unterstützung</h2>
        <p className="mt-3 text-nrw-grau-600">
          Gefährdungsbeurteilung, Brandschutz oder SiGeKo für Ihre Baustelle – wir beraten Sie gerne.
        </p>
        <PrimaryCtaLink
          theme="default"
          showIcon={false}
          className="mt-6 inline-block rounded-full bg-nrw-rot px-6 py-3 font-semibold text-white hover:bg-nrw-rot-hover"
        />
      </div>
    </div>
  );
}
