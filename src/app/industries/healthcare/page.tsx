import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Home, MessageCircle, Building2, ShieldCheck, FileText, Workflow } from "lucide-react";
import { breadcrumbJsonLd, buildOpenGraph, jsonLdHtml, SITE_NAME, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";

const title = "Healthcare, Home Care & Counseling IT Solutions";
const description =
  "Technology and workflow automation consulting for healthcare providers, assisted living facilities, home care agencies, and counseling practices in Houston, TX — built around compliance and daily operations.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/industries/healthcare",
  },
  openGraph: buildOpenGraph({
    path: "/industries/healthcare",
    title: `${title} | ${SITE_NAME}`,
    description,
  }),
};

const segments = [
  {
    icon: Building2,
    title: "Assisted Living Facilities",
    description:
      "Resident intake, care documentation, family communication, and staff scheduling all involve recurring paperwork that's easy to automate without changing how care is delivered.",
  },
  {
    icon: MessageCircle,
    title: "Counseling Practices",
    description:
      "Client intake forms, informed consent, scheduling, and session documentation can be moved into secure digital workflows that reduce administrative time between sessions.",
  },
  {
    icon: Home,
    title: "Home Care Agencies",
    description:
      "Caregiver scheduling, visit documentation, client intake, and family communication often span multiple spreadsheets and paper forms — workflow automation can bring these into one system.",
  },
];

const whyUs = [
  "Direct experience working with healthcare, assisted living, counseling, and home care organizations",
  "Technology solutions designed around your existing documentation and care processes, not the other way around",
  "A single point of contact for automation, software, and IT support instead of multiple vendors",
  "Solutions built with an understanding of the compliance and privacy expectations healthcare organizations operate under",
];

const faqs = [
  {
    question: "Can workflow automation help with HIPAA-related documentation requirements?",
    answer:
      "Automation itself doesn't make an organization compliant, but well-designed digital workflows — secure forms, controlled access, and organized, searchable records — make it easier to maintain the consistent documentation and audit trail that compliance requirements call for, compared to paper files or scattered spreadsheets.",
  },
  {
    question: "Do you work with small healthcare practices, or only larger organizations?",
    answer:
      "Most of the healthcare, home care, and counseling organizations we work with are small to midsize — practices and agencies that need better systems but don't have an in-house IT or compliance department.",
  },
  {
    question: "What's usually the first thing you automate for a healthcare client?",
    answer:
      "Intake is the most common starting point. Replacing paper intake forms with secure digital forms — with automatic routing and storage — tends to have the fastest, most noticeable impact on staff time and record consistency.",
  },
];

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries/healthcare" },
  { name: "Healthcare", path: "/industries/healthcare" },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Healthcare & Home Care Technology Consulting",
  description,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: [
    { "@type": "City", name: "Houston" },
    { "@type": "State", name: "Texas" },
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Healthcare providers, assisted living facilities, counseling practices, and home care agencies",
  },
  url: `${SITE_URL}/industries/healthcare`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function HealthcareIndustryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(faqJsonLd) }} />

      <main className="relative pt-32 pb-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
          <div className="absolute inset-0 circuit-pattern opacity-30" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Industries", href: "/industries/healthcare" },
              { name: "Healthcare", href: "/industries/healthcare" },
            ]}
          />

          <h1 className="text-sm uppercase tracking-widest text-accent mb-4">
            Industries We Serve: Healthcare
          </h1>
          <p className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Specialized Technology Solutions for Healthcare Providers
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed mb-16 max-w-3xl">
            Healthcare providers, assisted living facilities, counseling practices, and home care
            agencies handle a lot of the same operational challenges: recurring documentation, intake
            paperwork, scheduling, and a real need to keep client and patient records organized,
            secure, and audit-ready. We build technology and automation around those specific
            realities, not generic business software.
          </p>

          {/* Who We Serve */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8">Who We Work With</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {segments.map((segment) => (
                <div key={segment.title} className="gradient-border p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <segment.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{segment.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{segment.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Compliance & Documentation */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Compliance & Documentation</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Healthcare, home care, and counseling organizations operate under real privacy and
                documentation expectations, and paper files or scattered spreadsheets make those
                expectations harder to meet — records get misfiled, handwriting is hard to read, and
                there&apos;s no reliable way to show who accessed a record and when.
              </p>
              <p>
                We design digital forms, document workflows, and record systems with that context in
                mind: secure storage, controlled access, and a consistent, searchable record every
                time — so your organization is in a stronger position to meet its documentation and
                privacy obligations, whatever they are.
              </p>
            </div>
          </section>

          {/* Process Optimization */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Workflow className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Process Optimization</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Administrative work in healthcare and care settings tends to follow the same pattern:
                a form gets filled out, then re-entered somewhere else, then routed to another person
                for review, often by hand. Each handoff is a chance for something to get delayed or
                missed.
              </p>
              <p>
                We map these processes and automate the repetitive parts — intake routing, appointment
                reminders, document approvals, and reporting — so staff spend less time on paperwork
                and more time with clients and patients.
              </p>
            </div>
          </section>

          {/* Document Management */}
          <section className="mb-20 gradient-border p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Digital Forms & Document Management</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most of our healthcare-focused work starts here. We replace paper intake and consent
              forms with secure digital forms and e-signatures, then organize the resulting records
              into a system that&apos;s actually searchable — instead of a filing cabinet or a shared
              folder full of scanned PDFs.
            </p>
            <Link
              href="/services/digital-forms-document-management"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
            >
              Learn more about digital forms & document management
              <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

          {/* Why Us */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Why Healthcare Organizations Choose H.F. Tech Consulting
            </h2>
            <ul className="space-y-3">
              {whyUs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* FAQ */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="gradient-border p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Services */}
          <section className="mb-20 border-t border-border pt-12">
            <h2 className="text-sm uppercase tracking-widest text-accent mb-6">Related Services</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { slug: "digital-forms-document-management", label: "Digital Forms & Document Management" },
                { slug: "workflow-automation", label: "Workflow Automation" },
                { slug: "data-analytics-reporting", label: "Data Analytics & Reporting" },
              ].map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <p className="text-2xl font-bold text-foreground mb-4 text-balance">
              Let&apos;s talk about your organization&apos;s workflow
            </p>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Schedule a consultation to discuss the administrative and technology challenges
              specific to your practice or agency.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-medium rounded-full hover:bg-accent/90 transition-all duration-200 group"
            >
              Discuss Your Healthcare IT Needs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
