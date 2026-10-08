import type { Metadata } from "next";
import Link from "next/link";
import { ProductLayout } from "@/components/product-layout";
import { bookingUrl } from "@/lib/site";
import { SetupChecklist } from "@/components/setup-checklist";
export const metadata: Metadata = {
  title: "Sales Commission Setup & Implementation",
  description:
    "Plan Sales Commission implementation around your agreements, source records, review process, and reporting requirements.",
  alternates: { canonical: "/sales-commission/implementation/" },
};
export default function SetupPage() {
  return (
    <ProductLayout
      current="/sales-commission/implementation/"
      title="Set up Sales Commission for your business"
      description="We start with your commission rules and current process, then agree the data, reporting, and implementation work your team needs."
    >
      <section className="setup-start">
        <div>
          <p className="page-label">Start here</p>
          <h2>Book a product demo.</h2>
          <p>
            See the commission workflow and talk through a typical contract from
            your business. You can bring your current spreadsheets or records.
          </p>
          <a
            className="button"
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
          >
            Choose a demo time ↗
          </a>
        </div>
        <div className="prepare-list">
          <SetupChecklist />
        </div>
      </section>
      <section className="content-section">
        <h2>What we clarify before implementation</h2>
        <div className="setup-decisions">
          <article>
            <h3>Your commission rules</h3>
            <p>
              Rates, upfront and recurring terms, salesperson assignments, and
              what determines a payout date.
            </p>
            <span>Agreed calculation requirements</span>
          </article>
          <article>
            <h3>Your source records</h3>
            <p>
              Where contracts, service details, values, and dates are
              maintained. Specific integrations are confirmed during discovery.
            </p>
            <span>Confirmed data sources and connected tools</span>
          </article>
          <article>
            <h3>Your review process</h3>
            <p>
              Who checks a commission, how questions are resolved, and what must
              happen before payment is scheduled.
            </p>
            <span>Clear review responsibilities</span>
          </article>
          <article>
            <h3>Your reporting needs</h3>
            <p>
              The earnings, payout summaries, and forecasts that sales, finance,
              and leadership need to review.
            </p>
            <span>Defined reports and scope</span>
          </article>
        </div>
      </section>
      <section className="implementation-scope">
        <h2>Agree the scope before starting.</h2>
        <p>
          Setup, data preparation, responsibilities, pricing, and timing depend
          on your requirements. We discuss those together before recommending an
          implementation.
        </p>
        <Link className="text-link" href="/contact/">
          Send us your requirements →
        </Link>
      </section>
    </ProductLayout>
  );
}
