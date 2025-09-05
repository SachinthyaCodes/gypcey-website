'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function TravelOptionsSection() {
  const [activeTab, setActiveTab] = useState('seasons');

  return (
    <section className="w-full px-4 py-6 flex flex-col items-center">
      <h2 className="text-blue-900 text-center mb-4 font-normal md:font-extrabold heading-secondary">
        Where Will The Wind Take You? Choose By Season,<br />
        Style, or Go Freestyle
      </h2>
      
      {/* Tab Navigation */}
      <div className="flex justify-center gap-8 mb-6">
        <button 
          onClick={() => setActiveTab('seasons')}
          className={`font-medium text-sm pb-1 transition-colors ${
            activeTab === 'seasons' 
              ? 'text-blue-600 border-b-2 border-blue-600' 
              : 'text-gray-500 hover:text-blue-600'
          }`}
        >
          Seasons
        </button>
        <button 
          onClick={() => setActiveTab('travel-mode')}
          className={`font-medium text-sm pb-1 transition-colors ${
            activeTab === 'travel-mode' 
              ? 'text-blue-600 border-b-2 border-blue-600' 
              : 'text-gray-500 hover:text-blue-600'
          }`}
        >
          Travel Mode
        </button>
        <button 
          onClick={() => setActiveTab('free-style')}
          className={`font-medium text-sm pb-1 transition-colors ${
            activeTab === 'free-style' 
              ? 'text-blue-600 border-b-2 border-blue-600' 
              : 'text-gray-500 hover:text-blue-600'
          }`}
        >
          Free Style
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'seasons' && (
        <div className="flex flex-wrap justify-center gap-8 mt-2">
          {/* Sri Lanka travel options */}
          <div className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <Image src="/images/sri-lanka 1.png" alt="South-West Season" width={80} height={80} className="object-contain transition-transform duration-300 hover:scale-110" />
            <div className="text-xs mt-2 text-center transition-colors duration-300 hover:text-blue-600 font-roboto">
              <div>South-West Season</div>
              <div>(November-March)</div>
            </div>
          </div>
          <div className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <Image src="/images/sri-lanka 2.png" alt="East Season" width={80} height={80} className="object-contain transition-transform duration-300 hover:scale-110" />
            <div className="text-xs mt-2 text-center transition-colors duration-300 hover:text-blue-600 font-roboto">
              <div>East Season</div>
              <div>(April-October)</div>
            </div>
          </div>
          <div className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <Image src="/images/sri-lanka 3.png" alt="Year-Round" width={80} height={80} className="object-contain transition-transform duration-300 hover:scale-110" />
            <div className="text-xs mt-2 text-center transition-colors duration-300 hover:text-blue-600 font-roboto">
              <div>Year-Round</div>
              <div>(Perfect Anytime)</div>
            </div>
          </div>
          <div className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <Image src="/images/sri-lanka 4.png" alt="Special Escapes" width={80} height={80} className="object-contain transition-transform duration-300 hover:scale-110" />
            <div className="text-xs mt-2 text-center transition-colors duration-300 hover:text-blue-600 font-roboto">
              <div>Special Escapes</div>
            </div>
          </div>
          <div className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <Image src="/images/sri-lanka 5.png" alt="Offbeat" width={80} height={80} className="object-contain transition-transform duration-300 hover:scale-110" />
            <div className="text-xs mt-2 text-center transition-colors duration-300 hover:text-blue-600 font-roboto">
              <div>Offbeat</div>
              <div>(Hidden Gems)</div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'travel-mode' && (
        <div className="flex flex-wrap justify-center gap-8 mt-2">
          {/* Travel Mode options */}
          <div className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <Image src="/images/Free-Spirit.png" alt="Free-Spirit" width={80} height={80} className="object-contain transition-transform duration-300 hover:scale-110" />
            <div className="text-xs mt-2 text-center transition-colors duration-300 hover:text-orange-600 font-roboto">
              <div>Free-Spirit</div>
            </div>
          </div>
          <div className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <Image src="/images/Adrenaline.png" alt="Adrenaline" width={80} height={80} className="object-contain transition-transform duration-300 hover:scale-110" />
            <div className="text-xs mt-2 text-center transition-colors duration-300 hover:text-orange-600 font-roboto">
              <div>Adrenaline</div>
            </div>
          </div>
          <div className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <Image src="/images/Barefoot-Luxe.png" alt="Barefoot-Luxe" width={80} height={80} className="object-contain transition-transform duration-300 hover:scale-110" />
            <div className="text-xs mt-2 text-center transition-colors duration-300 hover:text-orange-600 font-roboto">
              <div>Barefoot-Luxe</div>
            </div>
          </div>
          <div className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <Image src="/images/Soulful.png" alt="Soulful" width={80} height={80} className="object-contain transition-transform duration-300 hover:scale-110" />
            <div className="text-xs mt-2 text-center transition-colors duration-300 hover:text-orange-600 font-roboto">
              <div>Soulful</div>
            </div>
          </div>
          <div className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <Image src="/images/Retreat.png" alt="Retreat" width={80} height={80} className="object-contain transition-transform duration-300 hover:scale-110" />
            <div className="text-xs mt-2 text-center transition-colors duration-300 hover:text-orange-600 font-roboto">
              <div>Retreat</div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'free-style' && (
        <div className="flex flex-col items-center max-w-md mx-auto px-4">
          {/* Free Style Content */}
          <h3 className="text-lg font-bold mb-4 text-center text-orange-accent font-roboto">
            Wander Your Way – Your Adventure, Your Rules!
          </h3>
          
          <p className="text-sm text-gray-700 text-center mb-6 leading-relaxed font-roboto">
            Dreaming of the perfect escape? Make it surf, safari, culture, or a bit of everything—tell us what moves you, and we&apos;ll craft a journey that&apos;s uniquely yours
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm font-roboto">
              WhatsApp Now
            </button>
            
            <button className="flex-1 bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-medium py-2 px-4 rounded-md transition-colors text-sm font-roboto">
              Email Us
            </button>
          </div>
        </div>
      )}
    </section>
  );
}