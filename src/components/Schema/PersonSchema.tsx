import contact from '@/data/contact';
import degrees from '@/data/resume/degrees';
import work from '@/data/resume/work';
import { AUTHOR_NAME, SITE_URL } from '@/lib/utils';
import JsonLd from './JsonLd';

export default function PersonSchema() {
  // Extract social links for sameAs from configured contact data.
  const socialLinks = contact
    .map((item) => item.link)
    .filter(
      (link) => link.startsWith('https://') || link.startsWith('http://'),
    );

  // Extract primary email from contact data.
  const emailItem = contact.find((item) => item.kind === 'email');
  const email = emailItem?.link.replace('mailto:', '').split('?')[0];

  // Current job from work.ts (first entry)
  const currentJob = work[0];

  const personData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: AUTHOR_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/images/me.jpg`,
    jobTitle: currentJob.position,
    ...(email && { email }),
    sameAs: socialLinks,
    worksFor: {
      '@type': 'Organization',
      name: currentJob.name,
      url: currentJob.url,
    },
    alumniOf: degrees.map((degree) => ({
      '@type': 'CollegeOrUniversity',
      name: degree.school,
      url: degree.link,
    })),
  };

  return <JsonLd data={personData} />;
}
