import React from 'react';
import tw, { styled } from 'twin.macro';

import Img from '@/components/common/Img';
import Info from '@/components/pages/portfolio/Info';
import { PORTFOLIO_PROJECTS } from '@/constants';
import { Project } from '@/types';

const INFO = PORTFOLIO_PROJECTS[Project.CashierestWeb];

const CashierestWeb = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default CashierestWeb;

const Wrapper = styled.div`
  ${tw``};
`;
