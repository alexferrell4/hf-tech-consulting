import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import { SITE_NAME, buildOpenGraph } from "@/lib/seo";

export const metadata: Metadata = {
  title: `${SITE_NAME} | Houston IT & Automation Consulting`,
  description:
    "H.F. Tech Consulting helps Houston-area businesses streamline operations through workflow automation, custom software, cloud solutions, and IT support.",
  alternates: {
    canonical: "/",
  },
  openGraph: buildOpenGraph({
    path: "/",
    title: `${SITE_NAME} | Houston IT & Automation Consulting`,
    description:
      "Workflow automation, custom software, cloud solutions, data analytics, and IT support for businesses in Houston and across Texas.",
  }),
};

export default function HomePage() {
  return <HomeContent />;
}
