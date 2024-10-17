import { availableLanguages } from '@i18n/availableLanguages';
import { DOMAIN } from '@utils/Constant';
import { getDocuments } from 'outstatic/server';

export default async function sitemap() {
  // Fetch all posts
  const postEntries = availableLanguages
    .map((locale) => {
      const posts = getDocuments(`${locale}-posts`, ['slug', 'publishedAt']);
      return posts.map((post) => ({
        url: `${DOMAIN}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: 'weekly',
        priority: 0.7,
      }));
    })
    .flat();

  // Define static pages
  const staticPages = [
    {
      url: DOMAIN,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${DOMAIN}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${DOMAIN}/blog`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // Combine and return all entries
  return [...staticPages, ...postEntries];
}
