export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/outstatic/', '/api/outstatic/'],
    },
    sitemap: 'https://localhost:3000/sitemap.xml', // TODO : Change this URL
    host: 'https://localhost:3000', // TODO : Change this URL
  };
}
