import Link from 'next/link';

import ContactIcons from '@/components/Contact/ContactIcons';

import ThemePortrait from './ThemePortrait';

export default function Footer() {
  return (
    <footer className="site-footer-new">
      <div className="footer-content">
        <div className="footer-identity">
          <Link href="/" className="footer-avatar">
            <ThemePortrait width={80} height={80} />
          </Link>
          <div className="footer-info">
            <p className="footer-name m-0">Syed Yawar Hussain</p>
            <p className="footer-role">Principal Software Engineer</p>
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} ·{' '}
              <a
                href="https://github.com/syed-yawar/personal-site"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <nav className="footer-links" aria-labelledby="footer-links-heading">
            <span id="footer-links-heading" className="footer-links-label">
              Explore
            </span>
            <div className="footer-links-grid">
              <Link href="/about">About</Link>
              <Link href="/resume">Resume</Link>
              <Link href="/case-studies">Projects</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </nav>

          <div className="footer-social" aria-labelledby="footer-social-heading">
            <span id="footer-social-heading" className="footer-social-label">
              Connect
            </span>
            <ContactIcons />
          </div>
        </div>
      </div>
    </footer>
  );
}
