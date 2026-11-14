"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, HelpCircle, Loader2 } from "lucide-react";
import { services } from "@/lib/services-data";
import { serviceIconMap } from "@/lib/service-icons";
import { BUSINESS_EMAIL } from "@/lib/seo";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const STEPS = ["Service", "Project", "Your details"];

const inputClass =
  "w-full rounded-[calc(var(--radius)-4px)] border border-border bg-background/60 px-4 py-3 text-foreground placeholder:text-muted-foreground/70 focus:border-accent/60 focus:outline-none transition-colors aria-[invalid=true]:border-red-400/70";

type Errors = Partial<Record<"message" | "name" | "email", string>>;

export default function ContactForm() {
  const searchParams = useSearchParams();
  const initialService = services.some((s) => s.slug === searchParams.get("service"))
    ? (searchParams.get("service") as string)
    : "";
  const initialNote = searchParams.get("note")?.slice(0, 1000) ?? "";

  const [step, setStep] = useState(initialService ? 1 : 0);
  const [service, setService] = useState(initialService);
  const [message, setMessage] = useState(initialNote ? `${initialNote}\n\n` : "");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function validate(current: number): boolean {
    const next: Errors = {};
    if (current === 1 && message.trim().length < 10) {
      next.message = "Tell us a little about what you need (a sentence or two is fine).";
    }
    if (current === 2) {
      if (!name.trim()) next.name = "Please enter your name.";
      if (!EMAIL_PATTERN.test(email.trim())) next.email = "Please enter a valid email address.";
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
        body: JSON.stringify({ name, email, phone, company, service, message, website }),
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
        <h2 className="text-2xl font-bold text-foreground mb-3">Message sent</h2>
        <p className="text-muted-foreground max-w-sm mx-auto">
          Thanks, {name.trim().split(" ")[0]}. We typically reply within 24 hours on business days.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Progress */}
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
            <fieldset>
              <legend className="text-xl font-semibold text-foreground mb-5">
                What can we help with?
              </legend>
              <div className="grid sm:grid-cols-2 gap-3">
                {[...services.map((s) => ({ slug: s.slug, label: s.shortTitle, Icon: serviceIconMap[s.icon] })), { slug: "", label: "Not sure yet", Icon: HelpCircle }].map(
                  ({ slug, label, Icon }) => {
                    const selected = service === slug;
                    return (
                      <label
                        key={label}
                        className={`flex items-center gap-3 px-4 py-3 rounded-[calc(var(--radius)-4px)] border cursor-pointer transition-colors duration-200 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-accent ${
                          selected
                            ? "border-accent/60 bg-accent/10 text-foreground"
                            : "border-border text-muted-foreground hover:border-accent/30 hover:text-foreground"
                        }`}
                      >
                        <input
                          type="radio"
                          name="service"
                          value={slug}
                          checked={selected}
                          onChange={() => setService(slug)}
                          className="sr-only"
                        />
                        <Icon className={`w-5 h-5 shrink-0 ${selected ? "text-accent" : ""}`} strokeWidth={1.5} />
                        <span className="text-sm font-medium">{label}</span>
                      </label>
                    );
                  }
                )}
              </div>
            </fieldset>
          )}

          {step === 1 && (
            <div>
              <label htmlFor="contact-message" className="block text-xl font-semibold text-foreground mb-2">
                Tell us about your project
              </label>
              <p className="text-sm text-muted-foreground mb-5">
                What&apos;s manual, slow, or broken today? Rough notes are fine.
              </p>
              <textarea
                id="contact-message"
                rows={7}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                className={`${inputClass} resize-y`}
              />
              {errors.message && (
                <p id="contact-message-error" className="mt-2 text-sm text-red-400">
                  {errors.message}
                </p>
              )}
            </div>
          )}

          {step === 2 && (
            <div>
              <p className="text-xl font-semibold text-foreground mb-5">How do we reach you?</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm text-muted-foreground mb-2">
                    Full name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    className={inputClass}
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="mt-2 text-sm text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm text-muted-foreground mb-2">
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    className={inputClass}
                  />
                  {errors.email && (
                    <p id="contact-email-error" className="mt-2 text-sm text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm text-muted-foreground mb-2">
                    Phone <span className="text-muted-foreground/60">(optional)</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="contact-company" className="block text-sm text-muted-foreground mb-2">
                    Company <span className="text-muted-foreground/60">(optional)</span>
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    autoComplete="organization"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {status === "error" && (
        <p role="alert" className="mt-6 text-sm text-red-400">
          Your message didn&apos;t send. Please try again, or email us directly at{" "}
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
            "Send message"
          )}
        </button>
      </div>
    </form>
  );
}
