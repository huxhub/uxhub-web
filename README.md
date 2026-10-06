# Cypher Capital recreation

A local Next.js 16 recreation of [cyphercapital.com](https://www.cyphercapital.com/), based on the reference available on 6 October 2026.

```sh
npm install
npm run dev
```

Open http://localhost:3000. `npm run build` creates the production build; `npm start` serves it.

The homepage preserves the reference's Instrument Sans font, responsive type sizes, spacing, section layouts, SVG artwork, liquid chrome WebGL hero, chrome symbol introduction, interpolated scroll background, dark theme transition, and footer. The navigation menu supports keyboard focus, Escape, and mobile layouts. Forty-one routes include the main pages, leadership biographies, and insights. Fonts and images are served locally.

- `src/components/` contains the interactive React components.
- `src/content/pages.json` contains the captured page content, rendered as React elements on the server. Internal links use Next.js navigation.
- `src/app/reference.css` preserves the reference's design tokens and responsive styling. `globals.css` supplies the interactive shell.
- `src/lib/reference-effects.js` isolates the reference's procedural rendering primitives. It has no dependency on remote scripts or the original application runtime.
- `scripts/capture-reference.mjs` refreshes the public content, CSS, and local image/font assets from the reference.

The location image transition and interior-page text sheen use simpler treatments than the reference. Content is a local snapshot, not a live CMS integration. Shader highlights vary with animation time and GPU; exact pixel equality across devices is not expected.

## Verification

With the development server running:

```sh
npm run lint
npm run build
node scripts/verify.mjs
```

Browser verification checks the animated hero, font metrics, menu/Escape behavior, theme transition, all 41 routes, image loading, profile navigation, location tabs, mobile overflow, and reduced motion. Screenshots are saved to `artifacts/`. Set `PREVIEW_URL` to verify a different local port.
