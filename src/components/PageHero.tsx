import type { CSSProperties, ReactNode } from "react";

// Shared inner-page header: a small label, the page's h1, and one paragraph.
// The entrance animation is CSS-only so the headline paints before hydration.
export default function PageHero({
  label,
  title,
  description,
  aside,
}: {
  label: string;
  title: string;
  description: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <header className="grid lg:grid-cols-[minmax(0,1fr)_280px] gap-x-16 gap-y-8 items-end border-b border-border pb-12 mb-16">
      <div className="max-w-3xl min-w-0">
        <p className="eyebrow mb-5 rise-in">{label}</p>
        <h1
          className="rise-in text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold tracking-tight leading-[1.08] text-foreground mb-6 text-balance"
          style={{ "--delay": "60ms" } as CSSProperties}
        >
          {title}
        </h1>
        <p
          className="rise-in text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl"
          style={{ "--delay": "120ms" } as CSSProperties}
        >
          {description}
        </p>
      </div>
      {aside && (
        <div className="rise-in text-sm text-muted-foreground" style={{ "--delay": "180ms" } as CSSProperties}>
          {aside}
        </div>
      )}
    </header>
  );
}
