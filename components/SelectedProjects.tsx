"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";

const PROJECTS_DATA: Project[] = [
  {
    id: "alabaster-residence",
    title: "The Alabaster Residence",
    category: "Residential",
    location: "Colombo 07, Sri Lanka",
    year: "2025",
    image: "/images/project-residential.jpg",
    aspect: "portrait",
    description: "Monolithic travertine volumes, natural linen textures, and tailored oak joinery creating a serene sanctuary.",
  },
  {
    id: "lumina-pavilion",
    title: "Lumina Pavilion & Gallery",
    category: "Commercial",
    location: "Marina Bay, Singapore",
    year: "2024",
    image: "/images/project-commercial.jpg",
    aspect: "landscape",
    description: "Sculptural concrete curves and diffused architectural illumination designed for contemporary cultural display.",
  },
  {
    id: "kandy-hills-sanctuary",
    title: "Kandy Hills Sanctuary",
    category: "Hospitality",
    location: "Central Highlands",
    year: "2025",
    image: "/images/project-hospitality.jpg",
    aspect: "portrait",
    description: "An immersive mountain retreat framing cloud forests through raw earth plaster and patinated brass detailing.",
  },
  {
    id: "vesper-penthouse",
    title: "Vesper Executive Penthouse",
    category: "Corporate",
    location: "Dubai Marina, UAE",
    year: "2024",
    image: "/images/project-corporate.jpg",
    aspect: "wide",
    description: "Smoked oak paneling, bronze vitrines, and bespoke executive lounge architecture commanding skyline vistas.",
  },
  {
    id: "monolith-atelier",
    title: "The Brass & Monolith Atelier",
    category: "Commercial",
    location: "Melbourne, Australia",
    year: "2025",
    image: "/images/project-retail.jpg",
    aspect: "portrait",
    description: "A tactile flagship retail interior centered on hand-cast bronze display monoliths and limestone flooring.",
  },
  {
    id: "casa-travertino",
    title: "Casa Travertino",
    category: "Residential",
    location: "Galle Coast, Sri Lanka",
    year: "2024",
    image: "/images/project-coastal.jpg",
    aspect: "landscape",
    description: "A coastal residence celebrating horizontal openness, shaded teak verandas, and marine-grade craftsmanship.",
  },
];

const CATEGORIES = ["All", "Residential", "Commercial", "Hospitality", "Corporate"] as const;

export default function SelectedProjects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const prefersReducedMotion = useReducedMotion();

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative w-full py-28 sm:py-36 lg:py-44 bg-[#E5DED2]/30 text-[#171714] border-t border-[#919297]/15"
      aria-label="Selected Projects Showcase"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header with Category Indicator */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-[#919297]/20">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-[#2AA8A1]">
                02 &mdash; SELECTED PORTFOLIO
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171714] font-normal tracking-tight">
              Spaces with <span className="italic font-light text-[#919297]">character.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#817C72] font-sans font-light leading-relaxed">
              A collection of considered spaces, each with its own story, character and purpose.
            </p>
          </div>

          {/* Minimal Category Filter Tabs with Brand Teal Accents */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-8 md:mt-0">
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[11px] sm:text-xs font-sans uppercase tracking-[0.2em] px-4 py-2 transition-all duration-300 border flex items-center gap-1.5 ${
                    isSelected
                      ? "border-[#171714] bg-[#171714] text-[#F5F3EE]"
                      : "border-transparent text-[#919297] hover:text-[#171714] hover:border-[#919297]/30"
                  }`}
                >
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#41D2CB]" />}
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetrical Editorial Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12"
          >
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              const isFullFeatured = index === 3;
              const colSpan = isFullFeatured
                ? "md:col-span-12"
                : isEven
                ? "md:col-span-7"
                : "md:col-span-5 md:mt-12 lg:mt-16";

              const aspectClass = isFullFeatured
                ? "aspect-[21/10]"
                : isEven
                ? "aspect-[4/3] sm:aspect-[16/11]"
                : "aspect-[4/5]";

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`${colSpan} group flex flex-col`}
                >
                  {/* Image Container with Elegant Hover Zoom */}
                  <Link
                    href={`/projects`}
                    className="relative w-full block overflow-hidden bg-[#E5DED2] focus:outline-hidden"
                    aria-label={`View ${project.title}`}
                  >
                    <div className={`relative w-full ${aspectClass} overflow-hidden`}>
                      <Image
                        src={project.image}
                        alt={`${project.title} - ${project.category} interior by Neluweera Design Studio`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                        className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[#171714]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      {/* Floating Monograph Badge with Teal Dot */}
                      <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                        <span className="text-[10px] font-sans uppercase tracking-[0.25em] px-2.5 py-1 bg-[#F5F3EE]/95 text-[#171714] backdrop-blur-xs font-medium inline-flex items-center gap-1.5 border border-[#919297]/15">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#41D2CB]" />
                          <span>0{index + 1}</span>
                        </span>
                      </div>

                      {/* Interactive Minimal Arrow Icon on Hover */}
                      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-10 h-10 rounded-full bg-[#F5F3EE] text-[#171714] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-md group-hover:bg-[#41D2CB]">
                        <ArrowUpRight className="w-4 h-4 stroke-[2]" />
                      </div>
                    </div>
                  </Link>

                  {/* Minimal Editorial Project Metadata */}
                  <div className="pt-6 flex flex-col space-y-2">
                    <div className="flex items-center justify-between text-xs font-sans text-[#817C72]">
                      <span className="tracking-[0.25em] uppercase text-[#2AA8A1] font-medium">
                        {project.category}
                      </span>
                      <span className="tracking-wider text-[#919297]">{project.location}</span>
                    </div>

                    <Link href={`/projects`} className="group/title">
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#171714] font-normal leading-snug group-hover/title:text-[#2AA8A1] transition-colors flex items-center justify-between">
                        <span>{project.title}</span>
                      </h3>
                    </Link>

                    {project.description && (
                      <p className="text-xs sm:text-sm text-[#817C72] font-sans font-light leading-relaxed pt-1">
                        {project.description}
                      </p>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Portfolio Monograph Footer Link */}
        <div className="mt-20 sm:mt-24 pt-10 border-t border-[#919297]/15 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-6">
          <p className="text-xs sm:text-sm font-sans tracking-wide text-[#817C72]">
            Detailed project dossiers, material specifications, and photographic archives available on request.
          </p>

          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-sans font-medium text-[#171714] hover:text-[#2AA8A1] transition-colors"
          >
            <span>VIEW COMPLETE ARCHIVE</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#41D2CB]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
