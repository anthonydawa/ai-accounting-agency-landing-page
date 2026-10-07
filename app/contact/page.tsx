import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";
import { PageContext } from "@/components/page-context";
export const metadata: Metadata = {
  title: "Contact & Sales Commission Demo",
  description:
    "Book a Sales Commission demo or contact AI Accounting Agency about accounting automation services.",
  alternates: { canonical: "/contact/" },
};
export default function ContactPage() {
  return (
    <main id="main-content" className="contact-page">
      <div className="shell">
        <PageContext current="Contact" />
        <header className="contact-heading">
          <p className="page-label">Contact AI Accounting Agency</p>
          <h1>
            Book a demo.
            <br />
            Or ask us a question.
          </h1>
          <p className="page-description">
            See Sales Commission in action, or talk to us about your accounting
            workflow.
          </p>
        </header>
        <ContactSection />
      </div>
    </main>
  );
}
