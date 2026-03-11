import { SITE } from "@/lib/constants";

export const metadata = {
  title: "Checklisten – Arbeitssicherheit, Brandschutz, SiGeKo",
  description:
    "Selbstbewertung für Arbeitssicherheit, Gefährdungsbeurteilung, Brandschutz und SiGeKo. Erste Einschätzung für Ihren Betrieb – Köln und NRW.",
  alternates: { canonical: `${SITE.url}/checklisten` },
};

export default function ChecklistenLayout({ children }: { children: React.ReactNode }) {
  return children;
}
