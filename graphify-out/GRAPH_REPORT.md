# Graph Report - uxhub-web  (2026-10-09)

## Corpus Check
- 64 files · ~60,446 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 175 nodes · 326 edges · 22 communities (13 shown, 8 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8
- Community 9
- Community 10
- Community 11
- Community 12
- Community 13
- Community 14
- Community 15
- Community 16
- Community 17
- Community 18
- Community 19
- Community 20

## God Nodes (most connected - your core abstractions)
1. `pageSchemas()` - 26 edges
2. `StructuredData()` - 14 edges
3. `metadataFor()` - 14 edges
4. `PageMotion()` - 13 edges
5. `react` - 9 edges
6. `f()` - 9 edges
7. `Effects()` - 7 edges
8. `c()` - 7 edges
9. `@playwright/test` - 6 edges
10. `BrandLogo()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `AboutPage()` --calls--> `pageSchemas()`  [EXTRACTED]
  frontend/src/app/about/page.jsx → frontend/src/lib/seo.js
- `DigitalExperiencePage()` --calls--> `pageSchemas()`  [EXTRACTED]
  frontend/src/app/digital-experience/page.jsx → frontend/src/lib/seo.js
- `ECommerceGrowthPage()` --calls--> `pageSchemas()`  [EXTRACTED]
  frontend/src/app/e-commerce-growth/page.jsx → frontend/src/lib/seo.js
- `InsightsPage()` --calls--> `pageSchemas()`  [EXTRACTED]
  frontend/src/app/insights/page.jsx → frontend/src/lib/seo.js
- `HomePage()` --calls--> `pageSchemas()`  [EXTRACTED]
  frontend/src/app/page.jsx → frontend/src/lib/seo.js

## Import Cycles
- None detected.

## Communities (22 total, 8 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.11
Nodes (18): metadata, RootLayout(), HomePage(), metadata, BrandIntro(), BrandLogo(), Footer(), footerNavigation (+10 more)

### Community 1 - "Community 1"
Cohesion: 0.09
Nodes (21): dependencies, next, react, react-dom, devDependencies, cheerio, eslint, eslint-config-next (+13 more)

### Community 2 - "Community 2"
Cohesion: 0.20
Nodes (17): a(), c(), createChrome(), createHero(), createSwirl(), d(), f(), factories (+9 more)

### Community 3 - "Community 3"
Cohesion: 0.15
Nodes (8): errors, index, errors, errors, errors, pageMetadata, cheerio, @playwright/test

### Community 4 - "Community 4"
Cohesion: 0.18
Nodes (5): ContactEnquiryForm(), empty, initial, TrialRegistration(), react

### Community 5 - "Community 5"
Cohesion: 0.32
Nodes (5): InsightsPage(), metadata, metadata, RegistrationPage(), StructuredData()

### Community 6 - "Community 6"
Cohesion: 0.29
Nodes (5): AboutPage(), metadata, DigitalExperiencePage(), metadata, Effects()

### Community 7 - "Community 7"
Cohesion: 0.38
Nodes (5): ContactPage(), metadata, MarketsPage(), metadata, pageSchemas()

### Community 8 - "Community 8"
Cohesion: 0.38
Nodes (5): metadata, ProductPage(), absoluteUrl(), metadataFor(), serviceNames

### Community 9 - "Community 9"
Cohesion: 0.29
Nodes (3): priorities, seoPages, SITE_URL

### Community 10 - "Community 10"
Cohesion: 0.43
Nodes (4): metadata, ServicesPage(), PageMotion(), setupStickySections()

### Community 11 - "Community 11"
Cohesion: 0.40
Nodes (3): alt, contentType, size

### Community 12 - "Community 12"
Cohesion: 0.70
Nodes (3): fund, infrastructure, philosophy

## Knowledge Gaps
- **55 isolated node(s):** `eslintConfig`, `paths`, `nextConfig`, `name`, `version` (+50 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 73 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `Community 4` to `Community 0`, `Community 1`, `Community 10`, `Community 12`?**
  _High betweenness centrality (0.272) - this node is a cross-community bridge._
- **Why does `pageSchemas()` connect `Community 7` to `Community 0`, `Community 5`, `Community 6`, `Community 8`, `Community 10`, `Community 17`, `Community 18`, `Community 19`?**
  _High betweenness centrality (0.071) - this node is a cross-community bridge._
- **Why does `@playwright/test` connect `Community 3` to `Community 1`?**
  _High betweenness centrality (0.062) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `paths`, `nextConfig` to the rest of the system?**
  _55 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.11076923076923077 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._