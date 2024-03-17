import React from 'react';
import tw, { styled } from 'twin.macro';

import Img from '@/components/common/Img';
import Info from '@/components/pages/portfolio/Info';
import { PORTFOLIO_PROJECTS } from '@/constants';
import { Project } from '@/types';

const INFO = PORTFOLIO_PROJECTS[Project.Mitosis];

const Mitosis = () => {
  return (
    <Wrapper>
      <Info {...INFO}></Info>
      <Img src="/images/screenshots/mitosis/trade.png" width="100%"></Img>
    </Wrapper>
  );
};

export default Mitosis;

const Wrapper = styled.div`
  ${tw``};
`;
