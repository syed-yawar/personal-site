import type { ExperienceItem, ResumeSection } from '@/types/content';

/**
 * Conforms to https://jsonresume.org/schema/ shape expectations used by the UI.
 */
export type Position = ExperienceItem;

const work: Position[] = [
  {
    id: 'arbisoft-principal-software-engineer',
    name: 'Arbisoft',
    position: 'Principal Software Engineer',
    url: 'https://arbisoft.com',
    startDate: '2021-03-01',
    summary:
      'Engineering lead delivering production platforms across healthcare, marketplace, and AI products. Own architecture and execution from requirement breakdown through release.',
    highlights: [
      'Led Fitnescity engagement as Engineering Manager across public website, customer portal, and admin tooling.',
      'Built Fitnescity public website with Next.js 15 + Strapi and enabled non-engineering content publishing workflows.',
      'Improved Fitnescity public-page performance and SEO scores from around 50-level baselines to high-80s range on most pages.',
      'Designed AWS-based result ingestion workflow for partner files, structured extraction, admin verification, and customer publishing.',
      'Delivered major initiatives for Invaluable, progressing from full-stack contributor to tech lead and team lead responsibilities.',
      'At DataIAm, established frontend architecture and delivered critical features for an AI-assisted Salesforce data-cleansing product.',
    ],
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'GraphQL',
      'Node.js',
      'NestJS',
      'PostgreSQL',
      'AWS',
    ],
    leadershipFocus: [
      'Cross-functional delivery planning',
      'Architecture ownership',
      'Team leadership and mentoring',
    ],
  },
  {
    id: 'ssi-senior-software-engineer',
    name: 'Strategic Systems International (SSI)',
    position: 'Senior Software Engineer',
    url: '#',
    startDate: '2021-02-01',
    endDate: '2021-03-01',
    summary:
      'Short-term senior engineering engagement focused on production-grade delivery and feature execution.',
    highlights: [
      'Contributed to delivery planning and implementation in a fast handoff environment.',
      'Maintained quality and continuity while transitioning responsibilities between teams.',
    ],
    technologies: ['React', 'TypeScript', 'Node.js'],
  },
  {
    id: 'hazelsoft-software-engineer',
    name: 'HazelSoft',
    position: 'Software Engineer',
    url: '#',
    startDate: '2019-04-01',
    endDate: '2021-01-01',
    summary:
      'Built and evolved web products across service operations and commerce workflows, including architecture and third-party integrations.',
    highlights: [
      'Delivered FieldTrack24 service request workflows covering submission, dispatch, approval, and fulfillment flows.',
      'Implemented front-end architecture for UnixFor SA kiosk platform features including dashboards, roles, permissions, and profiles.',
      'Integrated third-party APIs for 9Fold, including delivery providers and mapping services, while improving existing scripts and UI flows.',
    ],
    technologies: [
      'Angular',
      'React',
      '.NET',
      'Node.js',
      'PHP',
      'MySQL',
      'SQL Server',
    ],
  },
  {
    id: 'smart-venture-software-development-manager',
    name: 'Smart Venture',
    position: 'Software Development Manager',
    url: '#',
    startDate: '2017-08-01',
    endDate: '2019-03-01',
    summary:
      'Managed software delivery teams and coordinated product implementation from planning through release.',
    highlights: [
      'Owned project execution cadence and delivery quality for client-facing web platforms.',
      'Aligned engineering execution with stakeholder priorities and release timelines.',
    ],
    leadershipFocus: [
      'Team management',
      'Client communication',
      'Delivery accountability',
    ],
  },
];

export const experienceSection: ResumeSection<Position> = {
  id: 'experience',
  title: 'Experience',
  summary:
    'Lead/Staff-level delivery across healthcare, marketplace, and AI SaaS products.',
  items: work,
};

export default work;
