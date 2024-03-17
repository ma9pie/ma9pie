import React from 'react';
import tw, { styled } from 'twin.macro';

import Info from '@/components/pages/portfolio/Info';
import { PORTFOLIO_PROJECTS } from '@/constants';
import { Project } from '@/types';

const INFO = PORTFOLIO_PROJECTS[Project.PurpleBridge];

const PurpleBridge = () => {
  return (
    <Wrapper>
      <Info {...INFO}></Info>
    </Wrapper>
  );
};

export default PurpleBridge;

const Wrapper = styled.div`
  ${tw``};
`;
