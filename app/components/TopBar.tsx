"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Phone, MapPin, Clock, Star, X, ChevronRight } from "lucide-react";
import Link from "next/link";

const announcements = [
  {
    icon: Clock,
    iconColor: "text-amber-400",
    text: "Same Day Design Ready",
    highlight: "Same Day",
    sub: "Order before 2 PM — delivered today",
  },
  {
    icon: MapPin,
    iconColor: "text-orange-400",
    text: "We Can Visit You & Design On-Site",
    highlight: "Visit You",
    sub: "Book a free studio visit — Islamabad & Rawalpindi",
  },
  {
    icon: Star,
    iconColor: "text-amber-300",
    text: "500+ Happy Clients Across Pakistan",
    highlight: "500+",
    sub: "Trusted by brands nationwide",
  },
  {
    icon: Phone,
    iconColor: "text-green-400",
    text: "Call or WhatsApp: 0348 5152978",
    highlight: "0348 5152978",
    sub: "Available 9 AM – 9 PM, 7 days a week",
  },
];

export default function TopBar() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((p) => (p + 1) % announcements.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  if (!visible) return null;

  const item = announcements[current];
  const Icon = item.icon;

  return (
    <div className="relative w-full bg-gradient-to-r from-stone-900 via-[#1a1208] to-stone-900 text-white z-[60] overflow-hidden">
      {/* Shimmer sweep */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent pointer-events-none"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-3">

        {/* Animated announcement */}
        <div className="flex-1 flex items-center justify-center gap-3 min-w-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2.5 min-w-0"
            >
              {/* Icon badge */}
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 border border-white/15 flex items-center justify-center">
                <Icon size={12} className={item.iconColor} />
              </div>

              {/* Text */}
              <div className="flex items-center gap-2 min-w-0 flex-wrap">
                <span className="text-xs sm:text-sm font-semibold text-white/90 whitespace-nowrap">
                  {item.text}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-black bg-amber-500/25 border border-amber-500/50 text-amber-300 whitespace-nowrap">
                  {item.highlight}
                </span>
                <span className="hidden sm:inline text-[11px] text-stone-400">
                  — {item.sub}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right side: Contact link + close */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link
            href="/contactUs"
            className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-amber-400 hover:text-amber-300 transition-colors whitespace-nowrap"
          >
            Get in touch <ChevronRight size={12} />
          </Link>

          {/* Dot indicators */}
          <div className="flex items-center gap-1 ml-1">
            {announcements.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Announcement ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-4 h-1.5 bg-amber-400"
                    : "w-1.5 h-1.5 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setVisible(false)}
            aria-label="Close announcement bar"
            className="ml-1 w-5 h-5 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X size={10} className="text-white/60" />
          </button>
        </div>
      </div>
    </div>
  );
}

