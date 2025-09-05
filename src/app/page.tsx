import HeroSection from '@/components/sections/HeroSection';
import TravelOptionsSection from '@/components/sections/TravelOptionsSection';
import TravelWithUsSection from '@/components/sections/TravelWithUsSection';
import GallerySection from '@/components/sections/GallerySection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import PricingSection from '@/components/sections/PricingSection';
import SriLankaSection from '@/components/sections/SriLankaSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <HeroSection />
      <TravelOptionsSection />
      <TravelWithUsSection />
      <GallerySection />
      <ReviewsSection />
      <PricingSection />
      <SriLankaSection />
    </main>
  );
}