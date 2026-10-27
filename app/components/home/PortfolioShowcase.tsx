"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Eye, ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  category: 'all' | 'branding' | 'printing' | 'packaging' | 'marketing';
  categoryLabel: string;
  specs: string;
  image: string;
  badgeClass: string;
}

const projects: Project[] = [
  {
    title: "Luxury Gold Foil Business Card Collection",
    category: "printing",
    categoryLabel: "Printing & Finishes",
    specs: "400gsm Velvet Touch Art Card &bull; Hot Stamped Gold Foil &bull; Spot UV",
    image: "/studio-packaging-branding.jpg",
    badgeClass: "bg-violet-100 text-violet-700 border-violet-200",
  },
  {
    title: "Minimalist Brand Identity & Vector Logo Suite",
    category: "branding",
    categoryLabel: "Brand Design",
    specs: "Full Vector Kit (AI, EPS, SVG) &bull; Brand Guidelines &bull; Color Palette",
    image: "/studio-design-workspace.jpg",
    badgeClass: "bg-amber-100 text-amber-700 border-amber-200",
  },
  {
    title: "Industrial High-Volume Catalog & Magazine Print",
    category: "printing",
    categoryLabel: "Commercial Printing",
    specs: "Offset Heidelberg CMYK &bull; 150gsm Gloss Interior &bull; Matt Lamination Cover",
    image: "/printing-showcase.jpg",
    badgeClass: "bg-violet-100 text-violet-700 border-violet-200",
  },
  {
    title: "Custom Rigid Box Packaging & Die-Cut Labels",
    category: "packaging",
    categoryLabel: "Packaging & Boxes",
    specs: "Precision Die-Cut Box &bull; CMYK Offset &bull; Anti-Scratch Matt Lam",
    image: "/studio-packaging-branding.jpg",
    badgeClass: "bg-orange-100 text-orange-700 border-orange-200",
  },
  {
    title: "Social Media Campaign & Performance Ad Creatives",
    category: "marketing",
    categoryLabel: "Digital & Social",
    specs: "Instagram/FB Ad Creatives &bull; Carousel Sets &bull; Story Highlights",
    image: "/studio-design-workspace.jpg",
    badgeClass: "bg-rose-100 text-rose-700 border-rose-200",
  },
  {
    title: "Outdoor Flex Billboard & Backlit Vinyl Signage",
    category: "printing",
    categoryLabel: "Large Format Print",
    specs: "High-Res Solvent Print &bull; UV Resistant Ink &bull; Reinforced Eyelets",
    image: "/printing-showcase.jpg",
    badgeClass: "bg-violet-100 text-violet-700 border-violet-200",
  }
];

const PortfolioShowcase = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'branding' | 'printing' | 'packaging' | 'marketing'>('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="py-24 bg-stone-50 text-stone-900 relative overflow-hidden border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles size={13} />
              <span>Studio Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900">
              Featured{" "}
              <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                Designs & Prints
              </span>
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
                    ? 'bg-amber-500 text-white font-bold shadow-md shadow-amber-200'
                    : 'bg-white hover:bg-amber-50 text-stone-500 hover:text-stone-800 border border-stone-200'
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
              className="group rounded-3xl overflow-hidden border border-stone-200 bg-white hover:border-stone-300 transition-all duration-300 flex flex-col hover:shadow-xl"
            >
              {/* Image Preview Container */}
              <div className="relative h-56 w-full overflow-hidden bg-stone-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border ${item.badgeClass}`}>
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 border border-stone-200 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Eye size={20} className="text-amber-600" />
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base text-stone-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h3>
                  <p
                    className="text-xs text-stone-400 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.specs }}
                  />
                </div>
                <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-stone-400">{item.categoryLabel}</span>
                  <Link href="/contactUs" className="text-xs text-amber-600 font-bold flex items-center gap-1 hover:text-amber-700 transition-colors">
                    Get Quote <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="mt-14 text-center">
          <Link
            href="/contactUs"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm border-2 border-amber-400 text-amber-700 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-200 shadow-sm"
          >
            <Sparkles size={15} />
            Request Your Custom Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
