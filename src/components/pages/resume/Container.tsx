import React, { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;

const Wrapper = styled.div`
  ${tw`flex flex-col`};
  ${tw`mobile:gap-6`};
  ${tw`desktop:gap-12`};
`;
