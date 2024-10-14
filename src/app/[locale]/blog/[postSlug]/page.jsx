import { getDocumentBySlug } from 'outstatic/server';
import markdownToHtml from 'src/utils/MarkdownToHtml';

export default async function BlogPostPage({ params: { locale, postSlug } }) {
  const post = await getData(locale, postSlug);

  return (
    <main className="mx-auto my-4 w-11/12 max-w-6xl">
      {!post ? (
        <p>pas de post trouvé</p>
      ) : (
        <>
          <h1>{post.title}</h1>
          <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: post.content }} />
        </>
      )}
    </main>
  );
}

async function getData(locale, slug) {
  const post = getDocumentBySlug(`${locale}-posts`, slug, ['title', 'content']);

  const content = await markdownToHtml(post.content);

  return { ...post, content };
}
