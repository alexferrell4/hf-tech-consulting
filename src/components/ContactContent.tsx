"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import { ContactVisual } from "@/components/HeroVisuals";
import ContactForm from "@/components/ContactForm";

const contactRowClass = "flex items-center gap-4 p-4 group";

export default function ContactContent() {
  return (
    <main className="relative pt-32 pb-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-secondary/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 circuit-pattern opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />

        <PageHero
          eyebrow="Contact H.F. Tech Consulting"
          headline={[
            { text: "Let's build something" },
            { text: "great together", className: "gradient-text" },
          ]}
          description="Have a project in mind? We would love to hear about it. Send us a message and we will get back to you within 24 hours."
          visual={<ContactVisual />}
        />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need a quick consultation or a full-scale project,
                we are here to help.
              </p>
            </div>

            <div className="panel divide-y divide-border">
              <a href="mailto:alex@hftechconsulting.com" className={contactRowClass}>
                <Mail className="w-5 h-5 text-accent shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium group-hover:text-accent transition-colors">
                    alex@hftechconsulting.com
                  </p>
                </div>
              </a>

              <a href="tel:+12812233570" className={contactRowClass}>
                <Phone className="w-5 h-5 text-accent shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium group-hover:text-accent transition-colors">
                    (281) 223-3570
                  </p>
                </div>
              </a>

              <div className={contactRowClass}>
                <MapPin className="w-5 h-5 text-accent shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">
                    Houston, Texas
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="p-6 panel">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium text-foreground">
                  Quick Response
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                We typically respond within 24 hours during business days. For urgent matters, give us a call.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="gradient-border p-6 md:p-10">
              {/* ContactForm reads the URL query (service / note prefill), which
                  needs a Suspense boundary on a prerendered page. */}
              <Suspense fallback={<div className="h-96" />}>
                <ContactForm />
              </Suspense>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
