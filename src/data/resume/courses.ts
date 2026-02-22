import type { CourseItem, ResumeSection } from '@/types/content';

export type Course = CourseItem;

const courses: Course[] = [];

export const courseSection: ResumeSection<Course> = {
  id: 'courses',
  title: 'Selected Courses',
  summary: 'Detailed coursework is available on request.',
  items: courses,
};

export default courses;
