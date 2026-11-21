"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const studioSection = document.getElementById("studio");
    if (studioSection) {
      studioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExploreWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/projects";
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.25,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#171714]"
      aria-label="Neluweera Design Studio Hero"
    >
      {/* Background Architectural Video with Poster Fallback */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none">
        {/* Poster Image */}
        <Image
          src="/images/hero-poster.jpg"
          alt="Luxury architectural interior designed by Neluweera Design Studio"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transform motion-safe:animate-subtle-scale"
        />

        {/* Cinematic Video Element */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90 transition-opacity duration-1000"
        >
          <source src="/videos/hero-interior.mp4" type="video/mp4" />
        </video>

        {/* Architectural Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171714] via-[#171714]/45 to-[#171714]/30 pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#171714]/20 to-[#171714]/60 pointer-events-none" />
      </div>

      {/* Cinematic Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 pt-24 pb-16 flex flex-col justify-between h-full">
        {/* Top Metadata Accent */}
        <div className="w-full flex justify-between items-center text-xs tracking-[0.25em] text-[#E5DED2]/60 uppercase pt-4 sm:pt-6 font-sans font-light">
          <span className="hidden sm:inline-block">MONOGRAPH &bull; VOL. I</span>
          <span className="inline-block sm:hidden text-[#41D2CB]">NELUWEERA</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#41D2CB]" />
            <span>EST. 2018</span>
          </span>
        </div>

        {/* Main Editorial Headline & CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl flex flex-col space-y-6 sm:space-y-8 my-auto"
        >
          {/* Small Category Label with Brand Teal Accent */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-3.5"
          >
            <span className="w-8 h-[1.5px] bg-[#41D2CB]" />
            <span className="text-[11px] sm:text-xs tracking-[0.35em] text-[#41D2CB] uppercase font-sans font-medium">
              INTERIOR ARCHITECTURE & DESIGN
            </span>
          </motion.div>

          {/* Main Slogan Oversized Serif Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#F5F3EE] font-light leading-[0.95] tracking-tight"
          >
            Spaces that{" "}
            <span className="italic font-light block text-[#E5DED2] font-serif">
              inspire living.
            </span>
          </motion.h1>

          {/* Supporting Statement */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-[#E5DED2]/85 font-sans font-light max-w-xl leading-relaxed tracking-wide"
          >
            Thoughtfully designed environments. Timeless perspectives.
          </motion.p>

          {/* Primary Action Button */}
          <motion.div variants={itemVariants} className="pt-2 sm:pt-4">
            <a
              href="#projects"
              onClick={handleExploreWork}
              className="group inline-flex items-center gap-3.5 px-8 py-4 bg-[#F5F3EE] text-[#171714] text-xs uppercase tracking-[0.25em] font-sans font-medium hover:bg-[#41D2CB] hover:text-[#171714] transition-all duration-300 shadow-md"
            >
              <span>EXPLORE OUR WORK</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Bottom Footer Interaction: Scroll to Discover */}
        <div className="w-full flex items-end justify-between border-t border-[#F5F3EE]/15 pt-6 text-xs text-[#E5DED2]/70 font-sans">
          <div className="hidden md:flex flex-col space-y-1">
            <span className="uppercase tracking-[0.2em] text-[10px] text-[#41D2CB]">
              DISCIPLINES
            </span>
            <span className="text-[#E5DED2]/80 text-xs">
              Residential &bull; Commercial &bull; Hospitality &bull; Corporate
            </span>
          </div>

          <a
            href="#studio"
            onClick={handleScrollDown}
            className="group inline-flex items-center gap-3 text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#E5DED2] hover:text-[#41D2CB] transition-colors cursor-pointer py-1 ml-auto md:ml-0"
          >
            <span>SCROLL TO DISCOVER</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <ArrowDown className="w-3.5 h-3.5 stroke-[1.5] text-[#41D2CB]" />
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  );
}
