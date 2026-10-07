import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/lib/site";
import { serviceDetails } from "@/lib/service-details";
import { PageContext } from "@/components/page-context";
import { ServiceNavigation } from "@/components/service-navigation";
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
  const index = services.findIndex((item) => item.slug === service);
  return (
    <main
      id="main-content"
      className={`service-detail-page service-tone-${index}`}
    >
      <div className="shell">
        <PageContext
          current={record.title}
          parent={{ label: "Accounting services", href: "/services/" }}
        />
        <div className="section-layout">
          <ServiceNavigation current={`/${service}/`} />
          <div className="section-content">
            <header className="detail-heading service-detail-heading">
              <p className="page-label">Accounting services</p>
              <h1>{record.title}</h1>
              <p className="page-description">{record.description}</p>
              <Link className="button button-outline" href="/contact/">
                Discuss this service →
              </Link>
            </header>
            <section className="service-summary">
              <div>
                <h2>What we work with</h2>
                <p>{detail.inputs}.</p>
              </div>
              <div>
                <h2>What the process produces</h2>
                <p>{detail.output}.</p>
              </div>
            </section>
            <section className="content-section service-work">
              <h2>What this service covers</h2>
              {record.items.map((item, i) => (
                <article key={item.title}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                  <ul>
                    {detail.capabilities[i].map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </section>
            <aside className="service-review">
              <p className="page-label">Where review matters</p>
              <h2>{detail.review}</h2>
              <p>{detail.context}</p>
            </aside>
            <section className="content-section service-commission">
              <h2>How this connects to Sales Commission</h2>
              <p>{detail.connection}</p>
              <Link className="text-link" href="/sales-commission/">
                View the commission product →
              </Link>
            </section>
            <section className="implementation-scope">
              <h2>Let’s define the work your business needs.</h2>
              <p>
                We confirm your systems, source information, review steps, and
                required outputs before agreeing a scope.
              </p>
              <Link className="button" href="/contact/">
                Contact the agency →
              </Link>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
