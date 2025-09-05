'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FaWater, FaLeaf, FaLandmark, FaHiking } from "react-icons/fa";
import { carouselItems } from '@/config/homePageData';

export default function TravelWithUsSection() {
  const [currentCarouselSlide, setCurrentCarouselSlide] = useState(0);

  return (
    <section className="w-full px-4 py-10 flex flex-col items-center">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-light text-green-accent font-roboto">
          Travel With Us. We Introduce <span className="font-bold text-orange-accent">Better</span> Place to Visit
        </h2>
      </div>

      {/* Desktop: Grid of 4 cards */}
      <div className="hidden md:grid md:grid-cols-4 gap-5 w-full max-w-5xl mx-auto">
        {carouselItems.map((item, index) => (
          <div key={index} className="relative h-80 rounded-lg overflow-hidden shadow-md group">
            <Image 
              src={item.image} 
              alt={item.title} 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            {/* Red semi-transparent overlay for the surfing card */}
            {item.title === "Surfing" && (
              <div className="absolute bottom-0 left-0 h-28 w-1.5 bg-red-500"></div>
            )}
            {/* Content overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-5">
              <h4 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-xs text-white/90 mb-4">
                Lorem ipsum is simply dummy text of the printing and typesetting industry
              </p>
              <span className="text-orange-400 hover:text-orange-300 text-sm font-medium cursor-pointer">
                Explore Now
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: Single card with category selector */}
      <div className="md:hidden flex flex-col w-full max-w-xs mx-auto">
        {/* Main card display */}
        <div className="relative h-96 rounded-lg overflow-hidden shadow-md mb-4">
          <Image 
            src={carouselItems[currentCarouselSlide].image} 
            alt={carouselItems[currentCarouselSlide].title} 
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Red bar for surfing card */}
          {carouselItems[currentCarouselSlide].title === "Surfing" && (
            <div className="absolute bottom-0 left-0 h-28 w-1.5 bg-red-500"></div>
          )} 
          {/* Content overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-5">
            <h4 className="text-xl font-semibold text-white mb-2">
              {carouselItems[currentCarouselSlide].title}
            </h4>
            <p className="text-xs text-white/90 mb-4">
              Lorem ipsum is simply dummy text of the printing and typesetting industry
            </p>
            <span className="text-orange-400 hover:text-orange-300 text-sm font-medium cursor-pointer">
              Explore Now
            </span>
          </div>
        </div>
        
        {/* Category selector buttons */}
        <div className="grid grid-cols-4 gap-2">
          <button 
            onClick={() => setCurrentCarouselSlide(0)}
            className={`flex flex-col items-center justify-center p-3 rounded-md ${
              currentCarouselSlide === 0 ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-700'
            }`}
          >
            <FaWater className="text-lg mb-1" />
            <span className="text-xs font-medium">Surfing</span>
          </button>
          <button 
            onClick={() => setCurrentCarouselSlide(1)}
            className={`flex flex-col items-center justify-center p-3 rounded-md ${
              currentCarouselSlide === 1 ? 'bg-green-500 text-white' : 'bg-green-100 text-green-700'
            }`}
          >
            <FaLeaf className="text-lg mb-1" />
            <span className="text-xs font-medium">Wildlife</span>
          </button>
          <button 
            onClick={() => setCurrentCarouselSlide(2)}
            className={`flex flex-col items-center justify-center p-3 rounded-md ${
              currentCarouselSlide === 2 ? 'bg-orange-500 text-white' : 'bg-orange-100 text-orange-700'
            }`}
          >
            <FaLandmark className="text-lg mb-1" />
            <span className="text-xs font-medium">Culture</span>
          </button>
          <button 
            onClick={() => setCurrentCarouselSlide(3)}
            className={`flex flex-col items-center justify-center p-3 rounded-md ${
              currentCarouselSlide === 3 ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-700'
            }`}
          >
            <FaHiking className="text-lg mb-1" />
            <span className="text-xs font-medium">Adventure</span>
          </button>
        </div>
        <div className="text-center mt-4">
          <span className="text-sm text-gray-700">Click Your Choice For More Details...</span>
        </div>
      </div>
    </section>
  );
}