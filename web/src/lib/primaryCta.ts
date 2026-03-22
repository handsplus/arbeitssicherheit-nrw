/**
 * Rotierende starke CTAs für /beratung-buchen – thematisch passend, jeweils inkl.
 * „Kostenlose Erstberatung“ oder gleichwertige Einladung.
 */
export type PrimaryCtaTheme =
  | "default"
  | "arbeitssicherheit"
  | "brandschutz"
  | "sigeko"
  | "elektrosicherheit"
  | "managementsysteme"
  | "header";

export const PRIMARY_CTA_POOLS: Record<Exclude<PrimaryCtaTheme, "header">, readonly string[]> = {
  default: [
    "Kostenlose Erstberatung",
    "Beratungstermin sichern",
    "Jetzt unverbindlich anfragen",
    "Sicherheit im Betrieb klären",
    "Schnellanfrage senden",
  ],
  arbeitssicherheit: [
    "Kostenlose Erstberatung",
    "FaSi-Betreuung anfragen",
    "Gefährdungsbeurteilung anfragen",
    "Arbeitssicherheit klären",
    "Beratungstermin sichern",
  ],
  brandschutz: [
    "Kostenlose Erstberatung",
    "Brandschutz klären",
    "BSB-Beratung anfragen",
    "Brandschutz-Check vereinbaren",
    "Jetzt unverbindlich anfragen",
  ],
  sigeko: [
    "Kostenlose Erstberatung",
    "SiGeKo anfragen",
    "Baustelle rechtssicher koordinieren",
    "SiGeKo-Beratung vereinbaren",
    "Beratungstermin sichern",
  ],
  elektrosicherheit: [
    "Kostenlose Erstberatung",
    "VEFK & Elektroprüfung anfragen",
    "Elektrosicherheit klären",
    "Jetzt unverbindlich anfragen",
    "Beratungstermin sichern",
  ],
  managementsysteme: [
    "Kostenlose Erstberatung",
    "ISO & Systeme anfragen",
    "Managementsystem klären",
    "Beratungstermin sichern",
    "Jetzt unverbindlich anfragen",
  ],
};

/** Kurz für die Header-Leiste (wenig Platz, kein Layout-Sprung) */
export const HEADER_CTA_LABELS: readonly string[] = [
  "Erstberatung",
  "Beratung",
  "Termin sichern",
  "Jetzt anfragen",
];
