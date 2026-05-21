"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { LEASING_PATHS } from "@/lib/constants";
import Image from "next/image";
import { X, CheckCircle, ArrowRight } from "lucide-react";

interface LeasingModuleProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeasingModule({ isOpen, onClose }: LeasingModuleProps) {
  const [activePath, setActivePath] = useState(LEASING_PATHS[0].id);
  const currentPath = LEASING_PATHS.find((p) => p.id === activePath) || LEASING_PATHS[0];

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
                <h2 className="font-heading text-2xl font-bold text-white">Leasing Opportunities</h2>
                <p className="mt-1 text-sm text-text-secondary">
                  Find your ideal space at Mall of America
                </p>
              </div>
              <button onClick={onClose} className="text-text-secondary hover:text-white">
                <X size={24} />
              </button>
            </div>

            {/* Category tabs */}
            <div className="flex gap-1 overflow-x-auto border-b border-border-subtle px-8">
              {LEASING_PATHS.map((path) => (
                <button
                  key={path.id}
                  onClick={() => setActivePath(path.id)}
                  className={`whitespace-nowrap px-4 py-3 text-sm uppercase tracking-wider transition-colors ${
                    activePath === path.id
                      ? "border-b-2 border-accent-gold text-accent-gold"
                      : "text-text-secondary hover:text-white"
                  }`}
                >
                  {path.title}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPath.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid gap-8 lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                      <Image
                        src={currentPath.image}
                        alt={currentPath.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>

                    {/* Details */}
                    <div>
                      <span className="text-xs uppercase tracking-[0.2em] text-accent-gold">
                        {currentPath.subtitle}
                      </span>
                      <h3 className="font-heading mt-2 text-3xl font-bold text-white">
                        {currentPath.title}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-text-secondary">
                        {currentPath.description}
                      </p>

                      {/* Stats */}
                      <div className="mt-8 grid grid-cols-3 gap-4">
                        {currentPath.stats.map((stat) => (
                          <div key={stat.label} className="text-center">
                            <div className="text-2xl font-bold text-accent-gold">
                              {stat.prefix}
                              {stat.value}
                              {stat.suffix}
                            </div>
                            <div className="mt-1 text-xs uppercase tracking-wider text-text-secondary">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Features */}
                      <ul className="mt-8 space-y-3">
                        {currentPath.features.map((f) => (
                          <li key={f} className="flex items-center gap-3 text-sm text-text-secondary">
                            <CheckCircle size={16} className="shrink-0 text-accent-gold" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8">
                        <Button>
                          Inquire About {currentPath.title}
                          <ArrowRight size={16} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
