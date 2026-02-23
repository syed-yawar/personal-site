import type { Metadata } from 'next';

import CaseStudyList from '@/components/CaseStudy/CaseStudyList';
import { WebPageSchema } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import caseStudies from '@/data/case-studies';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Deep delivery case studies covering architecture, execution, and outcomes.',
};

export default function CaseStudiesPage() {
  return (
    <PageWrapper>
      <WebPageSchema
        title="Case Studies"
        description="Deep delivery case studies covering architecture, execution, and outcomes."
        path="/case-studies"
        type="CollectionPage"
      />
      <CaseStudyList caseStudies={caseStudies} />
    </PageWrapper>
  );
}
