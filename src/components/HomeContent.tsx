"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services-data";
import ClientsCarousel from "@/components/ClientsCarousel";
import SavingsCalculator from "@/components/SavingsCalculator";
import ServiceQuiz from "@/components/ServiceQuiz";

const Logo3D = dynamic(() => import("@/components/Logo3D"), { ssr: false });

const industries = [
  "Healthcare providers",
  "Home care agencies",
  "Counseling practices",
  "Assisted living facilities",
  "Fitness and recreation",
  "Small and midsize businesses in general",
];

const steps = [
  {
    title: "Talk it through",
    description:
      "A conversation about what's slow, manual or broken today, and how your business actually runs.",
  },
  {
    title: "Get a written scope",
    description:
      "A plain-language scope with a quote and a realistic timeline, including what isn't worth building.",
  },
  {
    title: "Build, test, support",
    description:
      "The work is built and tested with your team before it goes live, and supported by the same person afterward.",
  },
];

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export default function HomeContent() {
  return (
    <main>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_380px] gap-12 lg:gap-20 items-center">
          <div>
            <p className="eyebrow mb-6 rise-in">H.F. Tech Consulting · Houston, Texas</p>
            {/* CSS entrance (not framer-motion) so the LCP text paints before hydration. */}
            <h1
              className="rise-in text-[2.4rem] sm:text-[3.25rem] lg:text-[3.75rem] font-semibold tracking-tight leading-[1.06] text-foreground text-balance"
              style={delay(60)}
            >
              Smart Solutions. Real Results.
              <span className="block text-muted-foreground">Technology solutions that drive business growth.</span>
            </h1>
            <p className="rise-in mt-8 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl" style={delay(120)}>
              One consultant, start to finish. The person who scopes your project is the person who
              builds it, and the one you call when something needs to change.
            </p>
            <div className="rise-in flex flex-col sm:flex-row gap-3 mt-10" style={delay(180)}>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent-cta text-accent-foreground font-medium rounded-md hover:bg-accent-cta-hover transition-colors"
              >
                Get a quote
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-foreground text-foreground font-medium rounded-md hover:bg-foreground hover:text-background transition-colors"
              >
                See services
              </Link>
            </div>
            <ul className="rise-in mt-12 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground" style={delay(240)}>
              <li>Replies within one business day</li>
              <li>Healthcare and home care experience</li>
              <li>Houston-based, working across Texas</li>
            </ul>
          </div>

          <div className="relative mx-auto w-56 h-56 sm:w-72 sm:h-72 lg:w-full lg:h-[380px]">
            <Logo3D />
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="max-w-7xl mx-auto px-6 pb-24" aria-labelledby="clients-heading">
        <h2 id="clients-heading" className="text-sm font-medium text-muted-foreground mb-5">
          Clients
        </h2>
        <ClientsCarousel />
      </section>

      {/* Services */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-[320px_minmax(0,1fr)] gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">Services</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Most projects mix two or three of these. If you&apos;re not sure which you need, the
              short quiz below will point you in the right direction.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 mt-6 font-medium text-accent hover:underline underline-offset-4"
            >
              Compare all services
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <ol className="border-t border-foreground">
            {services.map((service, i) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group grid grid-cols-[2.5rem_minmax(0,1fr)_auto] sm:grid-cols-[3rem_minmax(0,16rem)_minmax(0,1fr)_auto] gap-x-4 gap-y-1 items-baseline py-5 border-b border-border hover:bg-card transition-colors"
                >
                  <span className="col-start-1 row-start-1 index-mark text-sm">{String(i + 1).padStart(2, "0")}</span>
                  <span className="col-start-2 row-start-1 text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {service.shortTitle}
                  </span>
                  <span className="col-start-2 row-start-2 sm:col-start-3 sm:row-start-1 text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </span>
                  <ArrowRight
                    className="col-start-3 row-start-1 sm:col-start-4 w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ServiceQuiz />

      <SavingsCalculator />

      {/* Who it's for */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground text-balance">
              Built around how your business already runs
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Most clients are small and midsize businesses without an IT department. A good share
              are compliance-sensitive: healthcare providers, home care agencies and counseling
              practices, where intake, documentation and privacy carry extra weight.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 font-medium text-accent hover:underline underline-offset-4"
            >
              About H.F. Tech Consulting
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          <div>
            <h3 className="eyebrow mb-4">Industries served</h3>
            <ul className="border-t border-border">
              {industries.map((industry) => (
                <li key={industry} className="py-3.5 border-b border-border text-foreground">
                  {industry}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How a project works */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-14">
            How a project works
          </h2>

          <div className="hidden md:flex items-center mb-8" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center flex-1 last:flex-none">
                <div className="stepper-node">{String(i + 1).padStart(2, "0")}</div>
                {i < 2 && (
                  <motion.div
                    className="stepper-line origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.3, ease: "easeOut" }}
                  />
                )}
              </div>
            ))}
          </div>

          <ol className="grid md:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <li key={step.title}>
                <div className="stepper-node mb-4 md:hidden">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-sm">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-ink text-ink-foreground border border-border rounded-md px-8 py-14 sm:px-14 grid lg:grid-cols-[minmax(0,1fr)_auto] gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
              Something in your business slow, manual or broken?
            </h2>
            <p className="mt-4 text-ink-foreground/70 text-lg max-w-2xl">
              Describe it in a few sentences. You&apos;ll get a reply within one business day.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-ink-foreground text-ink font-medium rounded-md hover:bg-white transition-colors"
            >
              Get a quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 border border-ink-foreground/40 font-medium rounded-md hover:border-ink-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
