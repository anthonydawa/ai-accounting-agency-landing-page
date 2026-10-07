import { bookingUrl } from "@/lib/site";
export function CommissionCase() {
  return (
    <section
      className="commission-path"
      id="workflow"
      aria-labelledby="workflow-title"
    >
      <div className="shell">
        <div className="path-heading">
          <div>
            <p className="eyebrow">How the information connects</p>
            <h2 id="workflow-title">
              Follow a deal
              <br />
              through to its <em>payout.</em>
            </h2>
          </div>
          <p>
            The amount, its basis, and its timing belong together. Here’s the
            path your team should be able to follow.
          </p>
        </div>
        <div className="deal-path">
          <article>
            <span className="path-label">Source</span>
            <h3>The contract</h3>
            <p>
              Start with recorded services, deal value, the salesperson, and
              relevant dates.
            </p>
          </article>
          <article>
            <span className="path-label">Basis</span>
            <h3>The rules</h3>
            <p>
              Connect the agreed rates and terms to upfront and recurring
              commission earnings.
            </p>
          </article>
          <article>
            <span className="path-label">Amount</span>
            <h3>The earnings</h3>
            <p>
              Keep the calculation components visible so the amount can be
              explained and reviewed.
            </p>
          </article>
          <article>
            <span className="path-label">Timing</span>
            <h3>The pay date</h3>
            <p>
              See scheduled commissions by payout date and download a summary
              for review.
            </p>
          </article>
        </div>
        <div className="review-boundary">
          <strong>Financial review stays in the picture.</strong>
          <p>
            A signed contract and a payable commission are different events.
            Your agreement and review process determine when payment is due.
          </p>
        </div>
        <div className="path-next">
          <p>Let’s walk through how this fits your commission process.</p>
          <a
            className="button"
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
          >
            Book a product walkthrough <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
