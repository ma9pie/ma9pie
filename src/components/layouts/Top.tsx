import React from 'react';
import tw, { styled } from 'twin.macro';

import PrintButton from '@/components/common/buttons/PrintButton';

const Top = () => {
  return (
    <Wrapper>
      <PrintButton></PrintButton>
    </Wrapper>
  );
};

export default Top;

const Wrapper = styled.div`
  ${tw`flex justify-end items-center`};
`;
