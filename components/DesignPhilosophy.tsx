"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function DesignPhilosophy() {
  const prefersReducedMotion = useReducedMotion();

  const materials = [
    { title: "Travertine & Limestone", subtitle: "Formed by time, honed for calm" },
    { title: "Smoked European Oak", subtitle: "Warm grain, tectonic integrity" },
    { title: "Hand-Rubbed Bronze", subtitle: "Living patina, tactile weight" },
    { title: "Chiaroscuro Light", subtitle: "Natural geometry carved by shadows" },
  ];

  return (
    <section
      className="relative w-full py-32 sm:py-44 lg:py-56 bg-[#171714] text-[#F5F3EE] overflow-hidden"
      aria-label="Design Philosophy"
    >
      {/* Background Architectural Photograph with Depth Overlay */}
      <div className="absolute inset-0 w-full h-full select-none">
        <Image
          src="/images/philosophy-bg.jpg"
          alt="Atmospheric architectural light and materials"
          fill
          sizes="100vw"
          className="object-cover object-center scale-105 opacity-40 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171714] via-[#171714]/80 to-[#171714]/90 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-between">
        {/* Top Tagline with Brand Teal Accent */}
        <div className="flex items-center space-x-3 mb-16 sm:mb-24">
          <span className="w-8 h-[1.5px] bg-[#41D2CB]" />
          <span className="text-[11px] font-sans font-medium tracking-[0.35em] uppercase text-[#41D2CB]">
            04 &mdash; PHILOSOPHY & MATERIALITY
          </span>
        </div>

        {/* Central Immersive Editorial Typography */}
        <div className="max-w-4xl mx-auto text-center space-y-8 my-8">
          <motion.h2
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F5F3EE] font-light leading-[1.05] tracking-tight"
          >
            Beauty in{" "}
            <span className="italic font-light text-[#E5DED2] block sm:inline">
              every detail.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-xl md:text-2xl text-[#E5DED2]/80 font-sans font-light max-w-2xl mx-auto leading-relaxed"
          >
            A thoughtful balance of form, function and feeling.
          </motion.p>
        </div>

        {/* Tactile Material Accents Grid */}
        <div className="mt-20 sm:mt-28 pt-12 border-t border-[#F5F3EE]/15 grid grid-cols-2 md:grid-cols-4 gap-8">
          {materials.map((m, idx) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-2 text-left"
            >
              <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#41D2CB] block font-medium">
                0{idx + 1}
              </span>
              <h4 className="font-serif text-lg sm:text-xl text-[#F5F3EE] font-normal leading-snug">
                {m.title}
              </h4>
              <p className="text-xs font-sans text-[#919297] font-light leading-relaxed">
                {m.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
