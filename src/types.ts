export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'Backend' | 'Frontend' | 'Fullstack' | 'Database' | 'Cloud';
  featured: boolean;
  highlights?: string[];
}

export interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number; // percentage or indicator (e.g. 1-10)
    iconName?: string;
    description: string;
  }[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  techUsed: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  highlights?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
  credentialId?: string;
  description?: string;
}
