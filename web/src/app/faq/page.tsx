"use client";

import Link from "next/link";
import { useState } from "react";
import { PrimaryCtaLink } from "@/components/PrimaryCtaLink";
import { FAQ_ITEMS } from "@/data/faq-items";

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
        <span className="shrink-0 text-nrw-grau-400" aria-hidden>
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div
          id={`${id}-answer`}
          className="pb-5 text-nrw-grau-600"
          role="region"
          aria-labelledby={`${id}-question`}
        >
          <span className="text-xs font-medium text-nrw-gruen">{item.category}</span>
          <p className="mt-2 leading-relaxed">{item.a}</p>
          {item.related?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="inline-flex items-center rounded-full border border-nrw-grau-200 bg-nrw-grau-50 px-3 py-1.5 text-sm font-medium text-nrw-grau-800 hover:border-nrw-gruen hover:text-nrw-gruen"
                >
                  {r.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <p className="text-sm font-semibold uppercase tracking-widest text-nrw-gruen">FAQ</p>
      <h1 className="mt-2 text-4xl font-bold text-nrw-grau-900">
        FAQ: Arbeitssicherheit Köln, Arbeitsschutz, Brandschutz &amp; SiGeKo NRW
      </h1>
      <p className="mt-6 text-lg text-nrw-grau-600">
        Ausführliche Antworten zu externer Fachkraft für Arbeitssicherheit (FaSi), Gefährdungsbeurteilung,
        Brandschutzbeauftragtem, SiGeKo auf der Baustelle, Elektrosicherheit und Managementsystemen – mit
        direkten Links zu Leistungen, Blog und Erstberatung.
      </p>
      <p className="mt-4 text-sm text-nrw-grau-500">
        Rechtliche Einzelfälle ersetzt keine Website; wir beraten Sie gern konkret zu Ihrem Betrieb in
        Köln und NRW.
      </p>
      <div className="mt-12 rounded-2xl border border-nrw-grau-200 bg-white shadow-sm">
        {FAQ_ITEMS.map((item, i) => (
          <FaqEntry key={item.q} item={item} index={i} />
        ))}
      </div>
      <div className="mt-10 flex flex-wrap gap-3 text-sm">
        <Link href="/blog" className="font-medium text-nrw-gruen hover:underline">
          Blog mit Praxisartikeln
        </Link>
        <span className="text-nrw-grau-300">·</span>
        <Link href="/wissen" className="font-medium text-nrw-gruen hover:underline">
          Wissen & Ressourcen
        </Link>
        <span className="text-nrw-grau-300">·</span>
        <Link href="/leistungen" className="font-medium text-nrw-gruen hover:underline">
          Alle Leistungen
        </Link>
      </div>
      <div className="mt-12 text-center">
        <PrimaryCtaLink
          theme="default"
          showIcon={false}
          className="inline-flex items-center justify-center rounded-full bg-nrw-rot px-8 py-4 font-semibold text-white hover:bg-nrw-rot-hover"
        />
      </div>
    </div>
  );
}
