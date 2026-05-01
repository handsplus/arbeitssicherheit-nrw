import type { OfficialLink } from "@/lib/officialSources";

type Props = {
  title?: string;
  intro?: string;
  links: OfficialLink[];
};

export function OfficialSourcesBlock({
  title = "Offizielle Quellen & Rechtsgrundlagen",
  intro = "Die folgenden Links führen zu Behörden und Gesetzestexten – unabhängig von unserer Beratung nachschlagbar.",
  links,
}: Props) {
  return (
    <section
      className="mt-14 rounded-2xl border border-nrw-grau-200 bg-nrw-grau-50 p-6 md:p-8"
      aria-labelledby="official-sources-heading"
    >
      <h2 id="official-sources-heading" className="text-xl font-bold text-nrw-grau-900 md:text-2xl">
        {title}
      </h2>
      {intro ? <p className="mt-3 text-sm text-nrw-grau-600 md:text-base">{intro}</p> : null}
      <ul className="mt-6 space-y-3 text-nrw-grau-800">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="font-medium text-nrw-gruen underline decoration-nrw-gruen/30 underline-offset-2 hover:decoration-nrw-gruen"
              target="_blank"
              rel="noopener noreferrer"
            >
              {l.label}
            </a>
            {l.note ? <span className="mt-1 block text-sm text-nrw-grau-600">{l.note}</span> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
