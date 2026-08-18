import type { Metadata } from "next";
import ServicesContent from "@/components/ServicesContent";
import { services, faqs } from "@/lib/services-data";
import { breadcrumbJsonLd, jsonLdHtml, buildOpenGraph, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Workflow automation, custom software development, cloud solutions, data analytics, website management, digital forms, and IT support for businesses in Houston, TX and beyond.",
  alternates: {
    canonical: "/services",
  },
  openGraph: buildOpenGraph({
    path: "/services",
    title: `Services | ${SITE_NAME}`,
    description:
      "Workflow automation, custom software development, cloud solutions, data analytics, website management, and IT support for businesses in Houston, TX.",
  }),
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
]);

const serviceListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: {
        "@type": "State",
        name: "Texas",
      },
    },
  })),
};

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

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(serviceListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(faqJsonLd) }}
      />
      <ServicesContent />
    </>
  );
}
