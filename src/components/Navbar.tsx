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
      
      // Close mobile menu when clicking outside of menu or burger button
      if (mobileMenuOpen && 
          !(e.target as Element).closest('.mobile-menu-bg') && 
          !(e.target as Element).closest('.menu-toggle-btn') &&
          !(e.target as Element).classList.contains('mobile-dropdown-toggle')) {
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
          {/* Burger Menu Button - This transforms to X when menu is open */}
          <button 
            className={`focus:outline-none transition-all p-2 menu-toggle-btn z-[60] rounded-md ${
              isScrolled || mobileMenuOpen 
                ? 'text-white hover:bg-white/10' 
                : 'text-gray-800 hover:bg-gray-100/50'
            }`}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            title={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span className={`block w-full h-0.5 transition-all duration-300 ease-in-out rounded-full ${
                isScrolled || mobileMenuOpen ? 'bg-white' : 'bg-gray-800'
              } ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-full h-0.5 transition-all duration-300 ease-in-out rounded-full ${
                isScrolled || mobileMenuOpen ? 'bg-white' : 'bg-gray-800'
              } ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-full h-0.5 transition-all duration-300 ease-in-out rounded-full ${
                isScrolled || mobileMenuOpen ? 'bg-white' : 'bg-gray-800'
              } ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Full Screen Mobile Menu - Exactly as in the reference image */}
      <div 
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Full-screen blue background */}
        <div 
          className="absolute inset-0 mobile-menu-bg overflow-auto"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside menu
        >
          {/* Logo and title at top */}
          <div className="pt-16 pb-8 flex flex-col items-center">
            <div className="mb-2">
              <Image
                src="/images/Full Logo 1.png"
                alt="Gypcey Logo"
                width={200}
                height={60}
                priority
                className="w-auto h-auto"
              />
            </div>
            <p className="text-white text-sm uppercase tracking-wider">SRI LANKAN YOUTHFUL ESCAPES</p>
          </div>
          
          {/* Menu Items */}
          <div className="flex flex-col items-center pt-10 space-y-8 text-center">
            {/* Trips - Simple Link */}
            <a 
              href="#" 
              className="text-white text-xl font-medium hover:opacity-80 transition-opacity"
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling
                // Only close if it's a link to another page (not a hash link)
                if (e.currentTarget.getAttribute('href') && e.currentTarget.getAttribute('href') !== '#') {
                  setMobileMenuOpen(false);
                }
              }}
            >
              Trips
            </a>
            
            {/* Experience - With Dropdown */}
            <div className="w-full">
              <div 
                className="flex items-center justify-center cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMobileDropdown("Experience");
                }}
              >
                <span className="text-white text-xl font-medium">Experience</span>
                <span className="text-white ml-2 text-lg">
                  {activeMobileDropdown === "Experience" ? "▲" : "▼"}
                </span>
              </div>
              
              {/* Experience Dropdown Content */}
              <div className={`mt-4 overflow-hidden transition-all duration-500 ease-in-out ${
                activeMobileDropdown === "Experience" ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="bg-white/10 mx-10 rounded-lg py-2 px-4">
                  {experienceDropdown.map((item, index) => (
                    <a
                      key={`experience-${index}`}
                      href={item.href}
                      className="block py-3 text-white text-base hover:opacity-80 transition-opacity"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent event bubbling
                        // Only close if it's a link to another page (not a hash link)
                        if (item.href && item.href !== '#') {
                          setMobileMenuOpen(false);
                        }
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Essentials - With Dropdown */}
            <div className="w-full">
              <div 
                className="flex items-center justify-center cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMobileDropdown("Essentials");
                }}
              >
                <span className="text-white text-xl font-medium">Essentials</span>
                <span className="text-white ml-2 text-lg">
                  {activeMobileDropdown === "Essentials" ? "▲" : "▼"}
                </span>
              </div>
              
              {/* Essentials Dropdown Content */}
              <div className={`mt-4 overflow-hidden transition-all duration-500 ease-in-out ${
                activeMobileDropdown === "Essentials" ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="bg-white/10 mx-10 rounded-lg py-2 px-4">
                  <a href="#" className="block py-3 text-white text-base hover:opacity-80 transition-opacity" onClick={(e) => e.stopPropagation()}>
                    Travel Guides
                  </a>
                  <a href="#" className="block py-3 text-white text-base hover:opacity-80 transition-opacity" onClick={(e) => e.stopPropagation()}>
                    Travel Health
                  </a>
                  <a href="#" className="block py-3 text-white text-base hover:opacity-80 transition-opacity" onClick={(e) => e.stopPropagation()}>
                    BLOG
                  </a>
                  <div className="mt-4 border-t border-white/20 pt-3">
                    <a href="#" className="block py-2 text-white text-base leading-snug hover:opacity-80 transition-opacity" onClick={(e) => e.stopPropagation()}>
                      Sun-drenched shores
                    </a>
                    <a href="#" className="block py-2 text-white text-base leading-snug hover:opacity-80 transition-opacity" onClick={(e) => e.stopPropagation()}>
                      Rolling waves. Pure island energy on the East Coast
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Regular Links */}
            <a 
              href="#" 
              className="text-white text-xl font-medium hover:opacity-80 transition-opacity"
              onClick={(e) => {
                e.stopPropagation();
                if (e.currentTarget.getAttribute('href') && e.currentTarget.getAttribute('href') !== '#') {
                  setMobileMenuOpen(false);
                }
              }}
            >
              About Gypcey
            </a>
            
            <a 
              href="#" 
              className="text-white text-xl font-medium hover:opacity-80 transition-opacity"
              onClick={(e) => {
                e.stopPropagation();
                if (e.currentTarget.getAttribute('href') && e.currentTarget.getAttribute('href') !== '#') {
                  setMobileMenuOpen(false);
                }
              }}
            >
              Community
            </a>
            
            <a 
              href="#" 
              className="text-white text-xl font-medium hover:opacity-80 transition-opacity"
              onClick={(e) => {
                e.stopPropagation();
                if (e.currentTarget.getAttribute('href') && e.currentTarget.getAttribute('href') !== '#') {
                  setMobileMenuOpen(false);
                }
              }}
            >
              Contact Us
            </a>
            
            {/* Additional Links */}
            <a 
              href="#" 
              className="text-white text-xl font-medium hover:opacity-80 transition-opacity"
              onClick={(e) => {
                e.stopPropagation();
                if (e.currentTarget.getAttribute('href') && e.currentTarget.getAttribute('href') !== '#') {
                  setMobileMenuOpen(false);
                }
              }}
            >
              Bucket List
            </a>
            
            <a 
              href="#" 
              className="text-white text-xl font-medium hover:opacity-80 transition-opacity"
              onClick={(e) => {
                e.stopPropagation();
                if (e.currentTarget.getAttribute('href') && e.currentTarget.getAttribute('href') !== '#') {
                  setMobileMenuOpen(false);
                }
              }}
            >
              Shop
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
