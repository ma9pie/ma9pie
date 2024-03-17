import React from 'react';
import tw, { styled } from 'twin.macro';

import Img from '@/components/common/Img';
import Info from '@/components/pages/portfolio/Info';
import { PORTFOLIO_PROJECTS } from '@/constants';
import { Project } from '@/types';

const INFO = PORTFOLIO_PROJECTS[Project.PurpleBridge];

const PurpleBridge = () => {
  return (
    <Wrapper>
      <Info {...INFO}></Info>
      <Img src="/images/screenshots/purplebridge/bridge.png" width="100%"></Img>
      <Img src="/images/screenshots/purplebridge/swap.png" width="100%"></Img>
      <Img
        src="/images/screenshots/purplebridge/add-liquidity.png"
        width="100%"
      ></Img>
      <Img
        src="/images/screenshots/purplebridge/remove-liquidity.png"
        width="100%"
      ></Img>
      <Img
        src="/images/screenshots/purplebridge/dashboard.png"
        width="100%"
      ></Img>
    </Wrapper>
  );
};

export default PurpleBridge;

const Wrapper = styled.div`
  ${tw``};
`;
