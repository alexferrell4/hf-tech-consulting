import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services, getServiceBySlug } from "@/lib/services-data";
import { serviceIconMap } from "@/lib/service-icons";
import { breadcrumbJsonLd, buildOpenGraph, jsonLdHtml, SITE_NAME, SITE_URL } from "@/lib/seo";
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
    title: service.title,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: buildOpenGraph({
      path: `/services/${service.slug}`,
      title: `${service.title} | ${SITE_NAME}`,
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

      <main className="relative pt-32 pb-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
          <div className="absolute inset-0 circuit-pattern opacity-30" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: service.shortTitle, href: `/services/${service.slug}` },
            ]}
          />

          <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
            <Icon className="w-7 h-7 text-accent" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            {service.title}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed mb-16">
            {service.intro}
          </p>

          {/* The Problem */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">The Problem</h2>
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
            <h2 className="text-2xl font-bold text-foreground mb-6">What&apos;s Included</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Who This Is For */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Who This Is For</h2>
            <ul className="space-y-3">
              {service.whoFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Our Process */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Our Process</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {service.process.map((step, i) => (
                <div key={step.title} className="relative">
                  <div className="text-4xl font-bold text-accent/20 mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Outcomes */}
          <section className="mb-16 gradient-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">What You Can Expect</h2>
            <ul className="space-y-3">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground leading-relaxed">{outcome}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <section className="mb-20 text-center">
            <p className="text-2xl font-bold text-foreground mb-4 text-balance">
              Ready to talk about {service.shortTitle.toLowerCase()}?
            </p>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Schedule a consultation and we&apos;ll walk through your current process and what a solution could look like.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-medium rounded-full hover:bg-accent/90 transition-all duration-200 group"
            >
              Schedule Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </section>

          {/* Related Services */}
          <section className="border-t border-border pt-12">
            <h2 className="text-sm uppercase tracking-widest text-accent mb-6">
              Related Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {otherServices.map((other) => {
                const OtherIcon = serviceIconMap[other.icon];
                return (
                  <Link
                    key={other.slug}
                    href={`/services/${other.slug}`}
                    className="group gradient-border p-6 hover:glow transition-shadow duration-300"
                  >
                    <OtherIcon className="w-6 h-6 text-accent mb-3" />
                    <span className="text-foreground font-medium group-hover:text-accent transition-colors">
                      {other.shortTitle}
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
