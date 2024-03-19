import React from 'react';
import tw, { styled } from 'twin.macro';

const Divider = () => {
  return <Line></Line>;
};

export default Divider;

const Line = styled.div`
  ${tw`w-full h-px bg-neutral-200`};
  ${tw`mobile:my-8`};
  ${tw`desktop:my-16`};
`;
