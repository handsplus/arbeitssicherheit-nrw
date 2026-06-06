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

export function UnterweisungArbeitssicherheit() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Unterweisungen gehören zu den am häufigsten unterschätzten Pflichten im Arbeitsschutz. Viele
        Unternehmen in Köln und NRW führen zwar regelmäßige Termine durch, vermitteln aber zu
        allgemein, zu selten oder ohne klare Verbindung zur tatsächlichen Gefährdung am Arbeitsplatz.
      </BlogLead>
      <BlogLead>
        Gute Unterweisung ist kein Vortrag aus dem Vorjahr, sondern eine arbeitsplatzbezogene,
        verständliche und dokumentierte Maßnahme. Sie muss Beschäftigte befähigen, sicher zu handeln,
        typische Fehler zu vermeiden und im Störungsfall richtig zu reagieren. Genau daran messen
        Behörden, Berufsgenossenschaften und Auditoren die Qualität.
      </BlogLead>

      <BlogH2>Rechtsgrundlage: Unterweisung ist Pflicht, nicht Kür</BlogH2>
      <p>
        Das Arbeitsschutzgesetz verlangt eine ausreichende und angemessene Unterweisung während der
        Arbeitszeit. Entscheidend ist dabei der Bezug zum konkreten Arbeitsplatz oder Aufgabenbereich.
        Eine allgemeine Präsentation ohne Bezug zu den tatsächlichen Tätigkeiten genügt nicht.
      </p>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 12 Abs. 1"
        quote="Der Arbeitgeber hat die Beschäftigten über Sicherheit und Gesundheitsschutz bei der Arbeit während ihrer Arbeitszeit ausreichend und angemessen zu unterweisen. Die Unterweisung umfaßt Anweisungen und Erläuterungen, die eigens auf den Arbeitsplatz oder den Aufgabenbereich der Beschäftigten ausgerichtet sind."
        sourceLabel="ArbSchG § 12"
        sourceHref={GESETZ.arbSchG12}
      />
      <BlogLegalRef>
        Unterweisungen müssen bei Einstellung, Aufgabenänderung, Einführung neuer Arbeitsmittel oder
        neuer Technologien vor Aufnahme der Tätigkeit erfolgen. Die Rechtsgrundlage ist{" "}
        <a href={GESETZ.arbSchG12} target="_blank" rel="noopener noreferrer" className="font-medium text-nrw-gruen hover:underline">
          ArbSchG § 12
        </a>
        .
      </BlogLegalRef>

      <BlogH2>Inhalte: immer aus der Gefährdungsbeurteilung ableiten</BlogH2>
      <p>
        Der beste Unterweisungsplan beginnt nicht in PowerPoint, sondern in der
        Gefährdungsbeurteilung. Dort steht, welche Gefährdungen bestehen, welche Schutzmaßnahmen
        eingeführt sind und wo typische Bedien- oder Verhaltensfehler auftreten können. Daraus ergeben
        sich die Inhalte für verschiedene Zielgruppen.
      </p>
      <BlogH3>Typische Pflichtinhalte</BlogH3>
      <BlogList
        items={[
          "arbeitsplatzbezogene Gefährdungen und daraus abgeleitete Schutzmaßnahmen",
          "richtiges Verhalten bei Störungen, Unfällen, Erste Hilfe und Alarmierung",
          "Nutzung von Arbeitsmitteln, Maschinen, Fahrzeugen oder Leitern",
          "Umgang mit Gefahrstoffen, Kennzeichnung und Schutzmaßnahmen",
          "PSA: Auswahl, Tragepflicht, Grenzen und Aufbewahrung",
          "Meldewege, Ansprechpartner und Eskalation bei Mängeln oder Beinahe-Ereignissen",
        ]}
      />

      <BlogH2>Wann unterwiesen werden muss</BlogH2>
      <p>
        Unterweisungen sind nicht nur ein jährlicher Termin. Es gibt typische Anlässe, bei denen eine
        Unterweisung oder Nachunterweisung unmittelbar erforderlich wird. Gerade bei personellen
        Wechseln, Umbauten oder neuen Arbeitsmitteln werden diese Anlässe im Alltag häufig übersehen.
      </p>
      <BlogSteps
        items={[
          "vor erstmaliger Tätigkeitsaufnahme oder nach Versetzung auf einen anderen Arbeitsplatz",
          "bei neuen Maschinen, Verfahren, Stoffen oder digital gesteuerten Prozessen",
          "nach Unfällen, Beinahe-Ereignissen oder festgestellten Fehlverhalten",
          "regelmäßig wiederkehrend, mindestens in sinnvoller betrieblicher Taktung und oft jährlich",
        ]}
      />

      <BlogH2>Rolle der FaSi und anderer Beteiligter</BlogH2>
      <p>
        Die Unterweisungspflicht liegt beim Arbeitgeber. In der Praxis erfolgt die Durchführung oft
        über Führungskräfte, unterstützt durch die{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          Fachkraft für Arbeitssicherheit
        </Link>
        , den Betriebsarzt oder spezialisierte Referenten. Wichtig ist, dass Inhalte fachlich korrekt,
        verständlich und auf den Einsatzbereich zugeschnitten sind.
      </p>
      <BlogGesetzesZitat
        paragraph="ASiG § 6"
        quote="Die Fachkräfte für Arbeitssicherheit haben die Aufgabe, den Arbeitgeber beim Arbeitsschutz und bei der Unfallverhütung in allen Fragen der Arbeitssicherheit … zu unterstützen."
        sourceLabel="ASiG § 6"
        sourceHref={GESETZ.asiG6}
      />
      <BlogLegalRef>
        Die BAuA betont in ihren Informationen zur Unterweisung die enge Verknüpfung von
        Gefährdungsbeurteilung, praktischer Vermittlung und Verständniskontrolle. Vertiefende Hinweise
        bietet die{" "}
        <a href={REGELWERK.bauaUnterweisung} target="_blank" rel="noopener noreferrer" className="font-medium text-nrw-gruen hover:underline">
          BAuA-Unterweisungsseite
        </a>
        .
      </BlogLegalRef>

      <BlogH2>Was dokumentiert werden sollte</BlogH2>
      <p>
        Das Gesetz schreibt keine starre Nachweisform vor, aber die Dokumentation muss zeigen, dass
        die Unterweisung tatsächlich stattgefunden hat und inhaltlich passend war. Reine
        Teilnehmerlisten ohne Themenbezug reichen in kritischen Fällen nicht aus.
      </p>
      <BlogList
        items={[
          "Datum, Ort, Zielgruppe und verantwortliche unterweisende Person",
          "konkrete Inhalte, möglichst mit Bezug zu Arbeitsplatz oder Tätigkeit",
          "Besonderheiten wie neue Maschinen, Umbauten oder Ereignisse als Anlass",
          "Teilnahmenachweis, digital oder handschriftlich, mit klarer Zuordnung",
          "Hinweise auf ausgehändigte Betriebsanweisungen oder ergänzende Unterlagen",
        ]}
      />

      <BlogH2>Schnittstellen zu Brandschutz, Baustelle und Fremdfirmen</BlogH2>
      <p>
        Unterweisung endet nicht an der Werkstür. Brandschutz, Evakuierung, Fremdfirmenkoordination
        oder Baustellenschnittstellen müssen mitgedacht werden. Wer in einem Betrieb und parallel auf
        Baustellen arbeitet, braucht klare Abgrenzungen zwischen allgemeiner Unterweisung,
        arbeitsplatzbezogener Unterweisung und projektbezogener Einweisung.
      </p>
      <p>
        Das betrifft insbesondere Unternehmen, die parallel Leistungen in{" "}
        <Link href="/leistungen/brandschutz" className="font-semibold text-nrw-gruen hover:underline">
          Brandschutz
        </Link>
        ,{" "}
        <Link href="/leistungen/sigeko" className="font-semibold text-nrw-gruen hover:underline">
          SiGeKo
        </Link>{" "}
        und laufender Arbeitsschutzorganisation verzahnen müssen.
      </p>

      <BlogH2>Häufige Schwachstellen in der Praxis</BlogH2>
      <BlogList
        items={[
          "Unterweisungen sind identisch für Büro, Lager und Produktion.",
          "Es wird nur frontal präsentiert, ohne Rückfragen oder Verständnisprüfung.",
          "Neue Beschäftigte beginnen, bevor eine passende Einweisung erfolgt ist.",
          "Nachweise sind vorhanden, aber Inhalte oder Anlass nicht nachvollziehbar.",
          "Führungskräfte fühlen sich nicht verantwortlich und verweisen komplett auf externe Berater.",
        ]}
      />

      <BlogTakeaway>
        Eine gute Unterweisung ist konkret, verständlich, tätigkeitsbezogen und sauber dokumentiert.
        Sie leitet sich aus der Gefährdungsbeurteilung ab und wird bei Änderungen konsequent
        aktualisiert. Wenn Sie in Köln oder NRW Unterweisungen fachlich und organisatorisch neu
        aufstellen möchten, unterstützen wir Sie mit Arbeitssicherheitsbetreuung und praxisnahen
        Schulungen.
      </BlogTakeaway>

      <BlogRelated
        links={[
          {
            href: "/blog/gefaehrdungsbeurteilung-unterschrift",
            label: "Muss die Gefährdungsbeurteilung unterschrieben werden?",
          },
          {
            href: "/blog/gefaehrdungsbeurteilung-erstellen-schritt-fuer-schritt",
            label: "Gefährdungsbeurteilung erstellen: Schritt für Schritt",
          },
          {
            href: "/blog/brandschutzhelfer-ausbildung-pflicht-nrw",
            label: "Brandschutzhelfer in NRW: Ausbildung und Pflicht",
          },
        ]}
      />

      <BlogDisclaimer />
    </BlogArticleShell>
  );
}
