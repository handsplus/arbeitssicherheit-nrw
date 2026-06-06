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

export function SigekoBetrieb() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Viele Unternehmen behandeln Baustelle und Stammbetrieb als zwei getrennte Welten. Genau dort
        entstehen jedoch typische Lücken im Arbeitsschutz: Auf der Baustelle läuft die Koordination
        über den SiGeKo, im Betrieb greifen Gefährdungsbeurteilung, Unterweisung, ASA und laufende
        Betreuung weiter. Ohne klare Schnittstelle verliert man schnell den Überblick.
      </BlogLead>
      <BlogLead>
        Besonders relevant ist das für Bauunternehmen, Industriebetriebe, Logistikstandorte und
        Betreiber mit Umbauten im laufenden Betrieb in Köln und NRW. Wer die Informationsflüsse nicht
        organisiert, erzeugt Doppelarbeit auf der Baustelle und gefährliche Blindstellen im
        Stammbetrieb.
      </BlogLead>

      <BlogH2>Warum Baustelle und Betrieb zusammengehören</BlogH2>
      <p>
        Auf Baustellen mit mehreren Arbeitgebern greift die Koordinationslogik der
        Baustellenverordnung. Gleichzeitig bleiben die allgemeinen Unternehmerpflichten nach
        Arbeitsschutzgesetz und die betriebliche Arbeitsschutzorganisation bestehen. Das bedeutet: Der
        SiGeKo koordiniert, ersetzt aber nicht die unternehmensinternen Pflichten der beteiligten
        Arbeitgeber.
      </p>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 8 Abs. 1"
        quote="Werden Beschäftigte mehrerer Arbeitgeber an einem Arbeitsplatz tätig, sind die Arbeitgeber verpflichtet, bei der Durchführung der Sicherheits- und Gesundheitsschutzbestimmungen zusammenzuarbeiten."
        sourceLabel="ArbSchG"
        sourceHref={GESETZ.arbSchG}
      />
      <BlogGesetzesZitat
        paragraph="BaustellV § 3 Abs. 1"
        quote="Für Baustellen, auf denen Beschäftigte mehrerer Arbeitgeber tätig werden, hat der nach § 4 Verantwortliche einen oder mehrere geeignete Koordinatoren zu bestellen."
        sourceLabel="BaustellV § 3"
        sourceHref={GESETZ.baustellV3}
      />
      <BlogLegalRef>
        Die Bestellung eines Koordinators nach{" "}
        <a href={GESETZ.baustellV3} target="_blank" rel="noopener noreferrer" className="font-medium text-nrw-gruen hover:underline">
          BaustellV § 3
        </a>{" "}
        entbindet die beteiligten Arbeitgeber nicht von ihren eigenen Pflichten aus dem{" "}
        <a href={GESETZ.arbSchG} target="_blank" rel="noopener noreferrer" className="font-medium text-nrw-gruen hover:underline">
          Arbeitsschutzgesetz
        </a>
        .
      </BlogLegalRef>

      <BlogH2>Welche Aufgaben der SiGeKo auf der Baustelle wahrnimmt</BlogH2>
      <p>
        Der{" "}
        <Link href="/leistungen/sigeko" className="font-semibold text-nrw-gruen hover:underline">
          SiGeKo
        </Link>{" "}
        koordiniert die Zusammenarbeit mehrerer Unternehmen, wirkt bei der Planung von
        Schutzmaßnahmen mit und sorgt dafür, dass der SiGePlan aktuell bleibt. Er ist vor allem ein
        Schnittstellenmanager: zwischen Bauherr, Planern, ausführenden Firmen und den jeweiligen
        Arbeitsschutzorganisationen.
      </p>
      <BlogList
        items={[
          "Gefährdungen aus parallelen oder aufeinanderfolgenden Arbeiten erkennen und abstimmen",
          "SiGePlan und Baustellenregeln fortschreiben und kommunizieren",
          "Unterlage für spätere Arbeiten an der baulichen Anlage vorbereiten oder fortführen",
          "Schnittstellen zwischen Nachunternehmern, Fremdfirmen und Bauherrn moderieren",
        ]}
      />

      <BlogH2>Was im Stammbetrieb parallel weiterlaufen muss</BlogH2>
      <p>
        Während das Bauvorhaben läuft, darf der Stammbetrieb arbeitsschutzrechtlich nicht in den
        Hintergrund rutschen. Neue Anlagen, geänderte Verkehrswege, Baustellenverkehr, Fremdfirmen oder
        geänderte Fluchtwege wirken oft direkt auf den laufenden Betrieb zurück. Diese Änderungen
        müssen in die regulären Prozesse aufgenommen werden.
      </p>
      <BlogList
        items={[
          "Gefährdungsbeurteilungen für betroffene Bereiche fortschreiben",
          "Unterweisungen für eigene Beschäftigte und Schnittstellenbereiche anpassen",
          "Betriebsbegehungen und ASA-Sitzungen um baubedingte Themen ergänzen",
          "Abstimmung mit externer oder interner FaSi und gegebenenfalls Betriebsarzt sicherstellen",
        ]}
      />

      <BlogH2>Typische Schnittstellenprobleme in der Praxis</BlogH2>
      <BlogH3>Wo Unternehmen regelmäßig Zeit und Sicherheit verlieren</BlogH3>
      <BlogList
        items={[
          "Baustellenregeln existieren, sind aber im Betrieb niemandem bekannt.",
          "Neue Maschinen oder Medienanschlüsse werden übernommen, ohne Gefährdungsbeurteilung zu aktualisieren.",
          "Fremdfirmen werden auf der Baustelle eingewiesen, aber betriebliche Regeln fehlen.",
          "Unterlagen liegen dezentral bei Bauleitung, Projektsteuerung und Betrieb separat vor.",
          "Fluchtwege, Sammelplätze oder Verkehrsregeln ändern sich, ohne dass Unterweisungen nachgezogen werden.",
        ]}
      />

      <BlogH2>Empfohlene Schnittstellen-Regelung</BlogH2>
      <p>
        In der Praxis bewährt sich ein schriftlich definiertes Übergabe- und Informationssystem.
        Wichtig ist nicht nur, wer Unterlagen erstellt, sondern wer sie in den Betrieb zurückspielt,
        bewertet und in bestehende Prozesse übernimmt. Gerade bei laufendem Betrieb ist das ein
        zentraler Erfolgsfaktor.
      </p>
      <BlogSteps
        items={[
          "Verantwortliche für Baustelle, Betrieb, FaSi und Projektleitung benennen.",
          "Feste Übergabepunkte definieren: Baubeginn, wesentliche Änderungen, Inbetriebnahme, Abschluss.",
          "Dokumente zentral führen, zum Beispiel SiGePlan, Einweisungen, Protokolle und Freigaben.",
          "Änderungen in Gefährdungsbeurteilung, Unterweisung und Prüforganisation verbindlich übernehmen.",
        ]}
      />
      <BlogLegalRef>
        Für die Zusammenarbeit mehrerer Arbeitgeber ist auch die allgemeine Kooperationspflicht aus{" "}
        <a href={GESETZ.arbSchG} target="_blank" rel="noopener noreferrer" className="font-medium text-nrw-gruen hover:underline">
          ArbSchG § 8
        </a>{" "}
        relevant. Sie gilt nicht nur auf dem Papier, sondern muss organisatorisch abgebildet werden.
      </BlogLegalRef>

      <BlogH2>Vorteile einer integrierten Betreuung</BlogH2>
      <p>
        Unternehmen profitieren besonders dann, wenn Baustellenkoordination und laufende
        Arbeitsschutzbetreuung abgestimmt aus einer Hand oder zumindest eng verzahnt erfolgen. Das
        reduziert Abstimmungsaufwand, verhindert widersprüchliche Vorgaben und verbessert die
        Nachweisführung gegenüber Behörden, Auftraggebern und internen Stakeholdern.
      </p>
      <p>
        Genau deshalb kombinieren viele Betriebe unsere Leistungen aus{" "}
        <Link href="/leistungen/sigeko" className="font-semibold text-nrw-gruen hover:underline">
          SiGeKo
        </Link>{" "}
        und{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          Arbeitssicherheit
        </Link>
        .
      </p>

      <BlogTakeaway>
        SiGeKo und betriebliche Arbeitssicherheit sind keine Alternativen, sondern zwei Ebenen
        derselben Schutzorganisation. Auf der Baustelle braucht es Koordination zwischen Unternehmen,
        im Stammbetrieb die konsequente Übernahme aller relevanten Änderungen in Beurteilung,
        Unterweisung und Organisation. Wer diese Schnittstelle sauber regelt, spart Aufwand und
        vermeidet gefährliche Informationslücken.
      </BlogTakeaway>

      <BlogRelated
        links={[
          {
            href: "/blog/sigeko-nrw-orientierung-bauherren",
            label: "SiGeKo NRW: Erste Orientierung für Bauherren und Ausführende",
          },
          {
            href: "/blog/sigeplan-inhalt-pflichten-baustelle",
            label: "SiGePlan: Inhalte, Pflichten und Anpassung",
          },
          {
            href: "/blog/externe-fachkraft-arbeitssicherheit-koeln",
            label: "Externe Fachkraft für Arbeitssicherheit in Köln",
          },
        ]}
      />

      <BlogDisclaimer />
    </BlogArticleShell>
  );
}
