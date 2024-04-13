import { PROJECT_PERIOD, PROJECT_TECH_STACK, SERVICE_URLS } from '@/constants';
import { Company, Experience, Position, Project, WorkProject } from '@/types';

const createProject = ({
  project,
  active,
  description,
  tasks,
}: {
  project: Project;
  active: boolean;
  description: string;
  tasks: string[];
}): WorkProject => {
  return {
    title: project,
    projectPeriod: PROJECT_PERIOD[project],
    service: {
      url: SERVICE_URLS[project],
      active,
    },
    description,
    tasks,
    techStacks: PROJECT_TECH_STACK[project],
  };
};

export const EXPERIENCES: Experience[] = [
  {
    company: Company.SoohoIo,
    position: Position.Frontend,
    workingPeriod: ['2023.03', null],
    projects: [
      createProject({
        project: Project.CryptoErp,
        active: true,
        description: `${Project.CryptoErp}는 각 기업마다 암호화폐 회계 관리의 표준을 제공하고 사업적 파트너쉽을 위해서 AWS AMB Query를 활용하여 개발한 암호화폐 회계 관리 대시보드 SaaS PoC 프로젝트 입니다. 가장 빠르게 개발 가능한 인력으로 투입되어 6일간 개발하여 완성하였습니다.`,
        tasks: [
          'react-hook-form을 통한 Login, Sign Up 기능 구현',
          'User info modal, wallet add & delete 기능 구현',
          'Portfolio 페이지 기능 구현',
          'PNL history 페이지 기능 구현',
        ],
      }),
      createProject({
        project: Project.TealswapV3,
        active: true,
        description: 'Uniswap v3 기능 개발 담당',
        tasks: [
          'Uniswap V3 liquidity chart 구현',
          'Pool 생성 기능 개발',
          'Position 추가 기능 개발',
          'Position 규모 조정 기능 개발',
          'Incentive program service 개발',
          'Modal system 구축',
        ],
      }),
      createProject({
        project: Project.SoohoIoHomepage,
        active: true,
        description: '수호아이오 홈페이지 리뉴얼 작업',
        tasks: [
          '홈페이지 개발',
          '모바일 반응형 작업',
          '언어 변경 기능 추가',
          'GA4 연동',
          'SEO 최적화',
          '블로그 API 연동',
        ],
      }),
      createProject({
        project: Project.Mitosis,
        active: false,
        description: 'TradingView chart 개발 지원',
        tasks: [
          'Tradingview chart Datafeed 구축',
          'Tradingview chart customize option 추가',
        ],
      }),
      createProject({
        project: Project.VivaLeva,
        active: true,
        description:
          'zkSync Era protocol 기반의 Lending, Staking, Leverage yield farming 서비스 개발',
        tasks: [
          'FE 개발 파트 전체 담당',
          '모바일 반응형 개발',
          'Uniswap V3 liquidity chart 구현',
          'Modal system 구축',
          'React-query를 통한 API 캐싱 후 요청 수 30% 절감',
          'Jest를 통한 util test code 작성 및 git action 연동',
          'GA4 도입 및 사용자 행동 분석 통한 UX 증대 경험',
          'Sentry 도입 및 오류 로깅 분석을 통한 bug fix',
        ],
      }),
      createProject({
        project: Project.PurpleBridge,
        active: true,
        description: 'Bora chian과 Polygon chain 간의 bridging service',
        tasks: [
          'Purple Bridge dApp 서비스 런칭',
          'Bridge, Swap, Add & Remove liquidity 기능 구현',
          'Metamask 지갑 연동',
          'Face wallet 지갑 연동',
          '대시보드 페이지 개발',
          '모바일 반응형 작업',
        ],
      }),
    ],
  },
  {
    company: Company.Newlink,
    position: Position.Frontend,
    workingPeriod: ['2022.03', '2023.03'],
    projects: [
      createProject({
        project: Project.CashierestWeb,
        active: false,
        description:
          '새로운 캐셔레스트 2.0 서비스 open을 위한 첫 FE 멤버로 합류를 하였고, FE 개발 파트의 전반적인 부분을 담당하였습니다.',
        tasks: [
          '프로젝트 아키텍처 설계',
          '홈, 거래소, 자산 현황, 거래 내역 페이지 담당',
          '모바일 앱용 차트 Web view 개발',
          'Prettierrc 도입으로 팀 내 코드 스타일 통일',
          'GA 연동',
          'Jenkins 배포 스크립트 설정 및 PM2 세팅',
          'Decimals.js를 통한 숫자 정밀 계산',
          'API 캐싱을 위한 React-query 도입',
          'Trottle, Debounce, List virtualization을 통한 거래소 페이지 렌더링 성능 최적화',
          'Tradingview chart library를 통한 거래소 차트 구현 및 customizing',
          'Influx DB query문 수정을 통한 chart history API 응답 시간 10배 단축 (700ms -> 70ms)',
        ],
      }),
      createProject({
        project: Project.CashierestMobile,
        active: false,
        description: '캐셔레스트 2.0 모바일 웹 서비스 개발',
        tasks: [
          '프로젝트 아키텍처 설계',
          '홈, 거래소, 거래 내역 페이지 담당',
          'PWA 설정',
        ],
      }),
    ],
  },
];
