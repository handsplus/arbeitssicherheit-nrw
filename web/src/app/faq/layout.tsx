import { SITE } from "@/lib/constants";

export const metadata = {
  title: "FAQ – Arbeitssicherheit, FaSi, Brandschutz, SiGeKo",
  description:
    "Häufige Fragen zu Arbeitssicherheit, externer FaSi, Brandschutzbeauftragter, SiGeKo und Elektrosicherheit. Kurze Antworten für Köln und NRW.",
  alternates: { canonical: `${SITE.url}/faq` },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
