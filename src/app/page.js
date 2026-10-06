import Content from "@/components/Content";
import home from "@/content/home.json";
export default function Home() {
  return <Content html={home.html} home />;
}
