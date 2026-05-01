/**
 * Seriöse externe Verlinkungen (Behörden, Gesetzestexte, anerkannte Institutionen).
 * Stärkt E-E-A-T und hilft Nutzer:innen wie Suchmaschinen beim Einordnen.
 */
export type OfficialLink = { href: string; label: string; note?: string };

export const OFFICIAL_GENERAL: OfficialLink[] = [
  {
    href: "https://www.baua.de/",
    label: "Bundesanstalt für Arbeitsschutz und Arbeitsmedizin (BAuA)",
    note: "Informationen und Regelwerke zum Arbeitsschutz",
  },
  {
    href: "https://www.dguv.de/",
    label: "Deutsche Gesetzliche Unfallversicherung (DGUV)",
    note: "Vorschriften, Regeln, Unfallverhütung",
  },
  {
    href: "https://www.bmas.de/DE/Themen/Arbeitsschutz/arbeitssicherheit.html",
    label: "Bundesministerium für Arbeit und Soziales – Arbeitsschutz",
  },
  {
    href: "https://www.gesetze-im-internet.de/asig/",
    label: "Arbeitssicherheitsgesetz (ASiG) – Gesetzestext",
  },
  {
    href: "https://www.gesetze-im-internet.de/arbschg/",
    label: "Arbeitsschutzgesetz (ArbSchG) – Gesetzestext",
  },
];

export const OFFICIAL_SIGEKO: OfficialLink[] = [
  {
    href: "https://www.baua.de/DE/Themen/Bauarbeiten-und-Baustellen/",
    label: "BAuA – Bauarbeiten und Baustellen (inkl. Arbeitsschutz)",
  },
  {
    href: "https://www.gesetze-im-internet.de/baustellv/",
    label: "Baustellenverordnung (BaustellV) – Gesetzestext",
  },
];

export const OFFICIAL_BRANDSCHUTZ: OfficialLink[] = [
  {
    href: "https://www.bmi.bund.de/DE/themen/bauen-wohnen/brandschutz/brandschutz-node.html",
    label: "BMI – Thema Brandschutz",
  },
  {
    href: "https://www.mhkbd.nrw/themen/bau/bau-und-kammerrecht/bauordnung",
    label: "Bauordnung NRW (Landesbauordnung 2018 – BauO NRW)",
    note: "Landesrecht zu baulichen Anforderungen, Genehmigung und Bauaufsicht in Nordrhein-Westfalen.",
  },
  {
    href: "https://recht.nrw.de/lrgv/gesetz/01012024-bauordnung-fuer-das-land-nordrhein-westfalen-landesbauordnung-2018-bauo-nrw",
    label: "BauO NRW 2018 – Volltext (RECHT.NRW.DE)",
    note: "Aktuelle Fassung der Bauordnung für NRW zum Nachlesen und Zitieren.",
  },
];

export const OFFICIAL_ELEKTRO: OfficialLink[] = [
  {
    href: "https://www.dguv.de/ifa/praxishilfen/praxishilfen-themenliste/praxishilfen-thema-elektrosicherheit/index.jsp",
    label: "DGUV – Elektrosicherheit",
  },
];

export const OFFICIAL_ISO: OfficialLink[] = [
  {
    href: "https://www.iso.org/standard/63787.html",
    label: "ISO 45001 – Normeninformation (ISO)",
    note: "Rahmen für Arbeitsschutz-Managementsysteme; Zertifizierung erfolgt über akkreditierte Stellen.",
  },
];
