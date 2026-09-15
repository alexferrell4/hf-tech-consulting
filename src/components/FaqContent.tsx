"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { faqCategories } from "@/lib/faq-data";

export default function FaqContent() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(
    faqCategories[0]?.faqs[0]?.question ?? null
  );

  return (
    <main className="relative pt-32 pb-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
        <div className="absolute inset-0 circuit-pattern opacity-30" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "FAQ", href: "/faq" }]} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="text-sm uppercase tracking-widest text-accent mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
            Questions, <span className="gradient-text">answered.</span>
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Answers to the questions we hear most from businesses considering automation,
            custom software, or ongoing IT support. Don&apos;t see what you&apos;re looking for?
            Reach out and we&apos;ll get back to you directly.
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-16">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.05 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">{category.category}</h2>
              <div className="space-y-4">
                {category.faqs.map((faq) => {
                  const isOpen = openQuestion === faq.question;
                  return (
                    <div key={faq.question} className="gradient-border overflow-hidden">
                      <button
                        onClick={() => setOpenQuestion(isOpen ? null : faq.question)}
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between gap-4 p-6 text-left"
                      >
                        <span className="text-lg font-semibold text-foreground">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 flex-shrink-0 text-accent transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-medium rounded-full hover:bg-accent/90 transition-all duration-200 group"
          >
            {"Get in Touch"}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
