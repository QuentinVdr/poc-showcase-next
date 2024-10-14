import { getPostBySlug } from '@api/OutstaticRequest';
import { useLocale } from 'next-intl';

export default function BlogPostPage({ params: { postSlug } }) {
  const locale = useLocale();
  const post = getPostBySlug(locale, postSlug);

  return (
    <main className="mx-auto my-4 w-11/12 max-w-6xl">
      {!post ? (
        <p>pas de post trouvé</p>
      ) : (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </>
      )}
    </main>
  );
}
