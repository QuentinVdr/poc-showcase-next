import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';
import { availableLanguages } from './availableLanguages';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: availableLanguages,

  // Used when no locale matches
  defaultLocale: 'fr',
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation(routing);
