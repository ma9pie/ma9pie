import React from 'react';
import tw, { styled } from 'twin.macro';

import Text from '@/components/common/Text';
import Divider from '@/components/layouts/Divider';
import CashierestMobile from '@/components/pages/portfolio/CashierestMobile';
import CashierestWeb from '@/components/pages/portfolio/CashierestWeb';
import CryptoErp from '@/components/pages/portfolio/CryptoErp';
import FEInterview from '@/components/pages/portfolio/FEInterview';
import Info from '@/components/pages/portfolio/Info';
import Mitosis from '@/components/pages/portfolio/Mitosis';
import Polypoli from '@/components/pages/portfolio/Polypoli';
import PPGG from '@/components/pages/portfolio/PPGG';
import PurpleBridge from '@/components/pages/portfolio/PurpleBridge';
import SoohoIoHomepage from '@/components/pages/portfolio/SoohoIoHomepage';
import TealswapV3 from '@/components/pages/portfolio/TealswapV3';
import TodoListApp from '@/components/pages/portfolio/TodoListApp';
import VivaLeva from '@/components/pages/portfolio/VivaLeva';

const SECTIONS = [
  CryptoErp,
  TealswapV3,
  SoohoIoHomepage,
  Mitosis,
  VivaLeva,
  PurpleBridge,
  CashierestWeb,
  CashierestMobile,
  TodoListApp,
  PPGG,
  FEInterview,
  Polypoli,
];

const Portfolio = () => {
  return (
    <Wrapper>
      <Container>
        <Text.T1>Portfolio</Text.T1>
        <Info></Info>
      </Container>

      {SECTIONS.map((Component, idx) => (
        <section key={idx}>
          <Divider></Divider>
          <Component></Component>
        </section>
      ))}
    </Wrapper>
  );
};

export default Portfolio;

const Wrapper = styled.div`
  ${tw``};
`;
const Container = styled.div`
  ${tw`flex flex-col gap-6`};
`;
