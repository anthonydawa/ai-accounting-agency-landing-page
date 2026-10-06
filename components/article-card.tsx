import Link from "next/link";
import { Article, articleDate } from "@/lib/articles";
export function ArticleCard({ article }: { article: Article }) {
  const body = (
    <>
      <div
        className={`article-art art-${article.category.replaceAll(" ", "-").replaceAll("&", "and").toLowerCase()}`}
        aria-hidden="true"
      >
        <span className="art-orbit" />
        <span className="art-mark">
          {article.category === "Sales Commission"
            ? "↗"
            : article.category === "Press"
              ? "A"
              : "◇"}
        </span>
        <small>{article.category}</small>
      </div>
      <div className="article-card-body">
        <p className="article-meta">
          <span>{article.category}</span>
          <span>{article.readTime}</span>
        </p>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <div className="article-card-bottom">
          <time dateTime={article.date}>{articleDate(article.date)}</time>
          <span>
            {article.externalUrl ? "Read original ↗" : "Read article →"}
          </span>
        </div>
      </div>
    </>
  );
  return article.externalUrl ? (
    <a
      className="article-card"
      href={article.externalUrl}
      target="_blank"
      rel="noreferrer"
    >
      {body}
    </a>
  ) : (
    <Link className="article-card" href={`/blog/${article.slug}/`}>
      {body}
    </Link>
  );
}
