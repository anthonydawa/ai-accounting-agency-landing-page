import type { Metadata } from "next";
import { ProductLayout } from "@/components/product-layout";
import { NextPage } from "@/components/next-page";
import { CommissionJourney } from "@/components/commission-journey";
export const metadata: Metadata = {
  title: "How Sales Commission Works",
  description:
    "Follow a source contract through commission rules, earnings calculations, and payout timing.",
  alternates: { canonical: "/sales-commission/how-it-works/" },
};
export default function WorkflowPage() {
  return (
    <ProductLayout
      current="/sales-commission/how-it-works/"
      title="From contract to payout"
      description="A commission has a source, a calculation, and a payment schedule. Here is how those pieces connect."
    >
      <CommissionJourney trace />
      <section className="workflow-timeline" aria-label="Commission workflow">
        <article>
          <div className="timeline-label">
            <span aria-hidden="true">↳</span> Contract
          </div>
          <div>
            <h2>Start with the recorded agreement.</h2>
            <p>
              The contract tells your team which services were sold, their
              value, the salesperson, and the relevant dates.
            </p>
            <dl className="workflow-data">
              <div>
                <dt>Example contract value</dt>
                <dd>$12,000</dd>
              </div>
              <div>
                <dt>Information to check</dt>
                <dd>Services, value, salesperson, dates</dd>
              </div>
            </dl>
          </div>
        </article>
        <article>
          <div className="timeline-label">
            <span aria-hidden="true">%</span> Rules
          </div>
          <div>
            <h2>Apply the agreed commission terms.</h2>
            <p>
              The rate and earning structure determine the calculation. Upfront
              and recurring terms must be understood before the total is
              reviewed.
            </p>
            <dl className="workflow-data">
              <div>
                <dt>Example agreed rate</dt>
                <dd>8%</dd>
              </div>
              <div>
                <dt>Information to check</dt>
                <dd>Rate and earning terms</dd>
              </div>
            </dl>
          </div>
        </article>
        <article>
          <div className="timeline-label">
            <span aria-hidden="true">=</span> Earnings
          </div>
          <div>
            <h2>Keep the calculation visible.</h2>
            <p>
              In this simple example, multiplying the contract value by the rate
              produces a $960 commission. The record should explain how that
              amount was calculated.
            </p>
            <div className="calculation-line">
              <span>
                $12,000 <small>contract value</small>
              </span>
              <b>×</b>
              <span>
                8% <small>agreed rate</small>
              </span>
              <b>=</b>
              <strong>
                $960 <small>commission</small>
              </strong>
            </div>
          </div>
        </article>
        <article>
          <div className="timeline-label">
            <span aria-hidden="true">→</span> Payout
          </div>
          <div>
            <h2>Review the payment date separately.</h2>
            <p>
              A commission calculation does not set a payment date. Use the
              agreement and your review process to confirm what is scheduled for
              each pay cycle.
            </p>
            <dl className="workflow-data">
              <div>
                <dt>Example payout timing</dt>
                <dd>Per agreement</dd>
              </div>
              <div>
                <dt>Information to check</dt>
                <dd>Payment terms and selected pay date</dd>
              </div>
            </dl>
          </div>
        </article>
      </section>
      <aside className="review-callout">
        <h2>Your team stays in control of the payout.</h2>
        <p>
          Review the agreement, rate, earning components, and payment date
          before deciding a commission is ready for payment.
        </p>
      </aside>
      <NextPage
        href="/sales-commission/reporting/"
        title="Reports & forecasts"
        text="See how earnings, scheduled payouts, and forecast scenarios answer different questions."
      />
    </ProductLayout>
  );
}
