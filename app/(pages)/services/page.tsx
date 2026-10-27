import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ServiceCard from '../../components/services/ServiceCard';
import CTA from '../../components/home/CTA';
import { 
  Palette, 
  Printer, 
  Sparkles, 
  Layers, 
  Box, 
  FileText, 
  Shirt, 
  CheckCircle2, 
  Sliders, 
  Stamp, 
  ArrowRight, 
  HelpCircle,
  FileCheck
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services | AA Graphic Studio - Graphic Design & Luxury Printing',
  description: 'Explore AA Graphic Studio specialized services in Graphic Design (Logos, Social Media, Packaging) and High-End Commercial Printing (Business Cards, Flex, Boxes, Finishes).',
};

const graphicDesignServices = [
  {
    title: "Brand Identity & Logo Design",
    category: "Graphic Design",
    description: "Crafting distinct, memorable brand identities with full vector logo suites, color palettes, typography, and brand guideline books.",
    features: [
      "100% Custom Vector Logos (No Templates)",
      "Full Vector Formats (.AI, .EPS, .SVG, .PDF, .PNG)",
      "Primary, Secondary & Monogram Variations",
      "Brand Color Codes (CMYK, RGB, HEX, Pantone)"
    ],
    icon: <Palette className="w-7 h-7" />,
    accent: "amber" as const
  },
  {
    title: "Social Media & Ad Creatives",
    category: "Graphic Design",
    description: "High-converting digital graphics engineered for Instagram, Facebook, LinkedIn, TikTok, and Google Display networks.",
    features: [
      "Custom Post & Story Templates",
      "Engaging Carousel Ad Suites",
      "Promotional & Sale Campaign Banners",
      "Platform-optimized Dimensions & Layouts"
    ],
    icon: <Sparkles className="w-7 h-7" />,
    accent: "amber" as const
  },
  {
    title: "Packaging & Product Label Design",
    category: "Graphic Design",
    description: "Turn heads on retail shelves with custom die-line packaging boxes, bottle labels, cosmetic pouches, and product wraps.",
    features: [
      "Custom 3D Packaging Mockups",
      "Precision Production Die-lines (.AI)",
      "Barcode & QR Code Integration",
      "Foil & Spot UV Mapping Layers"
    ],
    icon: <Box className="w-7 h-7" />,
    accent: "amber" as const
  },
  {
    title: "Marketing & Print Collateral",
    category: "Graphic Design",
    description: "Professional print-ready marketing materials designed to communicate your value proposition persuasively.",
    features: [
      "Bi-Fold & Tri-Fold Brochures",
      "Corporate Profiles & Annual Reports",
      "Promotional Flyers & Event Posters",
      "Restaurant Menus & Presentation Folders"
    ],
    icon: <FileText className="w-7 h-7" />,
    accent: "amber" as const
  },
  {
    title: "Vector Art & Custom Illustrations",
    category: "Graphic Design",
    description: "Unique hand-crafted vector graphics, character mascots, and custom icons that give your brand a one-of-a-kind edge.",
    features: [
      "Scalable Vector Mascot Artwork",
      "Bespoke Iconography Sets",
      "Infographics & Explainer Graphics",
      "T-shirt & Merchandise Vector Graphics"
    ],
    icon: <Layers className="w-7 h-7" />,
    accent: "amber" as const
  },
  {
    title: "Corporate Stationery Design",
    category: "Graphic Design",
    description: "Cohesive office and business stationery that reinforces your brand professionalism at every touchpoint.",
    features: [
      "Executive Business Card Layouts",
      "Letterhead & Envelope Designs",
      "Digital Email Signature Graphics",
      "Company ID Cards & Lanyards"
    ],
    icon: <FileCheck className="w-7 h-7" />,
    accent: "amber" as const
  }
];

const printingServices = [
  {
    title: "Luxury Business Cards & Stationery",
    category: "Printing Press",
    description: "Premium tactile business cards that leave an unforgettable impression with specialty stocks and finishes.",
    features: [
      "350gsm – 400gsm Heavyweight Art Cards",
      "Raised Gold, Silver & Rose Gold Foil",
      "Spot UV Gloss on Soft-Touch Velvet Matte",
      "Letterpress & Blind Embossing Options"
    ],
    icon: <Stamp className="w-7 h-7" />,
    accent: "purple" as const
  },
  {
    title: "Large Format Outdoor & Flex Printing",
    category: "Printing Press",
    description: "Vibrant, weather-resistant outdoor displays, flex banners, shopfront vinyls, and vehicle graphics.",
    features: [
      "High-Res Solvent & UV Curable Inks",
      "Heavy-duty Frontlit & Backlit Flex",
      "One-way Vision & Vinyl Wall Murals",
      "Roll-Up Standees & X-Banners"
    ],
    icon: <Printer className="w-7 h-7" />,
    accent: "purple" as const
  },
  {
    title: "Custom Apparel & Merchandise",
    category: "Printing Press",
    description: "Brand apparel and corporate swag printed with high-durability DTF (Direct-to-Film) and screen printing.",
    features: [
      "Custom Branded Cotton T-Shirts & Hoodies",
      "Embroidered & Printed Caps",
      "Ceramic Mugs & Water Bottles",
      "Corporate Gift Bags & Notebooks"
    ],
    icon: <Shirt className="w-7 h-7" />,
    accent: "purple" as const
  },
  {
    title: "Rigid Boxes & Packaging Printing",
    category: "Printing Press",
    description: "Industrial-grade manufacturing of custom product boxes, corrugated shipping cartons, and luxury gift packaging.",
    features: [
      "Custom Sized Die-cut Folding Cartons",
      "Luxury Magnetic Rigid Gift Boxes",
      "Food-grade & Eco-friendly Kraft Stocks",
      "Custom Sticker Labels & Seals"
    ],
    icon: <Box className="w-7 h-7" />,
    accent: "purple" as const
  },
  {
    title: "Offset Commercial Printing (Bulk)",
    category: "Printing Press",
    description: "High-volume Heidelberg offset printing with superior color consistency and lowest per-unit cost.",
    features: [
      "Magazines, Booklets & Product Catalogs",
      "Brochures, Pamphlets & Flyers",
      "Official Letterheads & Invoices",
      "Calendar & Diary Printing"
    ],
    icon: <Sliders className="w-7 h-7" />,
    accent: "purple" as const
  },
  {
    title: "Specialty Finishes & Post-Press",
    category: "Printing Press",
    description: "Add tactile luxury and protection to any printed piece with our advanced finishing machinery.",
    features: [
      "Soft-Touch Velvet & Anti-scratch Matte Lam",
      "High-Gloss Lamination & Spot UV Gloss",
      "Intricate Laser Die-cutting & Creasing",
      "Saddle-stitch, Spiral & Perfect Book Binding"
    ],
    icon: <Sparkles className="w-7 h-7" />,
    accent: "purple" as const
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-[#09090b] text-zinc-100 min-h-screen">
      
      {/* Header Banner */}
      <section className="relative py-24 text-center overflow-hidden border-b border-zinc-800">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-zinc-900 border border-amber-500/30 text-amber-400 mb-6 inline-block">
            AA GRAPHIC STUDIO SERVICES
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6">
            Graphic Design &amp; <br />
            <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
              Precision Printing Press
            </span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Specialized solutions designed to craft your visual identity and manufacture tangible print assets with unparalleled quality.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="#graphic-design"
              className="px-6 py-3 rounded-full text-xs font-bold bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 transition-all"
            >
              &darr; Graphic Design Solutions
            </a>
            <a
              href="#printing-press"
              className="px-6 py-3 rounded-full text-xs font-bold bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 border border-purple-500/30 transition-all"
            >
              &darr; Printing Press Services
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1: GRAPHIC DESIGN */}
      <section id="graphic-design" className="py-24 border-b border-zinc-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Palette size={14} />
                <span>Pillar 01</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Graphic Designing Services
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
                Pixel-perfect vector designs, branding systems, and marketing graphics crafted to command attention.
              </p>
            </div>

            <Link
              href="/contactUs"
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300"
            >
              <span>Request Design Consultation</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {graphicDesignServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: PRINTING PRESS */}
      <section id="printing-press" className="py-24 border-b border-zinc-800/80 bg-zinc-950/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Printer size={14} />
                <span>Pillar 02</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Commercial &amp; Luxury Printing
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
                Equipped with Heidelberg offset and high-speed digital presses for short and bulk production.
              </p>
            </div>

            <Link
              href="/contactUs"
              className="inline-flex items-center gap-2 text-xs font-bold text-purple-400 hover:text-purple-300"
            >
              <span>Get Immediate Print Quote</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {printingServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Standards & Substrates */}
      <section className="py-20 bg-[#09090b] border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
              INDUSTRY SPECIFICATIONS
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2">
              Our Technical Print &amp; File Standards
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800">
              <h3 className="font-bold text-white text-base mb-2">Color Space</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Calibrated CMYK (FOGRA39) &amp; Pantone Matching System (PMS) to ensure 100% color accuracy on paper.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800">
              <h3 className="font-bold text-white text-base mb-2">Resolution</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Strict 300+ DPI minimum for all print raster graphics. Vector lines (.AI, .EPS) printed at true hardware DPI.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800">
              <h3 className="font-bold text-white text-base mb-2">Paper Stocks</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                From lightweight 128gsm art paper to heavy 400gsm art card, recycled kraft, textured card, and synthetic vinyl.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800">
              <h3 className="font-bold text-white text-base mb-2">Pre-Press Proofs</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                3mm bleeds, cut safety margins, and digital PDF / hard-copy sample proofs provided before mass production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Process */}
      <section className="py-20 bg-zinc-950/60 border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
              STREAMLINED WORKFLOW
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2">
              From Design Brief to Printed Reality
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Brief & Consultation",
                desc: "We discuss your project goals, dimensions, paper stocks, and finish options."
              },
              {
                step: "02",
                title: "Design & Revisions",
                desc: "Our graphic artists build vector drafts and refine them until you are 100% satisfied."
              },
              {
                step: "03",
                title: "Pre-Press Proofing",
                desc: "Final digital proof review for color profiling, bleeds, and resolution check."
              },
              {
                step: "04",
                title: "Print & Delivery",
                desc: "High-precision press run, specialty finishing, and doorstep delivery across Pakistan."
              }
            ].map((st, i) => (
              <div key={i} className="p-6 rounded-3xl bg-zinc-900/30 border border-zinc-800 relative">
                <span className="text-4xl font-black text-amber-500/20 font-mono mb-4 block">
                  {st.step}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{st.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services FAQ */}
      <section className="py-20 bg-[#09090b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Common questions about our graphic design and printing turnaround.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800">
              <h3 className="font-bold text-sm text-white mb-2 flex items-center gap-2">
                <HelpCircle size={16} className="text-amber-400" />
                What file formats will I receive for Graphic Design projects?
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed pl-6">
                You will receive full master vector files (.AI, .EPS, .SVG) along with high-res print-ready PDFs and transparent PNGs for web and social media.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800">
              <h3 className="font-bold text-sm text-white mb-2 flex items-center gap-2">
                <HelpCircle size={16} className="text-amber-400" />
                What is the minimum order quantity (MOQ) for printing?
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed pl-6">
                For digital printing (business cards, flyers, standees), we can print as few as 50 to 100 units. For high-volume offset printing or custom packaging boxes, cost benefits start around 500 to 1,000 units.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800">
              <h3 className="font-bold text-sm text-white mb-2 flex items-center gap-2">
                <HelpCircle size={16} className="text-amber-400" />
                Can you print designs that I already have prepared?
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed pl-6">
                Yes! Send us your artwork in PDF, AI, or high-res TIFF. Our pre-press team will inspect it for correct bleeds and CMYK colors before printing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}