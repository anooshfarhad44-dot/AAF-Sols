"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Eye, ArrowUpRight, Palette, Printer, Box, Layers } from 'lucide-react';

interface Project {
  title: string;
  category: 'all' | 'branding' | 'printing' | 'packaging' | 'marketing';
  categoryLabel: string;
  specs: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Luxury Gold Foil Business Card Collection",
    category: "printing",
    categoryLabel: "Printing & Finishes",
    specs: "400gsm Velvet Touch Art Card &bull; Hot Stamped Gold Foil &bull; Spot UV",
    image: "/aa-studio-hero.jpg"
  },
  {
    title: "Minimalist Brand Identity & Vector Logo Suite",
    category: "branding",
    categoryLabel: "Brand Design",
    specs: "Full Vector Kit (AI, EPS, SVG) &bull; Brand Guidelines &bull; Color Palette",
    image: "/design-showcase.jpg"
  },
  {
    title: "Industrial High-Volume Catalog & Magazine Print",
    category: "printing",
    categoryLabel: "Commercial Printing",
    specs: "Offset Heidelberg CMYK &bull; 150gsm Gloss Interior &bull; Matt Lamination Cover",
    image: "/printing-showcase.jpg"
  },
  {
    title: "Custom Rigid Box Packaging & Die-Cut Labels",
    category: "packaging",
    categoryLabel: "Packaging & Boxes",
    specs: "Precision Die-Cut Box &bull; CMYK Offset &bull; Anti-Scratch Matt Lam",
    image: "/aa-studio-hero.jpg"
  },
  {
    title: "Social Media Campaign & Performance Ad Creatives",
    category: "marketing",
    categoryLabel: "Digital & Social",
    specs: "Instagram/FB Ad Creatives &bull; Carousel Sets &bull; Story Highlights",
    image: "/design-showcase.jpg"
  },
  {
    title: "Outdoor Flex Billboard & Backlit Vinyl Signage",
    category: "printing",
    categoryLabel: "Large Format Print",
    specs: "High-Res Solvent Print &bull; UV Resistant Ink &bull; Reinforced Eyelets",
    image: "/printing-showcase.jpg"
  }
];

const PortfolioShowcase = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'branding' | 'printing' | 'packaging' | 'marketing'>('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="py-24 bg-[#09090b] text-zinc-100 relative overflow-hidden border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles size={13} />
              <span>Studio Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Featured <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Designs &amp; Prints</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Works' },
              { id: 'branding', label: 'Logos & Branding' },
              { id: 'printing', label: 'Printing & Finishes' },
              { id: 'packaging', label: 'Packaging' },
              { id: 'marketing', label: 'Marketing' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  activeFilter === tab.id
                    ? 'bg-amber-500 text-zinc-950 font-bold shadow-lg shadow-amber-500/20'
                    : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-all duration-300 flex flex-col hover:shadow-2xl hover:shadow-amber-500/10"
            >
              {/* Image Preview Container */}
              <div className="relative h-64 w-full overflow-hidden bg-zinc-950">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-zinc-950/80 backdrop-blur-md border border-zinc-700/80 text-amber-400">
                    {item.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p 
                    className="text-xs text-zinc-400 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.specs }}
                  />
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
                    AA Studio Production
                  </span>
                  <Link
                    href="/contactUs"
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300"
                  >
                    <span>Inquire Similar</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <p className="text-sm text-zinc-400 mb-4">
            Need custom graphics or a specific print run with customized paper stocks?
          </p>
          <Link
            href="/contactUs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 transition-all hover:border-amber-500/50"
          >
            Request Custom Sample &amp; Quotation
            <ArrowUpRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PortfolioShowcase;
