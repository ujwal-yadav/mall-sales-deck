"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import VideoBackground from "@/components/ui/VideoBackground";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <VideoBackground
        src="/videos/hero-mall.mp4#t=22"
        poster=""
        overlayOpacity={0.6}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent-gold">
            Bloomington, Minnesota
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-heading text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl lg:text-8xl"
        >
          THE NATION&apos;S
          <br />
          <span className="gradient-gold">LARGEST</span>
          <br />
          DESTINATION
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-text-secondary md:text-xl"
        >
          520+ Stores. 32 Million Visitors. One Unforgettable Experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button
            onClick={() =>
              document
                .getElementById("why-moa")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-full bg-accent-gold px-8 py-4 text-sm font-semibold uppercase tracking-wider text-bg-primary transition-colors hover:bg-accent-gold-light"
          >
            Explore the Opportunity
          </button>
          <button
            onClick={() =>
              document
                .getElementById("cta")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-accent-gold hover:text-accent-gold"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() =>
            document
              .getElementById("why-moa")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex flex-col items-center gap-2 text-text-secondary transition-colors hover:text-white"
        >
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <ChevronDown size={20} className="animate-scroll-hint" />
        </button>
      </motion.div>
    </section>
  );
}
