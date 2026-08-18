import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";
import { breadcrumbJsonLd, jsonLdHtml, buildOpenGraph, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Harrison Ferrell, founder of H.F. Tech Consulting. Learn about our mission, values, and expertise helping Houston-area businesses and healthcare providers adopt smarter technology.",
  alternates: {
    canonical: "/about",
  },
  openGraph: buildOpenGraph({
    path: "/about",
    title: `About Us | ${SITE_NAME}`,
    description:
      "Meet Harrison Ferrell, founder of H.F. Tech Consulting, and learn about our mission, values, and expertise serving Houston-area businesses.",
  }),
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
]);

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(breadcrumbs) }}
      />
      <AboutContent />
    </>
  );
}
