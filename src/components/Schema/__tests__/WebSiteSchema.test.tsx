import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { AUTHOR_NAME, SITE_URL } from '@/lib/utils';
import WebSiteSchema from '../WebSiteSchema';

describe('WebSiteSchema', () => {
  it('renders a script tag with JSON-LD content', () => {
    const { container } = render(<WebSiteSchema />);

    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    expect(script).toBeInTheDocument();
  });

  it('contains WebSite schema type', () => {
    const { container } = render(<WebSiteSchema />);

    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    const data = JSON.parse(script?.innerHTML || '{}');

    expect(data['@context']).toBe('https://schema.org');
    expect(data['@type']).toBe('WebSite');
  });

  it('uses correct site name from constants', () => {
    const { container } = render(<WebSiteSchema />);

    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    const data = JSON.parse(script?.innerHTML || '{}');

    expect(data.name).toBe(`${AUTHOR_NAME} | Portfolio`);
  });

  it('uses correct site URL', () => {
    const { container } = render(<WebSiteSchema />);

    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    const data = JSON.parse(script?.innerHTML || '{}');

    expect(data.url).toBe(SITE_URL);
  });

  it('includes author Person data', () => {
    const { container } = render(<WebSiteSchema />);

    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    const data = JSON.parse(script?.innerHTML || '{}');

    expect(data.author).toBeDefined();
    expect(data.author['@type']).toBe('Person');
    expect(data.author.name).toBe(AUTHOR_NAME);
    expect(data.author.url).toBe(SITE_URL);
  });
});
