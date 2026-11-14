"use client";

import { useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

const MODES = [
  { id: "before", label: "Without it" },
  { id: "after", label: "With it" },
] as const;

type Mode = (typeof MODES)[number]["id"];

// Both lists stay in the DOM (the inactive one is hidden) so the outcomes
// copy is always present in the page HTML.
export default function BeforeAfter({ before, after }: { before: string[]; after: string[] }) {
  const [mode, setMode] = useState<Mode>("before");

  return (
    <div className="panel p-8">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-foreground">What Changes</h2>
        <div role="group" aria-label="Compare before and after" className="flex rounded-full border border-border p-1">
          {MODES.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              aria-pressed={mode === id}
              onClick={() => setMode(id)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                mode === id ? "text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {mode === id && (
                <motion.span
                  layoutId="before-after-highlight"
                  className={`absolute inset-0 rounded-full ${id === "after" ? "bg-accent-cta" : "bg-muted"}`}
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              <span className="relative">{label}</span>
            </button>
          ))}
        </div>
      </div>

      <ul className="border-t border-border" hidden={mode !== "before"}>
        {before.map((item, i) => (
          <li
            key={item}
            className="rise-in flex items-start gap-3 py-3.5 border-b border-border"
            style={{ "--delay": `${i * 70}ms` } as CSSProperties}
          >
            <X className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" strokeWidth={1.75} />
            <span className="text-muted-foreground leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      <ul className="border-t border-border" hidden={mode !== "after"}>
        {after.map((item, i) => (
          <li
            key={item}
            className="rise-in flex items-start gap-3 py-3.5 border-b border-border"
            style={{ "--delay": `${i * 70}ms` } as CSSProperties}
          >
            <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.75} />
            <span className="text-foreground leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      {mode === "before" && (
        <button
          type="button"
          onClick={() => setMode("after")}
          className="mt-6 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
        >
          See what it looks like after →
        </button>
      )}
    </div>
  );
}
