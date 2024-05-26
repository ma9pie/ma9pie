import { Position, TechStack } from '@/types';

export type Period = [string, string | null];
export type Service = { url: string; active: boolean };
export enum Company {
  BithumbKorea = 'Bithumb Korea',
  SoohoIo = 'SOOHO.IO',
  Newlink = 'Newlink',
}
export enum ProjectType {
  Work = '실무',
  Team = '팀',
  Personal = '개인',
}
export enum Project {
  CryptoErp = 'Crypto ERP',
  SoohoIoHomepage = 'SOOHO.IO Homepage',
  TealswapV3 = 'Tealswap V3',
  Mitosis = 'Mitosis Beta',
  VivaLeva = 'VivaLeva',
  PurpleBridge = 'Purple Bridge',
  CashierestWeb = 'Cashierest Web',
  CashierestMobile = 'Cashierest Mobile Web',
  TodoListApp = 'Todo List App',
  PPGG = 'PP.GG',
  FEInterview = 'FE Interview',
  Polypoli = 'Polypoli',
}
export interface Experience {
  company: Company;
  position: Position;
  workingPeriod: Period;
  projects: WorkProject[];
}
export interface WorkProject {
  title: Project;
  projectPeriod: Period;
  service: Service | null;
  description: string;
  tasks: string[];
  techStacks: TechStack[];
}
export interface PortfolioProject {
  company?: Company;
  projectType: ProjectType;
  title: Project;
  period: Period;
  service: Service | null;
  github: string | null;
  techStacks: TechStack[];
}
