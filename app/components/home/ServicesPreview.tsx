import Link from 'next/link';
import Image from 'next/image';
import { Palette, Printer, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const services = [
  {
    id: "graphic-design",
    category: "CREATIVE & BRANDING",
    title: "Graphic Designing",
    tagline: "Visual narratives that set your brand apart.",
    description: "From custom vector logos and complete corporate identities to social media marketing creatives, packaging die-lines, and product mockups.",
    image: "/studio-design-workspace.jpg",
    accentBg: "bg-amber-50",
    accentBorder: "border-amber-200",
    badgeClass: "bg-amber-100 text-amber-700 border-amber-200",
    iconBg: "bg-amber-100 border-amber-200",
    iconColor: "text-amber-600",
    icon: <Palette className="w-6 h-6" />,
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
    image: "/studio-packaging-branding.jpg",
    accentBg: "bg-violet-50",
    accentBorder: "border-violet-200",
    badgeClass: "bg-violet-100 text-violet-700 border-violet-200",
    iconBg: "bg-violet-100 border-violet-200",
    iconColor: "text-violet-600",
    icon: <Printer className="w-6 h-6" />,
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
    <section className="py-24 bg-white relative text-stone-900 border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={13} />
            <span>Our Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-stone-900">
            Specialized in{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
              Graphic Design & Printing
            </span>
          </h2>
          <p className="text-stone-500 text-base sm:text-lg">
            AA Graphic Studio focuses exclusively on what we do best: high-impact visual design and industrial-grade printing solutions tailored for modern businesses.
          </p>
        </div>

        {/* 2 Main Service Cards */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {services.map((service) => (
            <div
              key={service.id}
              className={`rounded-3xl border ${service.accentBorder} bg-white overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 group`}
            >
              {/* Card Image Banner */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/10 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border ${service.badgeClass}`}>
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex-1 flex flex-col">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl border ${service.iconBg} mb-4`}>
                  <span className={service.iconColor}>{service.icon}</span>
                </div>

                <h3 className="text-2xl font-extrabold text-stone-900 mb-1">{service.title}</h3>
                <p className="text-sm font-semibold text-stone-500 mb-3 italic">{service.tagline}</p>
                <p className="text-stone-500 text-sm leading-relaxed mb-5">{service.description}</p>

                <ul className="space-y-2 mb-7 flex-1">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
                      <CheckCircle2 size={15} className="text-amber-500 mt-0.5 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-amber-700 hover:text-amber-800 group/link transition-colors"
                >
                  View Full Service Details
                  <ArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
