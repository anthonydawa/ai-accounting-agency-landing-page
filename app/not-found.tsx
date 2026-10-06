import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main-content" className="page-intro shell">
      <p className="eyebrow">404 · Page not found</p>
      <h1>
        Let’s get you
        <br />
        <span>back on track.</span>
      </h1>
      <p>The page you’re looking for isn’t here.</p>
      <Link className="button" href="/">
        Back to home →
      </Link>
    </main>
  );
}
