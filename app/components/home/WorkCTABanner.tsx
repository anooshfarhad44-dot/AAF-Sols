"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Eye, Sparkles, ArrowRight, Star } from "lucide-react";

const marqueeItems = [
  "Business Cards",
  "Book Covers",
  "Menus",
  "Posters",
  "Certificates",
  "Brand Identities",
  "Packaging Design",
  "Logo Design",
];

export default function WorkCTABanner() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 border-b border-amber-800/40">
      {/* Animated shimmer line at top */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
      />
      {/* Animated shimmer line at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-orange-400 to-transparent"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
      />

      {/* Subtle glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-40%] left-[20%] w-[30%] h-[200%] bg-amber-500/10 blur-[60px] rounded-full" />
        <div className="absolute top-[-40%] right-[15%] w-[25%] h-[200%] bg-orange-500/10 blur-[60px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3">

        {/* Left: Scrolling marquee pill */}
        <div className="flex items-center gap-3 overflow-hidden flex-1 min-w-0">
          <div className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40">
            <Sparkles size={12} className="text-amber-400" />
            <span className="text-amber-300 text-[11px] font-bold tracking-widest uppercase whitespace-nowrap">Our Work</span>
          </div>

          {/* Ticker marquee */}
          <div className="relative overflow-hidden flex-1 min-w-0">
            <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-stone-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-stone-900 to-transparent z-10 pointer-events-none" />
            <motion.div
              className="flex items-center gap-6 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-2 text-stone-300 text-xs font-medium">
                  <Star size={8} className="text-amber-500 fill-amber-500 flex-shrink-0" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right: CTA Button */}
        <motion.div
          className="flex-shrink-0"
          animate={{
            scale: [1, 1.04, 1],
            boxShadow: [
              "0 0 0px rgba(245,158,11,0)",
              "0 0 22px rgba(245,158,11,0.55)",
              "0 0 0px rgba(245,158,11,0)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Link
            href="#our-work"
            id="see-our-work-cta"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full font-bold text-sm bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white transition-all hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(245,158,11,0.40)]"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("our-work")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Eye size={15} />
            <span>See Our Work</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight size={15} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
