import Link from "next/link";
import { bookingUrl, services } from "@/lib/site";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-cta">
          <div>
            <p className="eyebrow">A clearer way forward</p>
            <h2>
              Make every commission
              <br />
              <span>easier to understand.</span>
            </h2>
          </div>
          <a
            className="button coral"
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
          >
            Let’s talk about your workflow ↗
          </a>
        </div>
        <div className="footer-columns">
          <div>
            <strong className="footer-name">AI Accounting Agency</strong>
            <p>
              Financial expertise.
              <br />
              Intelligent automation.
              <br />
              Built around your business.
            </p>
          </div>
          <div>
            <strong>Explore</strong>
            <Link href="/sales-commission/">Sales Commission</Link>
            <Link href="/about-us/">About us</Link>
            <Link href="/blog/">Articles & insights</Link>
          </div>
          <div>
            <strong>Our services</strong>
            {services.map((s) => (
              <Link key={s.slug} href={`/${s.slug}/`}>
                {s.title}
              </Link>
            ))}
          </div>
          <div>
            <strong>Get in touch</strong>
            <a href="mailto:info@aiaccountingagency.com">
              info@aiaccountingagency.com
            </a>
            <a href="tel:+17026251966">702-625-1966</a>
            <a
              href="https://www.linkedin.com/company/aiaccountingagency/home/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://www.instagram.com/ai_accountingagency/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 AI Accounting Agency. All rights reserved.</span>
          <span>Built with financial judgment at the center.</span>
        </div>
      </div>
    </footer>
  );
}
