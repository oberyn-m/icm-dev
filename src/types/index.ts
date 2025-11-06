// Global TypeScript types

export interface Skill {
  name: string;
  category?: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export type Theme = 'light' | 'dark';
