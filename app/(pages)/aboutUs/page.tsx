"use client";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Palette, 
  Printer, 
  Sparkles, 
  Award, 
  ShieldCheck, 
  Layers, 
  ArrowRight,
  HeartHandshake
} from "lucide-react";

const MapWithNoSSR = dynamic(() => import('../../components/MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-stone-100 animate-pulse flex items-center justify-center text-stone-500 text-sm">
      Loading Studio Location Map...
    </div>
  ),
});

const corePillars = [
  {
    title: "Graphic Designing Artistry",
    icon: <Palette className="w-8 h-8 text-amber-600" />,
    badgeBg: "bg-amber-50 border-amber-200",
    desc: "From initial napkin sketches to full vector brand suites, we craft visual identities that captivate customers and reflect true brand excellence."
  },
  {
    title: "Precision Printing Press",
    icon: <Printer className="w-8 h-8 text-purple-600" />,
    badgeBg: "bg-purple-50 border-purple-200",
    desc: "Merging digital speed with commercial Heidelberg offset prowess. Specializing in luxury finishes, foil stamping, spot UV, and heavy cardstocks."
  },
  {
    title: "End-to-End Production",
    icon: <Layers className="w-8 h-8 text-blue-600" />,
    badgeBg: "bg-blue-50 border-blue-200",
    desc: "No disconnect between designer and printer. Our designers know print mechanics inside out, guaranteeing flawless outputs with zero rework."
  }
];

const studioValues = [
  {
    icon: <Sparkles className="w-5 h-5 text-amber-600" />,
    title: "Vector & Pixel Perfection",
    text: "We obsess over every vector curve, typography kerning, and color balance."
  },
  {
    title: "CMYK & Pantone Accuracy",
    icon: <Award className="w-5 h-5 text-purple-600" />,
    text: "Strict color calibration ensures what is designed is precisely what gets printed."
  },
  {
    title: "Premium Material Integrity",
    icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
    text: "We only use certified papers, heavy art cards, durable inks, and authentic foils."
  },
  {
    title: "Client-Centric Collaboration",
    icon: <HeartHandshake className="w-5 h-5 text-rose-600" />,
    text: "Transparent revisions, digital proofs, and dedicated support until you are thrilled."
  }
];

const AboutUs = () => {
  return (
    <section className="bg-[#fafaf9] text-stone-900 min-h-screen">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center relative overflow-hidden bg-gradient-to-b from-amber-50/50 via-white to-[#fafaf9]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-400/10 blur-[130px] rounded-full pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <span className="px-4 py-1.5 rounded-full border border-amber-300 bg-white text-amber-700 font-mono text-xs tracking-widest uppercase inline-block mb-6 shadow-sm">
            ABOUT AA GRAPHIC STUDIO
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mb-8 tracking-tight leading-tight text-stone-900">
            Crafting Bold Identities. <br />
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent">
              Printing Tactile Masterpieces.
            </span>
          </h1>
          <p className="text-stone-600 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto">
            AA Graphic Studio was founded on a singular obsession: to unite cutting-edge graphic design with precision commercial printing under one seamless studio roof.
          </p>
        </motion.div>
      </div>

      {/* Story & Visual Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold">
              OUR MISSION &amp; HERITAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 leading-tight">
              A Studio Born Out of Passion for Design &amp; Print Craftsmanship
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              In today's fast-paced world, businesses struggle when graphic designers don't understand print constraints, or when printing shops lack aesthetic sensibility.
            </p>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              At <strong className="text-stone-900">AA Graphic Studio</strong>, we bridge that gap entirely. Whether you're a startup crafting your very first brand logo or an established corporation commissioning thousands of luxury packaging boxes and promotional prints, we deliver consistent, uncompromised quality.
            </p>
            <div className="pt-2">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 transition-all shadow-md shadow-amber-500/20"
              >
                <span>Explore Studio Services</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-stone-200/90 shadow-md">
              <Image
                src="/studio-design-workspace.jpg"
                alt="Graphic Design Studio Workstation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-bold text-white bg-amber-600/90 px-2.5 py-1 rounded-full">Design Studio</span>
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-stone-200/90 shadow-md mt-8">
              <Image
                src="/studio-packaging-branding.jpg"
                alt="Luxury Packaging & Print Craftsmanship"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-bold text-white bg-purple-700/90 px-2.5 py-1 rounded-full">Packaging &amp; Print</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* The 3 Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 border-t border-stone-200/80 bg-white">
        <div className="grid md:grid-cols-3 gap-8">
          {corePillars.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-stone-50/70 border border-stone-200/80 hover:border-amber-300 hover:shadow-lg transition-all group"
            >
              <div className={`mb-6 p-4 rounded-2xl border inline-block group-hover:scale-110 transition-transform ${s.badgeBg}`}>
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-stone-900 group-hover:text-amber-700 transition-colors">
                {s.title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Studio Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 border-t border-stone-200/80 bg-stone-50/60">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold">
            OUR STANDARD OF EXCELLENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mt-2">
            The Values That Drive AA Graphic Studio
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {studioValues.map((val, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-stone-200/80 shadow-sm hover:border-amber-300 transition-colors">
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80 inline-block mb-4">
                {val.icon}
              </div>
              <h3 className="font-bold text-stone-900 text-base mb-2">{val.title}</h3>
              <p className="text-xs text-stone-600 leading-relaxed">{val.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 border-t border-stone-200/80 bg-white">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between mb-12">
          <div className="flex-1 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold">
              STUDIO LOCATION &amp; OPERATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-stone-900">
              Based in <span className="text-amber-600">Islamabad</span>, Delivering Nationwide
            </h2>
            <p className="text-stone-600 text-sm mt-2">
              Serving corporate clients, retail brands, and creative ventures across all cities of Pakistan.
            </p>
          </div>
          
          <div className="flex gap-4 sm:gap-8">
            <div className="text-center p-4 rounded-2xl bg-stone-50 border border-stone-200/80 min-w-[120px]">
              <h4 className="text-2xl sm:text-3xl font-extrabold text-amber-600">100%</h4>
              <p className="text-[11px] text-stone-500 uppercase tracking-wider mt-1">Design Originality</p>
            </div>
            <div className="text-center p-4 rounded-2xl bg-stone-50 border border-stone-200/80 min-w-[120px]">
              <h4 className="text-2xl sm:text-3xl font-extrabold text-purple-600">Nationwide</h4>
              <p className="text-[11px] text-stone-500 uppercase tracking-wider mt-1">Courier Delivery</p>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden border border-stone-200/80 shadow-xl h-[480px]"
        >
          {/* Info Badge */}
          <div className="absolute top-6 left-6 z-20 bg-white/95 backdrop-blur-xl p-6 rounded-2xl border border-stone-200/80 shadow-lg max-w-sm hidden md:block">
            <h3 className="font-bold text-xl text-stone-900 mb-1">AA Graphic Studio HQ</h3>
            <p className="text-amber-600 font-mono text-xs font-semibold leading-tight">
              3-B, Basement Itehad Center, Fazal-ul-Haq Road
            </p>
            <p className="text-stone-500 text-xs mb-3 font-medium">Blue Area, Islamabad, Pakistan</p>
            <div className="space-y-2 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                Active Design &amp; Printing Facilities
              </div>
              <p className="text-[11px] text-stone-500 leading-relaxed">
                Contact our studio team to review physical paper samples, discuss print finishes, or launch your branding design.
              </p>
            </div>
          </div>
          
          <div className="w-full h-full">
            <MapWithNoSSR />
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default AboutUs;