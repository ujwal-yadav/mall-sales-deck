"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import {
  INQUIRY_TYPES,
  EVENT_TYPES,
  SQ_FOOTAGE_OPTIONS,
  MALL_LOCATIONS,
  PARTNERSHIP_TYPES,
  BUDGET_RANGES,
  ATTENDANCE_RANGES,
} from "@/lib/constants";
import type { InquiryType } from "@/types";
import {
  X,
  Store,
  Handshake,
  CalendarCheck,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

interface InquiryModuleProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedType?: InquiryType | null;
}

const iconMap: Record<InquiryType, React.ReactNode> = {
  lease: <Store size={32} />,
  partner: <Handshake size={32} />,
  event: <CalendarCheck size={32} />,
};

const stepTitles: Record<number, string> = {
  1: "How Can We Help?",
  2: "Tell Us More",
  3: "Inquiry Submitted",
};

const inputClass =
  "w-full rounded-xl border border-border-subtle bg-bg-secondary px-4 py-3 text-white placeholder:text-text-muted focus:border-accent-gold focus:outline-none";

const selectClass =
  "w-full rounded-xl border border-border-subtle bg-bg-secondary px-4 py-3 text-text-secondary focus:border-accent-gold focus:outline-none";

export default function InquiryModule({
  isOpen,
  onClose,
  preSelectedType,
}: InquiryModuleProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <InquiryModalContent
          onClose={onClose}
          preSelectedType={preSelectedType}
        />
      )}
    </AnimatePresence>
  );
}

function InquiryModalContent({
  onClose,
  preSelectedType,
}: {
  onClose: () => void;
  preSelectedType?: InquiryType | null;
}) {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(
    preSelectedType ? 2 : 1
  );
  const [selectedType, setSelectedType] = useState<InquiryType | null>(
    preSelectedType ?? null
  );
  const [referenceNumber, setReferenceNumber] = useState("");

  const handleTypeSelect = (type: InquiryType) => {
    setSelectedType(type);
    setCurrentStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReferenceNumber(
      String(Math.floor(100000 + Math.random() * 900000))
    );
    setCurrentStep(3);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-60 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border-subtle bg-bg-primary"
        onClick={(e) => e.stopPropagation()}
      >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border-subtle bg-bg-primary/95 px-8 py-6 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-white">
                    {stepTitles[currentStep]}
                  </h2>
                  <p className="mt-1 text-sm text-text-secondary">
                    {currentStep === 1 && "Select an inquiry type to get started"}
                    {currentStep === 2 &&
                      `${INQUIRY_TYPES.find((t) => t.id === selectedType)?.title} Inquiry`}
                    {currentStep === 3 && "We'll be in touch soon"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {/* Step indicator */}
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3].map((step) => (
                    <div
                      key={step}
                      className={`h-2 rounded-full transition-all ${
                        step === currentStep
                          ? "w-6 bg-accent-gold"
                          : step < currentStep
                            ? "w-2 bg-accent-gold/50"
                            : "w-2 bg-border-subtle"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={onClose}
                  className="text-text-secondary hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <AnimatePresence mode="wait">
                {/* Step 1: Type Selection */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="grid gap-4 md:grid-cols-3">
                      {INQUIRY_TYPES.map((type) => (
                        <GlassCard key={type.id} className="cursor-pointer text-center">
                          <div onClick={() => handleTypeSelect(type.id)}>
                            <div className="mx-auto mb-4 text-accent-gold">
                              {iconMap[type.id]}
                            </div>
                            <h3 className="text-lg font-bold text-white">
                              {type.title}
                            </h3>
                            <p className="mt-1 text-xs uppercase tracking-wider text-accent-gold">
                              {type.subtitle}
                            </p>
                            <p className="mt-3 text-sm text-text-secondary">
                              {type.description}
                            </p>
                          </div>
                        </GlassCard>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Form */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="mx-auto max-w-lg">
                      <form className="space-y-4" onSubmit={handleSubmit}>
                        {/* Common fields */}
                        <input
                          type="text"
                          placeholder="Your Name"
                          required
                          className={inputClass}
                        />
                        <input
                          type="email"
                          placeholder="Email Address"
                          required
                          className={inputClass}
                        />
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          required
                          className={inputClass}
                        />

                        {/* Lease-specific fields */}
                        {selectedType === "lease" && (
                          <>
                            <input
                              type="text"
                              placeholder="Company Name"
                              required
                              className={inputClass}
                            />
                            <select required className={selectClass}>
                              <option value="">Desired Square Footage</option>
                              {SQ_FOOTAGE_OPTIONS.map((opt) => (
                                <option key={opt} value={opt}>
                                  {opt}
                                </option>
                              ))}
                            </select>
                            <select required className={selectClass}>
                              <option value="">Preferred Location</option>
                              {MALL_LOCATIONS.map((loc) => (
                                <option key={loc} value={loc}>
                                  {loc}
                                </option>
                              ))}
                            </select>
                            <div>
                              <label className="mb-1.5 block text-sm text-text-secondary">
                                Desired Lease Start
                              </label>
                              <input
                                type="date"
                                className={inputClass}
                              />
                            </div>
                          </>
                        )}

                        {/* Partner-specific fields */}
                        {selectedType === "partner" && (
                          <>
                            <input
                              type="text"
                              placeholder="Company Name"
                              required
                              className={inputClass}
                            />
                            <select required className={selectClass}>
                              <option value="">Partnership Type</option>
                              {PARTNERSHIP_TYPES.map((pt) => (
                                <option key={pt} value={pt}>
                                  {pt}
                                </option>
                              ))}
                            </select>
                            <select required className={selectClass}>
                              <option value="">Budget Range</option>
                              {BUDGET_RANGES.map((br) => (
                                <option key={br} value={br}>
                                  {br}
                                </option>
                              ))}
                            </select>
                          </>
                        )}

                        {/* Event-specific fields */}
                        {selectedType === "event" && (
                          <>
                            <input
                              type="text"
                              placeholder="Organization Name"
                              required
                              className={inputClass}
                            />
                            <select required className={selectClass}>
                              <option value="">Event Type</option>
                              {EVENT_TYPES.map((et) => (
                                <option key={et.name} value={et.name}>
                                  {et.name}
                                </option>
                              ))}
                            </select>
                            <select required className={selectClass}>
                              <option value="">Expected Attendance</option>
                              {ATTENDANCE_RANGES.map((ar) => (
                                <option key={ar} value={ar}>
                                  {ar}
                                </option>
                              ))}
                            </select>
                            <div>
                              <label className="mb-1.5 block text-sm text-text-secondary">
                                Preferred Date
                              </label>
                              <input
                                type="date"
                                className={inputClass}
                              />
                            </div>
                          </>
                        )}

                        <textarea
                          placeholder="Tell us about your vision..."
                          rows={4}
                          className={`${inputClass} resize-none`}
                        />

                        {/* Buttons */}
                        <div className="flex gap-3 pt-2">
                          <Button
                            variant="outline"
                            onClick={() => {
                              setCurrentStep(1);
                            }}
                            className="flex-1"
                          >
                            <span className="flex items-center justify-center gap-2">
                              <ArrowLeft size={16} />
                              Back
                            </span>
                          </Button>
                          <button
                            type="submit"
                            className="flex-1 rounded-full bg-accent-gold px-6 py-3 text-sm font-semibold text-bg-primary transition-colors hover:bg-accent-gold-light"
                          >
                            <span className="flex items-center justify-center gap-2">
                              Submit Inquiry
                              <ArrowRight size={16} />
                            </span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Confirmation */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mx-auto max-w-lg space-y-6 py-8 text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          delay: 0.1,
                        }}
                      >
                        <CheckCircle
                          size={64}
                          className="mx-auto text-accent-gold"
                        />
                      </motion.div>
                      <div>
                        <h3 className="font-heading text-2xl font-bold text-white">
                          Thank You!
                        </h3>
                        <p className="mt-3 text-text-secondary">
                          Your inquiry has been received. Our team will review
                          your submission and be in touch within 1–2 business
                          days.
                        </p>
                        <div className="mt-4 inline-block rounded-lg bg-bg-secondary px-4 py-2 text-sm text-accent-gold">
                          Reference #{referenceNumber}
                        </div>
                      </div>
                      <div className="flex gap-3 pt-2">
                        <Button
                          variant="outline"
                          onClick={() => {
                            setCurrentStep(1);
                            setSelectedType(null);
                          }}
                          className="flex-1"
                        >
                          New Inquiry
                        </Button>
                        <Button onClick={onClose} className="flex-1">
                          Close
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
  );
}
