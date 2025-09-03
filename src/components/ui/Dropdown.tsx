'use client';

import React from 'react';
import Link from 'next/link';

interface DropdownItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  isDescription?: boolean;
}

/**
 * Dropdown menu item component that can be used in navigation menus
 * @param href - Link destination
 * @param children - Content of the dropdown item
 * @param className - Additional CSS classes
 * @param onClick - Click handler
 * @param isDescription - Whether this item is a description (affects styling)
 */
export const DropdownItem: React.FC<DropdownItemProps> = ({
  href,
  children,
  className = '',
  onClick,
  isDescription = false
}) => {
  const baseClasses = isDescription
    ? 'block py-2 text-gray-700 text-base leading-snug hover:text-blue-600 transition-colors'
    : 'block py-3 text-gray-700 text-base hover:text-blue-600 transition-colors';
    
  const classes = `${baseClasses} ${className}`;

  return (
    <Link 
      href={href}
      className={classes}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

interface DropdownContainerProps {
  children: React.ReactNode;
  isVisible: boolean;
  className?: string;
  isMobile?: boolean;
}

/**
 * Container for dropdown menu items
 * @param children - Dropdown menu items
 * @param isVisible - Whether the dropdown is visible
 * @param className - Additional CSS classes
 * @param isMobile - Whether this is a mobile dropdown (affects styling)
 */
export const DropdownContainer: React.FC<DropdownContainerProps> = ({
  children,
  isVisible,
  className = '',
  isMobile = false
}) => {
  const mobileClasses = isVisible 
    ? 'max-h-96 opacity-100' 
    : 'max-h-0 opacity-0';
  
  const desktopClasses = isVisible 
    ? 'opacity-100 visible' 
    : 'opacity-0 invisible';
    
  const baseClasses = isMobile
    ? `mt-4 overflow-hidden transition-all duration-500 ease-in-out ${mobileClasses}`
    : `absolute left-0 mt-1 w-64 rounded-md shadow-lg transition-all duration-300 z-50 overflow-hidden dropdown-menu ${desktopClasses}`;
  
  const classes = `${baseClasses} ${className}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default {
  Item: DropdownItem,
  Container: DropdownContainer
};