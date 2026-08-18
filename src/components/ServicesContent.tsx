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
import { services, faqs, type ServiceIconKey } from "@/lib/services-data";

const iconMap: Record<ServiceIconKey, typeof Zap> = {
  Zap,
  Code2,
  Globe,
  Cloud,
  BarChart3,
  FileText,
  Headphones,
};

export default function ServicesContent() {
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
            IT & Technology Consulting Services
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
                    {(() => {
                      const Icon = iconMap[service.icon];
                      return <Icon className="w-7 h-7 text-accent" />;
                    })()}
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

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-widest text-accent mb-4">
              FAQ
            </h2>
            <p className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
              Common questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="gradient-border p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
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
