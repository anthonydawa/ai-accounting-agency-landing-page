import Link from "next/link";
import { PageInvitation } from "@/components/page-invitation";
import type { Metadata } from "next";
import Image from "next/image";
import { assetBasePath, bookingUrl } from "@/lib/site";
export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet AI Accounting Agency and founder Angela Hernandez, CPA, MBA. Financial expertise and intelligent automation for growing businesses.",
  alternates: { canonical: "/about-us/" },
};
export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="page-intro shell">
        <p className="eyebrow">About AI Accounting Agency</p>
        <h1>Meet Angela Hernandez.</h1>
        <p>
          We help businesses connect financial information, strengthen controls,
          and turn recurring work into dependable workflows.
        </p>
      </section>
      <section className="founder-section shell">
        <div className="founder-portrait">
          <Image
            src={`${assetBasePath}/angela-hernandez.png`}
            width={700}
            height={800}
            alt="Angela Hernandez, founder of AI Accounting Agency"
          />
          <span className="founder-label">Angela Hernandez, CPA, MBA</span>
        </div>
        <div>
          <p className="eyebrow">Our founder</p>
          <h2>
            An accountant’s perspective
            <br />
            on the work behind the numbers.
          </h2>
          <p>
            Angela Hernandez brings more than 20 years of experience in
            financial strategy and operational leadership. A licensed CPA with
            an MBA, she founded AI Accounting Agency to help small businesses
            improve financial accuracy and streamline their operations.
          </p>
          <p>
            Our approach combines accounting expertise with intelligent
            automation. We build around the people, processes, and tools that
            keep your business running, with financial judgment at the center.
          </p>

          <a
            className="text-link dark"
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
          >
            Start a conversation ↗
          </a>
        </div>
      </section>
      <section className="agency-mission">
        <div className="shell">
          <p className="eyebrow">Our mission</p>
          <h2>
            Dependable financial operations
            <br />
            for growing businesses.
          </h2>
          <p>
            We combine accounting expertise with practical automation across
            bookkeeping, account management, payroll, and reporting. The aim is
            to make recurring work more reliable and the information behind it
            easier to review.
          </p>
        </div>
      </section>
      <section className="principles section shell">
        <div className="section-heading">
          <p className="eyebrow">Our approach</p>
          <h2>How we approach the work.</h2>
        </div>
        <div className="service-detail-grid">
          <article>
            <h3>Understand the business</h3>
            <p>
              Start with how information moves today and where the process loses
              time or clarity.
            </p>
          </article>
          <article>
            <h3>Build with controls</h3>
            <p>
              Make rules, review steps, and exceptions part of the workflow from
              the beginning.
            </p>
          </article>
          <article>
            <h3>Keep it practical</h3>
            <p>
              Focus on repeatable systems that your team can understand and use
              as the business grows.
            </p>
          </article>
        </div>
      </section>
      <section className="shell section product-related">
        <p className="eyebrow">Our first product</p>
        <Link href="/sales-commission/">
          <h2>Starting with Sales Commission.</h2>
          <p>
            Contracts, earnings, and payout timing touch sales, finance, and
            leadership. We are bringing those details into one connected
            workspace.
          </p>
        </Link>
      </section>
      <PageInvitation />
    </main>
  );
}
