import Link from 'next/link';
import { Sparkles, ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-500 via-amber-500 to-orange-500 text-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-300/20 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 light-dot-bg opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles size={14} />
          <span>START YOUR CREATIVE JOURNEY</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
          Ready to Bring Your <br />
          Brand & Prints to Life?
        </h2>

        <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you need a custom brand logo, social media creatives, or an urgent run of luxury business cards and packaging boxes—we&apos;re ready to make it happen.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contactUs"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-white text-amber-700 hover:bg-amber-50 shadow-[0_6px_24px_rgba(0,0,0,0.15)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Request a Free Quote</span>
            <ArrowRight size={17} />
          </Link>

          <a
            href="https://wa.me/923485152978?text=Hello%20AA%20Graphic%20Studio,%20I%20am%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-sm bg-white/15 hover:bg-white/25 text-white border border-white/30 transition-all hover:-translate-y-0.5"
          >
            <MessageCircle size={18} />
            <span>WhatsApp (0348 5152978)</span>
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-xs text-white/70">
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={16} className="text-white" />
            100% Satisfaction Guarantee
          </span>
          <span className="text-white/40">&bull;</span>
          <span>Sample Proofing Available</span>
          <span className="text-white/40">&bull;</span>
          <span>Express Courier Shipping Nationwide</span>
        </div>

      </div>
    </section>
  );
};

export default CTA;
