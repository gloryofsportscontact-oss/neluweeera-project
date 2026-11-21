import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StudioIntro from "@/components/StudioIntro";
import SelectedProjects from "@/components/SelectedProjects";
import Services from "@/components/Services";
import DesignPhilosophy from "@/components/DesignPhilosophy";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F3EE] text-[#171714] selection:bg-[#A68B68] selection:text-[#F5F3EE]">
      {/* SECTION 01 — PREMIUM NAVIGATION */}
      <Navbar />

      {/* SECTION 02 — CINEMATIC FULL-SCREEN HERO */}
      <Hero />

      {/* SECTION 03 — INTRODUCING THE STUDIO */}
      <StudioIntro />

      {/* SECTION 04 — SELECTED PROJECTS */}
      <SelectedProjects />

      {/* SECTION 05 — SERVICES / EXPERTISE */}
      <Services />

      {/* SECTION 06 — DESIGN PHILOSOPHY */}
      <DesignPhilosophy />

      {/* SECTION 07 — CONTACT CALL TO ACTION */}
      <ContactCTA />

      {/* SECTION 08 — PREMIUM FOOTER */}
      <Footer />
    </main>
  );
}
