"use client";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import { Monitor, Palette, Printer } from "lucide-react"; // Icons ke liye lucide-react use karein

const MapWithNoSSR = dynamic(() => import('../../components/MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-[#111] animate-pulse flex items-center justify-center text-gray-500">
      Loading Interactive Map...
    </div>
  ),
});

const services = [
  {
    title: "Web Development",
    icon: <Monitor className="w-8 h-8 text-blue-500" />,
    desc: "Building high-performance, scalable web applications using the latest tech stacks."
  },
  {
    title: "Graphic Design",
    icon: <Palette className="w-8 h-8 text-purple-500" />,
    desc: "Crafting visual identities that resonate and leave a lasting impression on your audience."
  },
  {
    title: "Printing Press",
    icon: <Printer className="w-8 h-8 text-pink-500" />,
    desc: "Premium quality offset and digital printing solutions for all your branding needs."
  }
];

const AboutUs = () => {
  return (
    <section className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero Section */}
      <div className="max-w-screen-xl mx-auto px-6 py-28 text-center relative">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 font-mono text-sm tracking-widest uppercase">
            Our Identity
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mt-6 mb-8 bg-gradient-to-r from-blue-400 via-white to-purple-500 bg-clip-text text-transparent">
            Driving Innovation <br /> From Islamabad.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            AAF SOLUTIONS is a premier digital agency dedicated to transforming businesses through 
            pioneering technology, aesthetic design, and strategic marketing.
          </p>
        </motion.div>
      </div>

      {/* Services Section Inside About */}
      <div className="max-w-screen-xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-screen-xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
            <div className="flex-1 text-left">
                <h2 className="text-4xl font-bold mb-4">Our Presence in <span className="text-blue-500">Pakistan</span></h2>
                <p className="text-gray-400 italic">Strategically located in the heart of the capital to serve clients globally.</p>
            </div>
            <div className="flex gap-10">
                <div className="text-center">
                    <h4 className="text-3xl font-bold text-blue-500">100%</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-tighter">Client Satisfaction</p>
                </div>
                <div className="text-center">
                    <h4 className="text-3xl font-bold text-purple-500">24/7</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-tighter">Support Available</p>
                </div>
            </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl h-[550px]"
        >
          {/* Info Badge */}
          <div className="absolute top-8 left-8 z-20 bg-black/80 backdrop-blur-xl p-8 rounded-3xl border border-white/20 hidden md:block">
            <h3 className="font-bold text-2xl text-white mb-1">Global HQ</h3>
            <p className="text-blue-500 mb-4 font-mono">Islamabad, Capital Territory</p>
            <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                    Operational Headquarters
                </div>
                <p className="text-xs text-gray-500 max-w-[200px]">
                    Drop by our office to discuss how we can elevate your brand's digital presence.
                </p>
            </div>
          </div>
          
          <div className="w-full h-full">
            <MapWithNoSSR />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;