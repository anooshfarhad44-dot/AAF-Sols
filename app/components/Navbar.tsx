"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, LogOut, User as UserIcon, Printer, Palette, Sparkles, MessageSquare } from 'lucide-react';
import { authService } from '@/lib/api';
import StudioLogo from './ui/StudioLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [pathname]);

  const handleLogout = async () => {
    try {
      await authService.logout();
      setUser(null);
      router.push('/login');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Studio', href: '/aboutUs' },
    { name: 'Contact & Quote', href: '/contactUs' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-zinc-800/80 bg-[#09090b]/85 backdrop-blur-xl transition-all">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto px-4 sm:px-6 py-3.5">

        {/* Brand Logo */}
        <Link href="/" className="group">
          <StudioLogo size="md" />
        </Link>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex md:order-2 space-x-3 items-center">
          {user ? (
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center gap-2 px-3.5 py-1.5 bg-zinc-900 rounded-full border border-zinc-800 text-zinc-300">
                <UserIcon size={15} className="text-amber-400" />
                <span className="text-xs font-semibold text-zinc-200">{user.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="text-zinc-400 hover:text-red-400 transition-colors flex items-center gap-1.5 font-medium text-xs px-3 py-1.5 rounded-full hover:bg-zinc-900"
              >
                <LogOut size={15} />
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contactUs"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles size={14} className="text-zinc-950" />
                Get Free Quote
              </Link>
            </div>
          )}

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white rounded-xl bg-zinc-900/60 border border-zinc-800 transition-colors"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation Items */}
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 md:mt-0 font-medium border border-zinc-800/80 rounded-2xl bg-zinc-950/95 md:bg-transparent md:space-x-8 md:flex-row md:border-0 shadow-2xl md:shadow-none">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 px-3.5 rounded-xl text-sm transition-all duration-200 ${
                      isActive
                        ? "text-amber-400 bg-amber-500/10 md:bg-transparent font-semibold md:underline md:underline-offset-8 md:decoration-amber-400 md:decoration-2"
                        : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 md:hover:bg-transparent"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}

            {/* Mobile Auth / Quote Button */}
            <li className="md:hidden border-t border-zinc-800/80 mt-3 pt-3">
              {user ? (
                <div className="space-y-2 p-1">
                  <div className="flex items-center gap-2 px-3 py-2 text-zinc-200 font-medium text-sm">
                    <UserIcon size={16} className="text-amber-400" />
                    {user.name}
                  </div>
                  <button
                    onClick={() => { handleLogout(); setIsOpen(false); }}
                    className="w-full text-left px-3 py-2 text-red-400 font-medium text-sm flex items-center gap-2 hover:bg-red-950/30 rounded-xl transition-colors"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="p-1 space-y-2">
                  <Link
                    href="/contactUs"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 font-bold text-center text-xs tracking-wider uppercase block shadow-lg"
                  >
                    Get Free Quote
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
