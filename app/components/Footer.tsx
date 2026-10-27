import Link from 'next/link';
import StudioLogo from './ui/StudioLogo';
import { Mail, Phone, MapPin, Printer, Palette, Sparkles, Clock, MessageCircle, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 border-t border-stone-800 text-stone-400 relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-3 select-none">
                <div className="relative rounded-xl overflow-hidden border border-amber-500/30 shadow-[0_0_16px_rgba(217,119,6,0.2)]">
                  <img src="/aa-studio-logo.jpg" alt="AA Graphic Studio" width={46} height={46} className="object-cover" />
                </div>
                <div>
                  <p className="font-black text-white text-xl tracking-tight">AA <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">GRAPHIC STUDIO</span></p>
                  <p className="text-amber-400/90 text-[11px] tracking-wide font-medium italic">&ldquo;Your Vision, Our Creation.&rdquo;</p>
                </div>
              </div>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              AA Graphic Studio is your complete design-to-print partner. From iconic brand identities and vector graphics to industrial offset and luxury specialty printing.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-medium">
                &bull; CMYK &amp; Pantone Certified
              </span>
              <span className="px-2.5 py-1 rounded-full bg-stone-800 border border-stone-700 text-stone-300 font-medium">
                &bull; Vector Precision
              </span>
              <span className="px-2.5 py-1 rounded-full bg-stone-800 border border-stone-700 text-stone-300 font-medium">
                &bull; Express Turnaround
              </span>
            </div>
          </div>

          {/* Graphic Design Services */}
          <div>
            <h3 className="text-sm font-bold text-stone-100 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Palette size={16} className="text-amber-400" />
              Graphic Design
            </h3>
            <ul className="space-y-2.5 text-sm">
              {["Logo & Brand Identity", "Social Media Creatives & Ads", "Packaging & Label Design", "Brochures, Flyers & Catalogs", "Vector Art & Illustrations"].map((item, i) => (
                <li key={i}>
                  <Link href="/services" className="hover:text-amber-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Printing Services */}
          <div>
            <h3 className="text-sm font-bold text-stone-100 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Printer size={16} className="text-violet-400" />
              Printing Press
            </h3>
            <ul className="space-y-2.5 text-sm">
              {["Luxury Business Cards & Stationery", "Flex & Large Format Banners", "Custom Apparel & Merch Printing", "Rigid Boxes & Packaging Print", "Spot UV & Gold Foil Stamping"].map((item, i) => (
                <li key={i}>
                  <Link href="/services" className="hover:text-amber-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Studio Details */}
          <div>
            <h3 className="text-sm font-bold text-stone-100 uppercase tracking-wider mb-4">
              Studio Details
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-amber-400 mt-1 flex-shrink-0" />
                <span>Islamabad, Pakistan &bull; Shipping Nationwide</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle size={16} className="text-emerald-400 flex-shrink-0" />
                <a href="https://wa.me/923485152978?text=Hello%20AA%20Graphic%20Studio" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  0348 5152978 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-amber-400 flex-shrink-0" />
                <a href="tel:+923099634495" className="hover:text-amber-400 transition-colors">
                  0309 9634495 (Call Us)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-amber-400 flex-shrink-0" />
                <a href="mailto:info@aagraphicstudio.com" className="hover:text-amber-400 transition-colors">
                  info@aagraphicstudio.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe size={16} className="text-amber-400 flex-shrink-0" />
                <a href="https://www.aagraphicstudio.com" className="hover:text-amber-400 transition-colors">
                  www.aagraphicstudio.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-stone-500 text-xs">
                <Clock size={14} className="flex-shrink-0" />
                <span>Mon &ndash; Sat: 9:00 AM &ndash; 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-stone-800" />

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-stone-300 font-semibold">AA Graphic Studio</span>. All Rights Reserved. Graphic Designing &amp; High-End Printing.
          </p>
          <div className="flex gap-6">
            <Link href="/services" className="hover:text-stone-300 transition-colors">Services</Link>
            <Link href="/aboutUs" className="hover:text-stone-300 transition-colors">About Us</Link>
            <Link href="/contactUs" className="hover:text-stone-300 transition-colors">Get a Quote</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;