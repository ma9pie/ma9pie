import React from 'react';
import tw, { styled } from 'twin.macro';

import Grid from '@/components/common/Grid';
import Img from '@/components/common/Img';
import Spacing from '@/components/common/Spacing';
import Text from '@/components/common/Text';
import ProjectInfo from '@/components/pages/portfolio/ProjectInfo';
import { PORTFOLIO_PROJECTS } from '@/constants';
import { Project } from '@/types';

const PROJECT_INFO = PORTFOLIO_PROJECTS[Project.FEInterview];

const IMAGE_URL_LIST_0 = [
  '/images/screenshots/fe-interview/home-dark.png',
  '/images/screenshots/fe-interview/home-light.png',
];
const IMAGE_URL_LIST_1 = [
  '/images/screenshots/fe-interview/visitors.png',
  '/images/screenshots/fe-interview/event-label.png',
  '/images/screenshots/fe-interview/event-category.png',
];

const FEInterview = () => {
  return (
    <>
      <ProjectInfo {...PROJECT_INFO}></ProjectInfo>

      <Spacing height={24}></Spacing>

      <Grid col={5} gap={16}>
        {IMAGE_URL_LIST_0.map((url, idx) => (
          <ImageWrapper key={idx}>
            <Img src={url}></Img>
          </ImageWrapper>
        ))}
      </Grid>

      <Spacing height={8}></Spacing>

      <Text.P>
        Frontend를 지망하는 취업 준비생을 위한 면접 질문 목록들을 모아놓은
        서비스입니다. 반응형 모바일 웹앱으로 개발을 하였고, PWA를 적용하여
        모바일에서도 앱을 설치하여 이용할 수 있도록 하였습니다.
      </Text.P>

      <Spacing height={24}></Spacing>

      <Grid col={5} gap={16}>
        {IMAGE_URL_LIST_1.map((url, idx) => (
          <ImageWrapper key={idx}>
            <Img src={url}></Img>
          </ImageWrapper>
        ))}
      </Grid>

      <Spacing height={8}></Spacing>

      <Text.P>
        그리고 GA4를 연동하여 User가 어떤 질문을 많이 확인하고 검색하는지에 대한
        event들을 tracking 하였습니다.
      </Text.P>
    </>
  );
};

export default FEInterview;

const ImageWrapper = styled.div`
  ${tw`shadow-lg`};
`;
