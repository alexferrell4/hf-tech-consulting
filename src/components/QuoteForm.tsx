"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Loader2 } from "lucide-react";
import { services } from "@/lib/services-data";
import { serviceIconMap } from "@/lib/service-icons";
import { BUDGET_OPTIONS, TIMELINE_OPTIONS, CONTACT_METHODS } from "@/lib/quote-options";
import { BUSINESS_EMAIL } from "@/lib/seo";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const STEPS = ["Services", "Scope", "Your details"];

const inputClass =
  "w-full rounded-[calc(var(--radius)-4px)] border border-border bg-background/60 px-4 py-3 text-foreground placeholder:text-muted-foreground/70 focus:border-accent/60 focus:outline-none transition-colors aria-[invalid=true]:border-red-400/70";

const chipClass = (selected: boolean) =>
  `px-4 py-2.5 rounded-full border text-sm font-medium cursor-pointer transition-colors duration-200 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-accent ${
    selected
      ? "border-accent/60 bg-accent/10 text-foreground"
      : "border-border text-muted-foreground hover:border-accent/30 hover:text-foreground"
  }`;

type Errors = Partial<Record<"services" | "message" | "name" | "email" | "phone", string>>;

function ChipGroup({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset>
      <legend className="block text-sm text-muted-foreground mb-3">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <label key={option} className={chipClass(value === option)}>
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className="sr-only"
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function QuoteForm({
  selected,
  onToggleService,
}: {
  selected: string[];
  onToggleService: (slug: string) => void;
}) {
  const [step, setStep] = useState(0);
  const [message, setMessage] = useState("");
  const [timeline, setTimeline] = useState("");
  const [budget, setBudget] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [contactMethod, setContactMethod] = useState<string>(CONTACT_METHODS[0]);
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function validate(current: number): boolean {
    const next: Errors = {};
    if (current === 0 && selected.length === 0) {
      next.services = "Pick at least one service (your best guess is fine).";
    }
    if (current === 1 && message.trim().length < 10) {
      next.message = "Describe what you need quoted (a sentence or two is fine).";
    }
    if (current === 2) {
      if (!name.trim()) next.name = "Please enter your name.";
      if (!EMAIL_PATTERN.test(email.trim())) next.email = "Please enter a valid email address.";
      if (contactMethod !== "Email" && !phone.trim()) {
        next.phone = "Add a phone number so we can reach you that way.";
      }
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (step < 2) {
      if (validate(step)) setStep(step + 1);
      return;
    }
    if (!validate(2)) return;
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "quote",
          services: selected,
          message,
          timeline,
          budget,
          name,
          email,
          phone,
          company,
          contactMethod,
          website,
        }),
      });
      setStatus(response.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-16 text-center"
        role="status"
      >
        <CheckCircle2 className="w-14 h-14 text-accent mx-auto mb-6" strokeWidth={1.25} />
        <h2 className="text-2xl font-bold text-foreground mb-3">Quote request received</h2>
        <p className="text-muted-foreground max-w-sm mx-auto">
          Thanks, {name.trim().split(" ")[0]}. We&apos;ll review the details and get back to you
          with a quote, typically within 24 hours on business days.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <ol className="flex items-center gap-3 mb-8">
        {STEPS.map((label, i) => (
          <li key={label} className="flex-1" aria-current={i === step ? "step" : undefined}>
            <div className="h-1 rounded-full bg-border overflow-hidden mb-2">
              <motion.div
                className="h-full bg-accent origin-left"
                initial={false}
                animate={{ scaleX: i <= step ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <span className={`font-mono text-xs ${i === step ? "text-foreground" : "text-muted-foreground"}`}>
              {String(i + 1).padStart(2, "0")} {label}
            </span>
          </li>
        ))}
      </ol>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input
            type="text"
            name="confirm_url"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </label>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.2 }}
        >
          {step === 0 && (
            <fieldset aria-describedby={errors.services ? "quote-services-error" : undefined}>
              <legend className="text-xl font-semibold text-foreground mb-2">
                What do you need a quote for?
              </legend>
              <p className="text-sm text-muted-foreground mb-5">Select everything that applies.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((service) => {
                  const Icon = serviceIconMap[service.icon];
                  const checked = selected.includes(service.slug);
                  return (
                    <label
                      key={service.slug}
                      className={`flex items-center gap-3 px-4 py-3 rounded-[calc(var(--radius)-4px)] border cursor-pointer transition-colors duration-200 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-accent ${
                        checked
                          ? "border-accent/60 bg-accent/10 text-foreground"
                          : "border-border text-muted-foreground hover:border-accent/30 hover:text-foreground"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => onToggleService(service.slug)}
                        className="sr-only"
                      />
                      <Icon className={`w-5 h-5 shrink-0 ${checked ? "text-accent" : ""}`} strokeWidth={1.5} />
                      <span className="text-sm font-medium flex-1">{service.shortTitle}</span>
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
                          checked ? "border-accent bg-accent text-white" : "border-border"
                        }`}
                        aria-hidden="true"
                      >
                        {checked && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
                      </span>
                    </label>
                  );
                })}
              </div>
              {errors.services && selected.length === 0 && (
                <p id="quote-services-error" className="mt-3 text-sm text-red-400">
                  {errors.services}
                </p>
              )}
            </fieldset>
          )}

          {step === 1 && (
            <div className="space-y-7">
              <div>
                <label htmlFor="quote-message" className="block text-xl font-semibold text-foreground mb-2">
                  Describe the project
                </label>
                <p className="text-sm text-muted-foreground mb-4">
                  What should it do, what tools do you use today, and roughly how many people are
                  involved? The more detail, the more accurate the quote.
                </p>
                <textarea
                  id="quote-message"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "quote-message-error" : undefined}
                  className={`${inputClass} resize-y`}
                />
                {errors.message && (
                  <p id="quote-message-error" className="mt-2 text-sm text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>
              <ChipGroup
                legend="When do you need it? (optional)"
                name="timeline"
                options={TIMELINE_OPTIONS}
                value={timeline}
                onChange={setTimeline}
              />
              <ChipGroup
                legend="Budget range (optional)"
                name="budget"
                options={BUDGET_OPTIONS}
                value={budget}
                onChange={setBudget}
              />
            </div>
          )}

          {step === 2 && (
            <div>
              <p className="text-xl font-semibold text-foreground mb-5">Where should we send the quote?</p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="quote-name" className="block text-sm text-muted-foreground mb-2">
                    Full name
                  </label>
                  <input
                    id="quote-name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "quote-name-error" : undefined}
                    className={inputClass}
                  />
                  {errors.name && (
                    <p id="quote-name-error" className="mt-2 text-sm text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="quote-email" className="block text-sm text-muted-foreground mb-2">
                    Email address
                  </label>
                  <input
                    id="quote-email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "quote-email-error" : undefined}
                    className={inputClass}
                  />
                  {errors.email && (
                    <p id="quote-email-error" className="mt-2 text-sm text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="quote-phone" className="block text-sm text-muted-foreground mb-2">
                    Phone{" "}
                    {contactMethod === "Email" && <span className="text-muted-foreground/60">(optional)</span>}
                  </label>
                  <input
                    id="quote-phone"
                    type="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "quote-phone-error" : undefined}
                    className={inputClass}
                  />
                  {errors.phone && (
                    <p id="quote-phone-error" className="mt-2 text-sm text-red-400">
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="quote-company" className="block text-sm text-muted-foreground mb-2">
                    Company <span className="text-muted-foreground/60">(optional)</span>
                  </label>
                  <input
                    id="quote-company"
                    type="text"
                    autoComplete="organization"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
              <ChipGroup
                legend="Best way to reach you"
                name="contactMethod"
                options={CONTACT_METHODS}
                value={contactMethod}
                onChange={setContactMethod}
              />
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {status === "error" && (
        <p role="alert" className="mt-6 text-sm text-red-400">
          Your request didn&apos;t send. Please try again, or email us directly at{" "}
          <a href={`mailto:${BUSINESS_EMAIL}`} className="underline underline-offset-2">
            {BUSINESS_EMAIL}
          </a>
          .
        </p>
      )}

      <div className="flex items-center justify-between gap-4 mt-8">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => {
              setErrors({});
              setStep(step - 1);
            }}
            className="inline-flex items-center gap-2 px-5 py-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        ) : (
          <span />
        )}
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent-cta text-accent-foreground font-medium rounded-full hover:bg-accent-cta/90 active:scale-[0.97] disabled:opacity-60 transition-all duration-200 group"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending
            </>
          ) : step < 2 ? (
            <>
              Continue
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          ) : (
            "Request quote"
          )}
        </button>
      </div>
    </form>
  );
}
