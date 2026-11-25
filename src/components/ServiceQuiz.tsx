"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Plus, RotateCcw } from "lucide-react";
import { services, type Service } from "@/lib/services-data";
import { serviceIconMap } from "@/lib/service-icons";
import { contactHref } from "@/lib/contact-link";

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

// The quiz itself, without page chrome. With `onPick` (the quote page) the
// result offers to add the recommended service to the visitor's request
// instead of linking away from the form they are filling in.
export function ServiceQuizCard({
  onPick,
  picked = [],
  compact = false,
}: {
  onPick?: (slug: string) => void;
  picked?: string[];
  compact?: boolean;
}) {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Partial<Record<ServiceSlug, number>>>({});
  const [answers, setAnswers] = useState<string[]>([]);

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
    setAnswers((prev) => [...prev, option.label]);
    setStep((s) => s + 1);
  }

  function handleRestart() {
    setStep(0);
    setScores({});
    setAnswers([]);
  }

  const progress = Math.min(step, questions.length) / questions.length;
  const ResultIcon = result ? serviceIconMap[result.icon] : null;

  const alreadyPicked = result ? picked.includes(result.slug) : false;

  return (
    <>
          {/* Progress dots */}
          <div className={`flex items-center gap-2 ${compact ? "mb-6" : "mb-10"}`}>
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
                <h3 className={`font-semibold text-foreground mb-4 text-balance ${compact ? "text-xl" : "text-2xl sm:text-3xl"}`}>
                  {result.title}
                </h3>
                <p className={`text-muted-foreground leading-relaxed max-w-xl mx-auto ${compact ? "text-sm mb-6" : "mb-8"}`}>
                  {result.description}
                </p>
                {onPick ? (
                  <div className="flex flex-col gap-3 items-center">
                    <button
                      type="button"
                      disabled={alreadyPicked}
                      onClick={() => onPick(result.slug)}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-cta text-accent-foreground font-medium rounded-md hover:bg-accent-cta-hover disabled:bg-muted disabled:text-foreground transition-all duration-200"
                    >
                      {alreadyPicked ? (
                        <>
                          <Check className="w-4 h-4 text-accent" strokeWidth={2.5} />
                          Added to your quote
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          Add to my quote
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={handleRestart}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Retake Quiz
                    </button>
                  </div>
                ) : (
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href={`/services/${result.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-cta text-accent-foreground font-medium rounded-md hover:bg-accent-cta-hover transition-all duration-200 group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={contactHref({
                      service: result.slug,
                      note: `From the service quiz: ${answers.join(" / ")}`,
                    })}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-md hover:bg-muted transition-all duration-200"
                  >
                    Talk to Us About It
                  </Link>
                  <button
                    type="button"
                    onClick={handleRestart}
                    className="inline-flex items-center justify-center gap-2 px-4 py-4 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Retake Quiz
                  </button>
                </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className={`font-semibold text-foreground text-balance ${compact ? "text-lg mb-4" : "text-xl sm:text-2xl mb-6"}`}>
                  {questions[step].prompt}
                </h3>
                <div className={`grid gap-3 ${compact ? "" : "sm:grid-cols-2"}`}>
                  {questions[step].options.map((option) => (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => handleAnswer(option)}
                      className={`text-left rounded-[calc(var(--radius)-6px)] border border-border bg-background/50 text-foreground hover:border-accent/40 hover:bg-accent/5 transition-all duration-200 ${compact ? "px-4 py-3 text-sm" : "px-5 py-4"}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
    </>
  );
}

export default function ServiceQuiz() {
  return (
    <section id="quiz" className="bg-muted border-y border-border scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-[320px_minmax(0,1fr)] gap-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground text-balance">
            Not sure which service you need?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Three questions, about thirty seconds. You&apos;ll get a recommendation and can take it
            straight into a conversation or a quote request.
          </p>
        </div>
        <div className="panel p-6 sm:p-10">
          <ServiceQuizCard />
        </div>
      </div>
    </section>
  );
}
