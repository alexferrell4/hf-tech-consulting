import type { Metadata } from "next";
import QuoteContent from "@/components/QuoteContent";
import { breadcrumbJsonLd, jsonLdHtml, buildOpenGraph, SITE_NAME } from "@/lib/seo";

const description =
  "Request a quote from H.F. Tech Consulting for workflow automation, custom software, cloud, website, or IT support work in Houston, TX.";

export const metadata: Metadata = {
  title: "Get a Quote",
  description,
  alternates: {
    canonical: "/quote",
  },
  openGraph: buildOpenGraph({
    path: "/quote",
    title: `Get a Quote | ${SITE_NAME}`,
    description,
  }),
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Get a Quote", path: "/quote" },
]);

export default function QuotePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(breadcrumbs) }}
      />
      <QuoteContent />
    </>
  );
}
