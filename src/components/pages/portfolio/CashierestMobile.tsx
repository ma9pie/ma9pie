import React from 'react';
import tw, { styled } from 'twin.macro';

import Img from '@/components/common/Img';
import Info from '@/components/pages/portfolio/Info';
import { PORTFOLIO_PROJECTS } from '@/constants';
import { Project } from '@/types';

const INFO = PORTFOLIO_PROJECTS[Project.CashierestMobile];

const CashierestMobile = () => {
  return (
    <Wrapper>
      <Info {...INFO}></Info>
    </Wrapper>
  );
};

export default CashierestMobile;

const Wrapper = styled.div`
  ${tw``};
`;
