import type { Metadata } from "next";
import { ProductPreview } from "@/components/product-preview";
import { ProductBenefits } from "@/components/product-benefits";
import Link from "next/link";
import { ProductNavigation } from "@/components/product-navigation";
import { PageInvitation } from "@/components/page-invitation";
import { productPages } from "@/lib/product-pages";
import { bookingUrl, faqs } from "@/lib/site";
export const metadata: Metadata = {
  title: "Sales Commission",
  description:
    "Connect contract activity, commission earnings, payout schedules, and forecasting with Sales Commission by AI Accounting Agency.",
  alternates: { canonical: "/sales-commission/" },
};
export default function ProductPage() {
  return (
    <main id="main-content" className="commission-product">
      <ProductNavigation current="/sales-commission/" />
      <section className="hero">
        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow">Sales Commission by AI Accounting Agency</p>
            <h1>
              Your contracts.
              <br />
              Your earnings.
              <br />
              <em>Your payout schedule.</em>
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
              <Link
                className="text-link"
                href="/sales-commission/how-it-works/"
              >
                Explore the workflow
              </Link>
            </div>
          </div>
          <div className="product-media">
            <ProductPreview />
          </div>
        </div>
      </section>
      <ProductBenefits />
      <section className="section shell product-capabilities">
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
      <section className="shell product-next-pages section">
        <p className="eyebrow">Go further into the product</p>
        <div className="product-page-links">
          {productPages.slice(1).map((page) => (
            <Link key={page.href} href={page.href}>
              <h3>{page.label}</h3>
              <p>{page.description}</p>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="faq section shell">
        <div className="faq-heading">
          <p className="eyebrow">Sales Commission / common questions</p>
          <h2>What you may want to know.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>
                {faq.q}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
      <PageInvitation />
    </main>
  );
}
