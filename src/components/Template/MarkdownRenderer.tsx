'use client';

import Markdown from 'markdown-to-jsx';

interface MarkdownRendererProps {
  markdown: string;
  className?: string;
}

export default function MarkdownRenderer({
  markdown,
  className,
}: MarkdownRendererProps) {
  return (
    <div className={className}>
      <Markdown options={{ wrapper: 'div' }}>{markdown}</Markdown>
    </div>
  );
}
