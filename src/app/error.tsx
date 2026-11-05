"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
        <div className="absolute inset-0 circuit-pattern opacity-30" />
      </div>

      <div className="relative max-w-xl mx-auto px-6 py-20 text-center">
        <p className="eyebrow mb-4">Something Went Wrong</p>
        <p className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
          This page hit an unexpected error.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Try reloading the page. If the problem keeps happening, let us know and we&apos;ll take a look.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-cta text-accent-foreground font-medium rounded-full hover:bg-accent-cta/90 active:scale-[0.97] transition-all duration-200 group"
          >
            <RotateCcw className="w-4 h-4 group-hover:-rotate-45 transition-transform" />
            Try Again
          </button>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-full hover:bg-muted active:scale-[0.97] transition-all duration-200 group"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </main>
  );
}
