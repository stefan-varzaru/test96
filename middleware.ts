import createMiddleware from 'next-intl/middleware';

// Define locales and localePrefix directly in this file:
export const locales = ['en', 'ro'] as const;
export const localePrefix = 'as-needed'; // Or 'always' or 'never'

export default createMiddleware({
  locales: locales, // Use the 'locales' defined above
  defaultLocale: 'en',
  localePrefix: localePrefix, // Use the 'localePrefix' defined above
  pathnames: {}
});

export const config = {
  matcher: ['/', '/(ro|en)/:path*', '/((?!api|_next|_vercel|.*\..*).*)"]
};
