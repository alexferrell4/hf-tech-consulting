"use client";

import { useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Minus } from "lucide-react";
import { services, faqs } from "@/lib/services-data";
import { contactHref } from "@/lib/contact-link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";

const TAB_STEPS: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };

export default function ServicesContent() {
  const [active, setActive] = useState(services[0].slug);

  function handleTabKey(e: KeyboardEvent<HTMLDivElement>) {
    const step = TAB_STEPS[e.key];
    if (!step) return;
    e.preventDefault();
    const index = services.findIndex((service) => service.slug === active);
    const next = services[(index + step + services.length) % services.length];
    setActive(next.slug);
    document.getElementById(`tab-${next.slug}`)?.focus();
  }

  return (
    <main className="pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]} />

        <PageHero
          label="Services"
          title="Technology services for Houston small businesses"
          description="Workflow automation, custom software, websites, cloud, reporting and IT support. Pick a service on the left to see what's included and what it fixes."
          aside={
            <p>
              Not sure where to start? The{" "}
              <Link href="/#quiz" className="text-accent underline underline-offset-4">
                three-question quiz
              </Link>{" "}
              on the home page will suggest one.
            </p>
          }
        />

        {/* Service explorer: every panel stays in the DOM (inactive ones are
            hidden) so all service copy and links remain crawlable. */}
        <div className="grid lg:grid-cols-[300px_minmax(0,1fr)] gap-6 lg:gap-12 items-start">
          <div
            role="tablist"
            aria-label="Services"
            aria-orientation="vertical"
            onKeyDown={handleTabKey}
            className="flex lg:flex-col overflow-x-auto lg:overflow-visible -mx-6 px-6 lg:mx-0 lg:px-0 lg:border-t lg:border-foreground lg:sticky lg:top-24"
          >
            {services.map((service, i) => {
              const selected = service.slug === active;
              return (
                <button
                  key={service.slug}
                  role="tab"
                  id={`tab-${service.slug}`}
                  aria-selected={selected}
                  aria-controls={`panel-${service.slug}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(service.slug)}
                  className={`relative flex items-baseline gap-3 shrink-0 lg:w-full text-left px-4 lg:px-3 py-3 lg:border-b border-border transition-colors ${
                    selected ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="service-tab-highlight"
                      className="absolute inset-0 bg-card border-l-2 border-accent max-lg:border-l-0 max-lg:border-b-2"
                      transition={{ type: "spring", stiffness: 500, damping: 40 }}
                    />
                  )}
                  <span className="relative index-mark text-xs hidden lg:inline">{String(i + 1).padStart(2, "0")}</span>
                  <span className="relative text-sm font-medium whitespace-nowrap lg:whitespace-normal">
                    {service.shortTitle}
                  </span>
                </button>
              );
            })}
          </div>

          <div>
            {services.map((service) => (
              <div
                key={service.slug}
                role="tabpanel"
                id={`panel-${service.slug}`}
                aria-labelledby={`tab-${service.slug}`}
                hidden={service.slug !== active}
                className="panel p-6 sm:p-10"
              >
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-4">
                  <Link href={`/services/${service.slug}`} className="hover:text-accent transition-colors">
                    {service.title}
                  </Link>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">{service.intro}</p>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div>
                    <h3 className="eyebrow mb-3">Included</h3>
                    <ul className="border-t border-border">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 py-2.5 border-b border-border">
                          <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" strokeWidth={2} />
                          <span className="text-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="eyebrow mb-3">What it fixes</h3>
                    <ul className="border-t border-border">
                      {service.before.map((item) => (
                        <li key={item} className="flex items-start gap-3 py-2.5 border-b border-border">
                          <Minus className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" strokeWidth={2} />
                          <span className="text-muted-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent-cta text-accent-foreground font-medium rounded-md hover:bg-accent-cta-hover transition-colors"
                  >
                    Learn more<span className="sr-only"> about {service.title}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href={contactHref({ service: service.slug })}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-foreground text-foreground font-medium rounded-md hover:bg-foreground hover:text-background transition-colors"
                  >
                    Ask about this service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance-sensitive industries */}
        <section className="mt-24 grid lg:grid-cols-[320px_minmax(0,1fr)] gap-12 border-t border-border pt-16">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground text-balance">
            Experience with compliance-sensitive work
          </h2>
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Alongside general small and midsize businesses, there&apos;s specific experience with
              healthcare providers, assisted living facilities, counseling practices and home care
              agencies: organizations where documentation, privacy and compliance carry extra weight.
            </p>
            <Link
              href={contactHref({ note: "Asking about work for a compliance-sensitive organization." })}
              className="inline-flex items-center gap-2 mt-6 font-medium text-accent hover:underline underline-offset-4"
            >
              Talk about your industry
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-24 grid lg:grid-cols-[320px_minmax(0,1fr)] gap-12 border-t border-border pt-16">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">Common questions</h2>
            <Link href="/faq" className="inline-flex items-center gap-2 mt-4 text-accent hover:underline underline-offset-4">
              All FAQs
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          <FaqAccordion faqs={faqs} defaultOpen={faqs[0]?.question} />
        </section>
      </div>
    </main>
  );
}
