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

export function GefaehrdungsbeurteilungUnterschrift() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Muss eine Gefährdungsbeurteilung unterschrieben werden? Diese Frage taucht in Köln und ganz
        NRW regelmäßig auf, etwa bei internen Freigabeprozessen, ASA-Sitzungen, Audits oder
        Betriebsbegehungen. Die rechtlich saubere Antwort lautet: Das Gesetz fordert in erster Linie
        die Beurteilung selbst, die nachvollziehbare Dokumentation und die wirksame Umsetzung von
        Schutzmaßnahmen.
      </BlogLead>
      <BlogLead>
        Eine Unterschrift kann in der Praxis sinnvoll sein, sie ist aber nicht der Kern der
        Rechtssicherheit. Entscheidend ist, ob der Arbeitgeber Gefährdungen systematisch ermittelt,
        Maßnahmen festlegt, Verantwortlichkeiten organisiert und die Ergebnisse bei Veränderungen
        fortschreibt. Genau daran messen Aufsichtsbehörden und Berufsgenossenschaften die Qualität.
      </BlogLead>

      <BlogH2>Was das Gesetz wirklich verlangt</BlogH2>
      <p>
        Das Arbeitsschutzgesetz verpflichtet den Arbeitgeber, die Arbeitsbedingungen zu beurteilen
        und auf dieser Grundlage geeignete Schutzmaßnahmen festzulegen. Eine ausdrückliche
        Unterschriftspflicht auf dem Dokument nennt das Gesetz dagegen nicht. Wer seine
        Gefährdungsbeurteilung ausschließlich auf eine Signatur reduziert, verfehlt deshalb den
        eigentlichen Zweck.
      </p>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 5 Abs. 1"
        quote="Der Arbeitgeber hat durch eine Beurteilung der für die Beschäftigten mit ihrer Arbeit verbundenen Gefährdung zu ermitteln, welche Maßnahmen des Arbeitsschutzes erforderlich sind."
        sourceLabel="ArbSchG § 5"
        sourceHref={GESETZ.arbSchG5}
      />
      <BlogGesetzesZitat
        paragraph="ArbSchG § 6 Abs. 1"
        quote="Der Arbeitgeber muß über die je nach Art der Tätigkeiten und der Zahl der Beschäftigten erforderlichen Unterlagen verfügen, aus denen das Ergebnis der Gefährdungsbeurteilung, die von ihm festgelegten Maßnahmen des Arbeitsschutzes und das Ergebnis ihrer Überprüfung ersichtlich sind."
        sourceLabel="ArbSchG § 6"
        sourceHref={GESETZ.arbSchG6}
      />
      <BlogLegalRef>
        Rechtsgrundlage für die allgemeine Gefährdungsbeurteilung sind vor allem{" "}
        <a href={GESETZ.arbSchG5} target="_blank" rel="noopener noreferrer" className="font-medium text-nrw-gruen hover:underline">
          ArbSchG § 5
        </a>{" "}
        und{" "}
        <a href={GESETZ.arbSchG6} target="_blank" rel="noopener noreferrer" className="font-medium text-nrw-gruen hover:underline">
          § 6
        </a>
        . Gefordert werden Ermittlung, Dokumentation und Wirksamkeitskontrolle, nicht ein
        bestimmtes Formularmerkmal.
      </BlogLegalRef>

      <BlogH2>Warum die Verantwortung trotzdem eindeutig bleibt</BlogH2>
      <p>
        Auch wenn Führungskräfte, eine externe{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          Fachkraft für Arbeitssicherheit
        </Link>{" "}
        oder der Betriebsarzt an der Erstellung mitwirken, bleibt die Arbeitgeberverantwortung
        bestehen. Eine fehlende Unterschrift entlastet nicht. Umgekehrt übernimmt eine unterzeichnende
        FaSi nicht automatisch die Unternehmerpflichten.
      </p>
      <p>
        In gut organisierten Betrieben ist daher klar geregelt, wer Informationen zuliefert, wer
        Maßnahmen freigibt und wer die Umsetzung nachverfolgt. Das ist deutlich wichtiger als die
        Frage, ob unten links eine Signatur steht.
      </p>
      <BlogH3>Praxisnutzen einer freiwilligen Unterschrift</BlogH3>
      <BlogList
        items={[
          "Freigabestand und Versionswechsel werden intern leichter nachvollziehbar.",
          "Führungskräfte bestätigen, dass sie Inhalte erhalten und umgesetzt haben.",
          "Bei Audits entsteht ein klarer Nachweis für Prüftermine und Verantwortungsübergaben.",
          "Bei mehreren Standorten bleibt erkennbar, welche Fassung in Köln oder an anderen NRW-Standorten gilt.",
        ]}
      />

      <BlogH2>Wann die Dokumentation besonders belastbar sein muss</BlogH2>
      <p>
        Bei Tätigkeiten mit Gefahrstoffen steigen die Anforderungen. Dann genügt keine knappe
        Stichwortliste, sondern die Dokumentation muss erkennen lassen, welche Gefährdungen vorliegen,
        welche Expositionen entstehen können, ob eine Substitution geprüft wurde und welche
        Schutzmaßnahmen vor Aufnahme der Tätigkeit festgelegt wurden.
      </p>
      <BlogGesetzesZitat
        paragraph="GefStoffV § 6 Abs. 11"
        quote="Die Gefährdungsbeurteilung darf nur von fachkundigen Personen durchgeführt werden. Verfügt der Arbeitgeber nicht selbst über die entsprechenden Kenntnisse, so hat er sich fachkundig beraten zu lassen. Fachkundig können insbesondere die Fachkraft für Arbeitssicherheit und die Betriebsärztin oder der Betriebsarzt sein."
        sourceLabel="GefStoffV § 6"
        sourceHref={GESETZ.gefStoffV6}
      />
      <BlogLegalRef>
        Bei Gefahrstoffen sind insbesondere{" "}
        <a href={GESETZ.gefStoffV6} target="_blank" rel="noopener noreferrer" className="font-medium text-nrw-gruen hover:underline">
          GefStoffV § 6
        </a>{" "}
        und{" "}
        <a href={GESETZ.gefStoffV7} target="_blank" rel="noopener noreferrer" className="font-medium text-nrw-gruen hover:underline">
          GefStoffV § 7
        </a>{" "}
        relevant: Erst beurteilen, dann Tätigkeiten freigeben und Schutzmaßnahmen umsetzen.
      </BlogLegalRef>
      <BlogH3>Typische Mindestinhalte</BlogH3>
      <BlogList
        items={[
          "Arbeitsbereiche, Tätigkeiten und betroffene Personengruppen",
          "erkannte Gefährdungen einschließlich besonderer Expositionen",
          "festgelegte technische, organisatorische und personenbezogene Maßnahmen",
          "Prüffristen, Unterweisungsbedarfe und Wirksamkeitskontrollen",
          "Datum der Überprüfung und Anlass der letzten Aktualisierung",
        ]}
      />

      <BlogH2>Wie Betriebe in Köln und NRW rechtssicher vorgehen</BlogH2>
      <p>
        Rechtssicher wird die Gefährdungsbeurteilung nicht durch eine schöne Vorlage, sondern durch
        einen belastbaren Prozess. Dazu gehören aktuelle Tätigkeitsbeschreibungen, die Einbindung der
        Führungskräfte, die Übernahme relevanter Erkenntnisse aus Begehungen und Unfällen sowie eine
        saubere Verzahnung mit Unterweisungen und Prüfungen.
      </p>
      <BlogSteps
        items={[
          "Arbeitsbereiche und Tätigkeiten getrennt erfassen, statt ein einziges Sammeldokument zu führen.",
          "Gefährdungen bewerten und Maßnahmen mit Termin, Verantwortlichem und Priorität hinterlegen.",
          "Unterweisungen aus der Gefährdungsbeurteilung ableiten und Nachweise passend ablegen.",
          "Bei Umbauten, neuen Arbeitsmitteln oder Gefahrstoffen die Beurteilung sofort fortschreiben.",
        ]}
      />

      <BlogH2>Häufige Fehler rund um die Unterschriftsfrage</BlogH2>
      <BlogList
        items={[
          "Es wird nur gefragt, ob unterschrieben wurde, aber nicht, ob die Inhalte aktuell sind.",
          "Versionen kursieren parallel als PDF, Ausdruck und Excel ohne Freigaberegel.",
          "Maßnahmen werden dokumentiert, aber nie auf Wirksamkeit überprüft.",
          "Unterweisungen laufen losgelöst von der Gefährdungsbeurteilung.",
          "Externe Berater erstellen Unterlagen, ohne dass interne Verantwortliche eingebunden sind.",
        ]}
      />

      <BlogH2>Unsere Empfehlung für Unternehmen</BlogH2>
      <p>
        Wenn Sie intern mit Freigabevermerken arbeiten möchten, ist das sinnvoll. Wichtig ist nur,
        dass diese Praxis nicht mit einer gesetzlichen Muss-Vorgabe verwechselt wird. Für Betriebe in
        Köln und NRW empfehlen wir ein Freigabesystem, das Fachlichkeit, Aktualität und Umsetzung
        sichtbar macht: Dokument mit Versionsstand, Verantwortlichem, Prüfdatum und Maßnahmenstatus.
      </p>
      <p>
        Gerade bei mehreren Standorten, Fremdfirmen oder sensiblen Tätigkeiten ist außerdem sinnvoll,
        die Gefährdungsbeurteilung mit Prozessen aus{" "}
        <Link href="/leistungen/managementsysteme" className="font-semibold text-nrw-gruen hover:underline">
          Managementsystemen
        </Link>{" "}
        und der laufenden Beratung zur{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          Arbeitssicherheit
        </Link>{" "}
        zu verbinden.
      </p>

      <BlogTakeaway>
        Eine gesetzliche Unterschriftspflicht für die Gefährdungsbeurteilung besteht nicht. Maßgeblich
        sind eine fachkundige Erstellung, eine nachvollziehbare Dokumentation und die wirksame
        Umsetzung der Maßnahmen. Wenn Sie Ihre Unterlagen in Köln oder NRW überprüfen und
        belastbar strukturieren möchten, unterstützen wir Sie bei Gefährdungsbeurteilung,
        Unterweisungen und Organisationsprozessen.
      </BlogTakeaway>

      <BlogRelated
        links={[
          {
            href: "/blog/gefaehrdungsbeurteilung-erstellen-schritt-fuer-schritt",
            label: "Gefährdungsbeurteilung erstellen: Schritt für Schritt",
          },
          {
            href: "/blog/unterweisung-arbeitssicherheit-pflichtinhalte",
            label: "Unterweisung Arbeitssicherheit: Was muss wirklich drinstehen?",
          },
          {
            href: "/blog/betriebsbegehung-was-wird-geprueft",
            label: "Betriebsbegehung: Was wird geprüft?",
          },
        ]}
      />

      <BlogDisclaimer />
    </BlogArticleShell>
  );
}
