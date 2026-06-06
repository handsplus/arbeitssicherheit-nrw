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

export function SigekoNrwOrientierung() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Bauherren, Architekten und ausführende Unternehmen in NRW stehen vor derselben Frage: Brauchen
        wir einen SiGeKo – und ab wann? Diese Orientierungshilfe fasst die wichtigsten Pflichten
        kompakt zusammen.
      </BlogLead>

      <BlogH2>Wann greift die Baustellenverordnung?</BlogH2>
      <p>
        Die BaustellV gilt für Baustellen, auf denen Beschäftigte mehrerer Arbeitgeber tätig werden
        oder werden können. Sobald mehrere Firmen auf einer Baustelle arbeiten, ist in der Regel ein
        SiGeKo zu bestellen – es sei denn, ein Unternehmen führt alle Arbeiten allein aus.
      </p>
      <BlogGesetzesZitat
        paragraph="BaustellV § 3 Abs. 1 und 1a (gesetze-im-internet.de)"
        quote="Für Baustellen, auf denen Beschäftigte mehrerer Arbeitgeber tätig werden, hat der nach § 4 Verantwortliche einen oder mehrere geeignete Koordinatoren zu bestellen. … Der Bauherr oder der von ihm beauftragte Dritte wird durch die Beauftragung geeigneter Koordinatoren nicht von seiner Verantwortung entbunden."
        source="Baustellenverordnung (online); ergänzend: 34_ArbSchG.pdf in Gesetze-Vorschriften"
      />

      <BlogH2>Planungsphase: SiGePlan und Vorausschau</BlogH2>
      <BlogList
        items={[
          "SiGePlan (Sicherheits- und Gesundheitsschutzplan) ausarbeiten oder ausarbeiten lassen",
          "Maßnahmen nach § 2 BaustellV koordinieren – bereits vor Baubeginn",
          "Unterlage für spätere Arbeiten an der baulichen Anlage zusammenstellen",
          "Gefährdungen aus Planung, Gewerken und Schnittstellen früh identifizieren",
        ]}
      />

      <BlogH2>Ausführungsphase: Koordination vor Ort</BlogH2>
      <BlogList
        items={[
          "Allgemeine Grundsätze des ArbSchG zwischen den Arbeitgebern abstimmen",
          "Sicherstellen, dass alle Arbeitgeber ihre Pflichten erfüllen",
          "SiGePlan bei relevanten Änderungen anpassen",
          "Zusammenarbeit organisieren und Arbeitsverfahren überwachen",
        ]}
      />
      <BlogLegalRef>
        BaustellV § 3 Abs. 3: Aufgaben des Koordinators während der Ausführung des Bauvorhabens.
      </BlogLegalRef>

      <BlogH2>Wer beauftragt den SiGeKo?</BlogH2>
      <p>
        Der Bauherr (oder ein von ihm beauftragter Dritter) muss geeignete Koordinatoren bestellen.
        Die Beauftragung entbindet den Bauherrn nicht von seiner Verantwortung. Der SiGeKo kann vom
        Bauherrn selbst wahrgenommen werden, wenn die Qualifikation vorhanden ist – in der Praxis
        oft extern.
      </p>

      <BlogH3>Besonderheiten in NRW</BlogH3>
      <p>
        Bauvorhaben in Köln, im Rheinland und im Ruhrgebiet unterliegen der Bauaufsicht nach BauO
        NRW. SiGeKo-Pflichten nach BaustellV sind davon unabhängig – sie betreffen den
        Arbeitsschutz auf der Baustelle, nicht die Baugenehmigung. Dennoch sollten SiGePlan,
        Brandschutzkonzept und bauliche Anforderungen abgestimmt werden.
      </p>

      <BlogH2>Schnittstelle zum Stammbetrieb</BlogH2>
      <p>
        Viele Bauunternehmen und Industriebetriebe betreiben parallel einen Stammbetrieb. Dort laufen
        Gefährdungsbeurteilung, FaSi-Betreuung und Unterweisungen weiter. Informationen vom
        Bauvorhaben (neue Arbeitsmittel, Gefahrstoffe, Prozesse) sollten in den Betrieb
        zurückfließen – sonst entstehen Lücken nach Projektende.
      </p>

      <BlogTakeaway>
        SiGeKo in NRW: früh planen, klar dokumentieren, Schnittstellen zum Betrieb nicht vergessen.
        Wir unterstützen Bauherren und ausführende Unternehmen als{" "}
        <Link href="/leistungen/sigeko" className="font-semibold text-nrw-gruen hover:underline">
          externer SiGeKo
        </Link>
        . Orientierungswerte finden Sie im{" "}
        <Link href="/rechner" className="font-semibold text-nrw-gruen hover:underline">
          Rechner
        </Link>{" "}
        und in der{" "}
        <Link href="/faq" className="font-semibold text-nrw-gruen hover:underline">
          FAQ
        </Link>
        .
      </BlogTakeaway>

      <BlogDisclaimer />
    </BlogArticleShell>
  );
}
