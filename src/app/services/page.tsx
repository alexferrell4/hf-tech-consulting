"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Cloud,
  Code2,
  BarChart3,
  Globe,
  FileText,
  Headphones,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Streamline repetitive tasks and processes with intelligent automation. We implement solutions using tools like Zapier, Make, Power Automate, and custom integrations.",
    features: ["Process mapping and optimization", "Custom automation workflows", "System integrations", "Automated reporting"],
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Bespoke applications built to solve your unique business challenges. From web apps to internal tools, we deliver scalable solutions.",
    features: ["Web applications", "Internal business tools", "API development", "Mobile-responsive design"],
  },
  {
    icon: Globe,
    title: "Website Development & Management",
    description: "Modern, fast, and secure websites that represent your brand and convert visitors into customers.",
    features: ["Custom website design", "E-commerce solutions", "CMS implementation", "Performance optimization"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Migrate to the cloud or optimize your existing infrastructure for better performance, security, and cost efficiency.",
    features: ["Cloud migration", "Infrastructure setup", "Security configuration", "Cost optimization"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Reporting",
    description: "Transform your raw data into actionable insights with custom dashboards and automated reporting systems.",
    features: ["Custom dashboards", "Automated reports", "Data visualization", "KPI tracking"],
  },
  {
    icon: Headphones,
    title: "IT Consulting",
    description: "Strategic technology guidance to help you make informed decisions about your IT investments and digital transformation.",
    features: ["Technology assessment", "Roadmap planning", "Vendor selection", "Project management"],
  },
  {
    icon: FileText,
    title: "Digital Forms & Document Management",
    description: "Digitize your paper processes with smart forms, automated workflows, and organized document management systems.",
    features: ["Digital form creation", "E-signature integration", "Document automation", "Compliance tracking"],
  },
];

export default function ServicesPage() {
  return (
    <main className="relative pt-32 pb-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-20"
        >
          <h1 className="text-sm uppercase tracking-widest text-accent mb-4">
            Our Services
          </h1>
          <p className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
            Technology solutions tailored to your needs
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From automation to custom software, we provide comprehensive IT services 
            that help businesses operate more efficiently and grow sustainably.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group gradient-border p-8 md:p-10 hover:glow transition-shadow duration-500"
            >
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Icon & Title */}
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="lg:col-span-2">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl"
                      >
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-2xl text-foreground mb-6">
            {"Don't see what you need?"}
          </p>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {"We offer custom solutions tailored to your specific requirements. Let's discuss your project."}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-medium rounded-full hover:bg-accent/90 transition-all duration-200 group"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
