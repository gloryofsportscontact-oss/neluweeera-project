"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="w-full bg-[#171714] text-[#F5F3EE] pt-24 pb-12 border-t border-[#292824]"
      aria-label="Studio Footer"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-[#292824]">
          {/* Studio Brand, Logo & Slogan */}
          <div className="md:col-span-5 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-4 group"
              aria-label="Neluweera Design Studio Home"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Neluweera Design Studio Emblem"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col tracking-wider">
                <span className="font-serif text-2xl sm:text-3xl tracking-[0.2em] font-normal uppercase text-[#F5F3EE] group-hover:text-[#41D2CB] transition-colors">
                  NELUWEERA
                </span>
                <span className="text-[10px] tracking-[0.35em] uppercase font-sans font-light text-[#919297] -mt-0.5">
                  DESIGN STUDIO
                </span>
                <span className="text-xs italic font-serif text-[#41D2CB] tracking-wide mt-1">
                  Spaces that inspire living.
                </span>
              </div>
            </Link>

            <p className="text-sm font-sans font-light text-[#E5DED2]/70 leading-relaxed max-w-md">
              A bespoke interior architecture and spatial design practice crafting timeless
              residential, commercial, and hospitality environments internationally.
            </p>

            <div className="pt-2 text-xs font-sans text-[#919297] space-y-1">
              <p>Practice Established in 2018</p>
              <p>Colombo &bull; Singapore &bull; Dubai</p>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#41D2CB] block mb-6">
              NAVIGATION
            </span>
            <ul className="space-y-3 text-xs uppercase tracking-[0.2em] font-sans">
              <li>
                <Link
                  href="/"
                  className="text-[#E5DED2]/80 hover:text-[#41D2CB] transition-colors flex items-center justify-between group"
                >
                  <span>Home</span>
                  <span className="opacity-0 group-hover:opacity-100 text-[#41D2CB] transition-opacity">
                    &rarr;
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/studio"
                  className="text-[#E5DED2]/80 hover:text-[#41D2CB] transition-colors flex items-center justify-between group"
                >
                  <span>Studio</span>
                  <span className="opacity-0 group-hover:opacity-100 text-[#41D2CB] transition-opacity">
                    &rarr;
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-[#E5DED2]/80 hover:text-[#41D2CB] transition-colors flex items-center justify-between group"
                >
                  <span>Projects</span>
                  <span className="opacity-0 group-hover:opacity-100 text-[#41D2CB] transition-opacity">
                    &rarr;
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#E5DED2]/80 hover:text-[#41D2CB] transition-colors flex items-center justify-between group"
                >
                  <span>Services</span>
                  <span className="opacity-0 group-hover:opacity-100 text-[#41D2CB] transition-opacity">
                    &rarr;
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#E5DED2]/80 hover:text-[#41D2CB] transition-colors flex items-center justify-between group"
                >
                  <span>Contact</span>
                  <span className="opacity-0 group-hover:opacity-100 text-[#41D2CB] transition-opacity">
                    &rarr;
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Locations & Direct Inquiries */}
          <div className="md:col-span-4 space-y-6">
            <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#41D2CB] block mb-6">
              STUDIO ARCHIVES & CONTACT
            </span>

            <div className="space-y-4 text-xs font-sans text-[#E5DED2]/80">
              <div>
                <span className="text-[#919297] uppercase tracking-[0.2em] block text-[10px] mb-1">
                  MAIN STUDIO
                </span>
                <p>No. 48 Ward Place, Cinnamon Gardens</p>
                <p>Colombo 00700, Sri Lanka</p>
              </div>

              <div>
                <span className="text-[#919297] uppercase tracking-[0.2em] block text-[10px] mb-1">
                  CORRESPONDENCE
                </span>
                <p>inquiries@neluweera.com</p>
                <p>+94 11 234 5678 / +94 77 123 4567</p>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <span className="text-[#919297] uppercase tracking-[0.2em] block text-[10px] mb-2">
                  EDITORIAL CHANNELS
                </span>
                <div className="flex flex-wrap gap-4 text-xs tracking-wider">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#41D2CB] transition-colors inline-flex items-center gap-1 text-[#E5DED2]/80"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#41D2CB] transition-colors inline-flex items-center gap-1 text-[#E5DED2]/80"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <a
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#41D2CB] transition-colors inline-flex items-center gap-1 text-[#E5DED2]/80"
                  >
                    <span>Pinterest</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <a
                    href="https://archdaily.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#41D2CB] transition-colors inline-flex items-center gap-1 text-[#E5DED2]/80"
                  >
                    <span>ArchDaily</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-[#919297] gap-4">
          <p>
            &copy; 2026 Neluweera Design Studio. All rights reserved. Bespoke Interior Architecture.
          </p>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 uppercase tracking-[0.25em] text-[11px] text-[#E5DED2]/80 hover:text-[#41D2CB] transition-colors focus:outline-hidden"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-1 text-[#41D2CB]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
