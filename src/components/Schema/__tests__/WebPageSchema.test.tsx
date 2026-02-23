import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { AUTHOR_NAME, OG_IMAGE_URL, SITE_URL } from '@/lib/utils';
import WebPageSchema from '../WebPageSchema';

describe('WebPageSchema', () => {
  const defaultProps = {
    title: 'About',
    description: 'About page description',
    path: '/about',
  };

  it('renders a script tag with JSON-LD content', () => {
    const { container } = render(<WebPageSchema {...defaultProps} />);

    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    expect(script).toBeInTheDocument();
  });

  it('contains correct schema type (default WebPage)', () => {
    const { container } = render(<WebPageSchema {...defaultProps} />);

    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    const data = JSON.parse(script?.innerHTML || '{}');

    expect(data['@context']).toBe('https://schema.org');
    expect(data['@type']).toBe('WebPage');
  });

  it('uses custom type when provided', () => {
    const { container } = render(
      <WebPageSchema {...defaultProps} type="AboutPage" />,
    );

    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    const data = JSON.parse(script?.innerHTML || '{}');

    expect(data['@type']).toBe('AboutPage');

    // Also verify ContactPage
    const { container: container2 } = render(
      <WebPageSchema {...defaultProps} type="ContactPage" />,
    );

    const script2 = container2.querySelector(
      'script[type="application/ld+json"]',
    );
    const data2 = JSON.parse(script2?.innerHTML || '{}');

    expect(data2['@type']).toBe('ContactPage');
  });

  it('includes correct page URL from path', () => {
    const { container } = render(<WebPageSchema {...defaultProps} />);

    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    const data = JSON.parse(script?.innerHTML || '{}');

    expect(data.url).toBe(`${SITE_URL}/about`);
    expect(data.image).toBe(OG_IMAGE_URL);
  });

  it('uses correct author information', () => {
    const { container } = render(<WebPageSchema {...defaultProps} />);

    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    const data = JSON.parse(script?.innerHTML || '{}');

    expect(data.author).toBeDefined();
    expect(data.author['@type']).toBe('Person');
    expect(data.author.name).toBe(AUTHOR_NAME);
    expect(data.author.url).toBe(SITE_URL);
  });

  it('includes isPartOf WebSite reference', () => {
    const { container } = render(<WebPageSchema {...defaultProps} />);

    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    const data = JSON.parse(script?.innerHTML || '{}');

    expect(data.isPartOf).toBeDefined();
    expect(data.isPartOf['@type']).toBe('WebSite');
    expect(data.isPartOf.name).toBe(`${AUTHOR_NAME} | Portfolio`);
    expect(data.isPartOf.url).toBe(SITE_URL);
  });
});
