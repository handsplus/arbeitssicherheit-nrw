import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Checklisten Arbeitssicherheit, Brandschutz & SiGeKo | Köln & NRW",
  description:
    "Selbstcheck zu Gefährdungsbeurteilung, Unterweisung, Brandschutz und SiGeKo – erste Orientierung für Betriebe in Köln und NRW. Mit Links zu Leistungen und FAQ.",
  alternates: { canonical: `${SITE.url}/checklisten` },
  openGraph: {
    title: "Checklisten | Arbeitssicherheit.nrw",
    description:
      "Kurz-Checklisten zu FaSi, Brandschutz und Baustelle – ergänzend zu Beratung und Leistungen.",
    url: `${SITE.url}/checklisten`,
    locale: "de_DE",
    type: "website",
    siteName: SITE.name,
  },
};

export default function ChecklistenLayout({ children }: { children: React.ReactNode }) {
  return children;
}
