"use client";

import { useState } from "react";
import { IconCalculator } from "@/components/Icons";

export function BrandschutzhelferRechner() {
  const [mitarbeiter, setMitarbeiter] = useState<number>(50);
  const [anteil, setAnteil] = useState<number>(100);

  const anzahlHelfer = Math.max(1, Math.ceil((mitarbeiter * (anteil / 100)) / 50));
  const mindestHelfer = Math.max(1, Math.ceil((mitarbeiter * (anteil / 100)) * 0.05));

  return (
    <section className="rounded-2xl border border-nrw-grau-200 bg-white p-8">
      <h2 className="flex items-center gap-3 text-2xl font-bold text-nrw-grau-900">
        <IconCalculator className="h-8 w-8 text-nrw-gruen" aria-hidden />
        Anzahl Brandschutzhelfer (ASR A2.2)
      </h2>
      <p className="mt-3 text-nrw-grau-600">
        Nach ASR A2.2 „Maßnahmen gegen Brände“ müssen ausreichend Brandschutzhelfer ausgebildet sein. Orientierung: mind. 5 % der Beschäftigten bzw. 1 Helfer pro 50 Beschäftigte – der höhere Wert gilt.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="mitarbeiter" className="mb-2 block font-medium text-nrw-grau-800">
            Anzahl der Beschäftigten
          </label>
          <input
            id="mitarbeiter"
            type="number"
            min={1}
            max={10000}
            value={mitarbeiter}
            onChange={(e) => setMitarbeiter(Number(e.target.value) || 1)}
            className="w-full rounded-xl border border-nrw-grau-200 px-4 py-3 text-nrw-grau-900"
          />
        </div>
        <div>
          <label htmlFor="anteil" className="mb-2 block font-medium text-nrw-grau-800">
            Anteil anwesend (z. B. Schicht) in %
          </label>
          <input
            id="anteil"
            type="number"
            min={1}
            max={100}
            value={anteil}
            onChange={(e) => setAnteil(Number(e.target.value) || 100)}
            className="w-full rounded-xl border border-nrw-grau-200 px-4 py-3 text-nrw-grau-900"
          />
        </div>
      </div>
      <div className="mt-6 rounded-xl bg-nrw-gruen-hell p-6">
        <p className="text-sm font-semibold text-nrw-grau-600">Orientierungswert</p>
        <p className="mt-1 text-3xl font-bold text-nrw-gruen">
          mind. {Math.max(anzahlHelfer, mindestHelfer)} Brandschutzhelfer
        </p>
        <p className="mt-2 text-sm text-nrw-grau-600">
          (1 pro 50 Beschäftigte bzw. 5 % – es gilt der höhere Wert; bei {mitarbeiter} Beschäftigten: 1 pro 50 = {anzahlHelfer}, 5 % = {mindestHelfer})
        </p>
      </div>
      <p className="mt-4 text-sm text-nrw-grau-400">
        Unverbindliche Orientierung. Maßgeblich sind ASR A2.2 und die Gefährdungsbeurteilung. Wir beraten Sie gerne.
      </p>
    </section>
  );
}
