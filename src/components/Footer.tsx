'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SocialIcon from "./ui/SocialIcon";
import NewsletterInput from "./ui/NewsletterInput";
import { footerLinks, socialLinks, footerContent } from "@/config/footerLinks";

/**
 * Footer component for the website
 * 
 * Displays website information, navigation links, social media icons,
 * and newsletter subscription form. Includes responsive layouts for
 * mobile and desktop views.
 * 
 * @returns {JSX.Element} Footer component
 */
export default function Footer() {
  return (
    <footer className="relative w-full">
      {/* Background Image with fallback - using #3C3C3C color */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#3C3C3C]"></div>
        <Image 
          src="/images/footer-image.png" 
          alt="Footer background" 
          fill
          className="object-cover"
          priority
          onError={(e) => {
            // If image fails to load, we already have the dark background as fallback
            console.log("Footer image not found, using solid background instead");
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-10">
        {/* Desktop Layout */}
        <div className="hidden md:flex md:flex-row md:justify-between w-full">
          {/* Left Side: About Site and Pages */}
          <div className="flex gap-4">
            {/* About Site Section */}
            <div className="text-white max-w-xs">
              <h3 className="text-sm font-bold uppercase mb-3">About Site</h3>
              <p className="text-xs mb-4 leading-relaxed">
                {footerContent.aboutSite}
              </p>
              <NewsletterInput
                onSubmit={(email) => console.log('Newsletter subscription:', email)}
              />
            </div>

            {/* Middle Divider */}
            <div className="mx-4 border-r border-white/20 h-full"></div>
            
            {/* Pages Section */}
            <div className="text-white">
              <h3 className="text-sm font-bold uppercase mb-3">Pages</h3>
              <ul className="space-y-1">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-xs hover:text-orange-300 transition-colors">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Social Media Section */}
          <div className="text-white ml-auto">
            <h3 className="text-sm font-bold uppercase mb-3">Social Media</h3>
            <div className="flex space-x-3 mb-4">
              {socialLinks.slice(0, 4).map((social, index) => (
                <SocialIcon 
                  key={index} 
                  type={social.type} 
                  href={social.href} 
                />
              ))}
            </div>
            
            <h3 className="text-sm font-bold uppercase mb-2">What Ever You Want</h3>
            <p className="text-xs">
              {footerContent.whatEverYouWant}
            </p>
          </div>
        </div>

        {/* Mobile Layout - Aligned to match the provided design */}
        <div className="md:hidden flex flex-col items-center px-2">
          {/* Logo - Mobile Only */}
          <div className="w-full flex justify-center mb-6">
            <Image 
              src="/images/Full Logo 2.png" 
              alt="Gypcey Logo" 
              width={160} 
              height={50} 
              className="object-contain"
            />
          </div>
          
          {/* About Site Section - Mobile */}
          <div className="w-full mb-6 text-center">
            <h3 className="text-sm font-bold uppercase mb-2 text-white">About Site</h3>
            <p className="text-[10px] mb-3 text-white leading-relaxed mx-auto">
              {footerContent.aboutSite}
            </p>
            <NewsletterInput
              className="w-full mx-auto mb-1" 
              onSubmit={(email) => console.log('Mobile newsletter subscription:', email)}
            />
          </div>

          {/* Two column layout for Pages and Social Media */}
          <div className="w-full grid grid-cols-2 gap-x-0">
            {/* Pages - Mobile (Left Column) */}
            <div className="text-left pl-4">
              <h3 className="text-sm font-bold uppercase mb-2 text-white">Pages</h3>
              <ul className="space-y-0.5 text-[10px] text-white">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="hover:text-orange-300 transition-colors">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media - Mobile (Right Column) */}
            <div className="pr-4">
              <h3 className="text-sm font-bold uppercase mb-2 text-white">Social Media</h3>
              <div className="flex space-x-1.5 mb-3">
                {socialLinks.slice(0, 4).map((social, index) => (
                  <SocialIcon 
                    key={index} 
                    type={social.type} 
                    href={social.href} 
                    size="sm" 
                  />
                ))}
              </div>
              
              <h3 className="text-sm font-bold uppercase mb-1 text-white">What Ever You Want</h3>
              <p className="text-[10px] text-white">
                {footerContent.whatEverYouWant}
              </p>
            </div>
          </div>
        </div>
        
        {/* Copyright - Both Mobile & Desktop */}
        <div className="mt-4 md:mt-8 pt-3 md:pt-4 border-t border-white/20 text-center text-white/80 text-[10px] md:text-xs">
          {footerContent.copyright}
        </div>
      </div>
    </footer>
  );
}