import React from 'react';
import tw, { styled } from 'twin.macro';

import Img from '@/components/common/Img';
import { Li, Ul } from '@/components/common/List';
import Text from '@/components/common/Text';
import Container from '@/components/pages/portfolio/Container';
import Info from '@/components/pages/portfolio/Info';
import { PORTFOLIO_PROJECTS } from '@/constants';
import { Project } from '@/types';

const INFO = PORTFOLIO_PROJECTS[Project.SoohoIoHomepage];

const SoohoIoHomepage = () => {
  return (
    <Container>
      <Info {...INFO}></Info>

      <Img src="/images/screenshots/soohoio/home.png" width="50%"></Img>

      <Text.P>수호아이오 홈페이지 리뉴얼 작업을 하였습니다.</Text.P>

      <Ul>
        <Li>모바일 반응형 작업</Li>
        <Li>다국어 지원</Li>
        <Li>GA4 연동</Li>
        <Li>SEO 최적화</Li>
        <Li>블로그 API (Ghost) 연동</Li>
      </Ul>
    </Container>
  );
};

export default SoohoIoHomepage;

const ImageWrapper = styled.div`
  ${tw`flex-1`};
`;
