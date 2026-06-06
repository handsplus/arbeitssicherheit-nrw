import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

type PageMetaOpts = {
  path: string;
  title: string;
  description: string;
  type?: "website" | "article";
};

/** Konsistente Open-Graph- und Twitter-Metadaten je Seite (korrekte URL, kein Homepage-Erbe) */
export function pageSocialMeta({
  path,
  title,
  description,
  type = "website",
}: PageMetaOpts): Pick<Metadata, "openGraph" | "twitter"> {
  const url = `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
  return {
    openGraph: {
      title,
      description,
      url,
      locale: "de_DE",
      type,
      siteName: SITE.name,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
