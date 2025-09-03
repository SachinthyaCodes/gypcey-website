/**
 * This file contains utility functions to help manage scale 
 * Since we're using a 125% base scale factor, we might need to adjust some font sizes
 */

/**
 * Scale adjustment utility to help make specific font sizes consistent with 125% zoom
 * @param fontSize The original font size in pixels
 * @returns Adjusted font size that considers global scaling
 */
export const scaleAdjust = (fontSize: number): string => {
  // Since we have a global 125% scaling, we need to adjust font sizes accordingly
  // If you find elements appearing too large or too small, you can tweak this function
  const adjustedSize = fontSize * 0.8; // 1 / 1.25 = 0.8
  return `${adjustedSize}px`;
};

/**
 * Calculate a responsive font size that scales with screen size but respects the 125% global zoom
 * @param minSize Minimum font size in pixels
 * @param maxSize Maximum font size in pixels
 * @returns Responsive font size CSS value using clamp
 */
export const responsiveFontSize = (minSize: number, maxSize: number): string => {
  const minAdjusted = minSize * 0.8;
  const maxAdjusted = maxSize * 0.8;
  
  // Using clamp to create responsive font sizes
  return `clamp(${minAdjusted}px, calc(${minAdjusted}px + ${(maxAdjusted - minAdjusted) / 10}vw), ${maxAdjusted}px)`;
};