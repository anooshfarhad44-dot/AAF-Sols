import Hero from "./components/home/Hero";
import ServicesPreview from "./components/home/ServicesPreview";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Testimonials from "./components/home/Testimonials";
import CTA from "./components/home/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </main>
  );
}