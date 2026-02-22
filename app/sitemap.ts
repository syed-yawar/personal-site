import { MetadataRoute } from 'next';

import caseStudies from '@/data/case-studies';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://syedyawar.com').replace(/\/$/, '');
  const currentDate = new Date();
  const staticRoutes = [
    { path: '', changeFrequency: 'weekly' as const, priority: 1 },
    { path: '/about', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/resume', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.7 },
    {
      path: '/case-studies',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const caseStudyEntries: MetadataRoute.Sitemap = caseStudies.map((caseStudy) => ({
    url: `${siteUrl}/case-studies/${caseStudy.id}`,
    lastModified: new Date(caseStudy.timeline.end ?? caseStudy.timeline.start),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticEntries, ...caseStudyEntries];
}
