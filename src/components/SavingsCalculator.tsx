"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { contactHref } from "@/lib/contact-link";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const hours = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });

function Slider({
  label,
  value,
  onChange,
  min,
  max,
  step,
  formatValue,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  formatValue: (v: number) => string;
}) {
  const percent = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <label className="text-sm text-muted-foreground">{label}</label>
        <span className="text-lg font-semibold text-foreground font-mono tabular-nums">
          {formatValue(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="savings-slider"
        style={{ "--fill": `${percent}%` } as React.CSSProperties}
        aria-label={label}
      />
    </div>
  );
}

export default function SavingsCalculator() {
  const [weeklyHours, setWeeklyHours] = useState(10);
  const [hourlyCost, setHourlyCost] = useState(40);
  const [automatable, setAutomatable] = useState(30);

  const { hoursPerYear, dollarsPerYear } = useMemo(() => {
    const hrsPerYear = weeklyHours * 52 * (automatable / 100);
    return {
      hoursPerYear: hrsPerYear,
      dollarsPerYear: hrsPerYear * hourlyCost,
    };
  }, [weeklyHours, hourlyCost, automatable]);

  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-[320px_minmax(0,1fr)] gap-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground text-balance">
            What could automation be worth to you?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Move the sliders to match your business. It&apos;s a rough estimate to start the
            conversation; real numbers depend on your actual processes.
          </p>
        </div>

        <div className="panel p-6 sm:p-10 grid md:grid-cols-2 gap-12">
          <div className="space-y-10">
            <Slider
              label="Hours per week on manual, repetitive tasks"
              value={weeklyHours}
              onChange={setWeeklyHours}
              min={1}
              max={40}
              step={1}
              formatValue={(v) => `${v} hr${v === 1 ? "" : "s"}`}
            />
            <Slider
              label="Value of that time, per hour"
              value={hourlyCost}
              onChange={setHourlyCost}
              min={15}
              max={150}
              step={5}
              formatValue={(v) => currency.format(v)}
            />
            <Slider
              label="Realistic automation potential"
              value={automatable}
              onChange={setAutomatable}
              min={10}
              max={60}
              step={5}
              formatValue={(v) => `${v}%`}
            />
            <div className="flex items-start gap-3 text-xs text-muted-foreground">
              <span>
                Most rules-based, repetitive tasks (data entry, scheduling, notifications,
                document handling) can be partially or fully automated. 30% is a reasonable
                starting estimate for most small businesses.
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="border-t-2 border-foreground pt-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={Math.round(hoursPerYear)}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                    className="text-3xl sm:text-4xl font-semibold text-foreground font-mono tabular-nums"
                  >
                    {hours.format(hoursPerYear)}
                  </motion.div>
                </AnimatePresence>
                <div className="text-sm text-muted-foreground mt-1">hours saved per year</div>
              </div>
              <div className="border-t-2 border-foreground pt-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={Math.round(dollarsPerYear)}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                    className="text-3xl sm:text-4xl font-semibold text-foreground font-mono tabular-nums"
                  >
                    {currency.format(dollarsPerYear)}
                  </motion.div>
                </AnimatePresence>
                <div className="text-sm text-muted-foreground mt-1">value per year</div>
              </div>
            </div>

            <Link
              href={contactHref({
                service: "workflow-automation",
                note: `From the savings calculator: about ${weeklyHours} hrs/week of manual work at ${currency.format(hourlyCost)}/hr, ${automatable}% automatable. Estimate: ${hours.format(hoursPerYear)} hours and ${currency.format(dollarsPerYear)} per year.`,
              })}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent-cta text-accent-foreground font-medium rounded-md hover:bg-accent-cta-hover transition-colors"
            >
              Talk through these numbers
            </Link>
            <p className="text-xs text-muted-foreground mt-4">
              Estimate only, not a quote. Real numbers come after a consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
