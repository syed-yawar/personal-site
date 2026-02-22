import type { CaseStudy } from '@/types/content';

import CaseStudyCard from './CaseStudyCard';

interface CaseStudyListProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudyList({ caseStudies }: CaseStudyListProps) {
  return (
    <section className="projects-page">
      <header className="projects-header">
        <h1 className="page-title">Case Studies</h1>
        <p className="page-subtitle">
          Delivery narratives across healthcare, marketplaces, and AI products.
        </p>
      </header>

      <div className="projects-grid">
        {caseStudies.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
        ))}
      </div>
    </section>
  );
}
