/**
 * Navigation item with dropdown support
 */
export interface NavItem {
  name: string;
  href: string;
  dropdown?: boolean;
  items?: DropdownItem[];
}

/**
 * Dropdown menu item
 */
export interface DropdownItem {
  name: string;
  href: string;
  description?: boolean;
}

/**
 * Testimonial item type
 */
export interface Testimonial {
  id: string;
  author: string;
  location: string;
  rating: number;
  text: string;
  image?: string;
}

/**
 * Travel destination type
 */
export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  season?: string;
  activities?: string[];
}