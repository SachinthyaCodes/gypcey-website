'use client';

import React, { useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Switch to dark mode after 50px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`w-full border-b fixed top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'border-gray-800 bg-gray-900 shadow-lg' 
          : 'border-gray-200 bg-white'
      }`} 
      style={{ fontFamily: 'Roboto, Arial, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo - changes based on scroll state */}
        <a href="#" className="flex items-center gap-2">
          <Image 
            src={isScrolled ? "/images/Full Logo 1.png" : "/images/Full Logo 2.png"} 
            alt="Gypcey Logo" 
            width={140} 
            height={40} 
            priority 
          />
        </a>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <a
                href={link.href}
                className={`text-xs hover:text-blue-400 transition-colors px-2 py-1 ${
                  isScrolled ? 'text-white' : 'text-gray-800'
                }`}
                style={{ fontFamily: 'Roboto, Arial, sans-serif' }}
              >
                {link.name}
                {link.dropdown && (
                  <span className="ml-1">&#9662;</span>
                )}
              </a>
              {/* Dropdown placeholder */}
            </div>
          ))}
          <a href="#" className="flex items-center gap-2 text-blue-600 text-xs" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
            <Image src="/bucket-list.svg" alt="Bucket List" width={24} height={24} /> Bucket List
          </a>
          <a href="#" className="flex items-center gap-2 text-orange-600 text-xs" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
            <Image src="/shop.svg" alt="Shop" width={24} height={24} /> Shop
          </a>
        </div>
        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-3">
          {/* Connecting Airports Icon */}
          <div className="flex items-center">
            <Image 
              src="/images/connecting_airports.png" 
              alt="Connecting Airports" 
              width={24} 
              height={24}
              className={`transition-all duration-300 ${
                isScrolled ? 'filter invert' : ''
              }`}
            />
          </div>
          {/* Menu Icon */}
          <button className={`focus:outline-none transition-colors p-2 ${
            isScrolled ? 'text-white' : 'text-gray-800'
          }`}>
            <Image 
              src="/images/menu.png" 
              alt="Menu" 
              width={24} 
              height={24}
              className={`transition-all duration-300 ${
                isScrolled ? 'filter invert' : ''
              }`}
            />
          </button>
        </div>
      </div>
      {/* Mobile Nav Drawer placeholder */}
    </nav>
  );
}
