import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services-data";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Get a Quote", href: "/quote" },
];

const linkClass = "text-ink-foreground/85 hover:text-ink-foreground hover:underline underline-offset-4";

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-ink-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1.4fr_1fr] gap-12">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 rounded-md bg-ink-foreground">
                <Image src="/logo-emblem.png" alt="H.F. Tech Consulting logo" fill sizes="40px" className="object-contain p-1" />
              </div>
              <span className="font-semibold text-lg tracking-tight">H.F. Tech Consulting</span>
            </Link>
            <p className="text-sm leading-relaxed text-ink-foreground/70 max-w-xs">
              Workflow automation, custom software, websites and IT support for small and midsize
              businesses in Houston and across Texas.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-foreground/60 mb-4">Site</h2>
            <ul className="space-y-2.5 text-sm">
              {navigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-foreground/60 mb-4">Services</h2>
            <ul className="space-y-2.5 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className={linkClass}>
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-foreground/60 mb-4">Contact</h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="tel:+12812233570" className={linkClass}>
                  (281) 223-3570
                </a>
              </li>
              <li>
                <a href="mailto:alex@hftechconsulting.com" className={`${linkClass} break-all`}>
                  alex@hftechconsulting.com
                </a>
              </li>
              <li className="text-ink-foreground/70">Houston, Texas</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-ink-foreground/15 flex flex-col sm:flex-row gap-3 justify-between text-sm text-ink-foreground/60">
          <p>© 2026 H.F. Tech Consulting</p>
          <Link href="/privacy" className="hover:text-ink-foreground hover:underline underline-offset-4">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
