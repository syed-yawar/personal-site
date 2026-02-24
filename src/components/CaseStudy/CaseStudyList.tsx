'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import type { CaseStudy } from '@/types/content';
import CaseStudyCardV2 from '@/components/HomeV2/CaseStudyCardV2';

interface CaseStudyListProps {
  caseStudies: CaseStudy[];
}

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function CaseStudyList({ caseStudies }: CaseStudyListProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      className="featured-work-v2 case-studies-page"
      aria-labelledby="case-studies-heading"
    >
      <motion.header
        className="featured-work-v2-header"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
      >
        <h1 id="case-studies-heading" className="section-title-v2">
          Case Studies
        </h1>
        <p className="section-desc-v2">
          Delivery narratives across healthcare, marketplaces, AI products, and
          service operations. Architecture, execution, and outcomes.
        </p>
      </motion.header>

      <motion.div
        className="featured-work-v2-grid"
        variants={stagger}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {caseStudies.map((cs) => (
          <motion.div key={cs.id} variants={cardReveal}>
            <CaseStudyCardV2 caseStudy={cs} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
