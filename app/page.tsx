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
      <div className="announcement">
        <span className="pulse" aria-hidden="true" /> Financial expertise meets
        intelligent automation
      </div>
      <section className="hero" id="top">
        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow product-eyebrow">
              <span /> Introducing Sales Commission
            </p>
            <h1>
              Less commission
              <br />
              <span>confusion.</span>
              <br />
              More clarity.
            </h1>
            <p className="hero-lede">
              Bring contracts, earnings, and payout schedules into one connected
              workflow. Give your sales and finance teams a clearer view of
              what’s owed, when, and why.
            </p>
            <div className="hero-actions">
              <a
                className="button"
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
              >
                Book a product walkthrough ↗
              </a>
              <a className="text-link dark" href="#workflow">
                See how it works ↓
              </a>
            </div>
            <div className="trust-line">
              <span>CPA-led</span>
              <i />
              <span>Built around your rules</span>
              <i />
              <span>Human oversight</span>
            </div>
          </div>
          <div className="product-media">
            <ProductPreview />
          </div>
        </div>
        <div className="hero-bottom shell">
          <span>Our first product. One practical place to start.</span>
          <Link href="/sales-commission/">Explore Sales Commission →</Link>
        </div>
      </section>
      <section
        className="transformation section"
        aria-labelledby="transformation-title"
      >
        <div className="shell transformation-inner">
          <div className="transformation-heading">
            <p className="eyebrow">The operational payoff</p>
            <h2 id="transformation-title">
              A better commission cycle.
              <br />
              <span>For everyone involved.</span>
            </h2>
            <p>
              Less time piecing together spreadsheets. More confidence in the
              numbers behind every conversation.
            </p>
          </div>
          <div className="impact-grid">
            {[
              {
                number: "01",
                kicker: "For the sales team",
                title: "Know what you’ve earned.",
                text: "See contract activity, upfront and recurring earnings, and upcoming payouts in a shared commission workspace.",
              },
              {
                number: "02",
                kicker: "For finance",
                title: "Make review less of a hunt.",
                text: "Bring commission rules, payout timing, and calculation context together so your team can review the details.",
              },
              {
                number: "03",
                kicker: "For leadership",
                title: "See what’s ahead.",
                text: "Explore forecasts, track scheduled commissions, and understand how different assumptions affect the picture.",
              },
            ].map((item) => (
              <article className="impact-card" key={item.number}>
                <div className="impact-icon">
                  <span>{item.number}</span>
                  <span className="impact-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <p className="impact-kicker">{item.kicker}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CommissionCase />
      <section className="secondary-services section shell" id="services">
        <div className="section-heading heading-with-link">
          <div>
            <p className="eyebrow">Beyond commissions</p>
            <h2>
              The same care.
              <br />
              <span>Across your financial operations.</span>
            </h2>
          </div>
          <p>
            Sales Commission is where we start. Our broader services help
            connect the rest of your back office.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <Link
              key={service.slug}
              className="service-card"
              href={`/${service.slug}/`}
            >
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-link">Explore this service ↗</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="home-about section">
        <div className="shell home-about-grid">
          <div className="home-founder-photo">
            <Image
              src={`${assetBasePath}/angela-hernandez.png`}
              width={700}
              height={800}
              alt="Angela Hernandez, founder of AI Accounting Agency"
            />
            <div>
              <strong>Angela Hernandez, CPA, MBA</strong>
              <span>Founder · AI Accounting Agency</span>
            </div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">The expertise behind the systems</p>
            <h2>
              Built by people
              <br />
              <span>who understand the numbers.</span>
            </h2>
            <p>
              Led by Angela Hernandez, a licensed CPA with an MBA and more than
              20 years of experience in financial strategy and operational
              leadership.
            </p>
            <p>
              We combine financial expertise with intelligent workflows to help
              growing businesses work with greater accuracy, visibility, and
              control.
            </p>
            <div className="credential-row">
              <span>Licensed CPA</span>
              <span>MBA</span>
              <span>20+ years of experience</span>
            </div>
            <Link className="text-link dark" href="/about-us/">
              Meet the agency →
            </Link>
          </div>
        </div>
      </section>
      <section className="journal section shell" id="articles">
        <div className="section-heading heading-with-link">
          <div>
            <p className="eyebrow">Articles & accounting insights</p>
            <h2>
              Ideas for a<br />
              <span>better-run business.</span>
            </h2>
          </div>
          <Link className="text-link dark" href="/blog/">
            Explore all articles →
          </Link>
        </div>
        <div className="article-grid">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
      <ContactSection />
      <section className="faq section shell">
        <div className="faq-heading">
          <p className="eyebrow">Questions, answered</p>
          <h2>Before we talk.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>
                {faq.q}
                <span>+</span>
              </summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
