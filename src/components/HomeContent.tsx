"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Cloud,
  Code2,
  BarChart3,
  CheckCircle2,
  ArrowUpRight,
  Globe,
  Headphones,
  Clock,
  MapPin,
  Layers,
  User,
} from "lucide-react";
import ClientsCarousel from "@/components/ClientsCarousel";
import StatCounter from "@/components/StatCounter";
import SavingsCalculator from "@/components/SavingsCalculator";
import ServiceQuiz from "@/components/ServiceQuiz";

const Logo3D = dynamic(() => import("@/components/Logo3D"), { ssr: false });

const stats = [
  { icon: Clock, value: 24, suffix: "-Hour", label: "Typical response time" },
  { icon: MapPin, value: 100, suffix: "%", label: "Houston-based & local" },
  { icon: Layers, value: 8, suffix: "", label: "Specialized service areas" },
  { icon: User, value: 1, suffix: "", label: "Point of contact, start to finish" },
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
    description: "Private cloud infrastructure, setup, security configuration, and cost optimization, with migration to platforms like Microsoft 365 or Google Workspace when it's the better fit.",
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
  "Reduce time spent on manual, repetitive tasks",
  "Increase team productivity",
  "Secure and compliant solutions",
  "Dedicated support and maintenance",
];

// Cursor-reactive parallax for the hero's glow blobs. Disabled for users who
// prefer reduced motion, since this is a decorative, non-essential effect.
function useHeroParallax() {
  const ref = useRef<HTMLElement>(null);
  const [enabled, setEnabled] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    // matchMedia needs `window`, so this can only run after mount — standard
    // client-only capability check, not a derivable-from-props value.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.06);
      mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.06);
    };
    el.addEventListener("mousemove", handleMove);
    return () => el.removeEventListener("mousemove", handleMove);
  }, [enabled, mouseX, mouseY]);

  return { ref, blobOneStyle: { x: springX, y: springY }, blobTwoX: useTransform(springX, (v) => -v), blobTwoY: useTransform(springY, (v) => -v) };
}

export default function HomeContent() {
  const { ref: heroRef, blobOneStyle, blobTwoX, blobTwoY } = useHeroParallax();

  return (
    <main className="relative">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div
            style={blobOneStyle}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px]"
          />
          <motion.div
            style={{ x: blobTwoX, y: blobTwoY }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-[128px]"
          />
          <div className="absolute inset-0 circuit-pattern" />
        </div>

        <div className="relative w-full min-w-0 max-w-7xl mx-auto px-6 py-20 text-center">
          {/* Logo Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto">
              <Logo3D />
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
            <span className="text-accent-secondary">Smart Solutions. Real Results.</span>
            <br />
            <span className="gradient-text">Technology That Drives Business Growth.</span>
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-cta text-accent-foreground font-medium rounded-full hover:bg-accent-cta/90 active:scale-[0.97] transition-all duration-200 group"
            >
              Schedule Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-full hover:bg-muted active:scale-[0.97] transition-all duration-200 group"
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
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-20 max-w-3xl mx-auto"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -2 }}
                className="panel px-4 py-6 text-center"
              >
                <stat.icon className="w-5 h-5 text-accent mx-auto mb-3" strokeWidth={1.5} />
                <div className="text-2xl sm:text-3xl font-bold text-foreground font-mono tabular-nums">
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-muted-foreground mt-2 leading-snug">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trusted By */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20"
          >
            <ClientsCarousel />
          </motion.div>
        </div>
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
            <h2 className="eyebrow mb-4">
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
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="panel group relative p-8 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                  <service.icon
                    className="w-6 h-6 text-accent transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                  <span className="index-mark text-sm">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
                <div className="mt-6 h-px w-0 bg-accent transition-all duration-300 group-hover:w-12" />
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

      <ServiceQuiz />

      <SavingsCalculator />

      {/* Who We Work With Section */}
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
              <h2 className="eyebrow mb-4">
                Who We Work With
              </h2>
              <p className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                Built Around How Your Business Actually Operates
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                H.F. Tech Consulting works with small and midsize businesses across a range of
                industries — including compliance-sensitive organizations like healthcare providers,
                home care agencies, counseling practices, and assisted living facilities. Whatever
                your industry, we build workflow automation, custom software, and IT solutions
                around how your business actually operates, not a generic template.
              </p>

              <ul className="space-y-0 border-t border-border">
                {benefits.map((benefit, i) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-4 py-3.5 border-b border-border"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" strokeWidth={1.75} />
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
              <div className="panel p-8">
                <span className="index-mark text-xs block mb-6">OUTCOMES</span>
                <div className="space-y-0">
                  {[
                    "Less time spent on manual intake and documentation",
                    "Fewer missed follow-ups and scheduling gaps",
                    "A clearer, more consistent audit trail",
                    "Secure, organized digital records",
                  ].map((outcome, i, arr) => (
                    <div
                      key={outcome}
                      className={`flex items-center gap-4 py-4 ${i < arr.length - 1 ? "border-b border-border" : ""}`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" strokeWidth={1.75} />
                      <span className="text-foreground text-sm">{outcome}</span>
                    </div>
                  ))}
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
            <h2 className="eyebrow mb-4">
              Our Process
            </h2>
            <p className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
              Simple steps to transform your business
            </p>
          </motion.div>

          {/* Connected stepper line (desktop) */}
          <div className="hidden md:flex items-center mb-10">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center flex-1 last:flex-none">
                <div className="stepper-node">{String(i + 1).padStart(2, "0")}</div>
                {i < 2 && (
                  <motion.div
                    className="stepper-line origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.3, ease: "easeOut" }}
                  />
                )}
              </div>
            ))}
          </div>

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
                <div className="stepper-node mb-4 md:hidden">{item.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
