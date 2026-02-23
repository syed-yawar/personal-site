import type { Metadata } from 'next';

import ContactIcons from '@/components/Contact/ContactIcons';
import EmailLink from '@/components/Contact/EmailLink';
import { WebPageSchema } from '@/components/Schema';

import PageWrapper from '@/components/Template/PageWrapper';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Syed Yawar Hussain via email @ contact@syedyawar.com',
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <WebPageSchema
        title="Contact"
        description="Contact Syed Yawar Hussain via email or social platforms."
        path="/contact"
        type="ContactPage"
      />
      <section className="contact-page">
        <header className="contact-header">
          <h1 className="page-title">Get in Touch</h1>
        </header>

        <div className="contact-content">
          <div className="contact-email-block">
            <EmailLink />
            <p className="contact-hint">Usually respond within 24 hours</p>
          </div>

          <div className="contact-divider">
            <span>or find me on</span>
          </div>

          <ContactIcons />
        </div>
      </section>
    </PageWrapper>
  );
}
