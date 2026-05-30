"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
                we are here to help. Reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href="mailto:hftechconsulting@gmail.com"
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">hftechconsulting@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+12812233570"
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium">(281) 223-3570</p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">Houston, Texas</p>
                </div>
              </motion.div>
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

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="gradient-border p-8 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. We will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-accent hover:text-accent/80 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        className={`w-full px-4 py-3 bg-muted border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-200 ${
                          focused === "name" ? "border-accent ring-2 ring-accent/20" : "border-border"
                        }`}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        className={`w-full px-4 py-3 bg-muted border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-200 ${
                          focused === "email" ? "border-accent ring-2 ring-accent/20" : "border-border"
                        }`}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company / Organization <span className="text-muted-foreground">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      onFocus={() => setFocused("company")}
                      onBlur={() => setFocused(null)}
                      className={`w-full px-4 py-3 bg-muted border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-200 ${
                        focused === "company" ? "border-accent ring-2 ring-accent/20" : "border-border"
                      }`}
                      placeholder="Your company or organization name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      What service are you interested in?
                    </label>
                    <select
                      onFocus={() => setFocused("service")}
                      onBlur={() => setFocused(null)}
                      className={`w-full px-4 py-3 bg-muted border rounded-xl text-foreground focus:outline-none transition-all duration-200 ${
                        focused === "service" ? "border-accent ring-2 ring-accent/20" : "border-border"
                      }`}
                    >
                      <option value="">Select a service</option>
                      <option value="automation">Workflow Automation</option>
                      <option value="software">Custom Software Development</option>
                      <option value="website">Website Management & Support</option>
                      <option value="cloud">Cloud Solutions</option>
                      <option value="analytics">Data Analytics & Reporting</option>
                      <option value="documents">Digital Forms & Document Management</option>
                      <option value="it-support">IT Infrastructure & Technical Support</option>
                      <option value="healthcare">Healthcare IT Solutions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Details
                    </label>
                    <textarea
                      rows={5}
                      required
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      className={`w-full px-4 py-3 bg-muted border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-200 resize-none ${
                        focused === "message" ? "border-accent ring-2 ring-accent/20" : "border-border"
                      }`}
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-medium rounded-xl hover:bg-accent/90 transition-colors"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
