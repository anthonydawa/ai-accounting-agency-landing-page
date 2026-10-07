import type { Metadata } from "next";
import Link from "next/link";
import { ProductLayout } from "@/components/product-layout";
import { CommissionRecord } from "@/components/commission-record";
import { NextPage } from "@/components/next-page";
import { bookingUrl, faqs } from "@/lib/site";
export const metadata: Metadata = {
  title: "Sales Commission Product Overview",
  description:
    "Manage contract activity, upfront and recurring earnings, payout schedules, and commission reports in one workspace.",
  alternates: { canonical: "/sales-commission/" },
};

export default function ProductPage() {
  return (
    <ProductLayout
      current="/sales-commission/"
      title="Sales Commission"
      description="A workspace for managing contracts, commission earnings, and payout schedules. Built for the people who sell, review, and plan."
    >
      <section className="overview-intro">
        <div>
          <h2>
            Know what is earned.
            <br />
            See when it is due.
          </h2>
          <p>
            Bring the source contract, commission calculation, and payment
            timing into the same view. Your team can trace an amount back to the
            agreement instead of comparing disconnected files.
          </p>
          <a
            className="button"
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
          >
            Book a product demo ↗
          </a>
        </div>
        <CommissionRecord compact />
      </section>
      <section className="content-section">
        <h2>What you can manage</h2>
        <div className="capability-grid">
          {[
            [
              "Contract records",
              "Recorded services, deal values, and relevant dates give each calculation its context.",
            ],
            [
              "Upfront & recurring earnings",
              "See the components behind a commission total, including upfront and recurring amounts.",
            ],
            [
              "Payout schedules",
              "Review commissions for a selected pay date. Keep commissions separate from base salary.",
            ],
            [
              "Reports & forecasts",
              "Download dated summaries and explore scenarios using selected fees, rates, and deal volumes.",
            ],
          ].map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="content-section audience-section">
        <h2>Who it helps</h2>
        <dl>
          <div>
            <dt>Sales</dt>
            <dd>
              Understand which contracts and earning components make up a
              commission.
            </dd>
          </div>
          <div>
            <dt>Finance</dt>
            <dd>
              Check the calculation and payout timing, then prepare a dated
              summary for review.
            </dd>
          </div>
          <div>
            <dt>Leadership</dt>
            <dd>
              Consider scheduled commissions alongside forecast scenarios.
            </dd>
          </div>
        </dl>
      </section>
      <section className="content-section faq">
        <h2>Common product questions</h2>
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
        <Link className="text-link" href="/contact/">
          Have another question? Contact us →
        </Link>
      </section>
      <NextPage
        href="/sales-commission/how-it-works/"
        title="How it works"
        text="Follow the information from the source contract to the scheduled payout."
      />
    </ProductLayout>
  );
}
