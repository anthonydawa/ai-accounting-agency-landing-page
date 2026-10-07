# AI Accounting Agency Website

A Sales Commission-led redesign using the existing navy, teal, coral, logo, and founder portrait. Editorial typography and accounting working papers stay at the center, with distinct product, workflow, founder, services, journal, and consultation sections on predominantly light backgrounds.

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

- Home: a concise Sales Commission introduction, links into the product directory, founder expertise, secondary services, and recent articles.
- `/sales-commission/`: product overview, interactive Sales/Finance/Leadership perspectives, capabilities, and FAQs. Team views support pointer and keyboard selection; examples are illustrative rather than live product data.
- `/sales-commission/how-it-works/`: contract-to-payout workflow and a worked commission example.
- `/sales-commission/reporting/`: earnings, payout summaries, and forecast scenarios.
- `/sales-commission/implementation/`: commission rules, source information, review responsibilities, and setup scope.
- `/services/`: services directory, with Sales Commission featured first.
- `/sales-accounting/`, `/financial-reporting/`, `/payroll-business/`: expanded service pages covering inputs, review focus, outputs, capabilities, and their connection to commissions. Existing service paths are preserved.
- `/about-us/`: company mission, founder background, and the agency's product focus.
- `/contact/`: booking, direct contact details, email preparation form, and information to bring to a consultation.
- `/blog/`: searchable article library with category filters.
- `/blog/[slug]/`: full local articles generated from the content collection.
- Sitemap and a generated PNG social preview.

The shared navigation includes product and service directories with active-page indicators, keyboard dismissal, and mobile expansion. Each product page also includes a local navigation bar. The homepage leads visitors into these pages rather than duplicating their full content.

## Adding articles over time

1. Copy the object in `content/article-template.json` into the array in `content/articles.json`.
2. Use a unique lowercase, hyphenated slug. Add the title, category, summary, author, publication date, reading time, and sections.
3. Leave `published: false` while drafting. Set it to `true` when the article is ready to appear on the site.
4. Run `npm test`, review the article locally, and deploy the updated build.

Each section accepts a heading and an array of paragraphs. New categories appear automatically in the library. Published posts are sorted by date; the latest three appear on the homepage. Drafts are excluded from article pages and the sitemap. Publication is a manual flag, not a scheduled publishing system.

An existing article can instead use `externalUrl` to link to its current published version. These cards say “Read original” and open in another tab. The new Sales Commission guide is draft copy for review as part of this website redesign; it is visible in the preview.

## Content sources

- Brand assets, original page structure, booking URL: original GitHub landing-page source.
- Service categories and capabilities: the current aiaccountingagency.com homepage and service content. The expanded copy explains those offerings without adding unverified integration, pricing, or delivery promises.
- Founder background and qualifications: the current About Us page.
- Four article summaries, dates, and destinations: the current article archive, verified on October 6, 2026.
- Product capabilities: the existing Sales Commission dashboard implementation. The contract and calculation example uses clearly labeled illustrative amounts.

The contact section uses the original Google booking link and offers an email draft addressed to `info@aiaccountingagency.com`. The form builds the draft locally; visitors explicitly open their email app to review and send it. There is no hosted form endpoint or automatic submission confirmation.

## Deployment and domain migration

The existing GitHub Pages workflow deploys only pushes to `main`. Review work stays on `codex/sales-commission-website-redesign` until it is merged. The workflow sets the repository base path and now runs the static link checks before publishing.

For deployment at the root of aiaccountingagency.com, build without `GITHUB_ACTIONS=true` and set `NEXT_PUBLIC_SITE_URL=https://www.aiaccountingagency.com`. The site exports static files and can use the eventual selected hosting provider.

Before replacing the Wix site at the main domain, migrate the remaining existing article archive and preserve its `/post/...` URLs, or configure redirects to migrated articles. The four source article links and archive link intentionally continue to use the current website during this design review; they depend on those Wix pages remaining available. The draft does not change DNS, replace Wix, or migrate the whole archive.
