import Image from 'next/image';

export default function SriLankaSection() {
  const destinations = [
    { src: "/images/last-section-photo1.jpg", alt: "Sri Lanka Destination 1" },
    { src: "/images/last-section-photo2.jpg", alt: "Sri Lanka Destination 2" },
    { src: "/images/last-section-photo3.jpg", alt: "Sri Lanka Destination 3" }
  ];

  return (
    <section className="w-full py-16 flex flex-col items-center bg-white">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
        {/* Mobile View */}
        <div className="md:hidden">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-semibold font-montserrat text-green-accent">
              <span className="font-bold text-orange-accent">Sri Lanka</span> is the Best Country To Visit
            </h2>
          </div>
          
          <div className="flex justify-center px-4 mb-6">
            <div className="relative w-full">
              <Image 
                src="/images/sri-lanka-map.png" 
                alt="Sri Lanka Map" 
                width={400} 
                height={550} 
                className="w-full h-auto rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
        
        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="flex flex-row items-start">
            <div className="w-[45%] pr-8 flex justify-center">
              <div className="relative">
                <Image 
                  src="/images/sri-lanka-map.png" 
                  alt="Sri Lanka Map" 
                  width={400} 
                  height={550} 
                  className="rounded-2xl shadow-lg"
                  priority
                />
              </div>
            </div>
            
            <div className="w-[55%] pl-8">
              <div className="mb-8">
                <h2 className="text-3xl font-semibold font-montserrat text-green-accent mb-4">
                  <span className="font-bold text-orange-accent">Sri Lanka</span> is the Best Country To Visit
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Discover the pearl of the Indian Ocean with its incredible diversity of landscapes, 
                  rich cultural heritage, and warm hospitality. From ancient temples to pristine beaches, 
                  Sri Lanka offers an unforgettable journey through paradise.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-3 max-w-lg">
                {destinations.map((destination, index) => (
                  <div key={index} className="relative h-32 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src={destination.src}
                      alt={destination.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 33vw, 15vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Destinations Grid */}
        <div className="md:hidden grid grid-cols-3 gap-2 px-4 max-w-sm mx-auto">
          {destinations.map((destination, index) => (
            <div key={index} className="relative h-24 rounded-lg overflow-hidden shadow-md">
              <Image
                src={destination.src}
                alt={destination.alt}
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}