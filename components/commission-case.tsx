export function CommissionCase() {
  return (
    <section className="services section" id="workflow">
      <div className="shell">
        <div className="client-case">
          <div className="case-heading">
            <div>
              <p className="case-badge">
                <span /> The workflow in practice
              </p>
              <h2>
                From commission confusion
                <br />
                to one controlled workflow.
              </h2>
            </div>
            <p>
              A connected commission process brings together contract
              information, commission rules, and payout timing. Here is how the
              workflow fits together.
            </p>
          </div>

          <div className="case-stage">
            <aside className="case-before">
              <p className="stage-label">Before automation</p>
              <h3>Every payout cycle became an investigation.</h3>
              <div className="paper-chaos" aria-hidden="true">
                <div className="paper contract-paper">
                  <span>CONTRACT</span>
                  <i />
                  <i />
                  <i />
                </div>
                <div className="paper sheet-paper">
                  <span>SPREADSHEET</span>
                  <i />
                  <i />
                  <i />
                </div>
                <div className="paper warning-paper">
                  <strong>?</strong>
                  <span>Which terms apply?</span>
                </div>
              </div>
              <ul>
                <li>Some commissions released before they were eligible</li>
                <li>Some earned commissions were overlooked</li>
                <li>Manual calculations created inconsistent results</li>
              </ul>
            </aside>

            <div
              className="case-engine"
              aria-label="AI Accounting Agency commission automation system"
            >
              <div className="engine-input">
                <span className="mini-document" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <p>
                  <small>Trigger</small>
                  <strong>Signed contract</strong>
                </p>
              </div>
              <div className="engine-stream" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <div className="engine-core">
                <span className="engine-ring ring-one" aria-hidden="true" />
                <span className="engine-ring ring-two" aria-hidden="true" />
                <div className="engine-center">
                  <small>Built-in</small>
                  <strong>AI</strong>
                  <span>Commission engine</span>
                </div>
                <div className="data-orbit data-one">Deal value</div>
                <div className="data-orbit data-two">Salesperson</div>
                <div className="data-orbit data-three">Rate + terms</div>
                <div className="data-orbit data-four">Payout date</div>
              </div>
              <div className="rule-gate">
                <span>Approved rules</span>
                <i />
                <strong>Compute · Validate · Route</strong>
              </div>
            </div>

            <aside className="case-after">
              <p className="stage-label">Controlled output</p>
              <h3>One record shows what is owed, when, and why.</h3>
              <div
                className="payout-board"
                aria-label="Example commission output"
              >
                <div className="board-top">
                  <span>Commission register</span>
                  <i />
                  <i />
                  <i />
                </div>
                <div className="board-row">
                  <span>Contract data</span>
                  <strong>Captured</strong>
                </div>
                <div className="board-row">
                  <span>Commission</span>
                  <strong>Calculated</strong>
                </div>
                <div className="board-row">
                  <span>Payout timing</span>
                  <strong>Verified</strong>
                </div>
                <div className="board-row flagged">
                  <span>Exceptions</span>
                  <strong>Human review</strong>
                </div>
              </div>
              <div className="case-results">
                <span>✓ Payout timing checked</span>
                <span>✓ Exceptions surfaced</span>
                <span>✓ Calculation support retained</span>
              </div>
            </aside>
          </div>

          <div className="control-ribbon">
            <strong>Automation handles the repeatable work.</strong>
            <span>
              Any missing or conflicting term stops at a review gate before it
              can affect the payout record.
            </span>
            <div className="shield-mark" aria-hidden="true">
              <i>✓</i>
            </div>
          </div>

          <div className="pattern-map">
            <div className="pattern-copy">
              <p className="eyebrow">One reusable finance pattern</p>
              <h3>
                The document changes.
                <br />
                The control system stays.
              </h3>
              <p>
                The same structure can turn other document-heavy finance work
                into an organized, reviewable process.
              </p>
            </div>
            <div
              className="pattern-illustration"
              aria-label="Reusable automation pattern"
            >
              <div className="pattern-line" aria-hidden="true" />
              <div className="pattern-node source-node">
                <i />
                <strong>Source</strong>
                <span>Document or event</span>
              </div>
              <div className="pattern-node extract-node">
                <i>AI</i>
                <strong>Extract</strong>
                <span>Required information</span>
              </div>
              <div className="pattern-node rules-node">
                <i>✓</i>
                <strong>Rules</strong>
                <span>Validate and calculate</span>
              </div>
              <div className="pattern-node record-node">
                <i />
                <strong>Record</strong>
                <span>Update the tracker</span>
              </div>
              <div className="pattern-node review-node">
                <i>!</i>
                <strong>Review</strong>
                <span>Only exceptions</span>
              </div>
            </div>
            <div className="pattern-examples">
              <span>Vendor invoices</span>
              <span>Payroll adjustments</span>
              <span>Client onboarding</span>
              <span>Recurring reporting</span>
              <span>Document approvals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
