
// Ensure this is a client component
'use client';
import React from 'react';
import { useTranslations } from 'next-intl'; // This one is correct
import { Link, usePathname } from 'next-intl/navigation'; // Corrected path for Link and usePathname

const Header = () => {
  const t = useTranslations('Header');
  const pathname = usePathname(); // Gets the path *without* the locale

  // Basic check if current path is active (adjust logic as needed)
  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          YourLogo
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className={`hover:text-blue-600 ${isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>
            {t('home')}
          </Link>
          {/* Add links for Services, Testimonials, Contact - adjust hrefs as needed */}
          {/* Example: <Link href="/services" className={`hover:text-blue-600 ${isActive('/services') ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>{t('services')}</Link> */}
          <span className="text-gray-700 cursor-pointer hover:text-blue-600">{t('services')}</span>
          <span className="text-gray-700 cursor-pointer hover:text-blue-600">{t('testimonials')}</span>
          <span className="text-gray-700 cursor-pointer hover:text-blue-600">{t('contact')}</span>
        </div>
        <div className="flex items-center space-x-3">
          {/* Language Switcher - Simple Example */}
          <Link href={pathname} locale="en" className="text-sm font-medium text-gray-500 hover:text-gray-900">
            {t('language_en')}
          </Link>
          <span className="text-gray-300">|</span>
          <Link href={pathname} locale="ro" className="text-sm font-medium text-gray-500 hover:text-gray-900">
            {t('language_ro')}
          </Link>
          {/* Add Mobile Menu Button Here if needed */}
        </div>
      </nav>
    </header>
  );
};

export default Header;

