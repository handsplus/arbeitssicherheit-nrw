import type { ReactNode } from "react";

export function BlogLead({ children }: { children: ReactNode }) {
  return <p className="text-lg text-nrw-grau-800">{children}</p>;
}

export function BlogH2({ children }: { children: ReactNode }) {
  return <h2 className="mt-10 text-xl font-bold text-nrw-grau-900 md:text-2xl">{children}</h2>;
}

export function BlogH3({ children }: { children: ReactNode }) {
  return <h3 className="mt-6 text-lg font-semibold text-nrw-grau-900">{children}</h3>;
}

export function BlogList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-inside list-disc space-y-2 pl-2">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function BlogLegalRef({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-lg border-l-4 border-nrw-gruen bg-nrw-grau-50 px-4 py-3 text-sm text-nrw-grau-700">
      <span className="font-semibold text-nrw-grau-900">Rechtsgrundlage: </span>
      {children}
    </p>
  );
}

/** Wortlaut aus der lokalen Gesetze-Vorschriften-Sammlung (per pdf-parse extrahiert) */
export function BlogGesetzesZitat({
  paragraph,
  quote,
  source,
}: {
  paragraph: string;
  quote: string;
  source: string;
}) {
  return (
    <blockquote className="my-4 border-l-4 border-nrw-gruen/60 bg-white px-4 py-3 not-italic shadow-sm">
      <p className="text-sm font-semibold text-nrw-grau-900">{paragraph}</p>
      <p className="mt-2 text-sm leading-relaxed text-nrw-grau-700">&bdquo;{quote}&ldquo;</p>
      <footer className="mt-2 text-xs text-nrw-grau-500">
        Quelle (lokale Sammlung): {source}
      </footer>
    </blockquote>
  );
}

export function BlogTakeaway({ children }: { children: ReactNode }) {
  return (
    <div className="mt-10 rounded-xl border border-nrw-gruen/30 bg-nrw-gruen/5 p-5 md:p-6">
      <p className="text-sm font-bold uppercase tracking-wide text-nrw-gruen">Praxis-Fazit</p>
      <div className="mt-2 text-nrw-grau-800">{children}</div>
    </div>
  );
}

export function BlogDisclaimer() {
  return (
    <p className="mt-10 text-sm text-nrw-grau-500">
      Hinweis: Dieser Artikel ersetzt keine Rechtsberatung. Für Ihren Betrieb in Köln oder NRW
      prüfen wir Gefährdungsbeurteilung, Unterweisungen und Nachweise im konkreten Einzelfall.
    </p>
  );
}

export function BlogArticleShell({ children }: { children: ReactNode }) {
  return <div className="space-y-6 text-nrw-grau-700 leading-relaxed">{children}</div>;
}
