import type { Metadata } from "next";
import { articles } from "@/lib/articles";
import { ArticleLibrary } from "@/components/article-library";
export const metadata: Metadata = {
  title: "Articles & Accounting Insights",
  description:
    "Ideas on sales commissions, financial workflows, AI automation, and running a more connected business.",
  alternates: { canonical: "/blog/" },
};
export default function BlogPage() {
  return (
    <main id="main-content">
      <section className="page-intro shell">
        <p className="eyebrow">The agency journal</p>
        <h1>
          Notes from
          <br />
          <em>the practice.</em>
        </h1>
        <p>
          Practical ideas on commissions, accounting, and the systems behind a
          growing business.
        </p>
      </section>
      <section className="shell library-section" aria-label="Articles">
        <ArticleLibrary articles={articles} />
        <p className="archive-note">
          Explore more from our{" "}
          <a
            href="https://www.aiaccountingagency.com/blog"
            target="_blank"
            rel="noreferrer"
          >
            existing article archive ↗
          </a>
          .
        </p>
      </section>
    </main>
  );
}
