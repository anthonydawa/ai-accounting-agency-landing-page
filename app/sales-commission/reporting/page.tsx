import type { Metadata } from "next";
import Link from "next/link";
import { ProductNavigation } from "@/components/product-navigation";
import { PageInvitation } from "@/components/page-invitation";
export const metadata: Metadata = {
  title: "Commission Reporting & Forecasts",
  description:
    "Explore earnings visibility, dated payout summaries, and forecast scenarios in Sales Commission.",
  alternates: { canonical: "/sales-commission/reporting/" },
};
export default function ReportingPage() {
  return (
    <main id="main-content" className="product-detail-page">
      <ProductNavigation current="/sales-commission/reporting/" />
      <section className="page-intro shell">
        <p className="eyebrow">Sales Commission / reporting & forecasts</p>
        <h1>
          Know which numbers
          <br />
          you’re <em>looking at.</em>
        </h1>
        <p>
          Earned commissions, scheduled payouts, and forecast scenarios answer
          different questions. Keep those distinctions visible when your team
          reviews the picture.
        </p>
      </section>
      <section className="shell reporting-views">
        <article>
          <div className="report-label">Earnings</div>
          <div>
            <h2>What the recorded activity represents.</h2>
            <p>
              Review contract activity and the components behind upfront and
              recurring commissions. The amount should stay connected to the
              underlying services, values, and timing.
            </p>
            <ul>
              <li>Contract and service context.</li>
              <li>Upfront and recurring components.</li>
              <li>The basis for explaining the total.</li>
            </ul>
          </div>
        </article>
        <article>
          <div className="report-label">Payouts</div>
          <div>
            <h2>What is scheduled for a selected date.</h2>
            <p>
              Choose a payout date and download a commission summary for review
              and discussion. Keep commission amounts separate from base salary
              so the figures are easier to interpret.
            </p>
            <ul>
              <li>Dated commission schedules.</li>
              <li>A summary for the selected payout date.</li>
              <li>Context for finance and sales conversations.</li>
            </ul>
          </div>
        </article>
        <article>
          <div className="report-label">Forecasts</div>
          <div>
            <h2>What changes under your assumptions.</h2>
            <p>
              Explore how fees, rates, and deal volume affect projected
              commissions. A forecast is a scenario, rather than a promise of
              earned income or a payment instruction.
            </p>
            <ul>
              <li>Selected rate and fee assumptions.</li>
              <li>Deal-volume scenarios.</li>
              <li>Projected results considered beside scheduled amounts.</li>
            </ul>
          </div>
        </article>
      </section>
      <section className="reporting-example">
        <div className="shell">
          <div>
            <p className="eyebrow">Illustrative calculation</p>
            <h2>
              The same number can have
              <br />a different meaning.
            </h2>
            <p>
              $12,000 × 8% = $960. That could be a commission calculation based
              on recorded activity, or a projection based on an assumed deal.
              The source and status matter.
            </p>
          </div>
          <dl>
            <div>
              <dt>Recorded activity</dt>
              <dd>Review the agreement and earning components.</dd>
            </div>
            <div>
              <dt>Scheduled payout</dt>
              <dd>Review the relevant date and payment terms.</dd>
            </div>
            <div>
              <dt>Forecast scenario</dt>
              <dd>Review the assumptions used in the projection.</dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="shell section product-related">
        <p className="eyebrow">The setup behind the reporting</p>
        <Link href="/sales-commission/implementation/">
          <h2>Build the view around your rules.</h2>
          <p>See what we discuss before implementation →</p>
        </Link>
      </section>
      <PageInvitation />
    </main>
  );
}
