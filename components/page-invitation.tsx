import Link from "next/link";
import { bookingUrl } from "@/lib/site";
export function PageInvitation({
  title = "Let’s look at your commission process.",
  text = "Bring the agreement, the questions, and the way your team works today. We’ll discuss how Sales Commission could fit.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="page-invitation">
      <div className="shell">
        <div>
          <p className="eyebrow">Your next conversation</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="invitation-actions">
          <a
            className="button"
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
          >
            Book a walkthrough
          </a>
          <Link className="text-link" href="/contact/">
            Contact the agency
          </Link>
        </div>
      </div>
    </section>
  );
}
