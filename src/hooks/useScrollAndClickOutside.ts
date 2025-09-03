'use client';

import { useState, useEffect } from 'react';

interface UseScrollAndClickOutsideOptions {
  scrollThreshold?: number;
  onClickOutsideElements?: string[];
  closeOnClickOutside?: boolean;
}

/**
 * Custom hook to handle scroll state and click outside functionality
 * @param options - Configuration options
 * @returns Object containing scroll state and related functions
 */
export default function useScrollAndClickOutside({
  scrollThreshold = 50,
  onClickOutsideElements = [],
  closeOnClickOutside = true,
}: UseScrollAndClickOutsideOptions = {}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > scrollThreshold);
    };

    // Handle click outside
    const handleClickOutside = (e: MouseEvent) => {
      if (!closeOnClickOutside) return;
      
      // Check if click is inside any of the specified elements
      const isInsideSpecifiedElements = onClickOutsideElements.some(
        selector => (e.target as Element).closest(selector)
      );
      
      if (isOpen && !isInsideSpecifiedElements) {
        setIsOpen(false);
      }
    };
    
    // Prevent body scrolling when menu is open
    if (isOpen) {
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
  }, [isOpen, closeOnClickOutside, onClickOutsideElements, scrollThreshold]);

  const toggle = () => setIsOpen(!isOpen);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return {
    isScrolled,
    isOpen,
    toggle,
    open,
    close
  };
}