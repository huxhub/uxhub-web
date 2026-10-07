import Content from "@/components/Content";
import StructuredData from "@/components/StructuredData";
import home from "@/content/home.json";
import { metadataFor, pageSchemas } from "@/lib/seo";

export const metadata = metadataFor("home");

export default function Home() {
  return (
    <>
      <StructuredData data={pageSchemas("home")} />
      <Content html={home.html} home />
    </>
  );
}
