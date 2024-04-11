import { Project } from '@/types';

export const GITHUB_URL = 'https://github.com/ma9pie';
export const BLOG_URL = 'https://cocoon1787.tistory.com';
export const LINKEDIN_URL =
  'https://www.linkedin.com/in/%EC%A4%80%EC%98%81-%EA%B9%80-5b9a19268/';
export const ARTICLE_URLS = [
  {
    title:
      '[React] 모달 깊게 파헤치기 : 효율적인 모달 관리에 대하여 (useModal custom hooks)',
    url: 'https://cocoon1787.tistory.com/875',
  },
];

export const SERVICE_URLS: Record<Project, string> = {
  [Project.CryptoErp]: 'https://crypto-erp.sooho.io',
  [Project.SoohoIoHomepage]: 'https://sooho.io',
  [Project.TealswapV3]: 'https://app.tealswap.com/en/',
  [Project.Mitosis]: 'https://mitosis.finance',
  [Project.VivaLeva]: 'https://vivaleva.com',
  [Project.PurpleBridge]: 'https://purplebridge.link',
  [Project.CashierestWeb]: 'https://www.cashierest.com',
  [Project.CashierestMobile]: 'https://m.cashierest.com',
  [Project.TodoListApp]: 'https://check-todo.vercel.app',
  [Project.PPGG]: 'https://ppgg.vercel.app',
  [Project.FEInterview]: 'https://frontend-interview-question.vercel.app',
  [Project.Polypoli]: 'http://polypoli.kr',
};

export const GIT_REPOSITORY_URLS: Record<Project, string | null> = {
  [Project.CryptoErp]: null,
  [Project.SoohoIoHomepage]: null,
  [Project.TealswapV3]: null,
  [Project.Mitosis]: null,
  [Project.VivaLeva]: null,
  [Project.PurpleBridge]: null,
  [Project.CashierestWeb]: null,
  [Project.CashierestMobile]: null,
  [Project.TodoListApp]: 'https://github.com/ma9pie/todo-list-app',
  [Project.PPGG]: 'https://github.com/ma9pie/pp.gg',
  [Project.FEInterview]: 'https://github.com/ma9pie/frontend-interview',
  [Project.Polypoli]: null,
};
