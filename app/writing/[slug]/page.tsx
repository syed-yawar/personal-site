import Markdown from 'markdown-to-jsx';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ArticleSchema, BreadcrumbSchema } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { SITE_URL } from '@/lib/utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  const url = `${SITE_URL}/writing/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.date,
      images: [
        {
          url: '/images/yawar-profile.jpeg',
          width: 1200,
          height: 630,
          alt: `${post.title} - Blog Post`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: ['/images/yawar-profile.jpeg'],
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <PageWrapper>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Writing', url: '/writing' },
          { name: post.title, url: `/writing/${post.slug}` },
        ]}
      />
      <ArticleSchema post={post} />
      <article className="post-page">
        <header className="post-header">
          <time className="post-date" dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
          <h1 className="post-title">{post.title}</h1>
          <p className="post-description">{post.description}</p>
        </header>
        <div className="prose">
          <Markdown>{post.content}</Markdown>
        </div>
      </article>
    </PageWrapper>
  );
}
