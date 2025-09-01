
'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    "/images/hero-image-1.jpg",
    "/images/hero-image-2.jpg", 
    "/images/hero-image-3.jpg",
    "/images/hero-image-4.jpg",
    "/images/hero-image-5.jpg",
    "/images/hero-image-6.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <main className="w-full min-h-screen bg-white flex flex-col items-center pt-20">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center pt-6 pb-4 px-4 sm:px-8">
        <h1 
          className="text-blue-900 text-center"
          style={{
            fontFamily: 'Montserrat, Arial, sans-serif',
            fontWeight: 800,
            fontStyle: 'normal',
            fontSize: '28px',
            lineHeight: '100%',
            letterSpacing: '0px',
            textAlign: 'center'
          }}
        >
          Explore. Work. Wander Gypcey Your Journey
        </h1>
        <div className="w-full mt-4 rounded-lg overflow-hidden shadow-lg relative bg-gray-200" style={{ height: '400px' }}>
          {/* Image Carousel Container */}
          <div className="relative w-full h-full overflow-hidden">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                  index === currentSlide ? 'translate-x-0' : 
                  index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                }`}
                style={{ zIndex: index === currentSlide ? 10 : 1 }}
              >
                <Image 
                  src={image}
                  alt={`Hero ${index + 1}`} 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  priority={index === 0}
                  onError={() => {
                    console.error(`Failed to load image: ${image}`);
                  }}
                  onLoad={() => {
                    console.log(`Successfully loaded: ${image}`);
                  }}
                />
                {/* Vintage effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70" style={{ zIndex: 11 }}></div>
                {/* Custom vignette blur effect with gradual reduction */}
                <div className="absolute bottom-0 left-0 right-0 h-40 vignette-blur" style={{ zIndex: 12 }}></div>
              </div>
            ))}
            {/* Text overlay - positioned at bottom */}
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pb-8" style={{ zIndex: 20 }}>
              <div className="text-center px-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-2xl text-white" style={{ 
                  fontFamily: 'Roboto, Arial, sans-serif',
                  fontSize: '24px',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)',
                  color: 'white'
                }}>
                  WHERE HISTORY MEETS MAJESTIC BEAUTY
                </h2>
                <p className="text-lg md:text-xl mt-4 drop-shadow-lg text-white" style={{ 
                  fontFamily: 'Roboto, Arial, sans-serif',
                  fontSize: '16px',
                  textShadow: '1px 1px 3px rgba(0,0,0,0.8), 0 0 6px rgba(0,0,0,0.5)',
                  color: 'white'
                }}>
                  Do not miss the chance to Explore it...
                </p>
              </div>
            </div>
          </div>
          {/* Debug info */}
          <div className="absolute top-2 left-2 bg-white bg-opacity-80 text-gray-800 text-xs p-1 rounded shadow-md" style={{ zIndex: 30 }}>
            Slide: {currentSlide + 1}/{heroImages.length}
          </div>
        </div>
        {/* Carousel Dots - Moved outside hero section */}
        <div className="flex justify-center mt-4 space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide ? 'bg-orange-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Travel Options Section */}
      <section className="w-full px-4 py-6 flex flex-col items-center">
        <h2 className="text-blue-900 font-bold text-center text-base mb-2">WHERE WILL THE WIND TAKE YOU? CHOOSE BY SEASON, STYLE, OR GO FREESTYLE</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          {/* Example travel options */}
          <div className="flex flex-col items-center">
            <Image src="/season1.svg" alt="South West Season" width={40} height={40} />
            <span className="text-xs mt-1">South West Season</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/season2.svg" alt="East Season" width={40} height={40} />
            <span className="text-xs mt-1">East Season</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/season3.svg" alt="Special Escape" width={40} height={40} />
            <span className="text-xs mt-1">Special Escape</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/season4.svg" alt="Offbeat" width={40} height={40} />
            <span className="text-xs mt-1">Offbeat</span>
          </div>
        </div>
      </section>

      {/* Surfing Section */}
      <section className="w-full px-4 py-6 flex flex-col items-center">
        <div className="w-full rounded-lg overflow-hidden shadow-md mb-2">
          <Image src="/surfing.jpg" alt="Surfing" width={400} height={200} className="w-full h-auto object-cover" />
        </div>
        <div className="text-blue-900 font-bold text-center">Surfing</div>
        <div className="text-xs text-center text-gray-600">Learn from a sensory dummy text of the printing and typesetting industry.</div>
        <div className="flex gap-2 mt-2">
          <button className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">Surfing</button>
          <button className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs">Culture</button>
          <button className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">Adventure</button>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full px-4 py-6 flex flex-col items-center">
        <h2 className="text-blue-900 font-bold text-center text-base mb-2">Surfing On World Best, Untouched Beaches</h2>
        <div className="grid grid-cols-3 gap-2 w-full max-w-md">
          {/* Example images */}
          <Image src="/beach1.jpg" alt="Beach 1" width={100} height={100} className="rounded-md" />
          <Image src="/beach2.jpg" alt="Beach 2" width={100} height={100} className="rounded-md" />
          <Image src="/beach3.jpg" alt="Beach 3" width={100} height={100} className="rounded-md" />
          <Image src="/beach4.jpg" alt="Beach 4" width={100} height={100} className="rounded-md" />
          <Image src="/beach5.jpg" alt="Beach 5" width={100} height={100} className="rounded-md" />
          <Image src="/beach6.jpg" alt="Beach 6" width={100} height={100} className="rounded-md" />
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full px-4 py-6 flex flex-col items-center">
        <h2 className="text-blue-900 font-bold text-center text-base mb-2">Sri Lanka is the Best Country to Visit</h2>
        <div className="w-full rounded-lg overflow-hidden shadow-md">
          <Image src="/map.jpg" alt="Sri Lanka Map" width={400} height={200} className="w-full h-auto object-cover" />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-gray-50 border-t border-gray-200 text-gray-800 py-8 px-4 mt-8 flex flex-col items-center">
        <Image src="/logo.svg" alt="Gypcey Logo" width={120} height={40} />
        <div className="mt-4 text-center text-xs max-w-md text-gray-600">
          ABOUT SITE<br />
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </div>
        <form className="mt-4 w-full max-w-xs flex flex-col items-center">
          <input type="email" placeholder="Email Address Here" className="w-full px-3 py-2 rounded-md border border-gray-300 text-gray-800" />
          <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors">Subscribe</button>
        </form>
        <div className="mt-4 flex flex-col items-center gap-2">
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Travel Packages</a>
            <a href="#" className="hover:underline">Coworking and Coliving</a>
            <a href="#" className="hover:underline">Warm Escape</a>
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline">About Us</a>
          </div>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Twitter</a>
          </div>
        </div>
        <div className="mt-4 text-xs">© 2024 Gypcey. All Rights Reserved.</div>
      </footer>
    </main>
  );
}
