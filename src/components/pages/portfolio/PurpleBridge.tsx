import React from 'react';
import tw, { styled } from 'twin.macro';

import Grid from '@/components/common/Grid';
import Img from '@/components/common/Img';
import { Li, Ul } from '@/components/common/List';
import Spacing from '@/components/common/Spacing';
import Text from '@/components/common/Text';
import ProjectInfo from '@/components/pages/portfolio/ProjectInfo';
import { PORTFOLIO_PROJECTS } from '@/constants';
import { Project } from '@/types';

const PROJECT_INFO = PORTFOLIO_PROJECTS[Project.PurpleBridge];

const IMAGE_URL_LIST = [
  '/images/screenshots/purplebridge/bridge.png',
  '/images/screenshots/purplebridge/swap.png',
  '/images/screenshots/purplebridge/add-liquidity.png',
  '/images/screenshots/purplebridge/remove-liquidity.png',
];

const PurpleBridge = () => {
  return (
    <>
      <ProjectInfo {...PROJECT_INFO}></ProjectInfo>

      <Spacing height={40}></Spacing>

      <Grid col={2} gap={16}>
        {IMAGE_URL_LIST.map((url, idx) => (
          <div key={idx}>
            <Img src={url}></Img>
          </div>
        ))}
      </Grid>

      <Spacing height={16}></Spacing>

      <Img
        src="/images/screenshots/purplebridge/dashboard.png"
        width="75%"
      ></Img>

      <Spacing height={24}></Spacing>

      <Text.P>
        Purple Bridge는 Bora & Polygon 블록체인 Bridge 및 dex 서비스입니다.
      </Text.P>
      <Text.P>
        Input edge case 처리, Slider API 호출 부분 trottling 처리, 반응형 디자인
        적용, Dashboard page, History modal 개발을 하였습니다.
      </Text.P>
      <Ul>
        <Li>Purple Bridge DApp 서비스 런칭</Li>
        <Li>모바일 반응형 작업</Li>
        <Li>Face wallet 지갑 연동</Li>
        <Li>대시보드 페이지 개발</Li>
      </Ul>
    </>
  );
};

export default PurpleBridge;

const Wrapper = styled.div`
  ${tw``};
`;
