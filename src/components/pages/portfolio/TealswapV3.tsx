import React from 'react';

import Flex from '@/components/common/Flex';
import Img from '@/components/common/Img';
import { Li, Ul } from '@/components/common/List';
import Spacing from '@/components/common/Spacing';
import Text from '@/components/common/Text';
import Info from '@/components/pages/portfolio/Info';
import { PORTFOLIO_PROJECTS } from '@/constants';
import { Project } from '@/types';

const INFO = PORTFOLIO_PROJECTS[Project.TealswapV3];

const TealswapV3 = () => {
  return (
    <>
      <Info {...INFO}></Info>

      <Spacing height={40}></Spacing>

      <Flex gap={16}>
        <Flex flex={1}>
          <Img
            src="/images/screenshots/tealswapv3/add-liquidity.png"
            width="100%"
          ></Img>
        </Flex>
        <Flex flex={1}>
          <Img
            src="/images/screenshots/tealswapv3/remove-liquidity.png"
            width="100%"
          ></Img>
        </Flex>
      </Flex>

      <Spacing height={24}></Spacing>

      <Text.P>
        Tealswap은 Oasys chain의 올인원 DEX 서비스이며, Uniswap v3 기능 개발을
        담당하였습니다.
      </Text.P>

      <Spacing height={24}></Spacing>

      <Ul>
        <Li>Uniswap V3 liquidity chart 구현</Li>
        <Li>Pool 생성 기능 개발</Li>
        <Li>Position 추가 기능 개발</Li>
        <Li>Position 규모 조정 기능 개발</Li>
        <Li>Modal system 구축</Li>
        <Li>Incentive program service 개발</Li>
      </Ul>
    </>
  );
};

export default TealswapV3;