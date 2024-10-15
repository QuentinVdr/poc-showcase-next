import Image from 'next/image';
import { getDocumentBySlug } from 'outstatic/server';
import markdownToHtml from 'src/utils/MarkdownToHtml';

export async function generateMetadata({ params: { locale, postSlug } }) {
  const post = await getPostBySlug(locale, postSlug);

  return {
    title: post.title,
    description: post?.description || post.content,
    openGraph: {
      title: post.title,
      description: post?.description || post.content,
      // url: absoluteUrl(`/posts/${postSlug}`),
      type: 'article',
      images: [
        {
          // url: absoluteUrl(post?.coverImage || '/images/og-image.png'),
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params: { locale, postSlug } }) {
  const post = await getPostBySlug(locale, postSlug);

  return (
    <main className="mx-auto my-4 w-10/12 max-w-6xl">
      {!post ? (
        <p>pas de post trouvé</p>
      ) : (
        <div className="prose lg:prose-xl">
          {post.coverImage && (
            <div className="relative mb-2 h-52 w-full sm:mx-0 md:mb-4 md:h-96">
              <Image src={post.coverImage} alt={post.title} fill className="object-cover object-center" priority />
            </div>
          )}
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      )}
    </main>
  );
}

async function getPostBySlug(locale, slug) {
  const post = getDocumentBySlug(`${locale}-posts`, slug, [
    'coverImage',
    'title',
    'description',
    'publishedAt',
    'content',
  ]);

  const content = await markdownToHtml(post.content);

  return { ...post, content };
}
