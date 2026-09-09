import type { MetadataRoute } from "next";
import { siteConfig } from "./site-data";

export const dynamic = "force-static";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const baseUrl = siteConfig.url;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
