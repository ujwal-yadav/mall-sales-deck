"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import GlassCard from "@/components/ui/GlassCard";
import { KEY_STATS, LOCATION_FACTS, VISITOR_DEMOGRAPHICS } from "@/lib/constants";
import { MapPin, Plane, TrainFront, Building2 } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  plane: <Plane size={24} className="text-accent-gold" />,
  train: <TrainFront size={24} className="text-accent-gold" />,
  highway: <MapPin size={24} className="text-accent-gold" />,
  hotel: <Building2 size={24} className="text-accent-gold" />,
};

export default function WhyMOA() {
  return (
    <section id="why-moa" className="relative bg-bg-primary section-padding">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-accent-gold">
              The Opportunity
            </span>
            <h2 className="font-heading mt-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Why Mall of America
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary">
              The largest mall in the United States and the most-visited
              destination in the Midwest — drawing more tourists annually than
              Walt Disney World and Disneyland combined.
            </p>
          </div>
        </ScrollReveal>

        {/* Key stats grid */}
        <div className="mb-20 grid grid-cols-2 gap-8 md:grid-cols-4">
          {KEY_STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <AnimatedCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Location & Access */}
        <ScrollReveal>
          <div className="mb-8 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-accent-gold">
              Unmatched Access
            </span>
            <h3 className="font-heading mt-4 text-3xl font-bold text-white md:text-4xl">
              Connected to Everything
            </h3>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {LOCATION_FACTS.map((fact, i) => (
            <ScrollReveal key={fact.title} delay={i * 0.1}>
              <GlassCard className="h-full">
                <div className="mb-4">{iconMap[fact.icon]}</div>
                <h4 className="mb-2 text-lg font-semibold text-white">
                  {fact.title}
                </h4>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {fact.description}
                </p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Demographics band */}
        <ScrollReveal>
          <div className="mt-16 rounded-2xl bg-bg-secondary p-8 md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">
                  8-State Trade Area
                </h3>
                <p className="mt-4 text-text-secondary">
                  {VISITOR_DEMOGRAPHICS.localPercentage}% of visitors come from{" "}
                  {VISITOR_DEMOGRAPHICS.states.slice(0, 4).join(", ")}, and{" "}
                  {VISITOR_DEMOGRAPHICS.states.slice(4).join(", ")} — making Mall
                  of America the commercial center of the Upper Midwest.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-gold">
                    {VISITOR_DEMOGRAPHICS.localPercentage}%
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-text-secondary">
                    Regional Visitors
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-gold">
                    {VISITOR_DEMOGRAPHICS.touristPercentage}%
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-text-secondary">
                    National + International
                  </div>
                </div>
                <div className="col-span-2 text-center">
                  <div className="text-3xl font-bold text-accent-gold">8</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-text-secondary">
                    States in Primary Trade Area
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
