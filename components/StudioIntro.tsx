"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function StudioIntro() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="studio"
      className="relative w-full py-28 sm:py-36 lg:py-44 bg-[#F5F3EE] text-[#171714] overflow-hidden"
      aria-label="About Neluweera Design Studio"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Subtle Top Index Marker with Brand Teal */}
        <div className="flex items-center space-x-4 mb-16 sm:mb-20">
          <span className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-[#2AA8A1]">
            01 &mdash; STUDIO MANIFESTO
          </span>
          <span className="h-[1px] flex-1 max-w-[80px] bg-[#41D2CB]/40" />
        </div>

        {/* Asymmetrical Two-Column Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Expressive Serif Heading & Studio Highlights */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-between space-y-12"
          >
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171714] font-normal leading-[1.08] tracking-tight">
                Beyond the <br />
                <span className="italic font-light text-[#919297]">ordinary.</span>
              </h2>

              <p className="mt-8 text-sm sm:text-base text-[#817C72] font-sans leading-relaxed max-w-md">
                Founded on the synthesis of architectural rigor and sensory nuance,
                Neluweera constructs bespoke interior environments tailored to the rhythms
                of private life and distinguished public enterprise.
              </p>
            </div>

            {/* Studio Identity Pillars */}
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-[#919297]/20">
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#171714] block flex items-baseline gap-1.5">
                  45+ <span className="w-1.5 h-1.5 rounded-full bg-[#41D2CB]" />
                </span>
                <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#919297] mt-1 block">
                  Curated Projects
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#171714] block flex items-baseline gap-1.5">
                  03 <span className="w-1.5 h-1.5 rounded-full bg-[#41D2CB]" />
                </span>
                <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#919297] mt-1 block">
                  Global Studios
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative, Approach Link, & Editorial Photography */}
          <div className="lg:col-span-7 flex flex-col space-y-12">
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              {/* Primary Studio Introduction Quote */}
              <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#292824] leading-snug font-light">
                &ldquo;We believe exceptional spaces are more than beautiful surroundings.
                They are experiences shaped by creativity, purpose and thoughtful design.&rdquo;
              </blockquote>

              <p className="text-sm sm:text-base text-[#817C72] font-sans font-light leading-relaxed max-w-2xl">
                Every commission begins with an uncompromising inquiry into materiality,
                spatial proportion, natural illumination, and human intimacy. From private coastal
                residences to high-calibre cultural pavilions, our work rejects transient decoration
                in pursuit of enduring character and quiet distinction.
              </p>

              {/* Secondary Link */}
              <div className="pt-2">
                <Link
                  href="/studio"
                  className="group inline-flex items-center gap-2 text-xs font-sans tracking-[0.25em] uppercase text-[#171714] font-medium border-b border-[#171714] pb-1 hover:text-[#2AA8A1] hover:border-[#41D2CB] transition-colors"
                >
                  <span>DISCOVER OUR APPROACH</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#41D2CB]" />
                </Link>
              </div>
            </motion.div>

            {/* Architectural Interior Feature Image */}
            <motion.div
              initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full aspect-[16/10] overflow-hidden bg-[#E5DED2] shadow-sm mt-4 group"
            >
              <Image
                src="/images/studio-detail.jpg"
                alt="Architectural detail and sculptural volume by Neluweera Design Studio"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171714]/35 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 right-5 sm:bottom-6 sm:right-8 text-right flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#41D2CB]" />
                <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.25em] uppercase text-[#F5F3EE]/95 block drop-shadow-xs">
                  ARCHITECTURAL VOLUME &bull; CRAFT & MATERIALITY
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
