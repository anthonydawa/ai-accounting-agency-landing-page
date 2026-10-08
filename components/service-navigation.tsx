import Link from "next/link";
import { services } from "@/lib/site";
export function ServiceNavigation({ current }: { current: string }) {
  return (
    <aside className="section-sidebar service-sidebar">
      <p className="sidebar-label">Accounting services</p>
      <nav aria-label="Accounting service pages">
        <Link
          href="/services/"
          aria-current={current === "/services/" ? "page" : undefined}
        >
          <strong>All services</strong>
          <span>Choose an area of support</span>
        </Link>
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/${service.slug}/`}
            aria-current={current === `/${service.slug}/` ? "page" : undefined}
          >
            <strong>{service.title}</strong>
          </Link>
        ))}
      </nav>
      <div className="sidebar-help">
        <p>Looking for commission management?</p>
        <Link className="text-link" href="/sales-commission/">
          View Sales Commission →
        </Link>
      </div>
    </aside>
  );
}
