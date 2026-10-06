import Content from "@/components/Content";
import { notFound } from "next/navigation";
import pages from "@/content/pages.json";
export function generateStaticParams() {
  return Object.keys(pages)
    .filter((key) => key !== "home")
    .map((key) => ({ slug: key.split("/") }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = pages[slug.join("/")];
  return page ? { title: page.title, description: page.description } : {};
}
export default async function Page({ params }) {
  const { slug } = await params;
  const page = pages[slug.join("/")];
  if (!page) notFound();
  return <Content html={page.html} />;
}
