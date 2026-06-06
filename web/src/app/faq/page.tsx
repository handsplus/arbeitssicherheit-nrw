import Link from "next/link";
import { FaqCta } from "@/components/FaqCta";
import { FAQ_ITEMS } from "@/data/faq-items";

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
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
          <details
            key={item.q}
            className="group border-b border-nrw-grau-200 px-6 last:border-0 open:pb-5"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 marker:content-none [&::-webkit-details-marker]:hidden">
              <h2 className="text-left font-semibold text-nrw-grau-900">{item.q}</h2>
              <span
                className="shrink-0 text-nrw-grau-400 transition group-open:rotate-0"
                aria-hidden
              >
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">−</span>
              </span>
            </summary>
            <div id={`faq-answer-${i}`} className="pb-1 text-nrw-grau-600">
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
          </details>
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
      <FaqCta />
    </div>
  );
}
