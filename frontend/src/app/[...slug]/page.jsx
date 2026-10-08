import { notFound, redirect } from "next/navigation";
import legacyRoutes from "@/data/legacy-routes";

// Explicit pages own current routes; this fallback handles old links.
export default async function LegacyPage({ params }) {
  const { slug } = await params;
  const key = slug.join("/");
  if (legacyRoutes[key]) redirect("/" + legacyRoutes[key]);
  if (key.startsWith("leadership/")) redirect("/about");
  if (key.startsWith("insights/")) redirect("/insights");
  notFound();
}
