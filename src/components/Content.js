import parse, { domToReact } from "html-react-parser";
import { cloneElement, isValidElement } from "react";
import Link from "next/link";
import Effects from "./Effects";
import Places from "./Places";
import PageMotion from "./PageMotion";
import BrandIntro from "./BrandIntro";
import BrandLogo from "./BrandLogo";
const options = {
  transform(element, node) {
    // HTML boolean attributes use presence; React expects an actual boolean.
    if (isValidElement(element) && Object.hasOwn(node.attribs || {}, "inert")) {
      return cloneElement(element, { inert: true });
    }
    return element;
  },
  replace(node) {
    if (node.type !== "tag") return;
    if (node.name === "svg" && node.attribs.class?.includes("__wordmarkSymbol"))
      return (
        <BrandLogo
          className={node.attribs.class}
          style={{
            display: "block",
            height: "var(--wordmark-symbol-height)",
            width: "auto",
            aspectRatio: "789 / 311",
          }}
        />
      );
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
      {home && <BrandIntro />}
      {parse(html, options)}
      {html.includes("<main") && <PageMotion home={home} />}
    </>
  );
}
