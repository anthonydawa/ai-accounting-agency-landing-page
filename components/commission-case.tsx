export function CommissionCase() {
  return (
    <section className="workflow section" id="workflow">
      <div className="shell workflow-layout">
        <div className="workflow-intro">
          <p className="eyebrow">Inside the workflow</p>
          <h2>The record behind the payout.</h2>
          <p>
            A payout amount is only useful when your team can trace it back to
            the agreement. Sales Commission connects that information in one
            workspace.
          </p>
          <p className="margin-note">
            The details matter:
            <br />a signed deal and a payable commission are different events.
          </p>
        </div>
        <div className="workflow-record">
          <div className="record-heading">
            <span>Commission review file</span>
            <span>From source to schedule</span>
          </div>
          <dl>
            <div>
              <dt>Source</dt>
              <dd>
                <strong>The contract</strong>
                <p>
                  Recorded services, deal value, salesperson, and relevant
                  dates.
                </p>
              </dd>
            </div>
            <div>
              <dt>Basis</dt>
              <dd>
                <strong>The agreed rules</strong>
                <p>
                  Rates and terms that explain upfront and recurring earnings.
                </p>
              </dd>
            </div>
            <div>
              <dt>Calculation</dt>
              <dd>
                <strong>The commission breakdown</strong>
                <p>
                  Keep the components visible so finance can review the amount.
                </p>
              </dd>
            </div>
            <div>
              <dt>Timing</dt>
              <dd>
                <strong>The payout schedule</strong>
                <p>
                  See scheduled commissions by pay date, separate from base
                  salary.
                </p>
              </dd>
            </div>
            <div>
              <dt>Review</dt>
              <dd>
                <strong>A conversation with context</strong>
                <p>
                  Use the record and commission summary to discuss questions
                  before payment.
                </p>
              </dd>
            </div>
          </dl>
          <p className="record-footnote">
            Your commission rules, data sources, and review process shape the
            setup.
          </p>
        </div>
      </div>
    </section>
  );
}
