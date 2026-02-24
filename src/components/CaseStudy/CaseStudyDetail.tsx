import type { ReactNode } from 'react';
import Image from 'next/image';

import MermaidDiagram from '@/components/Template/MermaidDiagram';
import type { CaseStudy } from '@/types/content';

interface CaseStudyDetailProps {
  caseStudy: CaseStudy;
}

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

interface ArchitectureDiagram {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

const architectureDiagrams: Record<string, ArchitectureDiagram> = {
  'fitnescity-health-platform': {
    src: '/images/case-studies/fitnescity-architecture-sanitized.svg',
    alt: 'Sanitized Fitnescity platform architecture diagram',
    caption: 'Sanitized architecture diagram of the Fitnescity workflow.',
    width: 1200,
    height: 680,
  },
};

function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="resume-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function BulletList({
  items,
  emptyText,
}: {
  items: string[] | undefined;
  emptyText: string;
}) {
  if (!items || items.length === 0) {
    return <p>{emptyText}</p>;
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={`${item}-${index}`}>{item}</li>
      ))}
    </ul>
  );
}

function formatTimeline(caseStudy: CaseStudy): string {
  const formatMonthYear = (date: string | undefined) => {
    if (!date) {
      return '';
    }

    return new Date(`${date}T12:00:00`).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });
  };

  const start = formatMonthYear(caseStudy.timeline.start);
  const end = caseStudy.timeline.end
    ? formatMonthYear(caseStudy.timeline.end)
    : 'Present';

  return `${start} - ${end}`;
}

export default function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  const narrative = caseStudy.narrative;
  const architecture = narrative?.architecture;
  const lessons = (
    narrative as (CaseStudy['narrative'] & { lessons?: string[] }) | undefined
  )?.lessons;
  const architectureDiagram = architectureDiagrams[caseStudy.id];

  return (
    <article className="about-page">
      <header className="about-header">
        <p className="page-subtitle">
          {caseStudy.client} · {caseStudy.sector} · {formatTimeline(caseStudy)}
        </p>
        <h1 className="page-title">{caseStudy.title}</h1>
        <p>{caseStudy.publicSummary}</p>
      </header>

      <section className="resume-section">
        <h2>Snapshot</h2>
        <p>
          <strong>Role:</strong> {caseStudy.role}
        </p>
        <p>
          <strong>Sanitized:</strong> {caseStudy.sanitized ? 'Yes' : 'No'}
        </p>
        <div className="project-card-tech" aria-label="Technology stack">
          {caseStudy.stack.map((technology) => (
            <span key={technology} className="tech-tag">
              {technology}
            </span>
          ))}
        </div>
      </section>

      <Section id="context" title="Context">
        <p>
          {narrative?.context ||
            'Context is not available for this case study.'}
        </p>
      </Section>

      <Section id="challenge" title="Challenge">
        <p>
          {narrative?.challenge ||
            'Challenge details are not available for this case study.'}
        </p>
      </Section>

      <Section id="constraints" title="Constraints">
        <BulletList
          items={narrative?.constraints}
          emptyText="Constraints were not published for this case study."
        />
      </Section>

      <Section id="architecture" title="Architecture">
        <p>
          {architecture?.overview ||
            'Architecture overview is not available for this case study.'}
        </p>

        <h3>Frontend</h3>
        <BulletList
          items={architecture?.frontend}
          emptyText="Frontend architecture details are unavailable."
        />

        <h3>Backend</h3>
        <BulletList
          items={architecture?.backend}
          emptyText="Backend architecture details are unavailable."
        />

        <h3>Integrations</h3>
        <BulletList
          items={architecture?.integrations}
          emptyText="Integration details are unavailable."
        />

        <h3>Data Flow</h3>
        <BulletList
          items={architecture?.dataFlow}
          emptyText="Data flow details are unavailable."
        />

        {architecture?.mermaid && (
          <div className="mermaid-section">
            <MermaidDiagram code={architecture.mermaid} />
          </div>
        )}

        {architectureDiagram && (
          <figure>
            <Image
              src={architectureDiagram.src}
              alt={architectureDiagram.alt}
              width={architectureDiagram.width}
              height={architectureDiagram.height}
            />
            <figcaption>{architectureDiagram.caption}</figcaption>
          </figure>
        )}
      </Section>

      <Section id="execution" title="Execution">
        <h3>Responsibilities</h3>
        <BulletList
          items={narrative?.responsibilities}
          emptyText="Responsibilities are not available for this case study."
        />

        <h3>Delivery</h3>
        <BulletList
          items={narrative?.execution}
          emptyText="Execution details are not available for this case study."
        />
      </Section>

      <Section id="outcomes" title="Outcomes">
        <BulletList
          items={narrative?.outcomes}
          emptyText="Outcomes are not available for this case study."
        />
      </Section>

      <Section id="leadership" title="Leadership">
        <BulletList
          items={narrative?.leadershipSignals}
          emptyText="Leadership details are not available for this case study."
        />
      </Section>

      <Section id="lessons" title="Lessons">
        <BulletList
          items={lessons}
          emptyText="Lessons are intentionally omitted in the public sanitized narrative."
        />
      </Section>
    </article>
  );
}
