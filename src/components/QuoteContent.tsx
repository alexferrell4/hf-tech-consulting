"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
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
    <div className="grid lg:grid-cols-[340px_minmax(0,1fr)] gap-12 items-start">
      <div className="panel p-6 md:p-10 lg:order-2">
        <QuoteForm selected={selected} onToggleService={toggle} />
      </div>

      <div className="lg:order-1 space-y-12">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-6">How it works</h2>
          <ol className="relative ml-5 border-l border-foreground">
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

        <div className="bg-muted border border-border rounded-md p-6">
          <h2 className="font-semibold text-foreground mb-1">Not sure what to pick?</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Answer three quick questions and add the recommendation to your request.
          </p>
          <ServiceQuizCard compact onPick={add} picked={selected} />
        </div>
      </div>
    </div>
  );
}

export default function QuoteContent() {
  return (
    <main className="pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Get a Quote", href: "/quote" }]} />

        <PageHero
          label="Get a quote"
          title="Describe the project and get a quote"
          description="Share what you need and you'll get a quote back for the work. No obligation and no automated estimate: a person reads every request."
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
