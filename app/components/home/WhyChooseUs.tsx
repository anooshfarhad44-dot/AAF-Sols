import { CheckCircle2, Sparkles, Printer, Palette, ShieldCheck, Clock, Award, Sliders } from 'lucide-react';

const reasons = [
  {
    icon: <Palette className="w-5 h-5 text-amber-600" />,
    iconBg: "bg-amber-100 border-amber-200",
    title: "100% Vector & Original Concepts",
    description: "Every logo and visual asset is created from scratch with infinite scalability for digital screens and large billboards."
  },
  {
    icon: <Printer className="w-5 h-5 text-violet-600" />,
    iconBg: "bg-violet-100 border-violet-200",
    title: "Accurate CMYK & Pantone Calibration",
    description: "What you see on the screen is what you get on paper. Strict color management prevents muddy or inaccurate print colors."
  },
  {
    icon: <Award className="w-5 h-5 text-amber-600" />,
    iconBg: "bg-amber-100 border-amber-200",
    title: "Luxury Finishing & Premium Stocks",
    description: "Choose from 350gsm–400gsm art cards, soft-touch velvet lamination, metallic hot foil stamping, and spot UV textures."
  },
  {
    icon: <Sliders className="w-5 h-5 text-orange-600" />,
    iconBg: "bg-orange-100 border-orange-200",
    title: "Offset & Digital Printing Flexibility",
    description: "From short-run digital prints (same day) to massive high-volume Heidelberg offset commercial runs at competitive rates."
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
    iconBg: "bg-emerald-100 border-emerald-200",
    title: "Rigorous Pre-Press Quality Check",
    description: "Every design is inspected for bleeds, margins, resolution, and color profiles prior to printing to ensure zero errors."
  },
  {
    icon: <Clock className="w-5 h-5 text-rose-600" />,
    iconBg: "bg-rose-100 border-rose-200",
    title: "Express Turnaround & Nationwide Delivery",
    description: "Tight deadline? We provide express production options and secure door-to-door courier shipping all over Pakistan."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white text-stone-900 relative overflow-hidden border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Description & Value Props */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles size={13} />
              <span>The AA Studio Advantage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-stone-900">
              Why Businesses Trust <br />
              <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                AA Graphic Studio
              </span>
            </h2>

            <p className="text-stone-500 text-base sm:text-lg mb-10 leading-relaxed max-w-2xl">
              Unlike ordinary print shops or freelance designers who work in silos, we bridge the gap between creative visual artistry and mechanical print expertise under one roof.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {reasons.map((item, index) => (
                <div key={index} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 hover:border-stone-300 hover:shadow-sm transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-xl border ${item.iconBg}`}>
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-sm text-stone-800">{item.title}</h3>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed pl-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Metrics Panel */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 p-8 sm:p-10 shadow-[0_8px_40px_rgba(217,119,6,0.12)]">

              {/* Decorative glow */}
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-amber-200/40 blur-3xl rounded-full -z-10" />

              <div className="border-b border-amber-200 pb-8 text-center">
                <span className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                  500+
                </span>
                <p className="text-stone-700 font-semibold mt-2 text-sm uppercase tracking-wider">
                  Brand Identities & Logos Crafted
                </p>
                <p className="text-xs text-stone-400 mt-1">
                  Trusted by startups, retail brands, and corporate clients
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8 text-center">
                <div className="border-r border-amber-200 pr-4">
                  <span className="text-3xl sm:text-4xl font-extrabold text-violet-600">
                    250K+
                  </span>
                  <p className="text-stone-700 text-xs font-semibold mt-1">
                    Prints Delivered
                  </p>
                  <p className="text-[11px] text-stone-400 mt-0.5">Cards, boxes & banners</p>
                </div>

                <div className="pl-4">
                  <span className="text-3xl sm:text-4xl font-extrabold text-emerald-600">
                    100%
                  </span>
                  <p className="text-stone-700 text-xs font-semibold mt-1">
                    Color Fidelity
                  </p>
                  <p className="text-[11px] text-stone-400 mt-0.5">CMYK / Pantone audited</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-amber-200 flex items-center justify-between text-xs text-stone-500">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Live Printing Operations
                </span>
                <span className="font-mono text-amber-700 font-bold">Islamabad, PK</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
