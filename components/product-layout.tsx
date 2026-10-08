import type { ReactNode } from "react";
import { PageContext } from "@/components/page-context";
import { ProductNavigation } from "@/components/product-navigation";
import { productPages } from "@/lib/product-pages";

export function ProductLayout({
  current,
  title,
  description,
  children,
}: {
  current: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  const page = productPages.find((page) => page.href === current)!;
  return (
    <main id="main-content" className="product-page">
      <div className="shell">
        <PageContext
          current={page.label}
          parent={{ label: "Sales Commission", href: "/sales-commission/" }}
        />
        <div className="section-layout">
          <ProductNavigation current={current} />
          <div className="section-content">
            <header className="detail-heading">
              <p className="page-label">
                Sales Commission <span aria-hidden="true">/</span> {page.label}
              </p>
              <h1>{title}</h1>
              <p className="page-description">{description}</p>
            </header>
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
