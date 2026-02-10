"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Button from '../ui/Button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About", href: "/aboutUs" },
        { name: "Contact", href: "/contactUs" },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-200 bg-white/80 backdrop-blur-md">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3">
                    <div className="relative h-12 w-12">
                        <Image
                            src="/aaf-logo.png"
                            alt="AAF Solutions"
                            fill
                            className="object-contain"
                            priority
                            sizes="48px"
                        />
                    </div>
                </Link>

                {/* Desktop Buttons & Hamburger */}
                <div className="flex md:order-2 space-x-3">
                    <Button href="/contactUs" variant="primary" className="hidden md:inline-flex rounded-full text-sm px-6 py-2">
                        Get Started
                    </Button>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="md:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`block py-2 px-3 transition-colors ${isActive(link.href)
                                        ? "text-blue-600 font-bold"
                                        : "text-gray-900 hover:text-blue-600"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="items-center justify-between w-full md:hidden md:w-auto md:order-1 absolute top-16 left-0 bg-white border-b border-gray-200 shadow-lg">
                        <ul className="flex flex-col p-4 font-medium space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`block py-2 px-3 rounded-lg ${isActive(link.href)
                                            ? "bg-blue-50 text-blue-600 font-bold"
                                            : "text-gray-900 hover:bg-gray-50 hover:text-blue-600"
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Button href="/contactUs" variant="primary" className="w-full justify-center rounded-lg mt-2">
                                    Get Started
                                </Button>
                            </li>
                        </ul>
                    </div>
                )}

            </div>
        </nav>
    );
};

export default Navbar;
