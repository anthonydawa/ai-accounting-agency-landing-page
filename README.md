# AI Accounting Agency Website

A Sales Commission-led redesign of the original landing page, using the existing navy, teal, coral, logo, founder portrait, large typography, and animated workflow illustration on predominantly white backgrounds.

## Preview and validation

Requires Node 22.13 or newer.

```sh
pnpm install --frozen-lockfile
npm run dev -- --port 3100
```

For a production preview:

```sh
npm test
npm run preview
```

Open http://localhost:3101. The preview serves the exported `out/` directory. `PORT` and `NEXT_PUBLIC_BASE_PATH` can be set for other ports or a GitHub Pages preview.

`npm test` runs the production build and verifies article records, internal links, anchor destinations, required pages, and contact paths. `npm run typecheck` checks TypeScript.

## Site structure

- Home: product hero, benefits, original animated commission workflow, secondary services, founder introduction, articles, contact, FAQs.
- `/sales-commission/`: dedicated product page.
- `/sales-accounting/`, `/financial-reporting/`, `/payroll-business/`: existing service categories and paths.
- `/about-us/`: company and founder page.
- `/blog/`: searchable article library with category filters.
- `/blog/[slug]/`: full local articles generated from the content collection.
- Sitemap and a generated PNG social preview.

## Adding articles over time

1. Copy the object in `content/article-template.json` into the array in `content/articles.json`.
2. Use a unique lowercase, hyphenated slug. Add the title, category, summary, author, publication date, reading time, and sections.
3. Leave `published: false` while drafting. Set it to `true` when the article is ready to appear on the site.
4. Run `npm test`, review the article locally, and deploy the updated build.

Each section accepts a heading and an array of paragraphs. New categories appear automatically in the library. Published posts are sorted by date; the latest three appear on the homepage. Drafts are excluded from article pages and the sitemap. Publication is a manual flag, not a scheduled publishing system.

An existing article can instead use `externalUrl` to link to its current published version. These cards say “Read original” and open in another tab. The new Sales Commission guide is draft copy for review as part of this website redesign; it is visible in the preview.

## Content sources

- Design, brand assets, animated commission workflow, booking URL: original GitHub landing-page source.
- Service categories and capabilities: the current aiaccountingagency.com service pages.
- Founder background and qualifications: the current About Us page.
- Four article summaries, dates, and destinations: the current article archive, verified on October 6, 2026.
- Product capabilities: the existing Sales Commission dashboard implementation. The homepage dashboard graphic is an illustration, not live customer data.

The contact section uses the original Google booking link and offers an email draft addressed to `info@aiaccountingagency.com`. The form builds the draft locally; visitors explicitly open their email app to review and send it. There is no hosted form endpoint or automatic submission confirmation.

## Deployment and domain migration

The existing GitHub Pages workflow deploys only pushes to `main`. Review work stays on `codex/sales-commission-website-redesign` until it is merged. The workflow sets the repository base path and now runs the static link checks before publishing.

For deployment at the root of aiaccountingagency.com, build without `GITHUB_ACTIONS=true` and set `NEXT_PUBLIC_SITE_URL=https://www.aiaccountingagency.com`. The site exports static files and can use the eventual selected hosting provider.

Before replacing the Wix site at the main domain, migrate the remaining existing article archive and preserve its `/post/...` URLs, or configure redirects to migrated articles. The four source article links and archive link intentionally continue to use the current website during this design review; they depend on those Wix pages remaining available. The draft does not change DNS, replace Wix, or migrate the whole archive.
