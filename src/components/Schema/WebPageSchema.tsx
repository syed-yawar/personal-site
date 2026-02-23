import { AUTHOR_NAME, OG_IMAGE_URL, SITE_URL } from '@/lib/utils';
import JsonLd from './JsonLd';

interface WebPageSchemaProps {
  title: string;
  description: string;
  path: string;
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
}

export default function WebPageSchema({
  title,
  description,
  path,
  type = 'WebPage',
}: WebPageSchemaProps) {
  const pageUrl = `${SITE_URL}${path}`;

  const webPageData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: title,
    description,
    url: pageUrl,
    image: OG_IMAGE_URL,
    isPartOf: {
      '@type': 'WebSite',
      name: `${AUTHOR_NAME} | Portfolio`,
      url: SITE_URL,
    },
    author: {
      '@type': 'Person',
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
  };

  return <JsonLd data={webPageData} />;
}
