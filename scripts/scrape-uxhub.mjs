import fs from "node:fs/promises";
import path from "node:path";
import { load } from "cheerio";

const BASE_URL = "https://uxhubglobal.com";
const OUTPUT_DIR = path.resolve(process.cwd(), "scraped_content");

const PAGES = [
  {
    id: "home",
    filename: "home",
    url: "https://uxhubglobal.com/",
    label: "Homepage",
  },
  {
    id: "services",
    filename: "services",
    url: "https://uxhubglobal.com/services.html",
    label: "Services",
  },
  {
    id: "about",
    filename: "about",
    url: "https://uxhubglobal.com/about.html",
    label: "About UX Hub",
  },
  {
    id: "product",
    filename: "product",
    url: "https://uxhubglobal.com/product.html",
    label: "Pricing Super Intelligence",
  },
  {
    id: "insights",
    filename: "insights",
    url: "https://uxhubglobal.com/insights.html",
    label: "Insights & Case Studies",
  },
  {
    id: "contact",
    filename: "contact",
    url: "https://uxhubglobal.com/contact.html",
    label: "Contact & Advisory",
  },
  {
    id: "registration",
    filename: "registration",
    url: "https://uxhubglobal.com/registration.html",
    label: "14-Day Free Trial Registration",
  },
];

const STATIC_ASSETS = [
  { url: "https://uxhubglobal.com/styles.css?v=2.0", dest: "assets/styles.css" },
  { url: "https://uxhubglobal.com/product.css", dest: "assets/product.css" },
  { url: "https://uxhubglobal.com/script.js", dest: "assets/script.js" },
  { url: "https://uxhubglobal.com/uxhub-logo.svg", dest: "assets/uxhub-logo.svg" },
  { url: "https://uxhubglobal.com/robots.txt", dest: "reference/robots.txt" },
  { url: "https://uxhubglobal.com/sitemap.xml", dest: "reference/sitemap.xml" },
  { url: "https://uxhubglobal.com/llms.txt", dest: "reference/llms.txt" },
  { url: "https://uxhubglobal.com/llms-full.txt", dest: "reference/llms-full.txt" },
];

function cleanWhitespace(str) {
  if (!str) return "";
  return str.replace(/[ \t]+/g, " ").replace(/\n\s*\n\s*\n+/g, "\n\n").trim();
}

function nodeToMarkdown($, node) {
  if (!node) return "";
  if (node.type === "text") {
    return node.data.replace(/\s+/g, " ");
  }

  const tagName = node.name ? node.name.toLowerCase() : "";
  const $el = $(node);

  if (["script", "style", "noscript", "svg", "template"].includes(tagName)) {
    return "";
  }

  let childrenMd = "";
  if (node.children && node.children.length > 0) {
    childrenMd = node.children
      .map((c) => nodeToMarkdown($, c))
      .join("");
  }

  switch (tagName) {
    case "h1":
      return `\n\n# ${childrenMd.trim()}\n\n`;
    case "h2":
      return `\n\n## ${childrenMd.trim()}\n\n`;
    case "h3":
      return `\n\n### ${childrenMd.trim()}\n\n`;
    case "h4":
      return `\n\n#### ${childrenMd.trim()}\n\n`;
    case "h5":
      return `\n\n##### ${childrenMd.trim()}\n\n`;
    case "h6":
      return `\n\n###### ${childrenMd.trim()}\n\n`;
    case "p":
      return `\n\n${childrenMd.trim()}\n\n`;
    case "strong":
    case "b":
      return ` **${childrenMd.trim()}** `;
    case "em":
    case "i":
      return ` *${childrenMd.trim()}* `;
    case "code":
      return ` \`${childrenMd.trim()}\` `;
    case "blockquote":
      return `\n\n> ${childrenMd.trim().replace(/\n/g, "\n> ")}\n\n`;
    case "ul": {
      const items = $el
        .children("li")
        .map((_, li) => {
          const itemText = nodeToMarkdown($, li).trim();
          return itemText ? `- ${itemText.replace(/\n/g, "\n  ")}` : "";
        })
        .get()
        .filter(Boolean);
      return `\n\n${items.join("\n")}\n\n`;
    }
    case "ol": {
      const items = $el
        .children("li")
        .map((idx, li) => {
          const itemText = nodeToMarkdown($, li).trim();
          return itemText ? `${idx + 1}. ${itemText.replace(/\n/g, "\n   ")}` : "";
        })
        .get()
        .filter(Boolean);
      return `\n\n${items.join("\n")}\n\n`;
    }
    case "li":
      return childrenMd;
    case "a": {
      const href = $el.attr("href") || "#";
      const text = childrenMd.trim() || href;
      return `[${text}](${href})`;
    }
    case "img": {
      const src = $el.attr("src") || "";
      const alt = $el.attr("alt") || "Image";
      return `![${alt}](${src})`;
    }
    case "hr":
      return "\n\n---\n\n";
    case "br":
      return "\n";
    case "table": {
      const rows = [];
      $el.find("tr").each((_, tr) => {
        const cells = $(tr)
          .children("th, td")
          .map((_, td) => $(td).text().trim().replace(/\|/g, "\\|"))
          .get();
        if (cells.length > 0) rows.push(cells);
      });
      if (rows.length === 0) return "";
      const header = `| ${rows[0].join(" | ")} |`;
      const divider = `| ${rows[0].map(() => "---").join(" | ")} |`;
      const body = rows
        .slice(1)
        .map((r) => `| ${r.join(" | ")} |`)
        .join("\n");
      return `\n\n${header}\n${divider}\n${body}\n\n`;
    }
    case "form": {
      return `\n\n> **[Form: ${$el.attr("name") || $el.attr("id") || "Submission Form"}]**\n${childrenMd}\n\n`;
    }
    case "input":
    case "select":
    case "textarea": {
      const type = $el.attr("type") || tagName;
      const placeholder = $el.attr("placeholder") || $el.attr("name") || "";
      const label = placeholder ? ` (${placeholder})` : "";
      return ` [Field: ${type}${label}] `;
    }
    case "button":
      return ` **[Button: ${childrenMd.trim()}]** `;
    case "section":
    case "article":
    case "div":
    case "header":
    case "footer":
    case "main":
    case "nav":
      return childrenMd ? `${childrenMd} ` : "";
    default:
      return childrenMd;
  }
}

async function scrapePage(pageInfo) {
  console.log(`Fetching: ${pageInfo.label} (${pageInfo.url})...`);
  const res = await fetch(pageInfo.url);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${pageInfo.url}: ${res.status} ${res.statusText}`);
  }
  const rawHtml = await res.text();
  const $ = load(rawHtml);

  // Extract head metadata
  const title = $("title").text().trim();
  const metaDescription = $('meta[name="description"]').attr("content") || "";
  const metaKeywords = $('meta[name="keywords"]').attr("content") || "";
  const canonical = $('link[rel="canonical"]').attr("href") || pageInfo.url;
  const ogTitle = $('meta[property="og:title"]').attr("content") || "";
  const ogDescription = $('meta[property="og:description"]').attr("content") || "";
  const ogImage = $('meta[property="og:image"]').attr("content") || "";
  const ogUrl = $('meta[property="og:url"]').attr("content") || "";

  // Structured Data (JSON-LD)
  const jsonLdSchemas = [];
  $('script[type="application/ld+json"]').each((_, el) => {
    try {
      const text = $(el).text().trim();
      if (text) jsonLdSchemas.push(JSON.parse(text));
    } catch (e) {
      jsonLdSchemas.push($(el).text().trim());
    }
  });

  // Extract structured sections
  const headings = [];
  $("h1, h2, h3, h4, h5, h6").each((_, el) => {
    headings.push({
      level: el.name.toLowerCase(),
      text: $(el).text().trim().replace(/\s+/g, " "),
    });
  });

  // Extract navigation links
  const navLinks = [];
  $("header a, nav a").each((_, el) => {
    const text = $(el).text().trim().replace(/\s+/g, " ");
    const href = $(el).attr("href");
    if (text && href) navLinks.push({ text, href });
  });

  // Extract footer links
  const footerLinks = [];
  $("footer a").each((_, el) => {
    const text = $(el).text().trim().replace(/\s+/g, " ");
    const href = $(el).attr("href");
    if (text && href) footerLinks.push({ text, href });
  });

  // Extract form details if any
  const forms = [];
  $("form").each((_, form) => {
    const $f = $(form);
    const formId = $f.attr("id") || $f.attr("name") || "form";
    const action = $f.attr("action") || "";
    const method = $f.attr("method") || "POST";
    const fields = [];
    $f.find("input, select, textarea, button").each((_, input) => {
      const $i = $(input);
      fields.push({
        tag: input.name,
        type: $i.attr("type") || "text",
        name: $i.attr("name") || "",
        placeholder: $i.attr("placeholder") || "",
        required: $i.attr("required") !== undefined,
        value: $i.val() || "",
      });
    });
    forms.push({ formId, action, method, fields });
  });

  // Extract FAQs if present
  const faqs = [];
  $(".faq-item, [class*='faq'], details").each((_, el) => {
    const $el = $(el);
    const q = $el.find("summary, h3, h4, .faq-question, [class*='question']").first().text().trim();
    const a = $el.find(".faq-answer, p, [class*='answer']").first().text().trim();
    if (q && a) faqs.push({ question: q, answer: a });
  });

  // Build clean text content and markdown
  const $bodyClone = $("body").clone();
  // Remove script, style, svg from clone for markdown conversion
  $bodyClone.find("script, style, noscript, svg").remove();
  const rawBodyMarkdown = nodeToMarkdown($, $bodyClone[0]);
  const markdownBody = cleanWhitespace(rawBodyMarkdown);

  // Markdown with frontmatter
  const fullMarkdown = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${metaDescription.replace(/"/g, '\\"')}"
url: "${pageInfo.url}"
canonical: "${canonical}"
keywords: "${metaKeywords.replace(/"/g, '\\"')}"
og_title: "${ogTitle.replace(/"/g, '\\"')}"
og_description: "${ogDescription.replace(/"/g, '\\"')}"
og_image: "${ogImage}"
scraped_at: "${new Date().toISOString()}"
---

# ${title}

> **Source URL:** [${pageInfo.url}](${pageInfo.url})  
> **Meta Description:** ${metaDescription}

${markdownBody}
`;

  // Structured JSON
  const structuredData = {
    id: pageInfo.id,
    label: pageInfo.label,
    url: pageInfo.url,
    canonical,
    scrapedAt: new Date().toISOString(),
    metadata: {
      title,
      description: metaDescription,
      keywords: metaKeywords,
      openGraph: {
        title: ogTitle,
        description: ogDescription,
        image: ogImage,
        url: ogUrl,
      },
      jsonLd: jsonLdSchemas,
    },
    navigation: navLinks,
    footer: footerLinks,
    headings,
    forms,
    faqs,
    contentSummary: {
      totalHeadings: headings.length,
      totalForms: forms.length,
      totalFaqs: faqs.length,
      characterCount: markdownBody.length,
      wordCount: markdownBody.split(/\s+/).filter(Boolean).length,
    },
    markdown: markdownBody,
  };

  return {
    pageInfo,
    rawHtml,
    fullMarkdown,
    structuredData,
  };
}

async function scrapeAssets() {
  console.log("Downloading static assets & reference files...");
  for (const asset of STATIC_ASSETS) {
    try {
      console.log(`Downloading ${asset.url} -> ${asset.dest}`);
      const res = await fetch(asset.url);
      if (res.ok) {
        const text = await res.text();
        const outPath = path.join(OUTPUT_DIR, asset.dest);
        await fs.mkdir(path.dirname(outPath), { recursive: true });
        await fs.writeFile(outPath, text, "utf8");
      } else {
        console.warn(`Could not download ${asset.url}: ${res.status}`);
      }
    } catch (e) {
      console.warn(`Error downloading ${asset.url}:`, e.message);
    }
  }
}

async function main() {
  console.log(`Starting scrape of ${BASE_URL}...`);
  await fs.mkdir(path.join(OUTPUT_DIR, "html"), { recursive: true });
  await fs.mkdir(path.join(OUTPUT_DIR, "markdown"), { recursive: true });
  await fs.mkdir(path.join(OUTPUT_DIR, "json"), { recursive: true });
  await fs.mkdir(path.join(OUTPUT_DIR, "assets"), { recursive: true });
  await fs.mkdir(path.join(OUTPUT_DIR, "reference"), { recursive: true });

  const summaryPages = [];

  for (const pageInfo of PAGES) {
    const result = await scrapePage(pageInfo);

    // Save Raw HTML
    const htmlPath = path.join(OUTPUT_DIR, "html", `${pageInfo.filename}.html`);
    await fs.writeFile(htmlPath, result.rawHtml, "utf8");

    // Save Clean Markdown
    const mdPath = path.join(OUTPUT_DIR, "markdown", `${pageInfo.filename}.md`);
    await fs.writeFile(mdPath, result.fullMarkdown, "utf8");

    // Save Structured JSON
    const jsonPath = path.join(OUTPUT_DIR, "json", `${pageInfo.filename}.json`);
    await fs.writeFile(jsonPath, JSON.stringify(result.structuredData, null, 2), "utf8");

    summaryPages.push({
      id: pageInfo.id,
      label: pageInfo.label,
      url: pageInfo.url,
      title: result.structuredData.metadata.title,
      description: result.structuredData.metadata.description,
      wordCount: result.structuredData.contentSummary.wordCount,
      files: {
        html: `scraped_content/html/${pageInfo.filename}.html`,
        markdown: `scraped_content/markdown/${pageInfo.filename}.md`,
        json: `scraped_content/json/${pageInfo.filename}.json`,
      },
    });
  }

  // Download assets and references
  await scrapeAssets();

  // Create Consolidated master index JSON
  const masterIndex = {
    siteUrl: BASE_URL,
    scrapedAt: new Date().toISOString(),
    totalPages: summaryPages.length,
    pages: summaryPages,
    assetFiles: STATIC_ASSETS.map((a) => `scraped_content/${a.dest}`),
  };
  await fs.writeFile(
    path.join(OUTPUT_DIR, "index.json"),
    JSON.stringify(masterIndex, null, 2),
    "utf8"
  );

  // Create Comprehensive README / SUMMARY Markdown
  const summaryMarkdown = `# UX Hub Global (https://uxhubglobal.com) — Scraped Content Archive

Generated on: ${new Date().toISOString()}

This archive contains the complete scraped content from **UX Hub Global** (\`https://uxhubglobal.com/\`), organized into dedicated files per page.

---

## Directory Structure

\`\`\`
scraped_content/
├── README.md               # Summary documentation & table of contents
├── index.json              # Master metadata index linking all scraped resources
├── markdown/               # Clean, formatted Markdown documents per page
│   ├── home.md
│   ├── services.md
│   ├── about.md
│   ├── product.md
│   ├── insights.md
│   ├── contact.md
│   └── registration.md
├── json/                   # Structured JSON data with full metadata, schemas & content
│   ├── home.json
│   ├── services.json
│   ├── about.json
│   ├── product.json
│   ├── insights.json
│   ├── contact.json
│   └── registration.json
├── html/                   # Raw 1:1 original HTML source files
│   ├── home.html
│   ├── services.html
│   ├── about.html
│   ├── product.html
│   ├── insights.html
│   ├── contact.html
│   └── registration.html
├── assets/                 # Downloaded CSS, JS, and Logo assets
│   ├── styles.css
│   ├── product.css
│   ├── script.js
│   └── uxhub-logo.svg
└── reference/              # Sitemaps, crawler instructions, and LLM documentation
    ├── robots.txt
    ├── sitemap.xml
    ├── llms.txt
    └── llms-full.txt
\`\`\`

---

## Page Inventory & File Mappings

| Page | URL | Word Count | Markdown File | JSON File | HTML File |
| :--- | :--- | :---: | :--- | :--- | :--- |
${summaryPages
  .map(
    (p) =>
      `| **${p.label}** | [${p.url}](${p.url}) | ${p.wordCount.toLocaleString()} | [\`${p.files.markdown}\`](file://${encodeURI(path.join(OUTPUT_DIR, "markdown", `${p.id}.md`))}#L1) | [\`${p.files.json}\`](file://${encodeURI(path.join(OUTPUT_DIR, "json", `${p.id}.json`))}#L1) | [\`${p.files.html}\`](file://${encodeURI(path.join(OUTPUT_DIR, "html", `${p.id}.html`))}#L1) |`
  )
  .join("\n")}


---

## Page Overviews

${summaryPages
  .map(
    (p) => `### ${p.label}
- **URL**: ${p.url}
- **Title**: ${p.title}
- **Meta Description**: ${p.description || "N/A"}
- **Word Count**: ${p.wordCount.toLocaleString()}
`
  )
  .join("\n")}
`;

  await fs.writeFile(path.join(OUTPUT_DIR, "README.md"), summaryMarkdown, "utf8");

  console.log("Scraping completed successfully! Output saved to:", OUTPUT_DIR);
}

main().catch((err) => {
  console.error("Scraping failed:", err);
  process.exit(1);
});
