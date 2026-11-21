import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Contact | NELUWEERA DESIGN STUDIO",
  description: "Start a conversation with Neluweera Design Studio.",
};

export default function ContactPlaceholder() {
  return (
    <div className="min-h-screen bg-[#F5F3EE] text-[#171714] flex flex-col justify-between">
      <Navbar forceSolid />

      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-40 sm:py-48 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-[1.5px] bg-[#41D2CB]" />
              <span className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-[#2AA8A1]">
                CORRESPONDENCE &amp; INQUIRIES
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl text-[#171714] font-normal leading-tight">
              Start a <br />
              <span className="italic font-light text-[#919297]">Conversation</span>
            </h1>

            <p className="text-sm sm:text-base text-[#817C72] font-sans leading-relaxed max-w-xl">
              We welcome new client inquiries for residential, commercial, hospitality, and corporate
              interior architecture commissions worldwide.
            </p>
          </div>

          {/* Direct Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#919297]/15">
            <a
              href="mailto:inquiries@neluweera.com"
              className="p-6 border border-[#919297]/20 bg-[#FAF8F5] hover:border-[#41D2CB] transition-colors flex flex-col space-y-3 group"
            >
              <Mail className="w-5 h-5 text-[#2AA8A1] stroke-[1.5] group-hover:text-[#41D2CB]" />
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#919297]">
                EMAIL
              </span>
              <span className="font-serif text-lg text-[#171714] group-hover:text-[#2AA8A1] transition-colors">
                inquiries@neluweera.com
              </span>
            </a>

            <a
              href="tel:+94112345678"
              className="p-6 border border-[#919297]/20 bg-[#FAF8F5] hover:border-[#41D2CB] transition-colors flex flex-col space-y-3 group"
            >
              <Phone className="w-5 h-5 text-[#2AA8A1] stroke-[1.5] group-hover:text-[#41D2CB]" />
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#919297]">
                STUDIO TELEPHONE
              </span>
              <span className="font-serif text-lg text-[#171714] group-hover:text-[#2AA8A1] transition-colors">
                +94 11 234 5678
              </span>
            </a>

            <a
              href="https://wa.me/94771234567"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border border-[#919297]/20 bg-[#FAF8F5] hover:border-[#41D2CB] transition-colors flex flex-col space-y-3 group"
            >
              <MessageSquare className="w-5 h-5 text-[#2AA8A1] stroke-[1.5] group-hover:text-[#41D2CB]" />
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#919297]">
                WHATSAPP
              </span>
              <span className="font-serif text-lg text-[#171714] group-hover:text-[#2AA8A1] transition-colors">
                +94 77 123 4567
              </span>
            </a>
          </div>

          <div className="pt-6">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#171714] hover:text-[#2AA8A1] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1 text-[#41D2CB]" />
              <span>RETURN TO HOME</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
