import { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

/** Nicht indexierbare technische Pfade (reduziert GSC-Rauschen) */
const DISALLOW = ["/_next/", "/api/", "/opengraph-image", "/manifest.webmanifest"];

function rule(userAgent: string) {
  return { userAgent, allow: "/", disallow: DISALLOW };
}

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      rule("*"),
      rule("Googlebot"),
      rule("Googlebot-Image"),
      rule("Bingbot"),
      rule("GPTBot"),
      rule("ChatGPT-User"),
      rule("ClaudeBot"),
      rule("anthropic-ai"),
      rule("PerplexityBot"),
      rule("Applebot-Extended"),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: new URL(SITE.url).host,
  };
}
