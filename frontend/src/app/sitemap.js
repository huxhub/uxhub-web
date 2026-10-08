import { SITE_URL, seoPages } from "@/lib/seo";

const priorities = {
  home: 1,
  services: 0.9,
  "product-growth": 0.9,
  "e-commerce-growth": 0.9,
  "digital-experience": 0.9,
  product: 0.8,
  contact: 0.8,
  about: 0.7,
  markets: 0.7,
  insights: 0.6,
};

export default function sitemap() {
  return Object.entries(seoPages).map(([key, page]) => ({
    url: new URL(page.path, SITE_URL).toString(),
    lastModified: new Date(),
    changeFrequency: key === "insights" ? "weekly" : "monthly",
    priority: priorities[key] ?? 0.7,
  }));
}
