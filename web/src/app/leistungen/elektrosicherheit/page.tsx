import Link from "next/link";
import { SITE } from "@/lib/constants";
import { PrimaryCtaLink } from "@/components/PrimaryCtaLink";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

export const metadata = {
  title: "Elektrosicherheit & VEFK – Ergänzung zu Arbeitssicherheit | Köln & NRW",
  description:
    "Ergänzend zu Arbeitssicherheit und Brandschutz: externe verantwortliche Elektrofachkraft (VEFK) und Elektroprüfungen nach DIN VDE 1000-10 und DGUV Vorschrift 3 in Köln und NRW.",
  alternates: { canonical: `${SITE.url}/leistungen/elektrosicherheit` },
};

export default function ElektrosicherheitPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
      <BreadcrumbJsonLd
        items={[
          { name: "Start", url: "/" },
          { name: "Leistungen", url: "/leistungen" },
          { name: "Elektrosicherheit" },
        ]}
      />
      <nav className="mb-10 text-sm text-nrw-grau-400" aria-label="Breadcrumb">
        <Link href="/leistungen" className="hover:text-nrw-gruen">Leistungen</Link>
        <span className="mx-2">/</span>
        <span className="text-nrw-grau-800">Elektrosicherheit</span>
      </nav>
      <h1 className="text-4xl font-bold text-nrw-grau-900">Elektrosicherheit</h1>
      <p className="mt-6 text-lg text-nrw-grau-600">
        Externe verantwortliche Elektrofachkraft (VEFK) gemäß DIN VDE 1000-10 und Durchführung von Elektroprüfungen.
      </p>
      <div className="prose mt-12 max-w-none prose-headings:text-nrw-grau-900 prose-p:text-nrw-grau-600 prose-li:text-nrw-grau-600">
        <h2 className="text-2xl font-bold">Leistungen</h2>
        <ul>
          <li>VEFK – Verantwortliche Elektrofachkraft (extern)</li>
          <li>Wiederkehrende Prüfungen ortsveränderlicher Betriebsmittel</li>
          <li>Prüfung ortsfester Anlagen</li>
          <li>Dokumentation und Prüfprotokolle</li>
          <li>Beratung zur Elektrosicherheit im Betrieb</li>
        </ul>
        <h2 className="text-2xl font-bold">Rechtliche Grundlage</h2>
        <p>
          Bestellung und Qualifikation der VEFK nach DIN VDE 1000-10. Wir unterstützen Sie bei der Erfüllung der Prüfpflichten nach DGUV Vorschrift 3 und BetrSichV.
        </p>
      </div>
      <div className="mt-14 flex flex-wrap gap-4">
        <PrimaryCtaLink
          theme="elektrosicherheit"
          className="inline-flex items-center gap-2 rounded-full bg-nrw-rot px-8 py-4 font-semibold text-white hover:bg-nrw-rot-hover"
        />
        <Link
          href="/kontakt"
          className="inline-flex items-center gap-2 rounded-full border-2 border-nrw-grau-800 px-8 py-4 font-semibold text-nrw-grau-800 hover:bg-nrw-grau-800 hover:text-white"
        >
          Kontakt
        </Link>
      </div>
    </div>
  );
}
