import type { CaseStudy } from '@/types/content';

const caseStudies: CaseStudy[] = [
  {
    id: 'fitnescity-health-platform',
    title: 'Fitnescity Health Platform Evolution',
    client: 'Fitnescity Health',
    role: 'Engineering Manager',
    timeline: {
      start: '2025-03-01',
      status: 'ongoing',
    },
    sector: 'Consumer Health',
    stack: [
      'Next.js 15',
      'Strapi',
      'Node.js',
      'NestJS',
      'PostgreSQL',
      'AWS ECS',
      'AWS EC2',
      'SQS',
      'S3',
      'EventBridge',
      'Lambda',
    ],
    publicSummary:
      'Owned end-to-end web platform delivery across public web, customer workflows, and operational tooling for a large US preventive health platform.',
    narrative: {
      context:
        'Fitnescity operates a multi-surface experience where users discover tests, schedule appointments, and receive results while operations teams coordinate provider workflows.',
      challenge:
        'The product needed consistent architecture across marketing, booking, and results delivery while reducing manual operational overhead.',
      constraints: [
        'Healthcare-adjacent workflows requiring cautious handling of sensitive result data.',
        'Fast delivery expectations across public and internal products at the same time.',
        'Partner-driven result ingestion with heterogeneous input quality.',
      ],
      responsibilities: [
        'Owned architecture and delivery across public website, customer portal, and admin tooling.',
        'Built the public web experience in Next.js 15 with a Strapi-backed content model for non-engineering publishing.',
        'Led internal workflow improvements for scheduling support, notifications, and operations coordination.',
      ],
      architecture: {
        overview:
          'A composable web stack connected CMS-driven presentation, transactional workflows, and asynchronous result ingestion pipelines.',
        frontend: [
          'Next.js public site optimized for SEO and Core Web Vitals.',
          'Customer and admin portals covering discovery, scheduling, verification, and results views.',
        ],
        backend: [
          'Node.js and NestJS services for orchestration and business workflows.',
          'PostgreSQL-backed operational data with background processing.',
        ],
        integrations: [
          'AWS-based messaging and event orchestration using SQS and EventBridge.',
          'S3-based result file intake from external lab partner channels.',
          'Automated extraction modules feeding structured data into admin review flows.',
        ],
        dataFlow: [
          'Partner files are synced into S3.',
          'Extraction services convert raw files into structured records.',
          'Operations validates results in admin workflows before customer publishing.',
        ],
      },
      execution: [
        'Improved public page performance from roughly 50-level baseline scores to high-80s range on most pages via targeted optimization.',
        'Unified user and operations journeys across discovery, scheduling, and results.',
        'Introduced automation around result ingestion and verification handoffs to reduce manual effort.',
      ],
      outcomes: [
        'Faster publishing and iteration for marketing and product stakeholders.',
        'More reliable and auditable result delivery workflows for internal teams.',
        'Higher-quality user experience across critical conversion and engagement paths.',
      ],
      leadershipSignals: [
        'Managed scope across multiple product surfaces without splitting ownership.',
        'Balanced product delivery speed with operational reliability concerns.',
        'Drove architecture decisions that were understandable by engineering and business stakeholders.',
      ],
    },
    sanitized: true,
  },
  {
    id: 'invaluable-marketplace-delivery',
    title: 'Marketplace Delivery at Invaluable',
    client: 'Invaluable',
    role: 'Full-Stack Engineer -> Tech Lead -> Team Lead',
    timeline: {
      start: '2021-08-01',
      end: '2024-08-01',
      status: 'completed',
    },
    sector: 'Auction Marketplace',
    stack: [
      'Next.js 14',
      'Next.js 12',
      'React',
      'Node.js',
      'React Query',
      'Zustand',
      'GraphQL',
      'REST',
      'AppSync',
      'Redux Toolkit',
    ],
    publicSummary:
      'Progressed from implementation contributor to team leadership while delivering marketplace initiatives across technical and business constraints.',
    narrative: {
      context:
        'Invaluable serves a global network of collectors and auction houses, requiring product updates that support both buyer and partner-side workflows.',
      challenge:
        'Delivery required tight coordination across evolving requirements, legacy surfaces, and cross-functional decision-making.',
      constraints: [
        'Large-scale marketplace expectations with multiple user personas.',
        'Mixed stack footprint across older and newer frontend runtimes.',
        'Continuous coordination with client stakeholders during planning and execution.',
      ],
      responsibilities: [
        'Delivered feature overhauls and new capabilities across frontend and backend layers.',
        'Owned requirement breakdowns, estimation, sequencing, and execution tracking.',
        'Facilitated technical and business conversations to keep delivery aligned with priorities.',
      ],
      architecture: {
        overview:
          'A hybrid marketplace stack combining modern React state/query patterns with API integrations across GraphQL and REST.',
        frontend: [
          'Next.js and React interfaces across listing, discovery, and transactional experiences.',
          'State orchestration using React Query, Zustand, and Redux Toolkit where appropriate.',
        ],
        backend: [
          'Node.js services and API integrations to support marketplace flows.',
          'GraphQL and REST endpoints tuned per domain use case.',
        ],
        integrations: [
          'AppSync and GraphQL for data access layers.',
          'Domain APIs supporting catalog and bidding workflows.',
        ],
        dataFlow: [
          'Client and server layers coordinated to reduce duplicate fetching and stale data.',
          'Feature rollouts prioritized predictable state transitions for user-critical actions.',
        ],
      },
      execution: [
        'Led delivery planning from requirement decomposition to timeline and resource alignment.',
        'Evolved role scope from contributor to technical and team leadership.',
        'Shipped multiple initiatives while sustaining cross-team communication cadence.',
      ],
      outcomes: [
        'Predictable execution on complex feature sets.',
        'Improved collaboration between engineering and business stakeholders.',
        'Higher confidence in roadmap delivery as team leadership responsibility increased.',
      ],
      leadershipSignals: [
        'Demonstrated ownership growth from coding tasks to program-level delivery.',
        'Aligned teams around clear implementation plans under changing constraints.',
        'Maintained execution quality while handling communication overhead.',
      ],
    },
    sanitized: true,
  },
  {
    id: 'dataiam-frontend-foundation',
    title: 'Frontend Foundation for DataIAm',
    client: 'DataIAm',
    role: 'Frontend Engineer',
    timeline: {
      start: '2024-10-01',
      end: '2024-11-01',
      status: 'completed',
    },
    sector: 'AI SaaS',
    stack: [
      'React',
      'TypeScript',
      'React Query',
      'React Hook Form',
      'Next.js 14',
    ],
    publicSummary:
      'Set frontend direction for an AI-assisted Salesforce data cleanup product and delivered critical product capabilities quickly.',
    narrative: {
      context:
        'DataIAm targets Salesforce administrators who need to clean inconsistent operational data using AI-assisted workflows.',
      challenge:
        'The product needed a maintainable UI architecture while the team was shipping critical features on short timelines.',
      constraints: [
        'Rapid product iteration cycle with limited delivery window.',
        'Need for dependable frontend patterns around forms and async state.',
        'Feature scope required immediate business impact, not long refactor cycles.',
      ],
      responsibilities: [
        'Defined frontend architecture and implementation direction.',
        'Led transition from a Next.js-oriented setup to a plain React application structure.',
        'Delivered major features that were critical to product usability.',
      ],
      architecture: {
        overview:
          'A focused React architecture centered on predictable state management and robust form workflows for data-cleaning operations.',
        frontend: [
          'React + TypeScript foundation with reusable feature modules.',
          'React Query for async server-state consistency.',
          'React Hook Form for high-signal data-entry interactions.',
        ],
        backend: [
          'UI integration against existing AI-backed cleansing workflows.',
        ],
        integrations: [
          'Salesforce-centric data cleanup flows exposed through product APIs.',
        ],
        dataFlow: [
          'User-provided records move through validation and cleansing actions.',
          'Results are surfaced with explicit UI feedback for review and iteration.',
        ],
      },
      execution: [
        'Established architecture early to unblock fast feature delivery.',
        'Prioritized production-critical features without compromising maintainability.',
        'Created a base the team could keep extending after initial delivery.',
      ],
      outcomes: [
        'Stabilized frontend direction during a high-pressure build phase.',
        'Improved implementation speed on critical user-facing features.',
        'Provided a clearer foundation for ongoing product development.',
      ],
      leadershipSignals: [
        'Made architecture decisions that matched delivery urgency.',
        'Combined technical depth with clear prioritization in a short engagement.',
        'Drove high-impact execution in a narrow timeline.',
      ],
    },
    sanitized: true,
  },
];

export default caseStudies;
