import { Experience, Position, TechStack } from '@/types';

const TEMPLATE = {
  company: 'company',
  position: Position.Frontend,
  workingPeriod: ['period', 'period'],
  projects: [
    {
      title: 'title',
      period: ['period', 'period'],
      link: {
        url: 'null',
        active: true,
      },
      description: 'description',
      tasks: [
        'null',
        'null',
        'null',
        'null',
        'null',
        'null',
        'null',
        'null',
        'null',
      ],
      techStacks: [
        TechStack.React,
        TechStack.React,
        TechStack.React,
        TechStack.React,
      ],
    },
  ],
};

export const EXPERIENCES: Experience[] = [
  {
    company: 'SOOHO.IO',
    position: Position.Frontend,
    workingPeriod: ['2023.03', null],
    projects: [
      {
        title: 'Renewal Homepage',
        projectPeriod: ['2024.02', '2024.02'],
        link: {
          url: 'https://sooho.io',
          active: true,
        },
        description: '수호아이오 홈페이지 리뉴얼 작업',
        tasks: [
          'FE 개발 파트 전체 담당',
          '홈페이지 개발',
          '모바일 반응형 작업',
          '언어 변경 기능 추가',
          'GA4 연동',
          'SEO 최적화',
          '블로그 API 연동',
        ],
        techStacks: [
          TechStack.NextJs,
          TechStack.React,
          TechStack.TypeScript,
          TechStack.Jotai,
          TechStack.Emotion,
          TechStack.TailwindCSS,
          TechStack.NextI18next,
        ],
      },
      {
        title: 'Tealswap v3',
        projectPeriod: ['2023.12', '2024.03'],
        link: {
          url: 'https://app.tealswap.com/en/',
          active: true,
        },

        description: 'Uniswap v3 기능 개발 FE 작업 지원',
        tasks: [
          'Uniswap V3 liquidity chart 구현',
          'Pool 생성 기능 개발',
          'Position 추가 기능 개발',
          'Position 규모 조정 기능 개발',
          'Incentive program service 개발',
          'Big.js를 통한 숫자 정밀 계산 유틸 개발',
          'Modal system 구축',
        ],
        techStacks: [
          TechStack.NextJs,
          TechStack.React,
          TechStack.TypeScript,
          TechStack.Jotai,
          TechStack.Emotion,
          TechStack.TailwindCSS,
          TechStack.Wagmi,
          TechStack.Viem,
        ],
      },
      {
        title: 'Mitosis Beta',
        projectPeriod: ['2023.11', '2023.11'],
        link: {
          url: 'https://mitosis.finance',
          active: false,
        },
        description: 'TradingView chart 개발 지원',
        tasks: [
          'Tradingview chart Datafeed 구축',
          'Tradingview chart customize option 추가',
        ],
        techStacks: [TechStack.NextJs, TechStack.React, TechStack.TypeScript],
      },
      {
        title: 'VivaLeva',
        projectPeriod: ['2023.07', '2023.12'],
        link: {
          url: 'https://vivaleva.com',
          active: true,
        },
        description:
          'zkSync Era protocol 기반의 Lending, Staking, Leverage yield farming 서비스 개발',
        tasks: [
          'FE 개발 파트 전체 담당',
          '모바일 반응형 개발',
          'Uniswap V3 liquidity chart 구현',
          'Modal system 구축',
          'Big.js를 통한 숫자 정밀 계산 유틸 개발',
          'React-query를 통한 API 캐싱 후 요청 수 30% 절감',
          'Jest를 통한 util test code 작성 및 git action 연동',
          'GA4 도입 및 사용자 행동 분석 통한 UX 증대 경험',
          'Sentry 도입 및 오류 로깅 분석을 통한 bug fix',
        ],
        techStacks: [
          TechStack.NextJs,
          TechStack.React,
          TechStack.TypeScript,
          TechStack.Recoil,
          TechStack.Emotion,
          TechStack.TailwindCSS,
          TechStack.ReactQuery,
          TechStack.Ethers,
        ],
      },
      {
        title: 'Purple Bridge',
        projectPeriod: ['2023.03', '2023.06'],
        link: {
          url: 'https://purplebridge.link',
          active: true,
        },
        description: 'Bora chian과 Polygon chain간의 bridging service',
        tasks: [
          'FE 개발 파트 전체 담당',
          'Purple Bridge dApp 서비스 런칭',
          'Bridge, Swap, Add liquidity, Remove liquidity 기능 구현',
          'Metamask 지갑 연동',
          'Face wallet 지갑 연동',
          '대시보드 페이지 개발',
          '모바일 반응형 작업',
        ],
        techStacks: [
          TechStack.NextJs,
          TechStack.React,
          TechStack.TypeScript,
          TechStack.TailwindCSS,
          TechStack.ReactQuery,
          TechStack.Ethers,
        ],
      },
    ],
  },
  {
    company: 'Newlink Cashierest',
    position: Position.Frontend,
    workingPeriod: ['2022.03', '2023.03'],
    projects: [
      {
        title: 'Cashierest Web',
        projectPeriod: ['2022.03', '2022.11'],
        link: {
          url: 'https://www.cashierest.com',
          active: false,
        },
        description:
          '새로운 캐셔레스트 2.0 서비스 open을 위한 첫 FE 멤버로 합류를 하였고, FE 개발 파트의 전반적인 부분을 담당하였습니다.',
        tasks: [
          '프로젝트 아키텍처 설계',
          '홈, 거래소, 자산 현황, 거래 내역 페이지 담당',
          'Prettierrc 도입으로 팀 내 코드 스타일 통일',
          'GA 연동',
          'Jenkins 배포 스크립트 설정 및 PM2 세팅',
          'Decimals.js를 통한 숫자 정밀 계산',
          'API 캐싱을 위한 React-query 도입',
          'Trottle, Debounce, List virtualization을 통한 거래소 페이지 렌더링 성능 최적화',
          'Tradingview chart library를 통한 거래소 차트 구현 및 customizing',
          'Influx DB query문 수정을 통한 chart history API 응답 시간 8~10배 단축 (700ms -> 70ms)',
        ],
        techStacks: [
          TechStack.NextJs,
          TechStack.React,
          TechStack.JavaScript,
          TechStack.Emotion,
          TechStack.Redux,
          TechStack.ReactQuery,
        ],
      },
      {
        title: 'Cashierest Mobile Web',
        projectPeriod: ['2022.11', '2023.03'],
        link: {
          url: 'https://m.cashierest.com',
          active: false,
        },
        description: '캐셔레스트 2.0 모바일 웹 서비스 개발',
        tasks: [
          '프로젝트 아키텍처 설계',
          '홈, 거래소 페이지 개발',
          '모바일 앱용 차트 Web view 개발',
          'PWA 설정',
        ],
        techStacks: [
          TechStack.NextJs,
          TechStack.React,
          TechStack.JavaScript,
          TechStack.Emotion,
          TechStack.Redux,
        ],
      },
    ],
  },
];
