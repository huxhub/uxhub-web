# UX Hub website

A Next.js website with directly editable JSX pages. Page markup lives in source files, not HTML strings inside JSON. The existing layouts, CSS, animations, and responsive styles are preserved.

```sh
npm install
npm run dev
```

Open http://localhost:3000. Use `npm run build` and `npm start` for production.

## Source structure

```text
src/
  app/
    page.jsx                         # Home
    layout.jsx                       # Shared header, footer, and global styles
    about/page.jsx
    services/page.jsx
    product/page.jsx                 # Product catalogue
    product/price-intelligence/page.jsx
    product-growth/page.jsx
    e-commerce-growth/page.jsx
    digital-experience/page.jsx
    markets/page.jsx
    contact/page.jsx
    insights/page.jsx
    registration/page.jsx
    [...slug]/page.jsx               # Legacy redirects and unknown-route handling
    api/trial-registration/route.js
    globals.css
    reference.css
    price-intelligence.css
  components/                       # Shared React components (.jsx)
    Header.jsx
    Footer.jsx
    TrialRegistration.jsx
    BrandIntro.jsx
    BrandLogo.jsx
    Effects.jsx
    HoverEffects.jsx
    PageMotion.jsx
    Places.jsx
    StructuredData.jsx
  data/                             # Small JavaScript data modules; no page markup
    page-metadata.js
    legacy-routes.js
    brand.js
  lib/                              # SEO and animation utilities
public/                             # Images, fonts, and other static assets
scraped_content/                    # HTML fixtures and metadata for content checks
scripts/                            # Browser verification
```

## Editing pages

Edit the JSX in the corresponding `src/app/**/page.jsx` file. Edit shared navigation in
`src/components/Header.jsx` and the footer in `src/components/Footer.jsx`. Page titles
and descriptions are in `src/data/page-metadata.js`; SEO helpers remain in `src/lib/seo.js`.

Existing CSS class names and inline style values are deliberately preserved because
styles and animation selectors depend on them. Components containing JSX use `.jsx`;
plain utilities, route handlers, and Next.js metadata endpoints use `.js`.

The former JSON renderer, content import scripts, and scraper have been removed.
JSX is the source of truth. `scraped_content/html/` and its index are retained only
as fixtures for the source-copy verification checks. Project configuration and
fixture metadata remain JSON data, not executable page markup.

## Checks

```sh
npm run lint
npm run build
```

With the development server running:

```sh
node scripts/verify.mjs
node scripts/verify-content.mjs
node scripts/verify-hover.mjs
node scripts/verify-intro.mjs
```

Set `PREVIEW_URL` to verify a different local port. Browser checks cover routes, links,
animations, desktop/mobile overflow, accordions, and source-copy coverage. Screenshots
are written to the operating system's temporary directory.

## Trial registration

The free-trial CTA leads to `/registration`. Its two-step form submits business and
store fields through `/api/trial-registration` to the official
`uxhubglobal.com/register.php` service. This refactor preserves that behavior.
