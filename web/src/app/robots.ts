import { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  const allowAll = { userAgent: "*", allow: "/", disallow: [] as string[] };
  return {
    rules: [
      allowAll,
      { userAgent: "Googlebot", allow: "/", disallow: [] },
      { userAgent: "Googlebot-Image", allow: "/", disallow: [] },
      { userAgent: "Bingbot", allow: "/", disallow: [] },
      { userAgent: "GPTBot", allow: "/", disallow: [] },
      { userAgent: "ChatGPT-User", allow: "/", disallow: [] },
      { userAgent: "ClaudeBot", allow: "/", disallow: [] },
      { userAgent: "anthropic-ai", allow: "/", disallow: [] },
      { userAgent: "PerplexityBot", allow: "/", disallow: [] },
      { userAgent: "Applebot-Extended", allow: "/", disallow: [] },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: new URL(SITE.url).host,
  };
}
