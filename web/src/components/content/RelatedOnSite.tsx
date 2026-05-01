import Link from "next/link";

export type RelatedLink = { href: string; label: string; description?: string };

type Props = {
  title?: string;
  links: RelatedLink[];
  className?: string;
};

export function RelatedOnSite({
  title = "Passend dazu auf dieser Website",
  links,
  className = "mt-14",
}: Props) {
  return (
    <section className={className} aria-labelledby="related-onsite-heading">
      <h2 id="related-onsite-heading" className="text-xl font-bold text-nrw-grau-900 md:text-2xl">
        {title}
      </h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="block rounded-xl border border-nrw-grau-200 bg-white p-4 shadow-sm transition hover:border-nrw-gruen hover:shadow-md"
            >
              <span className="font-semibold text-nrw-grau-900">{l.label}</span>
              {l.description ? (
                <span className="mt-1 block text-sm text-nrw-grau-600">{l.description}</span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
