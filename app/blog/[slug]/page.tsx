import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, articleDate } from "@/lib/articles";
import { bookingUrl, siteUrl } from "@/lib/site";
import { PageContext } from "@/components/page-context";
export const dynamicParams = false;
export function generateStaticParams() {
  return articles.filter((a) => !a.externalUrl).map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug && !a.externalUrl);
  if (!a) notFound();
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: `/blog/${slug}/` },
    openGraph: {
      title: a.title,
      description: a.excerpt,
      type: "article",
      publishedTime: a.date,
      authors: [a.author],
    },
  };
}
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug && !a.externalUrl);
  if (!article) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: { "@type": "Organization", name: article.author },
    mainEntityOfPage: `${siteUrl}/blog/${slug}/`,
  };
  return (
    <main id="main-content">
      <article className="article-detail shell">
        <PageContext
          current={article.title}
          parent={{ label: "Articles", href: "/blog/" }}
        />
        <p className="eyebrow">{article.category}</p>
        <h1>{article.title}</h1>
        <p className="article-deck">{article.excerpt}</p>
        <div className="byline">
          <span>{article.author}</span>
          <time dateTime={article.date}>{articleDate(article.date)}</time>
          <span>{article.readTime}</span>
        </div>
        <div className="article-prose">
          {article.sections?.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </section>
          ))}
        </div>
        <div className="article-end">
          <h2>See Sales Commission in a demo.</h2>
          <p>
            Bring a sample agreement and your commission rules. We’ll discuss
            how the product could fit your team.
          </p>
          <a
            className="button"
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
          >
            Book a product demo ↗
          </a>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      </article>
    </main>
  );
}
