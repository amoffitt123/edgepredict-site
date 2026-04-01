import { MetadataRoute } from "next";
import { getSortedPosts } from "@/lib/blog/posts";
import { COMPETITORS } from "@/lib/compare/competitors";

const BASE = "https://www.edgepredict.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getSortedPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                          lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/features`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/monitoring`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/pricing`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/pilot`,               lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog`,                lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/calculator`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/security`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/privacy`,             lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/terms`,               lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const compareRoutes: MetadataRoute.Sitemap = COMPETITORS.map((c) => ({
    url: `${BASE}/compare/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...compareRoutes, ...blogRoutes];
}
