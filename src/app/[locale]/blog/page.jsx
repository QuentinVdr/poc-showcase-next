import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { getDocuments } from 'outstatic/server';

export default function BlogPage({ params: { locale } }) {
  const posts = getPostList(locale);

  return (
    <main className="mx-auto my-4 flex w-10/12 max-w-6xl flex-col gap-4">
      {posts.map((post) => (
        <article key={post.title} className="max-w-64 rounded-lg bg-white shadow">
          <Link key={post.title} href={`/blog/${post.slug}`} className="text-inherit no-underline">
            <Image
              src={post.coverImage}
              alt={post.title}
              className="h-auto w-full rounded-t-lg"
              width={0}
              height={0}
              sizes="(min-width: 768px) 347px, 192px"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{post.title}</h2>
              <p className="text-gray-700">{post.description}</p>
            </div>
          </Link>
        </article>
      ))}
    </main>
  );
}

function getPostList(locale) {
  return getDocuments(`${locale}-posts`, ['coverImage', 'title', 'description', 'slug']);
}
