'use client';
import { useState, useEffect } from 'react';
import { reviews } from '@/config/homePageData';

export default function ReviewsSection() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Auto-rotate reviews
  useEffect(() => {
    const reviewInterval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    
    return () => clearInterval(reviewInterval);
  }, []);

  const renderStars = (stars: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${index < stars ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="w-full relative bg-gray-900">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/sigiriya-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Layout: Title on Left, Reviews on Right */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16">
            {/* Left Side - Title */}
            <div className="lg:w-2/5 lg:pr-8">
              <div className="lg:sticky lg:top-32 lg:pl-16 lg:pt-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4 font-roboto leading-tight">
                  What Our <span className="font-bold text-orange-accent">Travel Experts</span> Say
                </h2>
                <p className="text-white/80 text-base md:text-lg leading-relaxed">
                  Real experiences from our valued customers who have traveled with us to discover the beauty of Sri Lanka
                </p>
              </div>
            </div>

            {/* Right Side - Review Cards */}
            <div className="lg:w-3/5 lg:pl-8">
              {/* Carousel Layout - Single Review Display */}
              <div className="relative">
                <div className="overflow-hidden">
                  {reviews.map((review, index) => (
                    <div 
                      key={index} 
                      className={`transition-all duration-700 ease-in-out ${
                        index === currentReviewIndex 
                          ? 'opacity-100 transform translate-y-0' 
                          : 'opacity-0 transform translate-y-4 absolute inset-0 pointer-events-none'
                      }`}
                    >
                      <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-2xl max-w-md ml-auto">
                        {/* Review Card Content */}
                        <div className="space-y-4">
                          <p className="text-white text-base leading-relaxed font-light italic">
                            {review.text}
                          </p>
                          <div className="flex items-center space-x-3 pt-3 border-t border-white/20">
                            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                              <span className="text-white font-bold text-sm">
                                {review.name.charAt(0)}
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-white font-semibold text-base truncate">
                                {review.name}
                              </h4>
                              <p className="text-white/70 text-xs truncate">
                                {review.location}
                              </p>
                              <div className="flex items-center mt-1">
                                <div className="flex text-yellow-400 text-xs">
                                  {renderStars(review.stars)}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Navigation Dots - Centered with Review Card */}
              <div className="flex justify-center mt-6 max-w-md ml-auto">
                <div className="flex space-x-2">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReviewIndex(index)}
                      aria-label={`Go to review ${index + 1}`}
                      className={`transition-all duration-300 ${
                        index === currentReviewIndex 
                          ? 'w-8 h-2 bg-orange-400 rounded-full shadow-md' 
                          : 'w-2 h-2 bg-white/50 hover:bg-white/70 rounded-full'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}