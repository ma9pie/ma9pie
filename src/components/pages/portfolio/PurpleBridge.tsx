import React from 'react';
import tw, { styled } from 'twin.macro';

import Flex from '@/components/common/Flex';
import Grid from '@/components/common/Grid';
import Img from '@/components/common/Img';
import { Li, Ul } from '@/components/common/List';
import Spacing from '@/components/common/Spacing';
import Text from '@/components/common/Text';
import Info from '@/components/pages/portfolio/Info';
import { PORTFOLIO_PROJECTS } from '@/constants';
import { Project } from '@/types';

const INFO = PORTFOLIO_PROJECTS[Project.PurpleBridge];

const PurpleBridge = () => {
  return (
    <>
      <Info {...INFO}></Info>

      <Spacing height={40}></Spacing>

      <Grid col={2} gap={16}>
        <Img
          src="/images/screenshots/purplebridge/bridge.png"
          width="100%"
        ></Img>
        <Img src="/images/screenshots/purplebridge/swap.png" width="100%"></Img>
        <Img
          src="/images/screenshots/purplebridge/add-liquidity.png"
          width="100%"
        ></Img>
        <Img
          src="/images/screenshots/purplebridge/remove-liquidity.png"
          width="100%"
        ></Img>
      </Grid>

      <Spacing height={16}></Spacing>

      <Img
        src="/images/screenshots/purplebridge/dashboard.png"
        width="75%"
      ></Img>
    </>
  );
};

export default PurpleBridge;

const Wrapper = styled.div`
  ${tw``};
`;
