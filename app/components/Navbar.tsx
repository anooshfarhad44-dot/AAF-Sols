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
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Image import karna lazmi hai
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
            alt="" 
            width={55} 
            height={55} 
            className="object-contain group-hover:rotate-6 transition-transform duration-300"
          />
          
        </Link>

        {/* Desktop Button & Mobile Toggle */}
        <div className="flex md:order-2 space-x-3">
          <Link href="/contactUs">
            <button className="hidden md:block text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-full text-sm px-6 py-2.5 transition-all shadow-md active:scale-95">
              Get Started
            </button>
          </Link>
          
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
                    className={`block py-2 px-4 rounded-xl transition-all duration-300 ${
                      isActive 
                      ? "text-blue-600 bg-blue-50 md:bg-transparent md:underline md:underline-offset-8 md:decoration-2" 
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50 md:hover:bg-transparent"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;