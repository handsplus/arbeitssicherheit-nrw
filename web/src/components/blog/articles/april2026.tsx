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

export function GefaehrdungsbeurteilungErstellenSchritt() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Eine Gefährdungsbeurteilung ist das Herzstück des betrieblichen Arbeitsschutzes. So gehen Sie in
        Köln und NRW strukturiert vor – von der Gefahrenerkennung bis zur dokumentierten Maßnahme.
      </BlogLead>
      <BlogH2>Schritt 1: Arbeitsplätze und Tätigkeiten erfassen</BlogH2>
      <p>
        Beginnen Sie mit einer Übersicht: Welche Bereiche, Tätigkeiten und Beschäftigtengruppen gibt es?
        Bei gleichartigen Bedingungen reicht oft eine Beurteilung pro Tätigkeit oder Arbeitsplatz.
      </p>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 5 Abs. 2"
        quote="Der Arbeitgeber hat die Beurteilung je nach Art der Tätigkeiten vorzunehmen. Bei gleichartigen Arbeitsbedingungen ist die Beurteilung eines Arbeitsplatzes oder einer Tätigkeit ausreichend."
        source="09_ArbSchG.pdf (Gesetze-Vorschriften)"
      />
      <BlogH2>Schritt 2: Gefährdungen identifizieren</BlogH2>
      <BlogList
        items={[
          "Physikalische, chemische und biologische Einwirkungen",
          "Arbeitsmittel, Maschinen, Gefahrstoffe",
          "Arbeitsabläufe, Arbeitszeit, ergonomische Belastungen",
          "Unzureichende Qualifikation und Unterweisung",
          "Psychische Belastungen (seit ArbSchG-Novelle ausdrücklich)",
        ]}
      />
      <BlogH2>Schritt 3: Maßnahmen festlegen und umsetzen</BlogH2>
      <p>
        Nach dem STOP-Prinzip: Substitution, technische, organisatorische und persönliche Schutzmaßnahmen.
        Bei Gefahrstoffen: Dokumentation vor Aufnahme der Tätigkeit, fachkundige Durchführung.
      </p>
      <BlogH2>Schritt 4: Dokumentieren und fortschreiben</BlogH2>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 6 Abs. 1"
        quote="Der Arbeitgeber muß über die je nach Art der Tätigkeiten und der Zahl der Beschäftigten erforderlichen Unterlagen verfügen, aus denen das Ergebnis der Gefährdungsbeurteilung, die von ihm festgelegten Maßnahmen des Arbeitsschutzes und das Ergebnis ihrer Überprüfung ersichtlich sind."
        source="09_ArbSchG.pdf (Gesetze-Vorschriften)"
      />
      <BlogTakeaway>
        Ohne belastbare Gefährdungsbeurteilung fehlt die Basis für Unterweisungen, Begehungen und Audits.
        Unsere{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          externe FaSi
        </Link>{" "}
        unterstützt bei Erstellung und Fortschreibung.
      </BlogTakeaway>
      <BlogDisclaimer />
    </BlogArticleShell>
  );
}

export function BrandschutzhelferPflichtNrw() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Brandschutzhelfer sind oft die ersten Ansprechpartner im Brandfall. Wann braucht Ihr Betrieb in NRW
        ausgebildete Brandschutzhelfer – und was müssen Sie organisatorisch sicherstellen?
      </BlogLead>
      <BlogH2>Wann sind Brandschutzhelfer sinnvoll oder erforderlich?</BlogH2>
      <p>
        Gesetzlich kann die Bestellung aus behördlichen Auflagen, Brandschutzkonzepten, Versicherungsanforderungen
        oder der betrieblichen Gefährdungsbeurteilung folgen. In größeren Objekten und bei erhöhter
        Brandgefährdung ist die Ausbildung von Brandschutzhelfern faktisch Standard.
      </p>
      <BlogLegalRef>
        ASR A2.2 und DGUV Information 205-023 regeln Ausbildung und Befähigung von Brandschutzhelfern
        (Feuerlöscheinrichtungen, Verhalten im Brandfall).
      </BlogLegalRef>
      <BlogH2>Ausbildungsinhalt und Wiederholung</BlogH2>
      <BlogList
        items={[
          "Theoretische Grundlagen: Brandentstehung, Löschmittel, Verhalten im Brandfall",
          "Praktischer Umgang mit Feuerlöscheinrichtungen",
          "Regelmäßige Auffrischung (üblich alle 3 Jahre)",
          "Dokumentation der Teilnahme und Befähigung",
        ]}
      />
      <BlogH2>Verzahnung mit Arbeitssicherheit und BSB</BlogH2>
      <p>
        Brandschutzhelfer-Ausbildung ergänzt die Rolle des Brandschutzbeauftragten und die Evakuierungsplanung
        nach ArbSchG § 10. Fluchtwege, Sammelplätze und Alarmierung sollten konsistent kommuniziert werden.
      </p>
      <BlogTakeaway>
        Brandschutzhelfer, BSB und FaSi sollten zusammenpassen. Wir kombinieren{" "}
        <Link href="/leistungen/brandschutz" className="font-semibold text-nrw-gruen hover:underline">
          Brandschutz
        </Link>{" "}
        und{" "}
        <Link href="/leistungen/schulungen" className="font-semibold text-nrw-gruen hover:underline">
          Schulungen
        </Link>{" "}
        aus einer Hand.
      </BlogTakeaway>
      <BlogDisclaimer />
    </BlogArticleShell>
  );
}

export function SigekoAbWannPflicht() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Nicht jede Baustelle braucht einen SiGeKo – aber viele in NRW schon. Wann die Baustellenverordnung
        greift und was Bauherren früh klären sollten.
      </BlogLead>
      <BlogH2>Kurzantwort: mehrere Arbeitgeber auf der Baustelle</BlogH2>
      <p>
        Sobald Beschäftigte mehrerer Arbeitgeber gleichzeitig oder nacheinander auf einer Baustelle tätig werden,
        ist in der Regel ein Sicherheits- und Gesundheitsschutzkoordinator (SiGeKo) zu bestellen.
      </p>
      <BlogGesetzesZitat
        paragraph="BaustellV § 3 Abs. 1"
        quote="Für Baustellen, auf denen Beschäftigte mehrerer Arbeitgeber tätig werden, hat der nach § 4 Verantwortliche einen oder mehrere geeignete Koordinatoren zu bestellen."
        source="Baustellenverordnung (gesetze-im-internet.de)"
      />
      <BlogH2>Ausnahmen und Grenzfälle</BlogH2>
      <BlogList
        items={[
          "Ein einziges Unternehmen führt alle Arbeiten allein aus → oft kein SiGeKo nötig",
          "Nachunternehmer, Subgewerke, gleichzeitige Gewerke → SiGeKo-Pflicht wahrscheinlich",
          "Umbauten im laufenden Betrieb: Schnittstelle Baustelle ↔ Stammbetrieb beachten",
        ]}
      />
      <BlogH2>Planungs- und Ausführungsphase</BlogH2>
      <p>
        In der Planung: SiGePlan erstellen. In der Ausführung: Koordination der Arbeitgeber, Anpassung bei
        Änderungen, Dokumentation für spätere Arbeiten an der baulichen Anlage.
      </p>
      <BlogTakeaway>
        Im Zweifel früh prüfen – Versäumnisse bei der SiGeKo-Pflicht können teuer werden.{" "}
        <Link href="/leistungen/sigeko" className="font-semibold text-nrw-gruen hover:underline">
          SiGeKo-Beratung
        </Link>{" "}
        und{" "}
        <Link href="/rechner" className="font-semibold text-nrw-gruen hover:underline">
          Orientierungsrechner
        </Link>
        .
      </BlogTakeaway>
      <BlogDisclaimer />
    </BlogArticleShell>
  );
}

export function FasiBestellungPflichtFristen() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Wer eine Fachkraft für Arbeitssicherheit (FaSi) braucht, wann die Bestellung erfolgen muss und was bei
        verspäteter Beauftragung droht – kompakt für Betriebe in Köln und NRW.
      </BlogLead>
      <BlogH2>Pflicht zur Bestellung</BlogH2>
      <p>
        Arbeitgeber müssen FaSi und Betriebsarzt bestellen, soweit dies nach Betriebsart, Beschäftigtenzahl
        und Gefährdungen erforderlich ist. Die Bestellung erfolgt schriftlich.
      </p>
      <BlogGesetzesZitat
        paragraph="DGUV Vorschrift 2, § 2 Abs. 1 (Mustertext 2024)"
        quote="Der Unternehmer hat Betriebsärztinnen oder Betriebsärzte sowie Fachkräfte für Arbeitssicherheit … schriftlich nach Maßgabe der nachfolgenden Bestimmungen zu bestellen."
        source="37_DGUV-Vorschrift-2_Mustertext-2024.pdf (Gesetze-Vorschriften)"
      />
      <BlogH2>Betreuungsumfang nach Beschäftigtenzahl</BlogH2>
      <BlogList
        items={[
          "Bis 20 Beschäftigte: Anlage 1 DGUV V2 (Grundbetreuung nach Gefährdungsgruppe)",
          "Mehr als 20 Beschäftigte: Anlage 2 (erweiterter Umfang)",
          "Teilzeitkräfte werden mit Faktoren 0,5 / 0,75 angerechnet",
        ]}
      />
      <BlogH3>Was passiert ohne rechtzeitige Bestellung?</BlogH3>
      <p>
        Fehlt die FaSi-Bestellung, ist der Arbeitgeber in der Pflichtverletzung – mit Risiken bei BG-Prüfungen,
        Behörden und im Schadensfall. Externe Beauftragung ist für die meisten KMU die pragmatische Lösung.
      </p>
      <BlogTakeaway>
        Nicht warten, bis die BG fragt.{" "}
        <Link href="/beratung-buchen" className="font-semibold text-nrw-gruen hover:underline">
          Erstberatung
        </Link>{" "}
        oder{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          Leistungen FaSi
        </Link>
        .
      </BlogTakeaway>
      <BlogDisclaimer />
    </BlogArticleShell>
  );
}

export function GefahrstoffeLagernBetrieb() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Gefahrstoffe im Betrieb lagern – das ist strenger geregelt als viele denken. Was ArbSchG, GefStoffV
        und TRGS für Lagerung und Kennzeichnung verlangen.
      </BlogLead>
      <BlogH2>Grundregel: nur nach Gefährdungsbeurteilung</BlogH2>
      <BlogGesetzesZitat
        paragraph="GefStoffV § 7 Abs. 1"
        quote="Der Arbeitgeber darf eine Tätigkeit mit Gefahrstoffen erst aufnehmen lassen, nachdem eine Gefährdungsbeurteilung nach § 6 durchgeführt und die erforderlichen Schutzmaßnahmen … ergriffen worden sind."
        source="12_GefStoffV.pdf (Gesetze-Vorschriften)"
      />
      <BlogH2>Lagerung in Arbeitsräumen</BlogH2>
      <p>
        Gefahrstoffe dürfen in Arbeitsräumen nur gelagert werden, wenn die Lagerung mit dem Schutz der
        Beschäftigten vereinbar ist. Mengen begrenzen, verschließbare Behälter, Kennzeichnung und
        Gefahrstoffverzeichnis führen.
      </p>
      <BlogH2>Brand- und Explosionsgefahr beim Lagern</BlogH2>
      <BlogList
        items={[
          "Explosionsschutzdokument bei explosionsfähigen Atmosphären",
          "Abstände zu Aufenthaltsräumen (Mengenschwellen beachten)",
          "Lüftung, Abschottung, Zoneneinteilung nach TRGS",
          "Unterweisung der Beschäftigten zum Umgang und Notfall",
        ]}
      />
      <BlogTakeaway>
        Lager ohne Beurteilung ist ein klassischer Audit-Befund. Wir unterstützen bei{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          Gefährdungsbeurteilung
        </Link>{" "}
        und Gefahrstofforganisation.
      </BlogTakeaway>
      <BlogDisclaimer />
    </BlogArticleShell>
  );
}

export function ErsthelferImBetrieb() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Ersthelfer können Leben retten – und sind im Betrieb organisatorisch Pflicht. Wie viele, welche
        Ausbildung und wie die Dokumentation in NRW aussehen sollte.
      </BlogLead>
      <BlogH2>Rechtliche Grundlage</BlogH2>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 10 Abs. 2"
        quote="Der Arbeitgeber hat diejenigen Beschäftigten zu benennen, die Aufgaben der Ersten Hilfe, Brandbekämpfung und Evakuierung der Beschäftigten übernehmen. Anzahl, Ausbildung und Ausrüstung … müssen in einem angemessenen Verhältnis zur Zahl der Beschäftigten und zu den bestehenden besonderen Gefahren stehen."
        source="09_ArbSchG.pdf (Gesetze-Vorschriften)"
      />
      <BlogH2>Wie viele Ersthelfer?</BlogH2>
      <p>
        Die Anzahl richtet sich nach Beschäftigtenzahl, Schichtmodell und Gefährdung. Orientierung bieten
        DGUV Vorschrift 1 und die Erste-Hilfe-Verordnung – in der Praxis oft 5–15 % der Belegschaft,
        bei besonderen Gefahren mehr.
      </p>
      <BlogH2>Organisation in der Praxis</BlogH2>
      <BlogList
        items={[
          "Ersthelfer benennen und ausbilden lassen (9- oder 16-Stunden-Kurs)",
          "Auffrischung alle 2–3 Jahre",
          "Erste-Hilfe-Material und Notrufketten erreichbar halten",
          "Vertretungsregelung und Einsatzpläne dokumentieren",
        ]}
      />
      <BlogTakeaway>
        Ersthelfer, Brandschutzhelfer und Evakuierung gehören zusammen – wir helfen bei der Organisation im{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          Arbeitsschutz-Konzept
        </Link>
        .
      </BlogTakeaway>
      <BlogDisclaimer />
    </BlogArticleShell>
  );
}

export function BetriebsbegehungWasGeprueft() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Die Betriebsbegehung ist ein Kerngeschäft der FaSi. Was dabei geprüft wird, wie Sie sich vorbereiten
        und warum das für Audits in NRW entscheidend ist.
      </BlogLead>
      <BlogH2>Auftrag der FaSi</BlogH2>
      <BlogGesetzesZitat
        paragraph="ASiG § 6 Nr. 3 lit. a"
        quote="… die Arbeitsstätten in regelmäßigen Abständen zu begehen und festgestellte Mängel dem Arbeitgeber … mitzuteilen, Maßnahmen zur Beseitigung vorzuschlagen und auf deren Durchführung hinzuwirken."
        source="ASiG (gesetze-im-internet.de)"
      />
      <BlogH2>Typische Prüfpunkte</BlogH2>
      <BlogList
        items={[
          "Ordnung und Sauberkeit, Flur- und Fluchtwege frei?",
          "Maschinen, Schutzeinrichtungen, Unterweisungsnachweise",
          "PSA: Verfügbarkeit, Zustand, Trageverhalten",
          "Gefahrstoffe: Kennzeichnung, Lagerung, Betriebsanweisungen",
          "Ersthelfer, Verbandkasten, Feuerlöscher, Sicherheitskennzeichnung",
        ]}
      />
      <BlogH2>Nach der Begehung</BlogH2>
      <p>
        Protokoll mit Mängeln, Verantwortlichen und Fristen. Priorisierung nach Risiko. Fortschreibung der
        Gefährdungsbeurteilung, wenn neue Erkenntnisse vorliegen.
      </p>
      <BlogTakeaway>
        Gute Begehungen vermeiden teure Nachbesserungen vor BG-Terminen.{" "}
        <Link href="/checklisten" className="font-semibold text-nrw-gruen hover:underline">
          Checklisten
        </Link>{" "}
        und{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          FaSi-Betreuung
        </Link>
        .
      </BlogTakeaway>
      <BlogDisclaimer />
    </BlogArticleShell>
  );
}

export function HitzearbeitSchutzMassnahmen() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Hitzearbeit ist in NRW kein Randthema – Produktion, Logistik, Baustelle und Büro ohne Klimaanlage
        sind betroffen. Welche Schutzmaßnahmen ab +26 °C und +30 °C gelten.
      </BlogLead>
      <BlogH2>Getränke und Maßnahmen bei Hitze</BlogH2>
      <BlogGesetzesZitat
        paragraph="ASR A3.5, Abschnitt 4.4 (5)"
        quote="Bei Lufttemperaturen von mehr als +26 °C sollen, bei mehr als +30 °C müssen geeignete Getränke (z. B. Trinkwasser im Sinne der Trinkwasserverordnung) bereitgestellt werden."
        source="ASR-A3-5.pdf (Gesetze-Vorschriften)"
      />
      <BlogGesetzesZitat
        paragraph="ASR A3.5, Abschnitt 4.4 (2)"
        quote="Bei Überschreitung der Lufttemperatur im Raum von +30 °C müssen wirksame Maßnahmen gemäß Gefährdungsbeurteilung ergriffen werden, welche die Beanspruchung der Beschäftigten reduzieren."
        source="ASR-A3-5.pdf (Gesetze-Vorschriften)"
      />
      <BlogH2>Praxismaßnahmen (Tabelle 4 ASR A3.5)</BlogH2>
      <BlogList
        items={[
          "Gleitzeit / Arbeitszeitverlagerung in kühlere Phasen",
          "Zusätzliche Pausen und Entwärmungsphasen",
          "Sonnenschutz, Nachtauskühlung, Ventilatoren",
          "Lockerung von Bekleidungsvorgaben bei körperlicher Arbeit",
          "Hitzeaktionsplan in der Gefährdungsbeurteilung verankern",
        ]}
      />
      <BlogTakeaway>
        Hitze gehört in jede Gefährdungsbeurteilung – besonders ab April bis September.{" "}
        <Link href="/blog/getraenke-arbeitsplatz-arbeitgeber" className="font-semibold text-nrw-gruen hover:underline">
          Getränke am Arbeitsplatz
        </Link>{" "}
        ·{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          Beratung
        </Link>
        .
      </BlogTakeaway>
      <BlogDisclaimer />
    </BlogArticleShell>
  );
}
