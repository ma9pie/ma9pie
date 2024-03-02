import React, { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

interface Props {
  children: ReactNode;
}

const Content = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Content;

const Wrapper = styled.div`
  ${tw`flex flex-col`};
  ${tw`mobile:gap-6`};
  ${tw`desktop:gap-12`};
`;
