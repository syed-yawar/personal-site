import type { Metadata } from 'next';

import CaseStudyList from '@/components/CaseStudy/CaseStudyList';
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
      <CaseStudyList caseStudies={caseStudies} />
    </PageWrapper>
  );
}
