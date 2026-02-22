import type { Metadata } from 'next';
import { Raleway, Source_Sans_3 } from 'next/font/google';
import Script from 'next/script';

import GoogleAnalytics from '@/components/Template/GoogleAnalytics';
import Navigation from '@/components/Template/Navigation';
import ScrollToTop from '@/components/Template/ScrollToTop';
import './tailwind.css';

const sourceSans = Source_Sans_3({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

const raleway = Raleway({
  weight: ['400', '800'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://syedyawar.com').replace(/\/$/, '');
const PROFILE_NAME = 'Syed Yawar Hussain';
const SITE_TITLE = `${PROFILE_NAME} | Portfolio`;
const siteDescription =
  'Portfolio of Syed Yawar Hussain, Principal Software Engineer at Arbisoft, focused on high-trust web platforms, product delivery, and engineering leadership.';

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: `%s | ${PROFILE_NAME}`,
  },
  icons: {
    icon: [{ url: '/images/yh.ico' }],
    shortcut: ['/images/yh.ico'],
    apple: [{ url: '/images/yh.ico' }],
  },
  description: siteDescription,
  keywords: [
    PROFILE_NAME,
    'portfolio',
    'principal software engineer',
    'arbisoft',
    'next.js',
    'node.js',
    'engineering leadership',
    'case studies',
  ],
  authors: [{ name: PROFILE_NAME }],
  creator: PROFILE_NAME,
  publisher: PROFILE_NAME,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_TITLE,
    title: SITE_TITLE,
    description: siteDescription,
    images: [
      {
        url: '/images/me.jpg',
        width: 1200,
        height: 630,
        alt: `${PROFILE_NAME} profile photo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: siteDescription,
    images: ['/images/me.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeInitScript = `(function(){
    try {
      var storedTheme = localStorage.getItem('theme');
      var theme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : 'dark';
      var root = document.documentElement;
      root.setAttribute('data-theme', theme);
      root.setAttribute('data-theme-ready', 'true');
    } catch (error) {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.setAttribute('data-theme-ready', 'true');
    }
  })();`;

  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${raleway.variable}`}
      data-theme="dark"
      data-theme-ready="false"
      suppressHydrationWarning
    >
      <head>
        {/* CSP-safe theme initialization - prevents flash on load */}
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
      </head>
      <body>
        <ScrollToTop />
        <div className="site-wrapper">
          <Navigation />
          {children}
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
