'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import type { CaseStudy } from '@/types/content';

interface CaseStudyCardV2Props {
  caseStudy: CaseStudy;
}

export default function CaseStudyCardV2({ caseStudy }: CaseStudyCardV2Props) {
  const statusLabel =
    caseStudy.timeline.status === 'ongoing' ? 'Ongoing' : 'Completed';

  return (
    <motion.article
      className="cs-card-v2"
      itemScope
      itemType="https://schema.org/CreativeWork"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] as const }}
    >
      <Link href={`/case-studies/${caseStudy.id}`} className="cs-card-v2-link">
        <div className="cs-card-v2-header">
          <span className="cs-card-v2-sector">{caseStudy.sector}</span>
          <span
            className="cs-card-v2-status"
            data-status={caseStudy.timeline.status}
          >
            {statusLabel}
          </span>
        </div>

        <h3 className="cs-card-v2-title" itemProp="name">
          {caseStudy.title}
        </h3>

        <p className="cs-card-v2-role">
          {caseStudy.role} · {caseStudy.client}
        </p>

        <p className="cs-card-v2-summary" itemProp="description">
          {caseStudy.publicSummary}
        </p>

        <div className="cs-card-v2-stack" itemProp="keywords">
          {caseStudy.stack.slice(0, 5).map((tech) => (
            <span key={tech} className="cs-card-v2-tag">
              {tech}
            </span>
          ))}
          {caseStudy.stack.length > 5 && (
            <span className="cs-card-v2-tag cs-card-v2-tag--more">
              +{caseStudy.stack.length - 5}
            </span>
          )}
        </div>

        <span className="cs-card-v2-cta">
          Read case study <span aria-hidden="true">→</span>
        </span>
      </Link>
    </motion.article>
  );
}
