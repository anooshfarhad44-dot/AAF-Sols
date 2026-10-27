import { CheckCircle2, Sparkles, Printer, Palette, ShieldCheck, Clock, Award, Sliders } from 'lucide-react';

const reasons = [
  {
    icon: <Palette className="w-5 h-5 text-amber-400" />,
    title: "100% Vector & Original Concepts",
    description: "Every logo and visual asset is created from scratch with infinite scalability for digital screens and large billboards."
  },
  {
    icon: <Printer className="w-5 h-5 text-purple-400" />,
    title: "Accurate CMYK & Pantone Calibration",
    description: "What you see on the screen is what you get on paper. Strict color management prevents muddy or inaccurate print colors."
  },
  {
    icon: <Award className="w-5 h-5 text-yellow-400" />,
    title: "Luxury Finishing & Premium Stocks",
    description: "Choose from 350gsm–400gsm art cards, soft-touch velvet lamination, metallic hot foil stamping, and spot UV textures."
  },
  {
    icon: <Sliders className="w-5 h-5 text-cyan-400" />,
    title: "Offset & Digital Printing Flexibility",
    description: "From short-run digital prints (same day) to massive high-volume Heidelberg offset commercial runs at competitive rates."
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    title: "Rigorous Pre-Press Quality Check",
    description: "Every design is inspected for bleeds, margins, resolution, and color profiles prior to printing to ensure zero errors."
  },
  {
    icon: <Clock className="w-5 h-5 text-pink-400" />,
    title: "Express Turnaround & Nationwide Delivery",
    description: "Tight deadline? We provide express production options and secure door-to-door courier shipping all over Pakistan."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-[#09090b] text-zinc-100 relative overflow-hidden border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Description & Value Props */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles size={13} />
              <span>The AA Studio Advantage</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Why Businesses Trust <br />
              <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
                AA Graphic Studio
              </span>
            </h2>
            
            <p className="text-zinc-400 text-base sm:text-lg mb-10 leading-relaxed max-w-2xl">
              Unlike ordinary print shops or freelance designers who work in silos, we bridge the gap between creative visual artistry and mechanical print expertise under one roof.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((item, index) => (
                <div key={index} className="p-4 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-zinc-950 border border-zinc-800">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-sm text-zinc-100">{item.title}</h3>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed pl-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Metrics Panel */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-zinc-900/50 border border-zinc-800 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
              
              {/* Glow Accent */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-amber-500/10 blur-3xl rounded-full -z-10" />

              <div className="border-b border-zinc-800 pb-8 text-center">
                <span className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                  500+
                </span>
                <p className="text-zinc-300 font-semibold mt-2 text-sm uppercase tracking-wider">
                  Brand Identities &amp; Logos Crafted
                </p>
                <p className="text-xs text-zinc-500 mt-1">
                  Trusted by startups, retail brands, and corporate clients
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8 text-center">
                <div className="border-r border-zinc-800/80 pr-4">
                  <span className="text-3xl sm:text-4xl font-extrabold text-purple-400">
                    250K+
                  </span>
                  <p className="text-zinc-300 text-xs font-semibold mt-1">
                    Prints Delivered
                  </p>
                  <p className="text-[11px] text-zinc-500 mt-0.5">Cards, boxes &amp; banners</p>
                </div>

                <div className="pl-4">
                  <span className="text-3xl sm:text-4xl font-extrabold text-cyan-400">
                    100%
                  </span>
                  <p className="text-zinc-300 text-xs font-semibold mt-1">
                    Color Fidelity
                  </p>
                  <p className="text-[11px] text-zinc-500 mt-0.5">CMYK / Pantone audited</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Live Printing Operations
                </span>
                <span className="font-mono text-amber-400">Islamabad, PK</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
