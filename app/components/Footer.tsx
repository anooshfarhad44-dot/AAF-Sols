import Link from 'next/link';
import StudioLogo from './ui/StudioLogo';
import { Mail, Phone, MapPin, Printer, Palette, Sparkles, Clock, CheckCircle2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-zinc-400 relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      
      <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <StudioLogo size="lg" />
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              AA Graphic Studio is your complete design-to-print partner. From iconic brand identities and vector graphics to industrial offset and luxury specialty printing, we turn your creative ideas into high-impact reality.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-amber-400 font-medium">
                &bull; CMYK &amp; Pantone Certified
              </span>
              <span className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium">
                &bull; Vector Precision
              </span>
              <span className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium">
                &bull; Express Turnaround
              </span>
            </div>
          </div>

          {/* Graphic Design Services */}
          <div>
            <h3 className="text-sm font-bold text-zinc-100 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Palette size={16} className="text-amber-400" />
              Graphic Design
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services#logo-branding" className="hover:text-amber-400 transition-colors">
                  Logo &amp; Brand Identity
                </Link>
              </li>
              <li>
                <Link href="/services#social-media" className="hover:text-amber-400 transition-colors">
                  Social Media Creatives &amp; Ads
                </Link>
              </li>
              <li>
                <Link href="/services#packaging-design" className="hover:text-amber-400 transition-colors">
                  Packaging &amp; Label Design
                </Link>
              </li>
              <li>
                <Link href="/services#marketing-collateral" className="hover:text-amber-400 transition-colors">
                  Brochures, Flyers &amp; Catalogs
                </Link>
              </li>
              <li>
                <Link href="/services#vector-art" className="hover:text-amber-400 transition-colors">
                  Vector Art &amp; Illustrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Printing Services */}
          <div>
            <h3 className="text-sm font-bold text-zinc-100 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Printer size={16} className="text-purple-400" />
              Printing Press
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services#business-cards" className="hover:text-amber-400 transition-colors">
                  Luxury Business Cards &amp; Stationery
                </Link>
              </li>
              <li>
                <Link href="/services#large-format" className="hover:text-amber-400 transition-colors">
                  Flex &amp; Large Format Banners
                </Link>
              </li>
              <li>
                <Link href="/services#apparel-merch" className="hover:text-amber-400 transition-colors">
                  Custom Apparel &amp; Merch Printing
                </Link>
              </li>
              <li>
                <Link href="/services#custom-boxes" className="hover:text-amber-400 transition-colors">
                  Rigid Boxes &amp; Packaging Print
                </Link>
              </li>
              <li>
                <Link href="/services#luxury-finishing" className="hover:text-amber-400 transition-colors">
                  Spot UV &amp; Gold Foil Stamping
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Studio Details */}
          <div>
            <h3 className="text-sm font-bold text-zinc-100 uppercase tracking-wider mb-4">
              Studio Details
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-amber-400 mt-1 flex-shrink-0" />
                <span>Islamabad, Pakistan &bull; Shipping Nationwide</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-amber-400 flex-shrink-0" />
                <a href="mailto:contact@aagraphicstudio.com" className="hover:text-amber-400 transition-colors">
                  contact@aagraphicstudio.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-amber-400 flex-shrink-0" />
                <a href="https://wa.me/923000000000" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  +92 300 1234567 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-zinc-500 text-xs">
                <Clock size={14} className="flex-shrink-0" />
                <span>Mon – Sat: 9:00 AM – 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-zinc-800/80" />

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-zinc-300 font-semibold">AA Graphic Studio</span>. All Rights Reserved. Specializing in Graphic Designing &amp; High-End Printing.
          </p>
          <div className="flex gap-6">
            <Link href="/services" className="hover:text-zinc-300 transition-colors">Services</Link>
            <Link href="/aboutUs" className="hover:text-zinc-300 transition-colors">About Us</Link>
            <Link href="/contactUs" className="hover:text-zinc-300 transition-colors">Get a Quote</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;