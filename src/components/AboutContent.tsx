import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

const expertise = [
  "Workflow automation",
  "Custom software",
  "Cloud solutions",
  "Data analytics",
  "Process optimization",
  "System integration",
  "Healthcare IT",
  "Document management",
];

const reasons = [
  "A dedicated point of contact who knows your systems, not a rotating account team",
  "Solutions built around your actual process, not a one-size-fits-all package",
  "Specialized experience with healthcare, home care and counseling organizations",
  "Houston-based, with the flexibility to support remote and hybrid teams",
  "One partner for automation, software, cloud and IT support instead of several vendors",
  "Honest recommendations, including telling you when you don't need something",
];

export default function AboutContent() {
  return (
    <main className="pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} />

        <PageHero
          label="About"
          title="A Houston technology consulting firm"
          description="H.F. Tech Consulting builds and supports the systems small businesses run on: automated workflows, custom tools, websites, cloud setups and day-to-day IT."
          aside={
            <dl className="space-y-3">
              <div>
                <dt className="eyebrow">Founded by</dt>
                <dd className="text-foreground">Harrison Ferrell</dd>
              </div>
              <div>
                <dt className="eyebrow">Based in</dt>
                <dd className="text-foreground">Houston, Texas</dd>
              </div>
            </dl>
          }
        />

        {/* Story */}
        <section className="grid lg:grid-cols-[320px_minmax(0,1fr)] gap-12 mb-24">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">Why it exists</h2>
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed max-w-3xl">
            <p>
              Most small and midsize businesses need real technology expertise, the kind larger
              companies get from an in-house IT department or an agency retainer, but don&apos;t have
              the budget or the day-to-day need to justify either one.
            </p>
            <p>
              H.F. Tech Consulting keeps engagements direct. Every client has a dedicated point of
              contact who knows their systems, from the first conversation through ongoing support,
              instead of being handed between departments and account managers. That&apos;s what makes
              it possible to build around how a business actually operates, rather than selling a
              generic package.
            </p>
          </div>
        </section>

        {/* Founder */}
        <section className="grid lg:grid-cols-[320px_minmax(0,1fr)] gap-12 mb-24 border-t border-border pt-16">
          <div>
            <div className="panel p-8 flex flex-col items-center text-center">
              <div className="relative w-28 h-28 mb-5">
                <Image
                  src="/logo-emblem.png"
                  alt="Harrison Ferrell, founder of H.F. Tech Consulting"
                  fill
                  sizes="112px"
                  className="object-contain"
                />
              </div>
              <p className="text-xl font-semibold text-foreground">Harrison Ferrell</p>
              <p className="text-sm text-muted-foreground mt-1">Founder and lead consultant</p>
              <p className="text-sm text-muted-foreground">B.S. Computer Science</p>
            </div>
          </div>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">The founder</h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-medium">Harrison Ferrell</span> started H.F.
                Tech Consulting to give small businesses access to the kind of technology work
                usually reserved for larger companies.
              </p>
              <p>
                He holds a Bachelor of Science in Computer Science and works across software
                development, workflow automation, cloud technologies and business process
                improvement, with a focus on understanding how a business operates before changing
                anything.
              </p>
            </div>
            <h3 className="eyebrow mt-10 mb-3">Areas of work</h3>
            <p className="text-foreground leading-relaxed">{expertise.join(" · ")}</p>
          </div>
        </section>

        {/* Approach & area */}
        <section className="grid md:grid-cols-2 gap-px bg-border border border-border mb-24">
          <div className="bg-card p-8 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">Approach</h2>
            <p className="text-muted-foreground leading-relaxed">
              Every engagement starts with how your business actually operates today, not which
              software you think you need. The recommendation is the smallest solution that solves
              the real problem, whether that&apos;s a single automated workflow or a custom-built
              application.
            </p>
          </div>
          <div className="bg-card p-8 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">Service area</h2>
            <p className="text-muted-foreground leading-relaxed">
              Based in Houston and working with businesses throughout the Greater Houston area and
              across Texas. Because most of the work (automation, custom software, cloud setup and
              IT support) can be done remotely, clients outside Texas are welcome too.
            </p>
          </div>
        </section>

        {/* Why clients choose it */}
        <section className="grid lg:grid-cols-[320px_minmax(0,1fr)] gap-12 border-t border-border pt-16">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground text-balance">
            Why clients choose H.F. Tech Consulting
          </h2>
          <div>
            <ol className="border-t border-foreground">
              {reasons.map((reason, i) => (
                <li key={reason} className="grid grid-cols-[2.5rem_minmax(0,1fr)] py-4 border-b border-border">
                  <span className="index-mark text-sm">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-foreground">{reason}</span>
                </li>
              ))}
            </ol>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-10 px-6 py-3.5 bg-accent-cta text-accent-foreground font-medium rounded-md hover:bg-accent-cta-hover transition-colors"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
