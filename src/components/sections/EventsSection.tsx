"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { EVENT_TYPES, VENUE_SPECS } from "@/lib/constants";
import Image from "next/image";
import {
  Music,
  Sparkles,
  Star,
  Building2,
  Rocket,
  Shirt,
  Users,
  Calendar,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  music: <Music size={24} />,
  sparkles: <Sparkles size={24} />,
  star: <Star size={24} />,
  building: <Building2 size={24} />,
  rocket: <Rocket size={24} />,
  shirt: <Shirt size={24} />,
};

export default function EventsSection() {
  const [showVenues, setShowVenues] = useState(false);

  return (
    <section id="events" className="relative bg-bg-primary section-padding">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-accent-gold">
              Events & Platform
            </span>
            <h2 className="font-heading mt-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              A Platform, Not Just a Building
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary">
              400+ events per year — from sold-out concerts to red-carpet product
              launches. Mall of America is where brands come to make headlines.
            </p>
          </div>
        </ScrollReveal>

        {/* Event stat hero */}
        <ScrollReveal>
          <div className="mb-16 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent-gold md:text-5xl">400+</div>
              <div className="mt-2 text-xs uppercase tracking-wider text-text-secondary">
                Events Per Year
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-gold md:text-5xl">32M</div>
              <div className="mt-2 text-xs uppercase tracking-wider text-text-secondary">
                Potential Audience
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-gold md:text-5xl">300+</div>
              <div className="mt-2 text-xs uppercase tracking-wider text-text-secondary">
                Media Hits Per Year
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Event types grid */}
        <div className="mb-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {EVENT_TYPES.map((event, i) => (
            <ScrollReveal key={event.name} delay={i * 0.08}>
              <GlassCard className="flex items-start gap-4">
                <div className="shrink-0 text-accent-gold">
                  {iconMap[event.icon]}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {event.name}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    {event.description}
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Venue specs (Phase 2 expandable) */}
        <ScrollReveal>
          <div className="text-center">
            <button
              onClick={() => setShowVenues(!showVenues)}
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-accent-gold transition-colors hover:text-accent-gold-light"
            >
              <Calendar size={16} />
              {showVenues ? "Hide Venue Details" : "Explore Our Venues"}
            </button>
          </div>
        </ScrollReveal>

        {showVenues && (
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {VENUE_SPECS.map((venue, i) => (
              <ScrollReveal key={venue.name} delay={i * 0.1}>
                <GlassCard className="overflow-hidden p-0">
                  <div className="relative aspect-video">
                    <Image
                      src={venue.image}
                      alt={venue.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-white">{venue.name}</h4>
                    <div className="mt-3 flex gap-4 text-sm">
                      <div>
                        <Users size={14} className="mb-1 inline text-accent-gold" />{" "}
                        <span className="text-text-secondary">
                          {venue.capacity}
                        </span>
                      </div>
                      <div>
                        <span className="text-accent-gold">{venue.sqft}</span>{" "}
                        <span className="text-text-secondary">sq ft</span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-1">
                      {venue.features.map((f) => (
                        <li
                          key={f}
                          className="text-xs text-text-secondary before:mr-2 before:text-accent-gold before:content-['—']"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* CTA */}
        <ScrollReveal>
          <div className="mt-12 text-center">
            <Button
              onClick={() =>
                document
                  .getElementById("cta")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Book Your Event
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
