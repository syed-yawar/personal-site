import type { Metadata } from 'next';

import CaseStudyList from '@/components/CaseStudy/CaseStudyList';
import { WebPageSchema } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import caseStudies from '@/data/case-studies';

const PAGE_DESCRIPTION =
  'Deep delivery case studies covering architecture, execution, and outcomes.';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: PAGE_DESCRIPTION,
  alternates: { canonical: '/case-studies' },
  openGraph: {
    url: '/case-studies',
    title: 'Case Studies',
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    title: 'Case Studies',
    description: PAGE_DESCRIPTION,
  },
};

export default function CaseStudiesPage() {
  return (
    <PageWrapper>
      <WebPageSchema
        title="Case Studies"
        description={PAGE_DESCRIPTION}
        path="/case-studies"
        type="CollectionPage"
      />
      <CaseStudyList caseStudies={caseStudies} />
    </PageWrapper>
  );
}
