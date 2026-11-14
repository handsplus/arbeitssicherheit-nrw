import Link from "next/link";
import { SITE } from "@/lib/constants";
import { IconArrowRight } from "@/components/Icons";
import { BrandschutzhelferRechner } from "@/components/BrandschutzhelferRechner";
import { pageSocialMeta } from "@/lib/page-metadata";

const title = "Rechner – Brandschutzhelfer & SiGeKo-Honorar";
const description =
  "Kostenlose Orientierung: Brandschutzhelfer-Rechner nach ASR A2.2 und Hinweise zu Einsatzzeiten nach DGUV Vorschrift 2 für Köln und NRW.";

export const metadata = {
  title,
  description,
  alternates: { canonical: `${SITE.url}/rechner` },
  ...pageSocialMeta({ path: "/rechner", title, description }),
};

export default function RechnerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-nrw-gruen">Rechner</p>
      <h1 className="mt-2 text-4xl font-bold text-nrw-grau-900 md:text-5xl">
        Nützliche Berechnungen
      </h1>
      <p className="mt-6 text-lg text-nrw-grau-600">
        Orientierungshilfen für Brandschutzhelfer und SiGeKo – unverbindlich, ohne Gewähr. Die Tools
        ersetzen keine Betriebsbegehung und keine individuelle Beratung, helfen aber bei der ersten
        Einordnung für Betriebe in Köln und NRW.
      </p>

      <section className="mt-10 space-y-4 text-nrw-grau-700 leading-relaxed">
        <p>
          Viele Unternehmen wollen zuerst wissen, wie viele Brandschutzhelfer nach ASR A2.2 sinnvoll
          sind und wie sich die gesetzliche Betreuung durch eine Fachkraft für Arbeitssicherheit
          grob bemisst. Genau dafür ist diese Seite gedacht: Sie erhalten eine schnelle
          Orientierung, bevor Sie Termine, Unterweisungen oder ein Angebot anfragen.
        </p>
        <p>
          Die Einsatzzeiten der betrieblichen Betreuung richten sich nach der{" "}
          <strong>DGUV Vorschrift 2</strong> (Betriebsärzte und Fachkräfte für Arbeitssicherheit).
          Dort werden Grundbetreuung und betriebsspezifische Betreuung unterschieden. Die konkreten
          Stunden hängen von Betriebsart, Beschäftigtenzahl und den tatsächlichen Gefährdungen ab –
          nicht von einer Pauschale aus dem Internet. Unser Rechner und die FAQ darunter ersetzen
          deshalb keine Bestellung nach ASiG, geben aber eine klare Richtung für das Gespräch mit
          der externen FaSi.
        </p>
        <p>
          Nutzen Sie den Brandschutzhelfer-Rechner für die Personenzahl, prüfen Sie die FAQ zu
          Einsatzzeiten und fragen Sie bei Bedarf eine unverbindliche Erstberatung an. So verbinden
          Sie Orientierung auf der Website mit einer belastbaren Lösung vor Ort.
        </p>
      </section>

      <div className="mt-12">
        <BrandschutzhelferRechner />
      </div>

      <section className="mt-10 rounded-2xl border border-nrw-grau-200 bg-nrw-grau-50 p-8">
        <h2 className="text-xl font-bold text-nrw-grau-900">SiGeKo-Honorar</h2>
        <p className="mt-3 text-nrw-grau-600">
          Das Honorar für die Sicherheits- und Gesundheitsschutzkoordination hängt von
          Baustellengröße, Laufzeit und Leistungsumfang ab (z. B. nur Koordinierungsphase oder auch
          Überwachung). Es gibt keine verbindlichen Tarife – wir erstellen Ihnen gerne ein
          individuelles Angebot.
        </p>
        <Link
          href="/beratung-buchen"
          className="mt-4 inline-flex items-center gap-2 font-semibold text-nrw-gruen hover:text-nrw-gruen-hover"
        >
          Unverbindliches Angebot anfragen
          <IconArrowRight className="h-5 w-5" aria-hidden />
        </Link>
      </section>

      <section className="mt-12" aria-labelledby="rechner-faq-heading">
        <h2 id="rechner-faq-heading" className="text-2xl font-bold text-nrw-grau-900">
          FAQ zum Rechner und zu Einsatzzeiten (DGUV V2)
        </h2>
        <div className="mt-6 space-y-4">
          <details className="rounded-xl border border-nrw-grau-200 bg-white px-5 py-4">
            <summary className="cursor-pointer font-semibold text-nrw-grau-900">
              Wonach richten sich die Einsatzzeiten der Fachkraft für Arbeitssicherheit?
            </summary>
            <p className="mt-3 text-nrw-grau-600 leading-relaxed">
              Nach DGUV Vorschrift 2 setzt sich die Betreuung aus Grundbetreuung und
              betriebsspezifischer Betreuung zusammen. Die Grundbetreuung folgt Tabellenwerten nach
              Betriebsart und Beschäftigtenzahl; die betriebsspezifische Betreuung hängt von den
              tatsächlichen Gefährdungen und Aufgaben ab. Deshalb sind Online-Schätzungen nur eine
              Orientierung – die verbindliche Planung erfolgt im Betrieb.
            </p>
          </details>
          <details className="rounded-xl border border-nrw-grau-200 bg-white px-5 py-4">
            <summary className="cursor-pointer font-semibold text-nrw-grau-900">
              Ersetzt der Brandschutzhelfer-Rechner die Gefährdungsbeurteilung?
            </summary>
            <p className="mt-3 text-nrw-grau-600 leading-relaxed">
              Nein. Der Rechner orientiert sich an ASR A2.2 zur ungefähren Anzahl von
              Brandschutzhelfern. Die Gefährdungsbeurteilung nach ArbSchG und die Organisation des
              Brandschutzes bleiben Pflicht des Arbeitgebers – oft mit Unterstützung der FaSi und
              des Brandschutzbeauftragten.
            </p>
          </details>
          <details className="rounded-xl border border-nrw-grau-200 bg-white px-5 py-4">
            <summary className="cursor-pointer font-semibold text-nrw-grau-900">
              Wann lohnt ein Gespräch zur externen FaSi in Köln und NRW?
            </summary>
            <p className="mt-3 text-nrw-grau-600 leading-relaxed">
              Wenn Sie keine interne Fachkraft bestellt haben, die Betreuung neu aufstellen oder
              Einsatzzeiten und Unterweisungen dokumentieren müssen. Dann ist eine kurze
              Erstberatung sinnvoll – parallel können Sie hier schon die Größenordnung für
              Brandschutzhelfer und SiGeKo einordnen.{" "}
              <Link
                href="/fachkraft-fuer-arbeitssicherheit-koeln"
                className="font-medium text-nrw-gruen hover:underline"
              >
                Fachkraft für Arbeitssicherheit Köln
              </Link>
            </p>
          </details>
        </div>
      </section>

      <div className="mt-10">
        <Link href="/wissen" className="font-semibold text-nrw-grau-600 hover:text-nrw-gruen">
          ← Zurück zu Wissen & Ressourcen
        </Link>
      </div>
    </div>
  );
}
