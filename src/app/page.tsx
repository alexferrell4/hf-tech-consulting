"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Cloud,
  Code2,
  BarChart3,
  CheckCircle2,
  ArrowUpRight,
  Globe,
  FileText,
  Headphones,
} from "lucide-react";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

const services = [
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Automating repetitive tasks, notifications, document management, and business processes using cloud-based solutions.",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Designing and developing web applications, dashboards, internal business tools, and mobile solutions tailored to your needs.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Implementation and management of cloud-based platforms, storage solutions, collaboration tools, and business applications.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Reporting",
    description: "Developing dashboards, reports, and visualization tools that transform business data into actionable insights.",
  },
  {
    icon: Globe,
    title: "Website Management",
    description: "Website maintenance, SSL certificate management, hosting support, domain management, and security updates.",
  },
  {
    icon: Headphones,
    title: "IT Support",
    description: "Providing troubleshooting, system administration, network support, and technology recommendations.",
  },
];

const benefits = [
  "Reduce operational costs by up to 40%",
  "Increase team productivity",
  "Secure and compliant solutions",
  "Dedicated support and maintenance",
];

export default function HomePage() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-[128px]" />
          <div className="absolute inset-0 circuit-pattern" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          {/* Logo Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="relative w-32 h-32 mx-auto">
              <Image
                src="/logo.png"
                alt="H.F. Tech Consulting"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance"
          >
            <span className="text-accent-secondary">Smart Solutions.</span>
            <br />
            <span className="gradient-text">Real Results.</span>


            <span className="text-accent-secondary">Technology Solutions</span>
            <br />
            <span className="gradient-text">That Drive Business Growth.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty"
          >
            We help businesses streamline operations through technology. Workflow automation, 
            custom software development, cloud solutions, and IT support that allows you 
            to focus on serving your customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-medium rounded-full hover:bg-accent/90 transition-all duration-200 group"
            >
              Schedule Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-full hover:bg-muted transition-all duration-200 group"
            >
              View Services
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 sm:gap-16 mt-20"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-accent"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-sm uppercase tracking-widest text-accent mb-4">
              What We Do
            </h2>
            <p className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
              Business Technology Consulting
            </p>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Helping businesses leverage technology to improve efficiency, reduce costs, and support growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative gradient-border p-8 cursor-pointer"
              >
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[var(--radius)]" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors group"
            >
              View all services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Healthcare Niche Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-muted/30" />
        <div className="absolute inset-0 circuit-pattern opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm uppercase tracking-widest text-accent mb-4">
                Healthcare Expertise
              </h2>
              <p className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                Specialized Solutions for Healthcare Providers
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                H.F. Tech Consulting specializes in helping healthcare providers, assisted living facilities, 
                counseling practices, and home care agencies improve operations through workflow automation, 
                digital forms, document management systems, compliance-focused technology solutions, and 
                business process optimization.
              </p>

              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors group"
                >
                  Learn more about us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="gradient-border p-1">
                <div className="bg-card rounded-[calc(var(--radius)-4px)] p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <span className="text-muted-foreground">Process Efficiency</span>
                      <span className="text-accent font-bold">+127%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <span className="text-muted-foreground">Cost Reduction</span>
                      <span className="text-accent font-bold">-42%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <span className="text-muted-foreground">Time Saved Weekly</span>
                      <span className="text-accent font-bold">15+ hrs</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <span className="text-muted-foreground">Client Retention</span>
                      <span className="text-accent font-bold">98%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-secondary/10 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-sm uppercase tracking-widest text-accent mb-4">
              Our Process
            </h2>
            <p className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
              Simple steps to transform your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We learn about your business, challenges, and goals through in-depth consultation." },
              { step: "02", title: "Strategy", description: "We design a tailored solution that addresses your specific needs and budget." },
              { step: "03", title: "Delivery", description: "We implement, test, and launch your solution with ongoing support." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-7xl font-bold text-accent/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 w-16 h-px bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
