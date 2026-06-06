import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { PrimaryCtaLink } from "@/components/PrimaryCtaLink";
import { RegionKoeln } from "@/components/sifa/RegionKoeln";
import { SifaSchemas } from "@/components/sifa/SifaSchemas";
import { SIFA_PAGE_FAQ } from "@/data/sifa-faq";
import { SITE, SIFA_PAGE_PATH } from "@/lib/constants";

const pageUrl = `${SITE.url}${SIFA_PAGE_PATH}`;
const leistungenHref = "/leistungen/arbeitssicherheit";

export const metadata: Metadata = {
  title: "Externe Fachkraft für Arbeitssicherheit Köln | SiFa-Betreuung",
  description:
    "Externe Fachkraft für Arbeitssicherheit (SiFa) in Köln: DGUV-konforme Betreuung, Gefährdungsbeurteilungen, Unterweisungen und Begehungen – feste Ansprechpartner vor Ort.",
  openGraph: {
    title: "Externe Fachkraft für Arbeitssicherheit Köln | SiFa-Betreuung",
    description:
      "SiFa-Betreuung in Köln: gesetzeskonform, individuell und mit festem Ansprechpartner – Gefährdungsbeurteilung, Unterweisungen, Dokumentation.",
    url: pageUrl,
    locale: "de_DE",
    type: "website",
    siteName: SITE.name,
  },
  alternates: { canonical: pageUrl },
};

const leistungen = [
  {
    title: "Gefährdungsbeurteilungen",
    text: "Systematische Ermittlung und Bewertung aller relevanten Gefährdungen – Grundlage für wirksame Schutzmaßnahmen und rechtssichere Nachweise.",
  },
  {
    title: "Sicherheitsbegehungen",
    text: "Regelmäßige Begehungen in Ihrem Betrieb mit dokumentierten Befunden und konkreten Handlungsempfehlungen.",
  },
  {
    title: "Sicherheitsunterweisungen",
    text: "Praxisnahe Unterweisungen für Ihre Beschäftigten – rechtssicher durchgeführt und vollständig dokumentiert.",
  },
  {
    title: "Betriebsanweisungen",
    text: "Erstellung und Aktualisierung von Betriebsanweisungen für Arbeitsmittel, Gefahrstoffe und Tätigkeiten.",
  },
  {
    title: "ASA-Sitzungen",
    text: "Vorbereitung und Mitwirkung bei Arbeitsschutzausschuss-Sitzungen – inklusive Protokollierung.",
  },
  {
    title: "Arbeitsschutzberatung",
    text: "Beratung zu ArbSchG, ASiG, DGUV-Vorschriften und weiteren Anforderungen – verständlich und umsetzbar.",
  },
];

const risikogruppen = [
  { gruppe: "Gruppe I (hohes Risiko)", stunden: "2,5 Stunden", beispiel: "Bau, Metall, Chemie" },
  { gruppe: "Gruppe II (mittleres Risiko)", stunden: "1,5 Stunden", beispiel: "Handwerk, Pflege, Logistik" },
  { gruppe: "Gruppe III (geringes Risiko)", stunden: "0,5 Stunden", beispiel: "Büro, Verwaltung, IT" },
];

const ablauf = [
  {
    num: "1",
    title: "Erstgespräch",
    text: "Kostenloses, unverbindliches Kennenlernen: Wir klären Ihren Betrieb, Ihre Branche und den Betreuungsbedarf.",
  },
  {
    num: "2",
    title: "Angebot & Planung",
    text: "Transparentes Angebot nach DGUV Vorschrift 2 – mit klar definiertem Leistungsumfang und Betreuungsmodell.",
  },
  {
    num: "3",
    title: "Onboarding",
    text: "Bestandsaufnahme Ihrer Arbeitsschutz-Dokumentation, Erstbegehung und Festlegung der Betreuungsroutine.",
  },
  {
    num: "4",
    title: "Laufende Betreuung",
    text: "Regelmäßige Termine, Gefährdungsbeurteilungen, Unterweisungen und Dokumentation – ein fester Ansprechpartner.",
  },
];

const vorteile = [
  {
    title: "Echter Standort in Köln",
    text: "Vor-Ort-Termine, Begehungen und Unterweisungen in Köln und der Region – kurze Wege, persönlicher Kontakt, keine anonyme Ferndienstleistung.",
  },
  {
    title: "Fester Ansprechpartner",
    text: "Sie arbeiten mit einer qualifizierten Fachkraft für Arbeitssicherheit, die Ihren Betrieb und Ihre Abläufe kennt – nicht mit wechselnden Beratern.",
  },
  {
    title: "Individuell statt Standard",
    text: "Leistungsumfang und Betreuungsintensität richten wir an Ihrer Branche, Betriebsgröße und Gefährdungsgruppe aus – kein Einheitsprogramm.",
  },
  {
    title: "Rechtssicher dokumentiert",
    text: "Alle Leistungen werden nachvollziehbar dokumentiert – Sie sind für Berufsgenossenschaften, Behörden und Audits bestens vorbereitet.",
  },
];

const zielgruppen = [
  "Kleine und mittlere Unternehmen ohne eigene SiFa",
  "Handwerksbetriebe, Büros, Produktion und Dienstleistung",
  "Betriebe, die ihre bisherige SiFa-Betreuung wechseln möchten",
  "Unternehmen mit neuen Gefährdungen oder wachsender Belegschaft",
];

export default function SifaLandingPage() {
  return (
    <>
      <SifaSchemas />
      <BreadcrumbJsonLd
        items={[
          { name: "Start", url: "/" },
          { name: "Fachkraft für Arbeitssicherheit Köln", url: SIFA_PAGE_PATH },
        ]}
      />

      <article>
        <section className="bg-nrw-gruen-hell py-16 md:py-24" aria-labelledby="sifa-heading">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-nrw-gruen">SiFa Köln</p>
            <h1 id="sifa-heading" className="mt-3 text-4xl font-bold tracking-tight text-nrw-grau-900 sm:text-5xl">
              Externe Fachkraft für Arbeitssicherheit{" "}
              <span className="text-nrw-gruen">in Köln</span>
            </h1>
            <p className="mt-6 text-lg text-nrw-grau-600 sm:text-xl">
              Als externe SiFa übernehmen wir die gesetzlich geforderte sicherheitstechnische Betreuung Ihres
              Unternehmens in Köln und Umgebung – DGUV-konform, individuell und mit festem Ansprechpartner vor Ort.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <PrimaryCtaLink
                theme="default"
                href="/kontakt"
                className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-full bg-nrw-rot px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-nrw-rot-hover sm:w-auto"
              />
              <Link
                href={leistungenHref}
                className="btn-secondary inline-flex w-full items-center justify-center rounded-full border-2 border-nrw-gruen px-8 py-4 text-base font-semibold text-nrw-gruen hover:bg-nrw-gruen-hell sm:w-auto"
              >
                Alle Leistungen
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20" aria-labelledby="was-ist-sifa">
          <div className="mx-auto max-w-3xl px-4">
            <h2 id="was-ist-sifa" className="text-center text-3xl font-bold text-nrw-grau-900">
              Was ist eine Fachkraft für Arbeitssicherheit?
            </h2>
            <div className="mt-8 space-y-4 leading-relaxed text-nrw-grau-600">
              <p>
                Die <strong className="font-medium text-nrw-grau-800">Fachkraft für Arbeitssicherheit (SiFa)</strong>{" "}
                berät den Arbeitgeber in allen Fragen des Arbeitsschutzes. Nach dem Arbeitssicherheitsgesetz (ASiG) und
                der <strong className="font-medium text-nrw-grau-800">DGUV Vorschrift 2</strong> muss jeder Betrieb mit
                Beschäftigten eine SiFa und einen Betriebsarzt bestellen – unabhängig von der Unternehmensgröße.
              </p>
              <p>
                Die SiFa unterstützt Sie bei der Gefährdungsbeurteilung, bei Unterweisungen, Begehungen und der
                Dokumentation des Arbeitsschutzes. Für die meisten kleinen und mittleren Unternehmen in Köln ist die{" "}
                <strong className="font-medium text-nrw-grau-800">externe Beauftragung</strong> die wirtschaftlichste und
                praktikabelste Lösung.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-nrw-grau-50 py-16 md:py-20" aria-labelledby="intern-extern">
          <div className="mx-auto max-w-6xl px-4">
            <h2 id="intern-extern" className="text-center text-3xl font-bold text-nrw-grau-900">
              Interne oder externe SiFa – was passt zu Ihrem Betrieb?
            </h2>
            <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
              <div className="rounded-2xl border border-nrw-grau-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-nrw-grau-900">Interne SiFa</h3>
                <p className="mt-3 leading-relaxed text-nrw-grau-600">
                  Sinnvoll für größere Betriebe mit eigener qualifizierter Fachkraft und ausreichend Kapazität. Erfordert
                  Ausbildung, Fortbildung und Vertretungsregelung bei Abwesenheit.
                </p>
              </div>
              <div className="rounded-2xl border-2 border-nrw-gruen bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-nrw-gruen">Externe SiFa (unser Angebot)</h3>
                <p className="mt-3 leading-relaxed text-nrw-grau-600">
                  Die übliche Lösung für KMU in Köln: fachkundige Betreuung ohne eigene Einstellung, mit festem
                  Ansprechpartner und skalierbarem Leistungsumfang – rechtssicher und kalkulierbar.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20" aria-labelledby="leistungen-sifa">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 id="leistungen-sifa" className="text-3xl font-bold text-nrw-grau-900">
                Leistungen Ihrer externen Fachkraft für Arbeitssicherheit
              </h2>
              <p className="mt-4 text-lg text-nrw-grau-600">
                Umfassende sicherheitstechnische Betreuung in Köln – von der Gefährdungsbeurteilung bis zur vollständigen
                Dokumentation.
              </p>
            </div>
            <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {leistungen.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col rounded-2xl border border-nrw-grau-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-nrw-grau-900">{item.title}</h3>
                  <p className="mt-2 flex-1 text-nrw-grau-600">{item.text}</p>
                  <Link href={leistungenHref} className="mt-4 inline-flex text-sm font-medium text-nrw-gruen hover:underline">
                    Details →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-nrw-grau-50 py-16 md:py-20" aria-labelledby="fuer-wen">
          <div className="mx-auto max-w-3xl px-4">
            <h2 id="fuer-wen" className="text-center text-3xl font-bold text-nrw-grau-900">
              Für wen eignet sich unsere SiFa-Betreuung in Köln?
            </h2>
            <ul className="mt-8 space-y-3" role="list">
              {zielgruppen.map((item) => (
                <li key={item} className="flex items-start gap-3 text-nrw-grau-600">
                  <span
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-nrw-gruen text-xs font-bold text-white"
                    aria-hidden
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20" aria-labelledby="kosten-sifa">
          <div className="mx-auto max-w-3xl px-4">
            <h2 id="kosten-sifa" className="text-center text-3xl font-bold text-nrw-grau-900">
              Kosten: Betreuungsumfang nach DGUV Vorschrift 2
            </h2>
            <p className="mt-4 text-center text-lg text-nrw-grau-600">
              Die Grundbetreuung richtet sich nach der Gefährdungsgruppe Ihres Betriebs. Zusätzliche Leistungen wie
              Gefährdungsbeurteilungen, Unterweisungen oder Begehungen kommen darüber hinaus.
            </p>
            <div className="mt-10 overflow-x-auto rounded-2xl border border-nrw-grau-200">
              <table className="w-full min-w-[28rem] text-left text-sm">
                <thead>
                  <tr className="border-b border-nrw-grau-200 bg-nrw-grau-50">
                    <th scope="col" className="px-4 py-3 font-semibold text-nrw-grau-900">
                      Gefährdungsgruppe
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold text-nrw-grau-900">
                      Grundbetreuung pro Beschäftigtem/Jahr
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold text-nrw-grau-900">
                      Typische Branchen
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-nrw-grau-200">
                  {risikogruppen.map((row) => (
                    <tr key={row.gruppe}>
                      <td className="px-4 py-3 text-nrw-grau-800">{row.gruppe}</td>
                      <td className="px-4 py-3 font-medium text-nrw-gruen">{row.stunden}</td>
                      <td className="px-4 py-3 text-nrw-grau-600">{row.beispiel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-center text-sm text-nrw-grau-600">
              <strong className="font-medium text-nrw-grau-800">Beispiel:</strong> Ein Kölner Dienstleistungsbetrieb mit
              40 Beschäftigten (Gruppe III) hat eine jährliche Grundbetreuung von 20 Stunden (40 × 0,5 h).
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/blog/externe-fachkraft-arbeitssicherheit-koeln" className="font-medium text-nrw-gruen hover:underline">
                Ratgeber: Externe Fachkraft Köln →
              </Link>
              <Link href="/faq" className="font-medium text-nrw-gruen hover:underline">
                FAQ zu SiFa-Kosten →
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-nrw-grau-50 py-16 md:py-20" aria-labelledby="ablauf-sifa">
          <div className="mx-auto max-w-6xl px-4">
            <h2 id="ablauf-sifa" className="text-center text-3xl font-bold text-nrw-grau-900">
              So starten Sie mit Ihrer externen SiFa in Köln
            </h2>
            <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" role="list">
              {ablauf.map((step) => (
                <li key={step.num} className="flex flex-col rounded-2xl border border-nrw-grau-200 bg-white p-6 shadow-sm">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-nrw-gruen text-lg font-bold text-white"
                    aria-hidden
                  >
                    {step.num}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-nrw-grau-900">{step.title}</h3>
                  <p className="mt-2 flex-1 text-nrw-grau-600">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20" aria-labelledby="warum-sifa">
          <div className="mx-auto max-w-6xl px-4">
            <h2 id="warum-sifa" className="text-center text-3xl font-bold text-nrw-grau-900">
              Warum wir als Ihre externe SiFa in Köln?
            </h2>
            <ul className="mt-14 grid gap-8 sm:grid-cols-2" role="list">
              {vorteile.map((item) => (
                <li key={item.title} className="rounded-2xl border border-nrw-grau-200 bg-nrw-grau-50 p-6">
                  <h3 className="text-lg font-semibold text-nrw-grau-900">{item.title}</h3>
                  <p className="mt-2 text-nrw-grau-600">{item.text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-center">
              <Link href="/ueber-uns" className="font-medium text-nrw-gruen hover:underline">
                Mehr über uns erfahren →
              </Link>
            </p>
          </div>
        </section>

        <RegionKoeln />

        <section className="bg-nrw-grau-50 py-16 md:py-20" aria-labelledby="faq-sifa">
          <div className="mx-auto max-w-3xl px-4">
            <header className="text-center">
              <h2 id="faq-sifa" className="text-3xl font-bold text-nrw-grau-900">
                Häufige Fragen zur Fachkraft für Arbeitssicherheit in Köln
              </h2>
              <p className="mt-4 text-lg text-nrw-grau-600">
                Antworten zu SiFa-Pflicht, Kosten, Betreuungsumfang und dem Unterschied zwischen interner und externer
                Betreuung.
              </p>
            </header>
            <div className="mt-12 rounded-2xl border border-nrw-grau-200 bg-white shadow-sm">
              {SIFA_PAGE_FAQ.map((item, i) => (
                <details
                  key={item.question}
                  className="group border-b border-nrw-grau-200 px-6 last:border-0 open:pb-5"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 marker:content-none [&::-webkit-details-marker]:hidden">
                    <h3 className="text-left font-semibold text-nrw-grau-900">{item.question}</h3>
                    <span className="shrink-0 text-nrw-grau-400" aria-hidden>
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">−</span>
                    </span>
                  </summary>
                  <p id={`sifa-faq-${i}`} className="pb-1 leading-relaxed text-nrw-grau-600">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-nrw-gruen-hell py-16 md:py-20" aria-labelledby="cta-sifa">
          <div className="mx-auto max-w-xl px-4 text-center">
            <h2 id="cta-sifa" className="text-2xl font-bold text-nrw-grau-900 sm:text-3xl">
              Externe Fachkraft für Arbeitssicherheit in Köln anfragen
            </h2>
            <p className="mt-4 text-nrw-grau-600">
              Vereinbaren Sie ein unverbindliches Erstgespräch. Wir besprechen Ihren Betrieb, klären den Betreuungsbedarf
              und erstellen ein transparentes Angebot.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <PrimaryCtaLink
                theme="default"
                href="/kontakt"
                className="btn-primary inline-flex items-center gap-2 rounded-full bg-nrw-rot px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-nrw-rot-hover"
              />
              <Link
                href={leistungenHref}
                className="btn-secondary inline-flex items-center rounded-full border-2 border-nrw-gruen px-8 py-4 text-base font-semibold text-nrw-gruen hover:bg-white"
              >
                SiFa im Leistungsüberblick
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
