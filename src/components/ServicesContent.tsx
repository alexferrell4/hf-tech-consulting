"use client";

import { useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, X } from "lucide-react";
import { services, faqs } from "@/lib/services-data";
import { serviceIconMap } from "@/lib/service-icons";
import { contactHref } from "@/lib/contact-link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import { WorkflowVisual } from "@/components/HeroVisuals";
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
    <main className="relative pt-32 pb-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
        <div className="absolute inset-0 circuit-pattern opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]} />

        <PageHero
          eyebrow="IT & Technology Consulting Services"
          headline={[
            { text: "Business Technology" },
            { text: "Consulting", className: "gradient-text" },
          ]}
          description="Helping businesses leverage technology to improve efficiency, reduce costs, and support growth. From automation to custom software, we provide comprehensive IT services tailored to your needs."
          visual={<WorkflowVisual />}
        />

        {/* Service explorer: every panel stays in the DOM (inactive ones are
            hidden) so all service copy and links remain crawlable. */}
        <div className="grid lg:grid-cols-[300px_minmax(0,1fr)] gap-6 lg:gap-10 items-start">
          <div
            role="tablist"
            aria-label="Services"
            onKeyDown={handleTabKey}
            className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible -mx-6 px-6 pb-2 lg:mx-0 lg:px-0 lg:pb-0 lg:sticky lg:top-28"
          >
            {services.map((service, i) => {
              const Icon = serviceIconMap[service.icon];
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
                  className={`relative flex items-center gap-3 shrink-0 lg:w-full text-left px-4 py-3 rounded-[calc(var(--radius)-4px)] border transition-colors duration-200 ${
                    selected
                      ? "border-transparent text-foreground"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-accent/30"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="service-tab-highlight"
                      className="absolute inset-0 rounded-[calc(var(--radius)-4px)] border border-accent/50 bg-accent/10"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  <Icon className={`relative w-5 h-5 shrink-0 ${selected ? "text-accent" : ""}`} strokeWidth={1.5} />
                  <span className="relative text-sm font-medium whitespace-nowrap lg:whitespace-normal">
                    {service.shortTitle}
                  </span>
                  <span className="relative index-mark text-xs ml-auto hidden lg:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>

          <div>
            {services.map((service) => {
              const Icon = serviceIconMap[service.icon];
              return (
                <div
                  key={service.slug}
                  role="tabpanel"
                  id={`panel-${service.slug}`}
                  aria-labelledby={`tab-${service.slug}`}
                  hidden={service.slug !== active}
                  className="panel p-8 md:p-10 rise-in"
                >
                  <Icon className="w-8 h-8 text-accent mb-6" strokeWidth={1.5} />
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                    <Link href={`/services/${service.slug}`} className="hover:text-accent transition-colors">
                      {service.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">{service.intro}</p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="eyebrow mb-3">What&apos;s Included</h3>
                      <ul className="border-t border-border">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 py-2.5 border-b border-border">
                            <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" strokeWidth={1.75} />
                            <span className="text-foreground text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="eyebrow mb-3">What It Fixes</h3>
                      <ul className="border-t border-border">
                        {service.before.map((item) => (
                          <li key={item} className="flex items-start gap-3 py-2.5 border-b border-border">
                            <X className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                            <span className="text-muted-foreground text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-cta text-accent-foreground font-medium rounded-full hover:bg-accent-cta/90 active:scale-[0.97] transition-all duration-200 group/link"
                    >
                      Learn more<span className="sr-only"> about {service.title}</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                    <Link
                      href={contactHref({ service: service.slug })}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-full hover:bg-muted active:scale-[0.97] transition-all duration-200"
                    >
                      Ask about this service
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Compliance-Sensitive Industries CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 gradient-border p-8 md:p-12"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="eyebrow mb-4">
              Industries We Understand
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
              Experience Across a Range of Businesses — Including Compliance-Sensitive Ones
            </p>
            <p className="text-muted-foreground mb-8">
              Alongside general small and midsize businesses, we bring specific experience with
              healthcare providers, assisted living facilities, counseling practices, and home care
              agencies — organizations where documentation, privacy, and compliance carry extra weight.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-cta text-accent-foreground font-medium rounded-full hover:bg-accent-cta/90 active:scale-[0.97] transition-all duration-200 group"
            >
              Talk to Us About Your Industry
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <h2 className="eyebrow mb-4">
              FAQ
            </h2>
            <p className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
              Common questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FaqAccordion faqs={faqs} defaultOpen={faqs[0]?.question} />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-2xl text-foreground mb-6">
            {"Don't see what you need?"}
          </p>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {"We offer custom solutions tailored to your specific requirements. Let's discuss your project."}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-cta text-accent-foreground font-medium rounded-full hover:bg-accent-cta/90 active:scale-[0.97] transition-all duration-200 group"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
