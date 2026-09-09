import type { MetadataRoute } from "next";
import { publishedWork, siteConfig } from "./site-data";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;
  const staticRoutes = ["", "/work", "/work/production", "/about", "/contact"];
  const workRoutes = publishedWork.map((entry) => `/work/${entry.slug}`);

  return [...staticRoutes, ...workRoutes].map((path) => ({
    url: `${baseUrl}${path}`,
  }));
}
