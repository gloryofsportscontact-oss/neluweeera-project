import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Studio | NELUWEERA DESIGN STUDIO",
  description: "Studio monograph and architectural methodology. Neluweera Design Studio.",
};

export default function StudioPlaceholder() {
  return (
    <div className="min-h-screen bg-[#F5F3EE] text-[#171714] flex flex-col justify-between">
      <Navbar forceSolid />

      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-40 sm:py-48 flex-1 flex flex-col justify-center">
        <div className="max-w-2xl space-y-6">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[1.5px] bg-[#41D2CB]" />
            <span className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-[#2AA8A1]">
              STUDIO MONOGRAPH &bull; PHASE II
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl text-[#171714] font-normal leading-tight">
            The Studio <br />
            <span className="italic font-light text-[#919297]">Under Curation</span>
          </h1>

          <p className="text-sm sm:text-base text-[#817C72] font-sans leading-relaxed">
            Our comprehensive studio profile, design ethos, and leadership directory are currently
            being documented for Phase II publication. Please explore our landing page for current highlights.
          </p>

          <div className="pt-4">
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
