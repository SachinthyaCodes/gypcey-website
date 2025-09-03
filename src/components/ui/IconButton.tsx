'use client';

import React from 'react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'transparent' | 'white';
  size?: 'sm' | 'md' | 'lg';
  ariaLabel: string;
  children?: React.ReactNode;
}

/**
 * IconButton component for buttons with icons
 */
export default function IconButton({
  icon,
  variant = 'primary',
  size = 'md',
  ariaLabel,
  children,
  className = '',
  ...props
}: IconButtonProps) {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center rounded focus:outline-none transition-all duration-300';
  
  // Size variants
  const sizeStyles = {
    sm: 'p-1',
    md: 'p-2',
    lg: 'p-3',
  };
  
  // Color variants
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-orange-500 hover:bg-orange-600 text-white',
    transparent: 'bg-transparent hover:bg-black/10',
    white: 'bg-white/20 hover:bg-white/30 text-white',
  };
  
  // Icon sizes
  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };
  
  return (
    <button
      aria-label={ariaLabel}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span className={iconSizes[size]}>
        {icon}
      </span>
      {children && <span className="ml-2">{children}</span>}
    </button>
  );
}