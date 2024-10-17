import { availableLanguages } from '@/i18n/availableLanguages';
import { getDocuments } from 'outstatic/server';

export default async function sitemap() {
  // Set your website's URL
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN || 'https://localhost:3000';

  // Fetch all posts
  const postEntries = availableLanguages
    .map((locale) => {
      const posts = getDocuments(`${locale}-posts`, ['slug', 'publishedAt']);
      return posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: 'weekly',
        priority: 0.7,
      }));
    })
    .flat();

  // Define static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // Combine and return all entries
  return [...staticPages, ...postEntries];
}
