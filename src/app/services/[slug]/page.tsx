import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services, getServiceBySlug, getServiceFaqs } from "@/lib/services-data";
import { contactHref } from "@/lib/contact-link";
import BeforeAfter from "@/components/BeforeAfter";
import FaqAccordion from "@/components/FaqAccordion";
import { serviceIconMap } from "@/lib/service-icons";
import { breadcrumbJsonLd, buildOpenGraph, faqJsonLd, jsonLdHtml, SITE_NAME, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    // shortTitle keeps the <title> tag within Google's ~60-char display
    // budget; the page's own H1 still uses the full service.title.
    title: service.shortTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: buildOpenGraph({
      path: `/services/${service.slug}`,
      title: `${service.shortTitle} | ${SITE_NAME}`,
      description: service.metaDescription,
    }),
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = serviceIconMap[service.icon];
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const serviceFaqs = getServiceFaqs(service);

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ]);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "City", name: "Houston" },
      { "@type": "State", name: "Texas" },
    ],
    serviceType: service.title,
    url: `${SITE_URL}/services/${service.slug}`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.shortTitle} services`,
      itemListElement: service.features.map((feature) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: feature },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(faqJsonLd(serviceFaqs)) }}
      />

      <main className="pt-12 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: service.shortTitle, href: `/services/${service.slug}` },
            ]}
          />

          <p className="rise-in eyebrow mb-5 flex items-center gap-2">
            <Icon className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
            Service
          </p>

          <h1
            className="rise-in text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.08] text-foreground mb-6 text-balance"
            style={{ "--delay": "60ms" } as CSSProperties}
          >
            {service.title}
          </h1>

          <p
            className="rise-in text-xl text-muted-foreground leading-relaxed pb-12 mb-16 border-b border-border"
            style={{ "--delay": "120ms" } as CSSProperties}
          >
            {service.intro}
          </p>

          {/* The Problem */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">The problem</h2>
            <div className="space-y-4">
              {service.problem.map((paragraph, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* What's Included */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">What&apos;s included</h2>
            <div className="grid sm:grid-cols-2 border-t border-border">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 py-3.5 border-b border-border">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" strokeWidth={1.75} />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Who This Is For */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Who it&apos;s for</h2>
            <ul className="border-t border-border">
              {service.whoFor.map((item) => (
                <li key={item} className="flex items-start gap-3 py-3.5 border-b border-border">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Process: vertical timeline */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8">How it&apos;s done</h2>
            <ol className="relative ml-5 border-l border-foreground">
              {service.process.map((step, i) => (
                <li key={step.title} className="relative pl-10 pb-10 last:pb-0">
                  <span className="stepper-node absolute -left-[1.375rem] top-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground pt-2 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Before / after */}
          <section className="mb-16">
            <BeforeAfter before={service.before} after={service.outcomes} />
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Common questions about {service.plainName}
            </h2>
            <FaqAccordion faqs={serviceFaqs} />
          </section>

          {/* CTA */}
          <section className="mb-20 bg-ink text-ink-foreground border border-border rounded-md p-8 sm:p-10">
            <p className="text-2xl font-semibold tracking-tight mb-3 text-balance">
              Want to talk about {service.plainName} for your business?
            </p>
            <p className="text-ink-foreground/70 mb-8 max-w-xl">
              A first conversation covers how things work today and what a solution could look like.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={`/quote?service=${service.slug}`}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-ink-foreground text-ink font-medium rounded-md hover:bg-white transition-colors"
              >
                Get a quote
              </Link>
              <Link
                href={contactHref({ service: service.slug })}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-ink-foreground/40 font-medium rounded-md hover:border-ink-foreground transition-colors"
              >
                Schedule a consultation
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </section>

          {/* Related Services */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-4">Related services</h2>
            <ul className="border-t border-border">
              {otherServices.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/services/${other.slug}`}
                    className="group flex items-center justify-between gap-4 py-4 border-b border-border text-foreground hover:text-accent transition-colors"
                  >
                    <span className="font-medium">{other.shortTitle}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
