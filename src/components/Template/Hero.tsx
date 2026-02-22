import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
        <div className="hero-grid" />
      </div>

      <div className="hero-content">
        <div className="hero-panel">
          <aside className="hero-aside">
            <div className="hero-avatar">
              <ThemePortrait width={160} height={160} priority objectPosition="center 20%" />
            </div>
            <p className="hero-caption">
              Turning complex workflows into maintainable product systems.
            </p>
          </aside>

          <div className="hero-copy">
            <h1 className="hero-title" id="hero-heading">
              <span className="hero-kicker">Syed Yawar Hussain</span>
            </h1>

            <p className="hero-tagline">
              Principal Software Engineer at{' '}
              <a href="https://arbisoft.com" className="hero-highlight">
                Arbisoft
              </a>
              , leading delivery across healthcare, marketplace, and AI-assisted product platforms.
            </p>

            <div className="hero-chips">
              <span className="hero-chip">Next.js & Node.js Architecture</span>
              <span className="hero-chip">Engineering Leadership</span>
              <span className="hero-chip">Cross-Functional Delivery</span>
            </div>

            <div className="hero-cta">
              <Link href="/about" className="button button-primary">
                About Me
              </Link>
              <Link href="/resume" className="button button-secondary">
                View Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
