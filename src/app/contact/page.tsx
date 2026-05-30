"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://form.jotform.com/jsform/261496309774065";
    script.type = "text/javascript";
    script.async = true;

    document.getElementById("jotform-container")?.appendChild(script);
  }, []);

  return (
    <main className="relative pt-32 pb-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-secondary/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 circuit-pattern opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="text-sm uppercase tracking-widest text-accent mb-4">
            Contact Us
          </h1>
          <p className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
            {"Let's build something great together"}
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Have a project in mind? We would love to hear about it. Send us a message
            and we will get back to you within 24 hours.
          </p>
        </motion.div>

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

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
                <Mail className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">
                    hftechconsulting@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
                <Phone className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium">
                    (281) 223-3570
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
                <MapPin className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">
                    Houston, Texas
                  </p>
                </div>
              </div>
            </div>

           {/* Response Time */}
            <div className="p-6 gradient-border">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium text-foreground">Quick Response</span>
              </div>
              <p className="text-sm text-muted-foreground">
                We typically respond within 24 hours during business days. 
                For urgent matters, give us a call.
              </p>
            </div>

            {/* Healthcare Note */}
            <div className="p-6 bg-accent/5 rounded-xl border border-accent/20">
              <h3 className="text-foreground font-semibold mb-2">Healthcare Providers</h3>
              <p className="text-sm text-muted-foreground">
                We specialize in helping healthcare providers, assisted living facilities, 
                counseling practices, and home care agencies with compliance-focused 
                technology solutions.
              </p>
            </div>
          
          </motion.div>

          {/* JOTFORM EMBED (REPLACED FORM HERE) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="gradient-border p-4 md:p-6">
              <div id="jotform-container" />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}