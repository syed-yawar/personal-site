import type { Metadata } from 'next';
import Link from 'next/link';

import CaseStudyCard from '@/components/CaseStudy/CaseStudyCard';
import { PersonSchema } from '@/components/Schema';
import Hero from '@/components/Template/Hero';
import PageWrapper from '@/components/Template/PageWrapper';
import caseStudies from '@/data/case-studies';

export const metadata: Metadata = {
  description:
    'Portfolio of Syed Yawar Hussain, Principal Software Engineer focused on architecture, product delivery, and high-trust web platforms.',
};

export default function HomePage() {
  const featuredCaseStudies = caseStudies.slice(0, 3);

  return (
    <PageWrapper>
      <PersonSchema />
      <Hero />

      <section
        className="home-section home-section--featured"
        aria-labelledby="featured-case-studies"
      >
        <h2 id="featured-case-studies" className="section-title">
          <span className="section-title-text">Featured Case Studies</span>
        </h2>
        <p className="section-desc">
          Delivery narratives across healthcare, marketplace, and AI product platforms.
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
