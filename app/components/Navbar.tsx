// import Link from 'next/link';

// const Navbar = () => {
//   return (
//     <nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-200 bg-white/70 backdrop-blur-md">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <Link href="/" className="flex items-center space-x-3">
//           <span className="self-center text-2xl font-bold whitespace-nowrap bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             AAF-SOLUTIONS
//           </span>
//         </Link>
//         <div className="flex md:order-2 space-x-3">
//           <button className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-full text-sm px-6 py-2 transition-all">
//             Get Started
//           </button>
//         </div>
//         <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
//           <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0">
//             <li><Link href="/" className="block py-2 px-3 text-blue-600 hover:text-blue-800 transition">Home</Link></li>
//             <li><Link href="/services" className="block py-2 px-3 text-gray-900 hover:text-blue-600 transition">Services</Link></li>
//             <li><Link href="/aboutUs" className="block py-2 px-3 text-gray-900 hover:text-blue-600 transition">About Us</Link></li>
//             <li><Link href="/contactUs" className="block py-2 px-3 text-gray-900 hover:text-blue-600 transition">Contact Us</Link></li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, LogOut, User as UserIcon } from 'lucide-react';
import { authService } from '@/lib/api';

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
    { name: 'About Us', href: '/aboutUs' },
    { name: 'Contact Us', href: '/contactUs' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-200 bg-white/70 backdrop-blur-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2 group">
          <Image
            src="/aaaf-logo.png"
            alt="AAF Logo"
            width={55}
            height={55}
            className="object-contain group-hover:rotate-6 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Button & Mobile Toggle */}
        <div className="flex md:order-2 space-x-3 items-center">
          {user ? (
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
                <UserIcon size={16} className="text-blue-600" />
                <span className="text-sm font-bold text-blue-700">{user.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-red-600 transition-colors flex items-center gap-1 font-semibold text-sm"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <Link href="/login" className="text-gray-700 hover:text-blue-600 font-semibold text-sm px-4 py-2 transition-all">
                Login
              </Link>
              <Link href="/register">
                <button className="text-white bg-blue-600 hover:bg-blue-700 font-bold rounded-full text-sm px-6 py-2.5 transition-all shadow-md active:scale-95">
                  Sign Up
                </button>
              </Link>
            </div>
          )}

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Nav Items */}
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-semibold border border-gray-100 rounded-2xl bg-white md:bg-transparent md:space-x-8 md:flex-row md:mt-0 md:border-0 shadow-xl md:shadow-none animate-in fade-in slide-in-from-top-4 duration-300">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 px-4 rounded-xl transition-all duration-300 ${isActive
                        ? "text-blue-600 bg-blue-50 md:bg-transparent md:underline md:underline-offset-8 md:decoration-2"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50 md:hover:bg-transparent"
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}

            {/* Mobile Auth Links */}
            <li className="md:hidden border-t border-gray-100 mt-2 pt-2">
              {user ? (
                <div className="space-y-2 p-2">
                  <div className="flex items-center gap-2 px-4 py-2 text-blue-600 font-bold">
                    <UserIcon size={18} />
                    {user.name}
                  </div>
                  <button
                    onClick={() => { handleLogout(); setIsOpen(false); }}
                    className="w-full text-left px-4 py-2 text-red-600 font-bold flex items-center gap-2 hover:bg-red-50 rounded-xl transition-colors"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2 p-2">
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="text-center py-2 px-4 rounded-xl border border-gray-200 text-gray-700 font-bold hover:bg-gray-50"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setIsOpen(false)}
                    className="text-center py-2 px-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700"
                  >
                    Sign Up
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
