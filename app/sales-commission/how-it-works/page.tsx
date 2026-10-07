import type { Metadata } from "next";
import Link from "next/link";
import { ProductNavigation } from "@/components/product-navigation";
import { CommissionCase } from "@/components/commission-case";
import { ProductPreview } from "@/components/product-preview";
import { PageInvitation } from "@/components/page-invitation";
export const metadata: Metadata = {
  title: "How Sales Commission Works",
  description:
    "Follow contract information, agreed rates, earnings calculations, and payout schedules through a reviewable commission workflow.",
  alternates: { canonical: "/sales-commission/how-it-works/" },
};
export default function WorkflowPage() {
  return (
    <main id="main-content" className="product-detail-page">
      <ProductNavigation current="/sales-commission/how-it-works/" />
      <section className="page-intro shell">
        <p className="eyebrow">Sales Commission / how it works</p>
        <h1>
          Keep the explanation
          <br />
          <em>with the number.</em>
        </h1>
        <p>
          A commission process needs more than a total. Your team needs to
          understand the contract, the agreed rules, the earnings components,
          and the timing behind it.
        </p>
      </section>
      <CommissionCase />
      <section className="shell section product-explanation">
        <div>
          <p className="eyebrow">A straightforward example</p>
          <h2>From an agreed rate to a reviewable amount.</h2>
          <p>
            A contract value of $12,000 at an agreed rate of 8% gives a $960
            commission in this simplified example.
          </p>
          <p>
            The calculation alone does not decide when payment is due. Upfront
            or recurring terms, the relevant dates, and your review process are
            part of the setup.
          </p>
          <p className="example-caveat">
            Illustrative amounts only. Actual calculations depend on your
            agreement.
          </p>
        </div>
        <ProductPreview />
      </section>
      <section className="product-review-notes">
        <div className="shell">
          <div>
            <p className="eyebrow">Questions to settle before a payout</p>
            <h2>
              What finance needs
              <br />
              to be able to check.
            </h2>
          </div>
          <ul>
            <li>
              Which recorded contract and service the commission relates to.
            </li>
            <li>Which rate and terms apply to that earning component.</li>
            <li>How upfront and recurring amounts are represented.</li>
            <li>
              Which payout date is being reviewed and what still needs
              clarification.
            </li>
          </ul>
        </div>
      </section>
      <section className="shell section product-related">
        <p className="eyebrow">Continue exploring</p>
        <Link href="/sales-commission/reporting/">
          <h2>See the reporting views.</h2>
          <p>Earnings, payout summaries, and forecast scenarios →</p>
        </Link>
      </section>
      <PageInvitation />
    </main>
  );
}
