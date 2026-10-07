import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/site";
import { PageInvitation } from "@/components/page-invitation";
export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Sales Commission and the agency’s accounting operations, financial reporting, payroll, and business workflow services.",
  alternates: { canonical: "/services/" },
};
export default function ServicesPage() {
  return (
    <main id="main-content" className="services-hub">
      <section className="page-intro shell">
        <p className="eyebrow">The product and the practice</p>
        <h1>
          Choose where the work
          <br />
          needs <em>attention.</em>
        </h1>
        <p>
          Start with Sales Commission, or explore the financial operations that
          support the rest of your business.
        </p>
      </section>
      <section className="shell featured-product">
        <div>
          <p className="eyebrow">Our first product</p>
          <h2>Sales Commission</h2>
          <p>
            Connect contracts, commission earnings, payout schedules, and
            reporting in one workspace. Give sales and finance the context
            behind the amount.
          </p>
          <Link className="button" href="/sales-commission/">
            Explore the product
          </Link>
        </div>
        <div className="featured-product-index">
          <Link href="/sales-commission/how-it-works/">
            Contract to payout <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/sales-commission/reporting/">
            Reporting & forecasts <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/sales-commission/implementation/">
            Setup & implementation <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <section className="shell section services-hub-list">
        <p className="eyebrow">Beyond commissions</p>
        <h2>Accounting and workflow services.</h2>
        {services.map((service) => (
          <article key={service.slug}>
            <div>
              <h3>
                <Link href={`/${service.slug}/`}>{service.title}</Link>
              </h3>
              <p>{service.description}</p>
              <Link className="text-link" href={`/${service.slug}/`}>
                Explore this service
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
      <PageInvitation
        title="Which process is taking too much of your team’s time?"
        text="We’ll review the tools you use, the information you need, and the work that repeats before discussing a scope."
      />
    </main>
  );
}
