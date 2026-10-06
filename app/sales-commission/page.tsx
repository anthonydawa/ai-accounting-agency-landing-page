import type { Metadata } from "next";
import { ProductPreview } from "@/components/product-preview";
import { CommissionCase } from "@/components/commission-case";
import { ContactSection } from "@/components/contact-section";
import { bookingUrl } from "@/lib/site";
export const metadata: Metadata = {
  title: "Sales Commission",
  description:
    "Connect contract activity, commission earnings, payout schedules, and forecasting with Sales Commission by AI Accounting Agency.",
  alternates: { canonical: "/sales-commission/" },
};
export default function ProductPage() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow">Our first product · Sales Commission</p>
            <h1>
              Every commission
              <br />
              has a <em>backstory.</em>
            </h1>
            <p className="hero-lede">
              A connected commission workspace for the people who sell, review,
              and plan. Built around the rules that make your business
              different.
            </p>
            <div className="hero-actions">
              <a
                className="button"
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
              >
                Book a product walkthrough
              </a>
              <a className="text-link dark" href="#workflow">
                Explore the workflow
              </a>
            </div>
          </div>
          <div className="product-media">
            <ProductPreview />
          </div>
        </div>
      </section>
      <section className="section shell">
        <div className="section-heading">
          <p className="eyebrow">One connected workspace</p>
          <h2>
            The details your team
            <br />
            <em>comes back to.</em>
          </h2>
        </div>
        <div className="service-detail-grid">
          {[
            [
              "Contract activity",
              "Review the recorded services, values, and timing behind your commission calculations.",
            ],
            [
              "Earnings visibility",
              "Understand upfront and recurring commissions with a clearer view of the components.",
            ],
            [
              "Dated payout schedules",
              "See upcoming pay cycles and keep commission amounts separate from base salary.",
            ],
            [
              "Forecast scenarios",
              "Explore how fees, rates, and deal volume affect projected commissions under selected assumptions.",
            ],
            [
              "Shareable reports",
              "Select a payout date and download a commission summary for review and discussion.",
            ],
            [
              "A setup built around you",
              "Start with a review of your commission rules, data sources, and reporting process.",
            ],
          ].map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <CommissionCase />
      <ContactSection />
    </main>
  );
}
