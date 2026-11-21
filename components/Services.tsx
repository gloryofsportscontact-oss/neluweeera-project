"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { Service } from "@/types";

const SERVICES_DATA: Service[] = [
  {
    number: "01",
    title: "Interior Architecture",
    description:
      "Structural reconfigurations, spatial sequence planning, volumetric articulation, and technical architectural integration establishing the foundational skeleton of extraordinary spaces.",
    disciplines: [
      "Spatial Masterplanning",
      "Structural Envelope Design",
      "Skylight & Natural Illumination Studies",
      "MEP & Architectural Synchronization",
    ],
  },
  {
    number: "02",
    title: "Residential Interior Design",
    description:
      "Private sanctuaries crafted with acute sensitivity to daily ritual, tactile intimacy, customized storage architectures, and serene material palettes.",
    disciplines: [
      "Private Residences & Villas",
      "Master Suite & Bath Environments",
      "Culinary Architectures",
      "Outdoor Loggias & Courtyards",
    ],
  },
  {
    number: "03",
    title: "Commercial Interior Design",
    description:
      "Brand-defining commercial environments engineered to inspire patrons, communicate enterprise prestige, and foster memorable communal experiences.",
    disciplines: [
      "Flagship Retail Ateliers",
      "Galleries & Exhibition Pavilions",
      "Creative Agency Studios",
      "Acoustic & Flow Optimization",
    ],
  },
  {
    number: "04",
    title: "Corporate & Hospitality Interiors",
    description:
      "High-calibre hospitality escapes and executive suites that balance restorative luxury, cultural resonance, and impeccable operational efficiency.",
    disciplines: [
      "Boutique Hotels & Lodges",
      "Executive Boardrooms & Penthouses",
      "Cocktail Lounges & Private Dining",
      "Wellness & Spa Sanctuaries",
    ],
  },
  {
    number: "05",
    title: "Furniture Design & Styling",
    description:
      "Bespoke artisan millwork, sculptural furniture commissions, curated fine art acquisition, and tactile textile layering tailored specifically to each project.",
    disciplines: [
      "Custom Monolithic Joinery",
      "Artisan Bronze & Stone Objects",
      "Fine Art Curation & Framing",
      "Natural Textile & Lighting Selection",
    ],
  },
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const prefersReducedMotion = useReducedMotion();

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section
      id="services"
      className="relative w-full py-28 sm:py-36 lg:py-44 bg-[#F5F3EE] text-[#171714] border-t border-[#919297]/15"
      aria-label="Areas of Expertise"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header with Brand Teal Badge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20">
          <div className="lg:col-span-5">
            <span className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-[#2AA8A1] block mb-4">
              03 &mdash; CAPABILITIES & DISCIPLINES
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171714] font-normal tracking-tight">
              Our areas of <br />
              <span className="italic font-light text-[#919297]">expertise.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-end">
            <p className="text-sm sm:text-base text-[#817C72] font-sans font-light leading-relaxed max-w-xl">
              We guide commissions from foundational spatial conception through bespoke construction detailing.
              Our multidisciplinary expertise synthesizes architecture, craft, and human ritual into cohesive environments.
            </p>
          </div>
        </div>

        {/* Sophisticated Editorial Service List */}
        <div className="border-t border-[#919297]/25 divide-y divide-[#919297]/20">
          {SERVICES_DATA.map((service, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group py-8 sm:py-10 transition-colors duration-300"
              >
                <div
                  onClick={() => toggleExpand(idx)}
                  className="w-full flex items-start justify-between cursor-pointer select-none"
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleExpand(idx);
                    }
                  }}
                >
                  <div className="flex items-baseline space-x-6 sm:space-x-12">
                    <span className="font-serif text-xl sm:text-2xl text-[#2AA8A1] font-light">
                      {service.number}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#171714] font-normal group-hover:text-[#2AA8A1] transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center space-x-4 pl-4">
                    <span className="hidden sm:inline-block text-[10px] tracking-[0.25em] uppercase text-[#919297] font-sans">
                      {isExpanded ? "COLLAPSE" : "DETAILS"}
                    </span>
                    <div className="w-9 h-9 rounded-full border border-[#919297]/30 group-hover:border-[#41D2CB] flex items-center justify-center transition-colors group-hover:bg-[#41D2CB]/10">
                      {isExpanded ? (
                        <Minus className="w-3.5 h-3.5 text-[#171714] group-hover:text-[#2AA8A1]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 text-[#171714] group-hover:text-[#2AA8A1]" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expandable Editorial Sub-details */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="pt-6 sm:pt-8 pl-10 sm:pl-20 pr-4 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline overflow-hidden"
                  >
                    <p className="md:col-span-7 text-sm sm:text-base text-[#817C72] font-sans font-light leading-relaxed">
                      {service.description}
                    </p>

                    <div className="md:col-span-5 md:pl-6 border-l md:border-[#919297]/20">
                      <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#2AA8A1] block mb-3 font-medium">
                        KEY DELIVERABLES
                      </span>
                      <ul className="space-y-1.5">
                        {service.disciplines.map((d) => (
                          <li
                            key={d}
                            className="text-xs text-[#292824] font-sans font-normal tracking-wide flex items-center space-x-2"
                          >
                            <span className="w-1.5 h-[1.5px] bg-[#41D2CB]" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Services CTA Banner */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#919297]/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs sm:text-sm text-[#817C72] font-sans">
            Need a bespoke scope combining multiple architectural and styling disciplines?
          </p>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-sans font-medium text-[#171714] hover:text-[#2AA8A1] transition-colors"
          >
            <span>EXPLORE FULL SERVICE SCOPES</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#41D2CB]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
