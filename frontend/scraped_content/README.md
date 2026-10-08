# Content verification fixtures

These saved HTML pages and their source metadata are used by
`scripts/verify-content.mjs` to check that the live JSX pages retain the original
UX Hub copy. They are test fixtures, not application source or public assets.

The app renders only `src/app/**/page.jsx` and shared React components. Edit those
files to change the website. Duplicate JSON/Markdown exports, archived assets,
and the obsolete scraper have been removed.
