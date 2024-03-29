import React from 'react';
import tw, { styled } from 'twin.macro';

import Flex from '@/components/common/Flex';
import Img from '@/components/common/Img';
import { Li, Ul } from '@/components/common/List';
import Spacing from '@/components/common/Spacing';
import Text from '@/components/common/Text';
import ProjectInfo from '@/components/pages/portfolio/ProjectInfo';
import { PORTFOLIO_PROJECTS } from '@/constants';
import { Project } from '@/types';

const PROJECT_INFO = PORTFOLIO_PROJECTS[Project.CashierestMobile];

const IMAGE_URL_LIST = [
  '/images/screenshots/cashierest/mobile-home.png',
  '/images/screenshots/cashierest/mobile-coin-list.png',
  '/images/screenshots/cashierest/mobile-order.png',
  '/images/screenshots/cashierest/mobile-orderbook.png',
  '/images/screenshots/cashierest/mobile-chart.png',
];

const CashierestMobile = () => {
  return (
    <>
      <ProjectInfo {...PROJECT_INFO}></ProjectInfo>

      <Spacing height={24}></Spacing>

      <Flex gap={16}>
        {IMAGE_URL_LIST.map((url, idx) => (
          <ImageWrapper key={idx}>
            <Img src={url}></Img>
          </ImageWrapper>
        ))}
      </Flex>

      <Spacing height={24}></Spacing>

      <Text.P>
        홈, 거래소, 거래내역 부분을 담당하였습니다. 모바일과 동일한 스펙으로
        개발하여 배포하였습니다.
      </Text.P>
      <Ul>
        <Li>프로젝트 아키텍처 설계</Li>
        <Li>거래소 기능 구현</Li>
        <Li>차트 개발</Li>
        <Li>다크 모드</Li>
        <Li>PWA 설정</Li>
      </Ul>
    </>
  );
};

export default CashierestMobile;

const ImageWrapper = styled.div`
  ${tw`flex-1 shadow-lg`};
`;
