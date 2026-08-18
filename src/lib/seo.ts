export const SITE_URL = "https://hftechconsulting.com";
export const SITE_NAME = "H.F. Tech Consulting";
export const BUSINESS_PHONE = "+1-281-223-3570";
export const BUSINESS_EMAIL = "alex@hftechconsulting.com";

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: "HF Tech Consulting",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  description:
    "Business technology consulting firm serving Houston and the greater Texas area. Workflow automation, custom software development, cloud solutions, data analytics, website management, and IT support for small and midsize businesses, healthcare providers, and home care agencies.",
  telephone: BUSINESS_PHONE,
  email: BUSINESS_EMAIL,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Houston",
    addressRegion: "TX",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Houston" },
    { "@type": "State", name: "Texas" },
  ],
  founder: {
    "@type": "Person",
    name: "Harrison Ferrell",
  },
  sameAs: [],
} as const;

export const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
} as const;

export function buildOpenGraph({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    type: "website" as const,
    locale: "en_US",
    url: path,
    siteName: SITE_NAME,
    title,
    description,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 1200,
        alt: SITE_NAME,
      },
    ],
  };
}

export function jsonLdHtml(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
