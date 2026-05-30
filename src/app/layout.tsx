import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "H.F. Tech Consulting",
  description:
    "Technology Solutions That Drive Business Growth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white">

        <Navbar />

        {children}

        <Footer />

      </body>
    </html>
  );
}