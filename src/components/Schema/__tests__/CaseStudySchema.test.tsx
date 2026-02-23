import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AUTHOR_NAME, OG_IMAGE_URL, SITE_URL } from '@/lib/utils';
import type { CaseStudy } from '@/types/content';
import CaseStudySchema from '../CaseStudySchema';

const mockCaseStudy: CaseStudy = {
  id: 'test-case-study',
  title: 'Test Case Study Title',
  client: 'Test Client',
  role: 'Engineering Lead',
  timeline: {
    start: '2024-01-01',
    end: '2024-06-30',
    status: 'completed',
  },
  sector: 'Technology',
  stack: ['React', 'TypeScript', 'Node.js'],
  publicSummary: 'This is a test case study summary',
  narrative: {
    context: 'Test context',
    challenge: 'Test challenge',
    constraints: ['Constraint 1'],
    responsibilities: ['Responsibility 1'],
    architecture: {
      overview: 'Test architecture overview',
      frontend: ['React'],
      backend: ['Node.js'],
      integrations: ['API'],
      dataFlow: ['REST'],
    },
    execution: ['Execution step 1'],
    outcomes: ['Outcome 1'],
    leadershipSignals: ['Leadership signal 1'],
  },
  sanitized: true,
};

describe('CaseStudySchema', () => {
  it('renders a script tag with JSON-LD content', () => {
    const { container } = render(<CaseStudySchema caseStudy={mockCaseStudy} />);

    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    expect(script).toBeInTheDocument();
  });

  it('contains Article schema type', () => {
    const { container } = render(<CaseStudySchema caseStudy={mockCaseStudy} />);

    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    const data = JSON.parse(script?.innerHTML || '{}');

    expect(data['@context']).toBe('https://schema.org');
    expect(data['@type']).toBe('Article');
  });

  it('includes headline and description from case study', () => {
    const { container } = render(<CaseStudySchema caseStudy={mockCaseStudy} />);

    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    const data = JSON.parse(script?.innerHTML || '{}');

    expect(data.headline).toBe(mockCaseStudy.title);
    expect(data.description).toBe(mockCaseStudy.publicSummary);
  });

  it('uses correct URL format', () => {
    const { container } = render(<CaseStudySchema caseStudy={mockCaseStudy} />);

    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    const data = JSON.parse(script?.innerHTML || '{}');

    const expectedUrl = `${SITE_URL}/case-studies/${mockCaseStudy.id}`;
    expect(data.url).toBe(expectedUrl);
    expect(data.mainEntityOfPage['@id']).toBe(expectedUrl);
  });

  it('includes datePublished from timeline.start', () => {
    const { container } = render(<CaseStudySchema caseStudy={mockCaseStudy} />);

    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    const data = JSON.parse(script?.innerHTML || '{}');

    expect(data.datePublished).toBe(mockCaseStudy.timeline.start);
  });

  it('includes dateModified when timeline.end exists', () => {
    const { container } = render(<CaseStudySchema caseStudy={mockCaseStudy} />);

    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    const data = JSON.parse(script?.innerHTML || '{}');

    expect(data.dateModified).toBe(mockCaseStudy.timeline.end);
  });

  it('omits dateModified when timeline.end is undefined', () => {
    const ongoingCaseStudy: CaseStudy = {
      ...mockCaseStudy,
      timeline: {
        start: '2024-01-01',
        status: 'ongoing',
      },
    };

    const { container } = render(
      <CaseStudySchema caseStudy={ongoingCaseStudy} />,
    );

    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    const data = JSON.parse(script?.innerHTML || '{}');

    expect(data.dateModified).toBeUndefined();
  });

  it('includes keywords from stack array', () => {
    const { container } = render(<CaseStudySchema caseStudy={mockCaseStudy} />);

    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    const data = JSON.parse(script?.innerHTML || '{}');

    expect(data.keywords).toBe('React, TypeScript, Node.js');
  });

  it('includes author as Person with correct details', () => {
    const { container } = render(<CaseStudySchema caseStudy={mockCaseStudy} />);

    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    const data = JSON.parse(script?.innerHTML || '{}');

    expect(data.author['@type']).toBe('Person');
    expect(data.author.name).toBe(AUTHOR_NAME);
    expect(data.author.url).toBe(SITE_URL);
  });

  it('includes publisher as Person with correct details', () => {
    const { container } = render(<CaseStudySchema caseStudy={mockCaseStudy} />);

    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    const data = JSON.parse(script?.innerHTML || '{}');

    expect(data.publisher['@type']).toBe('Person');
    expect(data.publisher.name).toBe(AUTHOR_NAME);
    expect(data.publisher.url).toBe(SITE_URL);
  });

  it('includes image for rich search results', () => {
    const { container } = render(<CaseStudySchema caseStudy={mockCaseStudy} />);

    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    const data = JSON.parse(script?.innerHTML || '{}');

    expect(data.image).toBe(OG_IMAGE_URL);
  });

  it('includes mainEntityOfPage WebPage reference', () => {
    const { container } = render(<CaseStudySchema caseStudy={mockCaseStudy} />);

    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    const data = JSON.parse(script?.innerHTML || '{}');

    expect(data.mainEntityOfPage['@type']).toBe('WebPage');
    expect(data.mainEntityOfPage['@id']).toBeDefined();
  });
});
