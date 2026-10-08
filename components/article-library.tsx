"use client";
import { useState } from "react";
import { Article } from "@/lib/articles";
import { ArticleCard } from "./article-card";
export function ArticleLibrary({ articles }: { articles: Article[] }) {
  const [category, setCategory] = useState("All articles");
  const [query, setQuery] = useState("");
  const categories = [
    "All articles",
    ...new Set(articles.map((article) => article.category)),
  ];
  const visible = articles.filter(
    (article) =>
      (category === "All articles" || article.category === category) &&
      `${article.title} ${article.excerpt} ${article.category}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  return (
    <>
      <div className="library-tools">
        <div className="category-tabs" aria-label="Article categories">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <label className="article-search">
          <span className="sr-only">Search articles</span>
          <input
            type="search"
            placeholder="Search articles…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </div>
      <p className="results-count" role="status">
        {visible.length} {visible.length === 1 ? "article" : "articles"}
      </p>
      <div className="article-grid">
        {visible.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
      {!visible.length && (
        <div className="empty-state">
          <h2>No articles found.</h2>
          <p>Try another topic or search term.</p>
          <button
            className="button"
            onClick={() => {
              setCategory("All articles");
              setQuery("");
            }}
          >
            Show all articles
          </button>
        </div>
      )}
    </>
  );
}
