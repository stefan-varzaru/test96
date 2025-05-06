import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';

export const locales = ['en', 'ro'] as const; // e.g., ['en', 'ro']
export const localePrefix = 'as-needed'; // Or 'always' or 'never'

// Define your pathnames for each locale if you have translated paths
// If not, you can omit pathnames or provide a simple structure.
// Example for simple structure (no translated paths):
export const pathnames = {
  '/': '/',
  // Add other paths if needed, e.g.:
  // '/about': '/about',
  // '/services': '/services',
};

export const {Link, redirect, usePathname, useRouter, getPathname} = 
  createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});
