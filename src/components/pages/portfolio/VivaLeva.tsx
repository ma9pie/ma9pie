import React from 'react';
import tw, { styled } from 'twin.macro';

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

      <Grid>
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
        하였습니다. 또한 하나의 컴포넌트 내에서 관리하는 state의 개수가 20 ~
        30개가 넘어가는 부분이 다수 있어 Custom hooks로 비즈니스적인 로직을
        분리하고 리팩토링 하여 코드 가독성을 높였습니다.
      </Text.P>

      <Spacing height={24}></Spacing>

      <Ul>
        <Li>메타마스크 연동 개발</Li>
        <Li>모바일 반응형 개발</Li>
        <Li>Uniswap V3 liquidity chart 구현</Li>
        <Li>숫자 정밀 계산 유틸 개발</Li>
        <Li>Jest를 통한 util test code 작성 및 git action 연동</Li>
        <Li>GA4 도입 및 사용자 행동 분석을 통한 UX 증대 경험</Li>
        <Li>Sentry 도입 및 오류 로깅 분석을 통한 bug fix</Li>
      </Ul>
    </>
  );
};

export default VivaLeva;

const Grid = styled.div`
  ${tw`grid grid-cols-2 gap-4`};
`;
