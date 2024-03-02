import { Position, TechStack } from '@/types';

export type Period = [string, string | null];
export type Link = { url: string; active: boolean };

export interface Project {
  title: string;
  projectPeriod: Period;
  link: Link | null;
  description: string;
  tasks: string[];
  techStacks: TechStack[];
}

export interface Experience {
  company: string;
  position: Position;
  workingPeriod: Period;
  projects: Project[];
}
