
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white dark:bg-black flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center pt-6 pb-4 px-4 sm:px-8">
        <div className="flex justify-between items-center w-full">
          <Image src="/logo.svg" alt="Gypcey Logo" width={120} height={40} priority />
          <button className="md:hidden p-2">
            <span className="material-icons">menu</span>
          </button>
        </div>
        <h1 className="text-lg font-bold text-blue-900 mt-4 text-center">Explore. Work. Wander<br />Gypcey Your Journey</h1>
        <div className="w-full mt-4 rounded-lg overflow-hidden shadow-lg">
          <Image src="/hero.jpg" alt="Hero" width={400} height={300} className="w-full h-auto object-cover" />
        </div>
        <div className="mt-2 text-xs text-center text-blue-900 font-semibold">WHERE HISTORY MEETS MAJESTIC BEAUTY</div>
        <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm">Do not miss the chance to Explore it...</button>
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
      <footer className="w-full bg-gray-900 text-white py-8 px-4 mt-8 flex flex-col items-center">
        <Image src="/logo.svg" alt="Gypcey Logo" width={120} height={40} />
        <div className="mt-4 text-center text-xs max-w-md">
          ABOUT SITE<br />
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </div>
        <form className="mt-4 w-full max-w-xs flex flex-col items-center">
          <input type="email" placeholder="Email Address Here" className="w-full px-3 py-2 rounded-md text-black" />
          <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm">Subscribe</button>
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
