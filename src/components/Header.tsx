// Ensure this is a client component
'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link'; // Import from next/link
import { usePathname, useRouter } from 'next/navigation'; // Import from next/navigation
import { locales, localePrefix } from '../../../middleware'; // Adjust path if middleware.ts is elsewhere

const Header = () => {
  const t = useTranslations('Header');
  const pathname = usePathname(); // From next/navigation
  const router = useRouter(); // From next/navigation

  // Helper function to construct the new path with the correct locale prefix
  const getLocalizedPath = (currentPath: string, newLocale: string) => {
    const pathSegments = currentPath.split('/').filter(Boolean);
    const currentLocale = locales.find(loc => pathSegments[0] === loc);

    // Remove current locale prefix if it exists
    if (currentLocale) {
      pathSegments.shift(); 
    }

    // Construct the new path
    let newPath = pathSegments.join('/');
    if (newPath.startsWith('/')) {
      newPath = newPath.substring(1);
    }

    if (localePrefix === 'always' || (localePrefix === 'as-needed' && newLocale !== 'en')) {
      return `/${newLocale}${newPath ? '/' + newPath : ''}`;
    }
    return `/${newPath || ''}`;
  };

  const handleLocaleChange = (newLocale: string) => {
    const newPath = getLocalizedPath(pathname, newLocale);
    router.push(newPath);
  };

  // Determine the current locale from the pathname for the select default value
  const getCurrentLocaleFromPath = () => {
    const pathSegments = pathname.split('/').filter(Boolean);
    return locales.find(loc => pathSegments[0] === loc) || 'en'; // Default to 'en'
  };

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href={getLocalizedPath(pathname, getCurrentLocaleFromPath())} className="text-2xl font-bold hover:text-gray-300 transition-colors">
          {t('siteTitle')}
        </Link>
        <ul className="flex space-x-4 items-center">
          <li><Link href={getLocalizedPath(pathname, getCurrentLocaleFromPath())} className="hover:text-gray-300 transition-colors">{t('home')}</Link></li>
          {/* Update other links similarly if they need to maintain the current locale context */}
          {/* For simplicity, these are now root-relative, which might change locale if prefix is 'always' */}
          <li><Link href="/services" className="hover:text-gray-300 transition-colors">{t('services')}</Link></li>
          <li><Link href="/testimonials" className="hover:text-gray-300 transition-colors">{t('testimonials')}</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300 transition-colors">{t('contact')}</Link></li>
          <li className="relative">
            <select 
              onChange={(e) => handleLocaleChange(e.target.value)} 
              value={getCurrentLocaleFromPath()}
              className="bg-gray-700 text-white p-2 rounded hover:bg-gray-600 transition-colors appearance-none cursor-pointer"
            >
              <option value="en">EN</option>
              <option value="ro">RO</option>
            </select>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
