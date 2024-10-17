export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/outstatic/', '/api/outstatic/'],
    },
    sitemap: process.env.NEXT_PUBLIC_DOMAIN || 'https://localhost:3000/sitemap.xml',
    host: process.env.NEXT_PUBLIC_DOMAIN || 'https://localhost:3000',
  };
}
