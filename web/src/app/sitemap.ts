import { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { BLOG_POSTS } from "@/data/blog-posts";

const BASE = SITE.url;

/** Statische Seiten mit sinnvollem letzten Änderungsdatum */
const STATIC_PAGES: { path: string; lastModified: string; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"]; priority: number }[] = [
  { path: "", lastModified: "2026-06-01", changeFrequency: "weekly", priority: 1 },
  { path: "/leistungen", lastModified: "2026-06-01", changeFrequency: "weekly", priority: 0.96 },
  { path: "/fachkraft-fuer-arbeitssicherheit-koeln", lastModified: "2026-06-06", changeFrequency: "weekly", priority: 0.99 },
  { path: "/leistungen/arbeitssicherheit", lastModified: "2026-06-01", changeFrequency: "weekly", priority: 0.98 },
  { path: "/leistungen/brandschutz", lastModified: "2026-06-01", changeFrequency: "weekly", priority: 0.96 },
  { path: "/leistungen/sigeko", lastModified: "2026-06-01", changeFrequency: "weekly", priority: 0.95 },
  { path: "/leistungen/schulungen", lastModified: "2026-06-01", changeFrequency: "monthly", priority: 0.88 },
  { path: "/leistungen/elektrosicherheit", lastModified: "2026-06-01", changeFrequency: "monthly", priority: 0.8 },
  { path: "/leistungen/managementsysteme", lastModified: "2026-06-01", changeFrequency: "monthly", priority: 0.8 },
  { path: "/kontakt", lastModified: "2026-06-01", changeFrequency: "monthly", priority: 0.9 },
  { path: "/beratung-buchen", lastModified: "2026-06-01", changeFrequency: "monthly", priority: 0.9 },
  { path: "/wissen", lastModified: "2026-06-01", changeFrequency: "weekly", priority: 0.85 },
  { path: "/checklisten", lastModified: "2026-06-01", changeFrequency: "monthly", priority: 0.8 },
  { path: "/faq", lastModified: "2026-06-01", changeFrequency: "weekly", priority: 0.85 },
  { path: "/glossar", lastModified: "2026-06-01", changeFrequency: "monthly", priority: 0.7 },
  { path: "/rechner", lastModified: "2026-06-01", changeFrequency: "monthly", priority: 0.7 },
  { path: "/schulungskalender", lastModified: "2026-06-01", changeFrequency: "weekly", priority: 0.75 },
  { path: "/blog", lastModified: "2026-05-28", changeFrequency: "weekly", priority: 0.8 },
  { path: "/ueber-uns", lastModified: "2026-06-01", changeFrequency: "yearly", priority: 0.75 },
  { path: "/impressum", lastModified: "2026-06-01", changeFrequency: "yearly", priority: 0.3 },
  { path: "/datenschutz", lastModified: "2026-06-01", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map((p) => ({
    url: `${BASE}${p.path}`,
    lastModified: p.lastModified,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: p.datePublished,
    changeFrequency: "monthly" as const,
    priority: 0.72,
  }));

  return [...staticEntries, ...blogEntries];
}
