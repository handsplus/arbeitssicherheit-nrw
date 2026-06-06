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

export function SigekoNrwOrientierung() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Wann braucht ein Bauvorhaben in NRW einen SiGeKo? Diese Frage stellt sich bei Neubauten,
        Umbauten, Sanierungen und technischen Maßnahmen im Bestand immer wieder. Unsicher sind nicht
        nur Bauherren, sondern auch Architekturbüros, Projektsteuerungen und ausführende Unternehmen,
        weil die Pflichten häufig erst kurz vor Baustart thematisiert werden.
      </BlogLead>
      <BlogLead>
        Die wichtigste Orientierung lautet: Sobald mehrere Arbeitgeber auf einer Baustelle tätig
        werden oder tätig werden können, ist die Sicherheits- und Gesundheitsschutzkoordination
        regelmäßig mitzudenken. Entscheidend ist, frühzeitig zu planen, die Zuständigkeiten sauber zu
        regeln und die Baustellenlogik nicht mit allgemeinem Arbeitsschutz im Stammbetrieb zu
        verwechseln.
      </BlogLead>

      <BlogH2>Wann die Baustellenverordnung greift</BlogH2>
      <p>
        Die Baustellenverordnung greift nicht erst bei Großprojekten. Maßgeblich ist vor allem, ob
        Beschäftigte mehrerer Arbeitgeber auf der Baustelle tätig werden. Das kann schon bei
        überschaubaren Bauvorhaben der Fall sein, wenn etwa Rohbau, TGA, Dachdecker oder Ausbaugewerke
        nacheinander oder gleichzeitig eingebunden sind.
      </p>
      <BlogGesetzesZitat
        paragraph="BaustellV § 3 Abs. 1"
        quote="Für Baustellen, auf denen Beschäftigte mehrerer Arbeitgeber tätig werden, hat der nach § 4 Verantwortliche einen oder mehrere geeignete Koordinatoren zu bestellen."
        sourceLabel="BaustellV § 3"
        sourceHref={GESETZ.baustellV3}
      />
      <BlogGesetzesZitat
        paragraph="BaustellV § 3 Abs. 1a"
        quote="Der Bauherr oder der von ihm beauftragte Dritte wird durch die Beauftragung geeigneter Koordinatoren nicht von seiner Verantwortung entbunden."
        sourceLabel="BaustellV § 3"
        sourceHref={GESETZ.baustellV3}
      />
      <BlogLegalRef>
        Die Koordinatorenbestellung nach{" "}
        <a href={GESETZ.baustellV3} target="_blank" rel="noopener noreferrer" className="font-medium text-nrw-gruen hover:underline">
          BaustellV § 3
        </a>{" "}
        ist eine Pflicht des verantwortlichen Bauherrn oder des von ihm beauftragten Dritten.
      </BlogLegalRef>

      <BlogH2>Welche Aufgaben der SiGeKo in der Planungsphase hat</BlogH2>
      <p>
        Viele Weichen für die spätere Baustellensicherheit werden vor dem ersten Spatenstich gestellt.
        In der Planungsphase geht es darum, Risiken aus Bauablauf, Gewerkeabfolge, Zugänglichkeit,
        Absturzgefahren, Logistik und parallel laufenden Tätigkeiten früh zu erkennen und planerisch
        zu entschärfen.
      </p>
      <BlogList
        items={[
          "Mitwirkung bei der Berücksichtigung allgemeiner Arbeitsschutzgrundsätze in der Planung",
          "Erstellung oder Veranlassung des SiGePlans, sofern erforderlich",
          "Koordination von Schutzmaßnahmen zwischen Gewerken und Bauabschnitten",
          "Mitwirkung an der Unterlage für spätere Arbeiten an der baulichen Anlage",
        ]}
      />

      <BlogH2>Was in der Ausführungsphase zählt</BlogH2>
      <p>
        Während der Bauausführung verschiebt sich der Schwerpunkt von Planung auf Koordination,
        Kommunikation und Anpassung. Änderungen im Bauablauf, neue Gewerke oder ungeplante Eingriffe
        erzeugen neue Risiken. Genau deshalb ist SiGeKo keine einmalige Dokumentenleistung, sondern
        eine fortlaufende Koordinationsaufgabe.
      </p>
      <BlogSteps
        items={[
          "Baustellenregeln und Schutzmaßnahmen an alle beteiligten Unternehmen kommunizieren.",
          "Änderungen im Bauablauf auf ihre Sicherheitsfolgen prüfen und im SiGePlan nachführen.",
          "Schnittstellen zwischen gleichzeitig oder nacheinander arbeitenden Firmen koordinieren.",
          "Relevante Erkenntnisse an Bauherr, Projektleitung und beteiligte Unternehmen zurückspielen.",
        ]}
      />
      <BlogLegalRef>
        Für ausführende Maßnahmen und Koordination während der Bauausführung ist ebenfalls{" "}
        <a href={GESETZ.baustellV3} target="_blank" rel="noopener noreferrer" className="font-medium text-nrw-gruen hover:underline">
          BaustellV § 3
        </a>{" "}
        maßgeblich.
      </BlogLegalRef>

      <BlogH2>Wer den SiGeKo beauftragt und worauf zu achten ist</BlogH2>
      <p>
        Auftraggeber ist grundsätzlich der Bauherr oder ein wirksam beauftragter Dritter. Entscheidend
        ist nicht nur die Benennung, sondern die tatsächliche Eignung und Einbindung in das Projekt.
        Ein SiGeKo kann seine Funktion nur erfüllen, wenn er rechtzeitig eingebunden ist und Zugang zu
        Planungs- und Ablaufinformationen hat.
      </p>
      <BlogH3>Worauf Bauherren achten sollten</BlogH3>
      <BlogList
        items={[
          "frühe Einbindung bereits in Entwurf, Ausschreibung oder Terminplanung",
          "klare Zuständigkeit zwischen Bauherr, Projektsteuerung und Planungsbeteiligten",
          "zugängliche Dokumentation für alle relevanten Projektbeteiligten",
          "saubere Abgrenzung zu Bauleitung, Fachbauleitung und interner Arbeitsschutzorganisation",
        ]}
      />

      <BlogH2>Besonderheiten für Köln und NRW</BlogH2>
      <p>
        In NRW laufen baurechtliche, brandschutzfachliche und arbeitsschutzrechtliche Fragen oft
        parallel. Die SiGeKo-Pflicht selbst folgt aus der Baustellenverordnung und ist nicht identisch
        mit der Baugenehmigung. Trotzdem sollten SiGePlan, logistische Vorgaben, Baustellenordnung und
        etwaige Brandschutzanforderungen zusammen gedacht werden.
      </p>
      <p>
        Gerade in innerstädtischen Projekten in Köln mit beengten Flächen, Mischgebäuden oder
        Bestandsumbauten ist diese Abstimmung besonders wichtig.
      </p>

      <BlogH2>Schnittstelle zum laufenden Betrieb</BlogH2>
      <p>
        Viele Baustellen in NRW finden nicht auf freiem Feld, sondern im laufenden Betrieb statt. Dann
        treffen Baustellenkoordination und betriebliche{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          Arbeitssicherheit
        </Link>{" "}
        direkt aufeinander. Verkehrswege, Fremdfirmen, Freigaben, Fluchtwege und Unterweisungen
        müssen zwischen Baustelle und Unternehmen abgestimmt werden.
      </p>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 8 Abs. 1"
        quote="Werden Beschäftigte mehrerer Arbeitgeber an einem Arbeitsplatz tätig, sind die Arbeitgeber verpflichtet, bei der Durchführung der Sicherheits- und Gesundheitsschutzbestimmungen zusammenzuarbeiten."
        sourceLabel="ArbSchG"
        sourceHref={GESETZ.arbSchG}
      />

      <BlogH2>Erste Schritte für Bauherren und Ausführende</BlogH2>
      <BlogSteps
        items={[
          "Früh klären, ob mehrere Arbeitgeber beteiligt sein werden oder beteiligt sein können.",
          "Geeigneten SiGeKo rechtzeitig beauftragen und in Planungsgespräche einbinden.",
          "SiGePlan, Baustellenorganisation und Kommunikationswege verbindlich festlegen.",
          "Bei Bauvorhaben im Bestand die Schnittstelle zum laufenden Betrieb aktiv organisieren.",
        ]}
      />

      <BlogTakeaway>
        SiGeKo in NRW ist vor allem eine Frage der richtigen Projektorganisation zum richtigen
        Zeitpunkt. Sobald mehrere Arbeitgeber auf einer Baustelle tätig werden, braucht es in der
        Regel Koordination nach Baustellenverordnung. Wer früh plant, Zuständigkeiten sauber regelt
        und Schnittstellen zum Betrieb berücksichtigt, schafft deutlich mehr Sicherheit und weniger
        Reibung im Projekt.
      </BlogTakeaway>

      <BlogRelated
        links={[
          {
            href: "/blog/sigeko-ab-wann-pflicht-baustelle",
            label: "SiGeKo: Ab wann Pflicht auf der Baustelle?",
          },
          {
            href: "/blog/sigeplan-inhalt-pflichten-baustelle",
            label: "SiGePlan: Inhalte, Pflichten und Anpassung",
          },
          {
            href: "/blog/sigeko-und-betrieb-schnittstelle",
            label: "SiGeKo und Arbeitssicherheit im Betrieb",
          },
        ]}
      />

      <BlogDisclaimer />
    </BlogArticleShell>
  );
}
