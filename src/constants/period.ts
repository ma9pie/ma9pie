import { Period, Project } from '@/types';

export const PROJECT_PERIOD: Record<Project, Period> = {
  [Project.CryptoErp]: ['2024-04', '2024-04'],
  [Project.SoohoIoHomepage]: ['2024-02', '2024-02'],
  [Project.TealswapV3]: ['2023-12', '2024-04'],
  [Project.Mitosis]: ['2023-11', '2023-11'],
  [Project.VivaLeva]: ['2023-07', '2023-12'],
  [Project.PurpleBridge]: ['2023-03', '2023-06'],
  [Project.CashierestWeb]: ['2022-03', '2022-11'],
  [Project.CashierestMobile]: ['2022-11', '2023-03'],
  [Project.TodoListApp]: ['2023-02', null],
  [Project.PPGG]: ['2022-12', '2023-02'],
  [Project.FEInterview]: ['2022-11', '2023-02'],
  [Project.Polypoli]: ['2021-11', '2022-03'],
};
