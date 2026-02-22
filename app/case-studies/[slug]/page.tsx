import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import CaseStudyDetail from '@/components/CaseStudy/CaseStudyDetail';
import PageWrapper from '@/components/Template/PageWrapper';
import caseStudies from '@/data/case-studies';
import { SITE_URL } from '@/lib/utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.id === slug);
}

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }

  const url = `${SITE_URL}/case-studies/${caseStudy.id}`;

  return {
    title: caseStudy.title,
    description: caseStudy.publicSummary,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.publicSummary,
      url,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: caseStudy.title,
      description: caseStudy.publicSummary,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <PageWrapper>
      <CaseStudyDetail caseStudy={caseStudy} />
    </PageWrapper>
  );
}
