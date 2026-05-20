"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import { DINING_CATEGORIES } from "@/lib/constants";
import Image from "next/image";
import { UtensilsCrossed } from "lucide-react";

const diningHighlights = [
  "Rainforest Cafe",
  "Shake Shack",
  "Crave",
  "FireLake",
  "Twin City Grill",
  "Cantina Laredo",
  "Wok In Wok Out",
  "Naf Naf Grill",
];

export default function DiningSection() {
  return (
    <section id="dining" className="relative bg-bg-primary section-padding">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-accent-gold">
              Dining & Lifestyle
            </span>
            <h2 className="font-heading mt-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Food Is a Destination
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary">
              50+ dining concepts — from award-winning restaurants to global
              street food. At Mall of America, dining isn&apos;t an afterthought.
              It&apos;s a reason to visit.
            </p>
          </div>
        </ScrollReveal>

        {/* Dining categories */}
        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {DINING_CATEGORIES.map((cat, i) => (
            <ScrollReveal key={cat.name} delay={i * 0.1}>
              <GlassCard className="group relative h-80 overflow-hidden p-0">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <UtensilsCrossed size={20} className="mb-2 text-accent-gold" />
                  <h3 className="text-lg font-semibold text-white">
                    {cat.name}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    {cat.description}
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Notable restaurants */}
        <ScrollReveal>
          <div className="text-center">
            <h3 className="mb-6 text-xs uppercase tracking-[0.3em] text-text-secondary">
              Featured Dining Partners
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {diningHighlights.map((name) => (
                <span
                  key={name}
                  className="text-base font-light tracking-wide text-white/40 transition-colors hover:text-accent-gold"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Stat band */}
        <ScrollReveal>
          <div className="mt-16 grid grid-cols-3 gap-8 rounded-2xl bg-bg-secondary p-8 text-center md:p-12">
            <div>
              <div className="text-3xl font-bold text-accent-gold md:text-4xl">50+</div>
              <div className="mt-2 text-xs uppercase tracking-wider text-text-secondary">
                Restaurants
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-gold md:text-4xl">4</div>
              <div className="mt-2 text-xs uppercase tracking-wider text-text-secondary">
                Dining Floors
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-gold md:text-4xl">20+</div>
              <div className="mt-2 text-xs uppercase tracking-wider text-text-secondary">
                Cuisines
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
