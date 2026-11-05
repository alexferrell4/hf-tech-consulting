import type { Metadata } from "next";
import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { MotionConfig } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import MobileContactBar from "@/components/MobileContactBar";
import { ORGANIZATION_JSON_LD, WEBSITE_JSON_LD, SITE_NAME, SITE_URL, jsonLdHtml, buildOpenGraph } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Houston IT & Automation Consulting`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "H.F. Tech Consulting helps Houston-area businesses streamline operations through workflow automation, custom software, cloud solutions, and IT support.",
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
    title: `${SITE_NAME} | Houston IT & Automation Consulting`,
    description:
      "Workflow automation, custom software, cloud solutions, data analytics, and IT support for businesses in Houston and across Texas.",
    path: "/",
  }),
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Houston IT & Automation Consulting`,
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
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-background text-foreground antialiased`}>
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
          strategy="afterInteractive"
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <MotionConfig reducedMotion="user">
          <div className="relative min-h-screen">
            <div className="fixed inset-0 grid-pattern pointer-events-none" />
            <div className="fixed inset-0 noise pointer-events-none" />
            <div className="relative z-10 pb-16 lg:pb-0">
              <Navbar />
              <div id="main-content">{children}</div>
              <Footer />
            </div>
          </div>
          <ScrollToTop />
          <MobileContactBar />
        </MotionConfig>
        <Analytics />
      </body>
    </html>
  );
}
