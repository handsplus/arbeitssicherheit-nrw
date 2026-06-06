import Link from "next/link";

const regions = [
  "Köln Innenstadt",
  "Köln-Nord (Nippes, Chorweiler)",
  "Köln-Ost (Kalk, Mülheim)",
  "Köln-Süd (Lindenthal, Rodenkirchen)",
  "Köln-West (Ehrenfeld, Porz)",
  "Rhein-Erft-Kreis",
  "Rhein-Sieg-Kreis",
  "Leverkusen",
  "Bonn und Umgebung",
];

export function RegionKoeln() {
  return (
    <section className="bg-white py-16 md:py-20" aria-labelledby="region-heading">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="region-heading" className="text-3xl font-bold text-nrw-grau-900">
            Arbeitssicherheit in Köln und Umgebung
          </h2>
          <p className="mt-4 text-lg text-nrw-grau-600">
            Unser Einsatzgebiet umfasst Köln und die Region: Von der Innenstadt über die Stadtbezirke bis in die
            angrenzenden Kreise. Vor-Ort-Termine, Begehungen und Unterweisungen bei Ihnen im Betrieb – kurze Wege und
            persönlicher Kontakt.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {regions.map((region) => (
            <span
              key={region}
              className="rounded-full border border-nrw-grau-200 bg-nrw-grau-50 px-4 py-2 text-sm text-nrw-grau-800"
            >
              {region}
            </span>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <Link href="/kontakt" className="font-medium text-nrw-gruen hover:underline">
            Anfrage für Ihren Standort stellen →
          </Link>
          <Link href="/leistungen/arbeitssicherheit" className="font-medium text-nrw-gruen hover:underline">
            Arbeitssicherheit nach Leistung
          </Link>
        </div>
      </div>
    </section>
  );
}
