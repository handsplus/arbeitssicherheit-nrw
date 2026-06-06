import type { OfficialLink } from "@/lib/officialSources";

/** Rechtsgrundlagen je Blog-Artikel – abgestimmt auf die Gesetze-Vorschriften-Sammlung */
export const BLOG_OFFICIAL_SOURCES: Record<string, OfficialLink[]> = {
  "gefaehrdungsbeurteilung-unterschrift": [
    {
      href: "https://www.gesetze-im-internet.de/arbschg/__5.html",
      label: "ArbSchG § 5 – Beurteilung der Arbeitsbedingungen",
    },
    {
      href: "https://www.gesetze-im-internet.de/gefstoffv_2010/__6.html",
      label: "GefStoffV § 6 – Gefährdungsbeurteilung (Dokumentation, Fachkunde)",
      note: "§ 6 Abs. 8: Dokumentationspflicht; § 6 Abs. 11: fachkundige Durchführung",
    },
    {
      href: "https://www.gesetze-im-internet.de/gefstoffv_2010/__7.html",
      label: "GefStoffV § 7 – Tätigkeiten erst nach Gefährdungsbeurteilung",
    },
    {
      href: "https://www.gesetze-im-internet.de/asig/__6.html",
      label: "ASiG § 6 – Aufgaben der Fachkraft für Arbeitssicherheit",
      note: "Mitwirkung bei der Beurteilung der Arbeitsbedingungen",
    },
  ],
  "getraenke-arbeitsplatz-arbeitgeber": [
    {
      href: "https://www.gesetze-im-internet.de/arbst_ttv/",
      label: "Arbeitsstättenverordnung (ArbStättV)",
    },
    {
      href: "https://www.baua.de/DE/Themen/Arbeitsstaetten/Regelwerk/ASR/ASR-A3-5.html",
      label: "ASR A3.5 – Raumtemperatur (BAuA)",
      note: "Getränkebereitstellung ab +26 °C / +30 °C Lufttemperatur im Raum",
    },
    {
      href: "https://www.gesetze-im-internet.de/arbschg/",
      label: "ArbSchG – Grundpflichten des Arbeitgebers",
    },
  ],
  "akteure-arbeitsschutz-ueberblick": [
    {
      href: "https://www.gesetze-im-internet.de/arbschg/",
      label: "Arbeitsschutzgesetz (ArbSchG)",
    },
    {
      href: "https://www.gesetze-im-internet.de/asig/",
      label: "Arbeitssicherheitsgesetz (ASiG)",
      note: "Betriebsarzt, FaSi, Arbeitsschutzausschuss",
    },
    {
      href: "https://www.dguv.de/medien/inhalt/39651/dguv-vorschrift-2.pdf",
      label: "DGUV Vorschrift 2 – Betriebsärzte und Fachkräfte für Arbeitssicherheit",
    },
    {
      href: "https://www.gesetze-im-internet.de/sgb_7/__22.html",
      label: "SGB VII § 22 – Sicherheitsbeauftragte",
    },
  ],
  "ladestation-e-auto-garage-genehmigung": [
    {
      href: "https://www.gesetze-im-internet.de/betrSichv/",
      label: "Betriebssicherheitsverordnung (BetrSichV)",
      note: "Genehmigungspflicht für überwachungsbedürftige Anlagen",
    },
    {
      href: "https://www.mhkbd.nrw/themen/bau/bau-und-kammerrecht/bauordnung",
      label: "Landesbauordnung NRW (BauO NRW)",
    },
    {
      href: "https://www.gesetze-im-internet.de/bimschg/",
      label: "Bundes-Immissionsschutzgesetz (BImSchG)",
    },
  ],
  "unterweisung-arbeitssicherheit-pflichtinhalte": [
    {
      href: "https://www.gesetze-im-internet.de/arbschg/__12.html",
      label: "ArbSchG § 12 – Unterweisung",
    },
    {
      href: "https://www.gesetze-im-internet.de/asig/__6.html",
      label: "ASiG § 6 – Mitwirkung der FaSi bei Unterweisungen",
    },
    {
      href: "https://www.dguv.de/medien/inhalt/39651/dguv-vorschrift-2.pdf",
      label: "DGUV Vorschrift 2 – Betreuungsumfang und Unterweisung",
    },
    {
      href: "https://www.baua.de/DE/Themen/Arbeitsschutz-im-Unternehmen/Unterweisung/unterweisung.html",
      label: "BAuA – Unterweisung im Arbeitsschutz",
    },
  ],
  "sigeko-und-betrieb-schnittstelle": [
    {
      href: "https://www.gesetze-im-internet.de/baustellv/",
      label: "Baustellenverordnung (BaustellV)",
    },
    {
      href: "https://www.gesetze-im-internet.de/baustellv/__3.html",
      label: "BaustellV § 3 – Koordinierung (SiGeKo)",
    },
    {
      href: "https://www.gesetze-im-internet.de/asig/",
      label: "ASiG – Betriebliche Arbeitssicherheit",
    },
    {
      href: "https://www.baua.de/DE/Themen/Bauarbeiten-und-Baustellen/",
      label: "BAuA – Bauarbeiten und Baustellen",
    },
  ],
  "externe-fachkraft-arbeitssicherheit-koeln": [
    {
      href: "https://www.gesetze-im-internet.de/asig/__5.html",
      label: "ASiG § 5 – Bestellung der Fachkraft für Arbeitssicherheit",
    },
    {
      href: "https://www.gesetze-im-internet.de/asig/__6.html",
      label: "ASiG § 6 – Aufgaben der FaSi",
    },
    {
      href: "https://www.dguv.de/medien/inhalt/39651/dguv-vorschrift-2.pdf",
      label: "DGUV Vorschrift 2 – Betreuungszeiten nach Gefährdungsgruppe",
    },
    {
      href: "https://www.arbeitsschutz.nrw.de/",
      label: "Arbeitsschutzverwaltung NRW – Informationen",
    },
  ],
  "brandschutzbeauftragter-nrw-intern-extern": [
    {
      href: "https://www.dguv.de/ifa/praxishilfen/praxishilfen-themenliste/praxishilfen-thema-brandschutz/index.jsp",
      label: "DGUV – Praxishilfen Brandschutz",
    },
    {
      href: "https://www.mhkbd.nrw/themen/bau/bau-und-kammerrecht/bauordnung",
      label: "BauO NRW – baulicher Brandschutz",
    },
    {
      href: "https://www.gesetze-im-internet.de/bhkg/",
      label: "Brandschutzgesetze der Länder (Übersicht)",
      note: "In NRW: BHKG NRW – organisatorischer Brandschutz",
    },
  ],
  "sigeko-nrw-orientierung-bauherren": [
    {
      href: "https://www.gesetze-im-internet.de/baustellv/__3.html",
      label: "BaustellV § 3 – Pflichten des SiGeKo",
    },
    {
      href: "https://www.gesetze-im-internet.de/baustellv/__2.html",
      label: "BaustellV § 2 – Anwendungsbereich",
    },
    {
      href: "https://www.baua.de/DE/Themen/Bauarbeiten-und-Baustellen/",
      label: "BAuA – Sicherheit und Gesundheit auf Baustellen",
    },
    {
      href: "https://www.mhkbd.nrw/themen/bau/bau-und-kammerrecht/bauordnung",
      label: "BauO NRW – Bauaufsicht in Nordrhein-Westfalen",
    },
  ],

  // --- April 2026 ---
  "gefaehrdungsbeurteilung-erstellen-schritt-fuer-schritt": [
    {
      href: "https://www.gesetze-im-internet.de/arbschg/__5.html",
      label: "ArbSchG § 5 – Beurteilung der Arbeitsbedingungen",
    },
    {
      href: "https://www.gesetze-im-internet.de/arbschg/__6.html",
      label: "ArbSchG § 6 – Dokumentation",
    },
    {
      href: "https://www.gesetze-im-internet.de/gefstoffv_2010/__6.html",
      label: "GefStoffV § 6 – Gefährdungsbeurteilung bei Gefahrstoffen",
    },
    {
      href: "https://www.baua.de/DE/Themen/Arbeitsschutz-im-Unternehmen/Gefaehrdungsbeurteilung/gefaehrdungsbeurteilung.html",
      label: "BAuA – Gefährdungsbeurteilung",
    },
  ],
  "brandschutzhelfer-ausbildung-pflicht-nrw": [
    {
      href: "https://www.baua.de/DE/Themen/Arbeitsstaetten/Regelwerk/ASR/ASR-A2-2.html",
      label: "ASR A2.2 – Maßnahmen gegen Brände (BAuA)",
    },
    {
      href: "https://publikationen.dguv.de/regelwerk/205-023",
      label: "DGUV Information 205-023 – Brandschutzhelfer",
    },
    {
      href: "https://www.gesetze-im-internet.de/arbschg/__3.html",
      label: "ArbSchG § 3 – Grundpflichten des Arbeitgebers",
    },
  ],
  "sigeko-ab-wann-pflicht-baustelle": [
    {
      href: "https://www.gesetze-im-internet.de/baustellv/__2.html",
      label: "BaustellV § 2 – Anwendungsbereich",
    },
    {
      href: "https://www.gesetze-im-internet.de/baustellv/__3.html",
      label: "BaustellV § 3 – Koordinierung (SiGeKo)",
    },
    {
      href: "https://www.baua.de/DE/Themen/Bauarbeiten-und-Baustellen/",
      label: "BAuA – Bauarbeiten und Baustellen",
    },
  ],
  "fasi-bestellung-pflicht-fristen": [
    {
      href: "https://www.gesetze-im-internet.de/asig/__5.html",
      label: "ASiG § 5 – Bestellung der Fachkraft für Arbeitssicherheit",
    },
    {
      href: "https://www.gesetze-im-internet.de/asig/__6.html",
      label: "ASiG § 6 – Aufgaben der FaSi",
    },
    {
      href: "https://www.dguv.de/medien/inhalt/39651/dguv-vorschrift-2.pdf",
      label: "DGUV Vorschrift 2 – Betreuungszeiten",
    },
  ],
  "gefahrstoffe-lagern-betrieb-pflichten": [
    {
      href: "https://www.gesetze-im-internet.de/gefstoffv_2010/",
      label: "Gefahrstoffverordnung (GefStoffV)",
    },
    {
      href: "https://www.gesetze-im-internet.de/gefstoffv_2010/__6.html",
      label: "GefStoffV § 6 – Gefährdungsbeurteilung",
    },
    {
      href: "https://www.baua.de/DE/Themen/Anwendungsregeln-und-Regeln-zur-Gefahrstoffverzeichnis/",
      label: "BAuA – TRGS (Technische Regeln für Gefahrstoffe)",
    },
  ],
  "ersthelfer-im-betrieb-pflichten": [
    {
      href: "https://www.gesetze-im-internet.de/arbschg/__10.html",
      label: "ArbSchG § 10 – Erste-Hilfe-Leistungen",
    },
    {
      href: "https://www.dguv.de/medien/inhalt/39651/dguv-vorschrift-1.pdf",
      label: "DGUV Vorschrift 1 – Grundsätze der Prävention",
    },
    {
      href: "https://www.baua.de/DE/Themen/Arbeitsschutz-im-Unternehmen/Erste-Hilfe/erste-hilfe.html",
      label: "BAuA – Erste Hilfe am Arbeitsplatz",
    },
  ],
  "betriebsbegehung-was-wird-geprueft": [
    {
      href: "https://www.gesetze-im-internet.de/asig/__6.html",
      label: "ASiG § 6 – Aufgaben der FaSi (Begehungen)",
    },
    {
      href: "https://www.dguv.de/medien/inhalt/39651/dguv-vorschrift-2.pdf",
      label: "DGUV Vorschrift 2 – Betreuungsumfang",
    },
    {
      href: "https://www.gesetze-im-internet.de/arbschg/__3.html",
      label: "ArbSchG § 3 – Grundpflichten des Arbeitgebers",
    },
  ],
  "hitzearbeit-schutz-massnahmen-nrw": [
    {
      href: "https://www.baua.de/DE/Themen/Arbeitsstaetten/Regelwerk/ASR/ASR-A3-5.html",
      label: "ASR A3.5 – Raumtemperatur (BAuA)",
      note: "Getränke ab +26 °C / +30 °C, Pausen und Arbeitszeitverlagerung",
    },
    {
      href: "https://www.gesetze-im-internet.de/arbschg/__5.html",
      label: "ArbSchG § 5 – Gefährdungsbeurteilung (Hitze)",
    },
    {
      href: "https://www.gesetze-im-internet.de/arbst_ttv/",
      label: "Arbeitsstättenverordnung (ArbStättV)",
    },
  ],

  // --- Mai 2026 ---
  "elektropruefung-dguv-vorschrift-3-fristen": [
    {
      href: "https://www.dguv.de/medien/inhalt/39651/dguv-vorschrift-3.pdf",
      label: "DGUV Vorschrift 3 – Elektrische Anlagen und Betriebsmittel",
    },
    {
      href: "https://www.gesetze-im-internet.de/betrSichv/",
      label: "Betriebssicherheitsverordnung (BetrSichV)",
    },
    {
      href: "https://www.gesetze-im-internet.de/arbschg/__3.html",
      label: "ArbSchG § 3 – Grundpflichten des Arbeitgebers",
    },
  ],
  "homeoffice-gefaehrdungsbeurteilung-pflicht": [
    {
      href: "https://www.gesetze-im-internet.de/arbschg/__5.html",
      label: "ArbSchG § 5 – Beurteilung der Arbeitsbedingungen",
    },
    {
      href: "https://www.baua.de/DE/Themen/Arbeitsstaetten/Regelwerk/ASR/ASR-A4-1.html",
      label: "ASR A4.1 – Bildschirmarbeit (BAuA)",
    },
    {
      href: "https://www.baua.de/DE/Themen/Arbeitsschutz-im-Unternehmen/Arbeitsorganisation/arbeitsorganisation.html",
      label: "BAuA – Arbeitsorganisation und psychische Belastung",
    },
  ],
  "arbeitsschutzausschuss-asa-pflichten": [
    {
      href: "https://www.gesetze-im-internet.de/asig/__11.html",
      label: "ASiG § 11 – Arbeitsschutzausschuss",
    },
    {
      href: "https://www.dguv.de/medien/inhalt/39651/dguv-vorschrift-2.pdf",
      label: "DGUV Vorschrift 2 – ASA und Betreuung",
    },
    {
      href: "https://www.gesetze-im-internet.de/asig/",
      label: "Arbeitssicherheitsgesetz (ASiG)",
    },
  ],
  "explosionsschutz-gefaehrdungsbeurteilung": [
    {
      href: "https://www.gesetze-im-internet.de/gefstoffv_2010/__6.html",
      label: "GefStoffV § 6 – Explosionsschutzdokument",
    },
    {
      href: "https://www.baua.de/DE/Themen/Anwendungsregeln-und-Regeln-zur-Gefahrstoffverzeichnis/TRGS-720/",
      label: "TRGS 720 – Abscheidung brennbarer Stäube",
    },
    {
      href: "https://www.baua.de/DE/Themen/Anwendungsregeln-und-Regeln-zur-Gefahrstoffverzeichnis/TRGS-509/",
      label: "TRGS 509 – Lagern von flüssigen und festen Gefahrstoffen",
    },
  ],
  "brandschutzordnung-teil-a-b-c": [
    {
      href: "https://www.dguv.de/ifa/praxishilfen/praxishilfen-themenliste/praxishilfen-thema-brandschutz/index.jsp",
      label: "DGUV – Praxishilfen Brandschutz",
    },
    {
      href: "https://www.baua.de/DE/Themen/Arbeitsstaetten/Regelwerk/ASR/ASR-A2-2.html",
      label: "ASR A2.2 – Maßnahmen gegen Brände",
    },
    {
      href: "https://www.mhkbd.nrw/themen/bau/bau-und-kammerrecht/bauordnung",
      label: "BauO NRW – baulicher Brandschutz",
    },
  ],
  "sigeplan-inhalt-pflichten-baustelle": [
    {
      href: "https://www.gesetze-im-internet.de/baustellv/__3.html",
      label: "BaustellV § 3 – SiGePlan und Koordinierung",
    },
    {
      href: "https://www.baua.de/DE/Themen/Bauarbeiten-und-Baustellen/",
      label: "BAuA – Sicherheit und Gesundheit auf Baustellen",
    },
    {
      href: "https://www.gesetze-im-internet.de/baustellv/",
      label: "Baustellenverordnung (BaustellV)",
    },
  ],
  "psychische-belastung-gefaehrdungsbeurteilung": [
    {
      href: "https://www.gesetze-im-internet.de/arbschg/__5.html",
      label: "ArbSchG § 5 – Beurteilung inkl. psychischer Belastungen",
    },
    {
      href: "https://www.baua.de/DE/Themen/Arbeitsschutz-im-Unternehmen/Arbeitsorganisation/arbeitsorganisation.html",
      label: "BAuA – Psychische Belastung am Arbeitsplatz",
    },
    {
      href: "https://www.gesetze-im-internet.de/asig/__6.html",
      label: "ASiG § 6 – Mitwirkung Betriebsarzt und FaSi",
    },
  ],
  "verbandbuch-pflicht-betrieb-dokumentation": [
    {
      href: "https://www.gesetze-im-internet.de/arbschg/__10.html",
      label: "ArbSchG § 10 – Erste-Hilfe-Leistungen und Dokumentation",
    },
    {
      href: "https://www.dguv.de/medien/inhalt/39651/dguv-vorschrift-1.pdf",
      label: "DGUV Vorschrift 1 – Dokumentation im Arbeitsschutz",
    },
    {
      href: "https://www.baua.de/DE/Themen/Arbeitsschutz-im-Unternehmen/Erste-Hilfe/erste-hilfe.html",
      label: "BAuA – Erste Hilfe am Arbeitsplatz",
    },
  ],
};

export function getBlogOfficialSources(slug: string): OfficialLink[] {
  return BLOG_OFFICIAL_SOURCES[slug] ?? [];
}
