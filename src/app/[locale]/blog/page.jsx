import { getPostList } from '@api/OutstaticRequest';
import { Link } from '@i18n/routing';
import { useLocale } from 'next-intl';

export default function BlogPage() {
  const locale = useLocale();
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
