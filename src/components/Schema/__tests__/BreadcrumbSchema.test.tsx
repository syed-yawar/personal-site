import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SITE_URL } from '@/lib/utils';
import BreadcrumbSchema from '../BreadcrumbSchema';

const mockItems = [
  { name: 'Home', url: '/' },
  { name: 'Writing', url: '/writing' },
  { name: 'Test Article', url: '/writing/test-article' },
];

describe('BreadcrumbSchema', () => {
  it('renders a script tag with JSON-LD content', () => {
    const { container } = render(<BreadcrumbSchema items={mockItems} />);

    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    expect(script).toBeInTheDocument();
  });

  it('contains BreadcrumbList schema type', () => {
    const { container } = render(<BreadcrumbSchema items={mockItems} />);

    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    const data = JSON.parse(script?.innerHTML || '{}');

    expect(data['@context']).toBe('https://schema.org');
    expect(data['@type']).toBe('BreadcrumbList');
  });

  it('generates correct itemListElement with positions starting at 1', () => {
    const { container } = render(<BreadcrumbSchema items={mockItems} />);

    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    const data = JSON.parse(script?.innerHTML || '{}');

    expect(data.itemListElement).toHaveLength(3);
    expect(data.itemListElement[0].position).toBe(1);
    expect(data.itemListElement[1].position).toBe(2);
    expect(data.itemListElement[2].position).toBe(3);

    for (const element of data.itemListElement) {
      expect(element['@type']).toBe('ListItem');
    }

    expect(data.itemListElement[0].name).toBe('Home');
    expect(data.itemListElement[1].name).toBe('Writing');
    expect(data.itemListElement[2].name).toBe('Test Article');
  });

  it('prepends SITE_URL to relative URLs', () => {
    const { container } = render(<BreadcrumbSchema items={mockItems} />);

    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    const data = JSON.parse(script?.innerHTML || '{}');

    expect(data.itemListElement[0].item).toBe(`${SITE_URL}/`);
    expect(data.itemListElement[1].item).toBe(`${SITE_URL}/writing`);
    expect(data.itemListElement[2].item).toBe(
      `${SITE_URL}/writing/test-article`,
    );
  });

  it('passes through absolute URLs unchanged', () => {
    const absoluteItems = [
      { name: 'Home', url: '/' },
      { name: 'External', url: 'https://example.com/page' },
      { name: 'HTTP External', url: 'http://example.com/other' },
    ];

    const { container } = render(<BreadcrumbSchema items={absoluteItems} />);

    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    const data = JSON.parse(script?.innerHTML || '{}');

    expect(data.itemListElement[0].item).toBe(`${SITE_URL}/`);
    expect(data.itemListElement[1].item).toBe('https://example.com/page');
    expect(data.itemListElement[2].item).toBe('http://example.com/other');
  });
});
