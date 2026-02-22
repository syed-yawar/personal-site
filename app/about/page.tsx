import type { Metadata } from 'next';

import MarkdownRenderer from '@/components/Template/MarkdownRenderer';
import PageWrapper from '@/components/Template/PageWrapper';
import { aboutMarkdown } from '@/data/about';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Syed Yawar Hussain, a Principal Software Engineer delivering scalable web platforms and product-focused engineering outcomes.',
};

const countWords = (str: string) => str.split(/\s+/).filter((word) => word !== '').length;

export default function AboutPage() {
  return (
    <PageWrapper>
      <section className="about-page">
        <header className="about-header">
          <h1 className="page-title">About Me</h1>
          <p className="page-subtitle">A quick intro in {countWords(aboutMarkdown)} words</p>
        </header>
        <article className="about-content">
          <MarkdownRenderer markdown={aboutMarkdown} />
        </article>
      </section>
    </PageWrapper>
  );
}
