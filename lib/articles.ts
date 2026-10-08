import records from "@/content/articles.json";
export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  published: boolean;
  externalUrl?: string;
  sections?: { heading: string; paragraphs: string[] }[];
};
export const articles: Article[] = records
  .filter((article) => article.published)
  .sort((a, b) => b.date.localeCompare(a.date));
export function articleDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
