"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Studio", href: "/studio" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

interface NavbarProps {
  forceSolid?: boolean;
}

export default function Navbar({ forceSolid = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(forceSolid);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (forceSolid) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceSolid]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const isLightHero = !isScrolled && !forceSolid;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#F5F3EE]/95 backdrop-blur-md py-3.5 border-b border-[#919297]/15 shadow-xs"
            : "bg-transparent py-5 lg:py-7"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo & Slogan Header */}
          <Link
            href="/"
            className="group flex items-center gap-3.5 transition-opacity duration-300 hover:opacity-90"
            aria-label="Neluweera Design Studio Home"
          >
            {/* New Geometric Emblem */}
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 shrink-0">
              <Image
                src="/images/logo.png"
                alt="Neluweera Design Studio Emblem"
                fill
                priority
                className={`object-contain transition-all duration-300 ${
                  isLightHero
                    ? "drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] brightness-110"
                    : "brightness-100"
                }`}
              />
            </div>

            {/* Brand Wordmark & Slogan */}
            <div className="flex flex-col">
              <div className="flex items-baseline space-x-2">
                <span
                  className={`font-serif text-lg sm:text-xl tracking-[0.2em] font-medium uppercase transition-colors duration-300 ${
                    isLightHero ? "text-[#F5F3EE]" : "text-[#171714]"
                  }`}
                >
                  NELUWEERA
                </span>
                <span className="hidden xl:inline-block w-1.5 h-1.5 rounded-full bg-[#41D2CB]" />
                <span
                  className={`hidden xl:inline-block text-[10px] tracking-[0.15em] italic font-serif transition-colors duration-300 ${
                    isLightHero ? "text-[#41D2CB]" : "text-[#2AA8A1]"
                  }`}
                >
                  Spaces that inspire living
                </span>
              </div>
              <span
                className={`text-[8.5px] sm:text-[9.5px] tracking-[0.35em] uppercase font-sans font-light -mt-0.5 transition-colors duration-300 ${
                  isLightHero ? "text-[#E5DED2]/80" : "text-[#919297]"
                }`}
              >
                DESIGN STUDIO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.2em] font-sans transition-all duration-300 relative py-1 ${
                    isLightHero
                      ? isActive
                        ? "text-[#F5F3EE] font-medium"
                        : "text-[#F5F3EE]/80 hover:text-[#41D2CB]"
                      : isActive
                      ? "text-[#171714] font-medium"
                      : "text-[#292824]/75 hover:text-[#2AA8A1]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#41D2CB]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className={`group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] px-5 py-2.5 transition-all duration-300 border ${
                isLightHero
                  ? "border-[#41D2CB]/40 text-[#F5F3EE] hover:bg-[#41D2CB] hover:text-[#171714] hover:border-[#41D2CB]"
                  : "border-[#919297]/40 text-[#171714] hover:bg-[#171714] hover:text-[#F5F3EE] hover:border-[#171714]"
              }`}
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#41D2CB]" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-300 focus:outline-hidden ${
              isLightHero ? "text-[#F5F3EE]" : "text-[#171714]"
            }`}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[1.5]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[1.5]" />
            )}
          </button>
        </div>
      </header>

      {/* Full-Screen Architectural Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#171714] text-[#F5F3EE] flex flex-col justify-between px-8 py-24 md:hidden"
          >
            <div className="flex flex-col space-y-6 pt-4">
              {/* Mobile Brand & Slogan */}
              <div className="flex items-center gap-3.5 pb-4 border-b border-[#F5F3EE]/10">
                <div className="relative w-11 h-11 shrink-0">
                  <Image
                    src="/images/logo.png"
                    alt="Neluweera Design Studio Emblem"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xl tracking-[0.2em] uppercase text-[#F5F3EE]">
                    NELUWEERA
                  </span>
                  <span className="text-[8.5px] tracking-[0.25em] uppercase text-[#919297]">
                    DESIGN STUDIO
                  </span>
                  <span className="text-[10px] italic font-serif text-[#41D2CB] mt-0.5">
                    Spaces that inspire living.
                  </span>
                </div>
              </div>

              <span className="text-[10px] tracking-[0.3em] uppercase text-[#41D2CB] font-sans">
                Navigation
              </span>
              <nav className="flex flex-col space-y-5">
                {NAV_LINKS.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * idx, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-serif text-3xl sm:text-4xl text-[#F5F3EE] hover:text-[#41D2CB] transition-colors flex items-center justify-between"
                    >
                      <span>{link.label}</span>
                      <span className="text-xs font-sans tracking-widest text-[#919297]">
                        0{idx + 1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            <div className="border-t border-[#F5F3EE]/10 pt-8 flex flex-col space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#919297]">
                  Direct Inquiries
                </span>
                <p className="font-serif text-lg text-[#F5F3EE]">inquiries@neluweera.com</p>
                <p className="text-xs font-sans text-[#919297]">+94 11 234 5678</p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] bg-[#41D2CB] text-[#171714] px-6 py-3 font-medium hover:bg-[#F5F3EE] transition-colors"
                >
                  <span>Start Conversation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <div className="flex items-center space-x-4 text-xs tracking-wider text-[#919297]">
                  <span>IG</span>
                  <span>LN</span>
                  <span>PIN</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
