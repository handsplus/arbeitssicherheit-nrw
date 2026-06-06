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

export function UnterweisungArbeitssicherheit() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Unterweisungen sind kein Formalakt – sie sind gesetzliche Pflicht und müssen auf die
        tatsächlichen Gefährdungen am Arbeitsplatz zugeschnitten sein. Was muss wirklich dokumentiert
        und vermittelt werden?
      </BlogLead>

      <BlogH2>Gesetzliche Grundlage: ArbSchG § 12</BlogH2>
      <p>
        Der Arbeitgeber muss Beschäftigte während der Arbeitszeit ausreichend und angemessen über
        Sicherheit und Gesundheitsschutz unterweisen. Die Inhalte müssen auf den konkreten
        Arbeitsplatz oder Aufgabenbereich ausgerichtet sein.
      </p>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 12 Abs. 1"
        quote="Der Arbeitgeber hat die Beschäftigten über Sicherheit und Gesundheitsschutz bei der Arbeit während ihrer Arbeitszeit ausreichend und angemessen zu unterweisen. Die Unterweisung umfaßt Anweisungen und Erläuterungen, die eigens auf den Arbeitsplatz oder den Aufgabenbereich der Beschäftigten ausgerichtet sind. Die Unterweisung muß bei der Einstellung, bei Veränderungen im Aufgabenbereich, der Einführung neuer Arbeitsmittel oder einer neuen Technologie vor Aufnahme der Tätigkeit der Beschäftigten erfolgen."
        source="09_ArbSchG.pdf (Gesetze-Vorschriften)"
      />

      <BlogH2>Pflichtinhalte – abgeleitet aus der Gefährdungsbeurteilung</BlogH2>
      <p>
        Es gibt keinen starren Standardkatalog für alle Betriebe. Sinnvolle Inhalte ergeben sich aus
        Ihrer Gefährdungsbeurteilung und den betrieblichen Abläufen. Typische Themen:
      </p>
      <BlogList
        items={[
          "Arbeitsplatzspezifische Gefährdungen und Schutzmaßnahmen",
          "Verhalten bei Störungen, Unfällen und Evakuierung",
          "Persönliche Schutzausrüstung: wann, wie, welche",
          "Umgang mit Arbeitsmitteln, Maschinen, Gefahrstoffen",
          "Ergonomie, Ordnung und Sauberkeit, psychische Belastungen (wo relevant)",
          "Melde- und Eskalationswege (Vorgesetzte, FaSi, Ersthelfer)",
        ]}
      />

      <BlogH3>Rolle der FaSi und DGUV Vorschrift 2</BlogH3>
      <p>
        Die Fachkraft für Arbeitssicherheit wirkt bei Unterweisungen mit – insbesondere bei der
        inhaltlichen Ausrichtung und bei der Schulung von Sicherheitsbeauftragten. Die DGUV
        Vorschrift 2 definiert den Betreuungsumfang und macht deutlich, dass Unterweisung ein
        Kernelement der betrieblichen Arbeitssicherheit ist, nicht ein Zusatz.
      </p>
      <BlogLegalRef>
        ASiG § 6 Nr. 4: FaSi belehrt über Gefahren und wirkt bei Schulung der Sicherheitsbeauftragten
        mit.
      </BlogLegalRef>

      <BlogH2>Nachweise: Was Auditoren und Behörden erwarten</BlogH2>
      <BlogList
        items={[
          "Datum, Dauer und Ort der Unterweisung",
          "Themen/Inhalte (stichpunktartig reicht, wenn nachvollziehbar)",
          "Zielgruppe und Referent/in",
          "Teilnehmerliste mit Unterschrift oder digitalem Nachweis",
          "Wiederholungsintervalle (z. B. jährlich, bei Bedarf häufiger)",
        ]}
      />
      <p>
        Bei Leiharbeit und Arbeitnehmerüberlassung: Die Unterweisungspflicht trifft den Entleiher –
        unter Berücksichtigung der Qualifikation der überlassenen Personen. Der Verleiher behält
        weitere Arbeitsschutzpflichten.
      </p>

      <BlogH2>Schnittstelle Brandschutz</BlogH2>
      <p>
        Brandschutzunterweisungen (z. B. Brandschutzhelfer, Verhalten im Brandfall) ergänzen, ersetzen
        aber nicht die arbeitsplatzbezogene Arbeitsschutzunterweisung. Beide sollten inhaltlich
        zusammenpassen – Fluchtwege, Sammelplätze und Alarmierung einmalig und konsistent
        kommunizieren.
      </p>

      <BlogTakeaway>
        Gute Unterweisung = Gefährdungsbeurteilung + Nachweis + Wiederholung. Wir helfen Betrieben
        in Köln und NRW bei Konzept, Durchführung und Dokumentation – im Rahmen unserer{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          FaSi-Betreuung
        </Link>{" "}
        und{" "}
        <Link href="/leistungen/schulungen" className="font-semibold text-nrw-gruen hover:underline">
          Schulungen
        </Link>
        .
      </BlogTakeaway>

      <BlogDisclaimer />
    </BlogArticleShell>
  );
}
