"use client";
import { motion } from "framer-motion";
import { Eye, ArrowRight, Star, Phone, MessageCircle } from "lucide-react";

const marqueeItems = [
  "Custom Vector Logos",
  "Luxury Packaging",
  "Business Cards",
  "Restaurant Menus",
  "Book Covers",
  "Large Format Banners",
  "Certificates & Awards",
  "Brand Identity Kits",
  "Offset & Digital Prints",
];

export default function WorkCTABanner() {
  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById("our-work");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#our-work";
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-stone-950 bg-gradient-to-r from-stone-950 via-[#181109] to-stone-950 border-b border-amber-500/25 text-white z-20">
      {/* Animated shimmer line at top */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent pointer-events-none"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
      />
      {/* Animated shimmer line at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-orange-400 to-transparent pointer-events-none"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
      />

      {/* Subtle glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-50%] left-[20%] w-[35%] h-[200%] bg-amber-500/15 blur-[60px] rounded-full" />
        <div className="absolute top-[-50%] right-[15%] w-[30%] h-[200%] bg-orange-500/15 blur-[60px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-2.5 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between gap-2 sm:gap-3">

        {/* Left: Ticker & Live Portfolio Pill (Only visible on md+ tablet & desktop screens) */}
        <div className="hidden md:flex items-center gap-3 overflow-hidden flex-1 min-w-0">
          <div className="flex-shrink-0 flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-amber-300 text-[11px] font-extrabold tracking-widest uppercase whitespace-nowrap">
              LIVE PORTFOLIO
            </span>
          </div>

          {/* Ticker marquee */}
          <div className="relative overflow-hidden flex-1 min-w-0 hidden lg:block">
            <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-stone-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-stone-950 to-transparent z-10 pointer-events-none" />
            <motion.div
              className="flex items-center gap-6 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            >
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-2 text-stone-300 text-xs font-medium">
                  <Star size={9} className="text-amber-400 fill-amber-400 flex-shrink-0" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA Actions: Call + WhatsApp + See Our Work (Full width on mobile, right-aligned on desktop) */}
        <div className="w-full md:w-auto flex items-center justify-between sm:justify-end gap-1.5 sm:gap-2.5 flex-nowrap">

          {/* Call CTA */}
          <a
            href="tel:+923099634495"
            className="flex-1 sm:flex-none justify-center inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-full font-bold text-xs bg-stone-900/90 hover:bg-stone-800 text-stone-200 border border-stone-700/80 hover:border-amber-500/50 transition-all hover:scale-105 active:scale-95 shadow-sm whitespace-nowrap"
            title="Call AA Graphic Studio: 0309 9634495"
          >
            <span className="flex items-center justify-center w-4 h-4 rounded-full bg-amber-500/20 text-amber-400 flex-shrink-0">
              <Phone size={11} />
            </span>
            <span>Call</span>
            <span className="hidden xl:inline text-stone-400 text-[11px] font-normal">0309 9634495</span>
          </a>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/923485152978?text=Hello%20AA%20Graphic%20Studio%2C%20I%20am%20interested%20in%20your%20design%20and%20printing%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none justify-center inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-full font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_16px_rgba(16,185,129,0.40)] hover:shadow-[0_0_22px_rgba(16,185,129,0.60)] transition-all hover:scale-105 active:scale-95 border border-emerald-400/40 whitespace-nowrap"
            title="WhatsApp AA Graphic Studio: 0348 5152978"
          >
            <span className="flex items-center justify-center w-4 h-4 rounded-full bg-white/20 text-white flex-shrink-0">
              <MessageCircle size={11} className="fill-white/30" />
            </span>
            <span>WhatsApp</span>
            <span className="hidden xl:inline text-emerald-100 text-[11px] font-normal">0348 5152978</span>
          </a>

          {/* See Our Work CTA */}
          <motion.div
            className="flex-[1.2] sm:flex-none"
            animate={{ scale: [1, 1.025, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <a
              href="#our-work"
              id="see-our-work-cta"
              onClick={scrollToWork}
              className="w-full sm:w-auto justify-center group relative inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full font-extrabold text-xs sm:text-sm text-white bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:via-orange-500 hover:to-amber-500 shadow-[0_0_24px_rgba(245,158,11,0.50)] hover:shadow-[0_0_32px_rgba(245,158,11,0.75)] transition-all hover:scale-105 active:scale-95 cursor-pointer overflow-hidden border border-amber-300/40 whitespace-nowrap"
            >
              {/* Moving shine sweep across button */}
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />

              <span className="flex items-center justify-center w-4 h-4 rounded-full bg-white/20 flex-shrink-0">
                <Eye size={12} className="text-white" />
              </span>

              <span className="tracking-wide whitespace-nowrap">See Our Work</span>

              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center flex-shrink-0"
              >
                <ArrowRight size={13} className="text-white" />
              </motion.span>
            </a>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
