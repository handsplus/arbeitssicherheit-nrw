import Link from "next/link";
import { CONTACT, LEISTUNGEN } from "@/lib/constants";

export const metadata = {
  title: "Über uns – Ihr Partner für Arbeitssicherheit in NRW",
  description: "Arbeitssicherheit.nrw: Ihr Partner für Arbeitssicherheit, Brandschutz und SiGeKo in Köln und Nordrhein-Westfalen.",
};

export default function UeberUnsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-nrw-gruen">Über uns</p>
      <h1 className="mt-2 text-4xl font-bold text-nrw-grau-900 md:text-5xl">
        Ihr Partner für Sicherheit in NRW
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-nrw-grau-600">
        Wir sind Ihr zuverlässiger Ansprechpartner für Arbeitssicherheit, Brandschutz,
        Elektrosicherheit und Managementsysteme in Köln und Nordrhein-Westfalen. Mit fachlicher
        Kompetenz und praxisnaher Betreuung unterstützen wir Unternehmen jeder Größe – rechtssicher
        und entlastend.
      </p>
      <div className="mt-14">
        <h2 className="text-2xl font-bold text-nrw-grau-900">Leistungen im Überblick</h2>
        <ul className="mt-6 space-y-3">
          {LEISTUNGEN.map((l) => (
            <li key={l.slug}>
              <Link href={l.href} className="text-nrw-grau-600 hover:text-nrw-gruen">
                {l.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-14 rounded-2xl border border-nrw-grau-200 bg-nrw-grau-50 p-8">
        <h2 className="text-lg font-bold text-nrw-grau-900">Kontakt</h2>
        <p className="mt-4 text-nrw-grau-600">
          {CONTACT.company}
          <br />
          {CONTACT.address}, {CONTACT.zip} {CONTACT.city}
          <br />
          <a href={CONTACT.phoneHref} className="font-medium text-nrw-gruen hover:underline">
            {CONTACT.phone}
          </a>
          {" · "}
          <a href={CONTACT.emailHref} className="font-medium text-nrw-gruen hover:underline">
            {CONTACT.email}
          </a>
        </p>
      </div>
      <p className="mt-10 text-sm text-nrw-grau-400">
        <Link href="/impressum" className="hover:text-nrw-gruen">Impressum</Link>
        {" · "}
        <Link href="/datenschutz" className="hover:text-nrw-gruen">Datenschutz</Link>
      </p>
    </div>
  );
}
