"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IconArrowRight } from "@/components/Icons";
import {
  HEADER_CTA_LABELS,
  PRIMARY_CTA_POOLS,
  type PrimaryCtaTheme,
} from "@/lib/primaryCta";

type Props = {
  theme?: PrimaryCtaTheme;
  href?: string;
  className: string;
  iconClassName?: string;
  showIcon?: boolean;
  onClick?: () => void;
};

export function PrimaryCtaLink({
  theme = "default",
  href = "/beratung-buchen",
  className,
  iconClassName = "h-5 w-5",
  showIcon = true,
  onClick,
}: Props) {
  const pool =
    theme === "header"
      ? HEADER_CTA_LABELS
      : PRIMARY_CTA_POOLS[theme];
  const [label, setLabel] = useState(pool[0]);

  useEffect(() => {
    const next =
      theme === "header"
        ? HEADER_CTA_LABELS
        : PRIMARY_CTA_POOLS[theme];
    setLabel(next[Math.floor(Math.random() * next.length)]);
  }, [theme]);

  return (
    <Link href={href} className={className} onClick={onClick}>
      {label}
      {showIcon ? <IconArrowRight className={iconClassName} aria-hidden /> : null}
    </Link>
  );
}
