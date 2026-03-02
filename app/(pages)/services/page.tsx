import React from 'react';
import { Metadata } from 'next';
import Section from '../../components/ui/Section'; // Adjusted import path
import ServiceCard from '../../components/services/ServiceCard'; // Adjusted import path
import CTA from '../../components/home/CTA'; // Adjusted import path
import { Code, Smartphone, Palette, Megaphone, Globe, Database } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services | AAF Solutions',
  description: 'Explore our premium digital services including Web Development, App Development, and UI/UX Design.',
};

const allServices = [
  {
    title: "Web Development",
    description: "High-performance websites built with Next.js, React, and modern frameworks.",
    icon: <Code className="w-8 h-8 text-blue-600" />,
    features: ["Custom Web Applications", "E-commerce Solutions", "CMS Development", "API Integration"]
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: <Smartphone className="w-8 h-8 text-purple-600" />,
    features: ["React Native Apps", "iOS & Android", "App Store Optimization", "Maintenance & Support"]
  },
  {
    title: "UI/UX Design",
    description: "User-centric design solutions that enhance engagement and retention.",
    icon: <Palette className="w-8 h-8 text-pink-600" />,
    features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Design Systems"]
  },
  {
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to grow your business online.",
    icon: <Megaphone className="w-8 h-8 text-orange-600" />,
    features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "PPC Advertising"]
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment services.",
    icon: <Globe className="w-8 h-8 text-cyan-600" />,
    features: ["AWS/Azure/GCP", "DevOps", "Cloud Migration", "Server Management"]
  },
  {
    title: "Database Management",
    description: "Secure and efficient data storage solutions for your applications.",
    icon: <Database className="w-8 h-8 text-green-600" />,
    features: ["Database Design", "Performance Tuning", "Data Migration", "Security Audits"]
  }
];

export default function ServicesPage() {
  return (
    <main>
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10 pattern-grid-lg opacity-20"></div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 relative z-10">Our Services</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto relative z-10">
          Comprehensive digital solutions tailored to scale your business.
        </p>
      </div>

      {/* Services Grid */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Process</h2>
          <p className="text-gray-600">How we bring your ideas to life.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { step: "01", title: "Discovery", desc: "Understanding your goals and requirements." },
            { step: "02", title: "Design", desc: "Creating intuitive and beautiful prototypes." },
            { step: "03", title: "Development", desc: "Writing clean, efficient, and scalable code." },
            { step: "04", title: "Launch", desc: "Deploying your product to the world." }
          ].map((item, idx) => (
            <div key={idx} className="relative p-6">
              <span className="text-6xl font-bold text-gray-200 absolute top-0 left-1/2 -translate-x-1/2 -z-10">{item.step}</span>
              <h3 className="text-xl font-bold mb-2 pt-8">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTA />
    </main>
  );
}