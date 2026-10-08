# AI Accounting Agency Website

A Sales Commission-led website using the existing navy, teal, coral, logo, and founder portrait. Direct navigation, clear page titles, visible section menus, and concrete examples explain the product on predominantly white backgrounds. Each page has a defined purpose instead of repeating the same broad introduction.

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

- Home: a concise Sales Commission introduction with an animated agreement-to-payout illustration, links into the product directory, founder expertise, secondary services, and recent articles.
- `/sales-commission/`: product overview, capabilities, audience needs, and FAQs.
- `/sales-commission/how-it-works/`: a connected, selectable contract-to-payout illustration and detailed workflow explanations.
- `/sales-commission/reporting/`: earnings, payout-summary, and forecast tabs with pointer and keyboard selection. Forecast opens first with sliders for commission rate and deal count, an updating total, and a comparison with the starting assumptions. All example data is illustrative, rather than a live product connection.
- `/sales-commission/implementation/`: commission rules, source information, review responsibilities, setup scope, and an optional interactive demo-preparation checklist. Checklist selections stay only in the current page state and are not submitted or saved.
- `/services/`: a separate accounting services directory with specific needs and capabilities for each area. Sales Commission remains the lead offer on the homepage and main navigation.
- `/sales-accounting/`, `/financial-reporting/`, `/payroll-business/`: expanded service pages covering inputs, review focus, outputs, capabilities, and their connection to commissions. Existing service paths are preserved.
- `/about-us/`: company mission, founder background, and the agency's product focus.
- `/contact/`: booking, direct contact details, email preparation form, and information to bring to a consultation.
- `/blog/`: searchable article library with category filters.
- `/blog/[slug]/`: full local articles generated from the content collection.
- Sitemap and a generated PNG social preview.

Main navigation links lead directly to pages without dropdown menus. Product and service pages have separate section menus with prominent active-page states and descriptive labels. Breadcrumbs and literal titles identify the current page. On mobile, the section menu becomes a two-column directory; the primary menu supports Escape dismissal and closes after navigation. Page transitions reset the scroll position and move keyboard focus to the new title. Product pages link forward through overview, workflow, reports, and setup.

## Visuals and motion

The homepage uses a paper agreement, rate memo, earnings ticket, and payout calendar to explain one commission. The workflow page presents the same example as a connected trace. Both play once when visible, offer stage selection and Pause/Replay controls, and stop when scrolled out of view. Reduced-motion preferences disable autoplay and decorative transitions; all explanations remain available.

Accounting services use three distinct process illustrations: sale-to-deposit reconciliation, plan-versus-actual variance, and payroll handoffs. Their short entrance animations run once. The forecast comparison responds to slider changes, while the preparation checklist updates a progress ring. The visuals use CSS and SVG with no external animation dependency.

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

The review site is deployed on the existing Hostinger plan at https://orangered-tiger-215159.hostingersite.com/ (October 8, 2026). It is a separate PHP/HTML site serving the static export, with no change to the main domain or Wix site. Build with `NEXT_PUBLIC_SITE_URL` set to that temporary origin, an empty `NEXT_PUBLIC_BASE_PATH`, and `GITHUB_ACTIONS=false`. Upload the contents of `out/` at the document root, including `_next/` and route directories. The current deployment is a manual upload; GitHub pushes do not update Hostinger automatically.

The preview package adds an `.htaccess` with `DirectoryIndex index.html`, `ErrorDocument 404 /404.html`, and an `X-Robots-Tag: noindex, nofollow` header under `mod_headers`. Hostinger also serves its temporary-domain robots policy. Remove the preview indexing restriction when preparing the final production deployment. All 13 routes, referenced assets, HTTPS, the response header, the custom 404, and the live calculator/navigation were verified after upload.

The existing GitHub Pages workflow deploys only pushes to `main`. Review work stays on `codex/sales-commission-website-redesign` until it is merged. The workflow sets the repository base path and now runs the static link checks before publishing.

For deployment at the root of aiaccountingagency.com, build without `GITHUB_ACTIONS=true` and set `NEXT_PUBLIC_SITE_URL=https://www.aiaccountingagency.com`. The site exports static files and can use the eventual selected hosting provider.

Before replacing the Wix site at the main domain, migrate the remaining existing article archive and preserve its `/post/...` URLs, or configure redirects to migrated articles. The four source article links and archive link intentionally continue to use the current website during this design review; they depend on those Wix pages remaining available. The draft does not change DNS, replace Wix, or migrate the whole archive.
