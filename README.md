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

## Importing UX Hub content

Run `npm run content:import` after updating the archive with `node scripts/scrape-uxhub.mjs`.
The importer reads the saved HTML and metadata locally, preserves existing page sections,
and adds the complete page copy in the existing section/accordion design. Services uses
three main practice sections with all 35 capabilities visible, rather than a collapsed
content appendix. It also adds
`/registration`, fills out the three practice pages, and keeps internal page links local.
Repeated imports replace the imported sections instead of duplicating them.

Original CSS, JavaScript, decorative SVGs, duplicated navigation, hidden confirmation
messages, and the simulated sign-in are deliberately not imported. Contact and trial
submission links lead to the original website: no working submission backend is present
in this repository (the archived contact script only displays a success message).

Run `node scripts/verify-content.mjs` against the running app to check copy coverage,
accordion accessibility, and desktop/mobile overflow. `PREVIEW_URL` overrides localhost:3000.

The product catalogue lives at `/product`; the complete Price Intelligence details live
at `/product/price-intelligence`. The importer preserves this split and updates pricing
links, while the main Product navigation and footer lead to the catalogue.

The free-trial CTA leads to `/registration`. Its two-step form mirrors the business and
store fields from the live UX Hub registration page. Valid requests are forwarded by
`/api/trial-registration` to the official `uxhubglobal.com/register.php` service, which
delivers the lead to the UX Hub email configured on that service. Password fields from
the source page are intentionally omitted because the source submission does not send them.
