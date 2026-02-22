import Link from 'next/link';

import type { CaseStudy } from '@/types/content';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

function formatTimeline(caseStudy: CaseStudy): string {
  const formatMonthYear = (date: string | undefined) => {
    if (!date) {
      return '';
    }

    return new Date(`${date}T12:00:00`).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  };

  const start = formatMonthYear(caseStudy.timeline.start);
  const end = caseStudy.timeline.end
    ? formatMonthYear(caseStudy.timeline.end)
    : 'Present';

  return `${start} - ${end}`;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const timeline = formatTimeline(caseStudy);

  return (
    <article className="project-card">
      <Link href={`/case-studies/${caseStudy.id}`} className="project-card-link">
        <div className="project-card-content">
          <header className="project-card-header">
            <h2 className="project-card-title">{caseStudy.title}</h2>
            <p className="project-card-subtitle">
              {caseStudy.client} · {caseStudy.role}
            </p>
          </header>

          <p className="project-card-desc">{caseStudy.publicSummary}</p>

          <p className="project-card-date">{timeline}</p>

          {caseStudy.stack.length > 0 && (
            <div className="project-card-tech" aria-label="Technology stack">
              {caseStudy.stack.slice(0, 6).map((technology) => (
                <span key={technology} className="tech-tag">
                  {technology}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}
