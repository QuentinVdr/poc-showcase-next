import { Link } from '@i18n/routing';
import { getDocuments } from 'outstatic/server';

export default function BlogPage({ params: { locale } }) {
  const posts = getPostList(locale);

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

function getPostList(locale) {
  return getDocuments(`${locale}-posts`, ['title', 'slug']);
}
