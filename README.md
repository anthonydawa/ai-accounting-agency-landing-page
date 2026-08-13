# AI Accounting Agency Landing Page

A conversion-focused one-page landing page for AI Accounting Agency. It is built with Next.js and deployed as a static site on GitHub Pages.

## Run locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Google Calendar booking

All booking buttons are connected to the supplied Google Appointment Schedule:

```text
https://calendar.app.google/gN5dqSemjJaRcWRg7
```

The booking page uses the availability rules of its connected Google Calendar, removes unavailable times, sends the confirmation, and includes Google Meet information after booking. Google blocks its appointment page from being embedded on external domains, so the landing page opens the secure Google booking page in a new tab.

The deployed build sets the final public URL and repository path automatically.

## Connect the inquiry form

The current form demonstrates the full interaction but does not send data externally. Connect `handleSubmit` in `app/page.tsx` to the selected form endpoint, CRM, or server action before launch.

Common options include:

- A Next.js server action or API route
- HubSpot, Jotform, or Typeform
- Formspree or Basin
- Zapier or Make webhook connected to a CRM or Google Sheet

## GitHub Pages deployment

Pushes to `main` trigger `.github/workflows/deploy-pages.yml`. The workflow exports the static Next.js site and publishes it through GitHub Pages. No database or authentication is required.
