import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir, access } from "node:fs/promises";
import { join, resolve } from "node:path";
const root = resolve("out");
const articles = JSON.parse(await readFile("content/articles.json", "utf8"));
async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}
async function pages(directory) {
  const results = [];
  for (const file of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, file.name);
    if (file.isDirectory() && file.name !== "_next")
      results.push(...(await pages(path)));
    else if (file.name.endsWith(".html")) results.push(path);
  }
  return results;
}

test("article records are complete and publishing status controls generated pages", async () => {
  const slugs = new Set();
  for (const article of articles) {
    assert.match(article.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(
      !slugs.has(article.slug),
      `Duplicate article slug: ${article.slug}`,
    );
    slugs.add(article.slug);
    for (const field of [
      "title",
      "category",
      "excerpt",
      "date",
      "readTime",
      "author",
    ])
      assert.ok(article[field]?.trim(), `${article.slug}: missing ${field}`);
    assert.match(article.date, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(!Number.isNaN(Date.parse(article.date)));
    assert.equal(typeof article.published, "boolean");
    if (article.externalUrl) {
      assert.equal(
        new URL(article.externalUrl).origin,
        "https://www.aiaccountingagency.com",
      );
      continue;
    }
    assert.ok(
      article.sections?.length,
      `${article.slug}: missing article body`,
    );
    for (const section of article.sections) {
      assert.ok(section.heading);
      assert.ok(section.paragraphs.length);
    }
    assert.equal(
      await exists(join(root, "blog", article.slug, "index.html")),
      article.published,
    );
  }
  const template = JSON.parse(
    await readFile("content/article-template.json", "utf8"),
  );
  assert.equal(template.published, false);
  assert.equal(
    await exists(join(root, "blog", template.slug, "index.html")),
    false,
  );
});

test("all exported internal links and anchor destinations resolve", async () => {
  const htmlPages = await pages(root);
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  for (const page of htmlPages) {
    const html = await readFile(page, "utf8");
    for (const match of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
      const href = match[1];
      if (!href.startsWith("/") && !href.startsWith("#")) continue;
      let [path, fragment] = href.split("#");
      path = path.split("?")[0];
      if (base && path.startsWith(base)) path = path.slice(base.length);
      const target = path
        ? join(root, decodeURIComponent(path).replace(/^\//, ""), "index.html")
        : page;
      assert.ok(await exists(target), `Broken link ${href} in ${page}`);
      if (fragment) {
        const targetHtml = await readFile(target, "utf8");
        assert.ok(
          targetHtml.includes(`id="${fragment}"`),
          `Missing anchor ${href} in ${page}`,
        );
      }
    }
  }
});

test("required pages, product messaging and working contact path are exported", async () => {
  for (const path of [
    "index.html",
    "sales-commission/index.html",
    "sales-commission/how-it-works/index.html",
    "sales-commission/reporting/index.html",
    "sales-commission/implementation/index.html",
    "services/index.html",
    "contact/index.html",
    "sales-accounting/index.html",
    "financial-reporting/index.html",
    "payroll-business/index.html",
    "about-us/index.html",
    "blog/index.html",
    "sitemap.xml",
  ])
    assert.ok(await exists(join(root, path)), `Missing page ${path}`);
  const html = await readFile(join(root, "index.html"), "utf8");
  assert.ok(html.includes("Sales Commission"));
  assert.ok(html.includes("https://calendar.app.google/gN5dqSemjJaRcWRg7"));
  const contactHtml = await readFile(join(root, "contact/index.html"), "utf8");
  assert.ok(contactHtml.includes("Prepare my email"));
  assert.ok(contactHtml.includes("mailto:info@aiaccountingagency.com"));
  assert.ok(!html.includes("Your form design is ready"));
  assert.equal((html.match(/<h1[\s>]/g) ?? []).length, 1);
});
