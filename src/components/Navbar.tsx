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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  // Handle dropdown toggle
  const toggleDropdown = (linkName: string) => {
    setActiveDropdown(activeDropdown === linkName ? null : linkName);
  };
  
  // Handle mobile dropdown toggle
  const toggleMobileDropdown = (linkName: string) => {
    setActiveMobileDropdown(activeMobileDropdown === linkName ? null : linkName);
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
      
      // Close mobile menu when clicking outside
      if (mobileMenuOpen && !(e.target as Element).closest('.mobile-menu') && !(e.target as Element).closest('.menu-toggle-btn')) {
        setMobileMenuOpen(false);
      }
    };
    
    // Prevent body scrolling when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <nav 
      className={`w-full fixed top-0 z-50 transition-all duration-300 font-roboto ${
        isScrolled 
          ? 'glass-nav-dark shadow-lg' 
          : 'glass-nav'
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
                  isScrolled ? 'text-white' : 'text-gray-900 font-medium'
                } flex items-center`}
              >
                {link.name}
                {link.dropdown && (
                  <span className="ml-1">&#9662;</span>
                )}
              </a>
              
              {/* Dropdown menu */}
              {link.dropdown && link.items && link.items.length > 0 && (
                <div className="absolute left-0 mt-1 w-64 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden glass-dropdown">
                  {/* Experience Dropdown */}
                  {link.name === "Experience" && (
                    <div className="p-4 grid grid-cols-2 gap-x-8 gap-y-2">
                      <div className="col-span-1">
                        <a href="#" className="text-sm text-gray-600 font-medium block mb-2 hover:text-blue-500 transition-colors">Adventures</a>
                        <a href="#" className="text-sm text-gray-600 block mb-2 hover:text-blue-500 transition-colors">Wellness</a>
                        <a href="#" className="text-sm text-gray-600 block mb-2 hover:text-blue-500 transition-colors">Stay & Work</a>
                      </div>
                      <div className="col-span-1">
                        <a href="#" className="text-sm text-gray-600 font-medium block mb-2 hover:text-blue-500 transition-colors">Surf Camp</a>
                        <a href="#" className="text-sm text-gray-600 block mb-2 hover:text-blue-500 transition-colors">Wild Safari</a>
                        <a href="#" className="text-sm text-gray-600 block mb-2 hover:text-blue-500 transition-colors">Lagoon Safari</a>
                        <a href="#" className="text-sm text-gray-600 block mb-2 hover:text-blue-500 transition-colors">Diving</a>
                        <a href="#" className="text-sm text-gray-600 block mb-2 hover:text-blue-500 transition-colors">Fishing Tours</a>
                      </div>
                    </div>
                  )}

                  {/* Essentials Dropdown */}
                  {link.name === "Essentials" && (
                    <div className="p-4 grid grid-cols-2 gap-x-8 gap-y-2">
                      <div className="col-span-1">
                        <a href="#" className="text-sm text-gray-600 font-medium block mb-2 hover:text-blue-500 transition-colors">Travel Guides</a>
                        <a href="#" className="text-sm text-gray-600 block mb-2 hover:text-blue-500 transition-colors">Travel Health</a>
                        <a href="#" className="text-sm text-gray-600 block mb-2 hover:text-blue-500 transition-colors">BLOG</a>
                      </div>
                      <div className="col-span-1">
                        <a href="#" className="text-sm text-gray-700 leading-snug block hover:text-blue-500 transition-colors">
                          Sun-drenched shores. <br/>
                          Rolling waves. Pure island <br/>
                          energy on the East Coast
                        </a>
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
          {/* Burger Menu Icon */}
          <button 
            className={`focus:outline-none transition-colors p-2 menu-toggle-btn ${
              isScrolled ? 'text-white' : 'text-gray-800'
            }`}
            aria-label="Open navigation menu"
            title="Open Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span className={`block w-full h-0.5 transition-all duration-300 ease-in-out rounded-full ${
                isScrolled ? 'bg-white' : 'bg-gray-800'
              } ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-full h-0.5 transition-all duration-300 ease-in-out rounded-full ${
                isScrolled ? 'bg-white' : 'bg-gray-800'
              } ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-full h-0.5 transition-all duration-300 ease-in-out rounded-full ${
                isScrolled ? 'bg-white' : 'bg-gray-800'
              } ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Nav Drawer */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out ${
        mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setMobileMenuOpen(false)}></div>
        
        {/* Mobile Menu */}
        <div className={`absolute top-0 right-0 h-full w-4/5 max-w-sm glass-nav-dark shadow-xl transform transition-transform duration-300 ease-in-out mobile-menu ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button 
              className="text-white focus:outline-none"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Mobile Logo */}
          <div className="flex justify-center mb-8 px-4">
            <Image 
              src="/images/Full Logo 1.png" 
              alt="Gypcey Logo" 
              width={140} 
              height={40} 
              priority 
            />
          </div>
          
          {/* Mobile Navigation Links */}
          <div className="px-4 py-2">
            {navLinks.map((link) => (
              <div key={link.name} className="mb-4">
                <div className="flex items-center justify-between">
                  <a
                    href={link.dropdown && link.items && link.items.length > 0 ? "#" : link.href}
                    className="text-white text-base font-medium py-2"
                    onClick={(e) => {
                      if (link.dropdown && link.items && link.items.length > 0) {
                        e.preventDefault();
                        toggleMobileDropdown(link.name);
                      }
                    }}
                  >
                    {link.name}
                  </a>
                  {link.dropdown && link.items && link.items.length > 0 && (
                    <button
                      className="text-white focus:outline-none p-2"
                      onClick={() => toggleMobileDropdown(link.name)}
                    >
                      <span className={`transition-transform duration-300 inline-block ${
                        activeMobileDropdown === link.name ? 'rotate-180' : ''
                      }`}>&#9662;</span>
                    </button>
                  )}
                </div>
                
                {/* Mobile Dropdown */}
                {link.dropdown && link.items && link.items.length > 0 && (
                  <div className={`mt-2 ml-4 overflow-hidden transition-all duration-300 ${
                    activeMobileDropdown === link.name ? 'max-h-96' : 'max-h-0'
                  }`}>
                    {link.items.map((item, index) => (
                      <a
                        key={`${item.name}-${index}`}
                        href={item.href}
                        className={`block py-2 text-white text-sm opacity-80 hover:opacity-100 ${
                          item.description ? 'text-sm leading-snug mt-2' : ''
                        }`}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Additional Mobile Links */}
            <div className="mt-6 flex flex-col gap-4">
              <a href="#" className="flex items-center gap-2 text-blue-400 text-sm" title="View Bucket List">
                <Image src="/bucket-list.svg" alt="Bucket List" width={24} height={24} /> Bucket List
              </a>
              <a href="#" className="flex items-center gap-2 text-orange-400 text-sm" title="Go to Shop">
                <Image src="/shop.svg" alt="Shop" width={24} height={24} /> Shop
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
