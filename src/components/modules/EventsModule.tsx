"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { VENUE_SPECS, EVENT_TYPES } from "@/lib/constants";
import Image from "next/image";
import { X, Users, MapPin, Mic2, Calendar, CheckCircle } from "lucide-react";

interface EventsModuleProps {
  isOpen: boolean;
  onClose: () => void;
}

const pastEvents = [
  { name: "Concert Series 2024", type: "Live Music", attendance: "15,000+" },
  { name: "Holiday Brand Activation", type: "Brand Activation", attendance: "50,000+" },
  { name: "Fashion Week Mall Edition", type: "Fashion Show", attendance: "8,000+" },
  { name: "Product Launch — Tech Giant", type: "Product Launch", attendance: "12,000+" },
  { name: "Annual NYE Celebration", type: "Special Event", attendance: "30,000+" },
  { name: "Summer Music Fest", type: "Live Music", attendance: "20,000+" },
];

export default function EventsModule({ isOpen, onClose }: EventsModuleProps) {
  const [activeTab, setActiveTab] = useState<"venues" | "types" | "booking">("venues");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-bg-primary border border-border-subtle"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border-subtle bg-bg-primary/95 backdrop-blur-sm px-8 py-6">
              <div>
                <h2 className="font-heading text-2xl font-bold text-white">Events & Venues</h2>
                <p className="mt-1 text-sm text-text-secondary">
                  Comprehensive event hosting capabilities
                </p>
              </div>
              <button onClick={onClose} className="text-text-secondary hover:text-white">
                <X size={24} />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 border-b border-border-subtle px-8">
              {(["venues", "types", "booking"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 text-sm uppercase tracking-wider transition-colors ${
                    activeTab === tab
                      ? "border-b-2 border-accent-gold text-accent-gold"
                      : "text-text-secondary hover:text-white"
                  }`}
                >
                  {tab === "venues" ? "Venues" : tab === "types" ? "Event Types" : "Book Now"}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-8">
              {activeTab === "venues" && (
                <div className="space-y-6">
                  {VENUE_SPECS.map((venue) => (
                    <GlassCard key={venue.name} hover={false} className="grid md:grid-cols-[300px_1fr] gap-6 p-0 overflow-hidden">
                      <div className="relative aspect-video md:aspect-auto">
                        <Image src={venue.image} alt={venue.name} fill className="object-cover" sizes="300px" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white">{venue.name}</h3>
                        <div className="mt-3 flex gap-6 text-sm">
                          <span className="flex items-center gap-1 text-accent-gold">
                            <Users size={14} /> {venue.capacity}
                          </span>
                          <span className="flex items-center gap-1 text-text-secondary">
                            <MapPin size={14} /> {venue.sqft} sq ft
                          </span>
                        </div>
                        <ul className="mt-4 grid grid-cols-2 gap-2">
                          {venue.features.map((f) => (
                            <li key={f} className="flex items-center gap-2 text-sm text-text-secondary">
                              <CheckCircle size={12} className="text-accent-gold shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              )}

              {activeTab === "types" && (
                <div>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {EVENT_TYPES.map((et) => (
                      <GlassCard key={et.name} className="text-center">
                        <Mic2 size={24} className="mx-auto mb-3 text-accent-gold" />
                        <h4 className="font-semibold text-white">{et.name}</h4>
                        <p className="mt-2 text-sm text-text-secondary">{et.description}</p>
                      </GlassCard>
                    ))}
                  </div>
                  <h3 className="mt-10 mb-4 text-lg font-semibold text-white">Past Event Highlights</h3>
                  <div className="grid gap-3 md:grid-cols-2">
                    {pastEvents.map((e) => (
                      <div key={e.name} className="flex items-center justify-between rounded-xl bg-bg-secondary px-4 py-3">
                        <div>
                          <div className="text-sm font-medium text-white">{e.name}</div>
                          <div className="text-xs text-text-secondary">{e.type}</div>
                        </div>
                        <div className="text-sm font-semibold text-accent-gold">{e.attendance}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "booking" && (
                <div className="mx-auto max-w-lg">
                  <div className="mb-8 text-center">
                    <Calendar size={40} className="mx-auto mb-4 text-accent-gold" />
                    <h3 className="text-xl font-bold text-white">Book Your Event</h3>
                    <p className="mt-2 text-sm text-text-secondary">
                      Tell us about your vision and we&apos;ll create an unforgettable experience.
                    </p>
                  </div>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full rounded-xl border border-border-subtle bg-bg-secondary px-4 py-3 text-white placeholder:text-text-muted focus:border-accent-gold focus:outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full rounded-xl border border-border-subtle bg-bg-secondary px-4 py-3 text-white placeholder:text-text-muted focus:border-accent-gold focus:outline-none"
                    />
                    <select className="w-full rounded-xl border border-border-subtle bg-bg-secondary px-4 py-3 text-text-secondary focus:border-accent-gold focus:outline-none">
                      <option>Select Event Type</option>
                      {EVENT_TYPES.map((et) => (
                        <option key={et.name}>{et.name}</option>
                      ))}
                    </select>
                    <textarea
                      placeholder="Tell us about your event..."
                      rows={4}
                      className="w-full rounded-xl border border-border-subtle bg-bg-secondary px-4 py-3 text-white placeholder:text-text-muted focus:border-accent-gold focus:outline-none resize-none"
                    />
                    <Button className="w-full">Submit Inquiry</Button>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
