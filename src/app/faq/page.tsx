import type { Metadata } from "next";
import FaqContent from "@/components/FaqContent";
import { faqs } from "@/lib/faq-data";
import { breadcrumbJsonLd, jsonLdHtml, buildOpenGraph, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about workflow automation, custom software, pricing, and IT support from H.F. Tech Consulting, serving Houston-area businesses and healthcare providers.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: buildOpenGraph({
    path: "/faq",
    title: `FAQ | ${SITE_NAME}`,
    description:
      "Answers to common questions about workflow automation, custom software, pricing, and IT support from H.F. Tech Consulting.",
  }),
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "FAQ", path: "/faq" },
]);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(faqJsonLd) }}
      />
      <FaqContent />
    </>
  );
}
