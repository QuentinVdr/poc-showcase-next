import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
  },
};

export default withNextIntl(nextConfig);
