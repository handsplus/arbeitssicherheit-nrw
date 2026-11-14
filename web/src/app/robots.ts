import { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

/** Nur API sperren — /_next/ muss für Googlebot-Rendering erreichbar bleiben */
const DISALLOW = ["/api/"];

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
