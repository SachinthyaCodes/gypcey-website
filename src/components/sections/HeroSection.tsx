'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { heroCards } from '@/config/homePageData';

export default function HeroSection() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [currentMobileHeroSlide, setCurrentMobileHeroSlide] = useState(0);

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % 2);
    }, 5000);

    const mobileHeroInterval = setInterval(() => {
      setCurrentMobileHeroSlide((prev) => (prev + 1) % heroCards.length);
    }, 4000);

    return () => {
      clearInterval(heroInterval);
      clearInterval(mobileHeroInterval);
    };
  }, []);
 
  const goToHeroSlide = (index: number) => {
    setCurrentHeroSlide(index);
  };

  const goToMobileHeroSlide = (index: number) => {
    setCurrentMobileHeroSlide(index);
  };

  return (
    <section className="w-full flex flex-col items-center pt-6 pb-4 px-4 sm:px-8">
      <h1 className="text-blue-900 text-center heading-primary">
        Explore. Work. Wander Gypcey Your Journey
      </h1>
      <div className="w-full mt-4 max-w-6xl mx-auto relative overflow-hidden">
        {/* Mobile view - show one card at a time */}
        <div className="md:hidden">
          <div className="relative h-96">
            {heroCards.map((card, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                  index === currentMobileHeroSlide ? 'translate-x-0' : 
                  index < currentMobileHeroSlide ? '-translate-x-full' : 'translate-x-full'
                }`}
              >
                <div className="relative rounded-lg overflow-hidden shadow-lg bg-gray-200 h-full group cursor-pointer">
                  <Image 
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="100vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                    <p className="text-sm opacity-90">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop view - show 3 cards at a time */}
        <div className="hidden md:block">
          <div className="relative h-96">
            {/* First set of 3 cards */}
            <div className={`absolute inset-0 grid grid-cols-3 gap-4 transition-transform duration-500 ease-in-out ${
              currentHeroSlide === 0 ? 'translate-x-0' : '-translate-x-full'
            }`}>
              {heroCards.slice(0, 3).map((card, index) => (
                <div key={index} className="relative rounded-lg overflow-hidden shadow-lg bg-gray-200 h-full group cursor-pointer">
                  <Image 
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="33vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                    <p className="text-sm opacity-90">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second set of 3 cards */}
            <div className={`absolute inset-0 grid grid-cols-3 gap-4 transition-transform duration-500 ease-in-out ${
              currentHeroSlide === 1 ? 'translate-x-0' : 'translate-x-full'
            }`}>
              {heroCards.slice(3, 6).map((card, index) => (
                <div key={index + 3} className="relative rounded-lg overflow-hidden shadow-lg bg-gray-200 h-full group cursor-pointer">
                  <Image 
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                    <p className="text-sm opacity-90">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {/* Mobile dots - show 6 dots for 6 individual cards */}
          <div className="md:hidden flex space-x-2">
            {heroCards.map((_, index) => (
              <button
                key={index}
                onClick={() => goToMobileHeroSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentMobileHeroSlide ? 'bg-orange-500' : 'bg-gray-300'
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Desktop dots - show 2 dots for 2 sets of 3 cards */}
          <div className="hidden md:flex space-x-2">
            {[0, 1].map((slideIndex) => (
              <button
                key={slideIndex}
                onClick={() => goToHeroSlide(slideIndex)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  slideIndex === currentHeroSlide ? 'bg-orange-500' : 'bg-gray-300'
                }`}
                aria-label={`Slide set ${slideIndex + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}