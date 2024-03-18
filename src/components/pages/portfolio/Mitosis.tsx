import React from 'react';

import Img from '@/components/common/Img';
import { Li, Ul } from '@/components/common/List';
import Spacing from '@/components/common/Spacing';
import Text from '@/components/common/Text';
import Info from '@/components/pages/portfolio/Info';
import { PORTFOLIO_PROJECTS } from '@/constants';
import { Project } from '@/types';

const INFO = PORTFOLIO_PROJECTS[Project.Mitosis];

const Mitosis = () => {
  return (
    <>
      <Info {...INFO}></Info>

      <Spacing height={40}></Spacing>

      <Img src="/images/screenshots/mitosis/trade.png" width="50%"></Img>

      <Spacing height={24}></Spacing>

      <Ul>
        <Li>Tradingview chart Datafeed 구축</Li>
        <Li>Tradingview chart customize option 추가</Li>
      </Ul>

      <Spacing height={24}></Spacing>

      <Text.P>
        타 부서에서 새로운 프로젝트에 tradingview chart 구축 관련하여 어려움을
        겪고 있어 적극적으로 기술적 지원을 하였습니다. 베타 버전에서는 추세선만
        그려주는 스펙으로 간단하게 Datafeed를 구축 및 설계를 하고, customizing
        관련 코드에 상세한 주석을 추가하여 도움을 주었습니다.
      </Text.P>
    </>
  );
};

export default Mitosis;
