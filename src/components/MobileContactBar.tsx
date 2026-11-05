"use client";

import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";

export default function MobileContactBar() {
  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-xl border-t border-border flex"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href="tel:+12812233570"
        className="flex-1 flex items-center justify-center gap-2 py-3.5 text-foreground font-medium border-r border-border active:bg-muted transition-colors"
      >
        <Phone className="w-4 h-4" strokeWidth={1.75} />
        Call
      </a>
      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-accent-cta text-accent-foreground font-medium active:bg-accent-cta/90 transition-colors"
      >
        <MessageSquare className="w-4 h-4" strokeWidth={1.75} />
        Contact Us
      </Link>
    </div>
  );
}
