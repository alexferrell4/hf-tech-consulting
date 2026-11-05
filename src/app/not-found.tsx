import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

const helpfulLinks = [
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <main className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
        <div className="absolute inset-0 circuit-pattern opacity-30" />
      </div>

      <div className="relative max-w-2xl mx-auto px-6 py-20 text-center">
        <span className="index-mark text-6xl sm:text-7xl">404</span>
        <p className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
          This page doesn&apos;t exist.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-md mx-auto">
          The page you&apos;re looking for may have been moved or no longer exists.
          Here are a few places that might help.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-cta text-accent-foreground font-medium rounded-full hover:bg-accent-cta/90 active:scale-[0.97] transition-all duration-200 group"
          >
            Back to Home
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-full hover:bg-muted active:scale-[0.97] transition-all duration-200"
          >
            <Search className="w-4 h-4" />
            Contact Us
          </Link>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="eyebrow mb-5">Popular Pages</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {helpfulLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
