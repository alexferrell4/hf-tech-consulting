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
    description: "Automating repetitive tasks, notifications, document management, and business processes using cloud-based solutions like Zapier, Make, Power Automate, and custom integrations.",
    features: ["Process mapping and optimization", "Custom automation workflows", "System integrations", "Automated reporting and notifications"],
  },
  {
    icon: Code2,
    title: "Custom Software & Application Development",
    description: "Designing and developing web applications, dashboards, internal business tools, and mobile solutions tailored to organizational needs.",
    features: ["Web applications", "Internal business tools", "API development", "Mobile-responsive design"],
  },
  {
    icon: Globe,
    title: "Website Management & Support",
    description: "Website maintenance, SSL certificate management, hosting support, domain management, security updates, and troubleshooting.",
    features: ["Website maintenance", "SSL & security management", "Hosting & domain support", "Performance optimization"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Implementation and management of cloud-based platforms, storage solutions, collaboration tools, and business applications.",
    features: ["Cloud migration", "Infrastructure setup", "Security configuration", "Cost optimization"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Reporting",
    description: "Developing dashboards, reports, and visualization tools that transform business data into actionable insights.",
    features: ["Custom dashboards", "Automated reports", "Data visualization", "KPI tracking"],
  },
  {
    icon: FileText,
    title: "Digital Forms & Document Management",
    description: "Creating electronic intake forms, document workflows, automated notifications, and secure record management systems.",
    features: ["Digital form creation", "E-signature integration", "Document automation", "Compliance tracking"],
  },
  {
    icon: Headphones,
    title: "IT Infrastructure & Technical Support",
    description: "Providing troubleshooting, system administration, network support, and technology recommendations.",
    features: ["Technology assessment", "System administration", "Network support", "Technology recommendations"],
  },
];

export default function ServicesPage() {
  return (
    <main className="relative pt-32 pb-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
        <div className="absolute inset-0 circuit-pattern opacity-30" />
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
            Business Technology Consulting
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Helping businesses leverage technology to improve efficiency, reduce costs, 
            and support growth. From automation to custom software, we provide comprehensive 
            IT services tailored to your needs.
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

        {/* Healthcare Niche CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 gradient-border p-8 md:p-12"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-sm uppercase tracking-widest text-accent mb-4">
              Healthcare Specialization
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
              Specialized Solutions for Healthcare Providers
            </p>
            <p className="text-muted-foreground mb-8">
              We specialize in helping healthcare providers, assisted living facilities, counseling practices, 
              and home care agencies improve operations through workflow automation, digital forms, 
              document management systems, and compliance-focused technology solutions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-medium rounded-full hover:bg-accent/90 transition-all duration-200 group"
            >
              Discuss Your Healthcare IT Needs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

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
