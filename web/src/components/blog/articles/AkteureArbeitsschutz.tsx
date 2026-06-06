import Link from "next/link";
import { GESETZ, REGELWERK } from "@/lib/blog-gesetz-links";
import {
  BlogArticleShell,
  BlogDisclaimer,
  BlogGesetzesZitat,
  BlogH2,
  BlogH3,
  BlogLead,
  BlogLegalRef,
  BlogList,
  BlogRelated,
  BlogSteps,
  BlogTakeaway,
} from "../BlogShared";

export function AkteureArbeitsschutz() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Arbeitsschutz funktioniert nur dann verlässlich, wenn Rollen, Pflichten und Schnittstellen
        klar geregelt sind. Gerade in mittelständischen Unternehmen in Köln und NRW entstehen viele
        Probleme nicht wegen fehlender Regeln, sondern weil unklar bleibt, wer sie in der Praxis
        umsetzt, dokumentiert und kontrolliert.
      </BlogLead>
      <BlogLead>
        Arbeitgeber, Führungskräfte, Fachkraft für Arbeitssicherheit, Betriebsarzt,
        Sicherheitsbeauftragte, Arbeitsschutzausschuss und weitere Beauftragte haben unterschiedliche
        Aufgaben. Wer diese Rollen verwechselt, riskiert organisatorische Lücken, widersprüchliche
        Anweisungen und unnötige Haftungsdiskussionen.
      </BlogLead>

      <BlogH2>Arbeitgeber: zentrale Verantwortung und Organisation</BlogH2>
      <p>
        Der Arbeitgeber trägt die Gesamtverantwortung für Sicherheit und Gesundheitsschutz im Betrieb.
        Er muss die Arbeitsschutzorganisation aufbauen, Gefährdungen beurteilen, Maßnahmen festlegen,
        Unterweisungen veranlassen und ihre Wirksamkeit kontrollieren. Diese Grundverantwortung bleibt
        auch dann bestehen, wenn Aufgaben delegiert oder externe Dienstleister eingebunden werden.
      </p>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 3 Abs. 1"
        quote="Der Arbeitgeber ist verpflichtet, die erforderlichen Maßnahmen des Arbeitsschutzes unter Berücksichtigung der Umstände zu treffen, die Sicherheit und Gesundheit der Beschäftigten bei der Arbeit beeinflussen."
        sourceLabel="ArbSchG"
        sourceHref={GESETZ.arbSchG}
      />
      <BlogLegalRef>
        Die organisatorische Basis bilden insbesondere{" "}
        <a href={GESETZ.arbSchG} target="_blank" rel="noopener noreferrer" className="font-medium text-nrw-gruen hover:underline">
          ArbSchG
        </a>
        , das{" "}
        <a href={GESETZ.asiG} target="_blank" rel="noopener noreferrer" className="font-medium text-nrw-gruen hover:underline">
          Arbeitssicherheitsgesetz
        </a>{" "}
        sowie die branchenspezifische Betreuung nach{" "}
        <a href={REGELWERK.dguv2} target="_blank" rel="noopener noreferrer" className="font-medium text-nrw-gruen hover:underline">
          DGUV Vorschrift 2
        </a>
        .
      </BlogLegalRef>

      <BlogH2>Führungskräfte: operative Verantwortung im Alltag</BlogH2>
      <p>
        Bereichsleitungen, Bauleitungen, Meister oder Teamleitungen setzen Arbeitsschutz im täglichen
        Betrieb um. Sie organisieren Arbeitsabläufe, kontrollieren Regeln, melden Mängel, veranlassen
        Unterweisungen und sorgen dafür, dass Schutzmaßnahmen tatsächlich angewendet werden. In
        Audits zeigt sich oft: Nicht das Regelwerk fehlt, sondern die wirksame Führung in der Fläche.
      </p>
      <BlogH3>Typische Aufgaben von Führungskräften</BlogH3>
      <BlogList
        items={[
          "Gefährdungen im eigenen Verantwortungsbereich erkennen und weitergeben",
          "Betriebsanweisungen, PSA-Vorgaben und Arbeitsfreigaben durchsetzen",
          "Unterweisungen initiieren und Teilnahme sicherstellen",
          "Mängel, Unfälle und Beinahe-Ereignisse an die richtigen Stellen eskalieren",
        ]}
      />

      <BlogH2>Fachkraft für Arbeitssicherheit: Beratung mit System</BlogH2>
      <p>
        Die Fachkraft für Arbeitssicherheit berät den Arbeitgeber fachlich, prüft Arbeitsbedingungen,
        wirkt bei Gefährdungsbeurteilungen mit und unterstützt bei Unterweisungen, Beschaffungen und
        der Analyse von Ereignissen. Sie ist kein Ersatz für die Unternehmensleitung, aber ein
        zentraler Baustein einer wirksamen Organisation.
      </p>
      <BlogGesetzesZitat
        paragraph="ASiG § 6"
        quote="Die Fachkräfte für Arbeitssicherheit haben die Aufgabe, den Arbeitgeber beim Arbeitsschutz und bei der Unfallverhütung in allen Fragen der Arbeitssicherheit einschließlich der menschengerechten Gestaltung der Arbeit zu unterstützen."
        sourceLabel="ASiG § 6"
        sourceHref={GESETZ.asiG6}
      />
      <BlogGesetzesZitat
        paragraph="DGUV Vorschrift 2"
        quote="Der Unternehmer hat Betriebsärztinnen oder Betriebsärzte sowie Fachkräfte für Arbeitssicherheit zur Wahrnehmung der in den §§ 3 und 6 Arbeitssicherheitsgesetz bezeichneten Aufgaben schriftlich nach Maßgabe der nachfolgenden Bestimmungen zu bestellen."
        sourceLabel="DGUV Vorschrift 2"
        sourceHref={REGELWERK.dguv2}
      />
      <BlogLegalRef>
        Grundlage für Bestellung und Aufgaben sind{" "}
        <a href={GESETZ.asiG5} target="_blank" rel="noopener noreferrer" className="font-medium text-nrw-gruen hover:underline">
          ASiG § 5
        </a>
        ,{" "}
        <a href={GESETZ.asiG6} target="_blank" rel="noopener noreferrer" className="font-medium text-nrw-gruen hover:underline">
          § 6
        </a>{" "}
        und die Einsatzzeiten nach{" "}
        <a href={REGELWERK.dguv2} target="_blank" rel="noopener noreferrer" className="font-medium text-nrw-gruen hover:underline">
          DGUV Vorschrift 2
        </a>
        .
      </BlogLegalRef>

      <BlogH2>Betriebsarzt: Gesundheitliche Perspektive im System</BlogH2>
      <p>
        Der Betriebsarzt bringt die arbeitsmedizinische Sicht ein. Das betrifft Vorsorge, Eignung,
        gesundheitliche Auswirkungen von Belastungen, ergonomische Themen sowie die Beratung bei
        besonderen Personengruppen. Zusammen mit der FaSi sorgt er dafür, dass technische und
        gesundheitliche Aspekte nicht voneinander getrennt betrachtet werden.
      </p>
      <p>
        Besonders relevant ist diese Zusammenarbeit bei Gefahrstoffen, psychischen Belastungen,
        Nachtarbeit, Wiedereingliederungen oder Belastungen in Produktion und Logistik. In Köln sehen
        wir in der Praxis oft, dass Betriebe beide Rollen formell bestellt haben, ihre Zusammenarbeit
        aber noch nicht aktiv steuern.
      </p>

      <BlogH2>Sicherheitsbeauftragte und ASA: Nähe zur Belegschaft</BlogH2>
      <p>
        Sicherheitsbeauftragte und Arbeitsschutzausschuss schaffen Nähe zur betrieblichen Realität.
        Sicherheitsbeauftragte sind keine Mini-FaSi, sondern Multiplikatoren in den Arbeitsbereichen.
        Der ASA wiederum ist das Gremium, in dem relevante Themen regelmäßig zusammengeführt werden.
      </p>
      <BlogLegalRef>
        In Betrieben mit mehr als 20 Beschäftigten ist nach{" "}
        <a href={GESETZ.asiG11} target="_blank" rel="noopener noreferrer" className="font-medium text-nrw-gruen hover:underline">
          ASiG § 11
        </a>{" "}
        ein Arbeitsschutzausschuss zu bilden.
      </BlogLegalRef>
      <BlogH3>Wofür der ASA besonders wichtig ist</BlogH3>
      <BlogList
        items={[
          "Auswertung von Unfällen, Beinahe-Ereignissen und Maßnahmenständen",
          "Abstimmung zwischen Arbeitgeber, Betriebsrat, FaSi, Betriebsarzt und Sicherheitsbeauftragten",
          "Priorisierung von Investitionen, Unterweisungsthemen und Begehungsschwerpunkten",
          "Nachverfolgung offener Punkte aus Audits oder Behördenkontakten",
        ]}
      />

      <BlogH2>Weitere Akteure: Brandschutz, SiGeKo, Elektrosicherheit</BlogH2>
      <p>
        Neben den klassischen Akteuren des Arbeitsschutzes brauchen viele Unternehmen weitere
        Funktionsrollen. Dazu gehören etwa der{" "}
        <Link href="/leistungen/brandschutz" className="font-semibold text-nrw-gruen hover:underline">
          Brandschutzbeauftragte
        </Link>
        , der{" "}
        <Link href="/leistungen/sigeko" className="font-semibold text-nrw-gruen hover:underline">
          SiGeKo
        </Link>{" "}
        auf Baustellen oder Verantwortliche für die{" "}
        <Link href="/leistungen/elektrosicherheit" className="font-semibold text-nrw-gruen hover:underline">
          Elektrosicherheit
        </Link>
        . Diese Rollen ersetzen die Arbeitsschutzorganisation nicht, sondern ergänzen sie.
      </p>

      <BlogH2>So bauen Unternehmen eine klare Rollenstruktur auf</BlogH2>
      <BlogSteps
        items={[
          "Pflichten schriftlich zuordnen: Wer entscheidet, wer berät, wer kontrolliert, wer dokumentiert?",
          "Interne und externe Rollen in Organigramm, Bestellschreiben und Prozessen verankern.",
          "ASA, Begehungen und Unterweisungen als feste Schnittstellen zwischen den Akteuren nutzen.",
          "Bei mehreren Standorten oder Baustellen Verantwortungen standortbezogen und projektbezogen trennen.",
        ]}
      />

      <BlogTakeaway>
        Gute Arbeitsschutzorganisation lebt von klaren Rollen, nicht von möglichst vielen
        Beauftragten. Der Arbeitgeber bleibt verantwortlich, Führungskräfte setzen um, FaSi und
        Betriebsarzt beraten fachlich, Sicherheitsbeauftragte und ASA bringen Nähe zur Praxis. Wir
        unterstützen Unternehmen in Köln und NRW dabei, diese Rollen sauber aufzubauen und wirksam
        zu verzahnen.
      </BlogTakeaway>

      <BlogRelated
        links={[
          {
            href: "/blog/arbeitsschutzausschuss-asa-pflichten",
            label: "Arbeitsschutzausschuss (ASA): Pflicht und Zusammensetzung",
          },
          {
            href: "/blog/externe-fachkraft-arbeitssicherheit-koeln",
            label: "Externe Fachkraft für Arbeitssicherheit in Köln",
          },
          {
            href: "/blog/brandschutzbeauftragter-nrw-intern-extern",
            label: "Brandschutzbeauftragter in NRW: intern oder extern?",
          },
        ]}
      />

      <BlogDisclaimer />
    </BlogArticleShell>
  );
}
