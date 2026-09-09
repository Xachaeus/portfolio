export interface ExperienceEntry {
  role: string;
  organization: string;
  location?: string;
  startDate: string; // e.g. "2022-06"
  endDate?: string; // omit for "Present"
  summary: string;
  achievements?: string[];
  technologies?: string[];
}

export interface PublicationEntry {
  title: string;
  authors: string[];
  DOI: string;
  year?: string;
  conference?: string;
  pages?: string;
  publisher?: string;
  link?: string;
  summary?: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate?: string;
  details?: string;
}

export interface RecognitionEntry {
  title: string;
  date: string;
  institution?: string;
  location?: string;
  details?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  location?: string;
  email?: string;
  links?: { label: string; url: string }[];
  experience: ExperienceEntry[];
  publications?: PublicationEntry[];
  education?: EducationEntry[];
  recognitions?: RecognitionEntry[];
  skills: SkillGroup[];
  resumeFileUrl?: string; // optional path to a downloadable PDF, e.g. /assets/resume.pdf
}
