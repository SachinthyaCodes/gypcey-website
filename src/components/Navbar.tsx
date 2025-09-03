'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Define dropdown menus for navigation items
const experienceDropdown = [
  { name: "Adventures", href: "#" },
  { name: "Wellness", href: "#" },
  { name: "Stay & Work", href: "#" },
  { name: "Surf Camp", href: "#" },
  { name: "Wild Safari", href: "#" },
  { name: "Lagoon Safari", href: "#" },
  { name: "Diving", href: "#" },
  { name: "Fishing Tours", href: "#" },
];

const essentialsDropdown = [
  { name: "Travel Guides", href: "#" },
  { name: "Travel Health", href: "#" },
  { name: "BLOG", href: "#" },
  { name: "Sun-drenched shores", href: "#", description: true },
  { name: "Rolling waves. Pure island energy on the East Coast", href: "#", description: true },
];

const navLinks = [
  { name: "Trips", href: "#", dropdown: true, items: [] },
  { name: "Experience", href: "#", dropdown: true, items: experienceDropdown },
  { name: "Essentials", href: "#", dropdown: true, items: essentialsDropdown },
  { name: "About Gypcey", href: "#" },
  { name: "Community", href: "#" },
  { name: "Contact Us", href: "#" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Handle dropdown toggle
  const toggleDropdown = (linkName: string) => {
    setActiveDropdown(activeDropdown === linkName ? null : linkName);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Switch to dark mode after 50px scroll
    };

    // Close dropdown when clicking outside
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as Element).closest('.nav-dropdown')) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav 
      className={`w-full border-b fixed top-0 z-50 transition-all duration-300 font-roboto ${
        isScrolled 
          ? 'border-gray-800 bg-gray-900 shadow-lg' 
          : 'border-gray-200 bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo - changes based on scroll state */}
        <a href="#" className="flex items-center gap-2" title="Gypcey Home">
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
                } flex items-center`}
              >
                {link.name}
                {link.dropdown && (
                  <span className="ml-1">&#9662;</span>
                )}
              </a>
              
              {/* Dropdown menu */}
              {link.dropdown && link.items && link.items.length > 0 && (
                <div className="absolute left-0 mt-1 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                  {/* Experience Dropdown */}
                  {link.name === "Experience" && (
                    <div className="p-4 grid grid-cols-2 gap-x-8 gap-y-2">
                      <div className="col-span-1">
                        <a href="#" className="text-sm text-blue-500 font-medium block mb-2 hover:text-blue-600">Adventures</a>
                        <a href="#" className="text-sm text-gray-600 block mb-2 hover:text-blue-600">Wellness</a>
                        <a href="#" className="text-sm text-gray-600 block mb-2 hover:text-blue-600">Stay & Work</a>
                      </div>
                      <div className="col-span-1">
                        <a href="#" className="text-sm text-blue-500 font-medium block mb-2 hover:text-blue-600">Surf Camp</a>
                        <a href="#" className="text-sm text-gray-600 block mb-2 hover:text-blue-600">Wild Safari</a>
                        <a href="#" className="text-sm text-gray-600 block mb-2 hover:text-blue-600">Lagoon Safari</a>
                        <a href="#" className="text-sm text-gray-600 block mb-2 hover:text-blue-600">Diving</a>
                        <a href="#" className="text-sm text-gray-600 block mb-2 hover:text-blue-600">Fishing Tours</a>
                      </div>
                    </div>
                  )}

                  {/* Essentials Dropdown */}
                  {link.name === "Essentials" && (
                    <div className="p-4 grid grid-cols-2 gap-x-8 gap-y-2">
                      <div className="col-span-1">
                        <a href="#" className="text-sm text-blue-500 font-medium block mb-2 hover:text-blue-600">Travel Guides</a>
                        <a href="#" className="text-sm text-gray-600 block mb-2 hover:text-blue-600">Travel Health</a>
                        <a href="#" className="text-sm text-gray-600 block mb-2 hover:text-blue-600">BLOG</a>
                      </div>
                      <div className="col-span-1">
                        <p className="text-sm text-gray-700 leading-snug">Sun-drenched shores. <br/>Rolling waves. Pure island <br/>energy on the East Coast</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
          <a href="#" className="flex items-center gap-2 text-blue-600 text-xs" title="View Bucket List">
            <Image src="/bucket-list.svg" alt="Bucket List" width={24} height={24} /> Bucket List
          </a>
          <a href="#" className="flex items-center gap-2 text-orange-600 text-xs" title="Go to Shop">
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
          <button 
            className={`focus:outline-none transition-colors p-2 ${
              isScrolled ? 'text-white' : 'text-gray-800'
            }`}
            aria-label="Open navigation menu"
            title="Open Menu"
          >
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
