import React, { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

interface Props {
  children: ReactNode;
}

const PDFLayout = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PDFLayout;

const Wrapper = styled.div`
  ${tw`flex-1 flex flex-col px-16 py-20`};
`;
