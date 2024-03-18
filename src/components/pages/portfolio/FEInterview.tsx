import React from 'react';
import tw, { styled } from 'twin.macro';

import Flex from '@/components/common/Flex';
import Img from '@/components/common/Img';
import { Li, Ul } from '@/components/common/List';
import Spacing from '@/components/common/Spacing';
import Text from '@/components/common/Text';
import Info from '@/components/pages/portfolio/Info';
import { PORTFOLIO_PROJECTS } from '@/constants';
import { Project } from '@/types';

const INFO = PORTFOLIO_PROJECTS[Project.FEInterview];

const FEInterview = () => {
  return (
    <>
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
    </>
  );
};

export default FEInterview;

const Wrapper = styled.div`
  ${tw``};
`;
