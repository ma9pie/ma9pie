import React, { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';

interface Props {
  children: ReactNode;
}

const PageLayout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Header></Header>
      <Content>{children}</Content>
      <Footer></Footer>
    </Wrapper>
  );
};

export default PageLayout;

const Wrapper = styled.div`
  ${tw`relative flex flex-col`};
`;
const Content = styled.div`
  ${tw`flex-1 flex flex-col max-w-[800px] w-full mx-auto`};
  ${tw`mobile:(px-4 py-24)`};
  ${tw`desktop:(px-6 py-40)`};
`;
