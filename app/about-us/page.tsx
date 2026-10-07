import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { assetBasePath } from "@/lib/site";
import { PageContext } from "@/components/page-context";
import { PageInvitation } from "@/components/page-invitation";
export const metadata: Metadata = {
  title: "About AI Accounting Agency",
  description:
    "Meet founder Angela Hernandez, CPA, MBA, and the accounting expertise behind Sales Commission and our financial workflow services.",
  alternates: { canonical: "/about-us/" },
};
export default function AboutPage() {
  return (
    <main id="main-content" className="about-page">
      <div className="shell">
        <PageContext current="About us" />
        <section className="about-hero">
          <div>
            <p className="page-label">About AI Accounting Agency</p>
            <h1>
              Accounting expertise.
              <br />
              <span>Practical automation.</span>
            </h1>
            <p className="page-description">
              We help businesses improve financial accuracy and make recurring
              accounting work more dependable.
            </p>
            <p>
              Our first product, Sales Commission, brings contract details,
              earnings, and payout schedules into one workspace. Our services
              support accounting operations, financial reporting, payroll, and
              business processes.
            </p>
            <div className="about-links">
              <Link className="text-link" href="/sales-commission/">
                Explore our product →
              </Link>
              <Link className="text-link" href="/services/">
                Explore our services →
              </Link>
            </div>
          </div>
          <figure className="about-founder">
            <Image
              src={`${assetBasePath}/angela-hernandez.png`}
              width={700}
              height={800}
              priority
              alt="Angela Hernandez, founder of AI Accounting Agency"
            />
            <figcaption>
              <strong>Angela Hernandez</strong>
              <span>CPA, MBA · Founder</span>
            </figcaption>
          </figure>
        </section>
        <section className="founder-story">
          <div>
            <p className="page-label">Our founder</p>
            <h2>20+ years in financial strategy and operational leadership.</h2>
          </div>
          <div>
            <p>
              Angela Hernandez is a licensed CPA with an MBA. She founded AI
              Accounting Agency to help small businesses improve their financial
              accuracy through dependable, customizable accounting systems.
            </p>
            <p>
              Her experience informs how we build: start with the agreement and
              the records, make review responsibilities clear, and use
              automation to organize repeatable work.
            </p>
          </div>
        </section>
        <section className="about-approach">
          <div>
            <p className="page-label">How we work</p>
            <h2>
              Understand the process
              <br />
              before changing it.
            </h2>
          </div>
          <div>
            <article>
              <h3>Review the way your team works today.</h3>
              <p>
                Identify the tools, source records, and recurring tasks that
                need attention.
              </p>
            </article>
            <article>
              <h3>Define the rules and review steps.</h3>
              <p>
                Keep responsibilities, exceptions, and financial controls part
                of the workflow.
              </p>
            </article>
            <article>
              <h3>Agree a practical scope.</h3>
              <p>
                Build around the information your team needs to manage and
                review.
              </p>
            </article>
          </div>
        </section>
      </div>
      <PageInvitation
        service
        title="Tell us about your financial workflow."
        text="Start with a product demo or a conversation about the accounting process you want to improve."
      />
    </main>
  );
}
