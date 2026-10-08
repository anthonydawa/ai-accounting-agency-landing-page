import Link from "next/link";
import Image from "next/image";
import { CommissionJourney } from "@/components/commission-journey";
import { PageInvitation } from "@/components/page-invitation";
import { ArticleCard } from "@/components/article-card";
import { articles } from "@/lib/articles";
import { assetBasePath, bookingUrl, services } from "@/lib/site";
export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <main id="main-content" className="home-page">
      <section className="home-hero shell">
        <div className="home-hero-copy">
          <p className="page-label">
            <span className="status-dot" aria-hidden="true" /> Sales Commission
          </p>
          <h1>
            Sales commissions,
            <br /> from contract
            <br /> to <span>payout.</span>
          </h1>
          <p className="home-lede">
            Manage contracts, track upfront and recurring commissions, and see
            what’s scheduled to be paid. Give sales and finance one place to
            understand the numbers.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/sales-commission/">
              Explore Sales Commission <span aria-hidden="true">→</span>
            </Link>
            <a
              className="text-link"
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
            >
              Book a demo ↗
            </a>
          </div>
          <div className="hero-founder">
            <Image
              src={`${assetBasePath}/angela-hernandez.png`}
              width={42}
              height={42}
              alt=""
            />
            <p>
              Developed with accounting expertise.
              <br />
              <strong>Led by Angela Hernandez, CPA, MBA.</strong>
            </p>
          </div>
        </div>
        <div className="home-example">
          <CommissionJourney />
          <p className="example-caption">
            The amount has an explanation. The payout has a date.
          </p>
        </div>
      </section>

      <section className="home-product-map">
        <div className="shell">
          <div className="split-heading">
            <div>
              <p className="page-label">What Sales Commission does</p>
              <h2>
                Keep the agreement,
                <br />
                the earnings, and the pay date together.
              </h2>
            </div>
            <p>
              When the numbers live in separate files, answering a simple
              commission question becomes a search. Sales Commission connects
              the details your team needs.
            </p>
          </div>
          <div className="home-feature-list">
            <article>
              <span className="feature-symbol" aria-hidden="true">
                ↳
              </span>
              <h3>Contracts</h3>
              <p>See the services, values, and dates behind a commission.</p>
            </article>
            <article>
              <span className="feature-symbol" aria-hidden="true">
                %
              </span>
              <h3>Earnings</h3>
              <p>
                Understand the upfront and recurring components of the total.
              </p>
            </article>
            <article>
              <span className="feature-symbol" aria-hidden="true">
                →
              </span>
              <h3>Payouts</h3>
              <p>
                Review scheduled commissions by pay date and download a summary.
              </p>
            </article>
          </div>
          <Link className="text-link" href="/sales-commission/how-it-works/">
            See how a contract becomes a commission →
          </Link>
        </div>
      </section>

      <section className="shell home-explore">
        <div>
          <p className="page-label">Explore the product</p>
          <h2>
            Find the answer
            <br />
            you came for.
          </h2>
        </div>
        <div className="question-links">
          <Link href="/sales-commission/">
            <span>
              <strong>What can our team manage?</strong>
              <small>Product overview and capabilities</small>
            </span>
            <span aria-hidden="true">→</span>
          </Link>
          <Link href="/sales-commission/reporting/">
            <span>
              <strong>What can we report and forecast?</strong>
              <small>Earnings, payout summaries, and scenarios</small>
            </span>
            <span aria-hidden="true">→</span>
          </Link>
          <Link href="/sales-commission/implementation/">
            <span>
              <strong>How would we get started?</strong>
              <small>Commission rules, data, and implementation</small>
            </span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="home-agency">
        <div className="shell home-agency-inner">
          <div className="agency-signature">
            <Image
              src={`${assetBasePath}/angela-hernandez.png`}
              width={210}
              height={240}
              alt="Angela Hernandez, founder of AI Accounting Agency"
            />
            <div>
              <p>Angela Hernandez</p>
              <span>CPA, MBA · Founder</span>
            </div>
          </div>
          <div>
            <p className="page-label">The agency behind the product</p>
            <h2>
              20+ years of financial strategy
              <br />
              and operational leadership.
            </h2>
            <p>
              We combine accounting expertise with automation to improve
              financial workflows. Sales Commission connects contracts,
              earnings, and payouts; our broader practice supports the work
              around it.
            </p>
            <Link className="text-link" href="/about-us/">
              Meet the agency →
            </Link>
          </div>
        </div>
      </section>

      <section className="shell home-services">
        <div className="section-heading-row">
          <div>
            <p className="page-label">Beyond Sales Commission</p>
            <h2>Accounting services.</h2>
          </div>
          <Link className="text-link" href="/services/">
            View all services →
          </Link>
        </div>
        <div className="home-services-list">
          {services.map((service) => (
            <Link key={service.slug} href={`/${service.slug}/`}>
              <h3>{service.title}</h3>
              <p>
                {service.items
                  .slice(0, 2)
                  .map((item) => item.title)
                  .join(" · ")}
              </p>
              <span aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-articles">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <p className="page-label">Learn from the agency</p>
              <h2>Commissions, accounting, and business workflows.</h2>
            </div>
            <Link className="text-link" href="/blog/">
              All articles →
            </Link>
          </div>
          <div className="article-grid">
            {articles.slice(0, 3).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
      <PageInvitation />
    </main>
  );
}
