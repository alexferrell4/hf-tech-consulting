"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import { QuoteVisual } from "@/components/HeroVisuals";
import QuoteForm from "@/components/QuoteForm";
import { ServiceQuizCard } from "@/components/ServiceQuiz";
import { services } from "@/lib/services-data";

const steps = [
  { title: "Tell us what you need", description: "Pick the services and describe the project. It takes a couple of minutes." },
  { title: "We review it", description: "Your request goes straight to us. If anything is unclear, we'll ask before quoting." },
  { title: "You get a quote", description: "We reply with a quote for the work, typically within 24 hours on business days." },
];

// Holds the selected services so the quiz (left) can add to the form (right).
function QuoteWorkspace() {
  const searchParams = useSearchParams();
  const fromUrl = searchParams.get("service");
  const [selected, setSelected] = useState<string[]>(
    services.some((service) => service.slug === fromUrl) ? [fromUrl as string] : []
  );

  const toggle = (slug: string) =>
    setSelected((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
  const add = (slug: string) => setSelected((prev) => (prev.includes(slug) ? prev : [...prev, slug]));

  return (
    <div className="grid lg:grid-cols-5 gap-12 items-start">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="lg:col-span-3 lg:order-2"
      >
        <div className="gradient-border p-6 md:p-10">
          <QuoteForm selected={selected} onToggleService={toggle} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="lg:col-span-2 lg:order-1 space-y-8"
      >
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">How It Works</h2>
          <ol className="relative ml-5 border-l border-accent/30">
            {steps.map((step, i) => (
              <li key={step.title} className="relative pl-10 pb-8 last:pb-0">
                <span className="stepper-node absolute -left-[1.375rem] top-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-semibold text-foreground pt-2 mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="panel p-6">
          <h2 className="eyebrow mb-2">Not sure what to pick?</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Answer three quick questions and add our recommendation to your request.
          </p>
          <ServiceQuizCard compact onPick={add} picked={selected} />
        </div>
      </motion.div>
    </div>
  );
}

export default function QuoteContent() {
  return (
    <main className="relative pt-32 pb-20">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent-secondary/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 circuit-pattern opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Get a Quote", href: "/quote" }]} />

        <PageHero
          eyebrow="Request a Quote"
          headline={[{ text: "Tell us the project." }, { text: "We'll price it.", className: "gradient-text" }]}
          description="Share what you need and we'll come back with a quote for the work. No obligation, and no automated estimates: a person reads every request."
          visual={<QuoteVisual />}
        />

        {/* The workspace reads ?service= from the URL, which needs a Suspense
            boundary on a prerendered page. */}
        <Suspense fallback={<div className="h-96" />}>
          <QuoteWorkspace />
        </Suspense>
      </div>
    </main>
  );
}
