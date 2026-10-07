import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";
export const metadata: Metadata = {
  title: "Contact & Product Walkthrough",
  description:
    "Book a Sales Commission walkthrough or contact AI Accounting Agency about accounting and financial workflow services.",
  alternates: { canonical: "/contact/" },
};
export default function ContactPage() {
  return (
    <main id="main-content" className="contact-page">
      <section className="page-intro shell">
        <p className="eyebrow">Contact AI Accounting Agency</p>
        <h1>
          Let’s look at
          <br />
          <em>your process.</em>
        </h1>
        <p>
          Start with a Sales Commission walkthrough, or tell us which accounting
          workflow needs attention.
        </p>
        <div className="contact-page-details">
          <a href="mailto:info@aiaccountingagency.com">
            info@aiaccountingagency.com
          </a>
          <a href="tel:+17026251966">702-625-1966</a>
        </div>
      </section>
      <ContactSection />
      <section className="shell contact-preparation">
        <div>
          <p className="eyebrow">For a useful first conversation</p>
          <h2>A little context goes a long way.</h2>
        </div>
        <ul>
          <li>
            Your current commission rules or the workflow you want to improve.
          </li>
          <li>The tools and records your team uses today.</li>
          <li>
            The questions, reports, or review steps that are difficult to
            follow.
          </li>
        </ul>
      </section>
    </main>
  );
}
