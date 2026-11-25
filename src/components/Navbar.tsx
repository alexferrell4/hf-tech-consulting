"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  // Close the mobile menu automatically on route change (e.g. back/forward
  // nav) — in-app link clicks already close it via onClick, this only covers
  // browser history navigation while the menu happens to be open.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-sm text-muted-foreground">
          <span>Houston, Texas · Taking new projects</span>
          <div className="flex items-center gap-6">
            <a href="tel:+12812233570" className="hover:text-foreground transition-colors">
              (281) 223-3570
            </a>
            <a href="mailto:alex@hftechconsulting.com" className="hover:text-foreground transition-colors">
              alex@hftechconsulting.com
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="/logo-emblem.png"
                alt="H.F. Tech Consulting logo"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <span className="text-foreground font-semibold text-lg tracking-tight">H.F. Tech Consulting</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-[15px] font-medium underline-offset-[6px] decoration-2 transition-colors ${
                    active
                      ? "text-foreground underline decoration-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              aria-current={isActive("/contact") ? "page" : undefined}
              className={`inline-flex items-center px-4 py-2 text-[15px] font-medium rounded-md border transition-colors ${
                isActive("/contact")
                  ? "border-foreground text-foreground"
                  : "border-border text-foreground hover:border-foreground"
              }`}
            >
              Contact Us
            </Link>
            <Link
              href="/quote"
              aria-current={isActive("/quote") ? "page" : undefined}
              className="inline-flex items-center px-4 py-2 text-[15px] font-medium rounded-md bg-accent-cta text-accent-foreground hover:bg-accent-cta-hover transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2 hover:bg-muted rounded-md transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="px-6 py-6 flex flex-col">
              {[{ href: "/", label: "Home" }, ...links].map((link) => {
                const active = link.href === "/" ? pathname === "/" : isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`py-3 text-lg font-medium border-b border-border ${
                      active ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-5 space-y-2 text-sm text-muted-foreground">
                <a href="tel:+12812233570" className="block py-1 hover:text-foreground">
                  (281) 223-3570
                </a>
                <a href="mailto:alex@hftechconsulting.com" className="block py-1 hover:text-foreground">
                  alex@hftechconsulting.com
                </a>
              </div>

              <div className="pt-5 grid grid-cols-2 gap-3">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center px-4 py-3 border border-foreground text-foreground font-medium rounded-md"
                >
                  Contact Us
                </Link>
                <Link
                  href="/quote"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center px-4 py-3 bg-accent-cta text-accent-foreground font-medium rounded-md"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
