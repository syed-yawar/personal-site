import type { Metadata } from 'next';
import Link from 'next/link';

import CaseStudyCard from '@/components/CaseStudy/CaseStudyCard';
import { PersonSchema, WebSiteSchema } from '@/components/Schema';
import Hero from '@/components/Template/Hero';
import PageWrapper from '@/components/Template/PageWrapper';
import caseStudies from '@/data/case-studies';

export const metadata: Metadata = {
  title: 'Home (Legacy)',
  description:
    'Legacy portfolio home. Visit the main site for the current experience.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function HomeV1Page() {
  const featuredCaseStudies = caseStudies.slice(0, 3);

  return (
    <PageWrapper>
      <PersonSchema />
      <WebSiteSchema />
      <Hero />

      <section
        className="home-section home-section--featured"
        aria-labelledby="featured-case-studies"
      >
        <h2 id="featured-case-studies" className="section-title">
          <span className="section-title-text">Featured Case Studies</span>
        </h2>
        <p className="section-desc">
          Delivery narratives across healthcare, marketplace, and AI product
          platforms.
        </p>

        <div className="projects-grid home-featured-grid">
          {featuredCaseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>

        <div className="home-cta">
          <Link href="/case-studies" className="button button-secondary">
            View All Case Studies
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
