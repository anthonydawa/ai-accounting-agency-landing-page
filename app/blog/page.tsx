import type { Metadata } from "next";
import { articles } from "@/lib/articles";
import { ArticleLibrary } from "@/components/article-library";
import { PageContext } from "@/components/page-context";
export const metadata: Metadata = {
  title: "Articles & Accounting Insights",
  description:
    "Ideas on sales commissions, financial workflows, AI automation, and running a more connected business.",
  alternates: { canonical: "/blog/" },
};
export default function BlogPage() {
  return (
    <main id="main-content" className="blog-page">
      <div className="shell">
        <PageContext current="Articles" />
        <header className="blog-heading">
          <p className="page-label">Articles from AI Accounting Agency</p>
          <h1>Sales commissions, accounting, and business workflows.</h1>
          <p className="page-description">
            Practical explanations for the people managing financial operations.
            Browse by topic or search for a question.
          </p>
        </header>
      </div>
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
