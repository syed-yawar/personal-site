import { describe, expect, it } from 'vitest';

import { aboutMarkdown } from '../about';

describe('about data', () => {
  it('exports aboutMarkdown as a string', () => {
    expect(typeof aboutMarkdown).toBe('string');
    expect(aboutMarkdown.length).toBeGreaterThan(0);
  });

  it('contains the intro section', () => {
    expect(aboutMarkdown).toContain('# Intro');
    expect(aboutMarkdown).toContain('Syed Yawar Hussain');
  });

  it('contains leadership snapshot section', () => {
    expect(aboutMarkdown).toContain('# Leadership Snapshot');
    expect(aboutMarkdown).toContain('Translate ambiguous requirements');
  });

  it('contains selected engagements section', () => {
    expect(aboutMarkdown).toContain('# Selected Engagements');
    expect(aboutMarkdown).toContain('Fitnescity Health');
    expect(aboutMarkdown).toContain('Invaluable');
  });

  it('contains how i work section', () => {
    expect(aboutMarkdown).toContain('# How I Work');
    expect(aboutMarkdown).toContain('Start with outcomes');
  });

  it('contains outside work section', () => {
    expect(aboutMarkdown).toContain('# Outside Work');
  });

  it('contains properly formatted headers', () => {
    // Check for markdown headers
    const headerRegex = /^#+ .+$/gm;
    const headers = aboutMarkdown.match(headerRegex);

    expect(headers).not.toBeNull();
    expect(headers!.length).toBeGreaterThanOrEqual(5);
  });
});
