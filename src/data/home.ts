import { getYearsOfExperience } from '@/data/profile';

export interface CareerStat {
  value: number | (() => number);
  suffix: string;
  label: string;
}

export const careerStats: CareerStat[] = [
  { value: getYearsOfExperience, suffix: '+', label: 'Years of Experience' },
  { value: 5, suffix: '+', label: 'Industry Sectors' },
  { value: 10, suffix: '+', label: 'Platforms Shipped' },
  { value: 20, suffix: '+', label: 'Engineers Mentored' },
];

export const heroContent = {
  eyebrow: 'Principal Software Engineer',
  title: 'Building high-trust platforms that scale.',
  taglineBefore: 'Engineering leader at ',
  taglineAfter:
    ', delivering production systems across healthcare, marketplace, and AI-assisted product platforms.',
  company: { name: 'Arbisoft', url: 'https://arbisoft.com' },
  specialty:
    'Specializing in Next.js, Node.js, and cloud architecture for enterprise-grade products.',
};

export const coreTechnologies = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'NestJS',
  'GraphQL',
  'PostgreSQL',
  'AWS',
  'System Design',
  'Docker',
  'CI/CD',
  'Tailwind CSS',
];
