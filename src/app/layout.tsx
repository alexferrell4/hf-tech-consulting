import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "H.F. Tech Consulting | IT Solutions & Digital Transformation",
  description:
    "Transform your business with cutting-edge technology solutions. Workflow automation, custom software, cloud solutions, and strategic IT consulting in Houston, Texas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
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
      </body>
    </html>
  );
}
