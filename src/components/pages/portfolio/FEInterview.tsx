import React from 'react';
import tw, { styled } from 'twin.macro';

import Img from '@/components/common/Img';
import Info from '@/components/pages/portfolio/Info';
import { PORTFOLIO_PROJECTS } from '@/constants';
import { Project } from '@/types';

const INFO = PORTFOLIO_PROJECTS[Project.FEInterview];

const FEInterview = () => {
  return (
    <Wrapper>
      <Info {...INFO}></Info>
      <Img
        src="/images/screenshots/fe-interview/home-dark.png"
        width="30%"
      ></Img>
      <Img
        src="/images/screenshots/fe-interview/home-light.png"
        width="30%"
      ></Img>

      <Img
        src="/images/screenshots/fe-interview/visitors.png"
        width="50%"
      ></Img>
      <Img
        src="/images/screenshots/fe-interview/event-label.png"
        width="50%"
      ></Img>
      <Img
        src="/images/screenshots/fe-interview/event-category.png"
        width="50%"
      ></Img>
    </Wrapper>
  );
};

export default FEInterview;

const Wrapper = styled.div`
  ${tw``};
`;
