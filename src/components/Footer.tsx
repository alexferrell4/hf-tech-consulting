import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-2xl font-bold text-white">
          H.F. Tech Consulting
        </h2>

        <p className="text-gray-400 mt-2">
          Technology Solutions That Drive Business Growth
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-8">

          <div>
            <h3 className="text-white font-semibold mb-2">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">
              Services
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Workflow Automation</li>
              <li>Cloud Solutions</li>
              <li>Software Development</li>
              <li>IT Consulting</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">
              Contact
            </h3>

            <p className="text-gray-400">
              Houston, Texas
            </p>

            <p className="text-gray-400">
              hftechconsulting@gmail.com
            </p>

            <p className="text-gray-400">
              (281) 223-3570
            </p>
          </div>

        </div>

        <p className="text-center text-gray-500 mt-10">
          © 2026 H.F. Tech Consulting. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}