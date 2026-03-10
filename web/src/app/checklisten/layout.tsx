import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checklisten: Arbeitssicherheit, Brandschutz, SiGeKo",
  description:
    "Kostenlose Checklisten zur Selbstbewertung: Arbeitssicherheit, Brandschutz und SiGeKo für Ihren Betrieb. Orientierungshilfe – keine Fachberatung.",
};

export default function ChecklistenLayout({ children }: { children: React.ReactNode }) {
  return children;
}
