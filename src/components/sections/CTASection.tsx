"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import InquiryModule from "@/components/modules/InquiryModule";
import type { InquiryType } from "@/types";
import { ArrowRight, Store, Handshake, CalendarCheck } from "lucide-react";

const ctaPaths: { icon: React.ReactNode; title: string; subtitle: string; description: string; action: string; inquiryType: InquiryType }[] = [
  {
    icon: <Store size={28} />,
    title: "Lease Space",
    subtitle: "Retail Opportunities",
    description:
      "From flagship stores to pop-up activations — find your perfect space in the nation's largest retail destination.",
    action: "Explore Leasing",
    inquiryType: "lease",
  },
  {
    icon: <Handshake size={28} />,
    title: "Partner With Us",
    subtitle: "Sponsorship & Partnerships",
    description:
      "Activate your brand in front of 32 million annual visitors through tailored sponsorship and partnership programs.",
    action: "View Partnerships",
    inquiryType: "partner",
  },
  {
    icon: <CalendarCheck size={28} />,
    title: "Host an Event",
    subtitle: "Event Bookings",
    description:
      "Concerts, product launches, corporate events, and more — bring your vision to life on the nation's biggest stage.",
    action: "Book Your Event",
    inquiryType: "event",
  },
];

export default function CTASection() {
  const [showInquiry, setShowInquiry] = useState(false);
  const [preSelectedType, setPreSelectedType] = useState<InquiryType | null>(null);

  const openInquiry = (type: InquiryType) => {
    setPreSelectedType(type);
    setShowInquiry(true);
  };

  return (
    <section
      id="cta"
      className="relative min-h-screen bg-bg-primary section-padding flex items-center"
    >
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 top-1/4 h-96 w-96 rounded-full bg-accent-gold/5 blur-3xl" />
        <div className="absolute -left-1/4 bottom-1/4 h-96 w-96 rounded-full bg-accent-gold/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        {/* Main headline */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="font-heading text-5xl font-bold text-white md:text-6xl lg:text-7xl">
              YOUR BRAND
              <br />
              <span className="gradient-gold">BELONGS HERE</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary">
              Join 520+ world-class brands at the nation&apos;s most-visited retail
              and entertainment destination. Let&apos;s build something
              extraordinary together.
            </p>
          </div>
        </ScrollReveal>

        {/* CTA paths */}
        <div className="grid gap-6 md:grid-cols-3">
          {ctaPaths.map((path, i) => (
            <ScrollReveal key={path.title} delay={i * 0.15}>
              <motion.div
                className="group flex h-full cursor-pointer flex-col rounded-2xl border border-border-subtle bg-bg-elevated p-8 transition-all hover:border-accent-gold/30"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                onClick={() => openInquiry(path.inquiryType)}
              >
                <div className="mb-4 text-accent-gold">{path.icon}</div>
                <h3 className="text-xl font-bold text-white">{path.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-accent-gold">
                  {path.subtitle}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-text-secondary">
                  {path.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-gold transition-all group-hover:gap-3">
                  {path.action}
                  <ArrowRight size={16} />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Contact info */}
        <ScrollReveal>
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center gap-2 rounded-2xl glass px-8 py-6">
              <span className="text-xs uppercase tracking-[0.2em] text-text-secondary">
                Ready to get started?
              </span>
              <span className="text-lg font-semibold text-white">
                leasing@mallofamerica.com
              </span>
              <span className="text-sm text-text-secondary">
                952.883.8800
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Footer */}
        <div className="mt-16 border-t border-border-subtle pt-8 text-center text-xs text-text-muted">
          <p>
            Mall of America &middot; 60 E Broadway, Bloomington, MN 55425
          </p>
          <p className="mt-2">
            This is an interactive sales presentation. All data from publicly
            available sources.
          </p>
        </div>
      </div>
      <InquiryModule
        isOpen={showInquiry}
        onClose={() => {
          setShowInquiry(false);
          setPreSelectedType(null);
        }}
        preSelectedType={preSelectedType}
      />
    </section>
  );
}
