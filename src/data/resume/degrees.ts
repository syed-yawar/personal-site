import type { EducationItem, ResumeSection } from '@/types/content';

export type Degree = EducationItem;

const degrees: Degree[] = [
  {
    school: 'Punjab University College of Information Technology (PUCIT)',
    degree: 'Bachelor of Computer Science (BCS)',
    link: 'https://pucit.edu.pk',
    year: 2017,
  },
];

export const educationSection: ResumeSection<Degree> = {
  id: 'education',
  title: 'Education',
  items: degrees,
};

export default degrees;
