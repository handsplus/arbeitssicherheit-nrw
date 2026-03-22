import { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

const BASE = SITE.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/leistungen`, lastModified: now, changeFrequency: "weekly", priority: 0.96 },
    { url: `${BASE}/leistungen/arbeitssicherheit`, lastModified: now, changeFrequency: "weekly", priority: 0.98 },
    { url: `${BASE}/leistungen/brandschutz`, lastModified: now, changeFrequency: "weekly", priority: 0.96 },
    { url: `${BASE}/leistungen/sigeko`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE}/leistungen/schulungen`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE}/leistungen/elektrosicherheit`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/leistungen/managementsysteme`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/kontakt`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/beratung-buchen`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/wissen`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/checklisten`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/glossar`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/rechner`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/schulungskalender`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/ueber-uns`, lastModified: now, changeFrequency: "yearly", priority: 0.75 },
    { url: `${BASE}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
