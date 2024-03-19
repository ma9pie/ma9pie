import React from 'react';
import tw, { styled } from 'twin.macro';

import Spacing from '@/components/common/Spacing';
import Text from '@/components/common/Text';
import Divider from '@/components/layouts/Divider';
import CashierestMobile from '@/components/pages/portfolio/CashierestMobile';
import CashierestWeb from '@/components/pages/portfolio/CashierestWeb';
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
  {
    key: 'tealswapV3',
    Component: TealswapV3,
  },
  {
    key: 'sooho-io-homepage',
    Component: SoohoIoHomepage,
  },
  {
    key: 'mitosis',
    Component: Mitosis,
  },
  {
    key: 'vivaleva',
    Component: VivaLeva,
  },
  {
    key: 'purple-bridge',
    Component: PurpleBridge,
  },
  {
    key: 'cashierest-web',
    Component: CashierestWeb,
  },
  {
    key: 'cashierest-mobile',
    Component: CashierestMobile,
  },
  {
    key: 'todo-list-app',
    Component: TodoListApp,
  },
  {
    key: 'ppgg',
    Component: PPGG,
  },
  {
    key: 'fe-interview',
    Component: FEInterview,
  },
  {
    key: 'polypoli',
    Component: Polypoli,
  },
];

const Portfolio = () => {
  return (
    <Wrapper>
      <Container>
        <Text.T1>Portfolio</Text.T1>
        <Info></Info>
      </Container>

      {SECTIONS.map(({ key, Component }, idx) => (
        <section key={key}>
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
