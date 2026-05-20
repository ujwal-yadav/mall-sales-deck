"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";

const luxuryFeatures = [
  {
    title: "Premium Positioning",
    description:
      "Dedicated luxury zones with curated adjacencies, elevated finishes, and an atmosphere that matches the caliber of the brands within.",
  },
  {
    title: "Affluent Audience",
    description:
      "Drawing from an 8-state trade area with high household income indices, Mall of America delivers the affluent consumer luxury brands demand.",
  },
  {
    title: "Connected Hospitality",
    description:
      "JW Marriott and Radisson Blu — over 1,000 rooms connected via skybridge — deliver a captive, high-spending guest audience directly to your doors.",
  },
];

export default function LuxurySection() {
  return (
    <section id="luxury" className="relative overflow-hidden bg-luxury-bg section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: imagery */}
          <ScrollReveal direction="left">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/luxury-interior.jpg"
                alt="Luxury retail interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </ScrollReveal>

          {/* Right: content */}
          <div>
            <ScrollReveal>
              <span className="text-xs uppercase tracking-[0.3em] text-accent-gold-dark">
                Luxury Experience
              </span>
              <h2 className="font-heading mt-4 text-4xl font-bold text-luxury-text md:text-5xl">
                An Experience Crafted for{" "}
                <span className="italic">Discerning Brands</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-luxury-text/70">
                Mall of America isn&apos;t just the nation&apos;s largest mall — it&apos;s a
                premium destination where luxury meets scale. Your brand joins an
                environment designed to elevate every interaction.
              </p>
            </ScrollReveal>

            <div className="mt-10 space-y-8">
              {luxuryFeatures.map((feature, i) => (
                <ScrollReveal key={feature.title} delay={i * 0.15}>
                  <div className="border-l-2 border-accent-gold pl-6">
                    <h3 className="text-lg font-semibold text-luxury-text">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-luxury-text/60">
                      {feature.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <button
                onClick={() =>
                  document
                    .getElementById("cta")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="mt-10 rounded-full bg-accent-gold-dark px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-accent-gold"
              >
                Explore Luxury Leasing
              </button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
