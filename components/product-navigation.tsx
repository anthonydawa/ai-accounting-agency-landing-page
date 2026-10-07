import Link from "next/link";
import { productPages } from "@/lib/product-pages";
import { bookingUrl } from "@/lib/site";

export function ProductNavigation({ current }: { current: string }) {
  return (
    <aside className="section-sidebar">
      <p className="sidebar-label">Explore the product</p>
      <p className="sidebar-title">Sales Commission</p>
      <nav className="product-page-nav" aria-label="Sales Commission pages">
        {productPages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            aria-current={current === page.href ? "page" : undefined}
          >
            <strong>{page.label}</strong>
            <span>{page.description}</span>
          </Link>
        ))}
      </nav>
      <div className="sidebar-help">
        <p>See the product with your team’s rules.</p>
        <a
          className="text-link"
          href={bookingUrl}
          target="_blank"
          rel="noreferrer"
        >
          Book a demo ↗
        </a>
      </div>
    </aside>
  );
}
