"use client";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Sparkles, ArrowRight, Printer, Palette, Zap, ChevronLeft, ChevronRight, CheckCircle2, Eye } from "lucide-react";

const heroSlides = [
  {
    image: "/studio-design-workspace.jpg",
    tag: "Graphic Design",
    tagColor: "bg-amber-100 text-amber-700 border-amber-200",
    caption: "Custom Vector Logo & Brand Identity Design",
    subcaption: "Adobe Illustrator · Pantone · Brand Guidelines",
  },
  {
    image: "/studio-packaging-branding.jpg",
    tag: "Luxury Printing",
    tagColor: "bg-violet-100 text-violet-700 border-violet-200",
    caption: "Premium Packaging & Gold Foil Stamping",
    subcaption: "Embossed Boxes · Hot Foil · Matte Lamination",
  },
  {
    image: "/aa-studio-hero.PNG",
    tag: "AA Graphic Studio",
    tagColor: "bg-orange-100 text-orange-700 border-orange-200",
    caption: "Your Vision, Our Creation — Let's Create Together",
    subcaption: "Call: 0309 9634495 · WhatsApp: 0348 5152978",
  },
];

const highlights = {
  en: [
    { color: "bg-amber-500",  text: "Same Day Design Ready — Order before 2 PM", num: null },
    { color: "bg-orange-500", text: "We Can Visit You & Design On-Site (Islamabad / Rwp)", num: null },
    { color: "bg-violet-500", text: "Fast Turnaround — Prints Ready Within Hours", num: null },
    { color: "bg-green-500",  text: "WhatsApp Us Anytime: ", num: "0348 5152978" },
  ],
  ur: [
    { color: "bg-amber-500",  text: "آج ہی ڈیزائن تیار — دوپہر 2 بجے سے پہلے آرڈر کریں", num: null },
    { color: "bg-orange-500", text: "ہم آپ کے پاس آ کر ڈیزائن کریں گے (اسلام آباد / راولپنڈی)", num: null },
    { color: "bg-violet-500", text: "تیز ترین ڈیلیوری — گھنٹوں میں پرنٹ تیار", num: null },
    { color: "bg-green-500",  text: "واٹس ایپ کریں: ", num: "0348 5152978" },
  ],
};

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [lang, setLang] = useState<"en" | "ur">("en");

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % heroSlides.length);
  };

  const variants: Variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60, scale: 1.03 }),
    center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.65, ease: "easeOut" as const } },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60, scale: 0.97, transition: { duration: 0.45, ease: "easeIn" as const } }),
  };

  return (
    <section className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-stone-50 via-amber-50/40 to-orange-50/30 py-12 md:py-16">
      {/* Subtle grid */}
      <div className="absolute inset-0 light-dot-bg opacity-60 pointer-events-none" />

      {/* Soft decorative blobs */}
      <div className="absolute top-[-8%] right-[-4%] w-[38%] h-[42%] bg-amber-200/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-8%] left-[-4%] w-[36%] h-[38%] bg-violet-200/25 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] left-[45%] w-[25%] h-[25%] bg-orange-200/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl px-4 sm:px-6 mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10 w-full">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 space-y-6 text-left"
        >
          {/* Studio Tag / Quick Portfolio Pill */}
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="#our-work"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("our-work")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-100 via-orange-100 to-amber-100 hover:from-amber-200 hover:to-orange-200 border border-amber-300 text-amber-900 text-xs font-bold tracking-wide shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
              </span>
              <span>AA GRAPHIC STUDIO &bull; 500+ VERIFIED WORKS</span>
              <ArrowRight size={13} className="text-amber-700 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.06] text-stone-900">
            Where Bold Design <br className="hidden sm:inline" />
            Meets{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Flawless Print.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-stone-500 max-w-xl leading-relaxed">
            From iconic brand logos and social media campaigns to premium packaging and luxury offset printing — we bring your vision to life with pixel-perfect precision.
          </p>

          {/* 🔥 Showstopper Primary CTA Buttons (Directly Below Title & Description) */}
          <div className="flex flex-wrap items-center gap-3.5 pt-1">
            {/* Main "Our Work" CTA */}
            <a
              href="#our-work"
              id="hero-our-work-btn"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("our-work")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-extrabold text-sm sm:text-base text-white bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:via-orange-500 hover:to-amber-500 shadow-[0_8px_30px_rgba(245,158,11,0.45)] hover:shadow-[0_12px_40px_rgba(245,158,11,0.65)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer overflow-hidden border border-amber-300/50"
            >
              {/* Shimmer light sweep across button */}
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />

              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 text-white">
                <Eye size={16} />
              </span>

              <span className="tracking-wide">Explore Our Work</span>

              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 group-hover:bg-white text-white group-hover:text-amber-600 transition-all duration-300 group-hover:translate-x-1">
                <ArrowRight size={14} />
              </span>
            </a>

            {/* Secondary CTA */}
            <Link
              href="/contactUs"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm bg-white hover:bg-stone-50 border border-stone-300 hover:border-amber-400 text-stone-800 shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles size={15} className="text-amber-600" />
              <span>Get Free Quote</span>
            </Link>

            {/* Services Link */}
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full font-semibold text-xs sm:text-sm text-stone-600 hover:text-amber-600 transition-colors"
            >
              <span>Our Services</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* ✅ Highlights Card with EN / UR toggle */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="max-w-xl rounded-2xl border border-stone-200 bg-white/80 backdrop-blur-sm shadow-[0_4px_24px_rgba(0,0,0,0.07)] overflow-hidden"
          >
            {/* Card header with toggle */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-stone-100 bg-stone-50/80">
              <span
                className={`transition-all ${
                  lang === "ur"
                    ? "urdu-nastaliq-tight text-sm font-bold text-stone-700"
                    : "text-[11px] font-bold text-stone-500 uppercase tracking-widest"
                }`}
              >
                {lang === "en" ? "Why Choose Us" : "ہمیں کیوں چنیں"}
              </span>
              {/* Language toggle */}
              <div className="flex items-center gap-1 bg-stone-200/70 rounded-full p-0.5">
                <button
                  onClick={() => setLang("en")}
                  className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all duration-200 ${
                    lang === "en"
                      ? "bg-white text-amber-700 shadow-sm"
                      : "text-stone-500 hover:text-stone-700"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang("ur")}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 urdu-nastaliq-tight ${
                    lang === "ur"
                      ? "bg-white text-amber-700 shadow-sm"
                      : "text-stone-500 hover:text-stone-700"
                  }`}
                >
                  اردو
                </button>
              </div>
            </div>

            {/* List content — animated on language switch */}
            <AnimatePresence mode="wait">
              <motion.ul
                key={lang}
                initial={{ opacity: 0, x: lang === "ur" ? 12 : -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: lang === "ur" ? -12 : 12 }}
                transition={{ duration: 0.3 }}
                className={`px-4 py-3 space-y-3 ${
                  lang === "ur" ? "text-right urdu-nastaliq" : "text-left"
                }`}
                dir={lang === "ur" ? "rtl" : "ltr"}
              >
                {highlights[lang].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-stone-700 font-medium"
                  >
                    <span className={`flex-shrink-0 w-2 h-2 rounded-full ${item.color}`} />
                    <span className={lang === "ur" ? "text-[15px]" : ""}>
                      {item.text}
                      {item.num && (
                        <span dir="ltr" style={{ unicodeBidi: "isolate" }}>
                          {item.num}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </motion.div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-stone-200 max-w-xl">
            <div className="flex items-center gap-2 text-xs text-stone-600">
              <div className="p-1.5 rounded-lg bg-amber-100 border border-amber-200">
                <Palette size={14} className="text-amber-600" />
              </div>
              <div>
                <p className="font-bold text-stone-800">Custom Vector</p>
                <p className="text-stone-400 text-[11px]">Unique Artwork</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-stone-600">
              <div className="p-1.5 rounded-lg bg-violet-100 border border-violet-200">
                <Printer size={14} className="text-violet-600" />
              </div>
              <div>
                <p className="font-bold text-stone-800">CMYK / Pantone</p>
                <p className="text-stone-400 text-[11px]">Accurate Colors</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-stone-600">
              <div className="p-1.5 rounded-lg bg-orange-100 border border-orange-200">
                <Zap size={14} className="text-orange-600" />
              </div>
              <div>
                <p className="font-bold text-stone-800">Fast Production</p>
                <p className="text-stone-400 text-[11px]">Nationwide Ship</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side — Image Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.18 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative rounded-3xl overflow-hidden border border-stone-200 bg-white shadow-[0_12px_60px_rgba(0,0,0,0.10)] group">

            {/* Carousel Image */}
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-stone-100">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <Image
                    src={heroSlides[current].image}
                    alt={heroSlides[current].caption}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Prev / Next arrows */}
              <button
                onClick={prev}
                aria-label="Previous"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white border border-stone-200 flex items-center justify-center shadow-md transition-all hover:scale-110"
              >
                <ChevronLeft size={18} className="text-stone-700" />
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white border border-stone-200 flex items-center justify-center shadow-md transition-all hover:scale-110"
              >
                <ChevronRight size={18} className="text-stone-700" />
              </button>

              {/* Slide tag badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border ${heroSlides[current].tagColor}`}>
                  {heroSlides[current].tag}
                </span>
              </div>
            </div>

            {/* Caption bar */}
            <div className="flex items-center justify-between px-5 py-4 bg-white border-t border-stone-100">
              <div>
                <p className="text-sm font-bold text-stone-800">{heroSlides[current].caption}</p>
                <p className="text-[11px] text-stone-400 font-medium mt-0.5">{heroSlides[current].subcaption}</p>
              </div>
              {/* Dots */}
              <div className="flex items-center gap-1.5 flex-shrink-0 ml-4">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    aria-label={`Slide ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-5 h-2 bg-amber-500"
                        : "w-2 h-2 bg-stone-300 hover:bg-stone-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Floating stats card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -bottom-4 -left-4 hidden lg:flex items-center gap-3 bg-white border border-stone-200 rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.10)]"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center">
              <Sparkles size={18} className="text-amber-600" />
            </div>
            <div>
              <p className="text-xs font-black text-stone-800">500+ Brands</p>
              <p className="text-[10px] text-stone-400">Logos & Identities Crafted</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="absolute -top-4 -right-4 hidden lg:flex items-center gap-3 bg-white border border-stone-200 rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.10)]"
          >
            <div className="w-10 h-10 rounded-xl bg-violet-100 border border-violet-200 flex items-center justify-center">
              <Printer size={18} className="text-violet-600" />
            </div>
            <div>
              <p className="text-xs font-black text-stone-800">250K+ Prints</p>
              <p className="text-[10px] text-stone-400">Delivered Nationwide</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
