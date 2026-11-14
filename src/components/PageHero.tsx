import { Fragment, type CSSProperties, type ReactNode } from "react";

export type HeadlineSegment = { text: string; className?: string };

// Shared inner-page header. Animations are CSS-only (see globals.css) so the
// headline is painted before hydration.
export default function PageHero({
  eyebrow,
  headline,
  description,
  visual,
}: {
  eyebrow: string;
  headline: HeadlineSegment[];
  description: ReactNode;
  visual?: ReactNode;
}) {
  const words = headline.flatMap((segment) =>
    segment.text
      .split(" ")
      .filter(Boolean)
      .map((word) => ({ word, className: segment.className }))
  );

  return (
    // Two explicit columns, so the text can never run underneath the visual:
    // the text column is whatever is left after the visual's own width.
    <div className="flex items-center justify-between gap-12 mb-20">
      <div className="max-w-3xl min-w-0 flex-1">
        <h1 className="eyebrow mb-4 rise-in">{eyebrow}</h1>
        <p className="reveal-words text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance break-words">
          {/* A real space between words (not a non-breaking one inside the
              span): every browser must be free to wrap the headline here. */}
          {words.map(({ word, className }, i) => (
            <Fragment key={i}>
              <span className={className} style={{ "--i": i } as CSSProperties}>
                {word}
              </span>
              {i < words.length - 1 ? " " : null}
            </Fragment>
          ))}
        </p>
        <p
          className="rise-in text-xl text-muted-foreground leading-relaxed"
          style={{ "--delay": "250ms" } as CSSProperties}
        >
          {description}
        </p>
      </div>
      {visual && (
        <div
          className="hidden lg:block shrink-0 rise-in"
          style={{ "--delay": "200ms" } as CSSProperties}
          aria-hidden="true"
        >
          {visual}
        </div>
      )}
    </div>
  );
}
