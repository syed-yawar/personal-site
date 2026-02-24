'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

import type { Post } from '@/lib/posts';

interface LatestWritingProps {
  posts: Post[];
}

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function LatestWriting({ posts }: LatestWritingProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  if (posts.length === 0) return null;

  return (
    <section
      ref={ref}
      className="latest-writing-v2"
      aria-labelledby="latest-writing-heading"
    >
      <motion.div
        className="latest-writing-v2-header"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
      >
        <h2 id="latest-writing-heading" className="section-title-v2">
          Writing
        </h2>
        <p className="section-desc-v2">
          Thoughts on engineering, architecture, and building products.
        </p>
      </motion.div>

      <motion.div
        className="latest-writing-v2-grid"
        variants={stagger}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {posts.map((post) => (
          <motion.article
            key={post.slug}
            className="writing-card-v2"
            variants={item}
          >
            <Link
              href={`/writing/${post.slug}`}
              className="writing-card-v2-link"
            >
              <time className="writing-card-v2-date" dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
              <h3 className="writing-card-v2-title">{post.title}</h3>
              <p className="writing-card-v2-desc">{post.description}</p>
            </Link>
          </motion.article>
        ))}
      </motion.div>

      <motion.div
        className="latest-writing-v2-cta"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <Link href="/writing" className="button button-secondary">
          All Posts
        </Link>
      </motion.div>
    </section>
  );
}
