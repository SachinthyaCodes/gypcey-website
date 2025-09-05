import Image from 'next/image';

// Mobile gallery items
const mobileGalleryItems = [
  { src: "/images/gallery1.jpg", alt: "Surfing beach", className: "h-44" },
  { src: "/images/gallery2.jpg", alt: "Sunset surf", className: "h-44" },
  { src: "/images/gallery3.jpg", alt: "Beachside", className: "h-32" },
  { src: "/images/gallery4.jpg", alt: "Ocean view", className: "h-56 col-span-1 row-span-2" },
  { src: "/images/gallery5.jpg", alt: "Ocean waves", className: "h-24" },
  { src: "/images/gallery6.jpg", alt: "Palm trees", className: "h-40 col-span-2" },
  { src: "/images/gallery7.jpg", alt: "Surfer walking", className: "h-48" },
  { src: "/images/gallery8.jpg", alt: "Beach view", className: "h-48" }
];

export default function GallerySection() {
  return (
    <>
      {/* Mobile Gallery */}
      <section className="md:hidden w-full bg-white">
        <div className="py-8">
          <h2 className="text-2xl md:text-3xl font-light text-center mb-6 px-4 text-green-accent font-roboto">
            Surfing <span className="font-bold text-orange-accent">On World Best,</span> Untouched Beaches
          </h2>
          
          <div className="grid grid-cols-2 gap-0 mx-0">
            {mobileGalleryItems.map((item, index) => (
              <div key={index} className={`relative ${item.className}`}>
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Desktop Gallery */}
      <section className="hidden md:block w-full bg-white">
        <div className="py-16">
          <div className="flex justify-between items-center mb-8 px-4 mx-auto container">
            <h2 className="text-2xl md:text-3xl font-light text-green-accent font-roboto">
              Surfing <span className="font-bold text-orange-accent">On World Best,</span> Untouched Beaches
            </h2>
            <button className="bg-orange-500 text-white font-medium px-6 py-2 text-sm rounded-md hover:bg-orange-600 transition-colors duration-300">
              Contact Us Now
            </button>
          </div>
          
          {/* Seamless Grid Layout - No gaps, no padding */}
          <div className="w-full h-[600px] grid grid-cols-6 grid-rows-4 gap-0">
            {/* Row 1 */}
            <div className="relative col-span-2 row-span-2">
              <Image src="/images/gallery1.jpg" alt="Gallery 1" fill className="object-cover" />
            </div>
            <div className="relative col-span-1 row-span-1">
              <Image src="/images/gallery2.jpg" alt="Gallery 2" fill className="object-cover" />
            </div>
            <div className="relative col-span-1 row-span-1">
              <Image src="/images/gallery3.jpg" alt="Gallery 3" fill className="object-cover" />
            </div>
            <div className="relative col-span-2 row-span-2">
              <Image src="/images/gallery4.jpg" alt="Gallery 4" fill className="object-cover" />
            </div>
            
            {/* Row 2 */}
            <div className="relative col-span-1 row-span-1">
              <Image src="/images/gallery5.jpg" alt="Gallery 5" fill className="object-cover" />
            </div>
            <div className="relative col-span-1 row-span-1">
              <Image src="/images/gallery6.jpg" alt="Gallery 6" fill className="object-cover" />
            </div>
            
            {/* Row 3 */}
            <div className="relative col-span-1 row-span-1">
              <Image src="/images/gallery7.jpg" alt="Gallery 7" fill className="object-cover" />
            </div>
            <div className="relative col-span-1 row-span-1">
              <Image src="/images/gallery8.jpg" alt="Gallery 8" fill className="object-cover" />
            </div>
            <div className="relative col-span-2 row-span-1">
              <Image src="/images/gallery9.jpg" alt="Gallery 9" fill className="object-cover" />
            </div>
            <div className="relative col-span-2 row-span-1">
              <Image src="/images/gallery10.jpg" alt="Gallery 10" fill className="object-cover" />
            </div>
            
            {/* Row 4 */}
            <div className="relative col-span-2 row-span-1">
              <Image src="/images/gallery11.jpg" alt="Gallery 11" fill className="object-cover" />
            </div>
            <div className="relative col-span-2 row-span-1">
              <Image src="/images/gallery12.jpg" alt="Gallery 12" fill className="object-cover" />
            </div>
            <div className="relative col-span-2 row-span-1">
              <Image src="/images/gallery1.jpg" alt="Gallery Extra" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}