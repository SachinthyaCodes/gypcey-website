'use client';

import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isFullWidth?: boolean;
}

/**
 * Button component with multiple variants and sizes
 * @param variant - Button style variant (primary, secondary, outline)
 * @param size - Button size (sm, md, lg)
 * @param isFullWidth - Whether the button should take full width of its container
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isFullWidth = false,
  className = '',
  ...props
}) => {
  // Base classes
  const baseClasses = 'font-roboto rounded-md transition-all duration-300 focus:outline-none';
  
  // Width classes
  const widthClasses = isFullWidth ? 'w-full' : '';
  
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
    outline: 'border border-gray-300 hover:bg-gray-100 text-gray-700'
  };
  
  const classes = [
    baseClasses,
    widthClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  ].join(' ');

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;