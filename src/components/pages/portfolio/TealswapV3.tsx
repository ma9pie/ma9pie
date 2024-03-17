import React from 'react';
import tw, { styled } from 'twin.macro';

import Img from '@/components/common/Img';
import Info from '@/components/pages/portfolio/Info';
import { PORTFOLIO_PROJECTS } from '@/constants';
import { Project } from '@/types';

const INFO = PORTFOLIO_PROJECTS[Project.TealswapV3];

const TealswapV3 = () => {
  return (
    <Wrapper>
      <Info {...INFO}></Info>
      <Img
        src="/images/screenshots/tealswapv3/add-liquidity.png"
        width="100%"
      ></Img>
      <Img
        src="/images/screenshots/tealswapv3/remove-liquidity.png"
        width="100%"
      ></Img>
      <Img
        src="/images/screenshots/tealswapv3/host-incentive-program.png"
        width="100%"
      ></Img>
    </Wrapper>
  );
};

export default TealswapV3;

const Wrapper = styled.div`
  ${tw``};
`;
