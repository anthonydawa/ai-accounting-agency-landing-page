import Link from "next/link";
export function NextPage({
  href,
  title,
  text,
}: {
  href: string;
  title: string;
  text: string;
}) {
  return (
    <Link className="next-page" href={href}>
      <div>
        <span>Continue to</span>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <span className="next-arrow" aria-hidden="true">
        →
      </span>
    </Link>
  );
}
