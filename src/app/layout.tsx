import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ORGANIZATION_JSON_LD, WEBSITE_JSON_LD, SITE_NAME, SITE_URL, jsonLdHtml, buildOpenGraph } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Business Technology & IT Consulting in Houston, TX`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "H.F. Tech Consulting helps small and midsize businesses, healthcare providers, and home care agencies in Houston, TX streamline operations through workflow automation, custom software, cloud solutions, data analytics, and IT support.",
  keywords: [
    "IT consulting Houston",
    "technology consulting for small businesses",
    "business automation Houston",
    "workflow automation services",
    "custom software development Texas",
    "healthcare IT consulting",
  ],
  authors: [{ name: "Harrison Ferrell" }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: buildOpenGraph({
    title: `${SITE_NAME} | Business Technology & IT Consulting in Houston, TX`,
    description:
      "Workflow automation, custom software, cloud solutions, data analytics, and IT support for businesses in Houston and across Texas.",
    path: "/",
  }),
  twitter: {
    card: "summary",
    title: `${SITE_NAME} | Business Technology & IT Consulting in Houston, TX`,
    description:
      "Workflow automation, custom software, cloud solutions, data analytics, and IT support for businesses in Houston and across Texas.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "google-adsense-account": "ca-pub-9232883271136467",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdHtml(ORGANIZATION_JSON_LD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdHtml(WEBSITE_JSON_LD) }}
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9232883271136467"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <div className="relative min-h-screen">
          <div className="fixed inset-0 grid-pattern pointer-events-none" />
          <div className="relative z-10">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
