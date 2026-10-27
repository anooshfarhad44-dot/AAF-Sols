import Link from 'next/link';
import { Sparkles, ArrowRight, MessageCircle, PhoneCall, ShieldCheck } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#09090b] via-zinc-950 to-zinc-900 text-zinc-100 relative overflow-hidden border-t border-zinc-800/80">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles size={14} />
          <span>START YOUR CREATIVE JOURNEY</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
          Ready to Bring Your <br />
          <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
            Brand &amp; Prints to Life?
          </span>
        </h2>

        <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you need a custom brand logo, social media creatives, or an urgent run of luxury business cards and packaging boxes—we're ready to make it happen.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contactUs"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-amber-500 text-zinc-950 shadow-[0_0_30px_rgba(245,158,11,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Request a Free Quote</span>
            <ArrowRight size={17} />
          </Link>

          <a
            href="https://wa.me/923001234567?text=Hello%20AA%20Graphic%20Studio,%20I%20am%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-sm bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 transition-all hover:-translate-y-0.5"
          >
            <MessageCircle size={18} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-xs text-zinc-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={16} className="text-amber-400" />
            100% Satisfaction Guarantee
          </span>
          <span className="text-zinc-700">&bull;</span>
          <span>Sample Proofing Available</span>
          <span className="text-zinc-700">&bull;</span>
          <span>Express Courier Shipping Nationwide</span>
        </div>

      </div>
    </section>
  );
};

export default CTA;
