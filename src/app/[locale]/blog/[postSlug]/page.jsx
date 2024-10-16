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
      url: `/blog/${postSlug}`,
      type: 'article',
      images: [
        {
          url: post?.coverImage,
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
        <article>
          {post.coverImage && (
            <div className="relative mb-2 h-52 w-full sm:mx-0 md:mb-4 md:h-72 lg:h-96">
              <Image src={post.coverImage} alt={post.title} fill className="object-cover object-center" priority />
            </div>
          )}
          <div className="prose mx-auto w-full self-center md:prose-lg lg:prose-xl">
            <h1>{post.title}</h1>
            <article dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </article>
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
