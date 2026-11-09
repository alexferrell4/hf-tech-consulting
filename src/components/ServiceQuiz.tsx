"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, RotateCcw } from "lucide-react";
import { services, type Service } from "@/lib/services-data";
import { serviceIconMap } from "@/lib/service-icons";

type ServiceSlug = Service["slug"];

type QuizOption = {
  label: string;
  weights: Partial<Record<ServiceSlug, number>>;
};

type QuizQuestion = {
  prompt: string;
  options: QuizOption[];
};

const questions: QuizQuestion[] = [
  {
    prompt: "What's your biggest priority right now?",
    options: [
      {
        label: "Free up time spent on repetitive tasks",
        weights: { "workflow-automation": 2, "digital-forms-document-management": 1 },
      },
      {
        label: "Build custom software or an internal tool",
        weights: { "custom-software-development": 2 },
      },
      {
        label: "Turn our business data into clear reports",
        weights: { "data-analytics-reporting": 2 },
      },
      {
        label: "Grow our online presence and generate leads",
        weights: { "digital-marketing": 2, "website-management": 1 },
      },
    ],
  },
  {
    prompt: "What's the bigger headache day to day?",
    options: [
      {
        label: "Paper forms and manual document handling",
        weights: { "digital-forms-document-management": 2, "workflow-automation": 1 },
      },
      {
        label: "Infrastructure that feels outdated or insecure",
        weights: { "cloud-solutions": 2 },
      },
      {
        label: "General tech issues and troubleshooting",
        weights: { "it-support": 2 },
      },
      {
        label: "A website that's slow, outdated, or hard to update",
        weights: { "website-management": 2 },
      },
    ],
  },
  {
    prompt: "How big is your team?",
    options: [
      {
        label: "Just me, or a small team (1–5 people)",
        weights: { "it-support": 1, "workflow-automation": 1 },
      },
      {
        label: "A growing team (6–20 people)",
        weights: { "cloud-solutions": 1, "custom-software-development": 1 },
      },
      {
        label: "Multiple departments (20+ people)",
        weights: { "data-analytics-reporting": 1, "custom-software-development": 1 },
      },
    ],
  },
];

export default function ServiceQuiz() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Partial<Record<ServiceSlug, number>>>({});

  const result = useMemo(() => {
    if (step < questions.length) return null;
    let best: Service = services[0];
    let bestScore = -1;
    for (const service of services) {
      const score = scores[service.slug] ?? 0;
      if (score > bestScore) {
        bestScore = score;
        best = service;
      }
    }
    return best;
  }, [step, scores]);

  function handleAnswer(option: QuizOption) {
    setScores((prev) => {
      const next = { ...prev };
      for (const [slug, weight] of Object.entries(option.weights)) {
        next[slug as ServiceSlug] = (next[slug as ServiceSlug] ?? 0) + (weight ?? 0);
      }
      return next;
    });
    setStep((s) => s + 1);
  }

  function handleRestart() {
    setStep(0);
    setScores({});
  }

  const progress = Math.min(step, questions.length) / questions.length;
  const ResultIcon = result ? serviceIconMap[result.icon] : null;

  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute inset-0 circuit-pattern opacity-50" />
      <div className="relative max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="eyebrow mb-4">Not Sure Where to Start?</h2>
          <p className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Find the Right Service for Your Business
          </p>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Answer three quick questions and we&apos;ll point you to the service that fits best.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="panel p-8 md:p-12"
        >
          {/* Progress dots */}
          <div className="flex items-center gap-2 mb-10">
            {questions.map((_, i) => (
              <div
                key={i}
                className="h-1.5 flex-1 rounded-full bg-border overflow-hidden"
              >
                <motion.div
                  className="h-full bg-accent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: i < step ? 1 : i === step ? progress * questions.length - i : 0 }}
                  style={{ originX: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {result ? (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="text-center"
              >
                <span className="eyebrow block mb-3">We&apos;d Recommend</span>
                {ResultIcon && (
                  <ResultIcon className="w-10 h-10 text-accent mx-auto mb-4" strokeWidth={1.5} />
                )}
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-balance">
                  {result.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
                  {result.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href={`/services/${result.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-cta text-accent-foreground font-medium rounded-full hover:bg-accent-cta/90 active:scale-[0.97] transition-all duration-200 group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button
                    type="button"
                    onClick={handleRestart}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-full hover:bg-muted active:scale-[0.97] transition-all duration-200"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Retake Quiz
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-6 text-balance">
                  {questions[step].prompt}
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {questions[step].options.map((option) => (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => handleAnswer(option)}
                      className="text-left px-5 py-4 rounded-[calc(var(--radius)-6px)] border border-border bg-background/50 text-foreground hover:border-accent/40 hover:bg-accent/5 active:scale-[0.98] transition-all duration-200"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
