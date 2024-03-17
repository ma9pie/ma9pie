import React from 'react';
import tw, { styled } from 'twin.macro';

import Img from '@/components/common/Img';
import Info from '@/components/pages/portfolio/Info';
import { PORTFOLIO_PROJECTS } from '@/constants';
import { Project } from '@/types';

const INFO = PORTFOLIO_PROJECTS[Project.VivaLeva];

const VivaLeva = () => {
  return (
    <Wrapper>
      <Info {...INFO}></Info>
      <Img src="/images/screenshots/vivaleva/home.png" width="100%"></Img>
      <Img src="/images/screenshots/vivaleva/lend.png" width="100%"></Img>
      <Img src="/images/screenshots/vivaleva/stake.png" width="100%"></Img>
      <Img src="/images/screenshots/vivaleva/farm.png" width="100%"></Img>
      <Img src="/images/screenshots/vivaleva/portfolio.png" width="100%"></Img>
      <Img src="/images/screenshots/vivaleva/farm-modal.png" width="100%"></Img>
    </Wrapper>
  );
};

export default VivaLeva;

const Wrapper = styled.div`
  ${tw``};
`;
