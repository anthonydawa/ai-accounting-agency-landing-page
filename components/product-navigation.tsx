import Link from "next/link";
import { productPages } from "@/lib/product-pages";
export function ProductNavigation({ current }: { current: string }) {
  return (
    <nav className="product-page-nav" aria-label="Sales Commission pages">
      <div className="shell">
        <strong>Sales Commission</strong>
        {productPages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            aria-current={current === page.href ? "page" : undefined}
          >
            {page.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
