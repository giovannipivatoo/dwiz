import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { publishedWork, siteConfig } from "./site-data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const baseUrl = host ? `${protocol}://${host}` : siteConfig.url;
  const staticRoutes = ["", "/work", "/about", "/contact"];
  const workRoutes = publishedWork.map((entry) => `/work/${entry.slug}`);

  return [...staticRoutes, ...workRoutes].map((path) => ({
    url: `${baseUrl}${path}`,
  }));
}
