"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, DollarSign, Sliders, ArrowRight } from "lucide-react";

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
    <section className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="eyebrow mb-4">Estimate Your Savings</h2>
          <p className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
            What Could Automation Be Worth to You?
          </p>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Adjust the sliders to match your business. This is a rough estimate to get you
            thinking — your actual results depend on your specific processes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="panel p-8 md:p-12 grid md:grid-cols-2 gap-12"
        >
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
              <Sliders className="w-4 h-4 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
              <span>
                Most rules-based, repetitive tasks (data entry, scheduling, notifications,
                document handling) can be partially or fully automated. 30% is a reasonable
                starting estimate for most small businesses.
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="rounded-[calc(var(--radius)-6px)] border border-border bg-background/50 p-6 text-center">
                <Clock className="w-5 h-5 text-accent mx-auto mb-3" strokeWidth={1.5} />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={Math.round(hoursPerYear)}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                    className="text-2xl sm:text-3xl font-bold text-foreground font-mono tabular-nums"
                  >
                    {hours.format(hoursPerYear)}
                  </motion.div>
                </AnimatePresence>
                <div className="text-xs text-muted-foreground mt-2">hours saved / year</div>
              </div>
              <div className="rounded-[calc(var(--radius)-6px)] border border-border bg-background/50 p-6 text-center">
                <DollarSign className="w-5 h-5 text-accent mx-auto mb-3" strokeWidth={1.5} />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={Math.round(dollarsPerYear)}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                    className="text-2xl sm:text-3xl font-bold text-foreground font-mono tabular-nums"
                  >
                    {currency.format(dollarsPerYear)}
                  </motion.div>
                </AnimatePresence>
                <div className="text-xs text-muted-foreground mt-2">value / year</div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-cta text-accent-foreground font-medium rounded-full hover:bg-accent-cta/90 active:scale-[0.97] transition-all duration-200 group"
            >
              See how we&apos;d approach this
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-xs text-muted-foreground text-center mt-4">
              Estimate only, not a quote. We&apos;ll give you real numbers after a consultation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
