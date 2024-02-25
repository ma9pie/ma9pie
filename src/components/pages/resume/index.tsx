import React from 'react';
import tw, { styled } from 'twin.macro';

import Articles from '@/components/pages/resume/Articles';
import Blog from '@/components/pages/resume/Blog';
import Education from '@/components/pages/resume/Education';
import Experiences from '@/components/pages/resume/Experiences';
import Info from '@/components/pages/resume/Info';
import Introduction from '@/components/pages/resume/Introduction';
import Skills from '@/components/pages/resume/Skills';
import Type from '@/components/pages/resume/Type';

const Resume = () => {
  return (
    <Wrapper>
      <Info></Info>
      <Introduction></Introduction>
      <Type></Type>
      <Experiences></Experiences>
      <Skills></Skills>
      <Blog></Blog>
      <Articles></Articles>
      <Education></Education>
    </Wrapper>
  );
};

export default Resume;

const Wrapper = styled.div`
  ${tw`flex flex-col`};
  ${tw`mobile:gap-12`};
  ${tw`desktop:gap-20`};
`;
