import React from 'react';

import Grid from '@/components/common/Grid';
import Img from '@/components/common/Img';
import { Li, Ul } from '@/components/common/List';
import Spacing from '@/components/common/Spacing';
import Text from '@/components/common/Text';
import Info from '@/components/pages/portfolio/Info';
import { PORTFOLIO_PROJECTS } from '@/constants';
import { Project } from '@/types';

const INFO = PORTFOLIO_PROJECTS[Project.VivaLeva];

const VivaLeva = () => {
  return (
    <>
      <Info {...INFO}></Info>

      <Spacing height={40}></Spacing>

      <Grid col={2} gap={16}>
        <Img src="/images/screenshots/vivaleva/home.png" width="100%"></Img>
        <Img src="/images/screenshots/vivaleva/lend.png" width="100%"></Img>
        <Img src="/images/screenshots/vivaleva/stake.png" width="100%"></Img>
        <Img src="/images/screenshots/vivaleva/farm.png" width="100%"></Img>
        <Img
          src="/images/screenshots/vivaleva/portfolio.png"
          width="100%"
        ></Img>
        <Img
          src="/images/screenshots/vivaleva/farm-modal.png"
          width="100%"
        ></Img>
      </Grid>

      <Spacing height={24}></Spacing>

      <Text.P>
        VivaLeva는 zkSync Era protocol 기반의 Lending, Staking, Leverage yield
        farming 서비스입니다. FE 개발 파트 전체를 담당하였고, 서버 호출 부분이
        많아 React-query를 통해 요청 수의 30% 정도를 절감하여 최적화를
        하였습니다. 또한 하나의 컴포넌트 내에서 관리하는 state의 개수가
        20~30개가 넘어가는 부분이 다수 있어 Custom hooks로 비즈니스적인 로직을
        분리하고 리팩토링하여 코드 가독성을 높였습니다.
      </Text.P>

      <Ul>
        <Li>메타마스크 연동 개발</Li>
        <Li>모바일 반응형 개발</Li>
        <Li>Uniswap V3 liquidity chart 구현</Li>
        <Li>숫자 정밀 계산 유틸 개발</Li>
        <Li>Jest를 통한 util test code 작성 및 git action 연동</Li>
        <Li>GA4 도입 및 사용자 행동 분석을 통한 UX 증대 경험</Li>
        <Li>Sentry 도입 및 오류 로깅 분석을 통한 bug fix</Li>
      </Ul>

      <Spacing height={24}></Spacing>

      <Text.P semibold>[리팩토링]</Text.P>
      <Text.P>
        기존 담당자에게 프로젝트를 인수인계 받아서 런칭 준비를 하였습니다.
        하지만 코드 내에서 리팩토링이나 비효율적인 부분들이 많이 보였었으나
        한번에 바꾸기는 힘들 것 같아서 런칭 이후의 점진적인 리팩토링을
        계획하였습니다. 예시로는 기존의 useModal의 경우 단일 모달 처리만
        되어있어 다중 모달 처리가 가능한 hooks를 만들고 해당 hooks가 사용되는
        컴포넌트들을 하나씩 수정해 나갔습니다. 이외에도 core한 util이나 hooks를
        새로 만들어 기존 코드를 조금씩 수정해 나갔고, 총 2주간의 테스트와
        리팩토링을 통해서 모두 새로운 코드로 교체할 수 있었습니다. 기술 부채가
        쌓이기 전, 런칭 초기에 모두 잡겠다는 판단을 하였었고, 결론적으로는 추후
        유지보수성이나 생산성의 증대를 가져올 수 있었습니다.
      </Text.P>

      <Spacing height={24}></Spacing>

      <Text.P semibold>[UX 증대]</Text.P>
      <Text.P>
        런칭 초기에 팀 내 스프린트 회의에서 프로젝트에 GA4를 연동하여 user
        data를 미리 쌓아놔야 한다고 적극적으로 의견을 냈었습니다. data 분석을
        통한 UX 개선 가능이나 국가별 사용자 수 분석 등등을 근거로 구성원들의
        동의를 이끌어 낼 수 있었습니다.
      </Text.P>
      <Text.P>
        그 결과 GA 데이터 기반으로 추후 홍보 타겟층 선정에 도움을 줄 수
        있었으며, 아래의 목록 외에 수많은 이벤트들을 분석하여 UX적으로 개선할 수
        있었습니다.
      </Text.P>
      <Ul>
        <Li>사용자들이 많이 선택하는 드롭다운 옵션</Li>
        <Li>사용자들이 많이 클릭하는 버튼</Li>
        <Li>페이지별 접속자 수</Li>
        <Li>사용자들이 많이 띄우는 Modal 종류</Li>
        <Li>API 호출 횟수</Li>
      </Ul>

      <Spacing height={24}></Spacing>

      <Text.P semibold>[분석 및 기능 개발]</Text.P>

      <Img
        src="/images/screenshots/vivaleva/liquidity-chart.png"
        width="75%"
      ></Img>
      <Spacing height={8}></Spacing>
      <Text.P>
        Leverage farming service를 개발하면서 위와 같은 차트를 구현하였었습니다.
        일반적으로 대부분의 회사 프로젝트가 private github repository로 되어있는
        것과는 다르게, Blockchain DAPP들은 대부분 public github repository로
        되어 있습니다. 해당 차트는 d3 라이브러리로 구현되어 있어 모든 부분을
        혼자 개발하기에는 큰 어려움이 있었으나, Uniswap, Pancakeswap과 같은
        메이저 프로젝트의 코드들을 많이 분석하였고, 관련 코드를 참고하여 기능
        개발을 할 수 있었습니다.
      </Text.P>
      <Text.P>
        그리고 타사의 FE 프로젝트를 분석하면서, 아키텍쳐 구성방식, business
        logic 분리, 최적화 방법 등등이 어떤식으로 구현되었는지 알 수 있었던 점이
        이후 개발에도 크게 도움을 주었던 것 같습니다.
      </Text.P>
    </>
  );
};

export default VivaLeva;
