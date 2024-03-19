import {
  GIT_REPOSITORY_URLS,
  PROJECT_PERIOD,
  PROJECT_TECH_STACK,
  SERVICE_URLS,
} from '@/constants';
import { Company, PortfolioProject, Project, ProjectType } from '@/types';

const createProject = ({
  company,
  projectType,
  project,
  active,
}: {
  company?: Company;
  projectType: ProjectType;
  project: Project;
  github?: boolean;
  active: boolean;
}): PortfolioProject => {
  return {
    company,
    projectType,
    title: project,
    period: PROJECT_PERIOD[project],
    service: {
      url: SERVICE_URLS[project],
      active,
    },
    github: GIT_REPOSITORY_URLS[project],
    techStacks: PROJECT_TECH_STACK[project],
  };
};

export const PORTFOLIO_PROJECTS: Record<Project, PortfolioProject> = {
  [Project.TealswapV3]: createProject({
    company: Company.SoohoIo,
    projectType: ProjectType.Work,
    project: Project.TealswapV3,
    active: true,
  }),
  [Project.SoohoIoHomepage]: createProject({
    company: Company.SoohoIo,
    projectType: ProjectType.Work,
    project: Project.SoohoIoHomepage,
    active: true,
  }),
  [Project.Mitosis]: createProject({
    company: Company.SoohoIo,
    projectType: ProjectType.Work,
    project: Project.Mitosis,
    active: false,
  }),
  [Project.VivaLeva]: createProject({
    company: Company.SoohoIo,
    projectType: ProjectType.Work,
    project: Project.VivaLeva,
    active: true,
  }),
  [Project.PurpleBridge]: createProject({
    company: Company.SoohoIo,
    projectType: ProjectType.Work,
    project: Project.PurpleBridge,
    active: true,
  }),
  [Project.CashierestWeb]: createProject({
    company: Company.Newlink,
    projectType: ProjectType.Work,
    project: Project.CashierestWeb,
    active: false,
  }),
  [Project.CashierestMobile]: createProject({
    company: Company.Newlink,
    projectType: ProjectType.Work,
    project: Project.CashierestMobile,
    active: false,
  }),
  [Project.TodoListApp]: createProject({
    projectType: ProjectType.Personal,
    project: Project.TodoListApp,
    active: true,
    github: true,
  }),
  [Project.PPGG]: createProject({
    projectType: ProjectType.Personal,
    project: Project.PPGG,
    active: true,
    github: true,
  }),
  [Project.FEInterview]: createProject({
    projectType: ProjectType.Personal,
    project: Project.FEInterview,
    active: true,
    github: true,
  }),
  [Project.Polypoli]: createProject({
    projectType: ProjectType.Team,
    project: Project.Polypoli,
    active: false,
  }),
};
