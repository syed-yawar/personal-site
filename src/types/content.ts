export type ContactLinkKind =
  | 'email'
  | 'linkedin'
  | 'github'
  | 'medium'
  | 'phone'
  | 'website'
  | 'other';

export interface ContactLink {
  label: string;
  link: string;
  kind: ContactLinkKind;
  isPrimary?: boolean;
  isPlaceholder?: boolean;
}

export interface ResumeSection<TItem> {
  id: string;
  title: string;
  summary?: string;
  items: TItem[];
}

export interface ExperienceItem {
  id?: string;
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
  technologies?: string[];
  leadershipFocus?: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  link: string;
  year: number;
}

export interface SkillItem {
  title: string;
  competency: number;
  category: string[];
}

export interface SkillCategory {
  name: string;
  color: string;
  textColor: 'dark' | 'light';
}

export interface CourseItem {
  title: string;
  number: string;
  link: string;
  university: string;
}

export interface CaseStudyTimeline {
  start: string;
  end?: string;
  status: 'ongoing' | 'completed';
}

export interface CaseStudyArchitecture {
  overview: string;
  frontend: string[];
  backend: string[];
  integrations: string[];
  dataFlow: string[];
}

export interface CaseStudyNarrative {
  context: string;
  challenge: string;
  constraints: string[];
  responsibilities: string[];
  architecture: CaseStudyArchitecture;
  execution: string[];
  outcomes: string[];
  leadershipSignals: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  role: string;
  timeline: CaseStudyTimeline;
  sector: string;
  stack: string[];
  publicSummary: string;
  narrative: CaseStudyNarrative;
  sanitized: boolean;
}

export interface Profile {
  name: string;
  headline: string;
  currentRole: string;
  location: string;
  careerStartDate: string;
  yearsOfExperience: number;
  targetRole: string;
  summary: string;
  strengths: string[];
  focusAreas: string[];
  valueProposition: string[];
  resumeFile: string;
  contact: ContactLink[];
}
