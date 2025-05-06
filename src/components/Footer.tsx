
// Ensure this is a client component if using hooks like useTranslations
// Although for simple text like copyright, it might not be strictly necessary
// But let's add it for consistency with Header
'use client';

import React from 'react';
import { useTranslations } from 'next-intl'; // Import directly for v4.1

const Footer = () => {
  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          {/* Placeholder contact info */}
          <p>{t('placeholder_address')}</p>
          <p>{t('placeholder_phone')}</p>
          <p>{t('placeholder_email')}</p>
        </div>
        <p className="text-sm">
          {t('copyright', { year: currentYear })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

