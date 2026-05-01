import { SITE } from "@/lib/constants";

export const metadata = {
  title: "FAQ – Arbeitssicherheit, FaSi, Brandschutz, SiGeKo",
  description:
    "Ausführliche Antworten zu externer FaSi, Gefährdungsbeurteilung, SiGeKo, Brandschutz, Elektroprüfungen und ISO 45001 – mit Verweisen auf Leistungen, Blog und Checklisten. Für Unternehmen in Köln und NRW.",
  alternates: { canonical: `${SITE.url}/faq` },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
