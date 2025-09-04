'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navigationLinks, experienceDropdownItems } from "@/config/navigation";
import useScrollAndClickOutside from "@/hooks/useScrollAndClickOutside";
import IconButton from "@/components/ui/IconButton";
import { DropdownItem } from "@/components/ui/Dropdown";
import { NavItem } from "@/types";

/**
 * Main navigation bar component for the website
 * Handles responsive behavior, dropdowns, and scroll effects
 */
export default function Navbar() {
  // Use our custom hook for scroll and mobile menu state
  const mobileMenu = useScrollAndClickOutside({
    scrollThreshold: 50,
    onClickOutsideElements: ['.mobile-menu-bg', '.menu-toggle-btn'],
    closeOnClickOutside: true
  });
  
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  // Handle mobile dropdown toggle
  const toggleMobileDropdown = (linkName: string) => {
    setActiveMobileDropdown(activeMobileDropdown === linkName ? null : linkName);
  };

  return (
    <nav 
      className={`w-full fixed top-0 z-50 transition-all duration-300 font-roboto ${
        mobileMenu.isScrolled 
          ? 'glass-nav-dark shadow-lg' 
          : 'glass-nav'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo - changes based on scroll state */}
        <Link href="/" className="flex items-center gap-2" title="Gypcey Home">
          <Image 
            src={mobileMenu.isScrolled ? "/images/Full Logo 1.png" : "/images/Full Logo 2.png"} 
            alt="Gypcey Logo" 
            width={140} 
            height={40} 
            priority 
          />
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navigationLinks.map((link: NavItem) => (
            <div key={link.name} className="relative group">
              <a
                href={link.href}
                className={`text-xs hover:text-blue-400 transition-colors px-2 py-1 ${
                  mobileMenu.isScrolled ? 'text-white' : 'text-gray-900 font-medium'
                } flex items-center`}
              >
                {link.name}
                {link.dropdown && (
                  <span className="ml-1">&#9662;</span>
                )}
              </a>
              
              {/* Dropdown menu */}
              {link.dropdown && link.items && link.items.length > 0 && (
                <div className="absolute left-0 mt-1 w-64 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden dropdown-menu">
                  {/* Experience Dropdown */}
                  {link.name === "Experience" && (
                    <div className="p-4 grid grid-cols-2 gap-x-8 gap-y-2">
                      <div className="col-span-1">
                        <a href="#" className="text-sm text-gray-700 font-medium block mb-2 hover:text-blue-500 transition-colors">Adventures</a>
                        <a href="#" className="text-sm text-gray-700 block mb-2 hover:text-blue-500 transition-colors">Wellness</a>
                        <a href="#" className="text-sm text-gray-700 block mb-2 hover:text-blue-500 transition-colors">Stay & Work</a>
                      </div>
                      <div className="col-span-1">
                        <a href="#" className="text-sm text-gray-700 font-medium block mb-2 hover:text-blue-500 transition-colors">Surf Camp</a>
                        <a href="#" className="text-sm text-gray-700 block mb-2 hover:text-blue-500 transition-colors">Wild Safari</a>
                        <a href="#" className="text-sm text-gray-700 block mb-2 hover:text-blue-500 transition-colors">Lagoon Safari</a>
                        <a href="#" className="text-sm text-gray-700 block mb-2 hover:text-blue-500 transition-colors">Diving</a>
                        <a href="#" className="text-sm text-gray-700 block mb-2 hover:text-blue-500 transition-colors">Fishing Tours</a>
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
          <Link href="#" className={`flex items-center gap-2 text-xs ${mobileMenu.isScrolled ? 'text-white' : 'text-gray-900'}`} title="View Bucket List">
            <div className={`${mobileMenu.isScrolled ? 'bg-blue-600' : 'bg-blue-500'} p-1 rounded flex items-center justify-center`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
              </svg>
            </div>
            Bucket List
          </Link>
          <Link href="#" className={`flex items-center gap-2 text-xs ${mobileMenu.isScrolled ? 'text-white' : 'text-gray-900'}`} title="Go to Shop">
            <div className={`${mobileMenu.isScrolled ? 'bg-orange-600' : 'bg-orange-500'} p-1 rounded flex items-center justify-center`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </div>
            Shop
          </Link>
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
                mobileMenu.isScrolled ? 'filter invert' : ''
              }`}
            />
          </div>
          {/* Burger Menu Button */}
          <IconButton
            icon={
              mobileMenu.isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <div className="w-6 h-5 flex flex-col justify-between relative">
                  <span className={`block w-full h-0.5 transition-all duration-300 ease-in-out rounded-full bg-current`}></span>
                  <span className={`block w-full h-0.5 transition-all duration-300 ease-in-out rounded-full bg-current`}></span>
                  <span className={`block w-full h-0.5 transition-all duration-300 ease-in-out rounded-full bg-current`}></span>
                </div>
              )
            }
            variant={mobileMenu.isOpen ? "white" : mobileMenu.isScrolled ? "transparent" : "transparent"}
            ariaLabel={mobileMenu.isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="menu-toggle-btn z-[60]"
            onClick={mobileMenu.toggle}
          />
        </div>
      </div>
      
      {/* Full Screen Mobile Menu - Exactly as in the reference image */}
      <div 
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          mobileMenu.isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
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
                  mobileMenu.close();
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
                <div className="bg-gray-100 mx-10 rounded-lg py-2 px-4 text-left">
                  {experienceDropdownItems.map((item, index) => (
                    <DropdownItem
                      key={`experience-${index}`}
                      href={item.href}
                      className="py-3"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent event bubbling
                        // Only close if it's a link to another page (not a hash link)
                        if (item.href && item.href !== '#') {
                          mobileMenu.close();
                        }
                      }}
                    >
                      {item.name}
                    </DropdownItem>
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
                <div className="bg-gray-100 mx-10 rounded-lg py-2 px-4 text-left">
                  <a href="#" className="block py-3 text-gray-700 text-base hover:text-blue-600 transition-colors" onClick={(e) => e.stopPropagation()}>
                    Travel Guides
                  </a>
                  <a href="#" className="block py-3 text-gray-700 text-base hover:text-blue-600 transition-colors" onClick={(e) => e.stopPropagation()}>
                    Travel Health
                  </a>
                  <a href="#" className="block py-3 text-gray-700 text-base hover:text-blue-600 transition-colors" onClick={(e) => e.stopPropagation()}>
                    BLOG
                  </a>
                  <div className="mt-4 border-t border-gray-300 pt-3">
                    <a href="#" className="block py-2 text-gray-700 text-base leading-snug hover:text-blue-600 transition-colors" onClick={(e) => e.stopPropagation()}>
                      Sun-drenched shores
                    </a>
                    <a href="#" className="block py-2 text-gray-700 text-base leading-snug hover:text-blue-600 transition-colors" onClick={(e) => e.stopPropagation()}>
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
                  mobileMenu.close();
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
                  mobileMenu.close();
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
                  mobileMenu.close();
                }
              }}
            >
              Contact Us
            </a>
            
            {/* No additional links at the bottom in mobile view */}
          </div>
        </div>
      </div>
    </nav>
  );
}
