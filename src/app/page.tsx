import Link from "next/link";

export default function HomePage() {
  return (
    <main>

      <section className="min-h-[85vh] flex items-center justify-center">

        <div className="text-center max-w-4xl px-6">

          <h1 className="text-6xl font-bold">
            Technology Solutions
            <span className="text-blue-500">
              {" "}That Drive Business Growth
            </span>
          </h1>

          <p className="mt-6 text-xl text-gray-300">
            Helping organizations improve efficiency
            through workflow automation, software
            development, cloud solutions, and strategic
            technology consulting.
          </p>

          <div className="flex gap-4 justify-center mt-10">

            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
            >
              Schedule Consultation
            </Link>

            <Link
              href="/services"
              className="border border-gray-600 px-6 py-3 rounded-lg"
            >
              View Services
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}