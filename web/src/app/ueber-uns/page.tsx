import Link from "next/link";
import { CONTACT, LEISTUNGEN, SITE } from "@/lib/constants";

export const metadata = {
  title: "Über uns – Ihr Partner für Arbeitssicherheit in NRW",
  description: "Arbeitssicherheit.nrw: Ihr Partner für Arbeitssicherheit, Brandschutz und SiGeKo in Köln und Nordrhein-Westfalen.",
  alternates: { canonical: `${SITE.url}/ueber-uns` },
};

export default function UeberUnsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-nrw-gruen">Über uns</p>
      <h1 className="mt-2 text-4xl font-bold text-nrw-grau-900 md:text-5xl">
        Ihr Partner für Arbeitssicherheit in NRW
      </h1>
      <div className="mt-6 max-w-3xl space-y-5 text-lg leading-relaxed text-nrw-grau-600">
        <p>
          Wir bieten maßgeschneiderte Lösungen in den Bereichen Arbeitssicherheit, Brandschutz,
          Elektrosicherheit, Managementsysteme und Schulungen. Als qualifiziertes
          Dienstleistungsunternehmen unterstützen wir Sie darin, gesetzliche Anforderungen zu
          erfüllen, Prozesse zu verbessern und Qualitätsstandards einzuhalten. Über die
          Arbeitssicherheit hinaus sorgen wir für einen nachhaltigen betrieblichen
          Gesundheitsschutz – zum Vorteil von Unternehmen und Beschäftigten.
        </p>
        <p>
          Seit vielen Jahren betreuen wir Konzerne, mittelständische Unternehmen und Kleinbetriebe
          in Nordrhein-Westfalen und darüber hinaus. Unsere Fachkompetenz in Arbeitssicherheit,
          Brandschutz, Elektrosicherheit und Managementsystemen setzen wir in praxisnahe Lösungen
          um. Im Brandschutz übernehmen wir die Erstellung von Brandschutzkonzepten,
          Gefährdungsbeurteilungen, behördliche Abstimmungen und Schulungen. Regelmäßige Prüfungen
          und Begehungen stellen sicher, dass alle Sicherheitsmaßnahmen wirksam umgesetzt werden.
        </p>
        <p>
          Unsere langjährige Erfahrung im HSEQ-Management (Health, Safety, Environment, Quality)
          bringt Ihnen Rechtssicherheit, optimierte Betriebsabläufe und reduzierte Folgekosten.
          Dazu zählen technische Prüfungen, Dokumentationen sowie die Entwicklung und
          Implementierung von Managementsystemen nach internationalen und nationalen Standards.
          Mit fundierter Expertise, individuellen Lösungen und ganzheitlicher Betreuung stehen wir
          Ihnen als verlässlicher Partner zur Seite.
        </p>
        <div className="mt-6">
          <h2 className="text-base font-semibold text-nrw-grau-900">Unsere Qualifikationen</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-lg text-nrw-grau-600">
            <li>Studium Qualität, Umwelt, Sicherheit &amp; Hygiene (B.Sc.)</li>
            <li>Fachkraft für Arbeitssicherheit gemäß § 7 ASiG</li>
            <li>Brandschutzbeauftragter &amp; Brandschutzmanager (VdS)</li>
            <li>Brandschutz in Versammlungsstätten (VdS)</li>
            <li>HSE-Manager (DEKRA)</li>
            <li>Arbeitsschutzmanager nach DIN ISO 45001 (TÜV)</li>
            <li>Sicherheits- und Gesundheitsschutzkoordinator (TÜV)</li>
            <li>Betriebsbeauftragter für Gewässerschutz</li>
            <li>
              Zertifizierter Sachverständiger und Gutachter für Elektrotechnik und Arbeitsschutz
            </li>
            <li>IQPR Certified Profiler (IMBA)</li>
          </ul>
        </div>
      </div>
      <div className="mt-14">
        <h2 className="text-2xl font-bold text-nrw-grau-900">Leistungen im Überblick</h2>
        <ul className="mt-6 space-y-3">
          {LEISTUNGEN.map((l) => (
            <li key={l.slug}>
              <Link href={l.href} className="text-nrw-grau-600 hover:text-nrw-gruen">
                {l.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-14 rounded-2xl border border-nrw-grau-200 bg-nrw-grau-50 p-8">
        <h2 className="text-lg font-bold text-nrw-grau-900">Kontakt</h2>
        <p className="mt-4 text-nrw-grau-600">
          {CONTACT.company}
          <br />
          {CONTACT.address}, {CONTACT.zip} {CONTACT.city}
          <br />
          <a href={CONTACT.phoneHref} className="font-medium text-nrw-gruen hover:underline">
            {CONTACT.phone}
          </a>
          {" · "}
          <a href={CONTACT.emailHref} className="font-medium text-nrw-gruen hover:underline">
            {CONTACT.email}
          </a>
        </p>
      </div>
      <p className="mt-10 text-sm text-nrw-grau-400">
        <Link href="/impressum" className="hover:text-nrw-gruen">Impressum</Link>
        {" · "}
        <Link href="/datenschutz" className="hover:text-nrw-gruen">Datenschutz</Link>
      </p>
    </div>
  );
}
