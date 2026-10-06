import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, bookingUrl } from "@/lib/site";
export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const record = services.find((s) => s.slug === service);
  if (!record) notFound();
  return {
    title: record.title,
    description: record.description,
    alternates: { canonical: `/${service}/` },
  };
}
export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const record = services.find((s) => s.slug === service);
  if (!record) notFound();
  return (
    <main id="main-content">
      <section className="page-intro shell">
        <Link className="back-link" href="/#services">
          ← All services
        </Link>
        <p className="eyebrow">Financial workflows · {record.number}</p>
        <h1>{record.title}</h1>
        <p>{record.description}</p>
        <a
          className="button"
          href={bookingUrl}
          target="_blank"
          rel="noreferrer"
        >
          Discuss your workflow ↗
        </a>
      </section>
      <section
        className="shell service-detail-grid"
        aria-label="Service capabilities"
      >
        {record.items.map((item, i) => (
          <article key={item.title}>
            <span className="service-number">0{i + 1}</span>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>
      <section className="shell service-next">
        <div>
          <p className="eyebrow">Built around your business</p>
          <h2>
            Start with the process.
            <br />
            Build the right workflow.
          </h2>
          <p>
            We review your tools, handoffs, and controls before recommending a
            setup.
          </p>
        </div>
        <a
          className="button coral"
          href={bookingUrl}
          target="_blank"
          rel="noreferrer"
        >
          Let’s talk ↗
        </a>
      </section>
    </main>
  );
}
