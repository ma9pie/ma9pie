import React from 'react';
import tw, { styled } from 'twin.macro';

import Img from '@/components/common/Img';
import Info from '@/components/pages/portfolio/Info';
import { PORTFOLIO_PROJECTS } from '@/constants';
import { Project } from '@/types';

const INFO = PORTFOLIO_PROJECTS[Project.Polypoli];

const Polypoli = () => {
  return (
    <Wrapper>
      <Info {...INFO}></Info>
      <Img src="/images/screenshots/polypoli/login.png" width="50%"></Img>
      <Img src="/images/screenshots/polypoli/feed.png" width="50%"></Img>
      <Img src="/images/screenshots/polypoli/members.png" width="50%"></Img>
      <Img src="/images/screenshots/polypoli/follow.png" width="50%"></Img>

      <Img src="/images/screenshots/polypoli/details.png" width="50%"></Img>
      <Img src="/images/screenshots/polypoli/bill.png" width="50%"></Img>
      <Img src="/images/screenshots/polypoli/barchart.png" width="50%"></Img>
      <Img src="/images/screenshots/polypoli/search.png" width="50%"></Img>

      <Img
        src="/images/screenshots/polypoli/architecture.png"
        width="100%"
      ></Img>
    </Wrapper>
  );
};

export default Polypoli;

const Wrapper = styled.div`
  ${tw``};
`;
