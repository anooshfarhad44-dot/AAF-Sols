import Hero from "./components/home/Hero";
import ServicesPreview from "./components/home/ServicesPreview";
import PortfolioShowcase from "./components/home/PortfolioShowcase";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Testimonials from "./components/home/Testimonials";
import CTA from "./components/home/CTA";
import WorkCTABanner from "./components/home/WorkCTABanner";
import { getStudioWorks } from "@/lib/getStudioWorks";

export const dynamic = 'force-dynamic';

export default function Home() {
  const { works, tabs } = getStudioWorks();

  return (
    <main className="bg-[#fafaf9] min-h-screen text-stone-900">
      <WorkCTABanner />
      <Hero />
      <ServicesPreview />
      <PortfolioShowcase initialWorks={works} initialTabs={tabs} />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </main>
  );
}