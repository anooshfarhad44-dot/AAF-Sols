import Hero from "./components/home/Hero";
import ServicesPreview from "./components/home/ServicesPreview";
import PortfolioShowcase from "./components/home/PortfolioShowcase";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Testimonials from "./components/home/Testimonials";
import CTA from "./components/home/CTA";

export default function Home() {
  return (
    <main className="bg-[#09090b] min-h-screen text-zinc-100">
      <Hero />
      <ServicesPreview />
      <PortfolioShowcase />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </main>
  );
}