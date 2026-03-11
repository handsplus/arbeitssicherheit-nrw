"use client";

import { useState } from "react";

const THEMEN = [
  "Arbeitssicherheit",
  "Brandschutz",
  "Schulungen",
  "Elektrosicherheit",
  "SiGeKo",
  "Managementsysteme (ISO 45001, ISO 14001)",
  "Sonstiges",
];

const FORMSPREE_FORM_ID = (process.env.NEXT_PUBLIC_FORMSPREE_BERATUNG_ID ?? "").trim();

export function BeratungForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target as HTMLFormElement;
    const body = {
      thema: (form.elements.namedItem("thema") as HTMLSelectElement).value,
      vorname: (form.elements.namedItem("vorname") as HTMLInputElement).value,
      nachname: (form.elements.namedItem("nachname") as HTMLInputElement).value,
      firma: (form.elements.namedItem("firma") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      telefon: (form.elements.namedItem("telefon") as HTMLInputElement).value,
      nachricht: (form.elements.namedItem("nachricht") as HTMLTextAreaElement).value,
    };
    const url = FORMSPREE_FORM_ID
      ? `https://formspree.io/f/${FORMSPREE_FORM_ID}`
      : "/api/beratung";
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(FORMSPREE_FORM_ID ? { Accept: "application/json" } : {}),
        },
        body: JSON.stringify(body),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error ?? "Fehler beim Senden");
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-nrw-grau-200 bg-white px-4 py-3 text-nrw-grau-900 focus:border-nrw-gruen focus:outline-none focus:ring-2 focus:ring-nrw-gruen/20";
  const labelClass = "mb-1.5 block text-sm font-medium text-nrw-grau-800";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="thema" className={labelClass}>
          Thema / Anliegen
        </label>
        <select
          id="thema"
          name="thema"
          required
          className={inputClass}
        >
          <option value="">Bitte wählen</option>
          {THEMEN.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="vorname" className={labelClass}>Vorname</label>
          <input id="vorname" name="vorname" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="nachname" className={labelClass}>Nachname</label>
          <input id="nachname" name="nachname" type="text" required className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="firma" className={labelClass}>Firma (optional)</label>
        <input id="firma" name="firma" type="text" className={inputClass} />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>E-Mail</label>
        <input id="email" name="email" type="email" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="telefon" className={labelClass}>Telefon</label>
        <input id="telefon" name="telefon" type="tel" className={inputClass} />
      </div>
      <div>
        <label htmlFor="nachricht" className={labelClass}>Kurze Beschreibung / Wunschtermin</label>
        <textarea
          id="nachricht"
          name="nachricht"
          rows={3}
          className={inputClass}
          placeholder="z.B. gewünschter Zeitraum für Rückruf"
        />
      </div>
      {status === "success" && (
        <p className="rounded-xl bg-nrw-gruen-hell p-4 text-sm font-medium text-nrw-gruen-hover">
          Vielen Dank! Wir melden uns zeitnah bei Ihnen.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-xl bg-nrw-rot-hell p-4 text-sm font-medium text-nrw-rot">
          Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder rufen Sie uns an.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-nrw-rot px-6 py-4 font-semibold text-white hover:bg-nrw-rot-hover disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? "Wird gesendet…" : "Kostenlose Erstberatung anfragen"}
      </button>
    </form>
  );
}
