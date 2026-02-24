'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import ThemePortrait from '@/components/Template/ThemePortrait';
import { heroContent } from '@/data/home';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

const wordReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

const avatarFloat = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease },
  },
};

function SplitText({ text }: { text: string }) {
  const words = text.split(' ');
  return (
    <motion.span
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.06 } },
      }}
      initial="hidden"
      animate="visible"
      className="hero-v2-split"
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={wordReveal}
          className="hero-v2-word"
        >
          {word}
          {i < words.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function HeroV2() {
  return (
    <section className="hero-v2" aria-labelledby="hero-v2-heading">
      <div className="hero-v2-bg" aria-hidden="true">
        <div className="hero-v2-gradient" />
        <div className="hero-v2-grid" />
      </div>

      <motion.div
        className="hero-v2-content"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-v2-avatar" variants={avatarFloat}>
          <ThemePortrait
            width={152}
            height={152}
            priority
            objectPosition="center 20%"
          />
        </motion.div>

        <motion.p className="hero-v2-eyebrow" variants={fadeUp}>
          {heroContent.eyebrow}
        </motion.p>

        <h1 className="hero-v2-title" id="hero-v2-heading">
          <SplitText text={heroContent.title} />
        </h1>

        <motion.p className="hero-v2-tagline" variants={fadeUp}>
          {heroContent.taglineBefore}
          <a href={heroContent.company.url} className="hero-v2-highlight">
            {heroContent.company.name}
          </a>
          {heroContent.taglineAfter}
        </motion.p>

        <motion.div className="hero-v2-cta" variants={fadeUp}>
          <Link href="/about" className="button button-primary">
            About Me
          </Link>
          <Link href="/resume" className="button button-secondary">
            View Resume
          </Link>
        </motion.div>

        <motion.p className="hero-v2-specialty" variants={fadeUp}>
          {heroContent.specialty}
        </motion.p>
      </motion.div>
    </section>
  );
}
