"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ATTRACTIONS } from "@/lib/constants";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function AttractionsSection() {
  return (
    <section id="attractions" className="relative bg-bg-secondary section-padding">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-accent-gold">
              Attractions & Entertainment
            </span>
            <h2 className="font-heading mt-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              More Than a Mall
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary">
              From the nation&apos;s largest indoor theme park to an underwater
              aquarium tunnel — Mall of America delivers entertainment
              experiences that no standalone retailer could generate alone.
            </p>
          </div>
        </ScrollReveal>

        {/* Attractions grid */}
        <div className="space-y-8">
          {ATTRACTIONS.map((attraction, i) => (
            <ScrollReveal key={attraction.name} delay={i * 0.1}>
              <motion.div
                className={`group grid items-center gap-8 overflow-hidden rounded-2xl bg-bg-elevated lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div
                  className={`relative aspect-video overflow-hidden lg:aspect-[4/3] ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-bg-elevated/30 lg:bg-none" />
                </div>

                {/* Content */}
                <div className={`p-8 lg:p-12 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Sparkles size={20} className="mb-4 text-accent-gold" />
                  <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">
                    {attraction.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wider text-accent-gold">
                    {attraction.tagline}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-text-secondary">
                    {attraction.description}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom stat */}
        <ScrollReveal>
          <div className="mt-16 text-center">
            <div className="text-5xl font-bold text-white md:text-6xl">
              15<span className="text-accent-gold">+</span>
            </div>
            <div className="mt-2 text-sm uppercase tracking-[0.2em] text-text-secondary">
              World-Class Attractions Under One Roof
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
