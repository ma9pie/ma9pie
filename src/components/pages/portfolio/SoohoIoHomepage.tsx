import React from 'react';
import tw, { styled } from 'twin.macro';

import Img from '@/components/common/Img';
import Info from '@/components/pages/portfolio/Info';
import { PORTFOLIO_PROJECTS } from '@/constants';
import { Project } from '@/types';

const INFO = PORTFOLIO_PROJECTS[Project.SoohoIoHomepage];

const SoohoIoHomepage = () => {
  return (
    <Wrapper>
      <Info {...INFO}></Info>
      <Img src="/images/screenshots/soohoio/home.png" width="100%"></Img>
      <Img src="/images/screenshots/soohoio/blog.png" width="100%"></Img>
    </Wrapper>
  );
};

export default SoohoIoHomepage;

const Wrapper = styled.div`
  ${tw``};
`;
