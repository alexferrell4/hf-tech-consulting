"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Target, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on delivering measurable outcomes that directly impact your bottom line.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We build long-term partnerships, not just projects.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of technology trends to bring you the most effective solutions.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Quality and attention to detail are embedded in everything we deliver.",
  },
];

const expertise = [
  "Workflow Automation",
  "Custom Software",
  "Cloud Architecture",
  "Data Analytics",
  "Process Optimization",
  "System Integration",
];

export default function AboutPage() {
  return (
    <main className="relative pt-32 pb-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-20"
        >
          <h1 className="text-sm uppercase tracking-widest text-accent mb-4">
            About Us
          </h1>
          <p className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
            Building technology that empowers businesses
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed">
            H.F. Tech Consulting helps businesses leverage technology to streamline 
            operations, reduce administrative burden, and support long-term growth.
          </p>
        </motion.div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center mb-32"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Meet the Founder
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-semibold">Harrison Ferrell</span> founded 
                H.F. Tech Consulting with a vision to make enterprise-grade technology accessible 
                to businesses of all sizes.
              </p>
              <p>
                With a Bachelor of Science in Computer Science and years of hands-on experience, 
                Harrison specializes in software development, workflow automation, cloud 
                technologies, and business process optimization.
              </p>
              <p>
                His approach combines technical expertise with a deep understanding of business 
                operations, ensuring that every solution not only works flawlessly but also 
                delivers real, measurable value.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {expertise.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="gradient-border p-1"
            >
              <div className="bg-card rounded-[calc(var(--radius)-4px)] p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <span className="text-5xl font-bold text-accent">HF</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Harrison Ferrell</h3>
                  <p className="text-muted-foreground mt-2">Founder & Lead Consultant</p>
                  <p className="text-sm text-muted-foreground mt-1">B.S. Computer Science</p>
                </div>
              </div>
            </motion.div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-widest text-accent mb-4">
              Our Values
            </h2>
            <p className="text-4xl font-bold text-foreground text-balance">
              Principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="gradient-border p-6 text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-sm uppercase tracking-widest text-accent mb-4">
              Our Mission
            </h2>
            <p className="text-3xl sm:text-4xl font-bold text-foreground leading-relaxed text-balance">
              {'"'}To empower businesses with technology solutions that simplify operations, 
              enhance productivity, and create lasting competitive advantages.{'"'}
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground mb-8">
            {"Ready to see how we can help your business?"}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-medium rounded-full hover:bg-accent/90 transition-all duration-200 group"
          >
            {"Let's Talk"}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
