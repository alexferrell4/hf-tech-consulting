"use client";

import { Suspense } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export default function ContactContent() {
  return (
    <main className="pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />

        <PageHero
          label="Contact"
          title="Tell us what you're working on"
          description="Send a short message about what's slow, manual or broken, and you'll get a reply within one business day. For a priced estimate, use the quote form instead."
        />

        <div className="grid lg:grid-cols-[320px_minmax(0,1fr)] gap-12">
          <div className="space-y-10">
            <dl className="border-t border-foreground">
              <div className="py-4 border-b border-border">
                <dt className="eyebrow mb-1">Phone</dt>
                <dd>
                  <a href="tel:+12812233570" className="text-lg text-foreground hover:text-accent">
                    (281) 223-3570
                  </a>
                </dd>
              </div>
              <div className="py-4 border-b border-border">
                <dt className="eyebrow mb-1">Email</dt>
                <dd>
                  <a href="mailto:alex@hftechconsulting.com" className="text-lg text-foreground hover:text-accent break-all">
                    alex@hftechconsulting.com
                  </a>
                </dd>
              </div>
              <div className="py-4 border-b border-border">
                <dt className="eyebrow mb-1">Location</dt>
                <dd className="text-lg text-foreground">Houston, Texas</dd>
              </div>
            </dl>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Replies usually come within one business day. If something is urgent, call.
            </p>

            <div className="border-l-2 border-accent pl-4">
              <p className="font-medium text-foreground">Need a price?</p>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The quote form asks for scope, timeline and budget so the estimate is accurate.
              </p>
              <Link href="/quote" className="text-sm font-medium text-accent hover:underline underline-offset-4">
                Request a quote
              </Link>
            </div>
          </div>

          <div className="panel p-6 md:p-10">
            {/* ContactForm reads the URL query (service / note prefill), which
                needs a Suspense boundary on a prerendered page. */}
            <Suspense fallback={<div className="h-96" />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
