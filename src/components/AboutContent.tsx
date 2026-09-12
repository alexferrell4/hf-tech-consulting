"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Target, Lightbulb, MapPin, Compass, HeartHandshake } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

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
  "Cloud Solutions",
  "Data Analytics",
  "Process Optimization",
  "System Integration",
  "Healthcare IT",
  "Document Management",
];

export default function AboutContent() {
  return (
    <main className="relative pt-32 pb-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
        <div className="absolute inset-0 circuit-pattern opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-20"
        >
          <h1 className="text-sm uppercase tracking-widest text-accent mb-4">
            About H.F. Tech Consulting
          </h1>
          <p className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
            <span className="text-accent-secondary">Smart Solutions.</span>{" "}
            <span className="gradient-text">Real Results.</span>
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed">
            H.F. Tech Consulting helps businesses leverage technology to streamline
            operations, reduce administrative burden, and support long-term growth.
          </p>
        </motion.div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-32"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p>
              H.F. Tech Consulting was built around a simple observation: most small and midsize
              businesses need real technology expertise — the kind larger companies get from an
              in-house IT department or a large agency retainer — but don&apos;t have the budget or
              the day-to-day need to justify either one.
            </p>
            <p>
              Instead of a large team and a rotating cast of account managers, H.F. Tech Consulting
              works directly with each client. The person who scopes your project is the same
              person who builds it, and the same person you call when something needs to change.
              That direct relationship is intentional — it&apos;s what makes it possible to build
              solutions around how a business actually operates, rather than a generic package.
            </p>
          </div>
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
              <p className="text-accent-secondary font-medium">
                {'"'}I help businesses streamline operations through technology. My services include
                workflow automation, custom software development, website management, cloud solutions,
                data analytics, and IT support. I specialize in reducing manual processes, improving
                efficiency, and implementing technology solutions that allow organizations to focus
                on serving their customers.{'"'}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {expertise.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
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
                  <div className="relative w-40 h-40 mx-auto mb-6">
                    <Image
                      src="/logo.png"
                      alt="Harrison Ferrell, founder of H.F. Tech Consulting"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Harrison Ferrell</h3>
                  <p className="text-accent mt-2">Founder & Lead Consultant</p>
                  <p className="text-sm text-muted-foreground mt-1">B.S. Computer Science</p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-accent-secondary text-sm font-medium">Smart Solutions. Real Results.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent-secondary/10 rounded-full blur-2xl" />
          </div>
        </motion.div>

        {/* Our Approach & Service Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-32"
        >
          <div className="gradient-border p-8">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Compass className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Approach</h2>
            <p className="text-muted-foreground leading-relaxed">
              Every engagement starts with understanding how your business actually operates today —
              not just which software you think you need. From there, we recommend the smallest
              solution that solves the real problem, whether that&apos;s a single automated workflow
              or a custom-built application. We&apos;d rather fix the right thing than sell you
              something bigger than you need.
            </p>
          </div>

          <div className="gradient-border p-8">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Service Area</h2>
            <p className="text-muted-foreground leading-relaxed">
              H.F. Tech Consulting is based in Houston, Texas, and works with businesses throughout
              the Greater Houston area and across Texas. Because most of what we do — automation,
              custom software, cloud setup, and IT support — can be delivered remotely, we&apos;re
              also able to support clients beyond Texas where it makes sense.
            </p>
          </div>
        </motion.div>

        {/* Why Clients Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <HeartHandshake className="w-5 h-5 text-accent" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Why Clients Choose H.F. Tech Consulting
            </h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Direct access to the person doing the work — not a rotating account team",
              "Solutions built around your actual process, not a one-size-fits-all package",
              "Specialized experience with healthcare, home care, and counseling organizations",
              "Houston-based, with the flexibility to support remote and hybrid teams",
              "One partner for automation, software, cloud, and IT support instead of several vendors",
              "Clear, honest recommendations — including telling you when you don't need something",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Target className="w-3.5 h-3.5 text-accent" />
                </div>
                <span className="text-foreground text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
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
