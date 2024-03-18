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

const INFO = PORTFOLIO_PROJECTS[Project.CashierestWeb];

const CashierestWeb = () => {
  return (
    <>
      <Info {...INFO}></Info>
      <Img src="/images/screenshots/cashierest/trade.png" width="100%"></Img>

      <Img src="/images/screenshots/cashierest/coin-list.png" width="30%"></Img>
      <Img src="/images/screenshots/cashierest/orderbook.png" width="30%"></Img>

      <Img src="/images/screenshots/cashierest/chart.png" width="100%"></Img>

      <Img
        src="/images/screenshots/cashierest/mobile-home.png"
        width="20%"
      ></Img>
      <Img
        src="/images/screenshots/cashierest/mobile-coin-list.png"
        width="20%"
      ></Img>
      <Img
        src="/images/screenshots/cashierest/mobile-order.png"
        width="20%"
      ></Img>
      <Img
        src="/images/screenshots/cashierest/mobile-orderbook.png"
        width="20%"
      ></Img>
      <Img
        src="/images/screenshots/cashierest/mobile-chart.png"
        width="20%"
      ></Img>
    </>
  );
};

export default CashierestWeb;

const Wrapper = styled.div`
  ${tw``};
`;
