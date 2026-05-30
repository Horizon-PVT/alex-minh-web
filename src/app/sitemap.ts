import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: "", changeFrequency: "monthly" as const, priority: 1.0 },
    { url: "/dich-vu", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/demo-chatbot-ai", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/du-an-mau", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "/bang-gia", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "/lien-he", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "/blog", changeFrequency: "weekly" as const, priority: 0.6 },
  ];

  return routes.map((route) => ({
    url: `${siteConfig.domain}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
