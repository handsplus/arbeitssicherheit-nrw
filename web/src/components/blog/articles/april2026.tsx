import Link from "next/link";
import { GESETZ, REGELWERK } from "@/lib/blog-gesetz-links";
import {
  BlogArticleShell,
  BlogDisclaimer,
  BlogGesetzesZitat,
  BlogH2,
  BlogLead,
  BlogLegalRef,
  BlogList,
  BlogRelated,
  BlogSteps,
  BlogTakeaway,
} from "../BlogShared";

export function GefaehrdungsbeurteilungErstellenSchritt() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Eine gute Gefährdungsbeurteilung ist kein Formular, das man für die Akte ausfüllt. Sie ist die
        operative Grundlage dafür, wie Arbeit in Köln, im Rheinland und in ganz NRW tatsächlich sicher
        organisiert wird: Welche Gefahren bestehen, welche Maßnahmen gelten und wer sie umsetzt.
      </BlogLead>
      <BlogLead>
        Gerade in kleinen und mittleren Betrieben sehen wir häufig dieselben Schwachstellen: Tätigkeiten
        werden zu grob zusammengefasst, psychische Belastungen fehlen, Maßnahmen bleiben ohne Termin und
        nach einer Änderung von Maschinen, Stoffen oder Arbeitsabläufen wird nichts fortgeschrieben. Wer
        strukturiert vorgeht, spart später Zeit bei Unterweisungen, Betriebsbegehungen und Behördenkontakten.
      </BlogLead>

      <BlogH2>Warum die Gefährdungsbeurteilung der Ausgangspunkt ist</BlogH2>
      <p>
        Das Arbeitsschutzgesetz verpflichtet Arbeitgeber nicht nur zu Einzelmaßnahmen, sondern zu einem
        systematischen Vorgehen. Die Gefährdungsbeurteilung ist deshalb kein Anhängsel der Organisation,
        sondern der Startpunkt: Erst wenn klar ist, welchen Gefährdungen Beschäftigte ausgesetzt sind,
        lassen sich Unterweisungen, Prüfungen, Schutzmaßnahmen und Verantwortlichkeiten sinnvoll festlegen.
      </p>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 5 Abs. 1"
        quote="Der Arbeitgeber hat durch eine Beurteilung der für die Beschäftigten mit ihrer Arbeit verbundenen Gefährdung zu ermitteln, welche Maßnahmen des Arbeitsschutzes erforderlich sind."
        sourceLabel="ArbSchG online"
        sourceHref={GESETZ.arbSchG5}
      />
      <BlogLegalRef>
        Praktisch bedeutet das: Jede Maßnahme im Arbeitsschutz sollte sich auf eine nachvollziehbare
        Gefährdungsbeurteilung zurückführen lassen. Ergänzende Orientierung bietet die{" "}
        <a
          href={REGELWERK.bauaGefaehrdung}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-nrw-gruen hover:underline"
        >
          BAuA zur Gefährdungsbeurteilung
        </a>
        .
      </BlogLegalRef>

      <BlogH2>Schritt 1: Tätigkeiten, Bereiche und Personengruppen sauber abgrenzen</BlogH2>
      <p>
        Der häufigste Fehler ist eine zu pauschale Betrachtung. Statt "Büro", "Lager" oder "Produktion"
        als Überschriften zu verwenden, sollten Sie überlegen, welche Tätigkeiten tatsächlich gleichartig
        sind. In einem Kölner Handwerksbetrieb können zum Beispiel Monteure im Außendienst, Lagerkräfte,
        Innendienst und Bauleiter sehr unterschiedliche Gefährdungsprofile haben.
      </p>
      <p>
        Berücksichtigen Sie außerdem besondere Personengruppen: Auszubildende, Leiharbeitnehmer,
        schwangere Beschäftigte, Beschäftigte mit körperlich belastenden Tätigkeiten oder Mitarbeitende
        mit Alleinarbeit. Nur wenn diese Gruppen in der Struktur vorkommen, werden die späteren Maßnahmen
        auch wirksam.
      </p>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 5 Abs. 2"
        quote="Der Arbeitgeber hat die Beurteilung je nach Art der Tätigkeiten vorzunehmen. Bei gleichartigen Arbeitsbedingungen ist die Beurteilung eines Arbeitsplatzes oder einer Tätigkeit ausreichend."
        sourceLabel="ArbSchG online"
        sourceHref={GESETZ.arbSchG5}
      />

      <BlogH2>Schritt 2: Gefährdungen vollständig und realistisch ermitteln</BlogH2>
      <p>
        In der Praxis ist Vollständigkeit wichtiger als perfekte Theorie. Schauen Sie daher auf den realen
        Arbeitsablauf: Wie wird gearbeitet, womit wird gearbeitet, wo treten Zeitdruck, Störungen oder
        improvisierte Lösungen auf? Besonders in gewachsenen Betrieben in NRW entstehen Risiken oft nicht
        durch die Soll-Beschreibung, sondern durch die tatsächlich gelebte Organisation.
      </p>
      <BlogList
        items={[
          "Gefährdungen aus Arbeitsstätte und Arbeitsplatzgestaltung",
          "physikalische, chemische und biologische Einwirkungen",
          "Gefährdungen aus Maschinen, Arbeitsmitteln, Fahrzeugen und Stoffen",
          "Risiken aus Arbeitszeit, Schnittstellen und Arbeitsorganisation",
          "unzureichende Qualifikation, fehlende Unterweisung oder Sprachbarrieren",
          "psychische Belastungen wie Zeitdruck, Unterbrechungen oder unklare Zuständigkeiten",
        ]}
      />
      <BlogGesetzesZitat
        paragraph="ArbSchG § 5 Abs. 3"
        quote="Eine Gefährdung kann sich insbesondere ergeben durch die Gestaltung und die Einrichtung der Arbeitsstätte und des Arbeitsplatzes, physikalische, chemische und biologische Einwirkungen, die Gestaltung, die Auswahl und den Einsatz von Arbeitsmitteln, die Gestaltung von Arbeits- und Fertigungsverfahren, Arbeitsabläufen und Arbeitszeit, unzureichende Qualifikation und Unterweisung der Beschäftigten sowie psychische Belastungen bei der Arbeit."
        sourceLabel="ArbSchG online"
        sourceHref={GESETZ.arbSchG5}
      />

      <BlogH2>Schritt 3: Maßnahmen nach Priorität und Wirksamkeit festlegen</BlogH2>
      <p>
        Eine brauchbare Gefährdungsbeurteilung endet nicht bei der Beschreibung von Problemen. Sie muss in
        konkrete Maßnahmen übersetzt werden: Was wird verändert, wer ist verantwortlich, bis wann und wie
        wird die Wirksamkeit überprüft? Je klarer diese Kette ist, desto eher wird aus der Beurteilung ein
        Führungsinstrument und nicht nur ein Dokumentenordner.
      </p>
      <p>
        Gute Maßnahmen folgen dem Prinzip, Gefahren möglichst an der Quelle zu beseitigen. Persönliche
        Schutzausrüstung ist wichtig, aber selten die erste und einzige Lösung. Bei Gefahrstoffen, Lärm,
        Verkehr, Absturz oder psychischer Belastung sind technische und organisatorische Ansätze häufig
        deutlich wirksamer.
      </p>
      <BlogSteps
        items={[
          "Gefährdung beschreiben und das tatsächliche Risiko bewerten.",
          "geeignete technische, organisatorische und personenbezogene Maßnahmen festlegen.",
          "Verantwortliche und Fristen verbindlich dokumentieren.",
          "Beschäftigte einbeziehen und die Maßnahme verständlich unterweisen.",
          "Wirksamkeit nach Umsetzung prüfen und offene Punkte nachverfolgen.",
        ]}
      />

      <BlogH2>Schritt 4: Ergebnisse dokumentieren und versionieren</BlogH2>
      <p>
        Viele Betriebe verfügen über Unterlagen, aber nicht über eine belastbare Dokumentation. Entscheidend
        ist, dass aus dem Dokument klar hervorgeht, welche Gefährdungen erkannt wurden, welche Maßnahmen
        festgelegt sind und ob diese Maßnahmen überprüft wurden. Ohne diese Nachvollziehbarkeit fehlt bei
        einer Begehung durch BG oder Behörde die Beweisführung.
      </p>
      <p>
        Bewährt haben sich Versionsstände, Änderungsdatum, verantwortliche Führungskraft und eine saubere
        Verknüpfung zu Unterweisungen, Betriebsanweisungen, Prüfprotokollen oder Wartungsplänen. Wenn Sie
        mehr zur formalen Dokumentation wissen wollen, lohnt sich auch unser Beitrag zur{" "}
        <Link href="/blog/gefaehrdungsbeurteilung-unterschrift" className="font-semibold text-nrw-gruen hover:underline">
          Unterschrift auf der Gefährdungsbeurteilung
        </Link>
        .
      </p>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 6 Abs. 1"
        quote="Der Arbeitgeber muß über die je nach Art der Tätigkeiten und der Zahl der Beschäftigten erforderlichen Unterlagen verfügen, aus denen das Ergebnis der Gefährdungsbeurteilung, die von ihm festgelegten Maßnahmen des Arbeitsschutzes und das Ergebnis ihrer Überprüfung ersichtlich sind."
        sourceLabel="ArbSchG online"
        sourceHref={GESETZ.arbSchG6}
      />

      <BlogH2>Schritt 5: Unterweisung, Begehung und Alltag verzahnen</BlogH2>
      <p>
        Eine Gefährdungsbeurteilung entfaltet ihren Wert erst im laufenden Betrieb. Unterweisungen müssen
        auf ihre Inhalte abgestimmt sein, Führungskräfte müssen Abweichungen erkennen und bei
        Betriebsbegehungen sollte geprüft werden, ob die beschriebenen Schutzmaßnahmen tatsächlich gelebt
        werden. Sonst entsteht eine typische Dokumentenlücke zwischen Papierlage und Praxis.
      </p>
      <p>
        Gerade in Unternehmen mit mehreren Standorten in NRW oder wechselnden Baustellen lohnt sich ein
        fester Turnus: Beurteilung prüfen, Unterweisung aktualisieren, Mängel aus Begehungen zurückspielen,
        Maßnahmenliste fortschreiben. So bleibt das System handhabbar und wächst nicht ungeordnet an.
      </p>
      <BlogLegalRef>
        Die Verzahnung mit Unterweisungen ist besonders wichtig. Hilfreich dazu sind die BAuA-Hinweise zur{" "}
        <a
          href={REGELWERK.bauaUnterweisung}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-nrw-gruen hover:underline"
        >
          Unterweisung im Arbeitsschutz
        </a>{" "}
        sowie unser Beitrag zur{" "}
        <Link href="/blog/unterweisung-arbeitssicherheit-pflichtinhalte" className="font-medium text-nrw-gruen hover:underline">
          Unterweisung in der Arbeitssicherheit
        </Link>
        .
      </BlogLegalRef>

      <BlogH2>Schritt 6: Wann eine Fortschreibung zwingend ist</BlogH2>
      <p>
        Eine Gefährdungsbeurteilung ist nie endgültig fertig. Sie muss aktualisiert werden, wenn sich
        Arbeitsmittel, Stoffe, Räume, Personalstruktur, Arbeitszeiten, Kundenanforderungen oder
        Rechtsanforderungen ändern. Auch Unfälle, Beinahe-Ereignisse oder Beschwerden aus der Belegschaft
        sind starke Hinweise darauf, dass die bisherige Bewertung nicht mehr genügt.
      </p>
      <p>
        In der Region Köln sehen wir das oft bei Hallenumzügen, dem Einsatz neuer Reinigungschemie, dem
        Aufbau zusätzlicher Lagerflächen oder bei Baustellen im laufenden Betrieb. In solchen Situationen
        sollte die Aktualisierung nicht auf den nächsten Audit-Termin verschoben werden.
      </p>

      <BlogTakeaway>
        Eine gute Gefährdungsbeurteilung ist konkret, aktuell und in den Alltag eingebunden. Wenn Sie die
        Erstellung oder Fortschreibung in Köln oder NRW professionell aufsetzen möchten, unterstützen wir
        als{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          externe Fachkraft für Arbeitssicherheit
        </Link>{" "}
        und bei Bedarf auch mit einer{" "}
        <Link href="/blog/externe-fachkraft-arbeitssicherheit-koeln" className="font-semibold text-nrw-gruen hover:underline">
          externen FaSi-Lösung für Köln
        </Link>
        .
      </BlogTakeaway>

      <BlogRelated
        links={[
          {
            href: "/blog/gefaehrdungsbeurteilung-unterschrift",
            label: "Gefährdungsbeurteilung: Ist eine Unterschrift Pflicht?",
          },
          {
            href: "/blog/unterweisung-arbeitssicherheit-pflichtinhalte",
            label: "Unterweisung Arbeitssicherheit: Pflichtinhalte richtig umsetzen",
          },
          {
            href: "/blog/psychische-belastung-gefaehrdungsbeurteilung",
            label: "Psychische Belastung in der Gefährdungsbeurteilung",
          },
        ]}
      />
      <BlogDisclaimer />
    </BlogArticleShell>
  );
}

export function BrandschutzhelferPflichtNrw() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Viele Unternehmen fragen nicht, ob Brandschutzhelfer sinnvoll sind, sondern ob sie wirklich Pflicht
        sind. Die ehrliche Antwort lautet: Fast immer ist das Thema über die Gefährdungsbeurteilung, die
        Notfallorganisation und die konkreten Brandrisiken im Betrieb relevant, in vielen Fällen auch ganz
        praktisch unverzichtbar.
      </BlogLead>
      <BlogLead>
        Für Betriebe in Köln und NRW bedeutet das: Nicht nur Büroflächen betrachten, sondern auch Lager,
        Werkstätten, Tiefgaragen, Verkaufsflächen, Baustellencontainer oder gemischt genutzte Immobilien.
        Dort entscheidet sich, wie viele Brandschutzhelfer gebraucht werden, wie sie verteilt sein müssen
        und ob die Organisation im Ernstfall wirklich trägt.
      </BlogLead>

      <BlogH2>Die rechtliche Basis liegt in der Notfallorganisation</BlogH2>
      <p>
        Das Arbeitsschutzgesetz verlangt, dass der Arbeitgeber die erforderlichen Maßnahmen zur
        Brandbekämpfung und Evakuierung organisiert. Daraus folgt keine starre Einheitszahl für jeden
        Betrieb, wohl aber die Pflicht, geeignete Personen zu benennen und deren Anzahl, Ausbildung und
        Ausrüstung an den tatsächlichen Gefahren auszurichten.
      </p>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 10 Abs. 1"
        quote="Der Arbeitgeber hat entsprechend der Art der Arbeitsstätte und der Tätigkeiten sowie der Zahl der Beschäftigten die Maßnahmen zu treffen, die zur Ersten Hilfe, Brandbekämpfung und Evakuierung der Beschäftigten erforderlich sind."
        sourceLabel="ArbSchG online"
        sourceHref={GESETZ.arbSchG10}
      />
      <BlogGesetzesZitat
        paragraph="ArbSchG § 10 Abs. 2"
        quote="Der Arbeitgeber hat diejenigen Beschäftigten zu benennen, die Aufgaben der Ersten Hilfe, Brandbekämpfung und Evakuierung der Beschäftigten übernehmen. Anzahl, Ausbildung und Ausrüstung der nach Satz 1 benannten Beschäftigten müssen in einem angemessenen Verhältnis zur Zahl der Beschäftigten und zu den bestehenden besonderen Gefahren stehen."
        sourceLabel="ArbSchG online"
        sourceHref={GESETZ.arbSchG10}
      />

      <BlogH2>Wann Brandschutzhelfer in der Praxis Pflichtcharakter haben</BlogH2>
      <p>
        In normalen Verwaltungsbereichen reicht oft eine begrenzte Anzahl ausgebildeter Personen. Anders
        sieht es bei erhöhter Brandgefährdung aus: Lagerung brennbarer Stoffe, Werkstattbetrieb, Küche,
        Produktion, Veranstaltungen, Kundenverkehr oder Schichtbetrieb erhöhen den Organisationsbedarf.
        Zusätzlich können Versicherer, Behörden, Brandschutzkonzepte oder Sonderbauvorgaben weitergehende
        Anforderungen auslösen.
      </p>
      <p>
        In NRW sehen wir häufig Konstellationen, in denen die rechnerische Mindestanzahl zwar erfüllt ist,
        die praktische Verfügbarkeit aber nicht: etwa wenn die benannten Personen nur im Frühdienst
        anwesend sind, auf mehrere Etagen verteilt fehlen oder regelmäßig im Außendienst arbeiten.
      </p>
      <BlogLegalRef>
        Für die konkrete Auslegung sind vor allem die{" "}
        <a
          href={REGELWERK.asrA22}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-nrw-gruen hover:underline"
        >
          ASR A2.2 der BAuA
        </a>{" "}
        und die{" "}
        <a
          href={REGELWERK.dguv205023}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-nrw-gruen hover:underline"
        >
          DGUV Information 205-023
        </a>{" "}
        zur Ausbildung von Brandschutzhelfern maßgeblich.
      </BlogLegalRef>

      <BlogH2>Wie viele Brandschutzhelfer Ihr Betrieb braucht</BlogH2>
      <p>
        In vielen Standardfällen wird mit einer Quote von etwa fünf Prozent der anwesenden Beschäftigten
        gearbeitet. Diese Zahl ist aber nur ein Ausgangspunkt. Maßgeblich sind Brandgefährdung,
        Schichtmodell, Abwesenheiten, Besucheranteil, Fremdfirmen, räumliche Ausdehnung und die Frage, wie
        schnell im Alarmfall tatsächlich reagiert werden kann.
      </p>
      <BlogList
        items={[
          "Anwesenheit statt bloßer Beschäftigtenzahl betrachten",
          "Schichten, Urlaub, Krankheit und Außendienst realistisch einrechnen",
          "mehrere Brandabschnitte und Etagen getrennt bewerten",
          "besondere Brandgefährdungen gesondert berücksichtigen",
          "Fremdfirmen und Publikumsverkehr in das Notfallkonzept einbeziehen",
        ]}
      />

      <BlogH2>Was die Ausbildung leisten muss</BlogH2>
      <p>
        Ein Brandschutzhelfer ist nicht nur "jemand mit Feuerlöscher". Die Ausbildung muss Wissen über
        Brandentstehung, Löschmittel, Alarmierung, Selbstschutz, Räumung und Grenzen des eigenen Handelns
        vermitteln. Praktische Löschübungen sind dabei besonders wichtig, weil viele Menschen im Ernstfall
        zwar theoretisch informiert sind, einen Löscher aber nie bedient haben.
      </p>
      <p>
        Spätestens wenn sich Arbeitsbedingungen, Gebäude oder Brandlasten ändern, sollte auch die
        Aktualität der Ausbildung geprüft werden. Das gilt insbesondere bei Umbauten, neuen Lagerkonzepten
        oder einer geänderten Nutzung von Flächen.
      </p>

      <BlogH2>Verzahnung mit BSB, Räumung und Unterweisung</BlogH2>
      <p>
        Brandschutzhelfer arbeiten nie isoliert. In größeren Objekten oder bei besonderer Nutzung müssen
        ihre Aufgaben zur Brandschutzordnung, zur Alarmorganisation und zu eventuellen Aufgaben eines{" "}
        <Link
          href="/blog/brandschutzbeauftragter-nrw-intern-extern"
          className="font-semibold text-nrw-gruen hover:underline"
        >
          Brandschutzbeauftragten
        </Link>{" "}
        passen. Auch Ersthelfer, Evakuierungshelfer, Haustechnik und Empfang sollten ihre Rollen kennen.
      </p>
      <p>
        In Unterweisungen reicht deshalb kein allgemeiner Aushang. Beschäftigte müssen wissen, wie sie
        alarmieren, welche Fluchtwege gelten, wo Sammelplätze liegen und wer in welchem Bereich die
        Koordination übernimmt.
      </p>

      <BlogH2>Typische Fehler in NRW-Betrieben</BlogH2>
      <BlogList
        items={[
          "zu wenige benannte Personen bei Schicht- oder Urlaubsbetrieb",
          "keine praktische Löschübung oder veraltete Ausbildungsnachweise",
          "fehlende Abstimmung mit Evakuierung, Brandschutzordnung und Unterweisung",
          "Brandschutzhelfer nur auf dem Papier, aber nicht im jeweiligen Bereich verfügbar",
          "keine Neubewertung nach Umbauten, Nutzungsänderungen oder neuen Stoffen",
        ]}
      />
      <BlogGesetzesZitat
        paragraph="ArbSchG § 5 Abs. 1"
        quote="Der Arbeitgeber hat durch eine Beurteilung der für die Beschäftigten mit ihrer Arbeit verbundenen Gefährdung zu ermitteln, welche Maßnahmen des Arbeitsschutzes erforderlich sind."
        sourceLabel="ArbSchG online"
        sourceHref={GESETZ.arbSchG5}
      />

      <BlogTakeaway>
        Brandschutzhelfer sind nicht nur eine Formalie, sondern Teil einer funktionierenden
        Notfallorganisation. Wir unterstützen Betriebe in Köln und NRW mit{" "}
        <Link href="/leistungen/brandschutz" className="font-semibold text-nrw-gruen hover:underline">
          Brandschutzberatung
        </Link>
        , passenden{" "}
        <Link href="/leistungen/schulungen" className="font-semibold text-nrw-gruen hover:underline">
          Schulungen
        </Link>{" "}
        und der Abstimmung mit Ihrer Arbeitsschutzorganisation.
      </BlogTakeaway>

      <BlogRelated
        links={[
          {
            href: "/blog/brandschutzbeauftragter-nrw-intern-extern",
            label: "Brandschutzbeauftragter in NRW: intern oder extern?",
          },
          {
            href: "/blog/brandschutzordnung-teil-a-b-c",
            label: "Brandschutzordnung Teil A, B und C verständlich erklärt",
          },
          {
            href: "/blog/ersthelfer-im-betrieb-pflichten",
            label: "Ersthelfer im Betrieb: Pflichten und Organisation",
          },
        ]}
      />
      <BlogDisclaimer />
    </BlogArticleShell>
  );
}

export function SigekoAbWannPflicht() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Ob ein SiGeKo bestellt werden muss, entscheidet sich oft früher als viele Bauherren denken. Nicht
        erst der sichtbare Baustart ist relevant, sondern schon die Planung eines Bauvorhabens, sobald klar
        ist, dass mehrere Arbeitgeber auf der Baustelle tätig werden.
      </BlogLead>
      <BlogLead>
        Gerade in Köln und NRW betrifft das nicht nur große Neubauten, sondern auch Umbauten im laufenden
        Betrieb, Dachsanierungen, technische Modernisierungen, Fassadenarbeiten oder Innenausbauten mit
        mehreren Gewerken. Wer hier zu spät prüft, riskiert Koordinationslücken, Zeitverlust und unnötige
        Diskussionen mit Auftragnehmern und Aufsichtsstellen.
      </BlogLead>

      <BlogH2>Der Grundsatz: mehrere Arbeitgeber auf der Baustelle</BlogH2>
      <p>
        Der zentrale Anknüpfungspunkt der Baustellenverordnung ist einfach: Arbeiten auf einer Baustelle
        Beschäftigte mehrerer Arbeitgeber, ist ein geeigneter Koordinator zu bestellen. Damit geht es nicht
        nur um gleichzeitige Anwesenheit. Auch nacheinander tätige Gewerke können Koordinationsbedarf
        auslösen, wenn sich ihre Arbeiten sicherheitlich beeinflussen.
      </p>
      <BlogGesetzesZitat
        paragraph="BaustellV § 3 Abs. 1"
        quote="Für Baustellen, auf denen Beschäftigte mehrerer Arbeitgeber tätig werden, hat der nach § 4 Verantwortliche einen oder mehrere geeignete Koordinatoren zu bestellen."
        sourceLabel="BaustellV online"
        sourceHref={GESETZ.baustellV3}
      />
      <BlogGesetzesZitat
        paragraph="BaustellV § 3 Abs. 1a"
        quote="Der Bauherr oder der von ihm beauftragte Dritte wird durch die Beauftragung geeigneter Koordinatoren nicht von seiner Verantwortung entbunden."
        sourceLabel="BaustellV online"
        sourceHref={GESETZ.baustellV3}
      />

      <BlogH2>Ab wann die Prüfung im Projekt erfolgen sollte</BlogH2>
      <p>
        Die richtige Frage lautet nicht nur "Brauche ich einen SiGeKo?", sondern "Wann muss ich die
        Entscheidung treffen?" Antwort: so früh, dass die Koordination noch in die Planung einfließen kann.
        Sobald mehrere Gewerke vorgesehen sind, sollte geprüft werden, welche Sicherheits- und
        Gesundheitsschutzanforderungen sich aus Bauablauf, Zugängen, Absturzrisiken, Verkehr, Bestand,
        Fremdfirmen oder laufendem Betrieb ergeben.
      </p>
      <p>
        Wer erst kurz vor Baubeginn reagiert, bekommt meist nur noch eine operative Reparaturlösung. Dann
        fehlen oft abgestimmte Bauabläufe, klare Zuständigkeiten, Vorankündigung, SiGePlan oder eine
        belastbare Unterlage für spätere Arbeiten.
      </p>

      <BlogH2>Planungsphase: hier entsteht der eigentliche Mehrwert</BlogH2>
      <p>
        Der SiGeKo ist kein reiner Baustellenbegleiter für die Ausführung. Die Verordnung beschreibt
        ausdrücklich Aufgaben in der Planungsphase. Dort werden Schnittstellen zwischen Gewerken,
        Baustellenlogistik, Verkehr, Absturzschutz, Rettungswege und späterer Betrieb am wirksamsten
        beeinflusst.
      </p>
      <BlogGesetzesZitat
        paragraph="BaustellV § 3 Abs. 2 Nr. 2"
        quote="Während der Planung der Ausführung des Bauvorhabens hat der Koordinator den Sicherheits- und Gesundheitsschutzplan auszuarbeiten oder ausarbeiten zu lassen."
        sourceLabel="BaustellV online"
        sourceHref={GESETZ.baustellV3}
      />
      <BlogList
        items={[
          "Schnittstellen zwischen mehreren Gewerken früh bewerten",
          "gefährliche Überschneidungen im Bauablauf vermeiden",
          "Zugänge, Lagerflächen und Rettungswege festlegen",
          "Arbeiten im Bestand und laufenden Betrieb koordinieren",
          "Dokumente und Verantwortlichkeiten vor Baustart klären",
        ]}
      />

      <BlogH2>Ausführungsphase: Koordination statt Einzelansprache</BlogH2>
      <p>
        In der Bauausführung geht es darum, dass die Arbeitgeber nicht nebeneinander her arbeiten, sondern
        ihre Schutzmaßnahmen aufeinander abstimmen. Das betrifft etwa Kran- und Verkehrsflächen, Gerüste,
        elektrische Provisorien, Absturzsicherungen, Gefahrstoffe oder Heißarbeiten. Genau hier zeigt sich,
        ob die frühe Koordination funktioniert hat.
      </p>
      <BlogLegalRef>
        Für die praktische Orientierung auf Baustellen ist zusätzlich das BAuA-Themenportal{" "}
        <a
          href={REGELWERK.bauaBaustelle}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-nrw-gruen hover:underline"
        >
          Bauarbeiten und Baustellen
        </a>{" "}
        hilfreich. Vertiefend passt auch unser Artikel zur{" "}
        <Link href="/blog/sigeko-nrw-orientierung-bauherren" className="font-medium text-nrw-gruen hover:underline">
          SiGeKo-Orientierung für Bauherren in NRW
        </Link>
        .
      </BlogLegalRef>

      <BlogH2>Typische Grenzfälle: Umbau, Bestand, laufender Betrieb</BlogH2>
      <p>
        Besonders häufig entsteht Unsicherheit bei Umbauten in Bestandsgebäuden. Ein einzelner Generalunternehmer
        klingt zunächst nach einer einfachen Lösung. In der Realität kommen aber oft Nachunternehmer,
        Fachfirmen, Wartungsunternehmen oder Betreiberpersonal hinzu. Dann besteht regelmäßig doch
        Koordinationsbedarf nach BaustellV.
      </p>
      <p>
        Noch anspruchsvoller wird es, wenn Produktion, Lager oder Publikumsverkehr parallel weiterlaufen.
        Dann muss die Baustellenkoordination mit dem betrieblichen Arbeitsschutz verzahnt werden. Dazu passt
        auch unser Beitrag zur{" "}
        <Link href="/blog/sigeko-und-betrieb-schnittstelle" className="font-semibold text-nrw-gruen hover:underline">
          Schnittstelle zwischen SiGeKo und Stammbetrieb
        </Link>
        .
      </p>

      <BlogH2>Was Bauherren in NRW konkret vorbereiten sollten</BlogH2>
      <BlogList
        items={[
          "früh prüfen, ob mehrere Arbeitgeber oder Nachunternehmer beteiligt sind",
          "SiGeKo vor Start der Ausführungsplanung einbinden",
          "Vorankündigung, SiGePlan und Unterlage projektbezogen aufsetzen",
          "Verantwortlichkeiten zwischen Bauherr, Drittem und Koordinator schriftlich festhalten",
          "laufenden Betrieb, Besucher und Bestandsschutz in die Koordination einbeziehen",
        ]}
      />

      <BlogTakeaway>
        Ein SiGeKo wird nicht erst auf großen Baustellen relevant. Schon bei typischen Umbauten und
        Sanierungen in Köln und NRW ist die Pflicht schnell erreicht. Wir unterstützen als{" "}
        <Link href="/leistungen/sigeko" className="font-semibold text-nrw-gruen hover:underline">
          externer SiGeKo
        </Link>{" "}
        und koordinieren bei Bedarf auch die Schnittstelle zur{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          betrieblichen Arbeitssicherheit
        </Link>
        .
      </BlogTakeaway>

      <BlogRelated
        links={[
          {
            href: "/blog/sigeko-nrw-orientierung-bauherren",
            label: "SiGeKo in NRW: Orientierung für Bauherren",
          },
          {
            href: "/blog/sigeplan-inhalt-pflichten-baustelle",
            label: "SiGePlan: Inhalte und Pflichten auf der Baustelle",
          },
          {
            href: "/blog/sigeko-und-betrieb-schnittstelle",
            label: "SiGeKo und Betrieb: die kritische Schnittstelle",
          },
        ]}
      />
      <BlogDisclaimer />
    </BlogArticleShell>
  );
}

export function FasiBestellungPflichtFristen() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Die Bestellung einer Fachkraft für Arbeitssicherheit wird in vielen Unternehmen erst dann akut, wenn
        die Berufsgenossenschaft fragt, ein Audit ansteht oder ein Unfall passiert ist. Genau dann ist es
        aber meist zu spät, weil die eigentliche Pflicht schon lange bestand.
      </BlogLead>
      <BlogLead>
        Für Betriebe in Köln und NRW lohnt sich deshalb ein nüchterner Blick: Wann ist eine FaSi
        vorgeschrieben, was muss schriftlich bestellt werden, wie schnell nach Betriebsaufnahme oder
        Veränderung sollte gehandelt werden und welche Folgen hat eine verspätete Organisation? Genau darum
        geht es in diesem Beitrag.
      </BlogLead>

      <BlogH2>Wer überhaupt eine FaSi bestellen muss</BlogH2>
      <p>
        Das ASiG verpflichtet Arbeitgeber, Fachkräfte für Arbeitssicherheit schriftlich zu bestellen, soweit
        dies im Hinblick auf Betriebsart, Beschäftigtenzahl, Organisation und Gefährdungen erforderlich ist.
        In der Praxis bedeutet das: Fast jeder regulär organisierte Betrieb mit Beschäftigten braucht eine
        Form der sicherheitstechnischen Betreuung, die später über die DGUV Vorschrift 2 konkretisiert wird.
      </p>
      <BlogGesetzesZitat
        paragraph="ASiG § 5 Abs. 1"
        quote="Der Arbeitgeber hat Fachkräfte für Arbeitssicherheit schriftlich zu bestellen und ihnen die in § 6 genannten Aufgaben zu übertragen, soweit dies erforderlich ist im Hinblick auf die Betriebsart, die Zahl der beschäftigten Arbeitnehmer, die Betriebsorganisation und die Kenntnisse und die Schulung des Arbeitgebers oder der verantwortlichen Personen."
        sourceLabel="ASiG online"
        sourceHref={GESETZ.asiG5}
      />
      <BlogLegalRef>
        Die konkrete Ausgestaltung der Betreuung ergibt sich zusätzlich aus der{" "}
        <a
          href={REGELWERK.dguv2}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-nrw-gruen hover:underline"
        >
          DGUV Vorschrift 2
        </a>
        . Sie regelt insbesondere Grundbetreuung und betriebsspezifische Betreuung.
      </BlogLegalRef>

      <BlogH2>Warum "Fristen" meist eine Organisationsfrage sind</BlogH2>
      <p>
        Anders als bei wiederkehrenden Prüfintervallen gibt es im ASiG keine einfache Kalenderfrist nach dem
        Muster "innerhalb von 30 Tagen". Die Pflicht setzt aber faktisch ab dem Zeitpunkt ein, an dem ein
        Betrieb mit Beschäftigten Arbeit organisiert und dafür sicherheitstechnische Unterstützung
        erforderlich ist. Wer also Mitarbeiter beschäftigt und keine passende Betreuung organisiert hat,
        befindet sich nicht in einer Karenzzeit, sondern regelmäßig schon in einer Lücke.
      </p>
      <p>
        Besonders wichtig ist das bei Neugründungen, Übernahmen, starkem Personalwachstum, neuen Standorten,
        geänderten Tätigkeiten oder neuen Gefährdungen. Dann muss die Bestellung nicht irgendwann erfolgen,
        sondern rechtzeitig vor oder mit Aufnahme der geänderten Tätigkeit.
      </p>

      <BlogH2>Was die FaSi konkret leisten soll</BlogH2>
      <p>
        Eine FaSi ist keine reine Dokumentationsstelle. Das Gesetz beschreibt Beratungs- und
        Beobachtungsaufgaben: Unterstützung bei Gefährdungsbeurteilungen, Planung von Arbeitsplätzen und
        Arbeitsmitteln, Begehungen, Unfallauswertung, PSA, Unterweisung und die Beobachtung, ob
        Arbeitsschutzmaßnahmen im Betrieb tatsächlich funktionieren.
      </p>
      <BlogGesetzesZitat
        paragraph="ASiG § 6"
        quote="Die Fachkräfte für Arbeitssicherheit haben die Aufgabe, den Arbeitgeber beim Arbeitsschutz und bei der Unfallverhütung in allen Fragen der Arbeitssicherheit einschließlich der menschengerechten Gestaltung der Arbeit zu unterstützen."
        sourceLabel="ASiG online"
        sourceHref={GESETZ.asiG6}
      />
      <BlogGesetzesZitat
        paragraph="ASiG § 6 Nr. 3 Buchstabe a"
        quote="Die Fachkräfte für Arbeitssicherheit haben insbesondere die Durchführung des Arbeitsschutzes und der Unfallverhütung zu beobachten und im Zusammenhang damit die Arbeitsstätten in regelmäßigen Abständen zu begehen und festgestellte Mängel mitzuteilen, Maßnahmen zur Beseitigung vorzuschlagen und auf deren Durchführung hinzuwirken."
        sourceLabel="ASiG online"
        sourceHref={GESETZ.asiG6}
      />

      <BlogH2>Worauf Behörden und BG in der Praxis schauen</BlogH2>
      <p>
        Bei Prüfungen wird selten nur gefragt, ob "irgendwo eine FaSi" vorhanden ist. Gefragt wird nach der
        schriftlichen Bestellung, nach einem nachvollziehbaren Betreuungsmodell, nach Einsatzzeiten,
        Protokollen, Begehungen, ASA-Beteiligung und der tatsächlichen Einbindung in Prozesse. Eine formale
        Bestellung ohne gelebte Betreuung überzeugt in der Regel nicht.
      </p>
      <BlogList
        items={[
          "schriftliche Bestellung mit klarer Aufgabenübertragung",
          "passendes Betreuungsmodell nach DGUV Vorschrift 2",
          "nachweisbare Begehungen, Beratungen und Maßnahmenverfolgung",
          "Einbindung in Gefährdungsbeurteilung, Unterweisung und Unfallauswertung",
          "Abstimmung mit Betriebsarzt, Führungskräften und gegebenenfalls ASA",
        ]}
      />

      <BlogH2>Was bei verspäteter Bestellung passiert</BlogH2>
      <p>
        Die fehlende oder verspätete Bestellung ist mehr als eine Formalie. Sie kann bei BG-Prüfungen,
        Behördenbegehungen, Kundenanforderungen und im Schadensfall problematisch werden. Vor allem aber
        fehlt dem Betrieb dann oft die laufende fachliche Begleitung, sodass Mängel bei Gefährdungsbeurteilung,
        Unterweisung, Notfallorganisation oder Begehungen über Monate unentdeckt bleiben.
      </p>
      <p>
        Für viele KMU ist die pragmatischste Lösung eine externe Bestellung. Das reduziert den Aufwand für
        interne Qualifizierung und schafft zugleich klare Ansprechpartner für Führungskräfte und Behörden.
      </p>

      <BlogH2>Wann eine externe FaSi besonders sinnvoll ist</BlogH2>
      <BlogList
        items={[
          "bei kleinen und mittleren Betrieben ohne internes Spezialwissen",
          "bei mehreren Standorten oder stark verteilten Teams in NRW",
          "bei wachstumsstarken Unternehmen mit vielen organisatorischen Änderungen",
          "bei Baustellen, Gefahrstoffen oder besonderer Kunden- und Auditdichte",
          "wenn kurzfristig Ordnung in Dokumentation und Maßnahmenpläne gebracht werden muss",
        ]}
      />
      <BlogLegalRef>
        Vertiefend lohnt sich auch ein Blick auf unseren Beitrag zur{" "}
        <Link href="/blog/externe-fachkraft-arbeitssicherheit-koeln" className="font-medium text-nrw-gruen hover:underline">
          externen Fachkraft für Arbeitssicherheit in Köln
        </Link>{" "}
        sowie auf den Artikel zur{" "}
        <Link
          href="/blog/betriebsbegehung-was-wird-geprueft"
          className="font-medium text-nrw-gruen hover:underline"
        >
          Betriebsbegehung
        </Link>
        .
      </BlogLegalRef>

      <BlogTakeaway>
        Die FaSi-Bestellung sollte nicht aufgeschoben werden, bis ein externer Anlass entsteht. Wer
        Beschäftigte hat, braucht in der Regel frühzeitig eine belastbare sicherheitstechnische Betreuung.
        Wir unterstützen Betriebe in Köln und NRW mit einer passenden{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          FaSi-Betreuung
        </Link>
        .
      </BlogTakeaway>

      <BlogRelated
        links={[
          {
            href: "/blog/externe-fachkraft-arbeitssicherheit-koeln",
            label: "Externe Fachkraft für Arbeitssicherheit in Köln",
          },
          {
            href: "/blog/betriebsbegehung-was-wird-geprueft",
            label: "Betriebsbegehung: Was wird geprüft?",
          },
          {
            href: "/blog/arbeitsschutzausschuss-asa-pflichten",
            label: "ASA-Pflichten: Was Betriebe ab 20 Beschäftigten beachten müssen",
          },
        ]}
      />
      <BlogDisclaimer />
    </BlogArticleShell>
  );
}

export function GefahrstoffeLagernBetrieb() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Gefahrstoffe werden in vielen Betrieben nicht nur verwendet, sondern ganz selbstverständlich
        gelagert: Reinigungsmittel, Lacke, Aerosole, Säuren, Laugen, Lösemittel, Gase oder entzündbare
        Reststoffe. Genau diese Lagerung wird im Alltag oft unterschätzt, obwohl sie erhebliche Risiken für
        Gesundheit, Brand- und Explosionsschutz mit sich bringt.
      </BlogLead>
      <BlogLead>
        In Köln und NRW sehen wir bei Begehungen regelmäßig denselben Befund: Stoffe stehen "nur vorübergehend"
        in Arbeitsräumen, Gebinde sind nicht sauber gekennzeichnet, unverträgliche Stoffe lagern zusammen und
        das Gefahrstoffverzeichnis ist unvollständig. Rechtssicher wird die Organisation erst dann, wenn
        Lagerung, Verwendung und Notfallmaßnahmen in einer belastbaren Systematik zusammenlaufen.
      </BlogLead>

      <BlogH2>Erst beurteilen, dann lagern und verwenden</BlogH2>
      <p>
        Die zentrale Regel der Gefahrstoffverordnung ist eindeutig: Tätigkeiten mit Gefahrstoffen dürfen erst
        aufgenommen werden, wenn eine Gefährdungsbeurteilung vorliegt und die erforderlichen Schutzmaßnahmen
        festgelegt sind. Das betrifft nicht nur den eigentlichen Einsatz des Stoffes, sondern immer auch die
        damit verbundene Lagerung, innerbetriebliche Bereitstellung und Entsorgung.
      </p>
      <BlogGesetzesZitat
        paragraph="GefStoffV § 7 Abs. 1"
        quote="Der Arbeitgeber darf eine Tätigkeit mit Gefahrstoffen erst aufnehmen lassen, nachdem eine Gefährdungsbeurteilung nach § 6 durchgeführt und die erforderlichen Schutzmaßnahmen nach Abschnitt 4 ergriffen worden sind."
        sourceLabel="GefStoffV online"
        sourceHref={GESETZ.gefStoffV7}
      />
      <BlogGesetzesZitat
        paragraph="GefStoffV § 6 Abs. 1"
        quote="Im Rahmen einer Gefährdungsbeurteilung als Bestandteil der Beurteilung der Arbeitsbedingungen nach § 5 des Arbeitsschutzgesetzes hat der Arbeitgeber festzustellen, ob die Beschäftigten Tätigkeiten mit Gefahrstoffen ausüben oder ob bei Tätigkeiten Gefahrstoffe entstehen oder freigesetzt werden können."
        sourceLabel="GefStoffV online"
        sourceHref={GESETZ.gefStoffV6}
      />

      <BlogH2>Was in die Beurteilung zur Lagerung gehört</BlogH2>
      <p>
        Bei der Lagerung reicht es nicht, nur auf das Sicherheitsdatenblatt zu schauen. Die Beurteilung muss
        die konkrete betriebliche Situation erfassen: Welche Stoffe stehen wo, in welcher Menge, in welchen
        Gebinden, mit welcher Lüftung, mit welchem Zugriff, in welcher Nähe zu Zündquellen, Verkehrswegen
        oder Aufenthaltsbereichen?
      </p>
      <BlogList
        items={[
          "gefährliche Eigenschaften und Wechselwirkungen der Stoffe",
          "Mengenbereiche und Lagerorte im Betrieb",
          "Exposition bei Entnahme, Umfüllen, Leckage oder Reinigung",
          "Brand- und Explosionsgefahren durch Dämpfe, Aerosole oder Reaktionen",
          "Zugriffsregelung, Kennzeichnung und Unterweisung der Beschäftigten",
        ]}
      />
      <BlogLegalRef>
        Für die Informationsbasis der Beurteilung sind insbesondere Sicherheitsdatenblätter, betriebliche
        Mengen, Arbeitsverfahren und das Gefahrstoffverzeichnis relevant. Die BAuA bietet dazu über das
        allgemeine Arbeitsschutzportal und die Gefahrstoffregelwerke zusätzliche Orientierung.
      </BlogLegalRef>

      <BlogH2>Gefahrstoffverzeichnis und Dokumentation sind Pflicht</BlogH2>
      <p>
        Wer Gefahrstoffe lagert, braucht nicht nur einzelne Datenblätter, sondern ein aktuelles Verzeichnis.
        Daraus muss hervorgehen, welche Stoffe vorhanden sind, welche gefährlichen Eigenschaften sie haben,
        in welchen Mengenbereichen sie eingesetzt werden und in welchen Arbeitsbereichen Beschäftigte
        exponiert sein können. Ohne diese Übersicht werden Unterweisung, Lagerkonzept und Notfallplanung
        schnell unvollständig.
      </p>
      <BlogGesetzesZitat
        paragraph="GefStoffV § 6 Abs. 12"
        quote="Der Arbeitgeber hat ein Verzeichnis der im Betrieb verwendeten Gefahrstoffe zu führen. Das Verzeichnis muss mindestens folgende Angaben enthalten: Bezeichnung des Gefahrstoffs, Einstufung des Gefahrstoffs oder Angaben zu den gefährlichen Eigenschaften, Angaben zu den im Betrieb verwendeten Mengenbereichen, Bezeichnung der Arbeitsbereiche, in denen Beschäftigte gegenüber dem Gefahrstoff exponiert sein können, und einen Verweis auf die entsprechenden Sicherheitsdatenblätter."
        sourceLabel="GefStoffV online"
        sourceHref={GESETZ.gefStoffV6}
      />

      <BlogH2>Brand- und Explosionsgefahren beim Lagern</BlogH2>
      <p>
        Gerade bei entzündbaren Flüssigkeiten, Spraydosen, Gasen oder staubenden Stoffen reicht eine reine
        Gesundheitsbetrachtung nicht aus. Die GefStoffV verlangt ausdrücklich die Bewertung von Brand- und
        Explosionsgefährdungen. Das ist relevant für Lüftung, Mengenbegrenzung, Zoneneinteilung, elektrische
        Betriebsmittel und die Frage, ob ein separater Lagerschrank oder ein gesonderter Lagerraum nötig ist.
      </p>
      <BlogGesetzesZitat
        paragraph="GefStoffV § 6 Abs. 4"
        quote="Der Arbeitgeber hat festzustellen, ob die verwendeten Stoffe, Gemische und Erzeugnisse bei Tätigkeiten, auch unter Berücksichtigung verwendeter Arbeitsmittel, Verfahren und der Arbeitsumgebung sowie ihrer möglichen Wechselwirkungen, zu Brand- oder Explosionsgefährdungen führen können."
        sourceLabel="GefStoffV online"
        sourceHref={GESETZ.gefStoffV6}
      />
      <p>
        In Werkstätten, Hausmeistereien, Reinigungsdepots oder Produktionsnebenräumen in NRW ist genau das
        oft der kritische Punkt: kleine Mengen an vielen Stellen statt einer sauber organisierten zentralen
        Lagerung.
      </p>

      <BlogH2>Schutzmaßnahmen in der Praxis</BlogH2>
      <p>
        Schutzmaßnahmen müssen immer zur Gefährdung passen. Häufig geht es um Mengenbegrenzung, Trennung
        unverträglicher Stoffe, geeignete Auffangmöglichkeiten, Lüftung, Kennzeichnung, Beschränkung des
        Zugriffs und sichere Entnahme. Zusätzlich braucht es organisatorische Regeln für Nachbestellung,
        Umfüllen, Reinigung, Leergut und Entsorgung.
      </p>
      <BlogList
        items={[
          "nur erforderliche Mengen im Arbeitsbereich bereitstellen",
          "unverträgliche Stoffe getrennt lagern",
          "zugelassene Schränke oder geeignete Lagerbereiche nutzen",
          "Behälter eindeutig kennzeichnen und geschlossen halten",
          "Notfallmaßnahmen, Bindemittel und Alarmwege vorbereiten",
          "Beschäftigte anhand der tatsächlichen Lager- und Arbeitsprozesse unterweisen",
        ]}
      />

      <BlogH2>Typische Mängel bei Begehungen in Köln und NRW</BlogH2>
      <BlogList
        items={[
          "umgefüllte Gebinde ohne lesbare Kennzeichnung",
          "brennbare Stoffe in Fluren, Treppenräumen oder Technikräumen",
          "keine abgestimmte Lagertrennung für Säuren, Laugen oder Oxidationsmittel",
          "fehlendes oder veraltetes Gefahrstoffverzeichnis",
          "Gefährdungsbeurteilung ohne Bezug zu realen Mengen und Lagerorten",
        ]}
      />
      <BlogLegalRef>
        Wenn Gefahrstoffe Teil Ihrer Gefährdungsbeurteilung sind, passt dazu auch unser Beitrag zur{" "}
        <Link
          href="/blog/explosionsschutz-gefaehrdungsbeurteilung"
          className="font-medium text-nrw-gruen hover:underline"
        >
          Explosionsschutz-Gefährdungsbeurteilung
        </Link>
        .
      </BlogLegalRef>

      <BlogTakeaway>
        Gefahrstoffe sicher zu lagern bedeutet mehr als "Schrank auf, Gebinde rein". Entscheidend sind
        Gefährdungsbeurteilung, Stoffübersicht, Lagerkonzept und Unterweisung. Wir unterstützen Betriebe in
        Köln und NRW mit{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          Arbeitsschutz- und Gefahrstoffberatung
        </Link>
        .
      </BlogTakeaway>

      <BlogRelated
        links={[
          {
            href: "/blog/explosionsschutz-gefaehrdungsbeurteilung",
            label: "Explosionsschutz in der Gefährdungsbeurteilung",
          },
          {
            href: "/blog/gefaehrdungsbeurteilung-erstellen-schritt-fuer-schritt",
            label: "Gefährdungsbeurteilung Schritt für Schritt erstellen",
          },
          {
            href: "/blog/unterweisung-arbeitssicherheit-pflichtinhalte",
            label: "Unterweisung im Arbeitsschutz praxisnah aufbauen",
          },
        ]}
      />
      <BlogDisclaimer />
    </BlogArticleShell>
  );
}

export function ErsthelferImBetrieb() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Ersthelfer sind kein Randthema für das Verbandkasten-Regal, sondern ein Kernbestandteil der
        betrieblichen Notfallorganisation. Wer im Ernstfall helfen kann, wie viele Personen verfügbar sein
        müssen und wie die Organisation dokumentiert wird, entscheidet oft darüber, ob aus einem Vorfall
        eine beherrschbare Situation oder ein Organisationsversagen wird.
      </BlogLead>
      <BlogLead>
        In Betrieben in Köln und NRW stellt sich deshalb nicht nur die Frage nach einer Quote. Ebenso wichtig
        sind Schichtabdeckung, räumliche Verteilung, Vertretung, Alarmierung, Dokumentation der
        Erste-Hilfe-Leistung und die Verzahnung mit Brandbekämpfung und Evakuierung.
      </BlogLead>

      <BlogH2>Warum Ersthelfer gesetzlich verankert sind</BlogH2>
      <p>
        Das Arbeitsschutzgesetz verpflichtet Arbeitgeber, die erforderlichen Maßnahmen zur Ersten Hilfe zu
        treffen und geeignete Beschäftigte zu benennen. Entscheidend ist dabei immer das Verhältnis zur
        Zahl der Beschäftigten und zu den besonderen Gefahren. Deshalb ist die Ersthelferorganisation nicht
        in jedem Betrieb identisch, sondern muss betriebsbezogen festgelegt werden.
      </p>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 10 Abs. 1"
        quote="Der Arbeitgeber hat entsprechend der Art der Arbeitsstätte und der Tätigkeiten sowie der Zahl der Beschäftigten die Maßnahmen zu treffen, die zur Ersten Hilfe, Brandbekämpfung und Evakuierung der Beschäftigten erforderlich sind."
        sourceLabel="ArbSchG online"
        sourceHref={GESETZ.arbSchG10}
      />
      <BlogGesetzesZitat
        paragraph="ArbSchG § 10 Abs. 2"
        quote="Der Arbeitgeber hat diejenigen Beschäftigten zu benennen, die Aufgaben der Ersten Hilfe, Brandbekämpfung und Evakuierung der Beschäftigten übernehmen. Anzahl, Ausbildung und Ausrüstung der nach Satz 1 benannten Beschäftigten müssen in einem angemessenen Verhältnis zur Zahl der Beschäftigten und zu den bestehenden besonderen Gefahren stehen."
        sourceLabel="ArbSchG online"
        sourceHref={GESETZ.arbSchG10}
      />

      <BlogH2>Wie viele Ersthelfer erforderlich sind</BlogH2>
      <p>
        In der Praxis orientieren sich Betriebe an den Vorgaben der Unfallversicherungsträger. Doch auch
        wenn die rechnerische Mindestanzahl erfüllt ist, kann die Organisation unzureichend sein. Relevant
        sind etwa Etagen, Wegezeiten, Nacht- und Wochenendschichten, Außendienst, Baustellen, Homeoffice-Anteile
        oder einzelne besonders gefährliche Arbeitsbereiche.
      </p>
      <BlogList
        items={[
          "Anzahl der anwesenden Beschäftigten pro Schicht",
          "räumliche Verteilung im Gebäude oder auf dem Gelände",
          "besondere Gefahren in Werkstatt, Lager, Produktion oder Baustelle",
          "Ausfallzeiten durch Urlaub, Krankheit oder Dienstreisen",
          "Erreichbarkeit von Rettungsmitteln und externem Rettungsdienst",
        ]}
      />
      <BlogLegalRef>
        Ergänzend helfen die BAuA-Informationen zur{" "}
        <a
          href={REGELWERK.bauaErsteHilfe}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-nrw-gruen hover:underline"
        >
          Ersten Hilfe im Unternehmen
        </a>
        . Für die Dokumentation ist außerdem unser Beitrag zum{" "}
        <Link
          href="/blog/verbandbuch-pflicht-betrieb-dokumentation"
          className="font-medium text-nrw-gruen hover:underline"
        >
          Verbandbuch im Betrieb
        </Link>{" "}
        relevant.
      </BlogLegalRef>

      <BlogH2>Benennung, Ausbildung und Auffrischung</BlogH2>
      <p>
        Ersthelfer müssen nicht nur benannt, sondern auch ausgebildet werden. Zudem muss die Organisation
        sicherstellen, dass Nachweise vorhanden und Auffrischungen rechtzeitig geplant sind. In Unternehmen
        mit hoher Fluktuation oder vielen Teilzeitkräften ist das oft der eigentliche Schwachpunkt.
      </p>
      <p>
        Empfehlenswert ist eine zentrale Übersicht mit Namen, Bereich, Schicht, Ausbildungsstand,
        Wiederholungsfrist und Vertretung. So lässt sich auch bei Prüfungen schnell nachweisen, dass die
        Organisation nicht zufällig, sondern bewusst gesteuert ist.
      </p>

      <BlogH2>Was zur funktionierenden Erste-Hilfe-Organisation gehört</BlogH2>
      <BlogList
        items={[
          "benannte und erreichbare Ersthelfer je Schicht und Bereich",
          "geeignetes Erste-Hilfe-Material und klare Standorte",
          "Notruf- und Meldewege, auch für Fremdfirmen und Besucher",
          "Dokumentation jeder relevanten Erste-Hilfe-Leistung",
          "Abstimmung mit Führungskräften, Empfang, Werksschutz oder Haustechnik",
        ]}
      />
      <p>
        Gerade in größeren Objekten in Köln ist es sinnvoll, Ersthelfer nicht nur durch Listen, sondern auch
        über Lagepläne, Intranet, Aushänge oder digitale Alarmierung sichtbarer zu machen.
      </p>

      <BlogH2>Ersthelfer, Brandschutzhelfer und Evakuierung zusammendenken</BlogH2>
      <p>
        Im Notfall greifen diese Rollen ineinander. Wer Erste Hilfe leistet, muss wissen, wie der Bereich
        gesichert wird, wer den Rettungsdienst einweist und wie im Brandfall parallel gehandelt wird. Eine
        Organisation, die nur auf Einzelrollen schaut, übersieht genau diese Schnittstellen.
      </p>
      <p>
        Sinnvoll ist deshalb eine abgestimmte Notfallstruktur mit Unterweisung, Alarmmatrix und klarer
        Aufgabenverteilung. Dazu passt auch unser Artikel zur{" "}
        <Link
          href="/blog/brandschutzhelfer-ausbildung-pflicht-nrw"
          className="font-semibold text-nrw-gruen hover:underline"
        >
          Pflicht von Brandschutzhelfern
        </Link>
        .
      </p>

      <BlogH2>Typische Fehler in der Praxis</BlogH2>
      <BlogList
        items={[
          "Ersthelfer benannt, aber nicht schicht- oder bereichsbezogen verteilt",
          "Auffrischungen versäumt oder Nachweise nicht auffindbar",
          "Verbandbuch und Unfallmeldungen organisatorisch getrennt",
          "keine Vertretungsregelung bei Urlaub und Krankheit",
          "Notfallwege nur intern bekannt, aber nicht für Besucher oder Fremdfirmen",
        ]}
      />
      <BlogGesetzesZitat
        paragraph="ArbSchG § 5 Abs. 3 Nr. 5"
        quote="Eine Gefährdung kann sich insbesondere ergeben durch unzureichende Qualifikation und Unterweisung der Beschäftigten."
        sourceLabel="ArbSchG online"
        sourceHref={GESETZ.arbSchG5}
      />

      <BlogTakeaway>
        Ersthelfer müssen nicht nur formal vorhanden sein, sondern im Alltag verfügbar und handlungsfähig.
        Wir unterstützen Unternehmen in Köln und NRW bei der organisatorischen Umsetzung innerhalb der{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          Arbeitssicherheitsbetreuung
        </Link>{" "}
        und mit passenden{" "}
        <Link href="/leistungen/schulungen" className="font-semibold text-nrw-gruen hover:underline">
          Schulungskonzepten
        </Link>
        .
      </BlogTakeaway>

      <BlogRelated
        links={[
          {
            href: "/blog/verbandbuch-pflicht-betrieb-dokumentation",
            label: "Verbandbuch im Betrieb richtig dokumentieren",
          },
          {
            href: "/blog/brandschutzhelfer-ausbildung-pflicht-nrw",
            label: "Brandschutzhelfer in NRW: Pflicht und praktische Organisation",
          },
          {
            href: "/blog/unterweisung-arbeitssicherheit-pflichtinhalte",
            label: "Unterweisung im Arbeitsschutz systematisch aufbauen",
          },
        ]}
      />
      <BlogDisclaimer />
    </BlogArticleShell>
  );
}

export function BetriebsbegehungWasGeprueft() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Eine Betriebsbegehung ist kein Rundgang mit Notizblock, sondern ein zentrales Steuerungsinstrument im
        Arbeitsschutz. Sie zeigt, ob die Vorgaben aus Gefährdungsbeurteilung, Unterweisung und Organisation
        tatsächlich in der Fläche ankommen oder nur auf dem Papier gut aussehen.
      </BlogLead>
      <BlogLead>
        Gerade in Betrieben in Köln und NRW mit gewachsenen Strukturen ist die Begehung oft der Moment, in
        dem operative Risiken sichtbar werden: zugestellte Fluchtwege, improvisierte Lagerung von
        Gefahrstoffen, fehlende Prüfkennzeichnungen, ungeklärte PSA-Nutzung oder Mängel an Maschinen,
        Verkehrswegen und Baustellenschnittstellen.
      </BlogLead>

      <BlogH2>Warum die Betriebsbegehung gesetzlich so wichtig ist</BlogH2>
      <p>
        Die Aufgabe der Fachkraft für Arbeitssicherheit ist gesetzlich nicht nur beratend beschrieben.
        Das ASiG verpflichtet sie ausdrücklich dazu, Arbeitsstätten regelmäßig zu begehen, Mängel mitzuteilen,
        Abhilfe vorzuschlagen und auf die Umsetzung hinzuwirken. Genau deshalb ist die Begehung ein Kernstück
        professioneller FaSi-Betreuung.
      </p>
      <BlogGesetzesZitat
        paragraph="ASiG § 6 Nr. 3 Buchstabe a"
        quote="Die Fachkräfte für Arbeitssicherheit haben insbesondere die Durchführung des Arbeitsschutzes und der Unfallverhütung zu beobachten und im Zusammenhang damit die Arbeitsstätten in regelmäßigen Abständen zu begehen und festgestellte Mängel dem Arbeitgeber oder der sonst für den Arbeitsschutz und die Unfallverhütung verantwortlichen Person mitzuteilen, Maßnahmen zur Beseitigung dieser Mängel vorzuschlagen und auf deren Durchführung hinzuwirken."
        sourceLabel="ASiG online"
        sourceHref={GESETZ.asiG6}
      />
      <BlogGesetzesZitat
        paragraph="ASiG § 6"
        quote="Die Fachkräfte für Arbeitssicherheit haben die Aufgabe, den Arbeitgeber beim Arbeitsschutz und bei der Unfallverhütung in allen Fragen der Arbeitssicherheit einschließlich der menschengerechten Gestaltung der Arbeit zu unterstützen."
        sourceLabel="ASiG online"
        sourceHref={GESETZ.asiG6}
      />

      <BlogH2>Was bei einer Begehung typischerweise geprüft wird</BlogH2>
      <p>
        Inhalt und Tiefe hängen vom Betrieb ab. In einer Verwaltung stehen andere Themen im Fokus als in
        einer Produktion, Werkstatt oder auf einer Baustelle. Trotzdem gibt es typische Prüffelder, die fast
        immer relevant sind, weil sie den Zustand des Arbeitsschutzsystems unmittelbar sichtbar machen.
      </p>
      <BlogList
        items={[
          "Ordnung und Sauberkeit, Verkehrswege, Flucht- und Rettungswege",
          "Zustand von Maschinen, Schutzeinrichtungen und Prüfkennzeichnungen",
          "Lagerung und Kennzeichnung von Gefahrstoffen und Arbeitsmitteln",
          "PSA-Verfügbarkeit, Trageverhalten und Unterweisung",
          "Erste Hilfe, Feuerlöscher, Sicherheitskennzeichnung und Notfallorganisation",
          "ergonomische und organisatorische Belastungen am Arbeitsplatz",
        ]}
      />

      <BlogH2>Worauf erfahrene Begehungen besonders achten</BlogH2>
      <p>
        Gute Begehungen prüfen nicht nur sichtbare Mängel. Sie achten auf Schnittstellen: Passen die
        Arbeitsabläufe zur Dokumentation? Wissen Beschäftigte, was sie tun sollen? Werden Provisorien zum
        Dauerzustand? Gibt es Bereiche, in denen Regeln nur dann funktionieren, wenn "die richtigen Leute"
        im Dienst sind? Genau dort liegen oft die eigentlichen Risiken.
      </p>
      <p>
        In vielen Betrieben lohnt es sich deshalb, mit Führungskraft, Beschäftigten und gegebenenfalls
        Betriebsrat gemeinsam zu gehen. So werden organisatorische Ursachen eher sichtbar als bei einem rein
        technischen Kontrollgang.
      </p>

      <BlogH2>Vorbereitung: So wird die Begehung wirklich nützlich</BlogH2>
      <BlogList
        items={[
          "letzte Begehungsprotokolle und offene Maßnahmen vorab prüfen",
          "aktuelle Gefährdungsbeurteilungen und Unterweisungsstände bereithalten",
          "Unfälle, Beinahe-Ereignisse und Beschwerden einbeziehen",
          "Verantwortliche aus dem betroffenen Bereich teilnehmen lassen",
          "Blick auf Änderungen seit der letzten Begehung richten",
        ]}
      />
      <BlogLegalRef>
        Eine Betriebsbegehung ist besonders wirksam, wenn sie mit der{" "}
        <Link
          href="/blog/gefaehrdungsbeurteilung-erstellen-schritt-fuer-schritt"
          className="font-medium text-nrw-gruen hover:underline"
        >
          Gefährdungsbeurteilung
        </Link>{" "}
        und der{" "}
        <Link href="/blog/unterweisung-arbeitssicherheit-pflichtinhalte" className="font-medium text-nrw-gruen hover:underline">
          Unterweisung
        </Link>{" "}
        verbunden wird.
      </BlogLegalRef>

      <BlogH2>Nach der Begehung: Fristen, Verantwortung, Nachverfolgung</BlogH2>
      <p>
        Das Protokoll ist nur dann wertvoll, wenn daraus konkrete Maßnahmen mit Verantwortlichen und Fristen
        entstehen. Empfehlenswert ist eine Priorisierung nach Risiko: akute Gefährdungen sofort, relevante
        Organisationsmängel mit Termin und Verantwortlichem, strukturelle Themen in ein Maßnahmenprogramm.
      </p>
      <p>
        Besonders wichtig: Erkenntnisse aus der Begehung müssen in die Dokumentation zurückfließen. Wenn
        wiederkehrend dieselben Mängel auftauchen, stimmt entweder die Maßnahme nicht oder die Führung und
        Unterweisung greifen nicht ausreichend.
      </p>

      <BlogH2>Typische Befunde in NRW-Betrieben</BlogH2>
      <BlogList
        items={[
          "Maßnahmen aus Vorbegehungen wurden nicht abgeschlossen",
          "Unterlagen sind formal vorhanden, aber im Bereich unbekannt",
          "Fremdfirmen arbeiten ohne saubere Schnittstellenregelung",
          "Gefahrstoffe, Lagerung und Betriebsanweisungen passen nicht zusammen",
          "Fluchtwege und Sammelplatzorganisation wurden nach Umbauten nicht angepasst",
        ]}
      />
      <BlogGesetzesZitat
        paragraph="ArbSchG § 6 Abs. 1"
        quote="Der Arbeitgeber muß über die je nach Art der Tätigkeiten und der Zahl der Beschäftigten erforderlichen Unterlagen verfügen, aus denen das Ergebnis der Gefährdungsbeurteilung, die von ihm festgelegten Maßnahmen des Arbeitsschutzes und das Ergebnis ihrer Überprüfung ersichtlich sind."
        sourceLabel="ArbSchG online"
        sourceHref={GESETZ.arbSchG6}
      />

      <BlogTakeaway>
        Eine gute Betriebsbegehung macht Mängel sichtbar, aber vor allem Organisation bewertbar. Wir
        unterstützen Unternehmen in Köln und NRW mit strukturierter{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          FaSi-Betreuung
        </Link>{" "}
        und belastbaren Maßnahmenplänen statt bloßer Mängellisten.
      </BlogTakeaway>

      <BlogRelated
        links={[
          {
            href: "/blog/externe-fachkraft-arbeitssicherheit-koeln",
            label: "Externe FaSi in Köln: wann sie besonders sinnvoll ist",
          },
          {
            href: "/blog/gefaehrdungsbeurteilung-erstellen-schritt-fuer-schritt",
            label: "Gefährdungsbeurteilung Schritt für Schritt erstellen",
          },
          {
            href: "/blog/gefahrstoffe-lagern-betrieb-pflichten",
            label: "Gefahrstoffe im Betrieb sicher lagern",
          },
        ]}
      />
      <BlogDisclaimer />
    </BlogArticleShell>
  );
}

export function HitzearbeitSchutzMassnahmen() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Hitzearbeit ist längst kein reines Sommerthema für Dachdecker oder Gießereien. Schon im späten
        Frühjahr geraten in NRW viele Arbeitsplätze unter Druck: Hallen heizen sich auf, Baustellen liegen in
        der Sonne, Lieferfahrzeuge werden zu Wärmekammern und selbst Büros ohne ausreichenden Sonnenschutz
        erreichen kritische Temperaturen.
      </BlogLead>
      <BlogLead>
        Unternehmen in Köln und Umgebung sollten Hitze daher nicht erst bei Extremwetter behandeln. Wer
        geeignete Schutzmaßnahmen früh plant, schützt Beschäftigte vor Kreislaufproblemen, Konzentrationsfehlern
        und Leistungseinbrüchen und verhindert zugleich Organisationschaos an besonders heißen Tagen.
      </BlogLead>

      <BlogH2>Hitze ist Teil der Gefährdungsbeurteilung</BlogH2>
      <p>
        Die Ausgangsbasis ist nicht allein eine Temperaturgrenze, sondern die Pflicht, arbeitsbedingte
        Gefährdungen zu beurteilen. Hohe Temperaturen wirken dabei oft zusammen mit körperlicher Belastung,
        Sonneneinstrahlung, Schutzausrüstung, unzureichender Lüftung oder Zeitdruck. Deshalb gehört Hitze in
        die Gefährdungsbeurteilung und nicht nur in eine spontane Sommermail.
      </p>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 5 Abs. 1"
        quote="Der Arbeitgeber hat durch eine Beurteilung der für die Beschäftigten mit ihrer Arbeit verbundenen Gefährdung zu ermitteln, welche Maßnahmen des Arbeitsschutzes erforderlich sind."
        sourceLabel="ArbSchG online"
        sourceHref={GESETZ.arbSchG5}
      />
      <BlogGesetzesZitat
        paragraph="ArbSchG § 5 Abs. 3 Nr. 1 und Nr. 4"
        quote="Eine Gefährdung kann sich insbesondere ergeben durch die Gestaltung und die Einrichtung der Arbeitsstätte und des Arbeitsplatzes sowie durch die Gestaltung von Arbeits- und Fertigungsverfahren, Arbeitsabläufen und Arbeitszeit und deren Zusammenwirken."
        sourceLabel="ArbSchG online"
        sourceHref={GESETZ.arbSchG5}
      />

      <BlogH2>Was die ASR A3.5 bei warmen Räumen verlangt</BlogH2>
      <p>
        Für Innenräume gibt die ASR A3.5 eine wichtige Orientierung. Dort wird beschrieben, welche Maßnahmen
        bei steigenden Raumtemperaturen ergriffen werden sollen oder müssen. Besonders relevant ist die
        Schwelle von mehr als 30 Grad Celsius, weil dann wirksame Maßnahmen aufgrund der Gefährdungsbeurteilung
        erforderlich sind.
      </p>
      <BlogGesetzesZitat
        paragraph="ASR A3.5 Abschnitt 4.4 (2)"
        quote="Bei Überschreitung der Lufttemperatur im Raum von +30 °C müssen wirksame Maßnahmen gemäß Gefährdungsbeurteilung ergriffen werden, welche die Beanspruchung der Beschäftigten reduzieren."
        sourceLabel="ASR A3.5 (BAuA)"
        sourceHref={REGELWERK.asrA35}
      />
      <BlogGesetzesZitat
        paragraph="ASR A3.5 Abschnitt 4.4 (5)"
        quote="Bei Lufttemperaturen von mehr als +26 °C sollen, bei mehr als +30 °C müssen geeignete Getränke (z. B. Trinkwasser im Sinne der Trinkwasserverordnung) bereitgestellt werden."
        sourceLabel="ASR A3.5 (BAuA)"
        sourceHref={REGELWERK.asrA35}
      />

      <BlogH2>Welche Schutzmaßnahmen in der Praxis wirksam sind</BlogH2>
      <p>
        Wirksamer Hitzeschutz besteht fast nie aus einer Einzelmaßnahme. Er entsteht durch eine Kombination
        aus Arbeitszeitgestaltung, Verschattung, Lüftung, Entwärmung, Getränkebereitstellung und klarer
        Kommunikation. Je nach Tätigkeit kann auch die Anpassung von Kleidung, Pausenregeln oder
        Personalbesetzung nötig sein.
      </p>
      <BlogList
        items={[
          "Arbeitszeit in kühlere Tagesrandlagen verlagern",
          "Sonnenschutz, Verschattung und Nachtlüftung gezielt nutzen",
          "zusätzliche Trinkpunkte und geeignete Getränke bereitstellen",
          "Pausen- und Entwärmungszeiten verbindlich definieren",
          "körperlich belastende Tätigkeiten, Alleinarbeit und Schutzausrüstung gesondert bewerten",
          "Warnzeichen von Hitzeerschöpfung in Unterweisungen ansprechen",
        ]}
      />

      <BlogH2>Besondere Anforderungen bei körperlicher Arbeit und Baustellen</BlogH2>
      <p>
        Auf Baustellen, in Hallenlogistik, Metallbearbeitung, Küchen, Verkehrsbetrieben oder in der
        Abfallwirtschaft wirken Hitze und körperliche Belastung zusammen. Dadurch steigen Kreislaufbelastung,
        Unachtsamkeit und Unfallrisiko deutlich. Die reine Raumtemperatur bildet diese Belastung oft nicht
        ausreichend ab. Deshalb muss die Gefährdungsbeurteilung auch Tätigkeit, Kleidung, Lasten, Wege und
        direkte Sonneneinstrahlung erfassen.
      </p>
      <p>
        Bei Bauvorhaben in Köln kommt hinzu, dass Fremdfirmen, Lieferverkehr und enge Zeitpläne den
        Handlungsspielraum einengen. Dann braucht es eine klare operative Planung statt bloßer Hinweise.
      </p>

      <BlogH2>Organisation: Wer entscheidet wann was?</BlogH2>
      <p>
        Hitzeschutz funktioniert nur, wenn Zuständigkeiten vorab definiert sind. Wer beobachtet die
        Temperaturentwicklung? Wer veranlasst zusätzliche Pausen? Wann werden Arbeiten verschoben, wann
        weitere Getränke organisiert, wann Bereiche gesperrt oder technische Maßnahmen aktiviert? Ohne
        Entscheidungslogik reagieren Betriebe oft zu spät oder uneinheitlich.
      </p>
      <BlogSteps
        items={[
          "Temperatur- und Belastungslagen betriebsbezogen definieren.",
          "Auslösewerte und Maßnahmenstufen schriftlich festlegen.",
          "Führungskräfte und Beschäftigte zu Symptomen und Abläufen unterweisen.",
          "besonders gefährdete Personen und Tätigkeiten gesondert beobachten.",
          "nach Hitzeperioden auswerten, was funktioniert hat und was nicht.",
        ]}
      />
      <BlogLegalRef>
        Praktisch hilfreich ist die Verbindung von Hitzekonzept,{" "}
        <Link
          href="/blog/getraenke-arbeitsplatz-arbeitgeber"
          className="font-medium text-nrw-gruen hover:underline"
        >
          Getränkebereitstellung am Arbeitsplatz
        </Link>{" "}
        und der allgemeinen{" "}
        <Link
          href="/blog/gefaehrdungsbeurteilung-erstellen-schritt-fuer-schritt"
          className="font-medium text-nrw-gruen hover:underline"
        >
          Gefährdungsbeurteilung
        </Link>
        .
      </BlogLegalRef>

      <BlogH2>Typische Fehler bei Sommermaßnahmen</BlogH2>
      <BlogList
        items={[
          "Maßnahmen werden erst nach Beschwerden statt vorbeugend organisiert",
          "Getränke stehen bereit, aber Arbeitszeiten und Pausen bleiben unverändert",
          "körperlich belastete Bereiche werden wie normale Büroräume behandelt",
          "keine besonderen Regeln für Schwangere, gesundheitlich vorbelastete oder allein arbeitende Personen",
          "Unterweisungen und Verantwortlichkeiten sind nicht klar geregelt",
        ]}
      />

      <BlogTakeaway>
        Hitzearbeit braucht keine Panik, aber eine klare Organisation. Wir unterstützen Unternehmen in Köln
        und NRW bei hitzebezogenen Gefährdungsbeurteilungen und praxistauglichen Maßnahmen über unsere{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          Arbeitsschutzberatung
        </Link>
        .
      </BlogTakeaway>

      <BlogRelated
        links={[
          {
            href: "/blog/getraenke-arbeitsplatz-arbeitgeber",
            label: "Getränke am Arbeitsplatz: Was Arbeitgeber bereitstellen müssen",
          },
          {
            href: "/blog/gefaehrdungsbeurteilung-erstellen-schritt-fuer-schritt",
            label: "Gefährdungsbeurteilung Schritt für Schritt erstellen",
          },
          {
            href: "/blog/psychische-belastung-gefaehrdungsbeurteilung",
            label: "Psychische Belastung richtig in die Gefährdungsbeurteilung aufnehmen",
          },
        ]}
      />
      <BlogDisclaimer />
    </BlogArticleShell>
  );
}
