import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ – FaSi, Brandschutzbeauftragter, SiGeKo, Elektrosicherheit",
  description:
    "Häufige Fragen zu Fachkraft für Arbeitssicherheit, Brandschutzbeauftragter, SiGeKo und Elektrosicherheit. Kurze Antworten für Köln und NRW.",
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
