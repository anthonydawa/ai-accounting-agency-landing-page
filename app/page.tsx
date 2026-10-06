import Link from "next/link";
import Image from "next/image";
import { ProductPreview } from "@/components/product-preview";
import { CommissionCase } from "@/components/commission-case";
import { ContactSection } from "@/components/contact-section";
import { ArticleCard } from "@/components/article-card";
import { articles } from "@/lib/articles";
import { assetBasePath, bookingUrl, faqs, services } from "@/lib/site";
export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero" id="top">
        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow product-eyebrow">
              Our first product / Sales Commission
            </p>
            <h1>
              The deal is signed.
              <br />
              The commission
              <br />
              should be <em>clear.</em>
            </h1>
            <p className="hero-lede">
              Bring contracts, earnings, and payout schedules into one connected
              workflow. Give sales and finance a shared record of what’s owed,
              when, and why.
            </p>
            <div className="hero-actions">
              <a
                className="button"
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
              >
                Book a product walkthrough
              </a>
              <a className="text-link" href="#workflow">
                See the working details
              </a>
            </div>
            <p className="hero-note">
              Developed with accounting expertise.
              <br />
              Built around your commission rules.
            </p>
          </div>
          <div className="product-media">
            <ProductPreview />
          </div>
        </div>
        <div className="hero-bottom shell">
          <span>
            AI Accounting Agency · Financial expertise applied to everyday work.
          </span>
          <Link href="/sales-commission/">Explore the product ↗</Link>
        </div>
      </section>
      <section
        className="transformation section shell"
        aria-labelledby="transformation-title"
      >
        <div className="transformation-heading">
          <p className="eyebrow">A shared point of reference</p>
          <h2 id="transformation-title">
            A shared record for every payout conversation.
          </h2>
          <p>
            Commission questions cross departments. The information should
            travel with them.
          </p>
        </div>
        <div className="audience-ledger">
          <article>
            <h3>Sales</h3>
            <div>
              <strong>What have I earned?</strong>
              <p>
                See contract activity, upfront and recurring earnings, and
                upcoming payouts in a shared workspace.
              </p>
            </div>
          </article>
          <article>
            <h3>Finance</h3>
            <div>
              <strong>What supports this amount?</strong>
              <p>
                Review the commission rules, calculation context, and payout
                timing together.
              </p>
            </div>
          </article>
          <article>
            <h3>Leadership</h3>
            <div>
              <strong>What should we plan for?</strong>
              <p>
                Track scheduled commissions and explore how different
                assumptions affect forecasts.
              </p>
            </div>
          </article>
        </div>
      </section>
      <CommissionCase />
      <section className="secondary-services section shell" id="services">
        <div className="section-heading heading-with-link">
          <div>
            <p className="eyebrow">The broader practice</p>
            <h2>Accounting for the rest of the business.</h2>
          </div>
          <p>
            Start with commissions. When another financial process needs
            attention, our accounting and workflow services can help.
          </p>
        </div>
        <div className="service-directory">
          {services.map((service) => (
            <Link
              key={service.slug}
              className="service-entry"
              href={`/${service.slug}/`}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="home-about section">
        <div className="shell home-about-grid">
          <figure className="home-founder-photo">
            <Image
              src={`${assetBasePath}/angela-hernandez.png`}
              width={700}
              height={800}
              alt="Angela Hernandez, founder of AI Accounting Agency"
            />
            <figcaption>
              <strong>Angela Hernandez, CPA, MBA</strong>
              <span>Founder, AI Accounting Agency</span>
            </figcaption>
          </figure>
          <div className="about-copy">
            <p className="eyebrow">The person behind the practice</p>
            <h2>
              Before the automation,
              <br />
              <em>there’s judgment.</em>
            </h2>
            <p>
              Angela Hernandez is a licensed CPA with an MBA and more than 20
              years of experience in financial strategy and operational
              leadership.
            </p>
            <p>
              She founded AI Accounting Agency to bring that experience to the
              everyday processes of growing businesses. The work starts with
              understanding your numbers, your people, and how information moves
              between them.
            </p>
            <Link className="text-link" href="/about-us/">
              Meet Angela and the agency
            </Link>
          </div>
        </div>
      </section>
      <section className="journal section shell" id="articles">
        <div className="section-heading heading-with-link">
          <div>
            <p className="eyebrow">Articles & observations</p>
            <h2>The agency journal.</h2>
          </div>
          <Link className="text-link" href="/blog/">
            Browse the journal
          </Link>
        </div>
        <div className="journal-layout">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
      <ContactSection />
      <section className="faq section shell">
        <div className="faq-heading">
          <p className="eyebrow">A few practical questions</p>
          <h2>Before we talk.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>
                {faq.q}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
