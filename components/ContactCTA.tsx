"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail, Phone, MessageSquare } from "lucide-react";

export default function ContactCTA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative w-full py-32 sm:py-44 lg:py-52 bg-[#F5F3EE] text-[#171714] border-t border-[#919297]/15 overflow-hidden"
      aria-label="Start a Conversation with Neluweera Design Studio"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Small Pre-heading Label with Brand Teal Accent */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center space-x-3"
          >
            <span className="w-8 h-[1.5px] bg-[#41D2CB]" />
            <span className="text-[11px] font-sans font-medium tracking-[0.35em] uppercase text-[#2AA8A1]">
              HAVE A PROJECT IN MIND?
            </span>
            <span className="w-8 h-[1.5px] bg-[#41D2CB]" />
          </motion.div>

          {/* Large Expressive Editorial Headline */}
          <motion.h2
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#171714] font-normal leading-[1.05] tracking-tight"
          >
            Let&apos;s create something <br />
            <span className="italic font-light text-[#919297]">exceptional.</span>
          </motion.h2>

          {/* Supporting Text with Slogan Reference */}
          <motion.p
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg text-[#817C72] font-sans font-light max-w-xl mx-auto leading-relaxed"
          >
            Whether embarking on a private residence, hospitality commission, or brand headquarters,
            our studio welcomes inquiries for considered architecture and interior projects worldwide.
          </motion.p>

          {/* Primary CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="pt-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 px-10 py-5 bg-[#171714] text-[#F5F3EE] text-xs sm:text-sm uppercase tracking-[0.25em] font-sans font-medium hover:bg-[#41D2CB] hover:text-[#171714] transition-all duration-300 shadow-md"
            >
              <span>START A CONVERSATION</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Direct Communication Channels */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-16 sm:pt-20 border-t border-[#919297]/20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
          >
            {/* Email Channel */}
            <a
              href="mailto:inquiries@neluweera.com"
              className="group flex flex-col items-center space-y-2.5 p-4 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#E5DED2]/50 flex items-center justify-center text-[#171714] group-hover:bg-[#41D2CB] group-hover:text-[#171714] transition-colors">
                <Mail className="w-4 h-4 stroke-[1.5]" />
              </div>
              <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#919297]">
                DIRECT EMAIL
              </span>
              <span className="font-serif text-base sm:text-lg text-[#171714] group-hover:text-[#2AA8A1] transition-colors">
                inquiries@neluweera.com
              </span>
            </a>

            {/* Studio Line */}
            <a
              href="tel:+94112345678"
              className="group flex flex-col items-center space-y-2.5 p-4 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#E5DED2]/50 flex items-center justify-center text-[#171714] group-hover:bg-[#41D2CB] group-hover:text-[#171714] transition-colors">
                <Phone className="w-4 h-4 stroke-[1.5]" />
              </div>
              <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#919297]">
                STUDIO TELEPHONE
              </span>
              <span className="font-serif text-base sm:text-lg text-[#171714] group-hover:text-[#2AA8A1] transition-colors">
                +94 11 234 5678
              </span>
            </a>

            {/* WhatsApp Direct */}
            <a
              href="https://wa.me/94771234567"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center space-y-2.5 p-4 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#E5DED2]/50 flex items-center justify-center text-[#171714] group-hover:bg-[#41D2CB] group-hover:text-[#171714] transition-colors">
                <MessageSquare className="w-4 h-4 stroke-[1.5]" />
              </div>
              <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#919297]">
                WHATSAPP CONSULTATION
              </span>
              <span className="font-serif text-base sm:text-lg text-[#171714] group-hover:text-[#2AA8A1] transition-colors">
                +94 77 123 4567
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
