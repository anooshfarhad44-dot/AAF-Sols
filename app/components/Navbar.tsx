"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, LogOut, User as UserIcon, Sparkles } from 'lucide-react';
import { authService } from '@/lib/api';
import StudioLogo from './ui/StudioLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [pathname]);

  const [isOurWorkActive, setIsOurWorkActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (pathname === '/') {
        const ourWork = document.getElementById('our-work');
        if (ourWork) {
          const rect = ourWork.getBoundingClientRect();
          // Active when our-work section is near or in view
          const inView = rect.top <= 250 && rect.bottom >= 150;
          setIsOurWorkActive(inView);
        } else {
          setIsOurWorkActive(false);
        }
      } else {
        setIsOurWorkActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Handle URL hash on initial load or route transition (e.g. from another page)
  useEffect(() => {
    const checkAndScroll = () => {
      if (typeof window !== 'undefined' && window.location.hash === '#our-work') {
        const timer = setTimeout(() => {
          const elem = document.getElementById('our-work');
          if (elem) {
            elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsOurWorkActive(true);
          }
        }, 150);
        return () => clearTimeout(timer);
      }
    };

    checkAndScroll();
    window.addEventListener('hashchange', checkAndScroll);
    return () => window.removeEventListener('hashchange', checkAndScroll);
  }, [pathname]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);

    if (href.includes('#our-work')) {
      e.preventDefault();
      if (pathname === '/') {
        const elem = document.getElementById('our-work');
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.history.pushState(null, '', '/#our-work');
          setIsOurWorkActive(true);
        }
      } else {
        router.push('/#our-work');
      }
      return;
    }

    if (href === '/') {
      if (pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', '/');
        setIsOurWorkActive(false);
      }
      return;
    }
  };

  const handleLogout = async () => {
    try {
      await authService.logout();
      setUser(null);
      router.push('/');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Work', href: '/#our-work' },
    { name: 'Services', href: '/services' },
    { name: 'About Studio', href: '/aboutUs' },
    { name: 'Contact & Quote', href: '/contactUs' },
  ];

  return (
    <nav className={`fixed w-full z-50 top-0 start-0 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-stone-200'
        : 'bg-white/80 backdrop-blur-lg border-b border-stone-200/60'
    }`}>
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto px-4 sm:px-6 py-3.5">

        {/* Brand Logo */}
        <Link href="/" className="group">
          <StudioLogo size="md" />
        </Link>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex md:order-2 space-x-3 items-center">
          {user ? (
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 rounded-full border border-amber-200 text-stone-700">
                <UserIcon size={15} className="text-amber-600" />
                <span className="text-xs font-semibold text-stone-700">{user.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="text-stone-500 hover:text-red-500 transition-colors flex items-center gap-1.5 font-medium text-xs px-3 py-1.5 rounded-full hover:bg-red-50"
              >
                <LogOut size={15} />
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contactUs"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white shadow-[0_4px_16px_rgba(217,119,6,0.3)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles size={14} />
                Get Free Quote
              </Link>
            </div>
          )}

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-stone-600 hover:text-stone-900 rounded-xl bg-stone-100 border border-stone-200 transition-colors"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Navigation Items */}
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 md:mt-0 font-medium border border-stone-200 rounded-2xl bg-white/98 md:bg-transparent md:space-x-2 md:flex-row md:border-0 shadow-xl md:shadow-none">
            {navLinks.map((link) => {
              const isOurWorkLink = link.href.includes('#our-work');
              const isActive = isOurWorkLink
                ? isOurWorkActive
                : pathname === link.href && !isOurWorkActive;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`block py-2 px-3.5 rounded-xl text-sm transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-amber-700 bg-amber-50 font-semibold md:bg-transparent md:text-amber-700 md:font-bold md:border-b-2 md:border-amber-500 md:rounded-none'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100 md:hover:bg-transparent md:hover:text-amber-700'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}

            {/* Mobile Auth / Quote Button */}
            <li className="md:hidden border-t border-stone-200 mt-3 pt-3">
              {user ? (
                <div className="space-y-2 p-1">
                  <div className="flex items-center gap-2 px-3 py-2 text-stone-700 font-medium text-sm">
                    <UserIcon size={16} className="text-amber-600" />
                    {user.name}
                  </div>
                  <button
                    onClick={() => { handleLogout(); setIsOpen(false); }}
                    className="w-full text-left px-3 py-2 text-red-500 font-medium text-sm flex items-center gap-2 hover:bg-red-50 rounded-xl transition-colors"
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
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-center text-xs tracking-wider uppercase block shadow-md"
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
