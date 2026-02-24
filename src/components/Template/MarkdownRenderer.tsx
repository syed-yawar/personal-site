'use client';

import type { ReactNode } from 'react';
import { Children, isValidElement } from 'react';
import Markdown from 'markdown-to-jsx';

import MermaidDiagram from './MermaidDiagram';

interface MarkdownRendererProps {
  markdown: string;
  className?: string;
}

function PreOverride({
  children,
  ...props
}: {
  children?: ReactNode;
  [key: string]: unknown;
}) {
  const child = Children.toArray(children)[0];
  const childProps = isValidElement(child)
    ? (child.props as { className?: string; children?: ReactNode })
    : null;
  if (
    isValidElement(child) &&
    child.type === 'code' &&
    typeof childProps?.className === 'string' &&
    childProps.className.includes('language-mermaid')
  ) {
    const code = childProps.children;
    return (
      <MermaidDiagram
        code={typeof code === 'string' ? code : String(code ?? '')}
      />
    );
  }
  return <pre {...props}>{children}</pre>;
}

export default function MarkdownRenderer({
  markdown,
  className,
}: MarkdownRendererProps) {
  return (
    <div className={className}>
      <Markdown
        options={{
          wrapper: 'div',
          overrides: { pre: PreOverride },
        }}
      >
        {markdown}
      </Markdown>
    </div>
  );
}
