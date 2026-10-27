import Link from 'next/link';
import Image from 'next/image';
import { Palette, Printer, ArrowRight, CheckCircle2, Sparkles, Layers, Box, FileText, Image as ImageIcon, Stamp } from 'lucide-react';

const services = [
  {
    id: "graphic-design",
    category: "CREATIVE & BRANDING",
    title: "Graphic Designing",
    tagline: "Visual narratives that set your brand apart.",
    description: "From custom vector logos and complete corporate identities to social media marketing creatives, packaging die-lines, and product mockups.",
    image: "/design-showcase.jpg",
    accentColor: "from-amber-500/20 to-yellow-500/5",
    badgeBorder: "border-amber-500/40 text-amber-400",
    icon: <Palette className="w-6 h-6 text-amber-400" />,
    features: [
      "Brand Identity & Custom Vector Logo Design",
      "Social Media Posts, Banners & Ad Creatives",
      "Product Packaging, Labels & Die-cut Boxes",
      "Brochures, Flyers, Catalogs & Pitch Decks",
      "Vector Illustrations, Mascots & Iconography"
    ],
    link: "/services#graphic-design"
  },
  {
    id: "printing-press",
    category: "PRODUCTION & PRESS",
    title: "Commercial & Luxury Printing",
    tagline: "Industrial precision on premium paper & substrates.",
    description: "Equipped for both high-volume offset printing and on-demand digital printing, offering specialized finishes like velvet lamination, spot UV, and hot gold foil stamping.",
    image: "/printing-showcase.jpg",
    accentColor: "from-purple-500/20 to-indigo-500/5",
    badgeBorder: "border-purple-500/40 text-purple-400",
    icon: <Printer className="w-6 h-6 text-purple-400" />,
    features: [
      "Business Cards (Spot UV, Embossed, Foil, Velvet 400gsm)",
      "Large Format Flex Banners, Vinyl Wraps & Signages",
      "Custom Apparel, T-Shirts, Hoodies & Branded Merch",
      "Luxury Rigid Packaging Boxes & Corrugated Cartons",
      "Flyers, Letterheads, Envelopes & Corporate Stationery"
    ],
    link: "/services#printing-press"
  }
];

const ServicesPreview = () => {
  return (
    <section className="py-24 bg-[#09090b] relative text-zinc-100 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={13} />
            <span>Our Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Specialized in <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-500 bg-clip-text text-transparent">Graphic Design &amp; Printing</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            AA Graphic Studio focuses exclusively on what we do best: high-impact visual design and industrial-grade printing solutions tailored for modern businesses.
          </p>
        </div>

        {/* 2 Main Service Cards */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/40 overflow-hidden flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 group hover:shadow-2xl hover:shadow-amber-500/5"
            >
              {/* Card Image Banner */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-zinc-950/80 backdrop-blur-md border ${service.badgeBorder}`}>
                    {service.category}
                  </span>
                </div>

                {/* Floating Icon */}
                <div className="absolute bottom-4 left-4 p-3 rounded-2xl bg-zinc-900/90 backdrop-blur-md border border-zinc-700/60 shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-amber-400/90 font-medium mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 size={16} className="text-amber-400 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>View Specifications &amp; Pricing</span>
                    <ArrowRight size={16} />
                  </Link>

                  <Link
                    href="/contactUs"
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-all"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-zinc-900/30 border border-zinc-800/80">
          <div className="text-center p-3">
            <p className="text-2xl font-extrabold text-amber-400">100%</p>
            <p className="text-xs text-zinc-400 mt-1">Vector Clarity &amp; Originality</p>
          </div>
          <div className="text-center p-3">
            <p className="text-2xl font-extrabold text-purple-400">300 DPI</p>
            <p className="text-xs text-zinc-400 mt-1">Ultra HD Print Output</p>
          </div>
          <div className="text-center p-3">
            <p className="text-2xl font-extrabold text-cyan-400">24-48h</p>
            <p className="text-xs text-zinc-400 mt-1">Express Turnaround Available</p>
          </div>
          <div className="text-center p-3">
            <p className="text-2xl font-extrabold text-emerald-400">Nationwide</p>
            <p className="text-xs text-zinc-400 mt-1">Secure Delivery Across Pakistan</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesPreview;
