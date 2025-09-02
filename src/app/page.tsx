'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaWater, FaLeaf, FaLandmark, FaHiking } from "react-icons/fa";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('seasons');
  const [currentCarouselSlide, setCurrentCarouselSlide] = useState(0);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [currentMobileHeroSlide, setCurrentMobileHeroSlide] = useState(0);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [currentPricingSlide, setCurrentPricingSlide] = useState(0);
  
  // Review data
  const reviews = [
    {
      name: "Theresa Jordan",
      location: "Spain",
      image: "/images/connecting_airports.png",
      stars: 4,
      rating: "4.8",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text"
    },
    {
      name: "Michael Roberts",
      location: "Canada",
      image: "/images/adventure.jpg",
      stars: 5,
      rating: "5.0",
      text: "\"MO is the best. Besides the many and superb products, the service was exceptional. Would definitely recommend to all my friends.\""
    },
    {
      name: "Sophia Chen",
      location: "Japan",
      image: "/images/culture.jpg",
      stars: 4,
      rating: "4.5",
      text: "\"The Sigiriya tour was absolutely breathtaking. Our guide was knowledgeable and the views were spectacular. Highly recommended!\""
    },
    {
      name: "David Kim",
      location: "Australia",
      image: "/images/wildlife.jpg",
      stars: 5,
      rating: "5.0",
      text: "\"Perfect escape from winter! The beaches were pristine and the local culture experience was authentic. Can't wait to return.\""
    }
  ];
  
  // Auto-rotate reviews every 5 seconds
  useEffect(() => {
    const reviewInterval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    
    return () => clearInterval(reviewInterval);
  }, []);
  
  // Handle mouse wheel and touch swipe events for pricing cards
  useEffect(() => {
    // Use requestAnimationFrame for smoother transitions
    let isThrottled = false;
    
    // Handle slide change with throttling
    const changeSlide = (direction: 'next' | 'prev') => {
      if (isThrottled) return;
      
      isThrottled = true;
      
      // Use requestAnimationFrame for smoother transitions
      requestAnimationFrame(() => {
        if (direction === 'next') {
          setCurrentPricingSlide(prev => (prev < 2 ? prev + 1 : 0));
        } else {
          setCurrentPricingSlide(prev => (prev > 0 ? prev - 1 : 2));
        }
        
        // Reset throttle after transition completes
        setTimeout(() => {
          isThrottled = false;
        }, 500); // Match the duration of the transition
      });
    };
    
    // Function to handle wheel events with throttling
    const handleWheel = (e: WheelEvent) => {
      // Only prevent default if we're actually going to change slides
      if (!isThrottled) {
        e.preventDefault();
        changeSlide(e.deltaY > 0 ? 'next' : 'prev');
      }
    };
    
    // Variables to track touch positions
    let touchStartX = 0;
    let touchEndX = 0;
    
    // Handle touch start
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };
    
    // Handle touch end
    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      
      // Calculate swipe distance
      const swipeDistance = touchEndX - touchStartX;
      
      // Minimum swipe distance required (pixels)
      const minSwipeDistance = 50;
      
      if (Math.abs(swipeDistance) < minSwipeDistance) return;
      
      changeSlide(swipeDistance > 0 ? 'prev' : 'next');
    };
    
    // Attach events after the DOM is fully loaded
    const attachEvents = () => {
      const mobileSlider = document.getElementById('pricing-slider-container');
      const desktopSlider = document.getElementById('pricing-slider-desktop');
      
      // Only add event listeners if elements exist
      if (mobileSlider) {
        mobileSlider.addEventListener('wheel', handleWheel, { passive: false });
        mobileSlider.addEventListener('touchstart', handleTouchStart, { passive: true });
        mobileSlider.addEventListener('touchend', handleTouchEnd, { passive: true });
      }
      
      if (desktopSlider) {
        desktopSlider.addEventListener('wheel', handleWheel, { passive: false });
        desktopSlider.addEventListener('touchstart', handleTouchStart, { passive: true });
        desktopSlider.addEventListener('touchend', handleTouchEnd, { passive: true });
      }
      
      // Return cleanup function
      return () => {
        if (mobileSlider) {
          mobileSlider.removeEventListener('wheel', handleWheel);
          mobileSlider.removeEventListener('touchstart', handleTouchStart);
          mobileSlider.removeEventListener('touchend', handleTouchEnd);
        }
        
        if (desktopSlider) {
          desktopSlider.removeEventListener('wheel', handleWheel);
          desktopSlider.removeEventListener('touchstart', handleTouchStart);
          desktopSlider.removeEventListener('touchend', handleTouchEnd);
        }
      };
    };
    
    // Wait for DOM to be ready before attaching events
    let cleanup: (() => void) | undefined;
    
    if (document.readyState === 'complete') {
      cleanup = attachEvents();
    } else {
      const handleDomLoaded = () => {
        cleanup = attachEvents();
      };
      
      window.addEventListener('load', handleDomLoaded);
      
      return () => {
        window.removeEventListener('load', handleDomLoaded);
        if (cleanup) cleanup();
      };
    }
    
    return cleanup;
  }, []);
  
  const heroImages = [
    "/images/hero-image-1.jpg",
    "/images/hero-image-2.jpg", 
    "/images/hero-image-3.jpg",
    "/images/hero-image-4.jpg",
    "/images/hero-image-5.jpg",
    "/images/hero-image-6.jpg"
  ];

  const heroCards = [
    {
      image: "/images/hero-image-1.jpg",
      title: "WHERE HISTORY MEETS MAJESTIC BEAUTY",
      description: "Do not miss the chance to Explore it...",
      alt: "Where History Meets Majestic Beauty"
    },
    {
      image: "/images/hero-image-2.jpg",
      title: "A CULTURAL GEM NESTLED IN THE HILLS OF SRI LANKA",
      description: "let's start with here culture...",
      alt: "A Cultural Gem Nestled in the Hills"
    },
    {
      image: "/images/hero-image-3.jpg",
      title: "A TIMELESS BLEND OF HISTORY AND COASTAL CHARM",
      description: "Make your journey incredible with Galle fort",
      alt: "A Timeless Blend of History and Coastal Charm"
    },
    {
      image: "/images/hero-image-4.jpg",
      title: "ADVENTURE AWAITS",
      description: "Discover thrilling experiences...",
      alt: "Adventure Awaits"
    },
    {
      image: "/images/hero-image-5.jpg",
      title: "NATURAL WONDERS",
      description: "Explore pristine landscapes...",
      alt: "Natural Wonders"
    },
    {
      image: "/images/hero-image-6.jpg",
      title: "COASTAL PARADISE",
      description: "Relax on stunning beaches...",
      alt: "Coastal Paradise"
    }
  ];

  const carouselItems = [
    {
      image: "/images/surfing.jpg",
      title: "Surfing",
      description: "Experience the thrill of riding perfect waves on pristine beaches with crystal clear waters and consistent swells.",
      category: "Water Sports"
    },
    {
      image: "/images/wildlife.jpg",
      title: "Wildlife",
      description: "Discover exotic animals in their natural habitats and witness the incredible biodiversity of Sri Lanka.",
      category: "Nature & Wildlife"
    },
    {
      image: "/images/culture.jpg",
      title: "Culture", 
      description: "Immerse yourself in rich traditions, ancient temples, and vibrant local customs that tell stories of centuries.",
      category: "Cultural Experience"
    },
    {
      image: "/images/adventure.jpg", 
      title: "Adventure",
      description: "Embark on heart-pumping adventures from mountain climbing to jungle trekking in breathtaking landscapes.",
      category: "Outdoor Activities"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % 2); // 2 slides (0 and 1) for showing 3 cards each
    }, 5000); // Change hero slide every 5 seconds

    return () => clearInterval(heroInterval);
  }, []);

  useEffect(() => {
    const mobileHeroInterval = setInterval(() => {
      setCurrentMobileHeroSlide((prev) => (prev + 1) % heroCards.length); // 6 individual cards for mobile
    }, 4000); // Change mobile hero slide every 4 seconds

    return () => clearInterval(mobileHeroInterval);
  }, [heroCards.length]);

  // Removed auto-switching effect for carousel items

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToCarouselSlide = (index: number) => {
    setCurrentCarouselSlide(index);
  };

  const goToHeroSlide = (index: number) => {
    setCurrentHeroSlide(index);
  };

  const goToMobileHeroSlide = (index: number) => {
    setCurrentMobileHeroSlide(index);
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
                      <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                        {card.title}
                      </h3>
                      <p className="text-sm opacity-90" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                        {card.description}
                      </p>
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
                      <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                        {card.title}
                      </h3>
                      <p className="text-sm opacity-90" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                        {card.description}
                      </p>
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
                      <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                        {card.title}
                      </h3>
                      <p className="text-sm opacity-90" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                        {card.description}
                      </p>
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
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Travel Options Section */}
      <section className="w-full px-4 py-6 flex flex-col items-center">
        <h2 
          className="text-blue-900 text-center mb-4 font-normal md:font-extrabold"
          style={{
            fontFamily: 'Montserrat, Arial, sans-serif',
            fontStyle: 'normal',
            fontSize: '28px',
            lineHeight: '120%',
            letterSpacing: '0px',
            textAlign: 'center'
          }}
        >
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
              <div className="text-xs mt-2 text-center transition-colors duration-300 hover:text-blue-600" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                <div>South-West Season</div>
                <div>(November-March)</div>
              </div>
            </div>
            <div className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Image src="/images/sri-lanka 2.png" alt="East Season" width={80} height={80} className="object-contain transition-transform duration-300 hover:scale-110" />
              <div className="text-xs mt-2 text-center transition-colors duration-300 hover:text-blue-600" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                <div>East Season</div>
                <div>(April-October)</div>
              </div>
            </div>
            <div className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Image src="/images/sri-lanka 3.png" alt="Year-Round" width={80} height={80} className="object-contain transition-transform duration-300 hover:scale-110" />
              <div className="text-xs mt-2 text-center transition-colors duration-300 hover:text-blue-600" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                <div>Year-Round</div>
                <div>(Perfect Anytime)</div>
              </div>
            </div>
            <div className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Image src="/images/sri-lanka 4.png" alt="Special Escapes" width={80} height={80} className="object-contain transition-transform duration-300 hover:scale-110" />
              <div className="text-xs mt-2 text-center transition-colors duration-300 hover:text-blue-600" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                <div>Special Escapes</div>
              </div>
            </div>
            <div className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Image src="/images/sri-lanka 5.png" alt="Offbeat" width={80} height={80} className="object-contain transition-transform duration-300 hover:scale-110" />
              <div className="text-xs mt-2 text-center transition-colors duration-300 hover:text-blue-600" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
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
              <div className="text-xs mt-2 text-center transition-colors duration-300 hover:text-orange-600" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                <div>Free-Spirit</div>
              </div>
            </div>
            <div className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Image src="/images/Adrenaline.png" alt="Adrenaline" width={80} height={80} className="object-contain transition-transform duration-300 hover:scale-110" />
              <div className="text-xs mt-2 text-center transition-colors duration-300 hover:text-orange-600" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                <div>Adrenaline</div>
              </div>
            </div>
            <div className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Image src="/images/Barefoot-Luxe.png" alt="Barefoot-Luxe" width={80} height={80} className="object-contain transition-transform duration-300 hover:scale-110" />
              <div className="text-xs mt-2 text-center transition-colors duration-300 hover:text-orange-600" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                <div>Barefoot-Luxe</div>
              </div>
            </div>
            <div className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Image src="/images/Soulful.png" alt="Soulful" width={80} height={80} className="object-contain transition-transform duration-300 hover:scale-110" />
              <div className="text-xs mt-2 text-center transition-colors duration-300 hover:text-orange-600" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                <div>Soulful</div>
              </div>
            </div>
            <div className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Image src="/images/Retreat.png" alt="Retreat" width={80} height={80} className="object-contain transition-transform duration-300 hover:scale-110" />
              <div className="text-xs mt-2 text-center transition-colors duration-300 hover:text-orange-600" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                <div>Retreat</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'free-style' && (
          <div className="flex flex-col items-center max-w-md mx-auto px-4">
            {/* Free Style Content */}
            <h3 className="text-lg font-bold mb-4 text-center" style={{ 
              fontFamily: 'Roboto, Arial, sans-serif',
              color: '#e67e22'
            }}>
              Wander Your Way – Your Adventure, Your Rules!
            </h3>
            
            <p className="text-sm text-gray-700 text-center mb-6 leading-relaxed" style={{ 
              fontFamily: 'Roboto, Arial, sans-serif'
            }}>
              Dreaming of the perfect escape? Make it surf, safari, culture, or a bit of everything—tell us what moves you, and we'll craft a journey that's uniquely yours
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm" style={{ 
                fontFamily: 'Roboto, Arial, sans-serif'
              }}>
                Whats app Now
              </button>
              
              <button className="flex-1 bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-medium py-2 px-4 rounded-md transition-colors text-sm" style={{ 
                fontFamily: 'Roboto, Arial, sans-serif'
              }}>
                Email Us
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Travel With Us Section */}
      <section className="w-full px-4 py-10 flex flex-col items-center">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-light" style={{ fontFamily: 'Roboto, Arial, sans-serif', color: '#90AF84' }}>
            Travel With Us. We Introduce <span className="font-bold" style={{ color: '#E47036' }}>Better</span> Place to Visit
          </h2>
        </div>

        {/* Desktop: Grid of 4 cards */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-5 w-full max-w-5xl mx-auto">
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
                  Explorer Now
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
                Explorer Now
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
            <span className="text-xs text-gray-600">Click Your Choice For More Details...</span>
          </div>
        </div>



        {/* Call to Action */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
            Click Your Choice For More Details...
          </p>
        </div>
      </section>

      {/* Surfing Gallery Section - Mobile */}
      <section className="md:hidden w-full bg-white">
        <div className="px-4 py-8">
          <h2 className="text-2xl md:text-3xl font-light text-center mb-6" style={{ fontFamily: 'Roboto, Arial, sans-serif', color: '#90AF84' }}>
            Surfing <span className="font-bold" style={{ color: '#E47036' }}>On World Best,</span> Untouched Beaches
          </h2>
          
          {/* Gallery Grid - Mobile */}
          <div className="grid grid-cols-2 gap-0">
            <div className="h-44 relative">
              <Image src="/images/gallery1.jpg" alt="Surfing beach" fill className="object-cover" />
            </div>
            <div className="h-44 relative">
              <Image src="/images/gallery2.jpg" alt="Sunset surf" fill className="object-cover" />
            </div>
            <div className="h-32 relative">
              <Image src="/images/gallery3.jpg" alt="Beachside" fill className="object-cover" />
            </div>
            <div className="h-56 relative col-span-1 row-span-2">
              <Image src="/images/gallery4.jpg" alt="Ocean view" fill className="object-cover" />
            </div>
            <div className="h-24 relative">
              <Image src="/images/gallery5.jpg" alt="Ocean waves" fill className="object-cover" />
            </div>
            <div className="h-40 relative col-span-2">
              <Image src="/images/gallery6.jpg" alt="Palm trees" fill className="object-cover" />
            </div>
            <div className="h-48 relative">
              <Image src="/images/gallery7.jpg" alt="Surfer walking" fill className="object-cover" />
            </div>
            <div className="h-48 relative">
              <Image src="/images/gallery8.jpg" alt="Beach view" fill className="object-cover" />
            </div>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
          </div>
          
          {/* Bottom Button */}
          <div className="text-center mt-6">
            <button className="bg-orange-500 text-white font-medium px-6 py-2 text-sm rounded-md">
              Contact Us Now
            </button>
          </div>
        </div>
      </section>

      {/* Surfing Gallery Section - Desktop */}
      <section className="hidden md:block w-full bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-light" style={{ fontFamily: 'Roboto, Arial, sans-serif', color: '#90AF84' }}>
              Surfing <span className="font-bold" style={{ color: '#E47036' }}>On World Best,</span> Untouched Beaches
            </h2>
            <button className="bg-orange-500 text-white font-medium px-6 py-2 text-sm rounded-md">
              Contact Us Now
            </button>
          </div>
          
          <p className="text-gray-600 mb-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          
          {/* Gallery Grid - Desktop */}
          <div className="grid grid-cols-10 grid-rows-4 gap-0 h-[600px]">
            <div className="col-span-2 row-span-4 relative">
              <Image src="/images/gallery1.jpg" alt="Beach with palm trees" fill className="object-cover" />
            </div>
            <div className="col-span-2 row-span-2 relative">
              <Image src="/images/gallery2.jpg" alt="Beach waves" fill className="object-cover" />
            </div>
            <div className="col-span-2 row-span-2 relative">
              <Image src="/images/gallery3.jpg" alt="Surfboard fins" fill className="object-cover" />
            </div>
            <div className="col-span-4 row-span-2 relative">
              <Image src="/images/gallery4.jpg" alt="Cityscape beach" fill className="object-cover" />
            </div>
            <div className="col-span-2 row-span-2 relative">
              <Image src="/images/gallery5.jpg" alt="Cliffside beach" fill className="object-cover" />
            </div>
            <div className="col-span-2 row-span-2 relative">
              <Image src="/images/gallery6.jpg" alt="Ocean waves" fill className="object-cover" />
            </div>
            <div className="col-span-4 row-span-2 relative">
              <Image src="/images/gallery7.jpg" alt="Quiet beach" fill className="object-cover" />
            </div>
            <div className="col-span-2 row-span-2 relative">
              <Image src="/images/gallery8.jpg" alt="Surfer walking" fill className="object-cover" />
            </div>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
          </div>
        </div>
      </section>
      
      {/* Video Reviews Section */}
      <section className="w-full relative overflow-hidden">
        {/* Video Background - Mobile */}
        <div className="md:hidden relative h-[480px] w-full">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <video 
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/sigiriya-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Mobile Reviews Content */}
          <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 py-8">
            <h2 className="font-light text-center mb-2 text-white text-2xl" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
              Escape <span className="font-bold" style={{ color: '#E47036' }}>Winter</span> in Style!
            </h2>
            
            <div className="relative w-full max-w-xs">
              {/* Reviews carousel */}
              <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                {currentReviewIndex === 0 && (
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 relative rounded-full overflow-hidden mb-2 border-2 border-orange-500">
                      <Image src="/images/connecting_airports.png" alt="Theresa Jordan" fill className="object-cover" />
                    </div>
                    <h3 className="font-semibold">Theresa Jordan</h3>
                    <p className="text-sm text-white/90">Spain</p>
                    <div className="flex mt-1 mb-2">
                      {[...Array(4)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">★</span>
                      ))}
                      <span className="text-white/40 text-lg">★</span>
                      <span className="ml-1 text-sm">4.8</span>
                    </div>
                    <p className="text-sm">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text
                    </p>
                  </div>
                )}
                
                {currentReviewIndex === 1 && (
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 relative rounded-full overflow-hidden mb-2 border-2 border-orange-500">
                      <Image src="/images/adventure.jpg" alt="Michael Roberts" fill className="object-cover" />
                    </div>
                    <h3 className="font-semibold">Michael Roberts</h3>
                    <p className="text-sm text-white/90">Canada</p>
                    <div className="flex mt-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">★</span>
                      ))}
                      <span className="ml-1 text-sm">5.0</span>
                    </div>
                    <p className="text-sm">
                      "MO is the best. Besides the many and superb products, the service was exceptional. Would definitely recommend to all my friends."
                    </p>
                  </div>
                )}
                
                {currentReviewIndex === 2 && (
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 relative rounded-full overflow-hidden mb-2 border-2 border-orange-500">
                      <Image src="/images/culture.jpg" alt="Sophia Chen" fill className="object-cover" />
                    </div>
                    <h3 className="font-semibold">Sophia Chen</h3>
                    <p className="text-sm text-white/90">Japan</p>
                    <div className="flex mt-1 mb-2">
                      {[...Array(4)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">★</span>
                      ))}
                      <span className="text-white/40 text-lg">★</span>
                      <span className="ml-1 text-sm">4.5</span>
                    </div>
                    <p className="text-sm">
                      "The Sigiriya tour was absolutely breathtaking. Our guide was knowledgeable and the views were spectacular. Highly recommended!"
                    </p>
                  </div>
                )}
                
                {currentReviewIndex === 3 && (
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 relative rounded-full overflow-hidden mb-2 border-2 border-orange-500">
                      <Image src="/images/wildlife.jpg" alt="David Kim" fill className="object-cover" />
                    </div>
                    <h3 className="font-semibold">David Kim</h3>
                    <p className="text-sm text-white/90">Australia</p>
                    <div className="flex mt-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">★</span>
                      ))}
                      <span className="ml-1 text-sm">5.0</span>
                    </div>
                    <p className="text-sm">
                      "Perfect escape from winter! The beaches were pristine and the local culture experience was authentic. Can't wait to return."
                    </p>
                  </div>
                )}
              </div>
              
              {/* Review navigation dots */}
              <div className="flex justify-center space-x-2 mt-4">
                {[...Array(4)].map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setCurrentReviewIndex(i)}
                    className={`w-2 h-2 rounded-full ${currentReviewIndex === i ? 'bg-orange-500' : 'bg-white/50'}`}
                    aria-label={`View review ${i + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Play button */}
            <button className="mt-6 w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-orange-500 ml-1"></div>
              </div>
            </button>
            
            <p className="mt-4 text-orange-400 font-medium">
              Explore Now
            </p>
          </div>
        </div>
        
        {/* Video Background - Desktop */}
        <div className="hidden md:block relative h-[500px] w-full">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <video 
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/sigiriya-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Desktop Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-4 py-8 grid grid-cols-2 gap-8">
              {/* Left Content */}
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl font-light text-white mb-4" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                  Escape <span className="font-bold" style={{ color: '#E47036' }}>Winter</span> in Style!
                </h2>
                <p className="text-white/80 mb-8">
                  "MO is the best. Besides the many and Superb Products, the service..."
                </p>
                <div className="flex items-center space-x-4">
                  <button className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                      <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-orange-500 ml-1"></div>
                    </div>
                  </button>
                  <span className="text-orange-400 font-medium">Explore Now</span>
                </div>
              </div>
              
              {/* Right Content - Review */}
              <div className="flex items-center justify-end">
                <div className="max-w-md bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-orange-500">
                      <Image 
                        src={reviews[currentReviewIndex].image} 
                        alt={reviews[currentReviewIndex].name} 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{reviews[currentReviewIndex].name}</h3>
                      <p className="text-sm text-white/90">{reviews[currentReviewIndex].location}</p>
                    </div>
                  </div>
                  
                  <div className="flex mt-3 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={i < reviews[currentReviewIndex].stars ? "text-yellow-400 text-lg" : "text-white/40 text-lg"}
                      >★</span>
                    ))}
                    <span className="ml-2 text-sm">{reviews[currentReviewIndex].rating}</span>
                  </div>
                  
                  <p className="text-white/90">
                    {reviews[currentReviewIndex].text}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Review navigation dots - Desktop */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center space-x-3 z-20">
            {[...Array(4)].map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentReviewIndex(i)}
                className={`w-2 h-2 rounded-full ${currentReviewIndex === i ? 'bg-orange-500' : 'bg-white/50'}`}
                aria-label={`View review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full px-4 py-10 flex flex-col items-center bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-light text-center mb-6" style={{ fontFamily: 'Roboto, Arial, sans-serif', color: '#90AF84' }}>
          Choose Your <span className="font-bold" style={{ color: '#E47036' }}>Perfect</span> Travel Package
        </h2>
        
        {/* Mobile View with Horizontal Slider */}
        <div id="pricing-slider-container" className="md:hidden w-full max-w-[270px] mx-auto relative will-change-transform">
          <div className="relative h-[420px] w-full overflow-hidden">
            {/* Essential Package */}
            <div 
              className={`absolute inset-0 w-full h-full will-change-transform transition-transform duration-500 ease-out ${
                currentPricingSlide === 0 ? 'translate-x-0' : 
                currentPricingSlide === 1 ? '-translate-x-full' : '-translate-x-[200%]'
              }`}
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transform transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="px-4 py-4 text-center border-b border-gray-100">
                  <p className="text-orange-500 font-medium text-sm" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                    Essential
                  </p>
                  <h3 className="flex items-center justify-center my-2">
                    <span className="text-2xl font-semibold text-gray-700">225 Dollar</span>
                    <span className="text-gray-500 ml-1 text-xs">/Day</span>
                  </h3>
                  <div className="w-full bg-gray-300 hover:bg-gray-400 rounded-md py-2 text-center font-medium text-white text-sm transition-colors duration-300 cursor-pointer">
                    Essential
                  </div>
                </div>
                
                <div className="px-4 py-4">
                  <h4 className="font-medium mb-2 text-sm text-gray-700">Facilities</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 text-xs">✓</span>
                      <span className="text-xs text-gray-600">Lorem Ipsum is simply</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 text-xs">✓</span>
                      <span className="text-xs text-gray-600">Lorem Ipsum</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 text-xs">✓</span>
                      <span className="text-xs text-gray-600">simply dummy text</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 text-xs">✓</span>
                      <span className="text-xs text-gray-600">Lorem Ipsum is simply dummy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Premium Package */}
            <div 
              className={`absolute inset-0 w-full h-full will-change-transform transition-transform duration-500 ease-out ${
                currentPricingSlide === 1 ? 'translate-x-0' : 
                currentPricingSlide === 0 ? 'translate-x-full' : '-translate-x-full'
              }`}
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transform transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="px-4 py-4 text-center border-b border-gray-100">
                  <p className="text-orange-500 font-medium text-sm" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                    Premium
                  </p>
                  <h3 className="flex items-center justify-center my-2">
                    <span className="text-2xl font-semibold text-gray-700">2225 Dollar</span>
                    <span className="text-gray-500 ml-1 text-xs">/Day</span>
                  </h3>
                  <div className="w-full bg-orange-500 hover:bg-orange-600 rounded-md py-2 text-center font-medium text-white text-sm transition-colors duration-300 cursor-pointer">
                    Premium
                  </div>
                </div>
                
                <div className="px-4 py-4">
                  <h4 className="font-medium mb-2 text-sm text-gray-700">Facilities</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 text-xs">✓</span>
                      <span className="text-xs text-gray-600">Lorem Ipsum is simply</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 text-xs">✓</span>
                      <span className="text-xs text-gray-600">Lorem Ipsum</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 text-xs">✓</span>
                      <span className="text-xs text-gray-600">simply dummy text</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 text-xs">✓</span>
                      <span className="text-xs text-gray-600">Lorem Ipsum is simply dummy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 text-xs">✓</span>
                      <span className="text-xs text-gray-600">Lorem Ipsum is simply dummy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 text-xs">✓</span>
                      <span className="text-xs text-gray-600">Lorem Ipsum is simply dummy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Premium+ Package */}
            <div 
              className={`absolute inset-0 w-full h-full will-change-transform transition-transform duration-500 ease-out ${
                currentPricingSlide === 2 ? 'translate-x-0' : 
                currentPricingSlide < 2 ? 'translate-x-full' : '-translate-x-full'
              }`}
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transform transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="px-4 py-4 text-center border-b border-gray-100">
                  <p className="text-orange-500 font-medium text-sm" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                    Premium+
                  </p>
                  <h3 className="flex items-center justify-center my-2">
                    <span className="text-2xl font-semibold text-gray-700">5225 Dollar</span>
                    <span className="text-gray-500 ml-1 text-xs">/Day</span>
                  </h3>
                  <div className="w-full bg-gray-300 hover:bg-gray-400 rounded-md py-2 text-center font-medium text-white text-sm transition-colors duration-300 cursor-pointer">
                    Premium+
                  </div>
                </div>
                
                <div className="px-4 py-4">
                  <h4 className="font-medium mb-2 text-sm text-gray-700">Facilities</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 text-xs">✓</span>
                      <span className="text-xs text-gray-600">Lorem Ipsum is simply</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 text-xs">✓</span>
                      <span className="text-xs text-gray-600">Lorem Ipsum</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 text-xs">✓</span>
                      <span className="text-xs text-gray-600">simply dummy text</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 text-xs">✓</span>
                      <span className="text-xs text-gray-600">Lorem Ipsum is simply dummy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 text-xs">✓</span>
                      <span className="text-xs text-gray-600">Lorem Ipsum is simply dummy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 text-xs">✓</span>
                      <span className="text-xs text-gray-600">Lorem Ipsum is simply dummy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Dots for Mobile */}
          <div className="flex flex-col items-center mt-6">
            {/* Dots */}
            <div className="flex justify-center space-x-2">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPricingSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentPricingSlide ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                  aria-label={`View package ${index + 1}`}
                />
              ))}
            </div>
            <div className="mt-3 text-xs text-gray-500">Swipe or scroll to navigate</div>
          </div>
        </div>
        
        {/* Desktop View with Horizontal Layout */}          <div id="pricing-slider-desktop" className="hidden md:flex md:flex-row gap-6 w-full max-w-3xl mx-auto">
          {/* Essential Package */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex-1 transform transition-transform duration-300 hover:shadow-lg hover:scale-105"
               style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}>
            <div className="px-4 py-4 text-center border-b border-gray-100">
              <p className="text-orange-500 font-medium text-sm" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                Essential
              </p>
              <h3 className="flex items-center justify-center my-2">
                <span className="text-2xl font-semibold text-gray-700">225 Dollar</span>
                <span className="text-gray-500 ml-1 text-xs">/Day</span>
              </h3>
              <div className="w-full bg-gray-300 hover:bg-gray-400 rounded-md py-2 text-center font-medium text-white text-sm transition-colors duration-300 cursor-pointer">
                Essential
              </div>
            </div>
            
            <div className="px-4 py-4">
              <h4 className="font-medium mb-2 text-sm text-gray-700">Facilities</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xs">✓</span>
                  <span className="text-xs text-gray-600">Lorem Ipsum is simply</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xs">✓</span>
                  <span className="text-xs text-gray-600">Lorem Ipsum</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xs">✓</span>
                  <span className="text-xs text-gray-600">simply dummy text</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xs">✓</span>
                  <span className="text-xs text-gray-600">Lorem Ipsum is simply dummy</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Premium Package */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex-1 transform transition-transform duration-300 hover:shadow-lg hover:scale-105"
               style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}>
            <div className="px-4 py-4 text-center border-b border-gray-100">
              <p className="text-orange-500 font-medium text-sm" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                Premium
              </p>
              <h3 className="flex items-center justify-center my-2">
                <span className="text-2xl font-semibold text-gray-700">2225 Dollar</span>
                <span className="text-gray-500 ml-1 text-xs">/Day</span>
              </h3>
              <div className="w-full bg-orange-500 hover:bg-orange-600 rounded-md py-2 text-center font-medium text-white text-sm transition-colors duration-300 cursor-pointer">
                Premium
              </div>
            </div>
            
            <div className="px-4 py-4">
              <h4 className="font-medium mb-2 text-sm text-gray-700">Facilities</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xs">✓</span>
                  <span className="text-xs text-gray-600">Lorem Ipsum is simply</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xs">✓</span>
                  <span className="text-xs text-gray-600">Lorem Ipsum</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xs">✓</span>
                  <span className="text-xs text-gray-600">simply dummy text</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xs">✓</span>
                  <span className="text-xs text-gray-600">Lorem Ipsum is simply dummy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xs">✓</span>
                  <span className="text-xs text-gray-600">Lorem Ipsum is simply dummy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xs">✓</span>
                  <span className="text-xs text-gray-600">Lorem Ipsum is simply dummy</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Premium+ Package */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex-1 transform transition-transform duration-300 hover:shadow-lg hover:scale-105"
               style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}>
            <div className="px-4 py-4 text-center border-b border-gray-100">
              <p className="text-orange-500 font-medium text-sm" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                Premium+
              </p>
              <h3 className="flex items-center justify-center my-2">
                <span className="text-2xl font-semibold text-gray-700">5225 Dollar</span>
                <span className="text-gray-500 ml-1 text-xs">/Day</span>
              </h3>
              <div className="w-full bg-gray-300 hover:bg-gray-400 rounded-md py-2 text-center font-medium text-white text-sm transition-colors duration-300 cursor-pointer">
                Premium+
              </div>
            </div>
            
            <div className="px-4 py-4">
              <h4 className="font-medium mb-2 text-sm text-gray-700">Facilities</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xs">✓</span>
                  <span className="text-xs text-gray-600">Lorem Ipsum is simply</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xs">✓</span>
                  <span className="text-xs text-gray-600">Lorem Ipsum</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xs">✓</span>
                  <span className="text-xs text-gray-600">simply dummy text</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xs">✓</span>
                  <span className="text-xs text-gray-600">Lorem Ipsum is simply dummy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xs">✓</span>
                  <span className="text-xs text-gray-600">Lorem Ipsum is simply dummy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xs">✓</span>
                  <span className="text-xs text-gray-600">Lorem Ipsum is simply dummy</span>
                </li>
              </ul>
            </div>
          </div>
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
