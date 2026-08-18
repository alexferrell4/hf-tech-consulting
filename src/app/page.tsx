import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import { SITE_NAME, buildOpenGraph } from "@/lib/seo";

export const metadata: Metadata = {
  title: `${SITE_NAME} | Business Technology & IT Consulting in Houston, TX`,
  description:
    "H.F. Tech Consulting helps small and midsize businesses, healthcare providers, and home care agencies in Houston, TX streamline operations through workflow automation, custom software, cloud solutions, data analytics, and IT support.",
  alternates: {
    canonical: "/",
  },
  openGraph: buildOpenGraph({
    path: "/",
    title: `${SITE_NAME} | Business Technology & IT Consulting in Houston, TX`,
    description:
      "Workflow automation, custom software, cloud solutions, data analytics, and IT support for businesses in Houston and across Texas.",
  }),
};

export default function HomePage() {
  return <HomeContent />;
}
