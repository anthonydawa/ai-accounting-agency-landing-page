import Link from "next/link";
import Image from "next/image";
import { ProductPreview } from "@/components/product-preview";
import { ProductBenefits } from "@/components/product-benefits";
import { CommissionCase } from "@/components/commission-case";
import { ContactSection } from "@/components/contact-section";
import { ArticleCard } from "@/components/article-card";
import { articles } from "@/lib/articles";
import { assetBasePath, bookingUrl, faqs, services } from "@/lib/site";
export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <main id="main-content" className="agency-home">
      <section className="hero" id="top">
        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow product-eyebrow">
              Sales Commission by AI Accounting Agency
            </p>
            <h1>
              Know what’s earned.
              <br />
              See when it’s <em>due.</em>
            </h1>
            <p className="hero-lede">
              Sales Commission connects your contracts, commission earnings, and
              payout schedules. Give sales and finance the details behind every
              payout, in one workspace.
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
              <a className="text-link" href="#product-fit">
                Find your team’s view
              </a>
            </div>
            <p className="hero-note">
              CPA-led expertise. A setup shaped by your commission rules.
            </p>
          </div>
          <div className="product-media">
            <ProductPreview />
          </div>
        </div>
      </section>
      <nav className="product-toc" aria-label="Explore Sales Commission">
        <div className="shell">
          <strong>Sales Commission</strong>
          <a href="#product-fit">Your team’s view</a>
          <a href="#workflow">How it works</a>
          <a href="#agency">The expertise</a>
          <a href="#contact">
            Book a walkthrough <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
      <ProductBenefits />
      <CommissionCase />
      <section className="home-about section" id="agency">
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
            <p className="eyebrow">Accounting expertise behind the product</p>
            <h2>Technology, with an accountant’s judgment behind it.</h2>
            <p className="founder-introduction">
              Led by Angela Hernandez, CPA, MBA.
            </p>
            <p>
              More than 20 years in financial strategy and operational
              leadership inform how we approach your commission process.
            </p>
            <p>
              We start with the agreement, the people doing the work, and the
              review steps your business needs. Then we shape the workflow
              around them.
            </p>
            <Link className="text-link" href="/about-us/">
              Meet Angela and the agency
            </Link>
          </div>
        </div>
      </section>
      <section className="secondary-services section" id="services">
        <div className="shell practice-layout">
          <div className="practice-heading">
            <div>
              <p className="eyebrow">Also from the agency</p>
              <h2>More support for your finance team.</h2>
            </div>
            <p>
              Beyond Sales Commission, we help with the accounting and
              operational work around it.
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
      <section className="faq section shell" id="questions">
        <div className="faq-heading">
          <p className="eyebrow">Sales Commission / common questions</p>
          <h2>What you may want to know.</h2>
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
      <ContactSection />
    </main>
  );
}
