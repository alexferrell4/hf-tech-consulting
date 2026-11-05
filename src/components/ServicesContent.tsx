"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services, faqs } from "@/lib/services-data";
import { serviceIconMap } from "@/lib/service-icons";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ServicesContent() {
  return (
    <main className="relative pt-32 pb-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
        <div className="absolute inset-0 circuit-pattern opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-20"
        >
          <h1 className="eyebrow mb-4">
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
              whileHover={{ y: -3 }}
              className="group panel p-8 md:p-10"
            >
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Icon & Title */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    {(() => {
                      const Icon = serviceIconMap[service.icon];
                      return <Icon className="w-7 h-7 text-accent" strokeWidth={1.5} />;
                    })()}
                    <span className="index-mark text-sm">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    <Link href={`/services/${service.slug}`} className="hover:text-accent transition-colors">
                      {service.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 mt-4 text-accent hover:text-accent/80 transition-colors text-sm font-medium group/link"
                  >
                    Learn more<span className="sr-only"> about {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>

                {/* Features */}
                <div className="lg:col-span-2 lg:border-l lg:border-border lg:pl-8">
                  <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 py-2.5">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" strokeWidth={1.75} />
                        <span className="text-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compliance-Sensitive Industries CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 gradient-border p-8 md:p-12"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="eyebrow mb-4">
              Industries We Understand
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
              Experience Across a Range of Businesses — Including Compliance-Sensitive Ones
            </p>
            <p className="text-muted-foreground mb-8">
              Alongside general small and midsize businesses, we bring specific experience with
              healthcare providers, assisted living facilities, counseling practices, and home care
              agencies — organizations where documentation, privacy, and compliance carry extra weight.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-cta text-accent-foreground font-medium rounded-full hover:bg-accent-cta/90 active:scale-[0.97] transition-all duration-200 group"
            >
              Talk to Us About Your Industry
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
            <h2 className="eyebrow mb-4">
              FAQ
            </h2>
            <p className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
              Common questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="panel p-6">
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-cta text-accent-foreground font-medium rounded-full hover:bg-accent-cta/90 active:scale-[0.97] transition-all duration-200 group"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
