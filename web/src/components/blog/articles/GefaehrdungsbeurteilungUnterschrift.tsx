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

export function GefaehrdungsbeurteilungUnterschrift() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Viele Betriebe in Köln und NRW fragen uns: Muss die Gefährdungsbeurteilung unterschrieben
        werden? Die kurze Antwort: Eine Unterschrift ist gesetzlich nicht vorgeschrieben – die
        Dokumentation und die Verantwortung des Arbeitgebers sind es sehr wohl.
      </BlogLead>

      <BlogH2>Keine Unterschriftspflicht im Gesetz</BlogH2>
      <p>
        Weder das Arbeitsschutzgesetz (ArbSchG) noch die Gefahrstoffverordnung (GefStoffV) verlangen
        ausdrücklich eine Unterschrift auf der Gefährdungsbeurteilung. Entscheidend ist, dass der
        Arbeitgeber die Beurteilung der Arbeitsbedingungen durchführt, dokumentiert und die daraus
        folgenden Schutzmaßnahmen umsetzt.
      </p>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 5 Abs. 1"
        quote="Der Arbeitgeber hat durch eine Beurteilung der für die Beschäftigten mit ihrer Arbeit verbundenen Gefährdung zu ermitteln, welche Maßnahmen des Arbeitsschutzes erforderlich sind."
        source="09_ArbSchG.pdf (Gesetze-Vorschriften)"
      />

      <BlogH2>Verantwortung bleibt beim Arbeitgeber</BlogH2>
      <p>
        Der Arbeitgeber kann Aufgaben an Führungskräfte, FaSi, Betriebsarzt oder externe Berater
        übertragen – die Gesamtverantwortung für den Arbeitsschutz verbleibt aber bei ihm. Wer im
        Namen des Arbeitgebers handelt, gilt als dessen Vertreter; die Gefährdungsbeurteilung ist
        deshalb auch ohne Unterschrift rechtlich dem Arbeitgeber zuzuordnen.
      </p>
      <p>
        Eine Unterschrift durch die FaSi oder den Betriebsarzt begründet keine Verantwortungsübernahme
        vom Arbeitgeber. Sie kann in der Praxis dennoch sinnvoll sein, um die fachliche Mitwirkung
        nachvollziehbar zu machen – etwa bei Behörden, Audits oder internen Freigabeprozessen.
      </p>

      <BlogH2>Dokumentation: Pflicht, nicht optional</BlogH2>
      <p>
        Bei Tätigkeiten mit Gefahrstoffen ist die Dokumentation der Gefährdungsbeurteilung ausdrücklich
        geregelt. Sie muss vor Aufnahme der Tätigkeit erstellt werden und mindestens folgende Punkte
        enthalten:
      </p>
      <BlogList
        items={[
          "festgestellte Gefährdungen und Expositionen",
          "Ergebnis der Substitutionsprüfung",
          "festgelegte und geplante Schutzmaßnahmen",
          "Begründungen bei Abweichungen von TRGS/TRBS oder Grenzwertüberschreitungen",
          "Nachweise zur Einhaltung von Arbeitsplatzgrenzwerten",
        ]}
      />
      <BlogGesetzesZitat
        paragraph="ArbSchG § 6 Abs. 1 (Dokumentation)"
        quote="Der Arbeitgeber muß über die je nach Art der Tätigkeiten und der Zahl der Beschäftigten erforderlichen Unterlagen verfügen, aus denen das Ergebnis der Gefährdungsbeurteilung, die von ihm festgelegten Maßnahmen des Arbeitsschutzes und das Ergebnis ihrer Überprüfung ersichtlich sind."
        source="09_ArbSchG.pdf (Gesetze-Vorschriften)"
      />
      <BlogLegalRef>
        GefStoffV § 6 Abs. 8: bei Gefahrstoffen detaillierte Dokumentation vor Aufnahme der Tätigkeit;
        regelmäßige Überprüfung und Aktualisierung bei maßgeblichen Veränderungen.
      </BlogLegalRef>

      <BlogH3>Fachkunde ist Voraussetzung</BlogH3>
      <p>
        Die Gefährdungsbeurteilung darf nur von fachkundigen Personen durchgeführt werden. Verfügt der
        Arbeitgeber nicht über die nötigen Kenntnisse, muss er sich beraten lassen – typischerweise
        durch die Fachkraft für Arbeitssicherheit und den Betriebsarzt.
      </p>
      <BlogGesetzesZitat
        paragraph="GefStoffV § 6 Abs. 11"
        quote="Die Gefährdungsbeurteilung darf nur von fachkundigen Personen durchgeführt werden. Verfügt der Arbeitgeber nicht selbst über die entsprechenden Kenntnisse, so hat er sich fachkundig beraten zu lassen. Fachkundig können insbesondere die Fachkraft für Arbeitssicherheit und die Betriebsärztin oder der Betriebsarzt sein."
        source="12_GefStoffV.pdf (Gesetze-Vorschriften)"
      />

      <BlogH2>Tätigkeiten mit Gefahrstoffen: erst beurteilen, dann starten</BlogH2>
      <p>
        Besonders strikt ist die Reihenfolge bei Gefahrstoffen: Eine Tätigkeit darf erst aufgenommen
        werden, wenn die Gefährdungsbeurteilung durchgeführt und die erforderlichen Schutzmaßnahmen
        ergriffen wurden.
      </p>
      <BlogLegalRef>
        GefStoffV § 7 Abs. 1: Tätigkeit mit Gefahrstoffen erst nach Gefährdungsbeurteilung und
        Schutzmaßnahmen.
      </BlogLegalRef>

      <BlogH2>Was Betriebe in NRW praktisch tun sollten</BlogH2>
      <BlogList
        items={[
          "Gefährdungsbeurteilungen je Arbeitsplatz oder Tätigkeit führen (ArbSchG § 5 Abs. 2)",
          "Versionierung und Änderungsdatum dokumentieren – nicht nur einmalig erstellen",
          "Bei Gefahrstoffen: Verweis auf Sicherheitsdatenblätter und Gefahrstoffverzeichnis",
          "Unterweisungen an der Gefährdungsbeurteilung ausrichten (ArbSchG § 12)",
          "FaSi und Betriebsarzt frühzeitig einbinden – nicht erst vor der Behördenbegehung",
        ]}
      />

      <BlogTakeaway>
        Eine Unterschrift ist nicht Pflicht, eine belastbare Dokumentation schon. Für Betriebe in
        Köln und NRW empfehlen wir: Gefährdungsbeurteilung fachlich fundiert erstellen, versionieren
        und mit Unterweisungen sowie Maßnahmenplänen verknüpfen. Bei Fragen zur Umsetzung unterstützen
        wir als{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          externe FaSi
        </Link>
        .
      </BlogTakeaway>

      <BlogDisclaimer />
    </BlogArticleShell>
  );
}
