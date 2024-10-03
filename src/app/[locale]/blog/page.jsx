import { Link } from '@i18n/routing';
import { useLocale } from 'next-intl';
import { getDocuments } from 'outstatic/server';

export default function BlogPage() {
  const locale = useLocale();
  const posts = getData(locale);

  return (
    <main className="mx-auto my-4 flex w-11/12 max-w-6xl flex-col gap-4">
      {posts.map((post) => (
        <Link key={post.title} href={`/blog/${post.slug}`}>
          <h2>{post.title}</h2>
        </Link>
      ))}
    </main>
  );
}

function getData(locale) {
  const posts = getDocuments(`${locale}-posts`, ['title', 'slug']);

  console.log('🚀 ~ getData ~ posts:', posts);

  return posts;
}
