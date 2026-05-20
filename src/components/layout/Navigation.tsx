"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SECTIONS } from "@/lib/constants";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 100);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  }

  return (
    <>
      {/* Top bar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: scrolled ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 glass"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button onClick={() => scrollTo("hero")} className="text-lg font-bold tracking-wider text-white">
            MALL OF <span className="text-accent-gold">AMERICA</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {SECTIONS.filter((s) => s.id !== "hero").map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`text-xs uppercase tracking-[0.15em] transition-colors ${
                  activeSection === section.id
                    ? "text-accent-gold"
                    : "text-text-secondary hover:text-white"
                }`}
              >
                {section.shortLabel}
              </button>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white md:hidden"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-bg-primary/95 backdrop-blur-lg md:hidden"
          >
            <nav className="flex flex-col items-center gap-6">
              {SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className={`text-lg uppercase tracking-[0.2em] transition-colors ${
                    activeSection === section.id
                      ? "text-accent-gold"
                      : "text-text-secondary"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Side dot nav — desktop only */}
      <div className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex">
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            className="group relative flex items-center"
            aria-label={`Go to ${section.label}`}
          >
            <span className="absolute right-6 whitespace-nowrap rounded bg-bg-elevated px-2 py-1 text-xs text-text-secondary opacity-0 transition-opacity group-hover:opacity-100">
              {section.label}
            </span>
            <motion.div
              className={`rounded-full transition-all ${
                activeSection === section.id
                  ? "h-3 w-3 bg-accent-gold"
                  : "h-2 w-2 bg-white/30 group-hover:bg-white/60"
              }`}
              layout
            />
          </button>
        ))}
      </div>
    </>
  );
}
