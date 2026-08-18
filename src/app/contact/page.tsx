import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";
import { breadcrumbJsonLd, jsonLdHtml, buildOpenGraph, BUSINESS_EMAIL, BUSINESS_PHONE, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schedule a consultation with H.F. Tech Consulting in Houston, TX. Reach out by phone, email, or our contact form to discuss workflow automation, custom software, or IT support.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: buildOpenGraph({
    path: "/contact",
    title: `Contact | ${SITE_NAME}`,
    description:
      "Schedule a consultation with H.F. Tech Consulting in Houston, TX by phone, email, or our contact form.",
  }),
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact/#contactpage`,
  name: "Contact H.F. Tech Consulting",
  url: `${SITE_URL}/contact`,
  about: { "@id": `${SITE_URL}/#organization` },
  mainEntity: {
    "@id": `${SITE_URL}/#organization`,
    "@type": "ProfessionalService",
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(contactPageJsonLd) }}
      />
      <ContactContent />
    </>
  );
}
