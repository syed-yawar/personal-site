import type { Metadata } from 'next';
import Link from 'next/link';

import { WebPageSchema } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import { getAllPosts } from '@/lib/posts';

const PAGE_DESCRIPTION =
  'Thoughts on engineering, architecture, delivery, and building products.';

export const metadata: Metadata = {
  title: 'Writing',
  description: PAGE_DESCRIPTION,
  alternates: { canonical: '/writing' },
  openGraph: {
    url: '/writing',
    title: 'Writing',
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    title: 'Writing',
    description: PAGE_DESCRIPTION,
  },
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <PageWrapper>
      <WebPageSchema
        title="Writing"
        description={PAGE_DESCRIPTION}
        path="/writing"
        type="CollectionPage"
      />
      <div className="writing-page">
        <header className="writing-header">
          <div className="writing-header-row">
            <h1 className="page-title">Writing</h1>
          </div>
          <p className="section-desc-v2">{PAGE_DESCRIPTION}</p>
        </header>

        <div className="writing-list">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="writing-item"
            >
              <time className="writing-date" dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
              <h2 className="writing-title">{post.title}</h2>
              <p className="writing-description">{post.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
