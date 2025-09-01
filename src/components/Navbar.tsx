import React from "react";
import Image from "next/image";

const navLinks = [
  { name: "Trips", href: "#", dropdown: true },
  { name: "Experience", href: "#", dropdown: true },
  { name: "Essentials", href: "#", dropdown: true },
  { name: "About Gypcey", href: "#" },
  { name: "Community", href: "#" },
  { name: "Contact Us", href: "#" },
];

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Image src="/images/Full Logo 2.png" alt="Gypcey Logo" width={140} height={40} priority />
        </a>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <a
                href={link.href}
                className="text-gray-800 dark:text-white font-semibold hover:text-blue-600 transition-colors px-2 py-1"
              >
                {link.name}
                {link.dropdown && (
                  <span className="ml-1">&#9662;</span>
                )}
              </a>
              {/* Dropdown placeholder */}
            </div>
          ))}
          <a href="#" className="flex items-center gap-2 text-blue-600 font-bold">
            <Image src="/bucket-list.svg" alt="Bucket List" width={24} height={24} /> Bucket List
          </a>
          <a href="#" className="flex items-center gap-2 text-orange-600 font-bold">
            <Image src="/shop.svg" alt="Shop" width={24} height={24} /> Shop
          </a>
        </div>
        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-800 dark:text-white focus:outline-none">
            <span className="material-icons">menu</span>
          </button>
        </div>
      </div>
      {/* Mobile Nav Drawer placeholder */}
    </nav>
  );
}
