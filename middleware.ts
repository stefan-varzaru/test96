import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix} from '@/navigation'; // Import from your navigation.ts

export default createMiddleware({
  defaultLocale: 'en',
  locales,
  localePrefix
});

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/([\\w-]+)/:path*', // Adjusted to match typical locale prefixes

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|api|.*\\..*).*)'
  ]
};

