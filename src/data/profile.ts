import type { ContactLink, Profile } from '@/types/content';

const CAREER_START = '2017-09-01';

export function getYearsOfExperience(): number {
  const start = new Date(CAREER_START);
  const now = new Date();
  return Math.floor(
    (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365.25),
  );
}

export const profileContactLinks: ContactLink[] = [
  {
    label: 'Email',
    link: 'mailto:contact@syedyawar.com',
    kind: 'email',
    isPrimary: true,
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/syed-yawar-hussain-162b17113',
    kind: 'linkedin',
  },
  {
    label: 'GitHub',
    link: 'https://github.com/syed-yawar',
    kind: 'github',
  },
  {
    label: 'Phone (available on request)',
    link: 'mailto:contact@syedyawar.com?subject=Phone%20Call%20Request',
    kind: 'phone',
    isPlaceholder: true,
  },
];

const profile: Profile = {
  name: 'Syed Yawar Hussain',
  headline: 'Lead/Staff Software Engineer building high-trust web platforms',
  currentRole: 'Principal Software Engineer at Arbisoft',
  location: 'Lahore, Pakistan',
  careerStartDate: CAREER_START,
  yearsOfExperience: getYearsOfExperience(),
  targetRole: 'Lead/Staff Engineer',
  summary: `Engineering leader with ${getYearsOfExperience()}+ years of experience across modern frontend and Node.js services. Delivers production systems by aligning architecture, execution, and cross-functional communication.`,
  strengths: [
    'Architecture ownership for Next.js and Node.js platforms',
    'Delivery leadership from requirements to production rollout',
    'Pragmatic modernization of legacy products',
    'Cross-team communication with clients, product, and engineering',
  ],
  focusAreas: [
    'Platform architecture and system reliability',
    'Marketplace and healthcare product workflows',
    'AI-assisted operational automation',
    'Performance and SEO optimization for high-traffic surfaces',
  ],
  valueProposition: [
    'Bridges product strategy and implementation detail without losing momentum.',
    'Turns complex operational workflows into maintainable software systems.',
    'Leads teams through ambiguous requirements with clear, testable delivery plans.',
  ],
  resumeFile: '/Syed_Yawar_Hussain_CV.pdf',
  contact: profileContactLinks,
};

export default profile;
