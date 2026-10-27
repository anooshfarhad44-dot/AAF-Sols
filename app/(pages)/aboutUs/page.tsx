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
  Zap, 
  Eye, 
  Layers, 
  Clock, 
  ArrowRight,
  HeartHandshake
} from "lucide-react";

const MapWithNoSSR = dynamic(() => import('../../components/MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-zinc-900 animate-pulse flex items-center justify-center text-zinc-500 text-sm">
      Loading Studio Location Map...
    </div>
  ),
});

const corePillars = [
  {
    title: "Graphic Designing Artistry",
    icon: <Palette className="w-8 h-8 text-amber-400" />,
    desc: "From initial napkin sketches to full vector brand suites, we craft visual identities that captivate customers and reflect true brand excellence."
  },
  {
    title: "Precision Printing Press",
    icon: <Printer className="w-8 h-8 text-purple-400" />,
    desc: "Merging digital speed with commercial Heidelberg offset prowess. Specializing in luxury finishes, foil stamping, spot UV, and heavy cardstocks."
  },
  {
    title: "End-to-End Production",
    icon: <Layers className="w-8 h-8 text-cyan-400" />,
    desc: "No disconnect between designer and printer. Our designers know print mechanics inside out, guaranteeing flawless outputs with zero rework."
  }
];

const studioValues = [
  {
    icon: <Sparkles className="w-5 h-5 text-amber-400" />,
    title: "Vector & Pixel Perfection",
    text: "We obsess over every vector curve, typography kerning, and color balance."
  },
  {
    icon: <Award className="w-5 h-5 text-purple-400" />,
    title: "CMYK & Pantone Accuracy",
    text: "Strict color calibration ensures what is designed is precisely what gets printed."
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    title: "Premium Material Integrity",
    text: "We only use certified papers, heavy art cards, durable inks, and authentic foils."
  },
  {
    icon: <HeartHandshake className="w-5 h-5 text-pink-400" />,
    title: "Client-Centric Collaboration",
    text: "Transparent revisions, digital proofs, and dedicated support until you are thrilled."
  }
];

const AboutUs = () => {
  return (
    <section className="bg-[#09090b] text-zinc-100 min-h-screen">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-28 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <span className="px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 font-mono text-xs tracking-widest uppercase inline-block mb-6">
            ABOUT AA GRAPHIC STUDIO
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mb-8 tracking-tight leading-tight">
            Crafting Bold Identities. <br />
            <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
              Printing Tactile Masterpieces.
            </span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto">
            AA Graphic Studio was founded on a singular obsession: to unite cutting-edge graphic design with precision commercial printing under one seamless studio roof.
          </p>
        </motion.div>
      </div>

      {/* Story & Visual Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
              OUR MISSION &amp; HERITAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              A Studio Born Out of Passion for Design &amp; Print Craftsmanship
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              In today's fast-paced world, businesses struggle when graphic designers don't understand print constraints, or when printing shops lack aesthetic sensibility.
            </p>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              At <strong className="text-white">AA Graphic Studio</strong>, we bridge that gap entirely. Whether you're a startup crafting your very first brand logo or an established corporation commissioning thousands of luxury packaging boxes and promotional prints, we deliver consistent, uncompromised quality.
            </p>
            <div className="pt-2">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20"
              >
                <span>Explore Studio Services</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-zinc-800">
              <Image
                src="/design-showcase.jpg"
                alt="Graphic Design Studio Workstation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-bold text-amber-400">Design Studio</span>
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-zinc-800 mt-8">
              <Image
                src="/printing-showcase.jpg"
                alt="Printing Press Machinery"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-bold text-purple-400">Printing Press</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* The 3 Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 border-t border-zinc-800/80">
        <div className="grid md:grid-cols-3 gap-8">
          {corePillars.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-zinc-950 border border-zinc-800 inline-block group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-amber-400 transition-colors">
                {s.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Studio Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 border-t border-zinc-800/80 bg-zinc-950/40">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
            OUR STANDARD OF EXCELLENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            The Values That Drive AA Graphic Studio
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {studioValues.map((val, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-zinc-900/30 border border-zinc-800">
              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 inline-block mb-4">
                {val.icon}
              </div>
              <h3 className="font-bold text-white text-base mb-2">{val.title}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">{val.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 border-t border-zinc-800/80">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between mb-12">
          <div className="flex-1 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
              STUDIO LOCATION &amp; OPERATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">
              Based in <span className="text-amber-400">Islamabad</span>, Delivering Nationwide
            </h2>
            <p className="text-zinc-400 text-sm mt-2">
              Serving corporate clients, retail brands, and creative ventures across all cities of Pakistan.
            </p>
          </div>
          
          <div className="flex gap-8">
            <div className="text-center p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800">
              <h4 className="text-2xl sm:text-3xl font-extrabold text-amber-400">100%</h4>
              <p className="text-[11px] text-zinc-500 uppercase tracking-wider mt-1">Design Originality</p>
            </div>
            <div className="text-center p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800">
              <h4 className="text-2xl sm:text-3xl font-extrabold text-purple-400">Nationwide</h4>
              <p className="text-[11px] text-zinc-500 uppercase tracking-wider mt-1">Courier Delivery</p>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden border border-zinc-800 shadow-2xl h-[480px]"
        >
          {/* Info Badge */}
          <div className="absolute top-6 left-6 z-20 bg-zinc-950/90 backdrop-blur-xl p-6 rounded-2xl border border-zinc-800 max-w-sm hidden md:block">
            <h3 className="font-bold text-xl text-white mb-1">AA Graphic Studio HQ</h3>
            <p className="text-amber-400 mb-3 font-mono text-xs">Islamabad, Pakistan</p>
            <div className="space-y-2 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                Active Design &amp; Printing Facilities
              </div>
              <p className="text-[11px] text-zinc-500 leading-relaxed">
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