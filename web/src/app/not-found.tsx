import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata = {
  title: "Seite nicht gefunden",
  description: "Die angeforderte Seite existiert nicht. Zurück zur Startseite von Arbeitssicherheit.nrw.",
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE.url}/404` },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-nrw-gruen">404</p>
      <h1 className="mt-2 text-4xl font-bold text-nrw-grau-900">Seite nicht gefunden</h1>
      <p className="mt-6 text-lg text-nrw-grau-600">
        Die angeforderte URL existiert nicht oder wurde verschoben.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-nrw-gruen px-6 py-3 font-semibold text-white hover:bg-nrw-gruen-hover"
        >
          Zur Startseite
        </Link>
        <Link
          href="/leistungen"
          className="rounded-full border border-nrw-grau-200 px-6 py-3 font-semibold text-nrw-grau-800 hover:border-nrw-gruen hover:text-nrw-gruen"
        >
          Leistungen
        </Link>
        <Link
          href="/kontakt"
          className="rounded-full border border-nrw-grau-200 px-6 py-3 font-semibold text-nrw-grau-800 hover:border-nrw-gruen hover:text-nrw-gruen"
        >
          Kontakt
        </Link>
      </div>
    </div>
  );
}
