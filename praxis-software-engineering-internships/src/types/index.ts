export type InternshipCategory =
  | 'Software Development'
  | 'AI Engineering'
  | 'Web Development'
  | 'Automation'
  | 'Data & Analytics'
  | 'QA & Testing';

export type ExperienceLevel = 'Foundational' | 'Intermediate' | 'Advanced';
export type WorkMode = 'Remote' | 'Hybrid';
export type InternshipStatus = 'Open for Applications' | 'Upcoming Cohort' | 'In Progress';

export interface InternshipJourneyMilestone {
  phase: string;
  duration: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface Internship {
  id: string;
  slug: string;
  title: string;
  category: InternshipCategory;
  shortDescription: string;
  duration: string;
  workMode: WorkMode;
  level: ExperienceLevel;
  status: InternshipStatus;
  technologies: string[];
  illustrationPath: string;
  overview: string;
  responsibilities: string[];
  skillsGained: string[];
  expectedDeliverables: string[];
  requirements: string[];
  timeline: InternshipJourneyMilestone[];
  cohortStart?: string;
  weeklyHours?: string;
}

export interface ApplicationFormData {
  fullName: string;
  email: string;
  university: string;
  degree: string;
  graduationYear: string;
  selectedInternshipSlug: string;
  skills: string;
  githubUrl: string;
  linkedinUrl: string;
  portfolioUrl: string;
  statement: string;
  availability: string;
  resumeFileName?: string;
}
