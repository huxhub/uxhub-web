import fs from "node:fs/promises";
import { load } from "cheerio";
const old = JSON.parse(
  await fs.readFile("scripts/templates/layouts.json", "utf8"),
);
const escape = (s) =>
  s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
function copy($, el, text) {
  const sheen = el
    .find('[class*="sheen-text-module"][class$="__root"]')
    .first();
  if (sheen.length) {
    const word = sheen.find('[class$="__word"]').first();
    sheen.empty();
    text.split(/\s+/).forEach((t, i) => {
      const w = word.clone();
      w.find('[class$="__text"],[class$="__still"]').text(t);
      if (i) sheen.append(" ");
      sheen.append(w);
    });
    el.empty().append(sheen);
    return;
  }
  const rise = el.children('[class*="reveal-module"][class*="__rise"]').first();
  if (rise.length) {
    const proto = rise.clone();
    el.empty();
    text.split(/\s+/).forEach((t, i) => {
      if (i) el.append(" ");
      el.append(
        proto
          .clone()
          .attr("style", "--stagger:" + i)
          .text(t),
      );
    });
    return;
  }
  if (el.children("button").length) {
    el.children("button").first().text(text);
    return;
  }
  const fade = el.children('[class*="reveal-module"]').first();
  if (fade.length) {
    fade.text(text);
    return;
  }
  const note = el.children('[class*="__note"]').first().clone();
  el.text(text);
  if (note.length) el.append(note.text("0→1"));
}
function replaceText($, mapping) {
  $("body *")
    .contents()
    .each((_, n) => {
      if (n.type === "text") {
        for (const [from, to] of Object.entries(mapping))
          n.data = n.data.replaceAll(from, to);
      }
    });
}
const routes = {
  "/philosophy": "/about",
  "/capabilities": "/services",
  "/ai-infrastructure": "/product",
  "/access-formats": "/services",
  "/digital-multi-strategy-fund": "/product-growth",
  "/leadership": "/about",
  "/risk-management": "/digital-experience",
  "/global-presence": "/markets",
  "/global-presence#contacts": "/contact",
  "/privacy": "/contact",
  "/terms": "/contact",
};
const generic = {
  "Cypher Capital": "UX Hub",
  Cypher: "UX Hub",
  "cyphercapital.com": "uxhubglobal.com",
  "Contact us for more information": "Start a Conversation",
  "Explore access formats": "Explore our services",
  "Explore the fund": "Explore Product Growth",
  "Engage with UX Hub": "Start a Conversation",
};
const pages = {};
function page(route, template, texts, labels = {}, source = "") {
  const $ = load(old[template].html);
  const nodes = $("h1,h2,h3,p");
  if (nodes.length !== texts.length)
    throw Error(`${route}: ${nodes.length} slots, ${texts.length} texts`);
  nodes.each((i, e) => copy($, $(e), texts[i]));
  replaceText($, { ...labels, ...generic });
  $("a[href]").each((_, e) => {
    const a = $(e),
      href = a.attr("href");
    if (routes[href]) a.attr("href", routes[href]);
    if (href?.startsWith("mailto:"))
      a.attr("href", "https://uxhubglobal.com/contact.html");
  });
  const doc = {
    title: `${route === "home" ? "Digital Business Growth Consultancy" : texts[0]} | UX Hub`,
    description: texts[1] || texts[0],
    source:
      source ||
      `https://uxhubglobal.com/${route === "home" ? "index" : route}.html`,
    html: $("body").html(),
  };
  pages[route] = doc;
  return {
    $,
    save() {
      doc.html = $("body").html();
    },
  };
}
const home = page(
  "home",
  "home",
  [
    "Build, launch and grow your business.",
    "Digital Business Growth",
    "We help businesses across India and KSA build custom software and digital products, launch e-commerce businesses, create high-performing digital experiences and develop the growth engines needed to scale.",
    "Product Growth",
    "From 0→1 to scalable growth. Identify opportunities, validate ideas and take digital products from concept to market and beyond.",
    "E-commerce Growth",
    "Build, optimize and scale e-commerce businesses across D2C and marketplace channels.",
    "Digital Experience",
    "Custom software and premium digital experiences that combine brand, technology, usability and conversion.",
    "Strategy + Execution",
    "We build businesses for the digital economy. Our approach combines strategy with execution. We don’t just recommend what should happen. We help make it happen.",
    "From Concept to Market",
    "Identify opportunities, define products, validate ideas and build growth strategies.",
    "From Growth to Scale",
    "Connect strategy, technology, customer experience and growth to build scalable businesses.",
    "Pricing intelligence for GCC e-commerce",
    "Monitor competitor prices across the GCC. Get alerted when prices change. Make faster, data-driven pricing decisions. UXHUB Pricing Super Intelligence helps your team map products, monitor the market and react faster.",
    "Built for businesses that want to scale digitally.",
    "Strategy + Execution",
    "We combine strategic thinking with hands-on execution.",
    "Growth Mindset",
    "Every product, platform and experience is built around measurable growth.",
    "India + KSA",
    "Two fast-growing economic corridors. One unified digital growth mindset.",
    "Summarize this page with AI",
  ],
  {
    Capabilities: "Services",
    "Proprietary Investments": "About UX Hub",
    Infrastructure: "Our Product",
    Values: "Our Approach",
    "Explore capabilities": "Explore our services",
    "Explore AI Infrastructure": "Explore Pricing Intelligence",
    "Visit stormgroup.com": "Talk to a Pricing Expert",
  },
);
home
  .$('a[href="https://www.stormgroup.com"]')
  .attr("href", "https://uxhubglobal.com/contact.html");
home.$("[class*=__note]").text("D2C");
home.save();
page(
  "about",
  "philosophy",
  [
    "About UX Hub",
    "We build businesses for the digital economy.",
    "Strategy. Execution. Growth.",
    "Strategy + Execution",
    "We combine strategic thinking with hands-on execution.",
    "Digital-First",
    "We build and grow digital businesses, not simply deliver digital services.",
    "0→1 Expertise",
    "We turn new ideas and opportunities into real products and businesses.",
    "Product, e-commerce, technology and growth—connected.",
    "Product Growth",
    "Find the opportunity, define the right product and build the roadmap to market and scale.",
    "E-commerce Growth",
    "Build stronger acquisition, conversion, retention and commercial performance across channels.",
    "Digital Experience",
    "Create websites, commerce platforms and digital products that move customers and businesses forward.",
    "Growth Mindset",
    "Every product, platform and experience is built around measurable growth.",
    "India + KSA",
    "UX Hub is a Digital Business Growth Consultancy working with companies across India and KSA.",
  ],
  {
    Timeline: "Our Approach",
    "T-Shaped Philosophy": "Connected Practices",
    "Company Overview": "Our Markets",
  },
  "https://uxhubglobal.com/about.html",
);
page(
  "services",
  "capabilities",
  [
    "Services",
    "Strategy, technology and growth—connected.",
    "01",
    "Product Growth",
    "From 0→1 to scalable growth. Find the opportunity, define the right product and build the roadmap to market and scale.",
    "Identify opportunities, define products, validate ideas and take digital products from concept to market and beyond.",
    "Build growth strategies, go-to-market strategies and growth roadmaps.",
    "Connect product analytics, the customer journey and conversion optimization.",
    "Take digital products from concept to market and beyond with product scaling.",
    "02",
    "Commerce & Digital Experience",
    "We build the capabilities digital businesses need to move from opportunity to scale.",
    "Build, optimize and scale e-commerce businesses across D2C and marketplace channels.",
    "Premium website development, e-commerce development, Shopify development and custom e-commerce.",
    "UX/UI design, digital product and platform development, CRM and ERP integrations, analytics and tracking.",
  ],
  {
    "Digital Multi-Strategy Fund": "0→1 Product Strategy",
    "Separately Managed Accounts": "Product Analytics",
    "AI Data Centre Fund": "Product Scaling",
    "Coming soon": "0→1",
    AMCs: "Growth & Go-to-Market",
    "Venture Capital": "E-commerce Growth",
    "Private Equity": "Digital Experience",
    "Private Market & Infrastructure Co-⁠Investments":
      "Platforms & Integrations",
  },
  "https://uxhubglobal.com/services.html",
);
const product = page(
  "product",
  "ai-infrastructure",
  [
    "Pricing Super Intelligence",
    "Monitor competitor prices across the GCC. Get alerted when prices change. Make faster, data-driven pricing decisions.",
    "Track your products against competitors across marketplaces and e-commerce websites. Know who changed their price, what changed, and when it happened—so your team can react faster.",
    "Map. Monitor. React. Win.",
    "Map Your Products",
    "Match your products with comparable competitor products and understand exactly where you stand.",
    "Monitor Competitor Prices",
    "Stop manually checking marketplaces and competitor websites. Turn manual price checking into automated monitoring.",
    "React Faster",
    "Know when a competitor changes their price so your team can investigate and respond faster.",
    "Built for GCC E-commerce",
    "See what your competitors are doing across the channels that matter.",
    "Marketplace Monitoring",
    "Monitor leading marketplaces and e-commerce websites across the GCC, subject to platform availability and monitoring configuration.",
    "Pricing Analytics",
    "Use competitive market visibility to understand pricing movements, protect competitiveness and make better commercial decisions.",
  ],
  {
    Infrastructure: "Our Product",
    "Investment Approach": "How It Works",
    "Storm Group × Cypher Capital": "Market Intelligence",
    "Visit stormgroup.com": "Start Your Free 14-Day Trial",
  },
  "https://uxhubglobal.com/product.html",
);
product
  .$('a[href="https://www.stormgroup.com"]')
  .attr("href", "https://uxhubglobal.com/registration.html");
product.save();
const practice = [
  [
    "product-growth",
    "Product Growth",
    "From 0→1 to scalable growth.",
    "Find the opportunity, define the right product and build the roadmap to market and scale.",
    [
      "Product Discovery",
      "Identify opportunities, define products and validate ideas.",
      "Product-Market Fit",
      "Take digital products from concept to market and beyond.",
      "Product Strategy",
      "Build the roadmap to market and scale.",
    ],
    [
      "Growth Strategy",
      "Create the growth engines needed to scale.",
      "Go-to-Market Strategy",
      "Take digital products from concept to market.",
      "Product Analytics",
      "Connect analytics, customer journeys and conversion optimization.",
    ],
  ],
  [
    "e-commerce-growth",
    "E-commerce Growth",
    "Turn e-commerce into a growth engine.",
    "Build stronger acquisition, conversion, retention and commercial performance across channels.",
    [
      "E-commerce Strategy",
      "Build, optimize and scale e-commerce businesses.",
      "Marketplace Growth",
      "Scale across D2C and marketplace channels.",
      "Performance Marketing",
      "Build stronger acquisition and commercial performance.",
    ],
    [
      "Conversion Optimization",
      "Turn traffic into conversion and growth.",
      "CRM & Retention",
      "Build stronger customer retention across channels.",
      "E-commerce Analytics",
      "Connect data analytics, attribution and e-commerce P&L.",
    ],
  ],
  [
    "digital-experience",
    "Digital Experience",
    "Custom software and digital experiences built for growth.",
    "Create websites, SaaS products, commerce platforms and custom software that move customers and businesses forward.",
    [
      "Website Development",
      "Premium websites that combine brand, technology, usability and conversion.",
      "E-commerce Development",
      "Shopify development and custom e-commerce.",
      "Digital Product Development",
      "Build custom software, SaaS products and digital platforms.",
    ],
    [
      "UX/UI Design",
      "Create conversion-focused digital experiences.",
      "Platform Development",
      "Connect technology, usability and growth.",
      "CRM & ERP Integrations",
      "Connect your platforms with analytics and tracking.",
    ],
  ],
];
for (const [route, title, tagline, intro, cards, strategies] of practice)
  page(
    route,
    "digital-multi-strategy-fund",
    [
      title,
      tagline,
      intro,
      "Three connected capabilities",
      "We help businesses across India and KSA build the capabilities needed to scale digitally.",
      ...cards,
      "Built for growth",
      "Our approach combines strategy with execution. We don’t just recommend what should happen. We help make it happen.",
      ...strategies,
      "From opportunity to scale",
      "Digital growth comes from connecting strategy, technology, customer experience and growth.",
      "Tell us what you’re trying to build, launch or grow.",
    ],
    {
      "The Fund": "Our Practice",
      "Digital Markets": "Capabilities",
      "The Strategies": "Our Approach",
      "The Portfolio": "Growth to Scale",
    },
    "https://uxhubglobal.com/services.html",
  );
for (const route of ["markets", "contact"]) {
  const result = page(
    route,
    "global-presence",
    [
      route === "contact" ? "Let’s talk growth." : "India ↔ KSA",
      route === "contact"
        ? "Tell us what you’re trying to build, launch or grow across India and KSA."
        : "Two fast-growing economic corridors. One unified digital growth mindset.",
      "Two markets. One growth mindset.",
      "India",
      "UX Hub works with companies across India at the intersection of product, e-commerce, technology and growth.",
      "KSA",
      "Regional understanding, connected by digital growth expertise. We help businesses build, launch and grow across India and KSA.",
      "Start a Conversation",
    ],
    {
      Places: "Our Markets",
      Contacts: "Get in Touch",
      "info@cyphercapital.com": "Start a Conversation",
      "ir@cyphercapital.com": "Start Your Free 14-Day Trial",
      "For general questions":
        "Tell us what you’re trying to build, launch or grow.",
      "For investor relations": "UXHUB Pricing Super Intelligence",
    },
    `https://uxhubglobal.com/${route === "markets" ? "about" : "contact"}.html`,
  );
  const links = result.$('a[href="https://uxhubglobal.com/contact.html"]');
  links.eq(1).attr("href", "https://uxhubglobal.com/registration.html");
  result.save();
}
// Preserve the existing insight-list layout, using the actual four coming-soon items.
{
  const $ = load(old.insights.html);
  copy($, $("h1"), "Insights");
  const links = $('a[href^="/insights/"]');
  links.each((i, e) => {
    const a = $(e);
    if (i >= 4) {
      a.parent().is("li") ? a.parent().remove() : a.remove();
      return;
    }
    a.attr("href", "https://uxhubglobal.com/insights.html");
    copy($, a.find("h2,h3").first(), "Article coming soon");
    const children = a.find("span,time");
    children.each((_, el) => {
      const target = $(el),
        t = target.text();
      if (target.children().length) return;
      if (/2026/.test(t)) target.text("Coming soon");
      else if (/Announcements|Research|Market Analysis/.test(t))
        target.text(["Product", "Commerce", "Scaling", "GTM"][i]);
    });
  });
  $("img")
    .attr("src", "/uxhub/insights-placeholder.svg")
    .attr("alt", "UX Hub insights — coming soon")
    .removeAttr("srcset");
  replaceText($, generic);
  pages.insights = {
    title: "Insights | UX Hub",
    description:
      "Ideas for building digital growth. Perspectives on product, commerce, go-to-market, technology, experience and analytics.",
    source: "https://uxhubglobal.com/insights.html",
    html: $("body").html(),
  };
}
// Update shared brand information without changing the footer's structure.
{
  const original = JSON.parse(
    await fs.readFile("scripts/templates/footer.json", "utf8"),
  );
  const $ = load(original.html);
  const primary = [
    ["UX Hub", "/"],
    ["About", "/about"],
    ["Services", "/services"],
    ["Product", "/product"],
    ["Contact", "/contact"],
  ];
  const secondary = [
    ["Product Growth", "/product-growth"],
    ["E-commerce Growth", "/e-commerce-growth"],
    ["Digital Experience", "/digital-experience"],
    ["Insights", "/insights"],
    ["India ↔ KSA", "/markets"],
    ["Start a Conversation", "/contact"],
  ];
  for (const [selector, items] of [
    ['[class*="__primary"] a', primary],
    ['[class*="__secondary"] a', secondary],
  ])
    $(selector).each((i, e) => {
      const a = $(e);
      a.attr("href", items[i][1]);
      a.contents()
        .filter((_, n) => n.type === "text")
        .first()
        .replaceWith(escape(items[i][0]));
    });
  const legal = $("p").filter((_, e) =>
    /Investment management|Cypher Proprietary|Nothing on this/.test(
      $(e).text(),
    ),
  );
  const descriptions = [
    "UX Hub is a Digital Business Growth Consultancy working with companies across India and KSA. We operate at the intersection of product, e-commerce, technology and growth—helping businesses identify opportunities, build digital experiences, launch new products and create scalable growth engines.",
    "Our approach combines strategy with execution. We don’t just recommend what should happen. We help make it happen.",
    "Tell us what you’re trying to build, launch or grow.",
  ];
  legal.each((i, e) => $(e).text(descriptions[i] || descriptions[2]));
  replaceText($, {
    "Ask your AI about Cypher": "Ask your AI about UX Hub",
    "© 2026 Cypher Capital": "© UX HUB",
    "Zurich | Dubai": "India ↔ KSA",
    "Privacy Policy": "Services",
    "Terms of Use": "Contact",
    Cypher: "UX",
    Capital: "Hub",
  });
  $('a[href="/privacy"]').attr("href", "/services");
  $('a[href="/terms"]').attr("href", "/contact");
  await fs.writeFile(
    "src/content/footer.json",
    JSON.stringify({ html: $("body").html() }, null, 2),
  );
}
// Match each existing service-panel action to the corresponding practice.
{
  const $ = load(pages.services.html);
  const destinations = [
    "/product-growth",
    "/product-growth",
    "/product-growth",
    "/contact",
    "/e-commerce-growth",
    "/digital-experience",
    "/digital-experience",
  ];
  $('[class*="disclosure-list"][class$="__item"]').each((index, element) =>
    $(element).find("a").attr("href", destinations[index]),
  );
  pages.services.html = $("body").html();
}
// Keep external AI summaries pointed at the source company, not the previous brand.
for (const doc of Object.values(pages)) {
  doc.html = doc.html
    .replaceAll("cyphercapital.com", "uxhubglobal.com")
    .replaceAll("Cypher%20Capital", "UX%20Hub");
}
let footer = await fs.readFile("src/content/footer.json", "utf8");
footer = footer
  .replaceAll("cyphercapital.com", "uxhubglobal.com")
  .replaceAll("Cypher%20Capital", "UX%20Hub");
await fs.writeFile("src/content/footer.json", footer);
await fs.writeFile("src/content/pages.json", JSON.stringify(pages, null, 2));
await fs.writeFile(
  "src/content/home.json",
  JSON.stringify(pages.home, null, 2),
);
const provenance = {
  fetchedAt: "2026-10-07",
  sources: [
    "https://uxhubglobal.com/",
    "https://uxhubglobal.com/services.html",
    "https://uxhubglobal.com/about.html",
    "https://uxhubglobal.com/product.html",
    "https://uxhubglobal.com/insights.html",
    "https://uxhubglobal.com/contact.html",
  ],
  notes:
    "Copy fitted to the existing page slots. No client logos, team biographies, investment claims, office addresses, contact emails, or published articles were invented. Inquiry and trial links use the official UX Hub forms.",
};
await fs.writeFile(
  "src/content/uxhub-sources.json",
  JSON.stringify(provenance, null, 2),
);
console.log(
  "Updated",
  Object.keys(pages).length,
  "pages; preserved template CSS and homepage sections.",
);
