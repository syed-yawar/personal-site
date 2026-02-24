import type { Metadata } from 'next';

import ContactCTA from '@/components/HomeV2/ContactCTA';
import FeaturedWork from '@/components/HomeV2/FeaturedWork';
import HeroV2 from '@/components/HomeV2/HeroV2';
import LatestWriting from '@/components/HomeV2/LatestWriting';
import StatsRibbon from '@/components/HomeV2/StatsRibbon';
import TechMarquee from '@/components/HomeV2/TechMarquee';
import {
  PersonSchema,
  WebPageSchema,
  WebSiteSchema,
} from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import caseStudies from '@/data/case-studies';
import { getAllPosts } from '@/lib/posts';

const PAGE_TITLE = 'Syed Yawar Hussain | Engineering Leader & Architect';
const PAGE_DESCRIPTION =
  'Portfolio of Syed Yawar Hussain, Principal Software Engineer at Arbisoft. Engineering leader focused on architecture, product delivery, high-trust web platforms, healthcare systems, marketplace delivery, and AI-powered products.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    url: '/',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  keywords: [
    'Syed Yawar Hussain',
    'portfolio',
    'principal software engineer',
    'engineering leader',
    'arbisoft',
    'next.js',
    'node.js',
    'typescript',
    'react',
    'graphql',
    'nestjs',
    'postgresql',
    'aws',
    'system design',
    'delivery planning',
    'technical leadership',
    'cross-functional collaboration',
    'performance & seo optimization',
    'ai-assisted workflow integration',
    'data & ai',
    'architecture & delivery',
    'leadership',
    'frontend engineering',
    'backend engineering',
    'healthcare platform',
    'marketplace delivery',
    'AI product',
    'system architecture',
    'cloud engineering',
    'fractional CTO',
    'technical leadership',
    'case studies',
  ],
};

export default function HomePage() {
  const featuredCaseStudies = caseStudies.slice(0, 3);
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <PageWrapper>
      <PersonSchema />
      <WebSiteSchema />
      <WebPageSchema
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path="/"
      />
      <HeroV2 />
      <StatsRibbon />
      <FeaturedWork caseStudies={featuredCaseStudies} />
      <TechMarquee />
      <LatestWriting posts={latestPosts} />
      <ContactCTA />
    </PageWrapper>
  );
}
