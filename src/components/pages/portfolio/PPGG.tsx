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

const INFO = PORTFOLIO_PROJECTS[Project.PPGG];

const PPGG = () => {
  return (
    <>
      <Info {...INFO}></Info>
      <Img src="/images/screenshots/ppgg/home.png" width="20%"></Img>
      <Img src="/images/screenshots/ppgg/login.png" width="20%"></Img>
      <Img src="/images/screenshots/ppgg/player-hsitory.png" width="20%"></Img>
      <Img src="/images/screenshots/ppgg/player-chart.png" width="20%"></Img>

      <Img src="/images/screenshots/ppgg/tos.png" width="20%"></Img>
      <Img src="/images/screenshots/ppgg/signup-input.png" width="20%"></Img>
      <Img src="/images/screenshots/ppgg/select-profile.png" width="20%"></Img>
      <Img
        src="/images/screenshots/ppgg/signup-completed.png"
        width="20%"
      ></Img>

      <Img src="/images/screenshots/ppgg/architecture.png" width="100%"></Img>
    </>
  );
};

export default PPGG;

const Wrapper = styled.div`
  ${tw``};
`;
