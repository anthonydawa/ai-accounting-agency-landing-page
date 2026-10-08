import type { MetadataRoute } from "next";
import { services, siteUrl } from "@/lib/site";
import { productPages } from "@/lib/product-pages";
import { articles } from "@/lib/articles";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    ...productPages.map((page) => page.href.replace(/\/$/, "")),
    "/services",
    "/contact",
    "/about-us",
    "/blog",
    ...services.map((s) => `/${s.slug}`),
    ...articles.filter((a) => !a.externalUrl).map((a) => `/blog/${a.slug}`),
  ].map((path) => ({ url: `${siteUrl}${path}/` }));
}
