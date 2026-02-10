import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center">
                            <span className="self-center text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                AAF-SOLUTIONS
                            </span>
                        </Link>
                        <p className="mt-2 text-gray-500 text-sm max-w-xs">
                            Innovating solutions for your digital growth. Providing quality service since 2024.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase">Quick Links</h2>
                            <ul className="text-gray-500 font-medium space-y-4">
                                <li><Link href="/services" className="hover:underline">Services</Link></li>
                                <li><Link href="/aboutUs" className="hover:underline">About Us</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase">Contact Us</h2>
                            <ul className="text-gray-500 font-medium space-y-4">
                                <li><span className="hover:underline cursor-pointer">info@aaf-solutions.com</span></li>
                                <li><span className="hover:underline cursor-pointer">+92 300 1234567</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2024 <Link href="/" className="hover:underline">AAF-SOLUTIONS</Link>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
