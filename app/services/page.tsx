import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/site";
import { PageContext } from "@/components/page-context";
import { PageInvitation } from "@/components/page-invitation";
export const metadata: Metadata = {
  title: "Accounting Automation Services",
  description:
    "Sales reconciliation, financial reporting, payroll, and business process support from AI Accounting Agency.",
  alternates: { canonical: "/services/" },
};
const problems = [
  "Sales payouts and bank deposits do not match your records.",
  "You need clearer cash flow, performance, and planning reports.",
  "Timesheets, onboarding, and approvals need a repeatable process.",
];
export default function ServicesPage() {
  return (
    <main id="main-content" className="services-page">
      <div className="shell">
        <PageContext current="Accounting services" />
        <header className="services-heading">
          <div>
            <p className="page-label">Services from AI Accounting Agency</p>
            <h1>
              Accounting automation
              <br />
              for your everyday operations.
            </h1>
            <p className="page-description">
              Alongside Sales Commission, we help with reconciliation, financial
              reporting, payroll, and the business workflows that connect them.
            </p>
          </div>
          <aside>
            <strong>A service built around your process.</strong>
            <p>
              We review your current tools, recurring work, and control
              requirements before agreeing a scope.
            </p>
            <Link className="text-link" href="/contact/">
              Discuss your requirements →
            </Link>
          </aside>
        </header>
        <section
          className="service-selection"
          aria-label="Choose an accounting service"
        >
          {services.map((service, index) => (
            <article
              key={service.slug}
              className={`service-selection-item service-tone-${index}`}
            >
              <div className="service-category-mark" aria-hidden="true">
                {["↳", "≋", "→"][index]}
              </div>
              <div>
                <p className="service-problem">{problems[index]}</p>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <Link
                  className="button button-outline"
                  href={`/${service.slug}/`}
                >
                  View this service →
                </Link>
              </div>
              <ul>
                {service.items.map((item) => (
                  <li key={item.title}>{item.title}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
        <section className="commission-service-link">
          <div>
            <p className="page-label">Our dedicated product</p>
            <h2>Need to manage sales commissions?</h2>
            <p>
              Sales Commission connects your contracts, commission earnings,
              payout schedules, and forecasts.
            </p>
          </div>
          <Link className="button" href="/sales-commission/">
            Explore Sales Commission →
          </Link>
        </section>
      </div>
      <PageInvitation
        service
        title="Talk to us about your accounting process."
        text="Tell us what takes time, where information gets lost, and which tools your team uses. We’ll discuss the work your business needs."
      />
    </main>
  );
}
