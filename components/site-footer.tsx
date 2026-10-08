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
              Sales Commission and accounting automation, led by financial
              expertise.
            </p>
            <a href="mailto:info@aiaccountingagency.com">
              info@aiaccountingagency.com
            </a>
            <a href="tel:+17026251966">702-625-1966</a>
          </div>
          <div>
            <strong>Sales Commission</strong>
            <Link href="/sales-commission/">Product overview</Link>
            <Link href="/sales-commission/how-it-works/">How it works</Link>
            <Link href="/sales-commission/reporting/">Reports & forecasts</Link>
            <Link href="/sales-commission/implementation/">
              Setup & implementation
            </Link>
          </div>
          <div>
            <strong>Accounting services</strong>
            <Link href="/services/">Services overview</Link>
            {services.map((s) => (
              <Link key={s.slug} href={`/${s.slug}/`}>
                {s.title}
              </Link>
            ))}
          </div>
          <div>
            <strong>The agency</strong>
            <Link href="/about-us/">About us</Link>
            <Link href="/blog/">Articles</Link>
            <Link href="/contact/">Contact</Link>
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
