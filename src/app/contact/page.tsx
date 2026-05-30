export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-bold mb-10">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-12">

        <div>

          <h2 className="text-2xl font-semibold mb-6">
            Contact Information
          </h2>

          <p className="mb-4">
            Email:
            hftechconsulting@gmail.com
          </p>

          <p>
            Phone:
            (281) 223-3570
          </p>

        </div>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 rounded bg-slate-800"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded bg-slate-800"
          />

          <textarea
            rows={6}
            placeholder="Project Description"
            className="w-full p-4 rounded bg-slate-800"
          />

          <button
            className="bg-blue-600 px-6 py-3 rounded"
          >
            Submit Request
          </button>

        </form>

      </div>

    </main>
  );
}