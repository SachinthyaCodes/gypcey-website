/**
 * Footer links and content configuration
 */
import { SocialType } from '@/components/ui/SocialIcon';

export const footerLinks = [
  { title: 'Travel Packages', href: '/travel-packages' },
  { title: 'Coworking and Coliving', href: '/coworking-coliving' },
  { title: 'Warm Escape', href: '/warm-escape' },
  { title: 'Blog', href: '/blog' },
  { title: 'About Us', href: '/about' }
];

export const socialLinks: { type: SocialType; href: string }[] = [
  { type: 'facebook', href: 'https://facebook.com/gypcey' },
  { type: 'whatsapp', href: 'https://wa.me/yournumber' },
  { type: 'linkedin', href: 'https://linkedin.com/company/gypcey' },
  { type: 'youtube', href: 'https://youtube.com/c/gypcey' },
  { type: 'instagram', href: 'https://instagram.com/gypcey' },
  { type: 'twitter', href: 'https://twitter.com/gypcey' }
];

export const footerContent = {
  aboutSite: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  whatEverYouWant: 'you can add something here',
  copyright: '© 2024 @Ashen. All Rights Reserved.'
};