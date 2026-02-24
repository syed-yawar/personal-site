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
        mermaid: `flowchart LR
  subgraph Partner
    A[Lab Files]
  end
  subgraph AWS
    B[S3 Bucket]
    C[Extraction]
    D[Admin Review]
  end
  subgraph Customer
    E[Results Portal]
  end
  A --> B --> C --> D --> E`,
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
  {
    id: 'hazelsoft-service-operations',
    title: 'Service Operations Platform at HazelSoft',
    client: 'HazelSoft',
    role: 'Software Engineer',
    timeline: {
      start: '2019-04-01',
      end: '2021-01-01',
      status: 'completed',
    },
    sector: 'Service Operations',
    stack: ['Angular', 'React', 'Node.js', '.NET', 'MySQL', 'SQL Server'],
    publicSummary:
      'Delivered service request workflows and field operations tooling across submission, dispatch, approval, and fulfillment flows.',
    narrative: {
      context:
        'The product needed to support field service teams managing requests from submission through completion, with role-based access and third-party integrations.',
      challenge:
        'Coordinating multiple workflows across different user roles while integrating external APIs and maintaining a consistent UX.',
      constraints: [
        'Legacy and greenfield surfaces coexisting during migration.',
        'Third-party API reliability and rate limits affecting integration design.',
        'Need for audit trails and approval flows in service operations.',
      ],
      responsibilities: [
        'Built FieldTrack24 service request workflows covering submission, dispatch, approval, and fulfillment.',
        'Integrated third-party APIs including delivery providers and mapping services.',
        'Improved existing scripts and UI flows for operational efficiency.',
      ],
      architecture: {
        overview:
          'A hybrid stack with Angular and React frontends, .NET and Node.js backends, and SQL Server and MySQL for persistence.',
        frontend: [
          'Angular and React interfaces for service request and field operations.',
          'Role-based views for different user personas in the workflow.',
        ],
        backend: [
          '.NET and Node.js services for business logic and API orchestration.',
          'SQL Server and MySQL for transactional and operational data.',
        ],
        integrations: [
          'Third-party delivery and mapping APIs for logistics and dispatch.',
          'External systems for approval and notification flows.',
        ],
        dataFlow: [
          'Requests flow from submission through dispatch and approval to fulfillment.',
          'Status updates propagate to stakeholders via integrated channels.',
        ],
      },
      execution: [
        'Delivered end-to-end service request workflows on schedule.',
        'Integrated multiple third-party APIs with error handling and fallbacks.',
        'Iterated on UI flows based on operational feedback.',
      ],
      outcomes: [
        'Streamlined service operations with clear workflow visibility.',
        'Reduced manual handoffs through integrated approval and dispatch.',
        'Established patterns for third-party integration that scaled to additional providers.',
      ],
      leadershipSignals: [
        'Owned feature delivery across frontend and backend layers.',
        'Balanced technical debt with delivery pace in a mixed-stack environment.',
      ],
    },
    sanitized: true,
  },
  {
    id: 'smart-venture-delivery-management',
    title: 'Delivery Management at Smart Venture',
    client: 'Smart Venture',
    role: 'Software Development Manager',
    timeline: {
      start: '2017-08-01',
      end: '2019-03-01',
      status: 'completed',
    },
    sector: 'Professional Services',
    stack: ['Web Platforms', 'Client Delivery', 'Team Coordination'],
    publicSummary:
      'Managed software delivery teams and coordinated product implementation from planning through release for client-facing web platforms.',
    narrative: {
      context:
        'Smart Venture delivered custom web platforms for clients, requiring coordination between engineering teams, stakeholders, and release timelines.',
      challenge:
        'Maintaining delivery quality and cadence while aligning engineering execution with changing client priorities.',
      constraints: [
        'Client-driven scope and timeline expectations.',
        'Multiple concurrent projects with shared team capacity.',
        'Need for clear communication between technical and non-technical stakeholders.',
      ],
      responsibilities: [
        'Owned project execution cadence and delivery quality for client-facing platforms.',
        'Aligned engineering execution with stakeholder priorities and release timelines.',
        'Coordinated planning, estimation, and status reporting across teams.',
      ],
      architecture: {
        overview:
          'Client-facing web platforms delivered through structured project management and engineering execution.',
        frontend: [
          'Custom web interfaces tailored to client requirements.',
          'Responsive and accessible design for end-user workflows.',
        ],
        backend: [
          'Backend services supporting client-specific business logic.',
          'Integration points for client systems where required.',
        ],
        integrations: [
          'Client systems and data sources where applicable.',
          'Deployment and release pipelines for production delivery.',
        ],
        dataFlow: [
          'Requirements flow from stakeholders through planning to implementation.',
          'Releases follow defined cadence with quality gates and sign-off.',
        ],
      },
      execution: [
        'Maintained predictable delivery cadence across multiple client engagements.',
        'Facilitated technical and business alignment during planning and execution.',
        'Drove accountability for quality and timeline commitments.',
      ],
      outcomes: [
        'Improved delivery predictability for client engagements.',
        'Stronger alignment between engineering output and stakeholder expectations.',
        'Clearer communication patterns for cross-functional coordination.',
      ],
      leadershipSignals: [
        'Managed team delivery and client communication.',
        'Owned delivery accountability from planning through release.',
        'Bridged technical execution and business priorities.',
      ],
    },
    sanitized: true,
  },
];

export default caseStudies;
