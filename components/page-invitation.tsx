import Link from "next/link";
import { bookingUrl } from "@/lib/site";
export function PageInvitation({
  title = "See Sales Commission in a demo.",
  text = "Bring a sample contract and your commission rules. We’ll show you how the product could fit your process.",
  service = false,
}: {
  title?: string;
  text?: string;
  service?: boolean;
}) {
  return (
    <section className="page-invitation">
      <div className="shell invitation-inner">
        <div>
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
            {service ? "Book a consultation" : "Book a demo"}{" "}
            <span aria-hidden="true">↗</span>
          </a>
          <Link className="text-link" href="/contact/">
            Ask us a question
          </Link>
        </div>
      </div>
    </section>
  );
}
