'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import { coreTechnologies } from '@/data/home';

export default function TechMarquee() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  const doubled = [...coreTechnologies, ...coreTechnologies];

  return (
    <motion.div
      ref={ref}
      className="tech-marquee"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      aria-label="Technologies I work with"
    >
      <div className="tech-marquee-header">
        <h2 className="tech-marquee-title">Tools & Technologies</h2>
        <p className="tech-marquee-desc">
          Core technologies powering high-performance, scalable web
          applications.
        </p>
      </div>
      <div className="tech-marquee-track">
        <div className="tech-marquee-inner">
          {doubled.map((tech, i) => (
            <span key={`${tech}-${i}`} className="tech-marquee-item">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
