import React, { ReactNode, RefObject } from 'react';
import tw, { styled } from 'twin.macro';

interface Props {
  ref?: RefObject<any>;
  children: ReactNode;
}

const PDFLayout = ({ ref, children }: Props) => {
  return <Wrapper ref={ref}>{children}</Wrapper>;
};

export default PDFLayout;

const Wrapper = styled.div`
  ${tw`flex-1 flex flex-col p-6`};
`;
