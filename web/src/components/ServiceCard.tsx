import Link from "next/link";
import {
  IconShield,
  IconFlame,
  IconBrandschutz,
  IconSigeko,
  IconAcademic,
  IconLightning,
  IconChart,
  IconArrowRight,
} from "@/components/Icons";

const ICON_MAP = {
  shield: IconShield,
  flame: IconFlame,
  brandschutz: IconBrandschutz,
  sigeko: IconSigeko,
  academic: IconAcademic,
  lightning: IconLightning,
  chart: IconChart,
} as const;

type IconKey = keyof typeof ICON_MAP;

type ServiceCardProps = {
  title: string;
  short: string;
  href: string;
  icon?: IconKey;
};

export function ServiceCard({ title, short, href, icon }: ServiceCardProps) {
  const IconComponent = icon ? ICON_MAP[icon] : null;
  return (
    <article className="group flex flex-col rounded-2xl border border-nrw-grau-200 bg-white p-6 shadow-sm transition hover:border-nrw-gruen-hell hover:shadow-lg md:p-8">
      {IconComponent && (
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-nrw-gruen-hell text-nrw-gruen transition group-hover:bg-nrw-gruen group-hover:text-white">
          <IconComponent className="h-7 w-7" aria-hidden />
        </span>
      )}
      <h3 className="mt-5 text-xl font-bold text-nrw-grau-900">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-nrw-grau-600">{short}</p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-2 font-semibold text-nrw-gruen hover:text-nrw-gruen-hover"
      >
        Mehr erfahren
        <IconArrowRight className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden />
      </Link>
    </article>
  );
}
