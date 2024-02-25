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
      <Divider></Divider>
      <Introduction></Introduction>
      <Divider></Divider>
      <Type></Type>
      <Divider></Divider>
      <Experiences></Experiences>
      <Divider></Divider>
      <Skills></Skills>
      <Divider></Divider>
      <Blog></Blog>
      <Divider></Divider>
      <Articles></Articles>
      <Divider></Divider>
      <Education></Education>
    </Wrapper>
  );
};

export default Resume;

const Wrapper = styled.div`
  ${tw`flex flex-col`};
`;
const Divider = styled.div`
  ${tw`w-full h-px bg-neutral-200`};
  ${tw`mobile:my-12`};
  ${tw`desktop:my-20`};
`;
