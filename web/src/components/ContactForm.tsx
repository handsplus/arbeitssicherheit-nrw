"use client";

import { useState } from "react";

const FORMSPREE_FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_KONTAKT_ID ?? "";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const body = {
      vorname: (form.elements.namedItem("vorname") as HTMLInputElement).value,
      nachname: (form.elements.namedItem("nachname") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      mitteilung: (form.elements.namedItem("mitteilung") as HTMLTextAreaElement).value,
    };
    const url = FORMSPREE_FORM_ID
      ? `https://formspree.io/f/${FORMSPREE_FORM_ID}`
      : "/api/contact";
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
    "w-full rounded-xl border border-nrw-grau-200 bg-white px-4 py-3 text-nrw-grau-900 placeholder:text-nrw-grau-400 focus:border-nrw-gruen focus:outline-none focus:ring-2 focus:ring-nrw-gruen/20";
  const labelClass = "mb-1.5 block text-sm font-medium text-nrw-grau-800";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h3 className="text-lg font-bold text-nrw-grau-900">Nachricht senden</h3>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="vorname" className={labelClass}>
            Vorname
          </label>
          <input
            id="vorname"
            name="vorname"
            type="text"
            required
            className={inputClass}
            placeholder="Max"
          />
        </div>
        <div>
          <label htmlFor="nachname" className={labelClass}>
            Nachname
          </label>
          <input
            id="nachname"
            name="nachname"
            type="text"
            required
            className={inputClass}
            placeholder="Mustermann"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>
          E-Mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={inputClass}
          placeholder="ihre@email.de"
        />
      </div>
      <div>
        <label htmlFor="mitteilung" className={labelClass}>
          Ihre Nachricht
        </label>
        <textarea
          id="mitteilung"
          name="mitteilung"
          rows={4}
          required
          className={inputClass}
          placeholder="Wie können wir Sie unterstützen?"
        />
      </div>
      {status === "success" && (
        <p
          role="status"
          aria-live="polite"
          className="rounded-xl bg-nrw-gruen-hell p-4 text-sm font-medium text-nrw-gruen-hover"
        >
          Vielen Dank! Wir melden uns zeitnah bei Ihnen.
        </p>
      )}
      {status === "error" && (
        <p
          role="alert"
          aria-live="assertive"
          className="rounded-xl bg-nrw-rot-hell p-4 text-sm font-medium text-nrw-rot"
        >
          Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder rufen Sie uns an.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        aria-busy={status === "sending"}
        className="w-full rounded-full bg-nrw-gruen px-6 py-4 font-semibold text-white hover:bg-nrw-gruen-hover disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? "Wird gesendet…" : "Nachricht senden"}
      </button>
    </form>
  );
}
