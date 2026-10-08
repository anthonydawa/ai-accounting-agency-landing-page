import type { Metadata } from "next";
import { ProductLayout } from "@/components/product-layout";
import { NextPage } from "@/components/next-page";
import { ReportExplorer } from "@/components/report-explorer";
export const metadata: Metadata = {
  title: "Commission Reports & Forecasts",
  description:
    "Review commission earnings, dated payout summaries, and forecast scenarios for sales and finance.",
  alternates: { canonical: "/sales-commission/reporting/" },
};
export default function ReportingPage() {
  return (
    <ProductLayout
      current="/sales-commission/reporting/"
      title="Commission reports & forecasts"
      description="See what has been earned, what is scheduled for payment, and what might happen under different assumptions."
    >
      <ReportExplorer />
      <section className="content-section">
        <h2>Use the right view for the question.</h2>
        <div className="report-use-list">
          <article>
            <h3>“How was this commission calculated?”</h3>
            <p>
              Review earnings with the underlying contract, services, and
              upfront or recurring components.
            </p>
            <span>Earnings view</span>
          </article>
          <article>
            <h3>“What is scheduled for this pay date?”</h3>
            <p>
              Select a payout date and download a commission summary to support
              review and discussion.
            </p>
            <span>Payout summary</span>
          </article>
          <article>
            <h3>“What happens if our sales assumptions change?”</h3>
            <p>
              Explore fees, rates, and deal-volume scenarios. The results depend
              on the assumptions entered.
            </p>
            <span>Forecast view</span>
          </article>
        </div>
      </section>
      <aside className="review-callout">
        <h2>Keep forecasts separate from earned amounts.</h2>
        <p>
          A projected commission is a planning scenario. An earned commission
          comes from recorded activity. A payout schedule adds the payment
          timing.
        </p>
      </aside>
      <NextPage
        href="/sales-commission/implementation/"
        title="Setup & implementation"
        text="See the rules, records, and responsibilities we discuss before implementation."
      />
    </ProductLayout>
  );
}
