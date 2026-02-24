'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

import type { CaseStudy } from '@/types/content';
import CaseStudyCardV2 from './CaseStudyCardV2';

interface FeaturedWorkProps {
  caseStudies: CaseStudy[];
}

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

export default function FeaturedWork({ caseStudies }: FeaturedWorkProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      className="featured-work-v2"
      aria-labelledby="featured-work-heading"
    >
      <motion.div
        className="featured-work-v2-header"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
      >
        <h2 id="featured-work-heading" className="section-title-v2">
          Featured Work
        </h2>
        <p className="section-desc-v2">
          End-to-end delivery narratives across consumer health, auction
          marketplaces, and AI-powered data products — from architecture
          decisions to production outcomes.
        </p>
      </motion.div>

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

      <motion.div
        className="featured-work-v2-cta"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <Link href="/case-studies" className="button button-secondary">
          View All Case Studies
        </Link>
      </motion.div>
    </section>
  );
}
