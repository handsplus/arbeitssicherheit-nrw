import { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: [] },
      { userAgent: "Googlebot", allow: "/", disallow: [] },
      { userAgent: "Bingbot", allow: "/", disallow: [] },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
