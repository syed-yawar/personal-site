import type { ResumeSection, SkillCategory, SkillItem } from '@/types/content';

export type Skill = SkillItem;
export type Category = SkillCategory;

const skills: Skill[] = [
  {
    title: 'TypeScript',
    competency: 5,
    category: ['Frontend Engineering', 'Architecture & Delivery'],
  },
  {
    title: 'React',
    competency: 5,
    category: ['Frontend Engineering'],
  },
  {
    title: 'Next.js',
    competency: 5,
    category: ['Frontend Engineering', 'Architecture & Delivery'],
  },
  {
    title: 'GraphQL',
    competency: 4,
    category: ['Backend Engineering', 'Frontend Engineering'],
  },
  {
    title: 'Node.js',
    competency: 5,
    category: ['Backend Engineering', 'Architecture & Delivery'],
  },
  {
    title: 'NestJS',
    competency: 4,
    category: ['Backend Engineering'],
  },
  {
    title: 'PostgreSQL',
    competency: 4,
    category: ['Backend Engineering', 'Cloud & Platform'],
  },
  {
    title: 'AWS (ECS, EC2, SQS, S3, Lambda, EventBridge)',
    competency: 4,
    category: ['Cloud & Platform'],
  },
  {
    title: 'System Design',
    competency: 5,
    category: ['Architecture & Delivery'],
  },
  {
    title: 'Delivery Planning',
    competency: 5,
    category: ['Leadership'],
  },
  {
    title: 'Technical Leadership',
    competency: 5,
    category: ['Leadership'],
  },
  {
    title: 'Cross-functional Collaboration',
    competency: 5,
    category: ['Leadership', 'Architecture & Delivery'],
  },
  {
    title: 'Performance & SEO Optimization',
    competency: 4,
    category: ['Frontend Engineering', 'Architecture & Delivery'],
  },
  {
    title: 'AI-assisted Workflow Integration',
    competency: 4,
    category: ['Data & AI', 'Architecture & Delivery'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const CATEGORY_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: 'var(--color-skill-1)', textColor: 'light' },
  { color: 'var(--color-skill-2)', textColor: 'dark' },
  { color: 'var(--color-skill-3)', textColor: 'light' },
  { color: 'var(--color-skill-4)', textColor: 'light' },
  { color: 'var(--color-skill-5)', textColor: 'dark' },
  { color: 'var(--color-skill-6)', textColor: 'dark' },
];

const FALLBACK_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: '#3896e2', textColor: 'dark' },
  { color: '#c3423f', textColor: 'light' },
  { color: '#d75858', textColor: 'light' },
  { color: '#747fff', textColor: 'light' },
  { color: '#64cb7b', textColor: 'dark' },
];

function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();

  const allColors = [...CATEGORY_COLORS, ...FALLBACK_COLORS];

  if (
    process.env.NODE_ENV === 'development' &&
    uniqueCategories.length > allColors.length
  ) {
    console.warn(
      `[skills.ts] Warning: ${uniqueCategories.length} categories but only ${allColors.length} colors defined`,
    );
  }

  return uniqueCategories.map((category, index) => {
    const colorConfig = allColors[index] ?? {
      color: '#888888',
      textColor: 'light' as const,
    };

    return {
      name: category,
      color: colorConfig.color,
      textColor: colorConfig.textColor,
    };
  });
}

const categories: Category[] = buildCategories(skills);

export const skillsSection: ResumeSection<Skill> = {
  id: 'skills',
  title: 'Skills',
  summary: 'Lead/Staff-level ownership with hands-on technical depth.',
  items: skills,
};

export { categories, skills };
