'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import contactData from '@/data/contact';

export default function ContactCTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  const visibleContacts = contactData.filter((c) => !c.isPlaceholder);

  return (
    <section
      ref={ref}
      className="contact-cta-v2"
      aria-labelledby="contact-cta-heading"
    >
      <motion.div
        className="contact-cta-v2-inner"
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
      >
        <h2 id="contact-cta-heading" className="contact-cta-v2-title">
          Let&rsquo;s work together
        </h2>
        <p className="contact-cta-v2-desc">
          Open to discussing engineering leadership roles, architecture
          consulting, fractional CTO engagements, and product partnerships.
        </p>

        <div className="contact-cta-v2-links">
          {visibleContacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.link}
              className="contact-cta-v2-link"
              aria-label={contact.label}
            >
              <FontAwesomeIcon icon={contact.icon} />
              <span>{contact.label}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
