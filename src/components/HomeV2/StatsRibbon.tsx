'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { careerStats } from '@/data/home';

function CountUp({
  target,
  suffix,
  active,
}: {
  target: number;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame: number;
    const duration = 1200;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return (
    <span className="stats-ribbon-value">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsRibbon() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      className="stats-ribbon"
      role="region"
      aria-label="Experience statistics"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
    >
      <p className="stats-ribbon-heading">
        Proven delivery across diverse technology domains
      </p>
      <div className="stats-ribbon-items">
        {careerStats.map((stat) => {
          const target =
            typeof stat.value === 'function' ? stat.value() : stat.value;
          return (
            <div key={stat.label} className="stats-ribbon-item">
              <CountUp target={target} suffix={stat.suffix} active={isInView} />
              <span className="stats-ribbon-label">{stat.label}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
