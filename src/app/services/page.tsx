const services = [
  "Workflow Automation",
  "Custom Software Development",
  "Website Development & Management",
  "Cloud Solutions",
  "Data Analytics & Reporting",
  "IT Consulting",
  "Digital Forms & Document Management",
];

export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-bold mb-12">
        Our Services
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {services.map((service) => (
          <div
            key={service}
            className="bg-slate-800 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-semibold">
              {service}
            </h3>
          </div>
        ))}

      </div>

    </main>
  );
}