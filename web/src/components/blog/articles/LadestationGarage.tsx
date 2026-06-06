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

export function LadestationGarage() {
  return (
    <BlogArticleShell>
      <BlogLead>
        E-Auto-Ladestationen in Tiefgaragen und Stellplätzen sind in NRW-Betrieben ein häufiges
        Thema – zwischen Genehmigung, Brandschutz und Betriebssicherheit gibt es viele
        Fehleinschätzungen.
      </BlogLead>

      <BlogH2>Kurzantwort: keine Genehmigung wie bei einer Zapfsäule</BlogH2>
      <p>
        Ladestationen für Elektrofahrzeuge gelten in der Regel als Teil der elektrischen
        Leitungsanlagen und technischen Gebäudeausstattung – nicht als eigenständige
        genehmigungspflichtige Anlage im Sinne der Betriebssicherheitsverordnung. Kraftstoffzapfsäulen
        unterliegen dagegen der Genehmigungspflicht für überwachungsbedürftige Anlagen.
      </p>
      <BlogGesetzesZitat
        paragraph="BetrSichV § 18 Abs. 1 Nr. 6 (Auszug)"
        quote="Die Errichtung und der Betrieb … folgender Anlagen bedürfen der Erlaubnis der zuständigen Behörde: … 6. ortsfeste Anlagen für die Betankung von Land-, Wasser- und Luftfahrzeugen mit entzündbaren Flüssigkeiten (Tankstellen)"
        source="11_BetrSichV.pdf (Gesetze-Vorschriften)"
      />
      <p>
        E-Auto-Ladestationen fallen unter diese Tankstellen-Regelung in der Regel nicht – sie sind
        elektrische Leitungsanlagen, keine Kraftstoff-Tankstellen im Sinne der BetrSichV.
      </p>

      <BlogH2>Keine Nutzungsänderung der Garage</BlogH2>
      <p>
        Die Installation einer Ladestation führt in der Regel nicht zu einer Nutzungsänderung der
        Garage. Leitungsanlagen und elektrische Verteiler sind in Garagen grundsätzlich zulässig –
        vergleichbar mit der Errichtung einer Wallbox oder zusätzlicher Steckdosen, sofern die
        baulichen und brandschutztechnischen Anforderungen eingehalten werden.
      </p>
      <BlogGesetzesZitat
        paragraph="BauO NRW § 48 (Auszug)"
        quote="Garagen sind Gebäude oder Gebäudeteile zum Abstellen von Kraftfahrzeugen … 15. die Stellplätze und Garagen mit und ohne einer Stromzuleitung für die Aufladung von Batterien"
        source="01_BauO-NRW-2018.pdf (Gesetze-Vorschriften)"
      />

      <BlogH2>Brandschutz: Risiko liegt beim Fahrzeug, nicht primär an der Ladestation</BlogH2>
      <p>
        Feuerwehren und Brandschutzgutachter sehen E-Fahrzeuge in Tiefgaragen kritisch – vor allem
        wegen schwer löschbarer Brandentwicklungen bei Lithium-Ionen-Akkus. Fachlich ist zu
        differenzieren:
      </p>
      <BlogList
        items={[
          "Der Ladevorgang an einer fachgerecht installierten Ladestation geht von sich aus keiner erhöhten Brandgefahr aus",
          "Risiken entstehen eher durch defekte, beschädigte oder unsachgemäß geladene Fahrzeugbatterien",
          "Organisatorische Maßnahmen (Zugangsregelungen, Ladezeiten, Brandschutzordnung) können sinnvoll sein",
          "Bei größeren Projekten: Abstimmung mit Brandschutzbeauftragtem und ggf. Feuerwehrplanung",
        ]}
      />

      <BlogH3>Elektrosicherheit und Prüfungen</BlogH3>
      <p>
        Auch ohne klassische Genehmigungspflicht müssen elektrische Anlagen fachgerecht geplant,
        installiert und geprüft werden. Die Verantwortung für die elektrische Betriebssicherheit
        obliegt dem Anlagenbetreiber – Prüfungen nach DGUV Vorschrift 3 und Einbindung einer VEFK
        können erforderlich sein.
      </p>

      <BlogH2>Landesbauordnung NRW: Rechtslage bleibt stabil</BlogH2>
      <p>
        Auch nach Anpassungen und Diskussionen zur Landesbauordnung NRW bleibt die Grundeinordnung
        bestehen: Ladestationen sind keine Zapfsäulen und lösen allein keine Nutzungsänderung aus.
        Betriebe sollten dennoch Einzelfallprüfungen bei größeren Ladeinfrastrukturprojekten
        einplanen – insbesondere bei Sonderbauten, gemischten Nutzungen oder behördlichen Auflagen.
      </p>

      <BlogTakeaway>
        Ladestation in der Garage: in der Regel keine Genehmigungspflicht wie bei Kraftstoffanlagen,
        aber Elektrosicherheit und Brandschutzorganisation ernst nehmen. Für NRW-Betriebe beraten
        wir zu Schnittstellen zwischen{" "}
        <Link href="/leistungen/elektrosicherheit" className="font-semibold text-nrw-gruen hover:underline">
          Elektrosicherheit
        </Link>{" "}
        und{" "}
        <Link href="/leistungen/brandschutz" className="font-semibold text-nrw-gruen hover:underline">
          Brandschutz
        </Link>
        .
      </BlogTakeaway>

      <BlogDisclaimer />
    </BlogArticleShell>
  );
}
