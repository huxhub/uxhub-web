import parse, { domToReact } from "html-react-parser";
import Link from "next/link";
import Effects from "./Effects";
import Places from "./Places";
import PageMotion from "./PageMotion";
import ChromeIntro from "./ChromeIntro";
const options = {
  replace(node) {
    if (node.type !== "tag") return;
    if (
      node.name === "canvas" &&
      node.attribs.class?.includes("particle-image")
    )
      return <Places className={node.attribs.class} />;
    if (
      node.name === "canvas" &&
      node.attribs.class?.includes("hero-module__kIxoYa__liquid")
    )
      return <Effects kind="hero" className={node.attribs.class} />;
    if (
      node.name === "canvas" &&
      node.attribs.class?.includes("metallic-swirl")
    )
      return <Effects kind="swirl" className={node.attribs.class} />;
    if (node.name === "a" && node.attribs.href?.startsWith("/")) {
      const { href, class: className, ...attrs } = node.attribs;
      return (
        <Link href={href} className={className} {...attrs}>
          {domToReact(node.children, options)}
        </Link>
      );
    }
  },
};
export default function Content({ html, home = false }) {
  return (
    <>
      {home && <ChromeIntro />}
      {parse(html, options)}
      {html.includes("<main") && <PageMotion home={home} />}
    </>
  );
}
