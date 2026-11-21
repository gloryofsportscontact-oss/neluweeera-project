import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://neluweera.com"),
  title: "NELUWEERA DESIGN STUDIO | Interior Architecture & Luxury Design",
  description:
    "Bespoke interior architecture and contemporary luxury environments. Thoughtfully designed spaces shaped by architectural rigor, materiality, and timeless perspectives.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Interior Architecture",
    "Luxury Interior Design",
    "Residential Architecture",
    "Commercial Design Studio",
    "Hospitality Interiors",
    "Neluweera Design Studio",
  ],
  authors: [{ name: "Neluweera Design Studio" }],
  openGraph: {
    title: "NELUWEERA DESIGN STUDIO — Interior Architecture",
    description:
      "Spaces that inspire living. Thoughtfully designed environments. Timeless perspectives.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/hero-poster.jpg",
        width: 1920,
        height: 1080,
        alt: "Neluweera Design Studio — Interior Architecture",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${dmSans.variable} scroll-smooth antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#F5F3EE] text-[#171714] font-sans selection:bg-[#A68B68] selection:text-[#F5F3EE]"
      >
        {children}
      </body>
    </html>
  );
}
