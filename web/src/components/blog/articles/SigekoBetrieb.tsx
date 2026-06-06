import Link from "next/link";
import {
  BlogArticleShell,
  BlogDisclaimer,
  BlogGesetzesZitat,
  BlogH2,
  BlogH3,
  BlogLead,
  BlogLegalRef,
  BlogList,
  BlogTakeaway,
} from "../BlogShared";

export function SigekoBetrieb() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Baustelle und Stammbetrieb laufen selten isoliert voneinander. Wer SiGeKo und betriebliche
        Arbeitssicherheit sauber verzahnt, vermeidet Doppelarbeit, Lücken in Nachweisen und Konflikte
        zwischen Projektleitung und Arbeitsschutzorganisation.
      </BlogLead>

      <BlogH2>Zwei Welten – ein Arbeitgeber</BlogH2>
      <p>
        Auf der Baustelle koordiniert der SiGeKo (Sicherheits- und Gesundheitsschutzkoordinator) den
        Arbeitsschutz zwischen mehreren Unternehmen. Im Stammbetrieb gelten ASiG, DGUV Vorschrift 2
        und die betriebliche Gefährdungsbeurteilung weiter – unabhängig davon, ob gerade ein
        Bauvorhaben läuft.
      </p>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 8 Abs. 1 (Zusammenarbeit mehrerer Arbeitgeber)"
        quote="Werden Beschäftigte mehrerer Arbeitgeber an einem Arbeitsplatz tätig, sind die Arbeitgeber verpflichtet, bei der Durchführung der Sicherheits- und Gesundheitsschutzbestimmungen zusammenzuarbeiten. … haben die Arbeitgeber … sich gegenseitig und ihre Beschäftigten über die mit den Arbeiten verbundenen Gefahren … zu unterrichten und Maßnahmen zur Verhütung dieser Gefahren abzustimmen."
        source="09_ArbSchG.pdf (Gesetze-Vorschriften)"
      />
      <BlogLegalRef>
        BaustellV § 3: Koordinator bestellen bei mehreren Arbeitgebern auf der Baustelle; SiGePlan
        und Unterlage für spätere Arbeiten erstellen bzw. anpassen.
      </BlogLegalRef>

      <BlogH2>Aufgaben des SiGeKo auf der Baustelle</BlogH2>
      <BlogList
        items={[
          "Planungsphase: SiGePlan ausarbeiten, Maßnahmen nach § 2 BaustellV koordinieren",
          "Ausführungsphase: Zusammenarbeit der Arbeitgeber organisieren, Arbeitsverfahren überwachen",
          "Dokumentation: Übergaben, Änderungen, Unterlage für spätere Arbeiten an der baulichen Anlage",
          "Abstimmung mit Nachunternehmern und Bauherrn",
        ]}
      />

      <BlogH2>Was im Stammbetrieb parallel läuft</BlogH2>
      <BlogList
        items={[
          "Gefährdungsbeurteilungen fortschreiben (neue Arbeitsmittel, Gefahrstoffe, Prozesse vom Bau)",
          "Unterweisungen für Beschäftigte, die zwischen Betrieb und Baustelle wechseln",
          "Betriebsbegehungen und ASA in der gewohnten Kadenz",
          "Einbindung von FaSi und Betriebsarzt – auch für temporäre Baustellenbesetzungen",
        ]}
      />

      <BlogH3>Typische Schnittstellen-Probleme</BlogH3>
      <BlogList
        items={[
          "Neue Maschinen vom Bau ins Werk – ohne Aktualisierung der Gefährdungsbeurteilung",
          "Subunternehmer kennen betriebliche Regeln nicht (PSA, Meldewege, Gefahrstoffe)",
          "SiGePlan und betriebliche Unterweisung widersprechen sich bei Fluchtwegen oder PSA",
          "Nachweise liegen nur auf der Baustelle, nicht im Stammbetrieb archiviert",
        ]}
      />

      <BlogH2>Praxislösung: eine Schnittstellen-Regelung</BlogH2>
      <p>
        Sinnvoll ist ein schriftliches Schnittstellenprotokoll: Wer informiert wen, wann fließen
        Erkenntnisse vom Bauvorhaben in den Betrieb zurück, und welche Unterlagen werden zentral
        abgelegt? Gerade für Bauunternehmen und Industriebetriebe mit eigenen Bauvorhaben in Köln
        und NRW reduziert das Reibung und macht Audits beherrschbar.
      </p>

      <BlogTakeaway>
        SiGeKo und Stammbetrieb sind kein Entweder-oder. Wir begleiten Bauvorhabe und Betrieb aus
        einer Hand –{" "}
        <Link href="/leistungen/sigeko" className="font-semibold text-nrw-gruen hover:underline">
          SiGeKo
        </Link>{" "}
        und{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          externe FaSi
        </Link>
        . Typische Fragen finden Sie in der{" "}
        <Link href="/faq" className="font-semibold text-nrw-gruen hover:underline">
          FAQ
        </Link>
        .
      </BlogTakeaway>

      <BlogDisclaimer />
    </BlogArticleShell>
  );
}
