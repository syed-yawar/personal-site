import Link from 'next/link';

import PageWrapper from '@/components/Template/PageWrapper';

export default function CaseStudiesNotFound() {
  return (
    <PageWrapper>
      <section className="contact-page">
        <header className="contact-header">
          <h1 className="page-title">Case Study Not Found</h1>
          <p className="page-subtitle">
            The requested case study is unavailable or has been removed.
          </p>
        </header>

        <p>
          <Link href="/case-studies">Browse all case studies</Link>
        </p>
      </section>
    </PageWrapper>
  );
}
