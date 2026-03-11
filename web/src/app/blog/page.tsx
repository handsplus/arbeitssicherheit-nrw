import { IconArrowRight } from "@/components/Icons";

import { SITE } from "@/lib/constants";

export const metadata = {
  title: "Blog – Arbeitssicherheit, Gefährdungsbeurteilung, Brandschutz | Arbeitssicherheit.nrw",
  description:
    "Praxiswissen Arbeitssicherheit: Gefährdungsbeurteilung, Getränkepflicht, Akteure im Arbeitsschutz. ArbSchG, ArbStättV, ASR A4.1 – für Köln und NRW.",
  alternates: { canonical: `${SITE.url}/blog` },
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-nrw-gruen">Blog</p>
      <h1 className="mt-2 text-4xl font-bold text-nrw-grau-900">Blog Beiträge</h1>
      <p className="mt-6 max-w-2xl text-lg text-nrw-grau-600">
        Praxiswissen zu Arbeitssicherheit, Brandschutz und SiGeKo – für Ihren Betrieb in Köln und
        NRW. Klicken Sie auf eine Frage, um den Beitrag zu öffnen.
      </p>

      <div className="mt-14 space-y-4">
        <details className="group rounded-2xl border border-nrw-grau-200 bg-white shadow-sm [&[open]_summary]:rounded-b-none [&[open]_summary]:border-b [&[open]_summary]:border-nrw-grau-200">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-6 text-left font-bold text-nrw-grau-900 transition hover:bg-nrw-grau-50 [&::-webkit-details-marker]:hidden">
            <h2 className="text-xl md:text-2xl">
              Muss die Gefährdungsbeurteilung unterschrieben werden?
            </h2>
            <span className="shrink-0 text-nrw-gruen transition group-open:rotate-90" aria-hidden>
              <IconArrowRight className="h-6 w-6" />
            </span>
          </summary>
          <div className="border-t border-nrw-grau-200 p-6 pt-6">
            <div className="space-y-6 text-nrw-grau-700 leading-relaxed">
              <p>
                In den Arbeitsschutzvorschriften gibt es keine Regel, die explizit festlegt, dass
                eine Gefährdungsbeurteilung unterschrieben werden muss. Laut Arbeitsschutzgesetz (§
                5 ArbSchG) ist der Arbeitgeber für die Umsetzung der Vorschriften verantwortlich,
                dazu gehört auch die Durchführung der Gefährdungsbeurteilung. Eine Unterschrift ist
                daher nicht nötig, da der Arbeitgeber immer in der Verantwortung bleibt – auch wenn
                er Aufgaben an andere Personen überträgt. Personen, die im Namen des Arbeitgebers
                handeln, gelten als dessen Vertreter, wodurch die Gefährdungsbeurteilung automatisch
                rechtsverbindlich ist. Tätigkeiten mit gefährlichen Stoffen dürfen ohne
                Gefährdungsbeurteilung nicht ausgeführt werden (§ 7 Abs. 1 GefStoffV).
              </p>
              <p>
                Nach § 6 Abs. 11 GefStoffV darf eine Gefährdungsbeurteilung nur von fachkundigen
                Personen durchgeführt werden. Hat der Arbeitgeber selbst keine ausreichende
                Fachkenntnis, muss er sich beraten lassen, zum Beispiel von einer Fachkraft für
                Arbeitssicherheit.
              </p>
            </div>
          </div>
        </details>

        <details className="group rounded-2xl border border-nrw-grau-200 bg-white shadow-sm [&[open]_summary]:rounded-b-none [&[open]_summary]:border-b [&[open]_summary]:border-nrw-grau-200">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-6 text-left font-bold text-nrw-grau-900 transition hover:bg-nrw-grau-50 [&::-webkit-details-marker]:hidden">
            <h2 className="text-xl md:text-2xl">
              Muss der Arbeitgeber Getränke zur Verfügung stellen?
            </h2>
            <span className="shrink-0 text-nrw-gruen transition group-open:rotate-90" aria-hidden>
              <IconArrowRight className="h-6 w-6" />
            </span>
          </summary>
          <div className="border-t border-nrw-grau-200 p-6 pt-6">
            <div className="space-y-6 text-nrw-grau-700 leading-relaxed">
              <p>
                Ein Glas Wasser kann im Arbeitsalltag wahre Wunder wirken: Es fördert die
                Konzentration, beugt Kopfschmerzen vor und ist entscheidend für das allgemeine
                Wohlbefinden. Doch wie sieht es rechtlich aus – ist der Arbeitgeber verpflichtet,
                seinen Beschäftigten Getränke bereitzustellen?
              </p>

              <h3 className="mt-8 text-xl font-bold text-nrw-grau-900">
                Die Fürsorgepflicht des Arbeitgebers
              </h3>
              <p>
                Grundsätzlich gilt: Arbeitgeber haben eine Fürsorgepflicht gegenüber ihren
                Beschäftigten. Das bedeutet, sie müssen für sichere, gesunde und zumutbare
                Arbeitsbedingungen sorgen. Dazu zählt unter anderem auch der Schutz vor
                gesundheitlichen Beeinträchtigungen am Arbeitsplatz.
              </p>
              <p>
                Aber heißt das auch, dass der Arbeitgeber kostenfreie Getränke bereitstellen muss?
              </p>

              <h3 className="mt-8 text-xl font-bold text-nrw-grau-900">
                Getränke am Arbeitsplatz: Nicht immer Pflicht
              </h3>
              <p>
                Unter normalen Arbeitsbedingungen – also etwa bei Bürotätigkeiten in Innenräumen
                bei moderaten Temperaturen – besteht keine gesetzliche Pflicht, Getränke zur
                Verfügung zu stellen. Arbeitnehmer müssen sich in diesem Fall selbst versorgen.
              </p>

              <h3 className="mt-8 text-xl font-bold text-nrw-grau-900">
                Ausnahme: Hohe Temperaturen
              </h3>
              <p>
                Die Arbeitsstättenverordnung (ArbStättV) sieht jedoch klare Vorgaben vor, wenn die
                Temperaturen steigen. In Verbindung mit der Technischen Regel ASR A4.1 gilt:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-2">
                <li>
                  Ab 26 °C Raumtemperatur sollten Arbeitgeber geeignete Getränke (z. B. Wasser,
                  ungesüßter Tee) bereitstellen.
                </li>
                <li>
                  Ab 30 °C müssen Getränke bereitgestellt werden – andernfalls kann das
                  gesundheitliche Risiken für die Beschäftigten bedeuten.
                </li>
              </ul>
              <p>
                Die Auswahl der Getränke sollte dabei auf den Flüssigkeitsbedarf und die körperliche
                Belastung abgestimmt sein. Alkoholische Getränke sind selbstverständlich nicht
                erlaubt.
              </p>

              <h3 className="mt-8 text-xl font-bold text-nrw-grau-900">
                Besonderheit: Arbeiten im Freien und auf Baustellen
              </h3>
              <p>
                Bei Arbeiten im Freien – insbesondere auf Baustellen – ist die Regelung strenger.
                Hier müssen Arbeitgeber jederzeit für eine ausreichende Versorgung mit Trinkwasser
                oder anderen nicht-alkoholischen Getränken sorgen. Das gilt unabhängig von der
                Außentemperatur.
              </p>
            </div>
          </div>
        </details>

        <details className="group rounded-2xl border border-nrw-grau-200 bg-white shadow-sm [&[open]_summary]:rounded-b-none [&[open]_summary]:border-b [&[open]_summary]:border-nrw-grau-200">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-6 text-left font-bold text-nrw-grau-900 transition hover:bg-nrw-grau-50 [&::-webkit-details-marker]:hidden">
            <h2 className="text-xl md:text-2xl">
              Akteure im Arbeitsschutz – wer kümmert sich um was?
            </h2>
            <span className="shrink-0 text-nrw-gruen transition group-open:rotate-90" aria-hidden>
              <IconArrowRight className="h-6 w-6" />
            </span>
          </summary>
          <div className="border-t border-nrw-grau-200 p-6 pt-6">
            <div className="space-y-6 text-nrw-grau-700 leading-relaxed">
              <p>
                Ein sicheres Arbeitsumfeld entsteht nicht von selbst, es erfordert klare
                Verantwortlichkeiten. Doch wer trägt welche Aufgaben – wer sind die Akteure im
                Arbeitsschutz?
              </p>

              <h3 className="mt-8 text-xl font-bold text-nrw-grau-900">
                Arbeitgeber: Die Hauptverantwortung
              </h3>
              <p>
                Der Arbeitgeber ist laut Arbeitsschutzgesetz verpflichtet, Schutzmaßnahmen zu
                ergreifen, diese regelmäßig zu prüfen und anzupassen. Auch wenn er Aufgaben
                delegieren kann, bleibt die Gesamtverantwortung bei ihm.
              </p>

              <h3 className="mt-8 text-xl font-bold text-nrw-grau-900">
                Fachkraft für Arbeitssicherheit: Beratung & Kontrolle
              </h3>
              <p>
                Sie unterstützt den Arbeitgeber und die Führungskräfte, achtet auf die Einhaltung
                der Arbeitsschutzvorschriften und berät in sicherheitsrelevanten Fragen.
                Weisungsbefugnis hat sie nicht, außer in akuten Gefahrensituationen.
              </p>

              <h3 className="mt-8 text-xl font-bold text-nrw-grau-900">
                Sicherheitsbeauftragte: Kollegen mit Verantwortung
              </h3>
              <p>
                Sicherheitsbeauftragte sind Mitarbeiter, die sich zusätzlich für die Sicherheit am
                Arbeitsplatz engagieren. Sie haben keine Weisungsbefugnis, unterstützen aber dabei,
                Risiken frühzeitig zu erkennen.
              </p>

              <h3 className="mt-8 text-xl font-bold text-nrw-grau-900">
                Betriebsarzt: Gesundheit im Fokus
              </h3>
              <p>
                Der Betriebsarzt berät Unternehmen zu Gesundheitsrisiken, führt
                Vorsorgeuntersuchungen durch und hilft, die Gesundheit der Beschäftigten langfristig
                zu schützen.
              </p>

              <h3 className="mt-8 text-xl font-bold text-nrw-grau-900">
                Arbeitsschutzausschuss: Pflicht ab 20 Mitarbeitern
              </h3>
              <p>
                Dieser Ausschuss, bestehend aus Arbeitgeber, Betriebsarzt, Fachkraft für
                Arbeitssicherheit und weiteren Vertretern, bespricht regelmäßig Maßnahmen zur
                Unfallverhütung und Arbeitssicherheit.
              </p>

              <h3 className="mt-8 text-xl font-bold text-nrw-grau-900">
                Spezialisten für bestimmte Bereiche
              </h3>
              <p>
                In manchen Betrieben gibt es zusätzliche Beauftragte, z. B. für Brandschutz oder
                Gefahrstoffe, die sich um spezielle Risiken kümmern und dazu beraten.
              </p>
            </div>
          </div>
        </details>

        <details className="group rounded-2xl border border-nrw-grau-200 bg-white shadow-sm [&[open]_summary]:rounded-b-none [&[open]_summary]:border-b [&[open]_summary]:border-nrw-grau-200">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-6 text-left font-bold text-nrw-grau-900 transition hover:bg-nrw-grau-50 [&::-webkit-details-marker]:hidden">
            <h2 className="text-xl md:text-2xl">
              Ladestation für E-Autos in Garagen genehmigungspflichtig?
            </h2>
            <span className="shrink-0 text-nrw-gruen transition group-open:rotate-90" aria-hidden>
              <IconArrowRight className="h-6 w-6" />
            </span>
          </summary>
          <div className="border-t border-nrw-grau-200 p-6 pt-6">
            <div className="space-y-6 text-nrw-grau-700 leading-relaxed">
              <p>
                Ladestationen unterliegen keiner Genehmigungspflicht und führen auch nicht zu einer
                Nutzungsänderung der Garage. Auch nach der Verschiebung der Landesbauordnung
                Nordrhein-Westfalen bleibt die geltende Rechtslage unverändert.
              </p>
              <p>
                Ladestationen für E-Autos gelten als Teil der Leitungsanlagen und der technischen
                Gebäudeausstattung der Garage. Im Gegensatz zu Kraftstoffzapfsäulen unterliegen sie
                keinen zusätzlichen öffentlich-rechtlichen Anforderungen (Kraftstoffzapfsäulen sind
                nach § 18 Abs. 1 Nr. 6 der Betriebssicherheitsverordnung genehmigungspflichtig).
              </p>
              <p>
                Leitungsanlagen sind in Nutzungseinheiten wie Garagen grundsätzlich erlaubt, im
                Gegensatz zu Rettungswegen. Da Ladestationen wie Steckdosen oder elektrische
                Verteiler bewertet werden, ist deren Installation in Garagen ebenso zulässig wie die
                Installation einer Steckdose.
              </p>
              <p>
                Es ist bekannt, dass Feuerwehren Ladestationen in Garagen kritisch sehen, da Brände,
                die durch lithiumbasierte Akkus entstehen, schwer zu löschen sind. Allerdings geht
                vom eigentlichen Ladevorgang keine Gefahr aus. Risiken bestehen eher bei defekten
                oder überladenen Batterien, sodass potenzielle Gefahren vom Elektrofahrzeug selbst
                und nicht von der Ladestation ausgehen.
              </p>
              <p>
                Die Sonderbauverordnung enthält zudem kein Verbot, Elektrofahrzeuge in Garagen
                abzustellen.
              </p>
              <p className="text-sm text-nrw-grau-500">
                (Praktische Folgen des Aufschiebens „Moratorium“ der Landesbauordnung in
                Nordrhein-Westfalen.)
              </p>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}
