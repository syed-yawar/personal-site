interface ThemePortraitProps {
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  objectPosition?: string;
}

/**
 * Theme-aware portrait that swaps between light and dark mode images.
 *
 * Uses native <img> instead of next/image to:
 * - Avoid shipping next/image runtime for static export
 * - Reduce client-side JavaScript bundle
 *
 * CSS visibility toggling handles instant theme switching.
 * Non-visible image uses lazy loading to defer download until needed.
 */
export default function ThemePortrait({
  width,
  height,
  priority = false,
  className = '',
  objectPosition = 'center center',
}: ThemePortraitProps) {
  return (
    <span className={`theme-portrait ${className}`}>
      {/* biome-ignore lint/performance/noImgElement: Using native img to avoid next/image runtime overhead for static export */}
      <img
        src="/images/yawar-profile.jpeg"
        alt="Syed Yawar Hussain"
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
        style={{ objectPosition }}
        className="theme-portrait-light"
      />
      {/* biome-ignore lint/performance/noImgElement: Using native img to avoid next/image runtime overhead for static export */}
      <img
        src="/images/yawar-profile.jpeg"
        alt="Syed Yawar Hussain"
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
        style={{ objectPosition }}
        className="theme-portrait-dark"
        aria-hidden="true"
      />
    </span>
  );
}
