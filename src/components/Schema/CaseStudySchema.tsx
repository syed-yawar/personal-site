import { AUTHOR_NAME, OG_IMAGE_URL, SITE_URL } from '@/lib/utils';
import type { CaseStudy } from '@/types/content';
import JsonLd from './JsonLd';

interface CaseStudySchemaProps {
  caseStudy: CaseStudy;
}

export default function CaseStudySchema({ caseStudy }: CaseStudySchemaProps) {
  const caseStudyUrl = `${SITE_URL}/case-studies/${caseStudy.id}`;

  const caseStudyData: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseStudy.title,
    description: caseStudy.publicSummary,
    image: OG_IMAGE_URL,
    datePublished: caseStudy.timeline.start,
    ...(caseStudy.timeline.end && {
      dateModified: caseStudy.timeline.end,
    }),
    url: caseStudyUrl,
    author: {
      '@type': 'Person',
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': caseStudyUrl,
    },
    keywords: caseStudy.stack.join(', '),
  };

  return <JsonLd data={caseStudyData} />;
}
