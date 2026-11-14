"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export type FaqItem = { question: string; answer: string };

export default function FaqAccordion({
  faqs,
  defaultOpen = null,
  headingLevel = "h3",
}: {
  faqs: FaqItem[];
  defaultOpen?: string | null;
  headingLevel?: "h2" | "h3";
}) {
  const [openQuestion, setOpenQuestion] = useState<string | null>(defaultOpen);
  const Heading = headingLevel;

  return (
    <div className="space-y-4">
      {faqs.map((faq) => {
        const isOpen = openQuestion === faq.question;
        return (
          <div key={faq.question} className="panel overflow-hidden">
            <Heading>
              <button
                onClick={() => setOpenQuestion(isOpen ? null : faq.question)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
              >
                <span className="text-lg font-semibold text-foreground">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 text-accent transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </Heading>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
