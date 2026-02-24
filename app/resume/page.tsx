import type { Metadata } from 'next';

import Courses from '@/components/Resume/Courses';
import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import References from '@/components/Resume/References';
import ResumeNav from '@/components/Resume/ResumeNav';
import Skills from '@/components/Resume/Skills';
import { WebPageSchema } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import courses from '@/data/resume/courses';
import degrees from '@/data/resume/degrees';
import { categories, skills } from '@/data/resume/skills';
import work from '@/data/resume/work';

const PAGE_DESCRIPTION =
  "Syed Yawar Hussain's Resume. Principal Software Engineer focused on architecture ownership, team leadership, and high-impact product delivery.";

export const metadata: Metadata = {
  title: 'Resume',
  description: PAGE_DESCRIPTION,
  alternates: { canonical: '/resume' },
  openGraph: {
    url: '/resume',
    title: 'Resume',
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    title: 'Resume',
    description: PAGE_DESCRIPTION,
  },
};

export default function ResumePage() {
  return (
    <PageWrapper>
      <WebPageSchema
        title="Resume"
        description={PAGE_DESCRIPTION}
        path="/resume"
      />
      <section className="resume-page">
        <header className="resume-header">
          <h1 className="resume-title">Resume</h1>
          <p className="resume-summary">
            Engineering leader with 8+ years delivering production web platforms
            across healthcare, marketplace, and AI-assisted workflows. Currently
            Principal Software Engineer at Arbisoft, focused on architecture
            ownership, cross-functional execution, and sustainable product
            velocity.
          </p>
        </header>

        <ResumeNav />

        <div className="resume-content">
          <section id="experience" className="resume-section">
            <Experience data={work} />
          </section>

          <section id="education" className="resume-section">
            <Education data={degrees} />
          </section>

          <section id="skills" className="resume-section">
            <Skills skills={skills} categories={categories} />
          </section>

          <section id="courses" className="resume-section">
            <Courses data={courses} />
          </section>

          <section id="references" className="resume-section">
            <References />
          </section>
        </div>
      </section>
    </PageWrapper>
  );
}
