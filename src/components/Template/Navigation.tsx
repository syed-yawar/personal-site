'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import routes from '@/data/routes';

import Hamburger from './Hamburger';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname?.startsWith(path);
  };

  return (
    <header className="site-header">
      <Link href="/" className="site-logo" aria-label="Syed Yawar Hussain homepage">
        <span className="logo-inner">
          <span className="logo-mark" aria-hidden="true">
            YH
          </span>
          <span className="logo-lockup">
            <span className="logo-text">Syed Yawar</span>
            <span className="logo-subtitle">Software Engineer</span>
          </span>
        </span>
      </Link>

      <nav className="nav-links" aria-label="Primary">
        {routes
          .filter((l) => !l.index)
          .map((l) => (
            <Link
              key={l.label}
              href={l.path}
              className={`nav-link ${isActive(l.path) ? 'active' : ''}`}
              aria-current={isActive(l.path) ? 'page' : undefined}
            >
              {l.label}
            </Link>
          ))}
      </nav>

      <div className="nav-actions">
        <ThemeToggle />
        <Hamburger />
      </div>
    </header>
  );
}
