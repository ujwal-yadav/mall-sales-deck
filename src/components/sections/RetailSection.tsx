"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import { RETAIL_CATEGORIES, KEY_TENANTS, UPCOMING_TENANTS } from "@/lib/constants";
import Image from "next/image";
import { TrendingUp } from "lucide-react";

export default function RetailSection() {
  return (
    <section id="retail" className="relative bg-bg-secondary section-padding">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-accent-gold">
              Retail Environment
            </span>
            <h2 className="font-heading mt-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              520+ Retailers
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary">
              Every category. Every price point. From global flagships to
              first-to-market concepts — the nation&apos;s most diverse retail
              ecosystem under one roof.
            </p>
          </div>
        </ScrollReveal>

        {/* Retail categories grid */}
        <div className="mb-16 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {RETAIL_CATEGORIES.map((cat, i) => (
            <ScrollReveal key={cat.name} delay={i * 0.08}>
              <GlassCard className="group relative h-64 overflow-hidden p-0">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-2xl font-bold text-accent-gold">
                    {cat.count}
                  </div>
                  <div className="text-sm font-medium text-white">
                    {cat.name}
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Key tenants */}
        <ScrollReveal>
          <div className="mb-16">
            <h3 className="mb-8 text-center text-xs uppercase tracking-[0.3em] text-text-secondary">
              Trusted by the World&apos;s Best Brands
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {KEY_TENANTS.map((tenant) => (
                <span
                  key={tenant}
                  className="text-lg font-light tracking-wide text-white/40 transition-colors hover:text-white"
                >
                  {tenant}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Growth trajectory */}
        <ScrollReveal>
          <div className="rounded-2xl border border-border-subtle bg-bg-elevated p-8 md:p-12">
            <div className="flex items-start gap-4">
              <TrendingUp size={28} className="mt-1 shrink-0 text-accent-gold" />
              <div>
                <h3 className="text-xl font-bold text-white">
                  Growth Trajectory
                </h3>
                <p className="mt-2 text-text-secondary">
                  New tenants arriving in 2025–2026 include{" "}
                  {UPCOMING_TENANTS.join(", ")} — a testament to the property&apos;s
                  enduring appeal and commercial momentum.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
