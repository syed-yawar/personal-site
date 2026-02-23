import type { Post } from '@/lib/posts';
import { AUTHOR_NAME, OG_IMAGE_URL, SITE_URL } from '@/lib/utils';
import JsonLd from './JsonLd';

interface ArticleSchemaProps {
  post: Post;
}

export default function ArticleSchema({ post }: ArticleSchemaProps) {
  const articleUrl = `${SITE_URL}/writing/${post.slug}`;

  const articleData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: OG_IMAGE_URL,
    datePublished: post.date,
    dateModified: post.date,
    url: articleUrl,
    author: {
      '@type': 'Person',
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: AUTHOR_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: OG_IMAGE_URL,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
  };

  return <JsonLd data={articleData} />;
}
