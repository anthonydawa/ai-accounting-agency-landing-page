"use client";
import { FormEvent, useState } from "react";
import { bookingUrl } from "@/lib/site";
export function ContactSection() {
  const [draftUrl, setDraftUrl] = useState("");
  function prepareDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = `Name: ${data.get("name")}\nWork email: ${data.get("email")}\nCompany: ${data.get("company")}\nInterested in: ${data.get("need")}\n\n${data.get("message") ?? ""}`;
    setDraftUrl(
      `mailto:info@aiaccountingagency.com?subject=${encodeURIComponent(`Website inquiry: ${data.get("need")}`)}&body=${encodeURIComponent(body)}`,
    );
  }
  return (
    <section className="booking section" id="contact">
      <div className="shell">
        <div className="booking-heading">
          <p className="eyebrow">Your next step</p>
          <h2>
            Let’s simplify
            <br />
            <span>your next payout cycle.</span>
          </h2>
          <p>
            Start with Sales Commission, or tell us which financial workflow
            needs attention.
          </p>
        </div>
        <div className="conversion-grid">
          <div className="calendar-card">
            <div className="card-kicker">
              <span className="pulse" /> LET’S TALK
            </div>
            <h3>See what’s possible for your team.</h3>
            <p>
              Walk us through your commission process. We’ll discuss your rules,
              reporting needs, and the right next step.
            </p>
            <div className="calendar-placeholder">
              <div className="calendar-icon">
                <span>↗</span>
                <small>BOOK</small>
              </div>
              <div>
                <strong>A conversation, built around you.</strong>
                <p>Choose a time from our Google Calendar booking page.</p>
              </div>
            </div>
            <div className="calendar-benefits">
              <span>✓ Review your current workflow</span>
              <span>✓ See how Sales Commission works</span>
              <span>✓ Discuss scope and implementation</span>
            </div>
            <a
              className="button full"
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
            >
              Book a consultation ↗
            </a>
            <div className="booking-note">Opens Google Calendar</div>
          </div>
          <div className="form-card">
            <div className="card-kicker">PREFER EMAIL?</div>
            <h3>Tell us what you have in mind.</h3>
            <form onSubmit={prepareDraft} onChange={() => setDraftUrl("")}>
              <label>
                Your name
                <input
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Full name"
                />
              </label>
              <label>
                Work email
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                />
              </label>
              <label>
                Company
                <input
                  name="company"
                  required
                  autoComplete="organization"
                  placeholder="Company name"
                />
              </label>
              <label>
                I’m interested in
                <select name="need" defaultValue="Sales Commission">
                  <option>Sales Commission</option>
                  <option>Sales & Accounting Operations</option>
                  <option>Financial Reporting & Analytics</option>
                  <option>Payroll & Business Processes</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label>
                What would you like to improve?
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us a little about your workflow."
                />
              </label>
              <button className="button full" type="submit">
                Prepare my email ↗
              </button>
              <small>
                Creates an email draft for you to review and send in your email
                app.
              </small>
              {draftUrl && (
                <div className="email-ready" role="status">
                  <strong>Your email draft is ready.</strong>
                  <a href={draftUrl}>Open draft in my email app ↗</a>
                  <small>
                    Nothing has been sent. You can also email{" "}
                    <a href="mailto:info@aiaccountingagency.com">
                      info@aiaccountingagency.com
                    </a>{" "}
                    directly.
                  </small>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
