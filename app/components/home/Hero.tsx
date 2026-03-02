"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";

const Hero = () => {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a] text-white">
            {/* Background Glow Effect */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full"></div>

            <div className="max-w-screen-xl px-6 py-12 mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                        Innovate. Design. <br />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Achieve.
                        </span>
                    </h1>
                    <p className="text-lg text-gray-400 mb-8 max-w-lg">
                        Crafting Digital Excellence for Your Business. From Web Development to
                        Printing Press Designing, we bring your vision to life.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button href="/contactUs" variant="primary" className="rounded-full font-bold">
                            Get Started
                        </Button>
                        <Button href="/services" variant="outline" className="rounded-full font-bold border-gray-700 text-white hover:bg-gray-800 hover:text-white hover:border-gray-600">
                            Our Services
                        </Button>
                    </div>
                </motion.div>

                {/* Right Side - Image Asset */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-full h-[400px] md:h-[550px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-2xl">
                        {/* Next.js Image Component */}
                        <Image
                            src="/hero-bg.png"
                            alt="AAF Solutions Hero"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                            priority // Isse image jaldi load hogi
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent"></div>

                        <div className="absolute bottom-6 left-6">
                            <p className="text-blue-400 font-mono text-xs tracking-widest uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                                Digital Excellence
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
