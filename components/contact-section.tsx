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
    <section className="contact-options" aria-label="Ways to contact us">
      <div className="contact-booking">
        <span className="option-label">A conversation</span>
        <h2>Choose a time to meet.</h2>
        <p>
          For a Sales Commission demo, bring a sample agreement, your commission
          rules, and the tools your team uses today.
        </p>
        <a
          className="button"
          href={bookingUrl}
          target="_blank"
          rel="noreferrer"
        >
          Book a demo or consultation ↗
        </a>
        <small>Opens our booking page in Google Calendar.</small>
        <div className="contact-direct">
          <h3>Contact us directly</h3>
          <a href="mailto:info@aiaccountingagency.com">
            info@aiaccountingagency.com
          </a>
          <a href="tel:+17026251966">702-625-1966</a>
        </div>
      </div>
      <div className="form-card">
        <span className="option-label">An email introduction</span>
        <h2>Tell us what you need.</h2>
        <p>Prepare an email with a little context for our team.</p>
        <form onSubmit={prepareDraft} onChange={() => setDraftUrl("")}>
          <div className="form-row">
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
          </div>
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
              rows={4}
              placeholder="Your current process, questions, or reporting needs."
            />
          </label>
          <button className="button" type="submit">
            Prepare my email →
          </button>
          <small>
            This creates a draft to review and send in your email app.
          </small>
          {draftUrl && (
            <div className="email-ready" role="status">
              <strong>Your email draft is ready.</strong>
              <a href={draftUrl}>Open draft in my email app</a>
              <small>
                Nothing has been sent. Review and send it from your email app.
              </small>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
