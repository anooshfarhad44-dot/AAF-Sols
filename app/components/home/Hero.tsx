"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Printer, Palette, ShieldCheck, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#09090b] text-zinc-100 py-12 md:py-16">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-amber-500/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[45%] h-[45%] bg-purple-600/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[30%] right-[30%] w-[30%] h-[30%] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 studio-grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl px-4 sm:px-6 mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          {/* Studio Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide shadow-inner">
            <Sparkles size={14} className="text-amber-400 animate-pulse" />
            <span>WELCOME TO AA GRAPHIC STUDIO</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08]">
            Where Bold Design <br className="hidden sm:inline" />
            Meets <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent">Flawless Print.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            From iconic brand logos, social media campaigns, and premium packaging design to high-speed commercial offset, digital printing, and luxury foil finishes—we bring your vision to life with pixel-perfect precision.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/contactUs"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-amber-500 text-zinc-950 shadow-[0_0_30px_rgba(245,158,11,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Get Free Quote</span>
              <ArrowRight size={16} />
            </Link>
            
            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-sm border border-zinc-700 bg-zinc-900/60 hover:bg-zinc-800 hover:border-zinc-500 text-zinc-200 transition-all hover:-translate-y-0.5"
            >
              <span>Explore Our Services</span>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-zinc-800/80 max-w-xl">
            <div className="flex items-center gap-2 text-xs text-zinc-300">
              <Palette size={16} className="text-amber-400 flex-shrink-0" />
              <div>
                <p className="font-bold text-white">Custom Vector</p>
                <p className="text-zinc-500 text-[11px]">Unique Artwork</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-300">
              <Printer size={16} className="text-purple-400 flex-shrink-0" />
              <div>
                <p className="font-bold text-white">CMYK / Pantone</p>
                <p className="text-zinc-500 text-[11px]">Accurate Colors</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-300">
              <Zap size={16} className="text-cyan-400 flex-shrink-0" />
              <div>
                <p className="font-bold text-white">Fast Production</p>
                <p className="text-zinc-500 text-[11px]">Nationwide Ship</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/40 backdrop-blur-md shadow-2xl p-2.5 group">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/aa-studio-hero.jpg"
                alt="AA Graphic Studio - Graphic Design & Luxury Printing Showcase"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
            </div>

            {/* Floating Glassmorphism Badges */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between p-3.5 rounded-2xl bg-zinc-950/80 backdrop-blur-xl border border-zinc-700/50">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                  AA GRAPHIC STUDIO
                </p>
                <p className="text-xs text-zinc-300 font-medium">
                  Graphic Designing &bull; Premium Printing Press
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Active Studio
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
