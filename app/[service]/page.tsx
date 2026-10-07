import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/lib/site";
import { serviceDetails } from "@/lib/service-details";
import { PageInvitation } from "@/components/page-invitation";
export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const record = services.find((item) => item.slug === service);
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
  const record = services.find((item) => item.slug === service);
  if (!record) notFound();
  const detail = serviceDetails[service];
  return (
    <main id="main-content" className={`service-page service-${service}`}>
      <section className="service-page-hero shell">
        <div>
          <Link className="back-link" href="/services/">
            ← All services
          </Link>
          <p className="eyebrow">The broader practice</p>
          <h1>{record.title}</h1>
          <p className="service-deck">{record.description}</p>
          <p>{detail.introduction}</p>
          <Link className="button" href="/contact/">
            Discuss this service
          </Link>
        </div>
        <aside className="service-brief" aria-label="Service at a glance">
          <p className="eyebrow">The work at a glance</p>
          <dl>
            <div>
              <dt>Source information</dt>
              <dd>{detail.inputs}</dd>
            </div>
            <div>
              <dt>Review focus</dt>
              <dd>{detail.review}</dd>
            </div>
            <div>
              <dt>The working output</dt>
              <dd>{detail.output}</dd>
            </div>
          </dl>
          <p>The scope and connected tools are agreed around your business.</p>
        </aside>
      </section>
      <section className="service-context">
        <div className="shell">
          <p className="eyebrow">Why the process matters</p>
          <p>{detail.context}</p>
        </div>
      </section>
      <section className="shell section service-capabilities">
        <div className="section-heading">
          <p className="eyebrow">Where we can help</p>
          <h2>Workflows within this service.</h2>
        </div>
        {record.items.map((item, index) => (
          <article key={item.title} className="capability-entry">
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
            <ul>
              {detail.capabilities[index].map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <section className="service-product-connection">
        <div className="shell">
          <div>
            <p className="eyebrow">How this relates to our first product</p>
            <h2>Sales Commission in the wider picture.</h2>
            <p>{detail.connection}</p>
          </div>
          <Link className="button" href="/sales-commission/">
            Explore Sales Commission
          </Link>
        </div>
      </section>
      <section className="shell section related-services">
        <p className="eyebrow">Other areas of the practice</p>
        <div>
          {services
            .filter((item) => item.slug !== service)
            .map((item) => (
              <Link key={item.slug} href={`/${item.slug}/`}>
                <h3>{item.title}</h3>
                <span>Explore this service ↗</span>
              </Link>
            ))}
        </div>
      </section>
      <PageInvitation
        title="Let’s look at the work that needs attention."
        text="Tell us about your systems, handoffs, and recurring tasks. We’ll discuss a practical scope for your business."
      />
    </main>
  );
}
