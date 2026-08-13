"use client";

import { FormEvent, useState } from "react";

const bookingUrl = "https://calendar.app.google/gN5dqSemjJaRcWRg7";
const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const outcomes = [
  {
    number: "01",
    metric: "Lower operating drag",
    title: "More capacity. Less administrative cost.",
    text: "Reduce the recurring labor spent moving information between systems, rebuilding spreadsheets, processing documents, and repeating routine accounting tasks.",
    items: ["Fewer manual touchpoints", "Less repetitive processing", "More staff capacity"],
  },
  {
    number: "02",
    metric: "Faster decisions",
    title: "See what is happening sooner.",
    text: "Turn scattered financial data into timely reporting, cash-flow visibility, and performance insights so leaders can respond before problems become expensive.",
    items: ["Quicker reporting cycles", "Earlier cash-flow signals", "Current performance visibility"],
  },
  {
    number: "03",
    metric: "Stronger control",
    title: "Fewer errors. Less rework.",
    text: "Build repeatable workflows that flag exceptions, reduce duplicate entry, and create a clearer trail across accounting, commissions, payroll, and documents.",
    items: ["Automatic exception flags", "More consistent processes", "Clearer audit trails"],
  },
];

const faqs = [
  {
    q: "Do we have to replace the tools we already use?",
    a: "Usually, no. The first step is understanding your current systems and building practical workflows around the tools that already support your business.",
  },
  {
    q: "Is this only for large companies?",
    a: "No. The work is designed for growing small and mid-sized businesses that need more reliable financial operations without adding unnecessary complexity.",
  },
  {
    q: "Does automation replace accounting judgment?",
    a: "No. Automation handles repeatable work and organizes information; qualified financial oversight remains central to reviewing results and making decisions.",
  },
  {
    q: "What happens during the first call?",
    a: "We discuss where work is manual, delayed, or disconnected, identify the most valuable area to review first, and decide whether a deeper workflow assessment makes sense.",
  },
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <div className="announcement">
        <span className="pulse" aria-hidden="true" />
        Now booking complimentary 30-minute workflow consultations
      </div>

      <section className="hero" id="top">
        <div className="hero-grid shell">
          <div className="hero-copy">
            <h1>
              Less manual work.<br />
              <span>Clearer numbers.</span><br />
              More room to grow.
            </h1>
            <p className="hero-lede">
              We help growing companies reduce the cost of repetitive financial work,
              get clearer information sooner, and build a back office that can scale
              without adding the same amount of administrative overhead.
            </p>
            <div className="hero-actions">
              <a className="button" href={bookingUrl} target="_blank" rel="noreferrer">View live availability <span>↗</span></a>
              <a className="text-link" href="#results">See the outcomes <span>↓</span></a>
            </div>
            <div className="trust-line" aria-label="Company qualifications">
              <span>Licensed CPA</span><i />
              <span>MBA</span><i />
              <span>20+ years of experience</span>
            </div>
          </div>

          <div className="hero-media">
            <div className="portrait-collage">
              <img
                className="portrait-main"
                src={`${assetBasePath}/angela-hernandez.png`}
                alt="Angela Hernandez, founder of AI Accounting Agency"
              />
              <div className="portrait-caption-floating">
                <strong>Angela Hernandez, CPA, MBA</strong>
                <small>Founder &amp; CEO</small>
              </div>
              <div className="portrait-proof"><strong>20+</strong><span>years in finance<br />&amp; operations</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="transformation section" aria-labelledby="transformation-title">
        <div className="workflow-glow workflow-glow-one" aria-hidden="true" />
        <div className="workflow-glow workflow-glow-two" aria-hidden="true" />
        <div className="shell transformation-inner">
          <div className="transformation-heading">
            <p className="eyebrow light">The operational payoff</p>
            <h2 id="transformation-title">What changes when your back office<br /><span>works as fast as your business.</span></h2>
            <p>Less of your team’s week spent moving information. More time to understand it, act on it, and grow with control.</p>
          </div>
          <div className="outcome-path" aria-hidden="true"><span /><span /><span /></div>
          <div className="impact-grid">
            <article className="impact-card">
              <div className="impact-icon"><span>01</span><i className="capacity-icon" /></div>
              <p className="impact-kicker">Reclaim operating capacity</p>
              <h3>Give valuable hours back to the team.</h3>
              <p>Reduce recurring entry, reconciliation, document handling, and spreadsheet handoffs so skilled people can focus on work that needs judgment.</p>
            </article>
            <article className="impact-card featured">
              <div className="impact-icon"><span>02</span><i className="visibility-icon" /></div>
              <p className="impact-kicker">Reduce decision lag</p>
              <h3>See the numbers while they can still help.</h3>
              <p>Shorten the distance between business activity and useful reporting, giving leaders earlier visibility into cash, performance, and exceptions.</p>
            </article>
            <article className="impact-card">
              <div className="impact-icon"><span>03</span><i className="scale-icon" /></div>
              <p className="impact-kicker">Scale with less overhead</p>
              <h3>Grow volume without matching it with admin.</h3>
              <p>Build repeatable workflows that handle more activity without requiring administrative cost to rise at the same pace.</p>
            </article>
          </div>
          <div className="transformation-cta">
            <p><strong>Your biggest opportunity may already be hiding in a task your team repeats every week.</strong><span>We’ll help you identify where time, cost, and visibility are being lost.</span></p>
            <a className="button coral" href={bookingUrl} target="_blank" rel="noreferrer">Find my biggest savings opportunity <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="services section" id="results">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Results that matter</p>
              <h2>Spend less effort running<br />the back office.</h2>
            </div>
          </div>
          <div className="service-grid">
            {outcomes.map((outcome) => (
              <article className="service-card" key={outcome.number}>
                <div className="service-topline"><span>{outcome.number}</span><strong>{outcome.metric}</strong></div>
                <h3>{outcome.title}</h3>
                <p>{outcome.text}</p>
                <ul>
                  {outcome.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="client-case">
            <div className="case-heading">
              <div>
                <p className="case-badge"><span /> Real client use case</p>
                <h3>We turned commission confusion<br />into one controlled workflow.</h3>
              </div>
              <p>The client’s team was dealing with commissions paid too early, others that were missed, and calculations that did not consistently match the contract. We built one automated path from signature to review-ready payout data.</p>
            </div>

            <div className="case-stage">
              <aside className="case-before">
                <p className="stage-label">Before automation</p>
                <h4>Every payout cycle became an investigation.</h4>
                <div className="paper-chaos" aria-hidden="true">
                  <div className="paper contract-paper"><span>CONTRACT</span><i /><i /><i /></div>
                  <div className="paper sheet-paper"><span>SPREADSHEET</span><i /><i /><i /></div>
                  <div className="paper warning-paper"><strong>?</strong><span>Which terms apply?</span></div>
                </div>
                <ul>
                  <li>Some commissions released before they were eligible</li>
                  <li>Some earned commissions were overlooked</li>
                  <li>Manual calculations created inconsistent results</li>
                </ul>
              </aside>

              <div className="case-engine" aria-label="AI Accounting Agency commission automation system">
                <div className="engine-input"><span className="mini-document" aria-hidden="true"><i /><i /><i /></span><p><small>Trigger</small><strong>Signed contract</strong></p></div>
                <div className="engine-stream" aria-hidden="true"><i /><i /><i /></div>
                <div className="engine-core">
                  <span className="engine-ring ring-one" aria-hidden="true" />
                  <span className="engine-ring ring-two" aria-hidden="true" />
                  <div className="engine-center"><small>Built-in</small><strong>AI</strong><span>Commission engine</span></div>
                  <div className="data-orbit data-one">Deal value</div>
                  <div className="data-orbit data-two">Salesperson</div>
                  <div className="data-orbit data-three">Rate + terms</div>
                  <div className="data-orbit data-four">Payout date</div>
                </div>
                <div className="rule-gate"><span>Approved rules</span><i /><strong>Compute · Validate · Route</strong></div>
              </div>

              <aside className="case-after">
                <p className="stage-label">Controlled output</p>
                <h4>One record shows what is owed, when, and why.</h4>
                <div className="payout-board" aria-label="Example commission output">
                  <div className="board-top"><span>Commission register</span><i /><i /><i /></div>
                  <div className="board-row"><span>Contract data</span><strong>Captured</strong></div>
                  <div className="board-row"><span>Commission</span><strong>Calculated</strong></div>
                  <div className="board-row"><span>Payout timing</span><strong>Verified</strong></div>
                  <div className="board-row flagged"><span>Exceptions</span><strong>Human review</strong></div>
                </div>
                <div className="case-results"><span>✓ No premature payout</span><span>✓ No silent omission</span><span>✓ Calculation support retained</span></div>
              </aside>
            </div>

            <div className="control-ribbon">
              <strong>Automation handles the repeatable work.</strong>
              <span>Any missing or conflicting term stops at a review gate before it can affect the payout record.</span>
              <div className="shield-mark" aria-hidden="true"><i>✓</i></div>
            </div>

            <div className="pattern-map">
              <div className="pattern-copy">
                <p className="eyebrow">One reusable finance pattern</p>
                <h4>The document changes.<br />The control system stays.</h4>
                <p>The same structure can turn other document-heavy finance work into an organized, reviewable process.</p>
              </div>
              <div className="pattern-illustration" aria-label="Reusable automation pattern">
                <div className="pattern-line" aria-hidden="true" />
                <div className="pattern-node source-node"><i /><strong>Source</strong><span>Document or event</span></div>
                <div className="pattern-node extract-node"><i>AI</i><strong>Extract</strong><span>Required information</span></div>
                <div className="pattern-node rules-node"><i>✓</i><strong>Rules</strong><span>Validate and calculate</span></div>
                <div className="pattern-node record-node"><i /><strong>Record</strong><span>Update the tracker</span></div>
                <div className="pattern-node review-node"><i>!</i><strong>Review</strong><span>Only exceptions</span></div>
              </div>
              <div className="pattern-examples"><span>Vendor invoices</span><span>Payroll adjustments</span><span>Client onboarding</span><span>Recurring reporting</span><span>Document approvals</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="booking section" id="book">
        <div className="shell">
          <div className="booking-heading">
            <p className="eyebrow">Your next step</p>
            <h2>Where is manual work<br />slowing your business down?</h2>
            <p>Choose a time to talk directly, or send a short note and we’ll follow up.</p>
          </div>

          <div className="conversion-grid">
            <div className="calendar-card">
              <div className="card-kicker"><span className="pulse" /> OPTION 1 · FASTEST</div>
              <h3>Book a free 30-minute consultation</h3>
              <p>Choose an available time directly from the connected Google Calendar.</p>
              <div className="calendar-placeholder">
                <div className="calendar-icon"><span>30</span><small>MIN</small></div>
                <div>
                  <strong>Live calendar availability</strong>
                  <p>Unavailable times are removed automatically, so every displayed appointment can be booked.</p>
                </div>
              </div>
              <div className="calendar-benefits">
                <span>✓ Select your date and time</span>
                <span>✓ Receive an automatic confirmation</span>
                <span>✓ Google Meet details included after booking</span>
              </div>
              <a className="button full" href={bookingUrl} target="_blank" rel="noreferrer">Choose a time in Google Calendar <span>↗</span></a>
              <div className="booking-note">Live availability · Automatic confirmation · Google Meet</div>
            </div>

            <div className="form-card">
              <div className="card-kicker">OPTION 2 · SEND A NOTE</div>
              <h3>Tell us what you want to improve</h3>
              {submitted ? (
                <div className="form-success" role="status">
                  <div>✓</div>
                  <h4>Your form design is ready.</h4>
                  <p>Connect this form to your preferred form service before launch so submissions are delivered to the team.</p>
                  <button type="button" className="text-link dark" onClick={() => setSubmitted(false)}>Send another response</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="field-row">
                    <label>First name<input name="firstName" required placeholder="First name" /></label>
                    <label>Last name<input name="lastName" required placeholder="Last name" /></label>
                  </div>
                  <label>Work email<input name="email" type="email" required placeholder="you@company.com" /></label>
                  <label>Company<input name="company" required placeholder="Company name" /></label>
                  <label>Where is the biggest bottleneck?
                    <select name="need" defaultValue="">
                      <option value="" disabled>Select one</option>
                      <option>Accounting workflows</option>
                      <option>Financial reporting</option>
                      <option>Payroll or commissions</option>
                      <option>Document processing</option>
                      <option>Not sure yet</option>
                    </select>
                  </label>
                  <label>Anything else we should know?<textarea name="message" rows={3} placeholder="A short note is perfect." /></label>
                  <button className="button full" type="submit">Request my consultation <span>↗</span></button>
                  <small>By submitting, you agree to be contacted about your request.</small>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="faq section shell">
        <div className="faq-heading">
          <p className="eyebrow">Questions, answered</p>
          <h2>Before we talk.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}<span>+</span></summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-cta shell">
          <div>
            <span className="brand footer-brand"><img className="brand-logo" src={`${assetBasePath}/brand-logo.png`} alt="" /><span>Accounting Agency</span></span>
            <h2>Make the back office<br />work for the business.</h2>
          </div>
          <a className="button coral" href={bookingUrl} target="_blank" rel="noreferrer">View live availability <span>↗</span></a>
        </div>
        <div className="footer-bottom shell">
          <div>© 2026 AI Accounting Agency. All rights reserved.</div>
          <div className="socials">
            <a href="https://www.instagram.com/ai_accountingagency/" target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href="https://www.linkedin.com/company/aiaccountingagency/home/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://www.aiaccountingagency.com/" target="_blank" rel="noreferrer">Main website ↗</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
