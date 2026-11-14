"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search, X } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import { FaqVisual } from "@/components/HeroVisuals";
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
    <main className="relative pt-32 pb-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
        <div className="absolute inset-0 circuit-pattern opacity-30" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "FAQ", href: "/faq" }]} />

        <PageHero
          eyebrow="Frequently Asked Questions"
          headline={[{ text: "Questions," }, { text: "answered.", className: "gradient-text" }]}
          description={
            <>
              Answers to the questions we hear most from businesses considering automation,
              custom software, or ongoing IT support. Don&apos;t see what you&apos;re looking for?
              Reach out and we&apos;ll get back to you directly.
            </>
          }
          visual={<FaqVisual />}
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
              className="w-full rounded-full border border-border bg-card pl-13 pr-12 py-4 text-foreground placeholder:text-muted-foreground focus:border-accent/60 focus:outline-none transition-colors [&::-webkit-search-cancel-button]:hidden"
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.05 }}
                >
                  <h2 className="text-2xl font-bold text-foreground mb-6">{category.category}</h2>
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <p className="text-muted-foreground mb-8">
            {"Still have questions? We're happy to talk through your specific situation."}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-cta text-accent-foreground font-medium rounded-full hover:bg-accent-cta/90 active:scale-[0.97] transition-all duration-200 group"
          >
            {"Get in Touch"}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
