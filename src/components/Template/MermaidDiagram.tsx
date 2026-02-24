'use client';

import { useEffect, useId, useState } from 'react';

import mermaid from 'mermaid';

interface MermaidDiagramProps {
  code: string;
}

export default function MermaidDiagram({ code }: MermaidDiagramProps) {
  const id = useId();
  const [svg, setSvg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!code.trim()) return;

    let mounted = true;

    const theme =
      typeof document !== 'undefined' &&
      document.documentElement.getAttribute('data-theme') === 'dark'
        ? 'dark'
        : 'neutral';

    mermaid.initialize({
      startOnLoad: false,
      theme,
      securityLevel: 'loose',
    });

    const diagramId = `mermaid-${id.replace(/:/g, '')}`;

    mermaid
      .render(diagramId, code.trim())
      .then(({ svg: renderedSvg }) => {
        if (!mounted) return;
        setSvg(renderedSvg);
        setError(null);
      })
      .catch((err) => {
        if (mounted) setError(err?.message ?? 'Mermaid render failed');
      });

    return () => {
      mounted = false;
      // Clean up any temporary DOM element created by mermaid.render
      if (typeof document !== 'undefined') {
        const tempElement = document.getElementById(diagramId);
        if (tempElement && tempElement.parentNode) {
          tempElement.parentNode.removeChild(tempElement);
        }
      }
    };
  }, [code, id]);

  if (error) {
    return (
      <pre className="mermaid-error" role="alert">
        {error}
      </pre>
    );
  }

  if (!svg) {
    return <div className="mermaid-container" aria-label="Loading diagram" />;
  }

  return (
    <div
      className="mermaid-container"
      aria-label="Diagram"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
