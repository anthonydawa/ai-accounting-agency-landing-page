import Link from "next/link";
import { services } from "@/lib/site";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-columns">
          <div>
            <strong className="footer-name">AI Accounting Agency</strong>
            <p>
              Accounting expertise for the financial workflows your business
              runs on.
            </p>
            <a href="mailto:info@aiaccountingagency.com">
              info@aiaccountingagency.com
            </a>
            <a href="tel:+17026251966">702-625-1966</a>
          </div>
          <div>
            <strong>Explore</strong>
            <Link href="/sales-commission/">Sales Commission</Link>
            <Link href="/sales-commission/how-it-works/">How it works</Link>
            <Link href="/sales-commission/reporting/">
              Reporting & forecasts
            </Link>
            <Link href="/sales-commission/implementation/">
              Setup & implementation
            </Link>
            <Link href="/about-us/">About us</Link>
            <Link href="/blog/">The agency journal</Link>
          </div>
          <div>
            <strong>The practice</strong>
            <Link href="/services/">All services</Link>
            {services.map((s) => (
              <Link key={s.slug} href={`/${s.slug}/`}>
                {s.title}
              </Link>
            ))}
          </div>
          <div>
            <strong>Get in touch</strong>
            <Link href="/contact/">Contact the agency</Link>
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
          <span>Financial expertise. Human judgment.</span>
        </div>
      </div>
    </footer>
  );
}
