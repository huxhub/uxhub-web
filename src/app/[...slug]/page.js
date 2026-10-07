import Content from "@/components/Content";
import StructuredData from "@/components/StructuredData";
import { notFound, redirect } from "next/navigation";
import pages from "@/content/pages.json";
import legacy from "@/content/legacy-routes.json";
import { metadataFor, pageSchemas } from "@/lib/seo";
import TrialRegistration from "@/components/TrialRegistration";
export function generateStaticParams() {
  return Object.keys(pages)
    .filter((key) => key !== "home")
    .map((key) => ({ slug: key.split("/") }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const key = slug.join("/");
  const page = pages[key];
  return page ? metadataFor(key) : {};
}
export default async function Page({ params }) {
  const { slug } = await params;
  const key = slug.join("/");
  if (legacy[key]) redirect("/" + legacy[key]);
  if (key.startsWith("leadership/")) redirect("/about");
  if (key.startsWith("insights/")) redirect("/insights");
  const page = pages[key];
  if (!page) notFound();
  if (key === "registration") {
    return (
      <>
        <StructuredData data={pageSchemas(key)} />
        <TrialRegistration />
      </>
    );
  }
  return (
    <>
      <StructuredData data={pageSchemas(key)} />
      <Content html={page.html} />
    </>
  );
}
