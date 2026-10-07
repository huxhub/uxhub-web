# UX Hub website

UX Hub content from [uxhubglobal.com](https://uxhubglobal.com/), fitted to the existing Cypher-inspired layout. The page design, Instrument Sans typography, spacing tokens, chrome hero shader, scroll backgrounds, and responsive rules are retained. The loader animates the supplied `public/uxhub_logo.svg` with a staggered reveal, metallic sweep, and transition into the header.

```sh
npm install
npm run dev
```

Open http://localhost:3000. Use `npm run build` and `npm start` for production.

## Content

The site has ten content routes: Home, About, Services, Product, Product Growth, E-commerce Growth, Digital Experience, Markets, Contact, and Insights. Content was fetched from the official UX Hub website on 7 October 2026; source URLs are recorded in `src/content/uxhub-sources.json`.

The official insights page currently lists four coming-soon articles. No former investment articles or biographies are presented as UX Hub content. Enquiry and trial calls to action open the official UX Hub contact and registration pages. Previous top-level routes redirect to their relevant replacements.

- `src/content/pages.json`: current page content, rendered as React elements on the server.
- `src/content/home.json` and `footer.json`: shared homepage and footer content.
- `src/components/BrandIntro.js` and `BrandLogo.js`: animation using the supplied logo paths.
- `src/app/reference.css`: unchanged layout, type, and responsive design rules.
- `scripts/apply-uxhub-content.mjs`: repeatable content mapping using the preserved layout templates in `scripts/templates/`.

## Checks

With the development server running:

```sh
npm run lint
npm run build
node scripts/verify.mjs
```

Verification checks the animated hero, desktop font metrics, menu keyboard interaction, service accordions, dark scroll transition, routes and links, India/KSA tabs, mobile overflow, reduced motion, and stale company content. Temporary screenshots are written to the operating system's temporary directory. Set `PREVIEW_URL` to verify another port.
