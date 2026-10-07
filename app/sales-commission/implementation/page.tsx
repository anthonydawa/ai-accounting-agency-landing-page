import type { Metadata } from "next";
import Link from "next/link";
import { ProductNavigation } from "@/components/product-navigation";
import { PageInvitation } from "@/components/page-invitation";
export const metadata: Metadata = {
  title: "Sales Commission Setup & Implementation",
  description:
    "Prepare for a Sales Commission walkthrough with your rules, contract sources, payout timing, and reporting needs.",
  alternates: { canonical: "/sales-commission/implementation/" },
};
export default function SetupPage() {
  return (
    <main id="main-content" className="product-detail-page">
      <ProductNavigation current="/sales-commission/implementation/" />
      <section className="page-intro shell">
        <p className="eyebrow">Sales Commission / setup & implementation</p>
        <h1>
          Your rules shape
          <br />
          <em>the setup.</em>
        </h1>
        <p>
          Start with the way commissions work in your business. The scope
          depends on your agreements, source records, review decisions, and
          reporting needs.
        </p>
      </section>
      <section className="shell setup-conversation">
        <div>
          <p className="eyebrow">What we discuss together</p>
          <h2>A useful starting point.</h2>
          <p>
            You do not need a perfectly organized process to begin. Bring what
            your team uses today and the questions that keep coming up.
          </p>
        </div>
        <div className="setup-topics">
          <article>
            <h3>The commission rules</h3>
            <p>
              Rates, upfront and recurring terms, salesperson assignments, and
              what determines a payout date.
            </p>
          </article>
          <article>
            <h3>The source information</h3>
            <p>
              Where contracts and service details are recorded, how values and
              dates are maintained, and which tools hold the information.
            </p>
          </article>
          <article>
            <h3>The review process</h3>
            <p>
              Who checks the calculation, how questions are resolved, and what
              should happen before a commission is scheduled for payment.
            </p>
          </article>
          <article>
            <h3>The reporting needs</h3>
            <p>
              What sales, finance, and leadership need to see, share, and
              discuss during each pay cycle.
            </p>
          </article>
        </div>
      </section>
      <section className="setup-scope">
        <div className="shell">
          <p className="eyebrow">Before agreeing an implementation</p>
          <h2>Make the scope explicit.</h2>
          <div>
            <article>
              <h3>Confirm the connected tools.</h3>
              <p>
                Specific integrations are confirmed during discovery. Start with
                your existing systems and the information they can provide.
              </p>
            </article>
            <article>
              <h3>Walk through representative examples.</h3>
              <p>
                Discuss a typical contract and any unusual terms so the
                calculation and reporting requirements are clear.
              </p>
            </article>
            <article>
              <h3>Agree the work and responsibilities.</h3>
              <p>
                Review the required setup, data preparation, and review
                ownership before deciding on an implementation.
              </p>
            </article>
          </div>
          <p className="scope-note">
            Pricing and timing depend on the agreed scope. We discuss the
            requirements before recommending a setup.
          </p>
        </div>
      </section>
      <section className="shell section product-related">
        <p className="eyebrow">A related need?</p>
        <Link href="/services/">
          <h2>The rest of the financial workflow.</h2>
          <p>Explore accounting, reporting, and payroll support →</p>
        </Link>
      </section>
      <PageInvitation />
    </main>
  );
}
