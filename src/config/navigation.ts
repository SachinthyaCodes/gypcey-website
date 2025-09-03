import { NavItem } from '@/types';

/**
 * Experience dropdown items
 */
export const experienceDropdownItems = [
  { name: "Adventures", href: "#" },
  { name: "Wellness", href: "#" },
  { name: "Stay & Work", href: "#" },
  { name: "Surf Camp", href: "#" },
  { name: "Wild Safari", href: "#" },
  { name: "Lagoon Safari", href: "#" },
  { name: "Diving", href: "#" },
  { name: "Fishing Tours", href: "#" },
];

/**
 * Essentials dropdown items
 */
export const essentialsDropdownItems = [
  { name: "Travel Guides", href: "#" },
  { name: "Travel Health", href: "#" },
  { name: "BLOG", href: "#" },
  { name: "Sun-drenched shores", href: "#", description: true },
  { name: "Rolling waves. Pure island energy on the East Coast", href: "#", description: true },
];

/**
 * Main navigation links
 */
export const navigationLinks: NavItem[] = [
  { name: "Trips", href: "#", dropdown: true, items: [] },
  { name: "Experience", href: "#", dropdown: true, items: experienceDropdownItems },
  { name: "Essentials", href: "#", dropdown: true, items: essentialsDropdownItems },
  { name: "About Gypcey", href: "#" },
  { name: "Community", href: "#" },
  { name: "Contact Us", href: "#" },
];

/**
 * Site configuration
 */
export const siteConfig = {
  name: "Gypcey",
  tagline: "SRI LANKAN YOUTHFUL ESCAPES",
  description: "Experience the beauty of Sri Lanka with Gypcey travel guides",
  socialLinks: {
    facebook: "https://facebook.com/gypcey",
    instagram: "https://instagram.com/gypcey",
    twitter: "https://twitter.com/gypcey",
  }
};