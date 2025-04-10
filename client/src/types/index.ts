import { ReactNode } from "react";

export interface Skill {
  name: string;
  percentage: number;
}

export interface ToolCategory {
  name: string;
  tools: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  icon: string;
  color: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
  };
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
