'use client';
import { useState, useEffect } from 'react';
import { pricingData } from '@/config/homePageData';

export default function PricingSection() {
  const [currentPricingSlide, setCurrentPricingSlide] = useState(0);

  // Handle touch and wheel interactions for mobile slider
  useEffect(() => {
    let isThrottled = false;
    
    const changeSlide = (direction: 'next' | 'prev') => {
      if (isThrottled) return;
      
      isThrottled = true;
      
      requestAnimationFrame(() => {
        if (direction === 'next') {
          setCurrentPricingSlide(prev => (prev < 2 ? prev + 1 : 0));
        } else {
          setCurrentPricingSlide(prev => (prev > 0 ? prev - 1 : 2));
        }
        
        setTimeout(() => {
          isThrottled = false;
        }, 500);
      });
    };
    
    const handleWheel = (e: WheelEvent) => {
      if (!isThrottled) {
        e.preventDefault();
        changeSlide(e.deltaY > 0 ? 'next' : 'prev');
      }
    };
    
    let touchStartX = 0;
    let touchEndX = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;
      
      if (Math.abs(diff) > swipeThreshold) {
        changeSlide(diff > 0 ? 'next' : 'prev');
      }
    };
    
    const sliderContainer = document.getElementById('pricing-slider-container');
    
    if (sliderContainer) {
      sliderContainer.addEventListener('wheel', handleWheel, { passive: false });
      sliderContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
      sliderContainer.addEventListener('touchend', handleTouchEnd, { passive: true });
      
      return () => {
        sliderContainer.removeEventListener('wheel', handleWheel);
        sliderContainer.removeEventListener('touchstart', handleTouchStart);
        sliderContainer.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, []);

  return (
    <section className="w-full px-4 py-12 flex flex-col items-center bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-light text-center text-green-accent mb-8 font-roboto">
        We Have The Best <span className="font-bold text-orange-accent">Pricing</span> For You
      </h2>
      
      {/* Mobile View with Horizontal Slider */}
      <div id="pricing-slider-container" className="md:hidden w-full max-w-[270px] mx-auto relative will-change-transform">
        <div className="relative h-[420px] w-full overflow-hidden">
          {pricingData.map((pricing, index) => (
            <div 
              key={pricing.title}
              className={`absolute inset-0 w-full h-full will-change-transform transition-transform duration-500 ease-out backface-hidden ${
                currentPricingSlide === index ? 'translate-x-0' : 
                currentPricingSlide < index ? 'translate-x-full' : '-translate-x-full'
              }`}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{pricing.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{pricing.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-orange-500">${pricing.price}</span>
                      <span className="text-gray-500 text-sm ml-1">/ person</span>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <span className="text-sm">★★★★★</span>
                    </div>
                  </div>
                  <ul className="text-gray-600 text-sm space-y-1 mb-4">
                    {pricing.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors duration-300 font-medium">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-4">
          {pricingData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPricingSlide(index)}
              aria-label={`Go to pricing slide ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentPricingSlide ? 'bg-orange-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex gap-6 w-full max-w-4xl mx-auto">
        {pricingData.map((pricing, index) => (
          <div key={pricing.title} className="flex-1">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{pricing.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{pricing.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-orange-500">${pricing.price}</span>
                    <span className="text-gray-500 text-sm ml-1">/ person</span>
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <span className="text-sm">★★★★★</span>
                  </div>
                </div>
                <ul className="text-gray-600 text-sm space-y-1 mb-6">
                  {pricing.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors duration-300 font-medium">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}