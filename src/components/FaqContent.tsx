"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search, X } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import { faqCategories } from "@/lib/faq-data";

export default function FaqContent() {
  const [query, setQuery] = useState("");
  const term = query.trim().toLowerCase();

  const categories = faqCategories
    .map((category) => ({
      ...category,
      faqs: term
        ? category.faqs.filter(
            (faq) =>
              faq.question.toLowerCase().includes(term) || faq.answer.toLowerCase().includes(term)
          )
        : category.faqs,
    }))
    .filter((category) => category.faqs.length > 0);

  const matchCount = categories.reduce((sum, category) => sum + category.faqs.length, 0);

  return (
    <main className="pt-12 pb-20">

      <div className="relative max-w-5xl mx-auto px-6">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "FAQ", href: "/faq" }]} />

        <PageHero
          label="FAQ"
          title="Frequently asked questions"
          description={
            <>
              The questions that come up most from businesses considering automation, custom
              software or ongoing IT support. Don&apos;t see yours?{" "}
              <Link href="/contact" className="text-accent underline underline-offset-4">
                Ask directly
              </Link>
              .
            </>
          }
        />

        <div className="max-w-4xl">
          {/* Search */}
          <div className="relative mb-12">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" strokeWidth={1.5} />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions (try &quot;cost&quot; or &quot;healthcare&quot;)"
              aria-label="Search frequently asked questions"
              className="w-full rounded-md border border-border bg-card pl-13 pr-12 py-4 text-foreground placeholder:text-muted-foreground focus:border-accent/60 focus:outline-none transition-colors [&::-webkit-search-cancel-button]:hidden"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <p className="sr-only" role="status">
            {term ? `${matchCount} question${matchCount === 1 ? "" : "s"} found` : ""}
          </p>

          {/* FAQ Categories */}
          {categories.length === 0 ? (
            <div className="panel p-8 text-center">
              <p className="text-foreground font-medium mb-2">No questions match &ldquo;{query}&rdquo;.</p>
              <p className="text-muted-foreground text-sm">
                Try a different word, or{" "}
                <Link href="/contact" className="text-accent hover:text-accent/80 underline underline-offset-2">
                  ask us directly
                </Link>
                .
              </p>
            </div>
          ) : (
            <div className="space-y-16">
              {categories.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                >
                  <h2 className="text-2xl font-semibold text-foreground mb-6">{category.category}</h2>
                  <FaqAccordion
                    // Remount when the search changes so the first match opens.
                    key={term}
                    faqs={category.faqs}
                    defaultOpen={categoryIndex === 0 ? category.faqs[0]?.question : null}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-32 text-center"
        >
          <p className="text-muted-foreground mb-8">
            {"Still have questions? We're happy to talk through your specific situation."}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-cta text-accent-foreground font-medium rounded-md hover:bg-accent-cta-hover transition-all duration-200 group"
          >
            {"Get in Touch"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
