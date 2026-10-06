import fs from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";
import { load } from "cheerio";
const origin = "https://www.cyphercapital.com";
const routes = [
  "",
  "philosophy",
  "capabilities",
  "ai-infrastructure",
  "access-formats",
  "digital-multi-strategy-fund",
  "leadership",
  "risk-management",
  "insights",
  "global-presence",
  "privacy",
  "terms",
];
await fs.mkdir("src/content", { recursive: true });
await fs.mkdir("public/reference", { recursive: true });
const assets = new Map(),
  styles = new Map(),
  pages = {};
async function asset(url) {
  if (assets.has(url)) return assets.get(url);
  const parsed = new URL(url, origin);
  const destination =
    "/reference/" +
    (parsed.search
      ? createHash("sha256").update(url).digest("hex").slice(0, 12) + "-"
      : "") +
    path.basename(parsed.pathname);
  assets.set(url, destination);
  const response = await fetch(new URL(url, origin));
  if (!response.ok) throw Error(url);
  await fs.writeFile(
    "public" + destination,
    Buffer.from(await response.arrayBuffer()),
  );
  return destination;
}
for (const route of routes) {
  const response = await fetch(origin + "/" + route);
  if (!response.ok) throw Error(route);
  const html = await response.text();
  const $ = load(html);
  let main = $("main").first();
  if (!main.length) main = $("#main");
  main.find("script").remove();
  for (const el of main.find("a[href]").toArray()) {
    const href = $(el).attr("href").split("#")[0];
    if (
      /^\/(leadership|insights)\/[a-z0-9-]+$/.test(href) &&
      !routes.includes(href.slice(1))
    )
      routes.push(href.slice(1));
  }
  for (const el of main.find("img").toArray()) {
    const img = $(el);
    const url = img.attr("src");
    if (url) {
      img.attr("src", await asset(url));
      img.removeAttr("srcset");
      img.removeAttr("srcSet");
    }
  }
  for (const el of $("link[rel=stylesheet]").toArray()) {
    const url = $(el).attr("href");
    if (!styles.has(url)) {
      let css = await (await fetch(origin + url)).text();
      for (const match of [...css.matchAll(/url\(([^)]+)\)/g)]) {
        let url = match[1].replace(/["']/g, "");
        if (url.startsWith("data:")) continue;
        const absolute = new URL(url, origin + $(el).attr("href")).href;
        const local = await asset(absolute);
        css = css.replaceAll(match[0], `url("${local}")`);
      }
      styles.set(url, css);
    }
  }
  const page = {
    title: $("title").text(),
    description: $("meta[name=description]").attr("content"),
    html: $.html(main),
  };
  pages[route || "home"] = page;
  if (!route)
    await fs.writeFile(
      "src/content/" + (route || "home") + ".json",
      JSON.stringify(page, null, 2),
    );
  if (!route) {
    await fs.writeFile(
      "src/content/footer.json",
      JSON.stringify({ html: $.html($("footer")) }),
    );
    await fs.writeFile(
      "public/reference/symbol.svg",
      $("[data-site-symbol] svg")
        .first()
        .toString()
        .replace("<svg ", '<svg xmlns="http://www.w3.org/2000/svg" '),
    );
  }
  console.log("Captured /" + route);
}
await fs.writeFile("src/app/reference.css", [...styles.values()].join("\n"));

await fs.writeFile("src/content/pages.json", JSON.stringify(pages));
