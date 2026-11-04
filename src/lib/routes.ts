import { posts } from "./blog";
import { categories, services } from "./services";

/** Date the redesigned content went live. Bump per page when its content changes. */
export const SITE_UPDATED = "2026-11-04";

type RouteEntry = { path: string; lastModified: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" };

/** Every indexable route. Drives sitemap.xml and llms.txt so neither can drift from the site again. */
export function allRoutes(): RouteEntry[] {
  return [
    { path: "/", lastModified: SITE_UPDATED, priority: 1, changeFrequency: "weekly" },
    { path: "/services", lastModified: SITE_UPDATED, priority: 0.9, changeFrequency: "monthly" },
    ...categories.map((c) => ({ path: `/${c.slug}`, lastModified: SITE_UPDATED, priority: 0.9, changeFrequency: "monthly" as const })),
    ...services.map((s) => ({ path: `/${s.slug}`, lastModified: SITE_UPDATED, priority: 0.8, changeFrequency: "monthly" as const })),
    { path: "/about", lastModified: SITE_UPDATED, priority: 0.7, changeFrequency: "monthly" },
    { path: "/locations", lastModified: SITE_UPDATED, priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact", lastModified: SITE_UPDATED, priority: 0.7, changeFrequency: "yearly" },
    { path: "/careers", lastModified: SITE_UPDATED, priority: 0.5, changeFrequency: "monthly" },
    { path: "/blogs", lastModified: posts.map((p) => p.dateModified).sort().at(-1)!, priority: 0.6, changeFrequency: "weekly" },
    ...posts.map((p) => ({ path: `/blogs/${p.slug}`, lastModified: p.dateModified, priority: 0.6, changeFrequency: "yearly" as const })),
    { path: "/referral", lastModified: SITE_UPDATED, priority: 0.4, changeFrequency: "yearly" },
    { path: "/privacy-policy", lastModified: "2025-07-27", priority: 0.2, changeFrequency: "yearly" },
    { path: "/terms-and-conditions", lastModified: SITE_UPDATED, priority: 0.2, changeFrequency: "yearly" },
    { path: "/master-service-agreement", lastModified: SITE_UPDATED, priority: 0.2, changeFrequency: "yearly" },
    { path: "/sms-privacy-policy", lastModified: "2026-03-07", priority: 0.1, changeFrequency: "yearly" },
    { path: "/sms-terms-and-conditions", lastModified: "2026-03-07", priority: 0.1, changeFrequency: "yearly" },
    { path: "/accessibility", lastModified: "2026-11-04", priority: 0.2, changeFrequency: "yearly" },
  ];
}
